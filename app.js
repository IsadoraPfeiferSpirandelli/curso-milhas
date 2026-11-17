(function () {
  "use strict";
  var C = window.CURSO;
  var MODS = C.modules.slice().sort(function (a, b) { return a.id - b.id; });
  var app = document.getElementById("app");
  var KEY = "curso-milhas-v1";

  /* ---------- Armazenamento (só neste navegador) ---------- */
  var store = { done: {}, tasks: {}, quiz: {}, meta: {}, rotas: null, diag: {}, proj: {}, projSteps: {} };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) { var parsed = JSON.parse(raw); for (var k in parsed) store[k] = parsed[k]; }
  } catch (e) { /* sem armazenamento: segue em memória */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }

  var ui = { lesson: {}, tab: {} };

  /* ---------- Utilidades ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function num(v) {
    if (v == null) return NaN;
    var s = String(v).trim().replace(/\s/g, "").replace(/R\$/i, "");
    if (s.indexOf(",") > -1) s = s.replace(/\./g, "").replace(",", ".");
    else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
    return parseFloat(s);
  }
  function brl(n, d) { if (!isFinite(n)) return "—"; return "R$ " + n.toLocaleString("pt-BR", { minimumFractionDigits: d == null ? 2 : d, maximumFractionDigits: d == null ? 2 : d }); }
  function int(n) { if (!isFinite(n)) return "—"; return Math.round(n).toLocaleString("pt-BR"); }
  function toast(msg) {
    var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }
  var REF = { smiles: ["Smiles", 16], latam: ["LATAM Pass", 25.5], azul: ["Azul Fidelidade", 16] };
  function refOptions(sel) {
    var h = "";
    for (var k in REF) h += '<option value="' + k + '"' + (sel === k ? " selected" : "") + ">" + REF[k][0] + " · " + brl(REF[k][1], REF[k][1] % 1 ? 2 : 0) + "</option>";
    return h;
  }

  /* ---------- Progresso ---------- */
  function allLessons() { var r = []; MODS.forEach(function (m) { m.lessons.forEach(function (l) { r.push(l.id); }); }); return r; }
  function modProgress(m) {
    var d = m.lessons.filter(function (l) { return store.done[l.id]; }).length;
    return { done: d, total: m.lessons.length, pct: m.lessons.length ? d / m.lessons.length : 0 };
  }
  function courseMiles() {
    var miles = 0;
    allLessons().forEach(function (id) { if (store.done[id]) miles += 1000; });
    for (var t in store.tasks) if (store.tasks[t]) miles += 300;
    MODS.forEach(function (m) { m.quiz.forEach(function (q, i) { if (store.quiz[m.id + "-" + i] === q.a) miles += 500; }); });
    return miles;
  }
  function statusChip(m) {
    var p = modProgress(m);
    if (p.done === p.total) return '<span class="chip done">Concluído</span>';
    if (p.done > 0) return '<span class="chip going">Em andamento</span>';
    return '<span class="chip new">Embarque aberto</span>';
  }
  function nextLesson() {
    for (var i = 0; i < MODS.length; i++) {
      var m = MODS[i];
      for (var j = 0; j < m.lessons.length; j++) if (!store.done[m.lessons[j].id]) return { m: m, j: j };
    }
    return null;
  }

  /* ---------- Início ---------- */
  function renderHome() {
    var all = allLessons(), doneCount = all.filter(function (id) { return store.done[id]; }).length;
    var pct = all.length ? doneCount / all.length : 0;
    var dest = (store.meta.destino || "").trim();
    var code = dest ? dest.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase() : "???";
    var nx = nextLesson();
    var cta = nx ? '<a class="btn" href="#modulo-' + nx.m.id + '" data-goto-lesson="' + nx.j + '" data-goto-mod="' + nx.m.id + '">' + (doneCount ? "Continuar: aula " + nx.m.lessons[nx.j].id : "Começar pelo Módulo 0") + "</a>" : '<a class="btn sage" href="#projeto">Ir pro projeto final</a>';

    var h = '<section class="hero">' +
      '<div><div class="eyebrow">Do zero ao avançado · 11 módulos</div>' +
      '<h1>Viajar mais, <em>pagando menos</em> por cada milha.</h1>' +
      "<p>Um curso pra estudar no almoço: aulas de 10 a 25 minutos, calculadoras prontas e uma tarefa prática no fim de cada módulo.</p>" +
      '<div class="hero-actions">' + cta + '<a class="btn ghost" href="#ferramentas">Abrir as calculadoras</a></div></div>' +
      '<div class="route-card" aria-label="Seu progresso no curso">' +
      '<div class="route-head"><span>Seu voo</span><span>' + Math.round(pct * 100) + "% do trajeto</span></div>" +
      '<svg class="route-svg" viewBox="0 0 400 130" role="img" aria-label="Rota de Uberlândia até a sua meta, com o avião em ' + Math.round(pct * 100) + '% do caminho">' +
      '<path id="arc" d="M20 110 Q200 -30 380 110" fill="none" stroke="var(--line)" stroke-width="2.5" stroke-dasharray="2 8" stroke-linecap="round"/>' +
      '<path id="arcDone" d="M20 110 Q200 -30 380 110" fill="none" stroke="var(--rose)" stroke-width="2.5" stroke-linecap="round"/>' +
      '<circle cx="20" cy="110" r="6" fill="var(--rose)"/><circle cx="380" cy="110" r="6" fill="var(--surface)" stroke="var(--lav)" stroke-width="2.5"/>' +
      '<g id="plane"><circle r="15" fill="var(--surface)" stroke="var(--rose-soft)" stroke-width="2"/><path d="M-8 3l16-6.5-4 9.5-3-3.6-3.9 1.8.9-3.4z" fill="var(--rose)"/></g>' +
      "</svg>" +
      '<div class="route-cities"><div><b>UDI</b><small>Uberlândia</small></div><div style="text-align:right"><b>' + esc(code) + "</b><small>" + (dest ? esc(dest) : '<a href="#modulo-0" data-goto-mod="0" data-goto-lesson="2">Defina sua meta</a>') + "</small></div></div>" +
      '<div class="route-stats"><div class="stat"><b>' + doneCount + "/" + all.length + '</b><span>aulas concluídas</span></div>' +
      '<div class="stat"><b>' + int(courseMiles()) + '</b><span>milhas do curso</span></div>' +
      '<div class="stat"><b>' + MODS.filter(function (m) { return modProgress(m).pct === 1; }).length + '/11</b><span>módulos fechados</span></div></div>' +
      "</div></section>";

    h += '<div class="section-head"><h2>Seus cartões de embarque</h2><p>Os módulos 0 a 6 são em sequência. Do 7 em diante, siga sua meta.</p></div><div class="passes">';
    MODS.forEach(function (m) {
      var p = modProgress(m);
      var mins = m.lessons.reduce(function (s, l) { return s + l.min; }, 0);
      h += '<a class="pass" href="#modulo-' + m.id + '">' +
        '<div class="pass-main"><div class="pass-top"><span>' + m.code + "</span><span>" + m.lessons.length + " aulas · " + mins + " min</span></div>" +
        "<h3>" + esc(m.title) + "</h3><p>" + esc(m.tagline) + "</p>" + statusChip(m) +
        '<div class="pass-bar"><i style="width:' + Math.round(p.pct * 100) + '%"></i></div></div>' +
        '<div class="pass-stub"><span>Portão</span><b>' + m.gate + "</b><span>" + p.done + "/" + p.total + "</span></div></a>";
    });
    h += "</div>";
    h += '<section class="backup" aria-labelledby="bk-t"><h3 id="bk-t">Backup do progresso</h3>' +
      "<p>Seu progresso fica salvo neste aparelho. Pra levar pra outro aparelho ou guardar uma cópia, copie o código abaixo e cole no outro aparelho em \"Restaurar\".</p>" +
      '<div class="row"><button class="btn ghost" id="bkCopy">Copiar meu código</button><button class="btn ghost" id="bkShow">Restaurar de um código</button></div>' +
      '<div id="bkArea" hidden><label for="bkIn" class="note">Cole o código aqui:</label><textarea id="bkIn" spellcheck="false"></textarea><div class="row" style="margin-top:8px"><button class="btn" id="bkGo">Restaurar progresso</button></div></div></section>';
    h += '<p class="footer-note">Valores e regras dos programas mudam: confira sempre no site oficial antes de agir.</p>';
    app.innerHTML = h;
    bindBackup();

    var arc = document.getElementById("arc"), done = document.getElementById("arcDone"), plane = document.getElementById("plane");
    if (arc && arc.getTotalLength) {
      var L = arc.getTotalLength(), at = L * Math.max(0.02, pct);
      done.setAttribute("stroke-dasharray", at + " " + L);
      var pt = arc.getPointAtLength(at), pt2 = arc.getPointAtLength(Math.min(L, at + 1));
      var ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI + 22;
      plane.setAttribute("transform", "translate(" + pt.x + " " + pt.y + ") rotate(" + ang + ")");
    }
  }

  /* ---------- Backup ---------- */
  function encodeStore() { return btoa(unescape(encodeURIComponent(JSON.stringify(store)))); }
  function decodeStore(code) { return JSON.parse(decodeURIComponent(escape(atob(code.trim())))); }
  function bindBackup() {
    document.getElementById("bkCopy").addEventListener("click", function () {
      var code = encodeStore();
      var done = function () { toast("Código copiado"); };
      try {
        navigator.clipboard.writeText(code).then(done, function () { showCode(code); });
      } catch (e) { showCode(code); }
    });
    document.getElementById("bkShow").addEventListener("click", function () {
      var a = document.getElementById("bkArea"); a.hidden = !a.hidden;
      if (!a.hidden) document.getElementById("bkIn").focus();
    });
    document.getElementById("bkGo").addEventListener("click", function () {
      var raw = document.getElementById("bkIn").value;
      try {
        var data = decodeStore(raw);
        if (!data || typeof data !== "object" || !("done" in data)) throw new Error("formato");
        for (var k in data) store[k] = data[k];
        save(); toast("Progresso restaurado"); renderHome();
      } catch (e) { toast("Código inválido. Copie de novo e tente outra vez."); }
    });
  }
  function showCode(code) {
    var a = document.getElementById("bkArea"); a.hidden = false;
    var t = document.getElementById("bkIn"); t.value = code; t.select();
    toast("Selecione e copie o código");
  }

  /* ---------- Módulo ---------- */
  function renderModule(id) {
    var m = MODS.filter(function (x) { return x.id === id; })[0];
    if (!m) return renderHome();
    var tab = ui.tab[id] || "aulas";
    var p = modProgress(m);
    var tasksDone = m.tasks.filter(function (t, i) { return store.tasks[m.id + "-" + i]; }).length;
    var h = '<section class="mod-head"><a class="back" href="#inicio">← Todos os módulos</a>' +
      '<div class="eyebrow">' + m.code + " · Portão " + m.gate + " · " + p.done + "/" + p.total + " aulas</div>" +
      "<h1>" + esc(m.title) + "</h1><p>" + esc(m.tagline) + "</p></section>" +
      '<div class="tabs" role="tablist">' +
      tabBtn("aulas", "Aulas", m.lessons.length, tab) +
      tabBtn("tarefas", "Tarefas", tasksDone + "/" + m.tasks.length, tab) +
      tabBtn("quiz", "Quiz", m.quiz.length, tab) +
      (m.sources.length ? tabBtn("fontes", "Fontes", m.sources.length, tab) : "") +
      "</div><div id='tabpanel'></div>";
    app.innerHTML = h;
    app.querySelectorAll(".tabs button").forEach(function (b) {
      b.addEventListener("click", function () { ui.tab[id] = b.dataset.tab; renderModule(id); });
    });
    var panel = document.getElementById("tabpanel");
    if (tab === "aulas") renderLessons(m, panel);
    else if (tab === "tarefas") renderTasks(m, panel);
    else if (tab === "quiz") renderQuiz(m, panel);
    else renderSources(m, panel);
  }
  function tabBtn(key, label, count, cur) {
    return '<button role="tab" data-tab="' + key + '" aria-selected="' + (cur === key) + '">' + label + '<span class="count">' + count + "</span></button>";
  }

  function renderLessons(m, panel) {
    var idx = ui.lesson[m.id] || 0;
    if (idx >= m.lessons.length) idx = 0;
    var l = m.lessons[idx];
    var list = '<nav class="lesson-list" aria-label="Aulas do módulo">';
    m.lessons.forEach(function (x, i) {
      list += '<button data-i="' + i + '" class="' + (store.done[x.id] ? "done" : "") + '" aria-current="' + (i === idx) + '">' +
        '<span class="dot">' + (store.done[x.id] ? "✓" : x.id.split(".")[1]) + "</span><span>" + esc(x.title) + "<small>" + x.min + " min</small></span></button>";
    });
    list += "</nav>";
    var isDone = !!store.done[l.id];
    var last = idx === m.lessons.length - 1;
    var art = '<article class="lesson"><div class="l-meta">Aula ' + l.id + " · " + l.min + " min de leitura</div><h2>" + esc(l.title) + "</h2>" + l.html +
      '<div class="lesson-foot"><button class="btn ' + (isDone ? "ghost" : "sage") + '" id="toggleDone">' + (isDone ? "✓ Concluída · desmarcar" : "Marcar como concluída") + "</button>" +
      '<div class="nav-btns">' + (idx > 0 ? '<button class="btn ghost" id="prevL">← Anterior</button>' : "") +
      (!last ? '<button class="btn" id="nextL">Próxima aula →</button>' : '<button class="btn" id="toTasks">Ir pras tarefas →</button>') + "</div></div></article>";
    panel.innerHTML = '<div class="lesson-layout">' + list + art + "</div>";

    panel.querySelectorAll(".lesson-list button").forEach(function (b) {
      b.addEventListener("click", function () { ui.lesson[m.id] = +b.dataset.i; renderModule(m.id); scrollTop(); });
    });
    document.getElementById("toggleDone").addEventListener("click", function () {
      store.done[l.id] = !isDone; save();
      if (!isDone) toast("+1.000 milhas do curso");
      if (!isDone && !last) ui.lesson[m.id] = idx + 1;
      renderModule(m.id); if (!isDone && !last) scrollTop();
    });
    var pv = document.getElementById("prevL"); if (pv) pv.addEventListener("click", function () { ui.lesson[m.id] = idx - 1; renderModule(m.id); scrollTop(); });
    var nx = document.getElementById("nextL"); if (nx) nx.addEventListener("click", function () { ui.lesson[m.id] = idx + 1; renderModule(m.id); scrollTop(); });
    var tt = document.getElementById("toTasks"); if (tt) tt.addEventListener("click", function () { ui.tab[m.id] = "tarefas"; renderModule(m.id); scrollTop(); });
    mountWidgets(panel);
  }

  function renderTasks(m, panel) {
    var h = '<div class="panel"><h2 style="font-family:var(--display);font-weight:600;font-size:1.8rem;margin:0 0 6px">Tarefas do módulo</h2><p style="color:var(--muted);margin:0 0 10px">Aprender fazendo. Cada tarefa concluída vale 300 milhas do curso.</p>';
    m.tasks.forEach(function (t, i) {
      var k = m.id + "-" + i, on = !!store.tasks[k];
      h += '<label class="task' + (on ? " checked" : "") + '"><input type="checkbox" id="task-' + k + '" data-k="' + k + '"' + (on ? " checked" : "") + "><span>" + esc(t) + "</span></label>";
    });
    h += "</div>";
    panel.innerHTML = h;
    panel.querySelectorAll("input[type=checkbox]").forEach(function (c) {
      c.addEventListener("change", function () {
        store.tasks[c.dataset.k] = c.checked; save();
        c.closest(".task").classList.toggle("checked", c.checked);
        if (c.checked) toast("+300 milhas do curso");
      });
    });
  }

  function renderQuiz(m, panel) {
    var h = '<div class="panel"><h2 style="font-family:var(--display);font-weight:600;font-size:1.8rem;margin:0 0 6px">Quiz rápido</h2><p style="color:var(--muted);margin:0">Cada acerto vale 500 milhas do curso.</p>';
    var answered = 0, right = 0;
    m.quiz.forEach(function (q, i) {
      var k = m.id + "-" + i, chosen = store.quiz[k];
      var has = typeof chosen === "number";
      if (has) { answered++; if (chosen === q.a) right++; }
      h += '<div class="q"><h4><span class="num">' + (i + 1) + "/" + m.quiz.length + "</span>" + esc(q.q) + '</h4><div class="opts">';
      q.o.forEach(function (o, j) {
        var cls = "";
        if (has && j === q.a) cls = "right"; else if (has && j === chosen) cls = "wrong";
        h += '<button class="opt ' + cls + '" data-k="' + k + '" data-j="' + j + '"' + (has ? " disabled" : "") + ">" + esc(o) + "</button>";
      });
      h += "</div>" + (has ? '<div class="explain"><strong>' + (chosen === q.a ? "Isso!" : "Quase.") + "</strong> " + esc(q.e) + "</div>" : "") + "</div>";
    });
    if (answered === m.quiz.length) {
      h += '<div class="score"><b>' + right + "/" + m.quiz.length + "</b><span>" + (right === m.quiz.length ? "Gabaritou. Pode seguir pro próximo módulo." : "Releia as aulas e tente de novo quando quiser.") + '</span><button class="btn ghost" id="redo" style="margin-left:auto">Refazer</button></div>';
    }
    h += "</div>";
    panel.innerHTML = h;
    panel.querySelectorAll(".opt").forEach(function (b) {
      b.addEventListener("click", function () {
        store.quiz[b.dataset.k] = +b.dataset.j; save();
        var q = m.quiz[+b.dataset.k.split("-")[1]];
        if (+b.dataset.j === q.a) toast("+500 milhas do curso");
        renderModule(m.id);
      });
    });
    var r = document.getElementById("redo");
    if (r) r.addEventListener("click", function () { m.quiz.forEach(function (q, i) { delete store.quiz[m.id + "-" + i]; }); save(); renderModule(m.id); });
  }

  function renderSources(m, panel) {
    var h = '<div class="panel"><h2 style="font-family:var(--display);font-weight:600;font-size:1.8rem;margin:0 0 6px">Fontes consultadas</h2><p style="color:var(--muted);margin:0 0 14px">Pesquisa feita em novembro de 2026. Regras e números mudam: confira antes de agir.</p><ul class="sources">';
    m.sources.forEach(function (s) { h += '<li><a href="' + esc(s.u) + '" target="_blank" rel="noopener">' + esc(s.t) + "</a></li>"; });
    panel.innerHTML = h + "</ul></div>";
  }

  /* ---------- Widgets interativos ---------- */
  function mountWidgets(root) {
    root.querySelectorAll("[data-widget]").forEach(function (el) {
      var f = W[el.dataset.widget]; if (f) f(el);
    });
  }
  function field(id, label, val, ph) {
    return '<div class="field"><label for="' + id + '">' + label + '</label><input id="' + id + '" inputmode="decimal" value="' + esc(val == null ? "" : val) + '" placeholder="' + (ph || "") + '"></div>';
  }
  function bind(el, fn) { el.querySelectorAll("input,select,textarea").forEach(function (i) { i.addEventListener("input", fn); }); fn(); }
  function v(el, id) { var x = el.querySelector("#" + id); return x ? x.value : ""; }

  var W = {
    diagnostico: function (el) {
      var cats = [["mercado", "Mercado"], ["comb", "Combustível / transporte"], ["contas", "Contas fixas"], ["assin", "Assinaturas"], ["online", "Compras online"], ["rest", "Restaurantes / delivery"], ["saude", "Saúde / farmácia"], ["outros", "Outros"]];
      var d = store.diag;
      var h = "<h4>Diagnóstico de gastos</h4><div class='fields'>";
      cats.forEach(function (c) { h += field("dg-" + c[0], c[1] + " (R$/mês)", d[c[0]], "0"); });
      h += "</div><div class='fields' style='margin-top:12px'>" + field("dg-pts", "Pontos por dólar do cartão", d.pts == null ? "1" : d.pts) + field("dg-usd", "Cotação do dólar (R$)", d.usd == null ? "5,50" : d.usd) +
        '<div class="field"><label for="dg-bonus">Bônus na transferência</label><select id="dg-bonus"><option value="0">Sem bônus</option><option value="0.5">50%</option><option value="0.8" selected>80%</option><option value="1">100%</option></select></div></div><div class="result" id="dg-out"></div>';
      el.innerHTML = h;
      bind(el, function () {
        var tot = 0;
        cats.forEach(function (c) { var x = v(el, "dg-" + c[0]); d[c[0]] = x; var n = num(x); if (isFinite(n)) tot += n; });
        d.pts = v(el, "dg-pts"); d.usd = v(el, "dg-usd"); store.diag = d; save();
        var pts = num(d.pts), usd = num(d.usd), b = num(v(el, "dg-bonus"));
        var ano = tot / usd * pts * 12;
        el.querySelector("#dg-out").innerHTML = "<small>Gasto mensal total: " + brl(tot) + "</small><div class='big'>" + int(ano) + " pontos/ano</div><small>Com o bônus escolhido: " + int(ano * (1 + b)) + " milhas por ano, valendo cerca de " + brl(ano * (1 + b) * 16 / 1000) + " a R$ 16 o milheiro.</small>";
      });
    },
    meta: function (el) {
      var m = store.meta;
      el.innerHTML = "<h4>Minha meta</h4><div class='fields'>" +
        '<div class="field"><label for="mt-destino">Pra onde?</label><input id="mt-destino" value="' + esc(m.destino || "") + '" placeholder="Ex.: Lisboa"></div>' +
        '<div class="field"><label for="mt-quando">Quando?</label><input id="mt-quando" value="' + esc(m.quando || "") + '" placeholder="Ex.: julho de 2027"></div>' +
        '<div class="field"><label for="mt-pessoas">Quantas pessoas?</label><input id="mt-pessoas" value="' + esc(m.pessoas || "") + '" placeholder="1"></div>' +
        '<div class="field"><label for="mt-cabine">Cabine</label><select id="mt-cabine"><option>Econômica</option><option' + (m.cabine === "Executiva" ? " selected" : "") + '>Executiva</option></select></div>' +
        '<div class="field"><label for="mt-flex">Datas flexíveis?</label><select id="mt-flex"><option>Sim</option><option' + (m.flex === "Não" ? " selected" : "") + '>Não</option></select></div>' +
        '<div class="field"><label for="mt-sec">Meta secundária</label><input id="mt-sec" value="' + esc(m.sec || "") + '" placeholder="Ex.: 2 viagens nacionais"></div></div>' +
        '<p class="note" style="margin:10px 0 0">O destino aparece no seu "voo" na página inicial.</p>';
      bind(el, function () {
        ["destino", "quando", "pessoas", "cabine", "flex", "sec"].forEach(function (k) { m[k] = v(el, "mt-" + k); });
        store.meta = m; save();
      });
    },
    milheiro: function (el) {
      el.innerHTML = "<h4>Vale usar milhas nessa passagem?</h4><div class='fields'>" +
        field("ml-preco", "Preço em dinheiro (R$)", "1.200") + field("ml-taxas", "Taxas no resgate (R$)", "60") + field("ml-milhas", "Milhas cobradas", "40.000") +
        '<div class="field"><label for="ml-prog">Programa</label><select id="ml-prog">' + refOptions("smiles") + "</select></div></div><div class='result' id='ml-out'></div>";
      bind(el, function () {
        var val = (num(v(el, "ml-preco")) - num(v(el, "ml-taxas"))) / num(v(el, "ml-milhas")) * 1000;
        var ref = REF[v(el, "ml-prog")][1], out = el.querySelector("#ml-out");
        out.className = "result " + (isFinite(val) ? (val >= ref ? "good" : "bad") : "");
        out.innerHTML = "<small>Valor do milheiro neste resgate</small><div class='big'>" + brl(val) + "</div>" +
          (isFinite(val) ? "<span class='verdict'>" + (val >= ref ? "Vale usar milhas: " + (val / ref).toFixed(1).replace(".", ",") + "× a referência de " + brl(ref) + "." : "Melhor pagar em dinheiro: abaixo da referência de " + brl(ref) + ".") + "</span>" : "<small>Preencha os três valores.</small>");
      });
    },
    cartao: function (el) {
      el.innerHTML = "<h4>Esse cartão compensa?</h4><div class='fields'>" +
        field("ct-gasto", "Gasto mensal (R$)", "3.000") + field("ct-pts", "Pontos por dólar", "2,2") + field("ct-usd", "Dólar (R$)", "5,50") +
        field("ct-bonus", "Bônus na transferência (%)", "80") + field("ct-mil", "Valor do milheiro (R$)", "16") + field("ct-anu", "Anuidade (R$/ano)", "0") +
        "</div><div class='result' id='ct-out'></div>";
      bind(el, function () {
        var g = num(v(el, "ct-gasto")), pts = g / num(v(el, "ct-usd")) * num(v(el, "ct-pts")) * 12;
        var milhas = pts * (1 + num(v(el, "ct-bonus")) / 100), valor = milhas * num(v(el, "ct-mil")) / 1000;
        var anu = num(v(el, "ct-anu")) || 0, liq = valor - anu, cb = g * 12 * 0.01;
        var out = el.querySelector("#ct-out");
        out.className = "result " + (isFinite(liq) ? (liq > cb ? "good" : "bad") : "");
        out.innerHTML = "<small>" + int(pts) + " pontos/ano → " + int(milhas) + " milhas</small><div class='big'>" + brl(liq) + " por ano</div><span class='verdict'>" +
          (liq > cb ? "Rende mais que 1% de cashback (" + brl(cb) + ")." : "1% de cashback renderia mais (" + brl(cb) + ").") + "</span><small>Valor das milhas " + brl(valor) + " menos anuidade " + brl(anu) + ".</small>";
      });
    },
    transferencia: function (el) {
      el.innerHTML = "<h4>Custo final do milheiro</h4><div class='fields'>" +
        field("tr-pago", "Quanto pagou por 1.000 pontos (R$)", "28") + field("tr-bonus", "Bônus na transferência (%)", "80") +
        '<div class="field"><label for="tr-prog">Programa de destino</label><select id="tr-prog">' + refOptions("smiles") + "</select></div></div><div class='result' id='tr-out'></div>";
      bind(el, function () {
        var c = num(v(el, "tr-pago")) / (1 + num(v(el, "tr-bonus")) / 100), ref = REF[v(el, "tr-prog")][1], out = el.querySelector("#tr-out");
        out.className = "result " + (isFinite(c) ? (c <= ref ? "good" : "bad") : "");
        out.innerHTML = "<small>Cada 1.000 milhas sai por</small><div class='big'>" + brl(c) + "</div>" + (isFinite(c) ? "<span class='verdict'>" + (c <= ref ? "Abaixo da referência de " + brl(ref) + ": boa compra, se houver uma emissão em vista." : "Acima da referência de " + brl(ref) + ": espere uma oferta melhor.") + "</span>" : "");
      });
    },
    paridade: function (el) {
      el.innerHTML = "<h4>Conversor de paridade</h4><div class='fields'>" +
        field("pr-pts", "Pontos no banco", "68.000") + field("pr-par", "Paridade (pontos por 1 milha)", "2") + field("pr-custo", "Custo por 1.000 pontos (R$)", "25") +
        "</div><div class='result' id='pr-out'></div>";
      bind(el, function () {
        var par = num(v(el, "pr-par")), m = num(v(el, "pr-pts")) / par, cm = num(v(el, "pr-custo")) * par;
        el.querySelector("#pr-out").innerHTML = "<small>Você recebe</small><div class='big'>" + int(m) + " milhas</div><small>Cada 1.000 milhas no destino custam " + brl(cm) + ".</small>";
      });
    },
    rotas: function (el) {
      if (!store.rotas) store.rotas = [{ rota: "UDI ou GRU → Lisboa (ida e volta)", tipico: "", alvo: "", milhas: "", prog: "" }];
      function draw() {
        var h = "<h4>Minhas rotas monitoradas</h4><div class='table-wrap route-table'><table><thead><tr><th>Rota</th><th>Preço típico (R$)</th><th>Alvo (R$)</th><th>Alvo em milhas</th><th>Programa</th><th></th></tr></thead><tbody>";
        store.rotas.forEach(function (r, i) {
          var sug = num(r.tipico) * 0.75;
          h += "<tr>" +
            '<td><input aria-label="Rota" data-i="' + i + '" data-f="rota" value="' + esc(r.rota) + '" style="min-width:180px"></td>' +
            '<td><input aria-label="Preço típico" inputmode="decimal" data-i="' + i + '" data-f="tipico" value="' + esc(r.tipico) + '"></td>' +
            '<td><input aria-label="Preço-alvo" inputmode="decimal" data-i="' + i + '" data-f="alvo" value="' + esc(r.alvo) + '" placeholder="' + (isFinite(sug) ? int(sug) : "") + '"></td>' +
            '<td><input aria-label="Alvo em milhas" inputmode="decimal" data-i="' + i + '" data-f="milhas" value="' + esc(r.milhas) + '"></td>' +
            '<td><input aria-label="Programa" data-i="' + i + '" data-f="prog" value="' + esc(r.prog) + '"></td>' +
            '<td><button class="icon-btn" data-del="' + i + '" aria-label="Remover rota">×</button></td></tr>';
        });
        h += "</tbody></table></div><button class='btn ghost' id='addRota' style='margin-top:10px'>+ Adicionar rota</button><p class='note'>Dica: o alvo sugerido (em cinza) é 25% abaixo do preço típico. Fica salvo neste navegador.</p>";
        el.innerHTML = h;
        el.querySelectorAll("input[data-f]").forEach(function (inp) {
          inp.addEventListener("input", function () {
            store.rotas[+inp.dataset.i][inp.dataset.f] = inp.value; save();
            if (inp.dataset.f === "tipico") {
              var s = num(inp.value) * 0.75, a = el.querySelector('input[data-i="' + inp.dataset.i + '"][data-f="alvo"]');
              a.placeholder = isFinite(s) ? int(s) : "";
            }
          });
        });
        el.querySelectorAll("[data-del]").forEach(function (b) { b.addEventListener("click", function () { store.rotas.splice(+b.dataset.del, 1); save(); draw(); }); });
        el.querySelector("#addRota").addEventListener("click", function () { store.rotas.push({ rota: "", tipico: "", alvo: "", milhas: "", prog: "" }); save(); draw(); });
      }
      draw();
    }
  };

  /* ---------- Ferramentas ---------- */
  function renderTools() {
    app.innerHTML = '<section class="mod-head"><div class="eyebrow">Calculadoras</div><h1>Ferramentas</h1><p>As contas do curso, prontas pra usar antes de transferir, comprar ou emitir.</p></section>' +
      '<div class="tools-grid"><div class="widget" data-widget="milheiro"></div><div class="widget" data-widget="transferencia"></div><div class="widget" data-widget="cartao"></div><div class="widget" data-widget="paridade"></div></div>' +
      '<div class="section-head"><h2>Rotas monitoradas</h2><p>A mesma lista do Módulo 6.</p></div><div class="widget" data-widget="rotas" style="max-width:none;background:var(--surface)"></div>' +
      '<p class="footer-note">Referências de custo do milheiro: Smiles e Azul ~R$ 16, LATAM Pass ~R$ 25,50 (cotações de jun/2026, <a href="https://cartoeseviagens.com.br/cotacao-milheiro" target="_blank" rel="noopener">Cartões e Viagens</a>).</p>';
    mountWidgets(app);
  }

  /* ---------- Projeto final ---------- */
  function renderProject() {
    var P = store.proj;
    var h = '<section class="mod-head"><div class="eyebrow">Fechamento</div><h1>Projeto final</h1><p>Sua primeira viagem com milhas, do planejamento à emissão, com a economia calculada.</p></section><div class="steps">';
    C.final.steps.forEach(function (s, i) {
      var ok = !!store.projSteps[i];
      h += '<div class="step' + (ok ? " ok" : "") + '"><span class="n">' + (ok ? "✓" : i + 1) + "</span><div><h4>" + s[0] + "</h4><p>" + s[1] + ' <a href="#modulo-' + s[2] + '">Módulo ' + s[2] + '</a></p></div><label style="display:flex;gap:6px;align-items:center;font-size:.85rem;color:var(--muted)"><input type="checkbox" data-step="' + i + '"' + (ok ? " checked" : "") + ' style="accent-color:var(--sage)"> feito</label></div>';
    });
    h += '</div><div class="widget report" style="max-width:none;background:var(--surface)"><h4>Relatório da viagem</h4><div class="fields">' +
      '<div class="field"><label for="pj-rota">Rota e datas</label><input id="pj-rota" value="' + esc(P.rota || "") + '"></div>' +
      '<div class="field"><label for="pj-prog">Programa</label><input id="pj-prog" value="' + esc(P.prog || "") + '"></div>' +
      field("pj-milhas", "Milhas usadas", P.milhas) + field("pj-taxas", "Taxas pagas (R$)", P.taxas) + field("pj-custo", "Custo das milhas (R$)", P.custo) + field("pj-dinheiro", "Preço em dinheiro (R$)", P.dinheiro) +
      "</div><div class='result' id='pj-out'></div></div>";
    app.innerHTML = h;
    app.querySelectorAll("[data-step]").forEach(function (c) {
      c.addEventListener("change", function () { store.projSteps[c.dataset.step] = c.checked; save(); renderProject(); });
    });
    var rep = app.querySelector(".report");
    bind(rep, function () {
      ["rota", "prog", "milhas", "taxas", "custo", "dinheiro"].forEach(function (k) { P[k] = v(rep, "pj-" + k); });
      store.proj = P; save();
      var total = num(P.taxas) + num(P.custo), eco = num(P.dinheiro) - total, mil = (num(P.dinheiro) - num(P.taxas)) / num(P.milhas) * 1000;
      var out = rep.querySelector("#pj-out");
      out.className = "result " + (isFinite(eco) ? (eco > 0 ? "good" : "bad") : "");
      out.innerHTML = "<small>Economia</small><div class='big'>" + brl(eco) + "</div><small>Custo total com milhas: " + brl(total) + " · Valor do milheiro no resgate: " + brl(mil) + "</small>";
    });
  }

  /* ---------- Glossário ---------- */
  function renderGlossary() {
    app.innerHTML = '<section class="mod-head"><div class="eyebrow">Consulta rápida</div><h1>Glossário</h1><p>Os termos que aparecem no curso, em uma frase cada.</p></section>' +
      '<input class="search" id="gq" type="search" placeholder="Buscar termo" aria-label="Buscar termo"><dl class="gloss" id="gl" style="margin-top:16px"></dl>';
    function draw(q) {
      q = (q || "").toLowerCase();
      document.getElementById("gl").innerHTML = C.glossario.filter(function (g) { return !q || (g[0] + " " + g[1]).toLowerCase().indexOf(q) > -1; })
        .map(function (g) { return '<div class="gloss-item"><dt>' + esc(g[0]) + "</dt><dd>" + esc(g[1]) + "</dd></div>"; }).join("") || "<p>Nenhum termo encontrado.</p>";
    }
    document.getElementById("gq").addEventListener("input", function (e) { draw(e.target.value); });
    draw("");
  }

  /* ---------- Roteamento ---------- */
  function scrollTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }
  function route() {
    var h = (location.hash || "#inicio").slice(1), navKey = h;
    if (/^modulo-\d+$/.test(h)) { renderModule(+h.split("-")[1]); navKey = ""; }
    else if (h === "ferramentas") renderTools();
    else if (h === "projeto") renderProject();
    else if (h === "glossario") renderGlossary();
    else { renderHome(); navKey = "inicio"; }
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.dataset.nav === navKey) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-goto-mod]");
    if (a) { var mi = +a.dataset.gotoMod; ui.tab[mi] = "aulas"; ui.lesson[mi] = +(a.dataset.gotoLesson || 0); }
  });
  window.addEventListener("hashchange", function () { route(); window.scrollTo(0, 0); });
  route();

  /* ---------- App instalável: modo offline e armazenamento persistente ---------- */
  try {
    if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost") && window.top === window.self) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
  } catch (e) { /* ambiente sem suporte: segue normal */ }
})();
