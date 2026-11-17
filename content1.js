/* Conteúdo do curso: módulos 0 a 5 */
window.CURSO = window.CURSO || { modules: [] };

window.CURSO.modules.push(
{
  id: 0, code: "M00", gate: "A1",
  title: "Ponto de partida",
  tagline: "Quanto você gasta e pra onde quer ir",
  lessons: [
    { id: "0.1", title: "O que milhas são (e o que não são)", min: 10, html: `
      <p class="lead">Milhas são, na prática, um <strong>desconto em viagem</strong> que você ganha por gastar de um jeito específico. Não são dinheiro grátis e não são investimento.</p>
      <h3>As três regras do curso</h3>
      <ol class="rules">
        <li><strong>Nunca gaste mais pra ganhar milhas.</strong> Milha só compensa em cima de um gasto que você já faria.</li>
        <li><strong>Nunca pague juros no cartão.</strong> Os juros do rotativo anulam, em um mês, o ganho de anos de milhas.</li>
        <li><strong>Milha parada perde valor.</strong> Programas mudam tabelas e milhas vencem. Acumule com propósito e use.</li>
      </ol>
      <h3>Por que funciona?</h3>
      <p>Os programas vendem milhas para bancos, varejistas e parceiros, que as usam pra atrair clientes. Quem entende o sistema consegue pegar milhas baratas (com bônus e promoções) e usar em passagens caras.</p>
      <div class="callout">A diferença entre o <em>custo</em> da milha e o <em>valor</em> da passagem é o seu ganho. O curso inteiro gira em torno dessa conta.</div>
    `},
    { id: "0.2", title: "Diagnóstico de gastos", min: 20, html: `
      <p class="lead">Seu volume de gastos define qual estratégia faz sentido. Quem gasta pouco ganha mais com promoções e compra de pontos. Quem gasta muito ganha mais escolhendo bem o cartão.</p>
      <p>Faça a média dos últimos 3 meses usando o extrato do banco e a fatura. Use a calculadora abaixo pra ver quanto o seu gasto rende só com o cartão.</p>
      <div class="widget" data-widget="diagnostico"></div>
      <p>Tudo que hoje vai em Pix, débito ou boleto e poderia ir no cartão (sem custo extra) é pontuação que você está deixando na mesa.</p>
      <div class="example">
        <div class="example-label">Exemplo</div>
        <p>Gasto de R$ 3.000/mês, cartão de 1 ponto por dólar, dólar a R$ 5,50:</p>
        <ul><li>3.000 ÷ 5,50 ≈ 545 pontos por mês, ou 6.500 por ano</li><li>Transferindo com 100% de bônus: 13.000 milhas por ano</li></ul>
      </div>
      <div class="callout">A principal lição: <strong>o cartão sozinho rende pouco.</strong> O que multiplica o resultado são as transferências bonificadas, os parceiros e a compra de pontos com desconto (Módulos 3 e 4).</div>
    `},
    { id: "0.3", title: "Sua meta de viagem", min: 10, html: `
      <p class="lead">Milhas sem destino viram saldo esquecido. A meta decide em qual programa concentrar.</p>
      <p>Responda (pode escrever direto aqui, fica salvo no seu navegador):</p>
      <div class="widget" data-widget="meta"></div>
      <p>Não precisa saber ainda quantas milhas custa. No Módulo 5 você pesquisa o preço real da sua meta.</p>
    `}
  ],
  tasks: [
    "Preencher o diagnóstico de gastos com a média dos últimos 3 meses",
    "Listar o que hoje sai em Pix/débito e poderia ir pro cartão",
    "Escrever sua meta de viagem principal",
    "Ver no app do banco se o seu cartão atual acumula pontos, e quantos por dólar"
  ],
  quiz: [
    { q: "Qual destas é uma regra de ouro do curso?", o: ["Gastar mais no cartão pra juntar milhas mais rápido", "Nunca pagar juros no cartão", "Guardar milhas o máximo de tempo possível"], a: 1, e: "Os juros do rotativo anulam qualquer ganho com milhas. E milha guardada perde valor com o tempo." },
    { q: "De onde vem o ganho real com milhas?", o: ["Da diferença entre o custo da milha e o valor da passagem", "Da quantidade total de milhas no saldo", "Do número de cartões que você tem"], a: 0, e: "Milha barata usada numa passagem cara: é essa diferença que vira economia." },
    { q: "Com R$ 3.000/mês num cartão de 1 ponto por dólar (dólar a R$ 5,50), quantos pontos você ganha por ano?", o: ["Cerca de 3.000", "Cerca de 6.500", "Cerca de 36.000"], a: 1, e: "3.000 ÷ 5,50 ≈ 545 pontos/mês × 12 ≈ 6.500 por ano." }
  ],
  sources: []
},
{
  id: 1, code: "M01", gate: "A2",
  title: "Fundamentos",
  tagline: "Pontos, milhas e quanto vale cada uma",
  lessons: [
    { id: "1.1", title: "Pontos x milhas: as duas camadas", min: 15, html: `
      <p class="lead">O sistema tem duas camadas: <strong>programas de banco</strong>, onde você acumula, e <strong>programas de companhia aérea</strong>, onde você emite.</p>
      <h3>Programas de banco (pontos)</h3>
      <p>Onde caem os pontos do cartão. Os principais: Livelo (Banco do Brasil, Bradesco e outros), Esfera (Santander), Átomos (C6 Bank), Inter Loop e os programas de alguns bancos, como o do Itaú.</p>
      <h3>Programas aéreos (milhas)</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Companhia</th><th>Destaque</th></tr></thead>
        <tbody>
          <tr><td>Smiles</td><td>GOL</td><td>Muitos parceiros internacionais</td></tr>
          <tr><td>LATAM Pass</td><td>LATAM</td><td>Maior malha na América do Sul</td></tr>
          <tr><td>Azul Fidelidade</td><td>Azul</td><td>Nome atual do antigo TudoAzul</td></tr>
        </tbody>
      </table></div>
      <h3>O caminho de um ponto até virar passagem</h3>
      <div class="flow">
        <div class="flow-step"><span>1</span>Gasta no cartão</div>
        <div class="flow-step"><span>2</span>Pontos ficam no banco</div>
        <div class="flow-step"><span>3</span>Transfere com bônus</div>
        <div class="flow-step"><span>4</span>Emite a passagem</div>
      </div>
      <div class="callout"><strong>Por que não transferir logo?</strong> A transferência só vai num sentido: milha aérea não volta pro banco. No banco, o ponto pode ir pra qualquer parceiro. Na Livelo, Smiles, LATAM Pass e Azul recebem na paridade padrão de 1 ponto para 1 milha (<a href="https://www.cartoesdecredito.me/?p=89110" target="_blank" rel="noopener">fonte</a>).</div>
    `},
    { id: "1.2", title: "Alianças aéreas", min: 10, html: `
      <p class="lead">Companhias se agrupam em alianças e parcerias. Na prática, milhas de um programa podem emitir voos de outra companhia.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Aliança</th><th>Algumas companhias</th></tr></thead>
        <tbody>
          <tr><td>Star Alliance</td><td>United, Lufthansa, TAP, Air Canada, Avianca</td></tr>
          <tr><td>oneworld</td><td>American Airlines, British Airways, Iberia, Qatar Airways</td></tr>
          <tr><td>SkyTeam</td><td>Air France, KLM, Delta, Aeroméxico</td></tr>
        </tbody>
      </table></div>
      <p>As três companhias brasileiras funcionam mais por parcerias diretas do que por alianças. Cada programa tem sua lista de parceiros, que você confere no site antes de emitir.</p>
      <p>Às vezes o jeito mais barato de voar de TAP ou Iberia é pelo programa de um parceiro. Esse é o assunto do Módulo 7.</p>
    `},
    { id: "1.3", title: "Validade e regras básicas", min: 10, html: `
      <p class="lead">Pontos e milhas vencem, e a validade depende do programa, da origem do crédito, do cartão e do clube (<a href="https://cartoeseviagens.com.br/validade-das-milhas" target="_blank" rel="noopener">fonte</a>).</p>
      <ul>
        <li>No LATAM Pass, a página oficial informa 24 meses para milhas de voos LATAM e parceiros. Outras origens podem ter outro prazo.</li>
        <li>Na Smiles, milhas bônus podem vencer antes das milhas-base. A validade de cada lote aparece no extrato (<a href="https://cartoeseviagens.com.br/validade-dos-pontos" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Alguns clubes e cartões estendem ou eliminam a validade enquanto estiverem ativos.</li>
        <li>Na transferência, o lote recebido ganha validade própria, mas isso não renova o saldo antigo.</li>
      </ul>
      <div class="callout">Regra prática: <strong>olhe a validade por lote no extrato</strong>, não o saldo total.</div>
    `},
    { id: "1.4", title: "Quanto vale uma milha", min: 20, html: `
      <p class="lead">Uma milha não tem preço fixo. Existem dois números que você compara toda vez.</p>
      <h3>1. Custo do milheiro</h3>
      <p>Quanto você pagou (ou pagaria) por 1.000 milhas. Em junho de 2026, as cotações de referência eram de cerca de <strong>R$ 16 na Smiles</strong>, <strong>R$ 16 na Azul Fidelidade</strong> e <strong>R$ 25,50 no LATAM Pass</strong> (<a href="https://cartoeseviagens.com.br/cotacao-milheiro" target="_blank" rel="noopener">fonte</a>).</p>
      <h3>2. Valor do milheiro no resgate</h3>
      <div class="formula">valor do milheiro = (preço em dinheiro − taxas) ÷ milhas usadas × 1.000</div>
      <div class="example">
        <div class="example-label">Exemplo</div>
        <p>Passagem de R$ 1.200 em dinheiro, ou 40.000 milhas Smiles + R$ 60 de taxas.</p>
        <p>(1.200 − 60) ÷ 40.000 × 1.000 = <strong>R$ 28,50 por milheiro</strong>. Quase o dobro da referência: resgate bom.</p>
        <p>Se a passagem custasse R$ 500: (500 − 60) ÷ 40 = R$ 11. Abaixo do custo: melhor pagar em dinheiro.</p>
      </div>
      <div class="callout"><strong>Regra de decisão:</strong> use milhas quando o valor do milheiro no resgate for maior que o custo do milheiro daquele programa.</div>
      <p>Teste com a calculadora:</p>
      <div class="widget" data-widget="milheiro"></div>
    `}
  ],
  tasks: [
    "Criar conta gratuita na Smiles, no LATAM Pass e na Azul Fidelidade",
    "Descobrir em qual programa de banco caem os pontos do seu cartão",
    "Pesquisar uma rota (ex.: Uberlândia–São Paulo) em dinheiro e em milhas nos três programas",
    "Calcular o valor do milheiro de cada um e comparar com as referências"
  ],
  quiz: [
    { q: "Por que deixar os pontos no banco até ter uma promoção?", o: ["Porque pontos de banco nunca vencem", "Porque milha aérea não volta pro banco e no banco o ponto pode ir pra qualquer parceiro", "Porque o banco paga juros sobre os pontos"], a: 1, e: "A transferência é de mão única. No banco você mantém a flexibilidade de escolher o programa e o momento." },
    { q: "Uma passagem custa R$ 900 ou 30.000 milhas + R$ 60. Qual o valor do milheiro?", o: ["R$ 28", "R$ 30", "R$ 32"], a: 0, e: "(900 − 60) ÷ 30.000 × 1.000 = R$ 28." },
    { q: "Quando vale usar milhas?", o: ["Sempre que tiver saldo suficiente", "Quando o valor do milheiro no resgate supera o custo do milheiro", "Só em voos internacionais"], a: 1, e: "Se o resgate vale menos que o que a milha custou, pague em dinheiro e guarde as milhas." }
  ],
  sources: [
    { t: "Validade das milhas LATAM Pass, Smiles e Azul (Cartões e Viagens, set/2026)", u: "https://cartoeseviagens.com.br/validade-das-milhas" },
    { t: "Validade dos pontos (Cartões e Viagens, set/2026)", u: "https://cartoeseviagens.com.br/validade-dos-pontos" },
    { t: "Cotação do milheiro (Cartões e Viagens, jun/2026)", u: "https://cartoeseviagens.com.br/cotacao-milheiro" },
    { t: "Programas parceiros da Livelo 2026 (cartoesdecredito.me)", u: "https://www.cartoesdecredito.me/?p=89110" }
  ]
},
{
  id: 2, code: "M02", gate: "B3",
  title: "Cartão de crédito",
  tagline: "O motor do acúmulo",
  lessons: [
    { id: "2.1", title: "Como um cartão pontua", min: 15, html: `
      <p class="lead">Quase todo cartão brasileiro pontua <strong>por dólar gasto</strong>, mesmo em compras em reais.</p>
      <div class="formula">pontos no mês = gasto em R$ ÷ cotação do dólar × pontos por dólar</div>
      <p>Exemplo: R$ 2.750 de fatura, dólar a R$ 5,50, cartão de 2 pontos por dólar = 500 dólares × 2 = 1.000 pontos.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Tipo</th><th>Pra onde vão os pontos</th><th>Vantagem</th><th>Desvantagem</th></tr></thead>
        <tbody>
          <tr><td>Cartão de banco</td><td>Livelo, Esfera, Átomos, Itaú etc.</td><td>Flexibilidade pra escolher o programa na promoção</td><td>Precisa transferir; alguns vencem</td></tr>
          <tr><td>Cobranded</td><td>Direto no programa aéreo</td><td>Milhas caem direto, às vezes com bônus</td><td>Preso a uma companhia; sem transferências bonificadas</td></tr>
        </tbody>
      </table></div>
      <p>Pra quem está começando, o cartão de banco costuma ser melhor, porque deixa você esperar as promoções do Módulo 4.</p>
    `},
    { id: "2.2", title: "As faixas de cartão", min: 15, html: `
      <p class="lead">A pontuação subiu muito: há alguns anos, 2 pontos por dólar era o padrão dos melhores; hoje, cartões de 4 pontos nem estão no topo (<a href="https://www.cartoesdecredito.me/?p=90284" target="_blank" rel="noopener">fonte</a>).</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Faixa</th><th>Pontos/US$</th><th>Anuidade</th><th>Pra quem</th></tr></thead>
        <tbody>
          <tr><td>Entrada / digital</td><td>0 a 1</td><td>Zero ou isenta</td><td>Quem está começando ou gasta pouco</td></tr>
          <tr><td>Black / Infinite de entrada</td><td>1 a 2,5</td><td>Isenta com gasto ou investimento</td><td>Quem gasta alguns milhares por mês</td></tr>
          <tr><td>Premium</td><td>4 ou mais</td><td>Alta</td><td>Quem gasta muito e usa salas VIP</td></tr>
        </tbody>
      </table></div>
      <p>Um cartão com menos pontos e anuidade zero pode render mais que um premium. Um Itaú Visa Infinite pontua perto de 1 ponto por dólar, mas a possibilidade de isenção muda a conta (<a href="https://www.folhavitoria.com.br/economia/melhor-cartao-para-acumular-milhas-2026-ranking-e-comparativo-viral/" target="_blank" rel="noopener">fonte</a>). Entre os sem anuidade, em janeiro de 2026 o Inter Black Win liderava o ranking (<a href="https://www.melhorescartoes.com.br/os-10-melhores-cartoes-de-credito-sem-anuidade-de-janeiro-2026.html" target="_blank" rel="noopener">fonte</a>).</p>
      <div class="callout">Regras de acesso e anuidade mudam sem aviso. Confira no site do banco antes de pedir.</div>
    `},
    { id: "2.3", title: "A conta que decide", min: 15, html: `
      <p class="lead">Compare o valor dos pontos de um ano com a anuidade.</p>
      <div class="formula">valor anual = pontos no ano × (1 + bônus) × custo do milheiro ÷ 1.000</div>
      <div class="example">
        <div class="example-label">Exemplo</div>
        <p>R$ 3.000/mês, dólar a R$ 5,50, cartão de 2,2 pontos por dólar:</p>
        <ul><li>1.200 pontos/mês → 14.400/ano</li><li>Com 80% de bônus: 25.920 milhas</li><li>A R$ 16 o milheiro: cerca de <strong>R$ 415 por ano</strong></li></ul>
        <p>Anuidade de R$ 1.000? Prejuízo. Anuidade isenta? R$ 415 de ganho.</p>
      </div>
      <div class="widget" data-widget="cartao"></div>
    `},
    { id: "2.4", title: "Pontos ou cashback?", min: 10, html: `
      <p class="lead">Na mesma fatura de R$ 3.000/mês, 1% de cashback dá R$ 360 por ano, sem acompanhar promoção nenhuma.</p>
      <div class="two-col">
        <div class="mini-card"><h4>Cashback ganha quando</h4><p>Você gasta pouco, não quer acompanhar promoções ou não tem viagem em vista.</p></div>
        <div class="mini-card"><h4>Pontos ganham quando</h4><p>Você usa transferências bonificadas e resgata com milheiro acima de R$ 25–30. Aí o mesmo gasto pode valer o dobro.</p></div>
      </div>
    `},
    { id: "2.5", title: "Táticas pra tirar mais do cartão", min: 10, html: `
      <ol>
        <li><strong>Concentre os gastos</strong> num só cartão ou programa.</li>
        <li><strong>Passe no cartão o que hoje vai em Pix ou débito</strong>, se não houver taxa.</li>
        <li><strong>Negocie a anuidade.</strong> Ligar pro banco e pedir isenção costuma funcionar.</li>
        <li><strong>Use isenção por investimento</strong>, como manter um CDB no banco.</li>
        <li><strong>Peça adicionais gratuitos</strong> pra família: os gastos pontuam pra você.</li>
        <li><strong>Fique de olho no bônus de boas-vindas</strong>, que às vezes vale um ano de gastos.</li>
      </ol>
      <div class="callout warn"><strong>Regra de ouro:</strong> pague sempre a fatura inteira. Juros destroem qualquer ganho.</div>
    `}
  ],
  tasks: [
    "Descobrir quantos pontos por dólar o seu cartão dá e pra onde vão",
    "Fazer a conta da Aula 2.3 com o seu gasto real",
    "Comparar com 1% de cashback",
    "Perguntar ao banco sobre isenção de anuidade"
  ],
  quiz: [
    { q: "Como a maioria dos cartões brasileiros calcula os pontos?", o: ["Por real gasto", "Por dólar gasto, convertendo a fatura pela cotação", "Por número de compras"], a: 1, e: "O banco converte o gasto em dólares e multiplica pela pontuação do cartão." },
    { q: "Qual a principal vantagem de um cartão de banco sobre um cobranded?", o: ["Pontua sempre mais", "Permite esperar transferências bonificadas e escolher o programa", "Nunca tem anuidade"], a: 1, e: "Os pontos ficam flexíveis no banco até uma boa promoção." },
    { q: "Um cartão rende R$ 415/ano em milhas e tem anuidade de R$ 1.000. Vale a pena?", o: ["Sim, porque dá muitas milhas", "Não, a anuidade é maior que o valor gerado", "Depende só da bandeira"], a: 1, e: "Se o custo supera o valor gerado, o cartão dá prejuízo. Negocie isenção ou troque." }
  ],
  sources: [
    { t: "Os cartões que mais acumulam pontos (cartoesdecredito.me)", u: "https://www.cartoesdecredito.me/?p=90284" },
    { t: "Melhor cartão para acumular milhas em 2026 (Folha Vitória)", u: "https://www.folhavitoria.com.br/economia/melhor-cartao-para-acumular-milhas-2026-ranking-e-comparativo-viral/" },
    { t: "Melhores cartões sem anuidade, jan/2026 (Melhores Cartões)", u: "https://www.melhorescartoes.com.br/os-10-melhores-cartoes-de-credito-sem-anuidade-de-janeiro-2026.html" }
  ]
},
{
  id: 3, code: "M03", gate: "B4",
  title: "Acumulando no dia a dia",
  tagline: "Compras, combustível, clubes e família",
  lessons: [
    { id: "3.1", title: "Shoppings de pontos", min: 15, html: `
      <p class="lead">O cartão dá 1 ou 2 pontos por dólar. Uma compra pelo portal certo pode dar 10 pontos <em>por real</em>.</p>
      <p>Livelo, Esfera e os programas aéreos têm "shoppings": portais que levam você a lojas parceiras. A oferta aparece como "X pontos por real". Com 8 pontos por real numa compra elegível de R$ 500, a previsão é 4.000 pontos (<a href="https://cartoeseviagens.com.br/livelo/compras-bonificadas-livelo" target="_blank" rel="noopener">fonte</a>). A pontuação padrão costuma ser de 1 a 4 pontos por real e sobe pra 10 a 15 em campanhas (<a href="https://pontospravoar.com/livelo-oferece-pontos-compras-online/" target="_blank" rel="noopener">fonte</a>).</p>
      <h3>O "double dip"</h3>
      <p>Na mesma compra você ganha os pontos do shopping <em>e</em> os do cartão. E com bônus de 100% na transferência, 10 pontos por real viram até 20 milhas por real.</p>
      <h3>Cuidados</h3>
      <ul>
        <li>Entre sempre pelo link do portal, na mesma sessão.</li>
        <li>Frete, vendedores terceiros e cupons de outros sites costumam não pontuar.</li>
        <li>Os pontos levam de 30 a 60 dias. Guarde o comprovante.</li>
        <li><strong>Ponto não justifica pagar mais caro.</strong> Compare preços antes.</li>
      </ul>
      <p>A Livelo é gratuita pra qualquer CPF, mesmo sem conta no BB ou no Bradesco (<a href="https://www.mobills.com.br/blog/pontos/o-que-e-livelo/" target="_blank" rel="noopener">fonte</a>).</p>
    `},
    { id: "3.2", title: "Combustível, mercado e apps", min: 10, html: `
      <div class="table-wrap"><table>
        <thead><tr><th>Onde</th><th>Programa</th><th>Como pontua</th></tr></thead>
        <tbody>
          <tr><td>Postos Shell</td><td>Shell Box</td><td>Pagando pelo app; 1 ponto = 1 milha Smiles, mas os pontos valem só 6 meses (<a href="https://pontospravoar.com/programas-fidelidade-postos-combustiveis-qual-deles-combustivel-certo-viagens/" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>Postos Ipiranga</td><td>Km de Vantagens</td><td>1% de cashback ou 1 KMV por real; 2 KMV no posto favorito (<a href="https://apps.apple.com/BR/app/id1052059383" target="_blank" rel="noopener">fonte</a>). Transferir pra milhas tem custo</td></tr>
          <tr><td>Postos Petrobras</td><td>Premmia</td><td>Parceiro da Smiles (<a href="https://www.smiles.com.br/portal/combustiveis" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>Mercado e delivery</td><td>Shoppings de pontos</td><td>Vários varejistas estão no shopping Livelo</td></tr>
        </tbody>
      </table></div>
      <p>Hotéis, locadoras e o próprio voo também pagam milhas. Sempre informe seu número de fidelidade na reserva.</p>
    `},
    { id: "3.3", title: "Clubes de assinatura", min: 15, html: `
      <p class="lead">Você paga uma mensalidade e recebe um lote fixo de pontos, além de vantagens.</p>
      <p>No Clube LATAM Pass de entrada, R$ 40,90/mês dão 1.000 milhas (<a href="https://www.nomadglobal.com/en/conteudos/clube-de-milhas" target="_blank" rel="noopener">fonte</a>). São R$ 40,90 por milheiro, bem acima da referência de ~R$ 25. <strong>As milhas da mensalidade sozinhas não compensam.</strong></p>
      <h3>O clube vale pelas vantagens</h3>
      <ul>
        <li><strong>Bônus maior nas transferências.</strong> Numa campanha da Smiles, assinantes ganharam 80% contra 50% dos demais (<a href="https://www.melhoresdestinos.com.br/milhas/prorrogado-livelo-smiles-bonus-80-jun26" target="_blank" rel="noopener">fonte</a>). Em 100.000 pontos, são 30.000 milhas a mais.</li>
        <li><strong>Validade.</strong> No Clube Livelo, os pontos deixam de vencer enquanto você assina (<a href="https://www.melhorescartoes.com.br/pontos-livelo-vencendo-o-que-fazer.html" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Descontos em compra de pontos e a Conta Família Smiles.</li>
      </ul>
      <div class="callout">Assine quando for fazer uma transferência grande ou quando o benefício pagar a mensalidade. Muitos clubes podem ser assinados no plano mais barato só por um mês. Confira carência antes.</div>
    `},
    { id: "3.4", title: "Juntando milhas em família", min: 10, html: `
      <ul>
        <li><strong>Smiles:</strong> Conta Família com até 6 pessoas (1 administrador + 5 membros), todos assinantes do Clube Smiles ou Diamante/Magno (<a href="https://www.smiles.com.br/es/conta-familia" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>LATAM Pass e Azul:</strong> sem conta família; dá pra transferir milhas entre contas, geralmente pagando taxa (<a href="https://pontospravoar.com/como-juntar-milhas-em-familia-smiles-azul-latam-pass/" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
      <div class="callout">Na maioria dos casos é mais barato <strong>emitir a passagem pro familiar direto da sua conta</strong> do que transferir milhas (<a href="https://cartoeseviagens.com.br/latam-pass/conta-familia-latam-pass" target="_blank" rel="noopener">fonte</a>).</div>
      <h3>Checklist antes de qualquer compra online</h3>
      <ul class="plain-check">
        <li>A loja está no shopping da Livelo, da Esfera ou de um programa aéreo?</li>
        <li>Qual paga mais pontos por real hoje?</li>
        <li>Entrei pelo link do portal?</li>
        <li>Estou pagando com o cartão que mais pontua?</li>
        <li>O preço está igual ou melhor que em outras lojas?</li>
      </ul>
    `}
  ],
  tasks: [
    "Criar conta na Livelo e na Esfera",
    "Instalar o app de pontos do posto onde você mais abastece",
    "Na próxima compra online, seguir o checklist e anotar os pontos"
  ],
  quiz: [
    { q: "O que é o \"double dip\" numa compra online?", o: ["Pagar duas vezes pra ganhar o dobro", "Ganhar pontos do shopping e do cartão na mesma compra", "Comprar em duas lojas ao mesmo tempo"], a: 1, e: "O portal paga pontos pela compra e o cartão também pontua." },
    { q: "Por que as milhas da mensalidade de um clube sozinhas não compensam?", o: ["Porque o custo por milheiro fica acima da referência", "Porque as milhas do clube não podem ser usadas", "Porque clubes são ilegais"], a: 0, e: "R$ 40,90 por 1.000 milhas é bem mais que os ~R$ 25 de referência da LATAM Pass. O valor está nas vantagens." },
    { q: "Qual programa tem Conta Família?", o: ["LATAM Pass", "Azul Fidelidade", "Smiles"], a: 2, e: "A Smiles junta até 6 pessoas. Nos outros, emitir pro familiar costuma ser mais barato que transferir." }
  ],
  sources: [
    { t: "Compras bonificadas Livelo (Cartões e Viagens)", u: "https://cartoeseviagens.com.br/livelo/compras-bonificadas-livelo" },
    { t: "Programas de fidelidade de postos (Pontos pra Voar)", u: "https://pontospravoar.com/programas-fidelidade-postos-combustiveis-qual-deles-combustivel-certo-viagens/" },
    { t: "Clube de milhas vale a pena em 2026? (Nomad)", u: "https://www.nomadglobal.com/en/conteudos/clube-de-milhas" },
    { t: "Livelo e Smiles: até 80% de bônus (Melhores Destinos, jun/2026)", u: "https://www.melhoresdestinos.com.br/milhas/prorrogado-livelo-smiles-bonus-80-jun26" },
    { t: "Como juntar milhas em família (Pontos pra Voar)", u: "https://pontospravoar.com/como-juntar-milhas-em-familia-smiles-azul-latam-pass/" },
    { t: "Conta Família Smiles (site oficial)", u: "https://www.smiles.com.br/es/conta-familia" }
  ]
},
{
  id: 4, code: "M04", gate: "C5",
  title: "Transferências e compra de pontos",
  tagline: "O módulo que multiplica tudo",
  lessons: [
    { id: "4.1", title: "O que é transferência bonificada", min: 15, html: `
      <p class="lead">É quando o programa aéreo paga milhas extras pra receber seus pontos. Com 80% de bônus, cada 1.000 pontos Livelo viram 1.800 milhas Smiles (<a href="https://www.melhorescartoes.com.br/transferencia-bonificada-cartoes-credito-vale-pena.html" target="_blank" rel="noopener">fonte</a>).</p>
      <h3>Anatomia de uma campanha (exemplo real, Smiles 2026)</h3>
      <ul>
        <li><strong>Bônus por perfil:</strong> 80% pra Clube Smiles ou Diamante; 50% pros demais (<a href="https://passageirodeprimeira.com/?p=566269" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Limite:</strong> 300.000 milhas de bônus por CPF.</li>
        <li><strong>Validade do bônus:</strong> 12 meses após o crédito (<a href="https://passageirodeprimeira.com/?p=562174" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Prazo curto:</strong> muitas duram de 1 a 3 dias.</li>
      </ul>
      <div class="callout">Leia o regulamento antes: quem tem direito ao bônus máximo, se precisa se cadastrar, o limite e a validade.</div>
    `},
    { id: "4.2", title: "O calendário das promoções", min: 15, html: `
      <p class="lead">As campanhas se repetem em datas parecidas todo ano.</p>
      <div class="calendar">
        <div class="cal-month"><b>Jan</b><span>Aniversário da Caixa: bônus igual à idade do banco (165% em 2026) (<a href="https://www.melhorescartoes.com.br/calendario-milhas-2026.html" target="_blank" rel="noopener">fonte</a>). Aniversário da GOL na Smiles.</span></div>
        <div class="cal-month"><b>Mar</b><span>Aniversário do Bradesco e Dia do Consumidor.</span></div>
        <div class="cal-month"><b>Set–Out</b><span>Aniversários de Azul Fidelidade, LATAM Pass, Esfera, Clube Livelo e Smiles (<a href="https://pontospravoar.com/agenda-2025-datas-todo-milheiro-precisa-saber/" target="_blank" rel="noopener">fonte</a>).</span></div>
        <div class="cal-month hot"><b>Nov</b><span>Black Friday, o mês mais esperado. Em 2025 a Azul chegou a 95% de bônus vindo da Livelo (<a href="https://passageirodeprimeira.com/?p=495948" target="_blank" rel="noopener">fonte</a>).</span></div>
      </div>
      <div class="callout"><strong>Estratégia:</strong> acumule no banco o ano todo e transfira só nessas janelas. Um bônus de 50% sem pressa não é motivo pra transferir.</div>
    `},
    { id: "4.3", title: "A conta do custo final", min: 15, html: `
      <div class="formula">custo final do milheiro = valor pago por 1.000 pontos ÷ (1 + bônus)</div>
      <div class="example">
        <div class="example-label">Exemplo</div>
        <p>Comprou pontos Livelo a R$ 28 o milheiro e transferiu pra Smiles com 80%: 28 ÷ 1,8 = <strong>R$ 15,56 por milheiro</strong>. Abaixo da referência de ~R$ 16.</p>
      </div>
      <p>Atenção: 100% de bônus dá o mesmo custo que 50% de desconto (<a href="https://cartoeseviagens.com.br/como-comprar-milhas-smiles" target="_blank" rel="noopener">fonte</a>). Sempre converta pro custo final.</p>
      <div class="widget" data-widget="transferencia"></div>
    `},
    { id: "4.4", title: "Comprar pontos e milhas", min: 15, html: `
      <p class="lead">Pelo preço cheio, quase nunca compensa: em setembro de 2026 a Smiles cobrava R$ 70 por milheiro no preço-base (<a href="https://cartoeseviagens.com.br/como-comprar-milhas-smiles" target="_blank" rel="noopener">fonte</a>).</p>
      <p>Até descontos grandes podem não bastar: com 78% de desconto em maio de 2026, o milheiro Smiles ainda ficou acima da referência (<a href="https://www.melhorescartoes.com.br/smiles-compra-milhas-78-off-mai26.html" target="_blank" rel="noopener">fonte</a>).</p>
      <h3>Os melhores custos vêm da combinação</h3>
      <ul>
        <li>Comprar Livelo com desconto + transferir com bônus: milhas Smiles a partir de R$ 14,91 (<a href="https://passageirodeprimeira.com/oportunidade-para-gerar-milhas-smiles-a-partir-de-1491-comprando-pontos-livelo/" target="_blank" rel="noopener">fonte</a>).</li>
        <li>"Pontos + dinheiro" da Livelo numa transferência bonificada: cerca de R$ 15,68 em ago/2026 (<a href="https://cartoeseviagens.com.br/compra-de-pontos/smiles-milheiro-r-15-68" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
      <div class="two-col">
        <div class="mini-card good"><h4>Vale comprar quando</h4><p>O custo final fica abaixo da referência, há uma passagem em vista com milheiro alto, ou faltam poucas milhas.</p></div>
        <div class="mini-card bad"><h4>Não vale quando</h4><p>É pra fazer estoque, é preço-base, ou as milhas vencem antes do uso.</p></div>
      </div>
    `},
    { id: "4.5", title: "Erros que custam caro", min: 10, html: `
      <ol>
        <li><strong>Transferir sem bônus.</strong> Quase sempre vem uma campanha melhor.</li>
        <li><strong>Transferir sem plano.</strong> Milha bônus pode vencer em 12 meses e não volta pro banco.</li>
        <li><strong>Não ler o regulamento.</strong> Clube ativo, cadastro na promoção, teto de bônus.</li>
        <li><strong>Comparar porcentagens</strong> em vez de custo final.</li>
        <li><strong>Comprar pontos por impulso.</strong></li>
      </ol>
    `}
  ],
  tasks: [
    "Seguir um site de alertas de milhas (Melhores Destinos, Passageiro de Primeira, Pontos pra Voar)",
    "Calcular o custo final da próxima campanha de transferência que aparecer",
    "Decidir: transferiria ou não? Por quê?"
  ],
  quiz: [
    { q: "Você transfere 10.000 pontos com 80% de bônus. Quantas milhas recebe?", o: ["10.800", "18.000", "80.000"], a: 1, e: "10.000 × 1,8 = 18.000 milhas." },
    { q: "Pagou R$ 30 por mil pontos e transferiu com 100% de bônus. Qual o custo final do milheiro?", o: ["R$ 15", "R$ 30", "R$ 60"], a: 0, e: "30 ÷ (1 + 1) = R$ 15." },
    { q: "Qual mês costuma ter as campanhas mais esperadas?", o: ["Fevereiro", "Novembro, por causa da Black Friday", "Junho"], a: 1, e: "Novembro concentra Black Friday e campanhas fortes de transferência." }
  ],
  sources: [
    { t: "Transferência bonificada: quando vale (Melhores Cartões, jan/2026)", u: "https://www.melhorescartoes.com.br/transferencia-bonificada-cartoes-credito-vale-pena.html" },
    { t: "Smiles: até 80% de bônus (Passageiro de Primeira, set/2026)", u: "https://passageirodeprimeira.com/?p=566269" },
    { t: "Calendário das Milhas 2026 (Melhores Cartões)", u: "https://www.melhorescartoes.com.br/calendario-milhas-2026.html" },
    { t: "Agenda de datas (Pontos pra Voar)", u: "https://pontospravoar.com/agenda-2025-datas-todo-milheiro-precisa-saber/" },
    { t: "Retrospectiva de transferências 2025 (Passageiro de Primeira)", u: "https://passageirodeprimeira.com/?p=495948" },
    { t: "Como comprar milhas Smiles (Cartões e Viagens)", u: "https://cartoeseviagens.com.br/como-comprar-milhas-smiles" },
    { t: "Smiles com 78% de desconto vale? (Melhores Cartões, mai/2026)", u: "https://www.melhorescartoes.com.br/smiles-compra-milhas-78-off-mai26.html" },
    { t: "Milhas Smiles a partir de R$ 14,91 (Passageiro de Primeira)", u: "https://passageirodeprimeira.com/oportunidade-para-gerar-milhas-smiles-a-partir-de-1491-comprando-pontos-livelo/" },
    { t: "Smiles milheiro R$ 15,68 (Cartões e Viagens, ago/2026)", u: "https://cartoeseviagens.com.br/compra-de-pontos/smiles-milheiro-r-15-68" }
  ]
},
{
  id: 5, code: "M05", gate: "C6",
  title: "Resgate básico",
  tagline: "Emitindo sua passagem sem erro",
  lessons: [
    { id: "5.1", title: "Como o preço em milhas é definido", min: 10, html: `
      <div class="two-col">
        <div class="mini-card"><h4>Preço dinâmico</h4><p>As milhas variam com a demanda e o preço em reais. É o modelo mais usado por LATAM Pass, Smiles e Azul em voos próprios (<a href="https://seucreditodigital.com.br/como-emitir-passagens-com-milhas/" target="_blank" rel="noopener">fonte</a>).</p></div>
        <div class="mini-card"><h4>Tabela fixa</h4><p>Cada trecho tem um preço fixo em milhas. Comum em programas estrangeiros e parceiras. No LATAM Pass, a tabela fixa de parceiras é pedida pelo atendimento, como o WhatsApp (<a href="https://pontospravoar.com/passagens-milhas-latam-pass-como-funciona-quando-vale-pena-usar-milhas/" target="_blank" rel="noopener">fonte</a>).</p></div>
      </div>
      <p>No preço dinâmico aparecem resgates muito baratos de vez em quando (<a href="https://passageirodeprimeira.com/?p=387582" target="_blank" rel="noopener">fonte</a>), mas datas concorridas ficam caras. Flexibilidade de datas vale ouro.</p>
    `},
    { id: "5.2", title: "Passo a passo da emissão", min: 15, html: `
      <ol>
        <li>Entre no site ou app do programa e faça login.</li>
        <li>Busque a rota marcando pagar com milhas.</li>
        <li>Use o calendário ou datas próximas pra achar o dia mais barato.</li>
        <li>Escolha voo e tarifa; confira bagagem, assento e regras de cancelamento.</li>
        <li>Escolha como pagar as taxas. Na Smiles, dá pra pagar em dinheiro ou milhas (<a href="https://tecnoblog.net/responde/como-comprar-passagem-aerea-com-milhas/" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Informe os dados do passageiro e confirme.</li>
        <li>Guarde o localizador e o e-mail.</li>
      </ol>
      <div class="callout"><strong>Antes de confirmar:</strong> calcule o valor do milheiro. Se for menor que o custo das milhas, pague em dinheiro.</div>
    `},
    { id: "5.3", title: "Taxas e milhas + dinheiro", min: 10, html: `
      <p>Toda emissão tem taxas. Nos voos nacionais, principalmente a taxa de embarque. Nos internacionais, entram taxas estrangeiras e, em algumas companhias, sobretaxas altas.</p>
      <p>A opção de pagar parte em milhas e parte em dinheiro (na Smiles, o Smiles & Money) funciona como "vender" milhas pro programa. Calcule quanto cada milheiro vale nessa troca: se for menos do que você pagou, não compensa.</p>
    `},
    { id: "5.4", title: "Emitir pra outra pessoa", min: 5, html: `
      <p>Smiles, LATAM Pass, Azul e vários programas estrangeiros permitem emitir com suas milhas pra outras pessoas, com listas de beneficiários, limites de CPFs e análises antifraude (<a href="https://cartoeseviagens.com.br/emitir-passagem-com-milhas-para-outra-pessoa" target="_blank" rel="noopener">fonte</a>).</p>
    `},
    { id: "5.5", title: "Cancelamento e reembolso", min: 10, html: `
      <p class="lead">Passagem com milhas <strong>não tem cancelamento gratuito garantido</strong>. Depende da tarifa, rota, data do pedido e companhia operadora (<a href="https://cartoeseviagens.com.br/artigos/cancelamento-reembolso-latam-pass" target="_blank" rel="noopener">fonte</a>).</p>
      <ul>
        <li>Peça no <strong>programa que tirou as milhas</strong>, mesmo em voo de parceira (<a href="https://cartoeseviagens.com.br/artigos/cancelar-passagem-emitida-com-milhas" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Milhas, taxas e parte em dinheiro podem seguir caminhos diferentes. Peça um demonstrativo.</li>
        <li>No Smiles & Money, milhas válidas voltam com a validade original (<a href="https://cartoeseviagens.com.br/cancelamento-reembolso-smiles" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Remarcar costuma sair mais barato que cancelar. Simule as duas opções.</li>
      </ul>
    `}
  ],
  tasks: [
    "Simular (sem confirmar) a emissão da sua meta nos três programas",
    "Anotar milhas, taxas e regras de cancelamento de cada um",
    "Calcular o valor do milheiro e escolher a melhor emissão"
  ],
  quiz: [
    { q: "No preço dinâmico, quando a passagem tende a custar menos milhas?", o: ["Quando está barata em dinheiro", "Sempre na sexta-feira", "Nunca muda"], a: 0, e: "O preço em milhas acompanha a demanda e o preço em reais." },
    { q: "Onde pedir o cancelamento de uma passagem de parceira emitida com milhas Smiles?", o: ["Na companhia parceira", "Na Smiles, que tirou as milhas", "Na ANAC"], a: 1, e: "Comece pelo programa que retirou as milhas da sua conta." },
    { q: "Passagem emitida com milhas pode ser cancelada de graça sempre?", o: ["Sim, sempre", "Não, depende da tarifa e das regras", "Só se for nacional"], a: 1, e: "Pagar com milhas não garante cancelamento gratuito." }
  ],
  sources: [
    { t: "Como emitir passagens com milhas (Seu Crédito Digital)", u: "https://seucreditodigital.com.br/como-emitir-passagens-com-milhas/" },
    { t: "Passagens com milhas LATAM Pass (Pontos pra Voar)", u: "https://pontospravoar.com/passagens-milhas-latam-pass-como-funciona-quando-vale-pena-usar-milhas/" },
    { t: "Tabela fixa e dinâmica (Passageiro de Primeira)", u: "https://passageirodeprimeira.com/?p=387582" },
    { t: "Como comprar passagem com milhas (Tecnoblog)", u: "https://tecnoblog.net/responde/como-comprar-passagem-aerea-com-milhas/" },
    { t: "Emitir passagem para outra pessoa (Cartões e Viagens)", u: "https://cartoeseviagens.com.br/emitir-passagem-com-milhas-para-outra-pessoa" },
    { t: "Cancelamento e reembolso LATAM Pass (Cartões e Viagens)", u: "https://cartoeseviagens.com.br/artigos/cancelamento-reembolso-latam-pass" },
    { t: "Cancelamento e reembolso na Smiles (Cartões e Viagens)", u: "https://cartoeseviagens.com.br/cancelamento-reembolso-smiles" }
  ]
}
);
