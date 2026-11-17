/* Conteúdo do curso: módulos 6 a 10, projeto final e glossário */
window.CURSO = window.CURSO || { modules: [] };

window.CURSO.modules.push(
{
  id: 6, code: "M06", gate: "D7",
  title: "Caçando promoções",
  tagline: "Monitorar rotas o ano inteiro",
  lessons: [
    { id: "6.1", title: "Reconhecendo uma promoção de verdade", min: 10, html: `
      <p class="lead">"Promoção" só existe em relação ao preço normal da rota.</p>
      <ul>
        <li><strong>Em dinheiro:</strong> o Google Flights mostra se o preço está baixo, típico ou alto pra rota, com base no histórico.</li>
        <li><strong>Em milhas:</strong> anote por algumas semanas quanto a rota custa nos programas. Logo você sabe o que é barato.</li>
      </ul>
      <div class="callout"><strong>Regra prática:</strong> promoção real costuma ficar 25% ou mais abaixo do preço típico.</div>
    `},
    { id: "6.2", title: "As ferramentas", min: 15, html: `
      <div class="table-wrap"><table>
        <thead><tr><th>Ferramenta</th><th>Pra que serve</th><th>Como usar</th></tr></thead>
        <tbody>
          <tr><td>Google Flights</td><td>Preço, histórico e alertas</td><td>"Acompanhar preços" manda e-mail quando cai, em datas fixas ou flexíveis (<a href="https://olhardigital.com.br/2023/08/28/internet-e-redes-sociais/google-flights-alertara-sobre-melhor-momento-para-reservas-veja-como/" target="_blank" rel="noopener">fonte</a>). Grade de datas, gráfico de preços e "Explorar"</td></tr>
          <tr><td>Skyscanner / Kayak</td><td>Comparar sites e ver o mês</td><td>"Mês mais barato" e destino "qualquer lugar"</td></tr>
          <tr><td>Sites de alertas</td><td>Promoções relâmpago</td><td>Melhores Destinos, Passageiro de Primeira, Pontos pra Voar, Passagens Imperdíveis</td></tr>
          <tr><td>Sites dos programas</td><td>Preço em milhas</td><td>Busca com calendário, quando disponível</td></tr>
        </tbody>
      </table></div>
      <p><strong>Dica de aeroporto:</strong> o Google Flights aceita vários aeroportos de origem na mesma busca (<a href="https://www.360meridianos.com/dica/comprar-passagens-aereas-madrugada-barato" target="_blank" rel="noopener">fonte</a>). Saindo de Uberlândia, compare também GRU/CGH, CNF e BSB.</p>
    `},
    { id: "6.3", title: "Sazonalidade", min: 10, html: `
      <div class="season">
        <div class="season-row"><span class="tag hi">Alta</span>Dezembro a fevereiro, julho e feriados prolongados</div>
        <div class="season-row"><span class="tag lo">Baixa</span>Março a junho e agosto a novembro, fora dos feriados</div>
        <div class="season-row"><span class="tag mid">Dias</span>Terça, quarta e sábado costumam ser mais baratos que sexta e domingo</div>
        <div class="season-row"><span class="tag mid">Antecedência</span>Nacional: 1 a 3 meses. Internacional: 3 a 8 meses</div>
      </div>
      <p>No preço dinâmico, quando o voo está barato em dinheiro, tende a estar barato em milhas também.</p>
    `},
    { id: "6.4", title: "Seu sistema de monitoramento", min: 20, html: `
      <p class="lead">Monte uma lista de 5 a 10 rotas que você faria de verdade, com preço-alvo.</p>
      <div class="widget" data-widget="rotas"></div>
      <h3>Rotina semanal (15 min, no almoço)</h3>
      <ol>
        <li>Ler os alertas da semana.</li>
        <li>Ver se alguma rota bateu o preço-alvo, em dinheiro ou milhas.</li>
        <li>Conferir se há transferência bonificada aberta.</li>
        <li>Atualizar o preço típico.</li>
      </ol>
      <h3>Quando o alerta disparar</h3>
      <ol>
        <li>Confira datas e preço total, com taxas e bagagem.</li>
        <li>Compare dinheiro x milhas pelo valor do milheiro.</li>
        <li>Decida rápido: promoções duram horas ou poucos dias.</li>
      </ol>
    `},
    { id: "6.5", title: "Proteção pra decidir rápido", min: 5, html: `
      <p>Pela Resolução 400 da ANAC, você pode desistir de uma passagem em até 24 horas após a compra sem multa, se a compra foi feita com 7 dias ou mais de antecedência do voo. Isso permite garantir uma promoção e confirmar os detalhes no dia seguinte.</p>
      <div class="callout">Confira as regras do bilhete, principalmente em emissões com milhas e companhias estrangeiras.</div>
    `}
  ],
  tasks: [
    "Criar sua lista de 5 rotas com preço típico e preço-alvo",
    "Ativar \"Acompanhar preços\" no Google Flights pra cada uma",
    "Assinar um site ou grupo de alertas",
    "Colocar na agenda a rotina semanal de 15 minutos"
  ],
  quiz: [
    { q: "O preço típico de uma rota é R$ 2.000. A partir de quanto é uma promoção real, pela regra do curso?", o: ["R$ 1.900", "R$ 1.500 ou menos", "R$ 1.990"], a: 1, e: "25% abaixo de R$ 2.000 é R$ 1.500." },
    { q: "Qual período costuma ser mais barato?", o: ["Julho", "Dezembro a fevereiro", "Março a junho, fora de feriados"], a: 2, e: "Baixa temporada: março a junho e agosto a novembro, fora dos feriados." },
    { q: "O que a regra das 24 horas da ANAC permite?", o: ["Remarcar de graça sempre", "Desistir sem multa em até 24h, se comprou com 7+ dias de antecedência", "Cancelar qualquer passagem até a véspera"], a: 1, e: "É uma janela de desistência, com a condição dos 7 dias de antecedência." }
  ],
  sources: [
    { t: "Google Flights: monitoramento de preços (Olhar Digital)", u: "https://olhardigital.com.br/2023/08/28/internet-e-redes-sociais/google-flights-alertara-sobre-melhor-momento-para-reservas-veja-como/" },
    { t: "Como usar o Google Flights (360meridianos)", u: "https://www.360meridianos.com/dica/comprar-passagens-aereas-madrugada-barato" }
  ]
},
{
  id: 7, code: "M07", gate: "D8",
  title: "Programas internacionais",
  tagline: "Tabelas fixas, alianças e stopover",
  lessons: [
    { id: "7.1", title: "Por que usar programas estrangeiros", min: 10, html: `
      <ul>
        <li><strong>Tabela fixa.</strong> O TAP Miles&Go usa tabela fixa por região pra parceiras (<a href="https://www.cartoesdecredito.me/milhas/programa-de-fidelidade-tabela-fixa-e-tabela-flexivel" target="_blank" rel="noopener">fonte</a>). Na alta temporada, o preço em milhas não muda.</li>
        <li><strong>Executiva relativamente barata.</strong> A diferença em milhas é bem menor que em dinheiro.</li>
        <li><strong>Acesso a alianças.</strong> Um programa da Star Alliance emite voos de várias companhias do grupo.</li>
      </ul>
    `},
    { id: "7.2", title: "Como colocar pontos lá", min: 15, html: `
      <p class="lead">Os pontos chegam por transferência do banco, mas a paridade costuma ser pior que 1:1.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Aliança</th><th>Esfera</th><th>Livelo</th></tr></thead>
        <tbody>
          <tr><td>Iberia (Avios)</td><td>oneworld</td><td>2 : 1</td><td>3,5 : 1</td></tr>
          <tr><td>Flying Blue</td><td>SkyTeam</td><td>3,5 : 1 (3 : 1 Clube)</td><td>3,5 : 1</td></tr>
          <tr><td>TAP Miles&Go</td><td>Star Alliance</td><td>2,7 : 1 (2,2 : 1 Clube)</td><td>—</td></tr>
          <tr><td>Turkish Miles&Smiles</td><td>Star Alliance</td><td>4,5 : 1 (3,8 : 1 Clube)</td><td>—</td></tr>
          <tr><td>British Airways (Avios)</td><td>oneworld</td><td>—</td><td>3,5 : 1</td></tr>
        </tbody>
      </table></div>
      <p class="note">Paridades de set/2026 (<a href="https://www.cartoesdecredito.me/milhas/programas-parceiros-da-esfera-2026/" target="_blank" rel="noopener">Esfera</a>, <a href="https://cartoeseviagens.com.br/parceiros-livelo-transferencia" target="_blank" rel="noopener">Livelo</a>). Há campanhas melhores: em set/2026 a Esfera baixou a TAP pra 1,8 : 1 no Clube (<a href="https://passageirodeprimeira.com/?p=566521" target="_blank" rel="noopener">fonte</a>).</p>
      <div class="example">
        <div class="example-label">A conta da paridade</div>
        <p>1 Avios = 2 pontos Esfera. Se você paga R$ 25 por mil pontos Esfera, cada mil Avios custa <strong>R$ 50</strong>. Compare com o valor do resgate.</p>
      </div>
      <p>Pra Iberia, a Esfera pede 2 pontos por Avios contra 3,5 da Livelo (<a href="https://www.cartoesdecredito.me/?p=89110" target="_blank" rel="noopener">fonte</a>), por isso muita gente prefere a Esfera pra programas estrangeiros.</p>
    `},
    { id: "7.3", title: "Sweet spots", min: 15, html: `
      <p class="lead">Sweet spot é um resgate que cobra muito menos milhas que o normal pra aquela viagem.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Resgate</th><th>Milhas (aprox.)</th></tr></thead>
        <tbody>
          <tr><td>Iberia</td><td>São Paulo – Madri, eco / exec</td><td>34.000 / 85.000 Avios (<a href="https://seucreditodigital.com.br/como-emitir-passagens-com-milhas/" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>Aeroplan</td><td>Brasil – EUA, eco / exec</td><td>40.000 / 60.000 (<a href="https://travel.com.br/nova-york/" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>TAP Miles&Go</td><td>Brasil – América do Norte em parceiras, eco / exec</td><td>55.000 / 95.000 (<a href="https://travel.com.br/?p=85" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>AAdvantage</td><td>Voos nacionais da GOL</td><td>7.500 por trecho (<a href="https://passageirodeprimeira.com/?p=316606" target="_blank" rel="noopener">fonte</a>)</td></tr>
        </tbody>
      </table></div>
      <p>Sweet spots mudam ou acabam sem aviso. O TAP Miles&Go já foi uma das melhores opções e hoje tem menos oportunidades (<a href="https://www.cartoesdecredito.me/?p=82883" target="_blank" rel="noopener">fonte</a>).</p>
      <div class="callout warn"><strong>Cuidado com as taxas.</strong> Alguns programas repassam taxas de combustível (YQ), que somam centenas de dólares. Programas com Avios costumam repassar; o AAdvantage raramente (<a href="https://pontospravoar.com/compartilhando-emissoes-51-voos-uma-viagem-ferias-familia-cabines-premium/" target="_blank" rel="noopener">fonte</a>).</div>
    `},
    { id: "7.4", title: "Stopover: duas viagens em uma", min: 10, html: `
      <p class="lead">Stopover é uma parada de mais de 24 horas no meio do caminho, sem pagar a mais (ou pagando pouco).</p>
      <ul>
        <li><strong>TAP Miles&Go:</strong> permite stopover em emissões de ida e volta com milhas; não em só ida, nem em voos puros da TAP (<a href="https://pontospravoar.com/conheca-stopover-utilizacao-programas-fidelidade-emissoes-milhas/" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Em passagens pagas:</strong> TAP em Lisboa ou Porto (<a href="https://pontospravoar.com/tire-proveito-dos-stopovers-paradas-gratuitos-em-suas-viagens-internacionais/" target="_blank" rel="noopener">fonte</a>), Iberia "Stopover Hola Madrid" de 1 a 6 noites (<a href="https://youhavebeenupgraded.boardingarea.com/2019/10/iberia-fuhrt-stopover-programm-in-madrid-ein/" target="_blank" rel="noopener">fonte</a>), Air France-KLM na ida e na volta.</li>
      </ul>
      <p>Exemplo: ir a Paris pela TAP com 4 dias em Lisboa no caminho.</p>
    `},
    { id: "7.5", title: "O passo a passo seguro", min: 10, html: `
      <div class="callout warn">Regra de ouro: <strong>nunca transfira pontos antes de achar o voo disponível.</strong></div>
      <ol>
        <li>Crie conta gratuita no programa estrangeiro.</li>
        <li>Busque disponibilidade pra milhas no site do programa ou de um parceiro da aliança.</li>
        <li>Anote milhas e taxas totais; calcule o custo em reais com a paridade.</li>
        <li>Compare com dinheiro e com os programas brasileiros.</li>
        <li>Só então transfira. Pode levar dias.</li>
        <li>Emita assim que as milhas chegarem.</li>
      </ol>
    `}
  ],
  tasks: [
    "Criar conta na Iberia (Avios) e em um programa da Star Alliance",
    "Buscar sua meta internacional em dois programas estrangeiros",
    "Calcular o custo em pontos do banco e comparar com Smiles e LATAM Pass"
  ],
  quiz: [
    { q: "Paridade Esfera → Iberia de 2:1. Quantos pontos Esfera pra 34.000 Avios?", o: ["17.000", "34.000", "68.000"], a: 2, e: "34.000 × 2 = 68.000 pontos Esfera." },
    { q: "Qual o primeiro passo antes de transferir pra um programa estrangeiro?", o: ["Transferir tudo de uma vez", "Confirmar que o voo tem disponibilidade em milhas", "Assinar o clube"], a: 1, e: "Transferência não volta. Ache o voo primeiro." },
    { q: "O que são taxas de combustível (YQ)?", o: ["Taxas de embarque brasileiras", "Sobretaxas que alguns programas repassam e que podem ser altas", "Um tipo de milha"], a: 1, e: "Elas podem somar centenas de dólares. Sempre veja o total antes." }
  ],
  sources: [
    { t: "Tabela fixa e flexível nos programas (cartoesdecredito.me)", u: "https://www.cartoesdecredito.me/milhas/programa-de-fidelidade-tabela-fixa-e-tabela-flexivel" },
    { t: "Programas parceiros da Esfera 2026 (cartoesdecredito.me)", u: "https://www.cartoesdecredito.me/milhas/programas-parceiros-da-esfera-2026/" },
    { t: "Parceiros Livelo e paridades (Cartões e Viagens, set/2026)", u: "https://cartoeseviagens.com.br/parceiros-livelo-transferencia" },
    { t: "Esfera reduz paridade para TAP (Passageiro de Primeira)", u: "https://passageirodeprimeira.com/?p=566521" },
    { t: "Milhas para Nova York (travel.com.br)", u: "https://travel.com.br/nova-york/" },
    { t: "Voos nacionais com programas internacionais (Passageiro de Primeira)", u: "https://passageirodeprimeira.com/?p=316606" },
    { t: "Stopover nos programas (Pontos pra Voar)", u: "https://pontospravoar.com/conheca-stopover-utilizacao-programas-fidelidade-emissoes-milhas/" }
  ]
},
{
  id: 8, code: "M08", gate: "E9",
  title: "Avançado",
  tagline: "Executiva, status e salas VIP",
  lessons: [
    { id: "8.1", title: "Executiva com milhas", min: 15, html: `
      <h3>1. Emitir direto em executiva</h3>
      <p>É onde as milhas mais rendem: a executiva pode custar 5 a 10 vezes a econômica em dinheiro, mas só 2 a 3 vezes mais milhas. Programas com tabela fixa costumam ter as melhores opções.</p>
      <h3>2. Fazer upgrade</h3>
      <p>Na LATAM, qualquer adulto em econômica pode receber ofertas de upgrade por leilão, valor fixo ou em tempo real, mesmo sem Elite (<a href="https://www.melhoresdestinos.com.br/upgrade-cabine-latam.html" target="_blank" rel="noopener">fonte</a>). Clientes Elite e do cartão cobranded recebem trechos cortesia, conforme disponibilidade (<a href="https://passageirodeprimeira.com/?p=417026" target="_blank" rel="noopener">fonte</a>).</p>
      <div class="callout">Disponibilidade de executiva com milhas é rara. Busque com meses de antecedência ou perto da data, quando liberam assentos não vendidos.</div>
    `},
    { id: "8.2", title: "Status (categorias elite)", min: 10, html: `
      <ul>
        <li><strong>LATAM Pass:</strong> LATAM, Gold, Platinum, Black e Black Signature; requalificação a cada 12 meses (<a href="https://passageirodeprimeira.com/?p=263499" target="_blank" rel="noopener">fonte</a>). A qualificação não vem das milhas usadas em passagens (<a href="https://latampass.latam.com/pt_br/vem-com-milhas/beneficios-das-categorias-elite-o-que-muda-na-pratica" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Smiles:</strong> o nível mais alto é a categoria Magno, oficializada em 2026, acima da Diamante (<a href="https://passageirodeprimeira.com/?p=515474" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Na LATAM, status define a fila do upgrade</strong> (<a href="https://www.melhoresdestinos.com.br/milhas/novas-regras-upgrade-cabine-latam-2027" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
      <div class="callout"><strong>Vale correr atrás?</strong> Só se você voa com frequência numa companhia. Senão, foque em acumular e resgatar bem.</div>
    `},
    { id: "8.3", title: "Salas VIP", min: 10, html: `
      <p class="lead">Formas de entrar: executiva ou primeira, status, cartões premium, programas de acesso e pagamento avulso (<a href="https://cartoeseviagens.com.br/artigos/salas-vip-em-aeroportos-entenda-o-que-sao" target="_blank" rel="noopener">fonte</a>).</p>
      <ul>
        <li><strong>Priority Pass:</strong> mais de 1.900 salas e experiências em 600+ cidades (ago/2026) (<a href="https://cartoeseviagens.com.br/programas-de-acesso/priority-pass" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>LoungeKey:</strong> ligado a cartões elegíveis, geralmente Platinum, Black e Infinite (<a href="https://www.santander.com.br/blog/esfera/sala-vip-loungkey" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Cartões:</strong> em março de 2026, 22 cartões no Brasil davam acesso ilimitado a algum grande programa (<a href="https://www.melhoresdestinos.com.br/melhores-cartoes-credito-salas-vip.html" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Restaurantes:</strong> alguns programas dão crédito em restaurantes de aeroporto (<a href="https://www.santander.com.br/blog/shopping/sala-vip-priority-pass/" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
    `},
    { id: "8.4", title: "Gerenciando vários programas", min: 5, html: `
      <div class="stack">
        <div class="stack-row"><b>1</b> programa de banco principal, pra acumular e esperar promoções</div>
        <div class="stack-row"><b>1–2</b> programas aéreos brasileiros pra concentrar transferências</div>
        <div class="stack-row"><b>Sob demanda</b> programas estrangeiros, só com uma emissão específica</div>
      </div>
      <p>E uma planilha controlando saldo e vencimento de cada um (Módulo 10).</p>
    `}
  ],
  tasks: [
    "Pesquisar a executiva da sua meta internacional em 2 programas",
    "Ver se o seu cartão dá acesso a sala VIP",
    "Definir seu banco principal e 1–2 programas aéreos"
  ],
  quiz: [
    { q: "Por que a executiva costuma ser o melhor uso de milhas?", o: ["Porque é sempre gratuita", "Porque custa muito mais em dinheiro, mas só um pouco mais em milhas", "Porque não tem taxas"], a: 1, e: "O valor do milheiro dispara quando a passagem em dinheiro é muito cara." },
    { q: "Na LATAM, o que define a prioridade no upgrade?", o: ["A hora do pedido", "A categoria elite", "O preço da passagem"], a: 1, e: "Pelas novas regras, a categoria elite é o primeiro critério." },
    { q: "Qual a estrutura recomendada de programas?", o: ["Ter conta em todos e espalhar pontos", "1 banco principal + 1–2 aéreos + estrangeiros sob demanda", "Só programas estrangeiros"], a: 1, e: "Concentrar evita saldos pequenos vencendo." }
  ],
  sources: [
    { t: "Upgrade de cabine LATAM 2026 (Melhores Destinos)", u: "https://www.melhoresdestinos.com.br/upgrade-cabine-latam.html" },
    { t: "Categorias Elite do LATAM Pass (Passageiro de Primeira)", u: "https://passageirodeprimeira.com/?p=263499" },
    { t: "Smiles lança categoria Magno (Passageiro de Primeira)", u: "https://passageirodeprimeira.com/?p=515474" },
    { t: "Priority Pass (Cartões e Viagens)", u: "https://cartoeseviagens.com.br/programas-de-acesso/priority-pass" },
    { t: "Melhores cartões para salas VIP 2026 (Melhores Destinos)", u: "https://www.melhoresdestinos.com.br/melhores-cartoes-credito-salas-vip.html" }
  ]
},
{
  id: 9, code: "M09", gate: "E10",
  title: "Riscos e erros",
  tagline: "Golpes, bloqueios e milhas vencidas",
  lessons: [
    { id: "9.1", title: "Venda de milhas", min: 10, html: `
      <p class="lead">No 3º trimestre de 2025, 11,6% dos pontos e milhas expiraram no Brasil, o menor nível da história (<a href="https://www.panrotas.com.br/tudo-sobre/pontos" target="_blank" rel="noopener">fonte</a>). Deixar vencer ainda é o erro mais comum.</p>
      <p>Sobre vender milhas pra sites que compram:</p>
      <ul>
        <li><strong>Viola as regras.</strong> Não é crime em si, mas descumpre os termos de uso e sujeita a conta a penalidades (<a href="https://www.santander.com.br/blog/para-voce/vender-milhas/" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Bloqueio e perda</strong> de conta, passagens e milhas (<a href="https://cartoeseviagens.com.br/evitar-bloqueio-conta-fidelidade" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Risco das intermediárias:</strong> na 123Milhas, clientes com pacotes cancelados receberam vouchers em vez de reembolso em dinheiro (<a href="https://bpmoney.com.br/mercado/123-milhas-justica-determina-canal-para-clientes-afetados" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
      <div class="callout"><strong>Use suas milhas pra viajar.</strong> É aí que elas valem mais.</div>
    `},
    { id: "9.2", title: "Golpes comuns", min: 10, html: `
      <ul>
        <li><strong>Sites e perfis falsos</strong> com passagens "muito baratas" e Pix pra pessoa física.</li>
        <li><strong>E-mails e SMS falsos</strong> sobre "milhas vencendo hoje". Nunca clique: entre no app oficial.</li>
        <li><strong>Pedido de código ou senha.</strong> Nunca compartilhe código de acesso, senha, número do programa ou dados do cartão (<a href="https://passageirodeprimeira.com/?p=551423" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>"Emissor" que pede acesso à sua conta.</strong> Risco de roubo e de bloqueio.</li>
      </ul>
      <div class="callout"><strong>Proteção básica:</strong> senha diferente em cada programa, verificação em duas etapas e extrato conferido todo mês.</div>
    `},
    { id: "9.3", title: "Bloqueio de conta", min: 10, html: `
      <p class="lead">Motivos: suspeita de fraude, senha compartilhada, venda de milhas, emissão comercial pra terceiros, cartão irregular, dados divergentes ou excesso de beneficiários (<a href="https://cartoeseviagens.com.br/evitar-bloqueio-conta-fidelidade" target="_blank" rel="noopener">fonte</a>).</p>
      <ul>
        <li>CPF, nome e e-mail iguais em todos os programas e no cartão.</li>
        <li>Emita pra terceiros só pra família e amigos, sem cobrar.</li>
        <li>Não empreste sua conta.</li>
        <li>Pague com cartão no seu nome.</li>
      </ul>
    `},
    { id: "9.4", title: "Erros que fazem perder milhas", min: 10, html: `
      <ol>
        <li><strong>Deixar vencer.</strong> Controle por lote.</li>
        <li><strong>Transferir sem plano.</strong></li>
        <li><strong>Guardar demais.</strong> Tabelas mudam e as milhas podem valer menos amanhã.</li>
        <li><strong>Assinar clube e esquecer.</strong></li>
        <li><strong>Trocar por produtos.</strong> Costuma render muito menos que passagens.</li>
        <li><strong>Não fazer a conta</strong> do valor do milheiro.</li>
      </ol>
      <div class="callout warn">Se a fatura não couber num mês, pare de usar o cartão pra pontuar. Milhas não valem uma dívida.</div>
    `}
  ],
  tasks: [
    "Ligar a verificação em duas etapas em todos os programas",
    "Trocar senhas repetidas",
    "Conferir pontos vencendo nos próximos 6 meses"
  ],
  quiz: [
    { q: "Qual o erro mais comum que faz perder milhas?", o: ["Golpe", "Deixar vencer", "Bloqueio de conta"], a: 1, e: "Mesmo no menor nível histórico, mais de 1 em cada 10 pontos expirou." },
    { q: "Chegou um SMS dizendo que suas milhas vencem hoje, com um link. O que fazer?", o: ["Clicar e resgatar rápido", "Ignorar o link e conferir direto no app oficial", "Responder com seu CPF"], a: 1, e: "Nunca clique em links desse tipo; confira no app oficial." },
    { q: "Vender milhas é:", o: ["Permitido e sem riscos", "Contra os termos dos programas, com risco de bloqueio", "Obrigatório pra quem tem saldo alto"], a: 1, e: "Viola os termos de uso e pode levar a bloqueio e perda." }
  ],
  sources: [
    { t: "Taxa de expiração de pontos (Panrotas, fev/2026)", u: "https://www.panrotas.com.br/tudo-sobre/pontos" },
    { t: "Vender milhas é seguro? (Santander)", u: "https://www.santander.com.br/blog/para-voce/vender-milhas/" },
    { t: "Conta de milhas bloqueada (Cartões e Viagens)", u: "https://cartoeseviagens.com.br/evitar-bloqueio-conta-fidelidade" },
    { t: "123Milhas: Justiça determina canal (BP Money)", u: "https://bpmoney.com.br/mercado/123-milhas-justica-determina-canal-para-clientes-afetados" }
  ]
},
{
  id: 10, code: "M10", gate: "F11",
  title: "Seu sistema",
  tagline: "Planilha, calculadoras e monitor em Python",
  lessons: [
    { id: "10.1", title: "A planilha de controle", min: 20, html: `
      <p class="lead">Três abas: saldos por lote, custo médio por programa e histórico de emissões.</p>
      <h3>Aba 1: Saldos e vencimentos</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Tipo</th><th>Saldo</th><th>Origem</th><th>Custo (R$)</th><th>Vence em</th><th>Dias</th></tr></thead>
        <tbody>
          <tr><td>Livelo</td><td>Banco</td><td>12.000</td><td>Cartão</td><td>0</td><td>2027-08-01</td><td>fórmula</td></tr>
          <tr><td>Smiles</td><td>Aéreo</td><td>18.000</td><td>Transf. 80%</td><td>280</td><td>2027-09-15</td><td>fórmula</td></tr>
        </tbody>
      </table></div>
      <p>Dias até vencer: <code>=F2-HOJE()</code>, com formatação condicional em vermelho abaixo de 90.</p>
      <h3>Aba 2: Custo médio</h3>
      <div class="formula">custo médio do milheiro = soma do custo dos lotes ÷ soma das milhas × 1.000</div>
      <h3>Aba 3: Histórico de emissões</h3>
      <p>Data, rota, programa, milhas, taxas, preço em dinheiro e valor do milheiro. Mostra quanto você economizou de verdade.</p>
    `},
    { id: "10.2", title: "Calculadoras rápidas", min: 5, html: `
      <ul>
        <li><strong>Vale usar milhas?</strong> <code>=(preco - taxas) / milhas * 1000</code></li>
        <li><strong>Vale transferir ou comprar?</strong> <code>=valor_por_mil / (1 + bonus)</code></li>
      </ul>
      <p>As duas estão prontas na aba <a href="#ferramentas">Ferramentas</a> deste site.</p>
    `},
    { id: "10.3", title: "Monitor de preços com Python", min: 25, html: `
      <p class="lead">O jeito mais seguro é aproveitar os alertas que você já recebe, em vez de raspar sites (o que costuma violar termos de uso e quebra com frequência).</p>
      <ol>
        <li>Ative "Acompanhar preços" no Google Flights. Os alertas chegam por e-mail.</li>
        <li>Um script lê esses e-mails (Gmail API ou IMAP), extrai rota e preço e salva num CSV.</li>
        <li>Compara com o preço-alvo e notifica se estiver abaixo.</li>
        <li>Com o CSV crescendo, você faz gráficos do histórico e descobre a sazonalidade real.</li>
      </ol>
      <pre><code>import csv, re, imaplib, email
from datetime import date

ALVOS = {"Uberlândia → Lisboa": 3500, "São Paulo → Santiago": 1200}

def ler_alertas(usuario, senha_app):
    caixa = imaplib.IMAP4_SSL("imap.gmail.com")
    caixa.login(usuario, senha_app)
    caixa.select("INBOX")
    _, ids = caixa.search(None, '(FROM "google" SUBJECT "preço")')
    for i in ids[0].split():
        _, dados = caixa.fetch(i, "(RFC822)")
        yield email.message_from_bytes(dados[0][1])

def extrair_preco(texto):
    achado = re.search(r"R\\$\\s?([\\d\\.]+)", texto)
    return int(achado.group(1).replace(".", "")) if achado else None

# para cada alerta: extrair rota e preço, salvar no CSV,
# comparar com ALVOS e notificar se estiver abaixo</code></pre>
      <div class="callout">Ajuste as expressões regulares olhando um alerta real. Use uma "senha de app" do Google, nunca a senha principal.</div>
    `},
    { id: "10.4", title: "Rotina mensal", min: 5, html: `
      <p>No primeiro dia útil do mês (20 minutos):</p>
      <ol>
        <li>Atualizar saldos e lotes a partir dos extratos.</li>
        <li>Ver o que vence em 90 dias e planejar o uso.</li>
        <li>Revisar os preços-alvo das rotas.</li>
        <li>Olhar o calendário de promoções do mês.</li>
      </ol>
    `}
  ],
  tasks: [
    "Montar a planilha com as três abas",
    "Criar a aba de calculadora",
    "(Opcional) Rodar o script com um alerta real do Google Flights"
  ],
  quiz: [
    { q: "Por que controlar milhas por lote e não pelo saldo total?", o: ["Porque cada lote tem sua própria validade", "Porque o saldo total não aparece no app", "Não faz diferença"], a: 0, e: "Lotes vencem em datas diferentes; o saldo total esconde isso." },
    { q: "Qual a forma mais segura de automatizar o monitoramento?", o: ["Raspar o site das companhias a cada minuto", "Ler os alertas de e-mail que você já recebe", "Pedir a senha de alguém"], a: 1, e: "Raspar sites costuma violar termos e quebra fácil." },
    { q: "Lotes: 10.000 milhas a R$ 150 e 20.000 a R$ 300. Qual o custo médio do milheiro?", o: ["R$ 15", "R$ 22,50", "R$ 45"], a: 0, e: "(150 + 300) ÷ 30.000 × 1.000 = R$ 15." }
  ],
  sources: []
}
);

window.CURSO.final = {
  title: "Projeto final",
  steps: [
    ["Meta", "Defina destino, período, pessoas e cabine.", 0],
    ["Pesquisa de preço", "Preço típico em dinheiro e em milhas em 3 programas.", 5],
    ["Plano de acúmulo", "Quantas milhas faltam e de onde vêm.", 3],
    ["Transferência", "Espere uma boa campanha e transfira só o necessário.", 4],
    ["Monitoramento", "Alertas ativos até bater o alvo.", 6],
    ["Emissão", "Emita e confira as regras de cancelamento.", 5],
    ["Registro", "Anote tudo no histórico.", 10]
  ]
};

window.CURSO.glossario = [
  ["Milheiro", "1.000 milhas ou pontos. A unidade usada pra falar de custo e valor."],
  ["Custo do milheiro", "Quanto você pagou (ou pagaria) por 1.000 milhas."],
  ["Valor do milheiro", "Quanto cada 1.000 milhas valeram numa passagem: (preço − taxas) ÷ milhas × 1.000."],
  ["Paridade", "Quantos pontos do banco viram 1 milha no programa de destino. Ex.: 2:1 = 2 pontos para 1 milha."],
  ["Transferência bonificada", "Promoção em que o programa aéreo dá milhas extras ao receber seus pontos."],
  ["Cobranded", "Cartão ligado a uma companhia aérea, que credita milhas direto no programa dela."],
  ["Clube", "Assinatura mensal que dá pontos todo mês e vantagens como bônus maiores."],
  ["Shopping de pontos", "Portal que paga pontos por compras em lojas parceiras."],
  ["Double dip", "Ganhar pontos duas vezes na mesma compra: no portal e no cartão."],
  ["Preço dinâmico", "Quando o preço em milhas muda conforme a demanda e o preço em reais."],
  ["Tabela fixa", "Quando cada trecho tem um preço fixo em milhas, independente da demanda."],
  ["Sweet spot", "Resgate que custa muito menos milhas do que o normal pra aquela viagem."],
  ["Stopover", "Parada de mais de 24h numa cidade no meio do caminho."],
  ["Taxas de combustível (YQ)", "Sobretaxas que alguns programas repassam em emissões com milhas."],
  ["Aliança", "Grupo de companhias que compartilham parcerias: Star Alliance, oneworld e SkyTeam."],
  ["Categoria elite", "Nível de status por voar muito, com benefícios como upgrades e salas VIP."],
  ["Lote", "Grupo de milhas que entrou junto e tem a mesma data de validade."],
  ["Conta Família", "Recurso da Smiles que junta milhas de até 6 pessoas numa conta."],
  ["Smiles & Money", "Opção de pagar parte da passagem em milhas e parte em dinheiro."],
  ["Breakage", "Porcentagem de pontos que expiram sem uso."]
];
