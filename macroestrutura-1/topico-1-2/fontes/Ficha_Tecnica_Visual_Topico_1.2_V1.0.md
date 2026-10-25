# FICHA TÉCNICA VISUAL — TÓPICO 1.2
## Linguagem Verbal, Não Verbal e Multimodal
### Plano de Estudo Linguístico e da Língua Portuguesa — 2026
### Versão 1.0

---

# 0. FUNÇÃO DO DOCUMENTO

Este documento consolida o manifesto de recursos visuais do **Tópico 1.2 — Linguagem Verbal, Não Verbal e Multimodal**.

Sua função é registrar, para cada recurso:

— nome canônico do arquivo ou componente;  
— regime de produção;  
— função didática;  
— núcleo representacional;  
— elementos obrigatórios;  
— elementos proibidos;  
— legenda;  
— texto alternativo;  
— posição prevista no HTML;  
— comportamento editorial;  
— observações de CSS;  
— estado de validação.

Princípio geral:

**FUNÇÃO → REPRESENTAÇÃO → IMPLEMENTAÇÃO**

O recurso visual não deve existir por decoração.  
Ele deve tornar perceptível alguma relação necessária para a operação didática.

---

# 1. REGIMES DE PRODUÇÃO

Os recursos deste tópico pertencem a quatro regimes.

## A. FAC-SÍMILE DOCUMENTAL

Utilizado quando a materialidade histórica ou editorial do objeto é parte da análise.

Não reconstruir por IA.

## B. IMAGEM DOCUMENTAL / CORPUS REAL

Utilizado quando a imagem real é o próprio objeto analisado.

Não reinterpretar, redesenhar ou modificar.

## C. CENA DIDÁTICA CONSTRUÍDA

Imagem criada para controlar uma situação observável sem depender de documento histórico.

Pode ser produzida por IA, desde que o resultado permaneça neutro e funcional.

## D. COMPOSIÇÃO EDITORIAL NATIVA

Construída diretamente em HTML/CSS e, quando necessário, SVG inline.

Preferida quando o objeto depende de:

— texto exato;  
— hierarquia;  
— seta;  
— pictograma;  
— organização espacial;  
— tipografia;  
— alteração controlada entre versões.

---

# 2. REGRAS GERAIS DE IMPLEMENTAÇÃO

Todos os recursos visuais devem:

— preservar proporção;  
— evitar `object-fit: cover`;  
— evitar altura fixa;  
— permanecer indivisíveis quando sua leitura depender da composição completa;  
— utilizar `<figure>` e `<figcaption>` quando houver legenda;  
— receber `alt` funcional, sem entregar a resposta do exercício;  
— ser posicionados imediatamente próximos ao trecho que os introduz;  
— não receber setas, círculos, rótulos ou interpretações adicionais, salvo quando esses elementos forem parte do próprio corpus;  
— não ser redimensionados silenciosamente pelo paginador.

Composições HTML/CSS devem ser tratadas como parte do conteúdo, não como decoração.

---

# 3. INVENTÁRIO CANÔNICO

---

# ASSET 01 — FAC-SÍMILE DA DEDICATÓRIA DE *MEMÓRIAS PÓSTUMAS DE BRÁS CUBAS*

## Identificação

**ID editorial:** `facsimile-01-memorias-postumas`  
**Arquivo recomendado:** `facsimile_01_dedicatoria_memorias_postumas_1881.png`

## Regime

**FAC-SÍMILE DOCUMENTAL**

## Local

Texto Teórico — Parte III  
Seção: **Materialidade também pode trabalhar**

## Função didática

Demonstrar que:

**preservar o conteúdo verbal ≠ preservar toda a configuração material da manifestação.**

O recurso deve permitir observar:

— distribuição vertical;  
— espaçamento;  
— segmentação;  
— isolamento dos blocos verbais;  
— organização da página.

## Núcleo representacional

A página da dedicatória da primeira edição em livro de 1881, preservando sua disposição gráfica.

## Obrigatório

— reprodução documental fiel;  
— página inteira ou recorte amplo suficiente para preservar relações espaciais;  
— resolução capaz de tornar perceptíveis palavras, vazios e distribuição;  
— orientação vertical original.

## Proibido

— recriação tipográfica moderna;  
— redesenho por IA;  
— remontagem da disposição;  
— inserção de marcações explicativas;  
— crop que elimine justamente os espaços analisados.

## Legenda recomendada

**Dedicatória de *Memórias Póstumas de Brás Cubas* na primeira edição em livro, 1881. A disposição gráfica integra o objeto analisado.**

## Alt text

`Página histórica da dedicatória de Memórias Póstumas de Brás Cubas, com palavras distribuídas verticalmente e separadas por amplos espaços.`

## HTML

```html
<figure class="visual facsimile-topic atomic-group" id="tt-visual-01">
  <img
    src="imagens/facsimile_01_dedicatoria_memorias_postumas_1881.png"
    alt="Página histórica da dedicatória de Memórias Póstumas de Brás Cubas, com palavras distribuídas verticalmente e separadas por amplos espaços."
    loading="eager">
  <figcaption>
    Dedicatória de <em>Memórias Póstumas de Brás Cubas</em> na primeira edição em livro, 1881.
  </figcaption>
</figure>
```

## CSS

Herdar o regime genérico de `.visual`.

Ajustes locais permitidos:

```css
.facsimile-topic {
    max-width: 78%;
    margin-inline: auto;
}
```

Não impor altura fixa.

## Estado

**GATE DOCUMENTAL**

O recorte moderno atualmente disponível serve apenas como referência provisória.  
Para congelamento definitivo, preferir fac-símile da edição de 1881.

---

# ASSET 02 — CAMPANHA DO ENEM 2020

## Identificação

**ID editorial:** `facsimile-02-enem-2020`  
**Arquivo atual:** `FAC_SIMILE_02_Campanha_ENEM_2020_Questao_30.png`

## Regime

**FAC-SÍMILE DOCUMENTAL**

## Local

Texto Teórico — Parte III  
Seção: **Ler multimodalmente: uma campanha do ENEM 2020**

## Função didática

Permitir análise da relação entre:

— componente verbal;  
— representação visual;  
— metáfora;  
— configuração corporal;  
— reforço;  
— expansão;  
— especificação.

## Núcleo representacional

A composição real utilizada na Questão 30 do ENEM 2020.

## Obrigatório

— frase visível;  
— mulher com parte inferior do rosto coberta;  
— composição original preservada;  
— proporção original.

## Proibido

— redesenho;  
— retoque interpretativo;  
— substituição por cena semelhante;  
— exclusão de componente verbal ou visual.

## Legenda recomendada

**Campanha reproduzida na Questão 30 do ENEM 2020.**

## Alt text

`Campanha do ENEM 2020 com uma mulher cobrindo parte do rosto com tecido e a frase Para nós, a rua é um campo de batalha.`

## HTML

```html
<figure class="visual facsimile-topic atomic-group" id="tt-visual-02">
  <img
    src="imagens/FAC_SIMILE_02_Campanha_ENEM_2020_Questao_30.png"
    alt="Campanha do ENEM 2020 com uma mulher cobrindo parte do rosto com tecido e a frase Para nós, a rua é um campo de batalha."
    loading="eager">
  <figcaption>
    Campanha reproduzida na Questão 30 do ENEM 2020.
  </figcaption>
</figure>
```

## Estado

**VALIDADO DOCUMENTALMENTE**

---

# ASSET 03 — VISUAL 01A: MESMA POSTURA, CENA DE FRIO

## Identificação

**ID editorial:** `tp-visual-01a`  
**Arquivo recomendado:** `visual_01a_postura_frio.png`

## Regime

**CENA DIDÁTICA CONSTRUÍDA / IA**

## Local

Texto Prático — Exercício 5  
Cena A

## Função didática

Tornar perceptível:

**a mesma postura corporal pode aparecer em situação que sustenta leitura não relacionada a resistência.**

## Núcleo representacional

Pessoa esperando ônibus em manhã muito fria, com braços cruzados junto ao corpo.

## Obrigatório

— ponto de ônibus reconhecível;  
— exterior;  
— manhã fria;  
— roupa de frio;  
— braços cruzados;  
— postura compatível com conservação de calor;  
— contexto suficiente para tornar o frio perceptível.

Elementos opcionais úteis:

— bafo visível;  
— luz fria;  
— casaco;  
— cachecol;  
— céu cinza.

## Proibido

— discussão;  
— expressão de raiva;  
— gesto acusatório;  
— outra pessoa em confronto direto;  
— dramatização psicológica.

## Direção visual

Realismo sóbrio e editorial.

Enquadramento médio, mostrando corpo e contexto.

## Legenda

Não inserir legenda interpretativa.

No máximo:

**Cena A — pessoa aguardando o ônibus numa manhã de temperatura muito baixa.**

## Alt text

`Pessoa com roupa de frio e braços cruzados aguarda em um ponto de ônibus numa manhã fria.`

## HTML

```html
<figure class="visual visual-topic atomic-group">
  <img
    src="imagens/visual_01a_postura_frio.png"
    alt="Pessoa com roupa de frio e braços cruzados aguarda em um ponto de ônibus numa manhã fria."
    loading="eager">
</figure>
```

## CSS

Deve compartilhar dimensões com a Cena B.

Preferir par comparativo:

```css
.scene-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4mm;
}
```

No PDF, se o par não couber com legibilidade, permitir empilhamento vertical controlado.

## Estado

**A PRODUZIR**

---

# ASSET 04 — VISUAL 01B: MESMA POSTURA, CENA DE REUNIÃO

## Identificação

**ID editorial:** `tp-visual-01b`  
**Arquivo recomendado:** `visual_01b_postura_reuniao.png`

## Regime

**CENA DIDÁTICA CONSTRUÍDA / IA**

## Local

Texto Prático — Exercício 5  
Cena B

## Função didática

Tornar plausível, sem provar psicologicamente, uma leitura de afastamento ou resistência em situação social.

## Núcleo representacional

Pessoa sentada numa reunião, após rejeição de proposta, com braços cruzados e comportamento corporal mais fechado.

## Obrigatório

— ambiente de reunião;  
— outras pessoas presentes;  
— personagem principal sentado;  
— braços cruzados;  
— postura ligeiramente recuada ou fechada;  
— contexto de discussão ou apresentação.

## Proibido

— raiva caricatural;  
— gritos;  
— hostilidade explícita;  
— dedo apontado;  
— qualquer sinal que transforme a interpretação em certeza.

## Direção visual

Mesmo estilo, proporção e escala da Cena A.

## Legenda

**Cena B — pessoa sentada numa reunião após a rejeição de uma proposta apresentada ao grupo.**

## Alt text

`Pessoa sentada com braços cruzados durante uma reunião, enquanto outras pessoas permanecem ao redor da mesa.`

## Estado

**A PRODUZIR**

---

# ASSET 05 — IMAGEM 01: SERRA PELADA, 1986

## Identificação

**ID editorial:** `tp-visual-02`  
**Arquivo atual:** `IMAGEM_01_Serra_Pelada_1986_Sebastiao_Salgado.png`

## Regime

**IMAGEM DOCUMENTAL / CORPUS REAL**

## Local

Texto Prático — Exercício 7

## Função didática

Treinar a distinção entre:

— observação direta;  
— informação documental;  
— interpretação;  
— afirmação forte demais.

## Núcleo representacional

Fotografia de Sebastião Salgado, *Serra Pelada*, 1986.

## Obrigatório

— reprodução original da fotografia;  
— ausência de marcações interpretativas;  
— nitidez suficiente para observar terreno, pessoas, níveis e circulação.

## Proibido

— setas;  
— círculos;  
— crop interpretativo agressivo;  
— filtros;  
— legendas inseridas dentro da própria imagem.

## Legenda

**Sebastião Salgado — *Serra Pelada*, 1986. Registro realizado no garimpo de Serra Pelada, no leste do Pará.**

## Alt text

`Fotografia em preto e branco de grande número de trabalhadores distribuídos por terreno íngreme, escavado e dividido em diferentes níveis.`

## Estado

**VALIDADO DOCUMENTALMENTE**

---

# ASSET 06 — VISUAL 02: PLATAFORMA 3 INTERDITADA

## Identificação

**ID editorial:** `tp-visual-03`  
**Componente recomendado:** `station-notice`

## Regime

**COMPOSIÇÃO EDITORIAL NATIVA — HTML/CSS + SVG INLINE**

## Local

Texto Prático — Exemplo Resolvido 2

## Função didática

Demonstrar divisão de trabalho entre:

— inscrição que formula o problema;  
— pictograma que caracteriza visualmente a situação;  
— inscrição que apresenta a alternativa;  
— seta que fornece orientação espacial.

## Estrutura exata

1. `PLATAFORMA 3 INTERDITADA`
2. pictograma de obra/manutenção
3. `ACESSO PELA PLATAFORMA 4`
4. seta apontando para a direita

## Obrigatório

— texto exato;  
— seta claramente separável;  
— pictograma simples;  
— composição neutra;  
— todos os componentes individualmente identificáveis.

## Proibido

— fotografia de estação;  
— perspectiva complexa;  
— texto produzido por IA;  
— decoração que crie componentes extras.

## HTML

```html
<figure class="visual visual-topic atomic-group" id="tp-visual-03">
  <div class="station-notice" role="img"
       aria-label="Aviso de estação com Plataforma 3 interditada, pictograma de manutenção, indicação de acesso pela Plataforma 4 e seta para a direita.">
    <div class="station-notice__problem">PLATAFORMA 3 INTERDITADA</div>
    <div class="station-notice__icon" aria-hidden="true">
      <!-- SVG de manutenção -->
    </div>
    <div class="station-notice__route">
      <span>ACESSO PELA PLATAFORMA 4</span>
      <span class="station-notice__arrow" aria-hidden="true">→</span>
    </div>
  </div>
</figure>
```

## CSS

Criar apenas o necessário para:

— hierarquia;  
— alinhamento;  
— espaçamento;  
— legibilidade.

Não transformar em card pesado.

## Estado

**A CONSTRUIR**

---

# ASSET 07 — VISUAL 03: ALERTA METEOROLÓGICO

## Identificação

**ID editorial:** `tp-visual-04`  
**Componente recomendado:** `weather-alert`

## Regime

**COMPOSIÇÃO EDITORIAL NATIVA — HTML/CSS + SVG INLINE**

## Local

Texto Prático — Exercício 9

## Função didática

Distribuir diferentes funções entre:

— fenômeno;  
— intervalo temporal;  
— pictograma;  
— localização espacial;  
— identificação nominal das áreas.

## Estrutura exata

— `ALERTA DE TEMPESTADE`  
— `18h às 21h`  
— pictograma de nuvem com raio  
— mapa esquemático dividido em três áreas  
— faixa/região destacando Norte e Central  
— `ÁREAS AFETADAS: SETORES NORTE E CENTRAL`

## Obrigatório

O mapa deve tornar perceptível uma distribuição espacial que não se reduz à lista de nomes.

## Proibido

— mapa real de município ou estado;  
— logotipo institucional;  
— aparência de alerta governamental real;  
— detalhes meteorológicos extras.

## Alt text

`Alerta meteorológico didático com título de tempestade, horário de 18h às 21h, pictograma de nuvem com raio, mapa esquemático de três setores e destaque para os setores norte e central.`

## Estado

**A CONSTRUIR**

---

# ASSET 08 — MICROCOMPOSIÇÃO 10A: ALTA TENSÃO

## Identificação

**ID editorial:** `tp-visual-05a`  
**Componente recomendado:** `high-voltage-notice`

## Regime

**COMPOSIÇÃO EDITORIAL NATIVA — HTML/CSS + SVG INLINE**

## Local

Texto Prático — Exercício 10A

## Função didática

Permitir análise de:

— convergência;  
— reforço;  
— especificação parcial.

## Estrutura exata

Texto:

`PERIGO — ALTA TENSÃO`

mais pictograma de risco elétrico.

## Obrigatório

— pictograma simples e reconhecível;  
— texto em HTML;  
— nenhum elemento adicional desnecessário.

## Proibido

— fotografia;  
— poste real;  
— cena de choque;  
— dramatização.

## Alt text

`Aviso com as palavras Perigo — Alta tensão acompanhado de pictograma de risco elétrico.`

## Estado

**A CONSTRUIR**

---

# ASSET 09 — MICROCOMPOSIÇÃO 10B: CHEGUE DESCANSADO

## Identificação

**ID editorial:** `tp-visual-05b`  
**Arquivo de cena:** `microcomposicao_10b_transporte_lotado.png`

## Regime

**CENA DIDÁTICA CONSTRUÍDA / IA + TEXTO EM HTML**

## Local

Texto Prático — Exercício 10B

## Função didática

Criar tensão entre:

— frase positiva: `CHEGUE DESCANSADO.`  
— imagem de transporte coletivo lotado.

## Núcleo representacional

Interior de transporte coletivo muito cheio.

## Obrigatório

— passageiros em pé;  
— pouco espaço livre;  
— proximidade corporal intensa;  
— barras/corrimãos/portas que identifiquem transporte coletivo;  
— expressões faciais neutras.

## Proibido

— texto dentro da imagem;  
— passageiros dormindo;  
— sofrimento caricatural;  
— caos extremo;  
— humor explícito.

## Texto verbal

Deve ser inserido no HTML:

```html
<p class="microcomposition__headline">CHEGUE DESCANSADO.</p>
```

## Alt text da cena

`Interior de transporte coletivo muito cheio, com passageiros em pé e pouco espaço entre eles.`

## Estado

**A PRODUZIR**

---

# ASSET 10 — MICROCOMPOSIÇÃO 10C: ÚLTIMO DIA

## Identificação

**ID editorial:** `tp-visual-05c`  
**Componente recomendado:** `deadline-notice`

## Regime

**COMPOSIÇÃO EDITORIAL NATIVA — HTML/CSS**

## Local

Texto Prático — Exercício 10C

## Função didática

Demonstrar que tamanho, posição e espaço podem organizar:

— hierarquia;  
— saliência;  
— agrupamento;  
— percurso provável de leitura.

## Conteúdo verbal exato

`HOJE`

`ÚLTIMO DIA`

`INSCRIÇÕES ATÉ 18H`

## Organização obrigatória

— `HOJE` acima, isolado;  
— `ÚLTIMO DIA` muito maior e central;  
— `INSCRIÇÕES ATÉ 18H` abaixo, menor.

## Proibido

— imagens;  
— ícones;  
— cores que adicionem outro sistema de distinção desnecessário;  
— alteração das palavras.

## Estado

**A CONSTRUIR**

---

# ASSET 11 — VISUAL 04: MESMA IMAGEM, DUAS LEGENDAS

## Identificação

**ID editorial:** `tp-visual-06`  
**Arquivo recomendado:** `visual_04_fila_edificio_neutro.png`

## Regime

**CENA DIDÁTICA CONSTRUÍDA / IA**

## Local

Texto Prático — Exercício 12

## Função didática

Demonstrar que a legenda:

— não altera materialmente a imagem;  
— restringe possibilidades;  
— orienta enquadramentos;  
— não elimina limites impostos pela própria configuração visual.

## Núcleo representacional

Grupo variado de pessoas aguardando diante da entrada de edifício multipropósito, sem indicação visível da atividade.

## Obrigatório

— exterior de prédio genérico;  
— entrada clara;  
— grupo em situação de espera;  
— idades e perfis variados;  
— clima tranquilo;  
— nenhuma atividade específica identificável.

## Proibido

Sinais de vacinação:

— seringas;  
— jalecos;  
— cruzes de saúde;  
— cartazes de campanha.

Sinais de apresentação musical:

— instrumentos;  
— palco;  
— cartazes;  
— caixas de som;  
— microfones.

## Uso

**O MESMO ARQUIVO deve ser reutilizado nas duas versões.**

### Versão A

Legenda HTML:

`Moradores aguardam o início da vacinação no centro comunitário.`

### Versão B

Legenda HTML:

`Público aguarda a abertura do centro comunitário para uma apresentação musical.`

## Alt text

`Grupo variado de pessoas aguarda diante da entrada fechada de um edifício de uso coletivo sem identificação visível da atividade.`

## CSS

As duas versões devem utilizar:

— mesma largura;  
— mesmo recorte;  
— mesma escala;  
— mesma imagem.

Somente a legenda pode mudar.

## Estado

**A PRODUZIR**

---

# ASSET 12 — IMAGEM 02: MAPA DA TERRA-MÉDIA

## Identificação

**ID editorial:** `tp-visual-07`  
**Arquivo recomendado:** `imagem_02_mapa_terra_media.png`

## Regime

**IMAGEM DOCUMENTAL / CORPUS EXISTENTE**

## Local

Texto Prático — Exercício 13

## Função didática

Permitir distinguir:

— identificação nominal;  
— posição;  
— distribuição;  
— distância relativa;  
— relações espaciais.

## Núcleo representacional

Mapa suficientemente legível para preservar:

— topônimos;  
— rios;  
— montanhas;  
— florestas;  
— caminhos;  
— costas;  
— relações espaciais.

## Obrigatório

— mapa real proveniente da edição selecionada;  
— legibilidade dos nomes;  
— preservação das relações espaciais.

## Proibido

— mapa gerado por IA;  
— simplificação que retire relações relevantes;  
— tradução/relabeling não autorizado;  
— setas analíticas adicionais.

## Alt text

`Mapa da Terra-média com nomes de lugares, rios, cadeias de montanhas, florestas, costas e outras relações espaciais.`

## Estado

**A PROVIDENCIAR / VALIDAR**

---

# ASSET 13 — COMPOSIÇÃO 14A: VERSÃO UNIFORME

## Identificação

**ID editorial:** `tp-visual-08a`  
**Componente recomendado:** `notice-uniform`

## Regime

**COMPOSIÇÃO EDITORIAL NATIVA — HTML/CSS**

## Local

Texto Prático — Exercício 14

## Função didática

Servir como controle comparativo para demonstrar que:

**mesmo conteúdo verbal + outra organização material = outra configuração perceptível.**

## Conteúdo verbal exato

`RISCO DE QUEDA`

`PROIBIDO ENTRAR`

`USE A ROTA LATERAL`

## Organização obrigatória

— tamanho semelhante;  
— peso semelhante;  
— espaçamento regular;  
— sem forte hierarquia.

## Proibido

— alteração de ordem;  
— inclusão de ícones;  
— inclusão de cor funcional adicional;  
— diferenças semânticas entre linhas.

## Estado

**A CONSTRUIR**

---

# ASSET 14 — COMPOSIÇÃO 14B: VERSÃO HIERARQUIZADA

## Identificação

**ID editorial:** `tp-visual-08b`  
**Componente recomendado:** `notice-hierarchical`

## Regime

**COMPOSIÇÃO EDITORIAL NATIVA — HTML/CSS**

## Local

Texto Prático — Exercício 14

## Função didática

Demonstrar o trabalho de:

— tamanho;  
— peso;  
— espaço;  
— agrupamento;  
— saliência;  
— hierarquia.

## Conteúdo verbal

Deve ser **idêntico** à Versão A e permanecer na mesma ordem.

## Organização obrigatória

— `RISCO DE QUEDA` com maior saliência;  
— `PROIBIDO ENTRAR` como segundo bloco;  
— `USE A ROTA LATERAL` como orientação posterior;  
— separação espacial perceptível entre funções.

## Proibido

— trocar palavras;  
— reordenar conteúdo;  
— adicionar pictogramas;  
— adicionar informação nova.

## Estado

**A CONSTRUIR**

---

# ASSET 15 — IMAGEM 03: CHARGE DA CRISE CLIMÁTICA — FATEC 2025

## Identificação

**ID editorial:** `tp-visual-09`  
**Arquivo atual:** `IMAGEM_03_Charge_Crise_Climatica_FATEC_2025.png`

## Regime

**IMAGEM DOCUMENTAL / CORPUS REAL**

## Local

Texto Prático — Exercício 15 — Transferência Final

## Função didática

Servir como objeto aberto de transferência multimodal.

O estudante deve:

— selecionar componentes relevantes;  
— explicar funções;  
— relacioná-los;  
— testar retirada ou transformação;  
— justificar interpretação.

## Núcleo representacional

Charge real da FATEC 2025 contendo:

— `CRISE CLIMÁTICA`;  
— `PREVENIDOS — SALA 1`;  
— `DESPREPARADOS — SALAS 2 A 100`;  
— desproporção quantitativa;  
— setas/direções;  
— personagem.

## Obrigatório

— reprodução integral da charge;  
— legibilidade dos textos;  
— preservação de proporções e distribuição.

## Proibido

— reconstrução por IA;  
— tradução;  
— crop que elimine componentes;  
— destaque gráfico adicional;  
— explicações inseridas dentro da charge.

## Alt text

`Charge sobre crise climática com indicação de uma sala para prevenidos e salas 2 a 100 para despreparados, além de setas e personagem diante da sinalização.`

## Estado

**VALIDADO DOCUMENTALMENTE**

---

# 4. ELEMENTOS QUE NÃO DEVEM GERAR ASSET EXTERNO

## Exercício 6 — O vermelho manda parar?

**NÃO criar imagem.**

A função do exercício depende do contraste conceitual entre:

— semáforo vermelho;  
— camiseta vermelha;  
— parede vermelha.

A prosa fornece informação suficiente.

Criar três ilustrações acrescentaria materialidade desnecessária e poderia deslocar a operação para observação visual irrelevante.

---

## Exercício 11 — Se a seta sumir, o aviso ainda funciona?

**NÃO criar imagem.**

Usar HTML real:

```html
<div class="direction-comparison">
  <div>AUDITÓRIO 3 →</div>
  <div>AUDITÓRIO 3</div>
</div>
```

A seta precisa ser removível conceitualmente e editorialmente.

---

# 5. PADRÃO DAS CENAS GERADAS POR IA

Os assets 03, 04, 09 e 11 devem compartilhar os seguintes princípios.

## Estilo

— realismo sóbrio;  
— aparência editorial;  
— iluminação natural;  
— sem dramatização cinematográfica;  
— sem estética publicitária exagerada;  
— sem símbolos inventados;  
— sem texto embutido.

## Composição

— leitura imediata da situação;  
— contexto suficiente;  
— personagem/ação principal claramente visível;  
— sem excesso de elementos periféricos.

## Regra interpretativa

A imagem deve:

**FORNECER EVIDÊNCIAS**

sem:

**ENTREGAR A CONCLUSÃO.**

---

# 6. ORDEM RECOMENDADA DE PRODUÇÃO

## Etapa A — fechar documentais

1. substituir o fac-símile provisório de *Memórias Póstumas* pela edição de 1881;
2. providenciar mapa da Terra-média;
3. manter ENEM, Serra Pelada e Fatec já validados.

## Etapa B — gerar cenas de IA

4. Visual 01A;
5. Visual 01B;
6. Microcomposição 10B;
7. Visual 04.

## Etapa C — construir composições nativas

8. Visual 02;
9. Visual 03;
10. Microcomposição 10A;
11. Microcomposição 10C;
12. Composição 14A;
13. Composição 14B.

## Etapa D — validação

Para cada recurso, testar:

**RECURSO ↔ COMANDO ↔ GABARITO**

Perguntas de validação:

— o recurso mostra exatamente aquilo que o exercício pressupõe?  
— o comando exige algo que realmente pode ser observado?  
— o gabarito afirma algo que o recurso não sustenta?  
— alguma pista visual entrega a resposta prematuramente?  
— algum detalhe não previsto introduz interpretação indevida?  
— retirar o recurso inviabilizaria a operação que justificou sua criação?

Somente após essa validação os Gates materiais do Texto Prático podem ser considerados encerrados.

---

# 7. ESTADO CONSOLIDADO DOS ASSETS

| Asset | Regime | Estado |
|---|---|---|
| Fac-símile 01 — *Memórias Póstumas* | documental | Gate documental |
| Fac-símile 02 — ENEM 2020 | documental | Validado |
| Visual 01A — frio | IA | A produzir |
| Visual 01B — reunião | IA | A produzir |
| Imagem 01 — Serra Pelada | documental | Validado |
| Visual 02 — plataforma | HTML/CSS/SVG | A construir |
| Visual 03 — alerta | HTML/CSS/SVG | A construir |
| Micro 10A — alta tensão | HTML/CSS/SVG | A construir |
| Micro 10B — transporte lotado | IA + HTML | A produzir |
| Micro 10C — último dia | HTML/CSS | A construir |
| Visual 04 — mesmas legendas | IA | A produzir |
| Imagem 02 — Terra-média | documental | A providenciar |
| Composição 14A | HTML/CSS | A construir |
| Composição 14B | HTML/CSS | A construir |
| Imagem 03 — Fatec 2025 | documental | Validado |

---

# 8. PRINCÍPIO FINAL

Neste tópico, o sistema visual deve respeitar uma regra especialmente importante:

**O TIPO DE RECURSO UTILIZADO TAMBÉM FAZ PARTE DO CONTEÚDO ENSINADO.**

Por isso:

— uma fotografia real não deve virar ilustração;  
— uma relação tipográfica não deve virar PNG sem necessidade;  
— uma cena hipotética não precisa fingir ser documento histórico;  
— um fac-símile não deve ser reconstruído;  
— uma composição que depende de texto exato deve permanecer controlável em HTML/CSS;  
— uma imagem de IA deve apresentar uma situação, não fornecer a interpretação pronta.

A escolha técnica de cada asset deve preservar a função epistemológica e didática do objeto.
