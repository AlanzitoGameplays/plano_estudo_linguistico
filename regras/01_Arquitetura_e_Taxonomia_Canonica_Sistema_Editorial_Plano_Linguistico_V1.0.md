# Arquitetura e Taxonomia Canônica do Sistema Editorial
## Plano de Estudo Linguístico e da Língua Portuguesa — Versão 1.0

**Documento 01 do Sistema Editorial do Plano Linguístico**  
**Status:** Congelado — Versão 1.0  
**Congelamento:** 12/09/2026  
**Escopo:** fundação arquitetônica e taxonômica do sistema editorial HTML/CSS das apostilas do Plano de Estudo Linguístico e da Língua Portuguesa.

---

# Preâmbulo — finalidade, escopo e posição no sistema

Este documento define a arquitetura conceitual do **sistema editorial** do Plano de Estudo Linguístico e da Língua Portuguesa. Sua função não é especificar código, produzir uma Base HTML/CSS, catalogar detalhadamente componentes, reescrever o currículo, determinar a estrutura do Texto Teórico ou do Texto Prático nem antecipar todas as soluções que futuros tópicos poderão exigir. Sua função é anterior a essas tarefas: estabelecer **o que pertence ao sistema editorial, em que nível pertence, que autoridade governa cada decisão e como novas soluções devem ser classificadas, validadas, promovidas, preservadas, rebaixadas ou reabertas**.

O sistema parte de uma distinção fundamental:

> **ARQUITETURA CURRICULAR ≠ ARQUITETURA EDITORIAL**

A **arquitetura curricular**, definida pelas Estruturas Canônicas do Plano Linguístico, decide o que uma unidade estuda, por que ela existe, até onde deve avançar, de que conhecimentos parte, aonde precisa chegar, quais fronteiras deve respeitar, qual movimento conceitual precisa realizar, que capacidades futuras deverão tornar-se observáveis e quais recursos essenciais já precisam ser previstos.

A **arquitetura editorial**, objeto deste Documento 01, recebe essa arquitetura curricular e os conteúdos dela derivados já suficientemente estabilizados e decide como o sistema de apostilas deve preservar, representar, organizar e materializar essas decisões sem substituí-las. Ela estabelece infraestrutura, níveis de canonicidade, famílias de soluções, relações entre prosa e recursos, políticas de precedentes, estados dos artefatos e rotas de correção.

A relação geral do Plano é:

```text
PLANO CURRICULAR
        ↓
ESTRUTURAS CANÔNICAS
arquitetura curricular auditada e congelada
        ↓
TEXTO TEÓRICO
construção → auditoria → congelamento
        ↓
TEXTO PRÁTICO
handoff → construção → auditoria → congelamento
        ↓
SISTEMA EDITORIAL HTML/CSS
materialização semântica, visual e técnica
        ↓
PDF OFICIAL
        ↓
PREFLIGHT
        ↓
APROVAÇÃO E CONGELAMENTO EDITORIAL
```

Cada passagem preserva a autoridade da etapa anterior e acrescenta apenas o tipo de decisão que lhe pertence. A camada editorial pode revelar erro, lacuna, incompatibilidade ou impossibilidade de materialização; não pode usar essa descoberta como autorização para corrigir silenciosamente uma decisão curricular, conceitual ou prática.

Este documento também organiza a experiência já acumulada pelo Plano Linguístico e aproveita, como precedente de engenharia, a consolidação realizada no Plano de Estudo Matemático. Essa herança é funcional, não mimética. O que for transdisciplinar pode ser herdado ou adaptado; o que depender da natureza da Matemática permanece matemático. O Plano Linguístico não deve tornar-se “Matemática com outro texto”.

O objetivo final é reduzir dois riscos opostos. O primeiro é a **improvisação**, em que cada nova apostila redescobre identidade, infraestrutura, componentes e convenções. O segundo é a **rigidez**, em que uma solução histórica é aplicada a conteúdos diferentes apenas porque já existe. A arquitetura deve preservar decisões maduras e, ao mesmo tempo, manter espaço para aquilo que cada fenômeno linguístico realmente exige.

**Regime de transição.** Enquanto as Regras Gerais HTML/CSS V3.0, a Arquitetura Técnica e os demais artefatos do novo sistema não forem produzidos, auditados e aprovados, as Regras Gerais HTML/CSS V2.0 e os precedentes atualmente aprovados permanecem operacionais. A aprovação deste Documento 01 redefine a arquitetura de governança do sistema, mas não revoga, por si só, a norma editorial vigente. A V2.0 só deixa de ser norma vigente quando a V3.0 for explicitamente aprovada para substituí-la.

```text
Documento 01 aprovado
≠
revogação automática da V2.0
```

---

# I — O Plano Linguístico como sistema editorial

## 1. Fórmula geral da apostila

Uma apostila do Plano Linguístico não é criada do zero nem resulta da aplicação mecânica de um template. Ela é a materialização editorial de uma arquitetura curricular e de um conteúdo mestre dentro de um sistema previamente governado.

A relação fundamental é:

> **ARQUITETURA CONGELADA + CONTEÚDO MESTRE CONGELADO + INFRAESTRUTURA EDITORIAL + COMPONENTES FUNCIONAIS + RECURSOS E ASSETS + ADAPTAÇÕES LOCAIS JUSTIFICADAS = APOSTILA**

Os termos da fórmula possuem funções distintas.

### 1.1 Arquitetura congelada

É a estrutura curricular da unidade — Tópico, Bloco ou conjunto de Partes — já auditada e suficientemente resolvida para orientar a produção. Ela determina, conforme o nível:

- identidade linguística;
- pergunta central;
- função curricular;
- importância relativa;
- contrato de entrada;
- contrato de saída;
- fronteiras;
- movimento conceitual;
- gargalos;
- perfil didático;
- regime de representação;
- tipos de corpus pertinentes;
- recursos essenciais previstos;
- capacidades futuras da prática;
- critério de encerramento;
- decisão entre **Tópico → Blocos → Partes** ou **Tópico → Partes**.

A arquitetura editorial não redesenha esses elementos por conveniência de página.

### 1.2 Conteúdo mestre congelado

É o conteúdo textual, analítico, prático e documental que já passou por seu próprio processo de construção e auditoria. Inclui, conforme a unidade:

- prosa teórica;
- definições;
- distinções;
- exemplos;
- corpus;
- citações;
- representações especificadas;
- exercícios;
- comandos;
- alternativas;
- gabarito;
- respostas-modelo;
- critérios de suficiência;
- faixas de aceitação;
- fontes e dados necessários à compreensão.

O conteúdo mestre da apostila é composto por instâncias distintas e complementares. **Texto Teórico e Texto Prático conservam suas próprias autoridades, funções, auditorias e estados de congelamento.** A categoria "conteúdo mestre" não os funde em um único artefato nem transforma a ordem temporal de produção em regra simples de precedência semântica.

Se surgir incompatibilidade substantiva entre Texto Teórico e Texto Prático, a etapa editorial não deve escolher silenciosamente um deles como vencedor. A incompatibilidade precisa ser diagnosticada e devolvida à camada competente. A sequência normal — arquitetura congelada → Texto Teórico congelado → handoff → Texto Prático congelado → materialização editorial — organiza a produção, mas não autoriza arbitragem semântica automática em caso de conflito.

O HTML/CSS recebe esse conteúdo para materializá-lo. Não o recebe como rascunho aberto a reescrita silenciosa.

### 1.3 Infraestrutura editorial

É o conjunto de decisões estáveis que toda apostila normal precisa antes de conhecermos seu conteúdo particular. Pode abranger, em documentos posteriores, identidade, A4, documento, página, capa, cabeçalho, rodapé, hierarquia, fonte semântica, navegação, impressão, paginação, acessibilidade estrutural e contratos de extensão.

A infraestrutura elimina decisões repetitivas. Não determina antecipadamente a composição concreta de cada tópico.

### 1.4 Componentes funcionais

São soluções editoriais reutilizáveis para **funções semanticamente estáveis**. Um componente existe porque determinada função reaparece e merece tratamento reconhecível; não porque uma caixa, uma cor ou uma classe CSS parece visualmente interessante.

Componentes podem ser consolidados, provisórios ou locais. Sua existência no repertório não obriga seu uso.

### 1.5 Recursos e assets

**Recurso** é o elemento que realiza trabalho cognitivo, documental, representacional ou prático dentro do raciocínio: visual construído, imagem, fac-símile, mapa, diagrama, corpus diagramado, áudio representado, entre outros.

**Asset** é o arquivo ou artefato material utilizado para realizar ou preservar um recurso: imagem raster, SVG, reprodução digital, recorte documental, arquivo fonte, derivado tratado, mapa, fotografia ou outro objeto externo ao fluxo textual principal.

Recurso e asset não são sinônimos. Um recurso pode ser construído inteiramente em HTML/SVG sem asset externo; um asset pode existir no repositório e não ser utilizado em nenhuma apostila.

### 1.6 Adaptação ou extensão local justificada

É a solução criada porque o conteúdo apresenta uma necessidade ainda não resolvida satisfatoriamente pelo repertório existente. Ela nasce localmente, com escopo definido, e não adquire autoridade sistêmica apenas por funcionar em um caso.

### 1.7 Precedente

É evidência histórica de uma solução anterior aprovada ou funcional. Um precedente mostra **como uma necessidade foi resolvida em determinado contexto**. Não possui, por si só, força de regra, template ou obrigação de reprodução.

### 1.8 Base

A Base é a implementação concreta da infraestrutura técnica e editorial considerada estável em determinado momento. Deve fornecer um ponto de partida confiável para novas apostilas sem carregar todos os componentes opcionais e todas as soluções já criadas no projeto.

**Estado atual:** este Documento 01 define a categoria arquitetônica "Base", mas não declara existente ou canônica uma Base HTML/CSS Linguística. Sua implementação, validação, aprovação e eventual congelamento dependerão da futura Arquitetura Técnica e de produção editorial real. O mesmo princípio vale para o Catálogo de Componentes, a política especializada de Corpus/Assets e os demais artefatos futuros: sua previsão arquitetônica não equivale à sua existência aprovada.

```text
CATEGORIA ARQUITETÔNICA PREVISTA
≠
ARTEFATO JÁ PRODUZIDO E APROVADO
```

### 1.9 Produto final

O PDF oficial é o principal produto de estudo. HTML, CSS, JavaScript de paginação, assets e arquivos auxiliares compõem o sistema de produção e preservação editorial. O produto final precisa ser julgado pelo que o estudante realmente recebe: legibilidade, fidelidade, navegação, integridade, materialidade, coerência e funcionalidade pedagógica.

## 2. O que a fórmula não significa

A fórmula do sistema não autoriza:

- converter todo conteúdo em uma sequência fixa de componentes;
- exigir as mesmas seções em todos os tópicos;
- repetir layouts por simetria;
- criar recurso visual para preencher página;
- reproduzir a organização do Texto Teórico no Texto Prático quando a prática exigir outra estrutura;
- tratar toda ocorrência de corpus da mesma maneira;
- transformar todo material importante em caixa;
- copiar automaticamente soluções matemáticas;
- transformar a apostila em interface de aplicação web;
- alterar o conteúdo para fazê-lo caber na página.

O sistema existe para **preservar decisões maduras e liberar atenção para aquilo que realmente é novo**.

---

# II — Princípios superiores

## 3. A forma serve ao conteúdo

O princípio superior do sistema é:

> **A forma deve servir ao conteúdo. O conteúdo não deve ser deformado para servir à forma.**

A diagramação pode tornar relações mais perceptíveis, organizar hierarquia, preservar materialidade, aproximar partes dependentes e melhorar a legibilidade. Não pode expandir, reduzir, fragmentar, reordenar ou reinterpretar o conteúdo apenas para satisfazer uma composição gráfica.

A página existe para materializar o raciocínio. O raciocínio não existe para preencher a página.

## 4. A materialização editorial não reabre silenciosamente decisões anteriores

A etapa editorial recebe arquitetura, teoria e prática já suficientemente resolvidas. Se um problema substantivo aparecer durante a materialização, ele deve ser classificado e devolvido ao nível competente.

A descoberta de um defeito não transfere automaticamente autoridade à camada que o descobriu.

## 5. Herdar → adaptar → criar somente o novo

O movimento normal do sistema é:

> **HERDAR → ADAPTAR → CRIAR SOMENTE O NOVO**

**Herdar** significa partir da infraestrutura e das soluções já aprovadas que continuam adequadas.  
**Adaptar** significa aplicar essas soluções à natureza concreta do conteúdo sem alterar sua função.  
**Criar somente o novo** significa introduzir uma solução apenas quando uma necessidade real ainda não é atendida.

O anti-padrão é reler apostilas antigas como templates, reconstruir decisões já estabilizadas e produzir variações locais sem necessidade funcional.

## 6. Canonicidade é função, não aparência

Uma solução não se torna canônica porque possui cor, borda, espaçamento ou formato repetido. O objeto da canonização é a **função editorial ou técnica suficientemente estável**.

Duas soluções visualmente parecidas podem realizar funções diferentes. Duas funções iguais podem admitir pequenas variações de composição sem deixar de pertencer à mesma família.

## 7. Identidade comum não exige composição idêntica

Fonética, fonologia, morfologia, sintaxe, semântica, pragmática, sociolinguística, textualidade, discurso, leitura e multimodalidade não exigem o mesmo tipo de página.

A identidade comum deve surgir de constantes editoriais e técnicas suficientemente estáveis — tipografia, paleta, hierarquia, ritmo, cabeçalho, rodapé, navegação, tratamento documental e acabamento —, não da repetição mecânica da mesma composição.

## 8. Toda forma visual comunica relações

Posição, proximidade, alinhamento, escala, contenção, cor, repetição, linhas, setas, contraste e ordem espacial podem sugerir relações conceituais. Por isso, diagramação não é neutra.

> **A forma visual não pode afirmar uma relação linguística que o conteúdo não estabelece nem apagar uma relação necessária à compreensão.**

Uma seta pode sugerir direção, transformação ou causalidade. Uma caixa pode sugerir inclusão ou unidade. Proximidade pode sugerir associação. Escala pode sugerir hierarquia. O uso desses recursos exige controle semiótico.

## 9. O sistema reduz decisões repetitivas sem eliminar adaptação disciplinar

Uma arquitetura madura não elimina julgamento editorial; elimina apenas decisões que não precisam mais ser redescobertas.

Deve reduzir:

- redesign recorrente;
- inconsistências acidentais;
- releitura excessiva de precedentes;
- reinvenção de infraestrutura;
- correções provocadas por divergências evitáveis.

Deve preservar:

- adaptação ao fenômeno;
- variação legítima de representação;
- soluções locais;
- inovação funcional;
- resposta a novas necessidades documentais e multimodais.

## 10. O passado deve ser condensado em sistema

A experiência de apostilas anteriores deve produzir regras, arquitetura, componentes ou precedentes classificados. O sistema não deve depender de releitura indefinida de todos os materiais passados para descobrir novamente como funciona.

> **Precedentes alimentam o sistema; o sistema reduz a necessidade de precedentes.**

## 11. Novidade conceitual não exige novidade decorativa

Antes de criar uma nova solução gráfica, verificar se a função pode ser resolvida adequadamente por uma solução mais simples.

A preferência geral é:

> **prosa → tipografia → espaço → alinhamento → estrutura semântica → tabela/componente existente → componente novo → diagrama/SVG → imagem raster ou recurso mais complexo**

A sequência não é uma proibição dos níveis posteriores. Ela expressa o princípio da **solução mais simples suficiente**.

## 12. A solução mais simples suficiente deve ser preferida

Complexidade editorial só se justifica quando produz ganho identificável de compreensão, fidelidade, análise, comparação, preservação documental, navegação ou execução da tarefa.

Uma solução mais complexa que não aumenta a qualidade funcional aumenta apenas custo de manutenção e risco de erro.

---

# III — Cadeia de autoridade e precedência

## 13. Precedência não é uma lista cega

O sistema possui uma ordem geral de consulta, mas diferentes documentos exercem autoridades de naturezas distintas. Não se deve tratar toda divergência como se uma fonte simplesmente “apagasse” outra.

A ordem operacional de referência para uma nova materialização editorial é:

1. **Estrutura Canônica congelada da unidade**;
2. **Texto Teórico congelado**;
3. **Texto Prático congelado**;
4. **Regras Gerais HTML/CSS vigentes**;
5. **Arquitetura Técnica vigente, quando já existente e aprovada**;
6. **Catálogo de Componentes aplicável, quando já existente e aprovado**;
7. **política vigente de Corpus, Assets, Proveniência e Materialidade, quando existente**;
8. **Base HTML/CSS vigente, quando já existente e aprovada**;
9. **precedente comparável**, somente quando necessário;
10. **instrução local da tarefa**.

Uma fonte inferior não pode contrariar silenciosamente uma fonte superior.

Este **Documento 01** possui autoridade própria de natureza **arquitetônica e taxonômica**. Ele governa a classificação sistêmica, o alcance e o pertencimento das soluções editoriais. Não funciona como mais um degrau da cadeia semântica ou técnica. Quando a dúvida é **que tipo de decisão é esta, em que camada ela pertence e qual é seu alcance no sistema?**, este documento possui autoridade arquitetônica. Essa autoridade não lhe permite reescrever o Texto Teórico, arbitrar o Texto Prático, substituir as Regras Gerais ou especificar a implementação técnica.

A ordem operacional acima registra também o movimento normal de produção — inclusive Texto Teórico antes do Texto Prático —, mas não transforma essa sequência temporal em regra absoluta segundo a qual uma instância anterior "vence" semanticamente qualquer incompatibilidade posterior. Conflitos substantivos precisam ser diagnosticados pela natureza da decisão em disputa.

## 14. Tipos de autoridade

### 14.1 Autoridade curricular

Pertence primariamente às Estruturas Canônicas e ao Plano curricular. Decide identidade, contratos, fronteiras, movimento, profundidade, capacidades, recursos essenciais e critério de encerramento.

### 14.2 Autoridade semântica

Pertence ao conteúdo mestre congelado em suas instâncias próprias. O Texto Teórico governa a formulação teórica efetivamente construída; o Texto Prático governa as atividades, os comandos e os conteúdos práticos efetivamente congelados.

A arquitetura curricular não deve ser usada pela etapa editorial para reescrever palavras do conteúdo congelado. Se houver incompatibilidade entre arquitetura e texto, existe um problema a ser reaberto, não uma licença para edição silenciosa.

### 14.3 Autoridade prática

Pertence ao Texto Prático no que diz respeito às operações solicitadas ao estudante, ao regime de apoio e autonomia, aos comandos, às condições de resposta, ao Gabarito Comentado, às respostas-modelo, aos critérios de suficiência e às faixas de aceitação. Essa autoridade é distinta da autoridade teórica, ainda que dependa do que a teoria legitimamente construiu.

### 14.4 Autoridade arquitetônica e taxonômica

Pertence a este Documento 01 no que diz respeito à classificação das decisões, às camadas do sistema, aos níveis de canonicidade, aos estados de maturidade, ao pertencimento sistêmico e às rotas de promoção, rebaixamento, congelamento e reabertura. Ela classifica e governa o sistema; não reescreve conteúdo nem especifica código.

### 14.5 Autoridade editorial normativa

Pertence às Regras Gerais HTML/CSS vigentes e às decisões editoriais canônicas compatíveis com a arquitetura. Define obrigações, proibições, critérios de composição, identidade, hierarquia, economia visual, navegação e fidelidade representacional.

### 14.6 Autoridade técnica

Pertence à Arquitetura Técnica, à Base e aos contratos técnicos aprovados, quando existentes e vigentes. Define como a infraestrutura funciona e como as soluções editoriais são implementadas sem contaminar o núcleo.

### 14.7 Autoridade documental

Pertence à política de Corpus, Assets, Proveniência e Materialidade, quando existente e vigente, em articulação com o conteúdo mestre. Governa origem, fidelidade, transformação admissível, original/derivado, crédito, materialidade e integridade de objetos documentais.

## 15. Conflitos entre camadas

Quando duas fontes parecem incompatíveis, deve-se primeiro perguntar **que tipo de decisão está em disputa**.

- Se a disputa é sobre escopo ou capacidade, a causa tende a ser curricular.
- Se é sobre formulação conceitual, tende a ser teórica.
- Se é sobre comando, resposta ou evidência de domínio, tende a ser prática.
- Se é sobre hierarquia visual ou composição, tende a ser editorial.
- Se é sobre paginação, DOM, impressão ou contrato de implementação, tende a ser técnica.
- Se é sobre origem, recorte, fidelidade ou transformação de corpus, tende a ser documental.

A precedência serve para impedir improvisação. Ela não substitui diagnóstico causal.

---

# IV — Camadas do sistema

## 16. Modelo em cinco camadas

O sistema editorial é organizado em cinco camadas principais.

| Camada | Responsabilidade | Entradas principais | Saída principal | Limite fundamental |
|---|---|---|---|---|
| **1 — Curricular** | decidir o que a unidade deve construir e até onde | Plano, conhecimentos anteriores, fontes, calibração | arquitetura congelada | não redigir a apostila final |
| **2 — Conteúdo** | materializar compreensão e prática | arquitetura congelada | Texto Teórico e Texto Prático congelados | não decidir aparência ou infraestrutura por conveniência |
| **3 — Editorial** | organizar leitura, hierarquia, relações e representação | arquitetura + conteúdo congelado | especificação editorial concreta da apostila | não alterar silenciosamente o conteúdo |
| **4 — Técnica** | implementar documento, paginação, impressão e extensões | decisões editoriais + normas técnicas | HTML/CSS e artefatos de produção | não redefinir função pedagógica ou semântica |
| **5 — Produto e Validação** | verificar a materialização no artefato final | artefatos técnicos renderizados | PDF oficial validado e diagnóstico de conformidade | revelar defeitos sem redefinir silenciosamente currículo, conteúdo ou norma |

## 17. Camada 1 — Curricular

A camada curricular responde: **o que precisa ser aprendido e por quê?**

Ela organiza Tópicos, Blocos e Partes; define contratos, fronteiras, gargalos, movimento conceitual, importância, perfis didáticos, regimes de representação, recursos essenciais e capacidades futuras. Ela não decide quantidade de páginas, classe CSS ou desenho exato de um componente.

## 18. Camada 2 — Conteúdo

A camada de conteúdo responde: **como essa arquitetura se transforma em compreensão e ação linguística?**

O Texto Teórico constrói instrumentos de percepção, distinção, análise, justificação e transferência. O Texto Prático transforma compreensão disponível em ação observável, retira apoio quando necessário e fornece evidência de domínio. Ambos podem especificar recursos quando sua função conceitual ou prática já é necessária.

## 19. Camada 3 — Editorial

A camada editorial responde: **como o conteúdo será percebido, navegado e relacionado na página sem perder sua natureza?**

Ela decide hierarquia visual, ritmo, composição, relações espaciais, tratamento de corpus, integração prosa–recurso, abertura de unidades, componentes apropriados, comportamento de figuras e critérios de paginação editorial.

## 20. Camada 4 — Técnica

A camada técnica responde: **como a decisão editorial será implementada de modo estável, reproduzível e imprimível?**

Ela abrange HTML, CSS, DOM, paginação, JavaScript quando necessário, SVG, assets locais, impressão, outline, acessibilidade técnica, contratos de atomicidade e diagnóstico de overflow. Seus detalhes pertencem ao Documento 03 e à Base.

## 21. Camada 5 — Produto e Validação

A camada de produto e validação responde: **a materialização final funciona de fato e preserva aquilo que as camadas anteriores determinaram?**

O PDF oficial é a superfície final de verificação da materialização. É nele que se verificam dimensões físicas, quebras, clipping, legibilidade, integridade de imagens, comportamento de SVG, cabeçalhos, rodapés, outline, contraste, materialidade, proximidade entre corpus e análise e ausência de pistas indevidas. Ele possui **autoridade empírica sobre o resultado renderizado**: pode demonstrar que uma implementação falhou. Não possui, porém, autoridade curricular ou semântica para redefinir silenciosamente arquitetura, conteúdo, norma ou função pedagógica. Quando revelar um defeito, sua causa deve ser diagnosticada e encaminhada à camada competente.

## 22. A causa de um problema pode estar acima de onde ele aparece

Um overflow é visível no PDF, mas pode ter causa técnica. Uma representação ambígua aparece na página, mas pode ter causa editorial. Uma imagem impossível de produzir sem inventar informação pode revelar especificação conceitual insuficiente. Uma atividade que perde sentido após a diagramação pode ter sido mal construída antes do HTML.

Por isso:

> **a camada em que o defeito aparece não é necessariamente a camada em que deve ser corrigido.**

---

# V — Taxonomia de canonicidade

## 23. Quatro níveis de alcance

O sistema adota quatro níveis de canonicidade. Eles classificam **o alcance da solução**, não sua qualidade, beleza, dificuldade ou maturidade.

| Nível | Definição | Regra de herança | Exemplo de natureza |
|---|---|---|---|
| **A — Canônico Universal** | identidade, princípio ou infraestrutura que pertence ao sistema linguístico como um todo | herdado por padrão; exceção exige justificativa sistêmica | A4, fidelidade ao conteúdo, identidade editorial, navegação documental, infraestrutura-base |
| **B — Canônico Opcional** | solução reutilizável aprovada para função recorrente | considerada quando a função existir; nunca por obrigação | tratamento de definição, corpus documental, critérios de gabarito, composições contrastivas |
| **C — Específico** | solução correta ligada a fenômeno, tópico, bloco, corpus ou regime particular | não herdado automaticamente | árvore sintática particular, cadeia referencial, mapa dialetal, visual fonológico específico |
| **D — Microajuste Local** | acomodação pontual sem valor normativo | nunca herdado por padrão | largura excepcional, espaçamento local, quebra específica, correção de overflow |

> **Nível mede alcance. Não mede qualidade.**

## 24. Nível A — Canônico Universal

Pertencem ao Nível A apenas decisões que definem o funcionamento ou a identidade geral do sistema e que devam ser conhecidas antes do conteúdo particular de uma nova apostila.

Candidatos fortes ao Nível A incluem, em nível de princípio:

- precedência da arquitetura e do conteúdo sobre a diagramação;
- formato A4 como destino editorial principal;
- PDF oficial como produto de estudo;
- HTML/CSS como artefatos de produção preserváveis;
- identidade visual própria do Plano Linguístico;
- separação entre conteúdo semântico e distribuição física em páginas;
- cabeçalho contextual e rodapé documental;
- outline econômico;
- semântica HTML adequada;
- funcionamento offline;
- fidelidade de corpus e recursos;
- preflight do produto real;
- princípio de extensão local antes de promoção sistêmica.

Os valores técnicos concretos e seletores pertencem à Arquitetura Técnica e à Base, não a este documento.

## 25. Nível B — Canônico Opcional

O Nível B reúne soluções reutilizáveis para funções que aparecem recorrentemente, mas não existem em toda apostila.

O princípio é:

> **Canônico opcional não significa obrigatório. Significa que, quando esta função existir, o sistema já possui uma solução que deve ser considerada antes de criar outra.**

No estágio atual do Plano Linguístico, várias funções são **candidatas** a Nível B, mas não devem ser declaradas consolidadas antecipadamente. Entre elas podem estar:

- tratamento de definição segundo estatuto epistemológico;
- enunciado linguístico como objeto de análise;
- corpus documental;
- crédito/proveniência de corpus;
- contraste entre formas ou interpretações;
- representação IPA;
- questão externa;
- resposta-modelo;
- critério de suficiência;
- faixa de aceitação.

Sua promoção efetiva depende de validação em materiais reais.

## 26. Nível C — Específico

Uma solução permanece específica quando seu funcionamento depende fortemente de determinado fenômeno, corpus, tópico, bloco, tipo de análise ou regime de representação.

Exemplos possíveis:

- árvore sintática desenhada para uma análise específica;
- espectro ou esquema fonético especializado;
- mapa de uma distribuição sociolinguística concreta;
- representação espacial de alcance de uma construção;
- disposição particular de um poema quando a própria materialidade é o objeto;
- cadeia referencial construída para determinado texto;
- visual de interação multimodal próprio de um corpus.

Uma solução de Nível C pode ser excelente e definitiva em seu contexto sem jamais precisar ser promovida.

## 27. Nível D — Microajuste Local

O Nível D contém correções de composição sem valor normativo geral, por exemplo:

- ajuste de largura;
- pequeno recuo;
- deslocamento de legenda;
- espaçamento excepcional;
- associação local entre título e primeiro parágrafo;
- ajuste pontual de escala;
- quebra específica;
- correção de clipping ou overflow.

Microajustes não devem ser copiados automaticamente para novas apostilas nem transformados em tokens ou componentes sem evidência de recorrência funcional.

## 28. Canonicidade não é permanência absoluta

Uma solução pode ser promovida, rebaixada, substituída ou depreciada quando a experiência mostrar que seu alcance foi estimado incorretamente ou que outra solução resolve melhor a mesma função.

A mudança precisa ser deliberada e documentada. Evolução do sistema não deve ocorrer por deriva acidental.

---

# VI — Maturidade das soluções

## 29. Canonicidade e maturidade são eixos diferentes

O nível A/B/C/D responde: **até onde esta solução pertence?**  
O estado de maturidade responde: **quanta evidência existe de que sua função e implementação estão suficientemente resolvidas?**

Uma solução pode, por exemplo, ser candidata a Nível B e ainda estar provisoriamente canônica. Outra pode ser Nível C e estar totalmente consolidada dentro de seu escopo local.

## 30. Estados de maturidade

### 30.1 Consolidado

Função estável, critérios de uso e não uso claros, implementação suficientemente testada e comportamento satisfatório em produto real.

### 30.2 Provisoriamente canônico

Função claramente descrita e solução promissora ou aprovada em poucos casos, mas ainda sem evidência suficiente para ser tratada como repertório inteiramente estabilizado.

Pode ser reutilizada com prudência e auditoria.

### 30.3 Local / precedente

Solução válida vinculada a necessidade particular ou ainda sem generalidade demonstrada. Seu estado local não significa baixa qualidade. Pode permanecer definitiva dentro da apostila que a originou.

### 30.4 Depreciado

Solução que não deve ser utilizada em novas produções porque foi substituída, revelou problemas estruturais ou deixou de representar adequadamente a função que deveria cumprir.

Depreciação não exige reabrir automaticamente documentos congelados que continuam corretos em seu próprio estado histórico.

## 31. Maturidade deve ser demonstrada, não presumida

Uma solução não se torna consolidada porque foi bem recebida visualmente ou porque apareceu muitas vezes dentro de uma única apostila. Maturidade exige evidência de funcionamento, clareza semântica e estabilidade.

---

# VII — Taxonomia dos recursos

## 32. Recursos possuem tipo e estatuto funcional

O sistema distingue três categorias superiores de recurso, herdadas da arquitetura teórica e prática:

### 32.1 Visual para HTML

Representação **construída** para tornar uma relação, estrutura, sequência, contraste, hierarquia ou funcionamento perceptível.

Pode incluir:

- diagramas;
- esquemas;
- cadeias;
- árvores;
- mapas conceituais;
- linhas temporais;
- estruturas comparativas;
- representações espaciais;
- composições relacionais.

O Visual para HTML não é um documento preexistente. Sua liberdade construtiva aumenta a responsabilidade de não inventar relações.

### 32.2 Imagem para HTML

Imagem preexistente incorporada à apostila como objeto, evidência, contexto ou suporte de análise.

Pode incluir:

- fotografia;
- anúncio;
- charge;
- mapa já existente;
- página digital;
- captura de interface;
- ilustração documental;
- reprodução de obra visual.

Sua fidelidade e proveniência dependem da função que realiza.

### 32.3 Fac-símile para HTML

Reprodução suficientemente fiel de um objeto cuja materialidade participa da compreensão ou da análise.

Pode incluir:

- página de livro;
- poema diagramado;
- manuscrito;
- questão original;
- anúncio;
- documento histórico;
- página de jornal;
- interface ou artefato gráfico cuja disposição seja significativa.

Fac-símile não significa necessariamente reprodução fotográfica integral da página. Significa preservar os elementos materiais necessários para que o objeto continue sendo o mesmo fenômeno relevante para a análise.

## 33. Segundo eixo: essencial × complementar

O tipo do recurso e sua importância curricular são eixos independentes.

Todo recurso pode ser classificado como:

- **essencial** — a compreensão, análise ou tarefa depende dele; sua função e condições de uso precisam estar suficientemente especificadas antes do congelamento relevante;
- **complementar** — melhora compreensão, contexto ou legibilidade, mas sua ausência não destrói a arquitetura central da unidade.

São combinações legítimas:

```text
Visual essencial
Visual complementar
Imagem essencial
Imagem complementar
Fac-símile essencial
Fac-símile complementar
```

## 34. Recurso essencial exige especificação proporcional

Quanto mais a compreensão depender de um recurso, menor pode ser a ambiguidade de sua especificação.

Um recurso essencial deve permitir saber, antes da implementação final:

- sua função conceitual ou prática;
- o que precisa tornar perceptível ou preservar;
- onde entra no raciocínio;
- que relações espaciais são necessárias;
- que elementos não podem desaparecer;
- que inferências não pode sugerir;
- como prosa e recurso se articulam;
- que grau de fidelidade é exigido;
- que comportamento mínimo precisa sobreviver ao HTML/PDF.

O Documento 01 define essa obrigação. Os detalhes de especificação e implementação pertencem aos documentos posteriores.

## 35. Recurso não é decoração

A existência de um formato possível não cria necessidade de uso. Um recurso só deve permanecer quando desempenha função identificável de construção, representação, preservação, evidência, orientação, análise ou prática.

---

# VIII — Corpus como objeto editorial próprio

## 36. Corpus não é apenas texto em uma caixa

No Plano Linguístico, corpus pode ser simultaneamente conteúdo, evidência, objeto de análise e objeto material. Sua função editorial depende de origem, contexto, forma, integridade e do tipo de inferência que autoriza.

Por isso, a arquitetura editorial deve distinguir pelo menos os seguintes estatutos.

| Estatuto | Natureza | O que pode sustentar | Cuidado principal |
|---|---|---|---|
| **Exemplo autoral** | construído didaticamente | possibilidade, contraste, isolamento de variável | não usar como prova de frequência ou uso social real |
| **Corpus real** | ocorrência documentada | observação de uso efetivo e análise do caso | controlar proveniência, recorte e força da generalização |
| **Questão externa** | material avaliativo de outra instituição | calibração, prática, análise de operação | preservar autoria, adaptação e integridade necessária |
| **Fac-símile** | forma de apresentação fiel de objeto material | análise em que disposição e suporte participam | preservar materialidade relevante |
| **Recriação didática** | reconstrução controlada para ensino | simulação, comparação, exercício hipotético | não apresentar como documento ou ocorrência real |
| **Representação construída** | modelo ou esquema do fenômeno | explicitação de relação, estrutura ou processo | controlar inferências visuais e simplificações |

## 37. Os eixos não devem ser confundidos

As categorias acima não formam uma única lista exclusiva.

Um **corpus real** pode ser apresentado como **Imagem para HTML** ou como **Fac-símile para HTML**. Uma questão externa pode conter uma imagem-corpus. Um poema pode ser corpus real e exigir fac-símile porque sua disposição gráfica participa do fenômeno. Uma representação construída pode funcionar como Visual para HTML sem ser corpus.

A arquitetura deve separar:

- **o que o objeto é epistemicamente**;
- **como ele é apresentado editorialmente**;
- **quão necessário ele é para a compreensão ou tarefa**.

## 38. Força evidencial e direito de transformação

Quanto maior a força documental atribuída ao corpus, menor a liberdade de alteração interpretativa.

A camada editorial pode realizar tratamentos técnicos compatíveis com a preservação — recorte de margem irrelevante, escala proporcional, ajuste moderado de contraste, conversão de formato, correção de inclinação, compressão segura —, mas não pode alterar elementos que participam do fenômeno analisado.

## 39. Literatura como laboratório, não como autoridade teórica

Trechos literários podem funcionar como corpus particularmente rico porque tornam visíveis escolhas lexicais, sintáticas, rítmicas, gráficas, enunciativas, estilísticas e discursivas. Essa função não transforma a obra literária em prova de uma teoria linguística geral.

O sistema editorial deve preservar essa diferença de estatuto.

## 40. Recursos gerados por IA e corpus documental

Recursos gerados por inteligência artificial podem ser legítimos em cenas hipotéticas, contrastes didáticos e situações controladas. Não devem ser apresentados como evidência empírica de como comunidades falam, como documento histórico, anúncio real, dado sociolinguístico, manuscrito, registro autêntico ou substituto de corpus verificável.

---

# IX — Materialidade e fidelidade

## 41. Princípio de materialidade

> **Quando a forma material participa do fenômeno, ela pertence ao conteúdo que precisa ser preservado.**

A materialidade pode incluir:

- quebra de linha ou verso;
- disposição gráfica;
- ordem espacial;
- alinhamento;
- escala relativa;
- tipografia;
- relação texto–imagem;
- suporte;
- legenda;
- cor quando semanticamente pertinente;
- sequência;
- organização de página;
- relação entre elementos de uma interface;
- sinais gráficos presentes no original.

## 42. Três situações diferentes

### 42.1 Conteúdo verbal suficiente

Quando apenas as palavras importam, o objeto pode ser reconstruído semanticamente em HTML com crédito adequado, sem necessidade de reproduzir sua página original.

### 42.2 Materialidade relevante

Quando forma e disposição participam da interpretação, parte da materialidade precisa ser preservada ou reconstruída com fidelidade suficiente.

### 42.3 Ornamentação acidental

Elementos que pertencem ao suporte original, mas não participam do fenômeno em estudo, podem ser omitidos ou recortados quando isso não altera o objeto.

## 43. Fidelidade é proporcional à função

Uma imagem contextual pode admitir tratamento diferente de uma imagem-corpus. Um fac-símile de poema pode exigir preservação de espaçamento que seria irrelevante em uma citação comum. Uma questão de vestibular não exige screenshot integral da página se cabeçalho administrativo, número de página ou instruções gerais não participam da tarefa; mas não se pode cortar legenda, crédito, escala, figura ou informação necessária à resolução.

## 44. A estética não pode simular autenticidade

O sistema não deve produzir recriações gráficas que possam ser confundidas com documentos reais quando a autenticidade é relevante. A clareza didática não autoriza fabricar materialidade documental inexistente.

---

# X — Taxonomia dos componentes

## 45. Definição de componente

> **Um componente é uma solução editorial reutilizável para uma função semanticamente estável.**

A definição contém quatro exigências:

1. existe uma **função** identificável;
2. a função pode **reaparecer**;
3. a solução pode ser **reutilizada sem deformar conteúdos diferentes**;
4. o componente possui **limites de uso**.

## 46. O que não é componente

Por si só, não constitui componente:

- uma caixa;
- uma borda;
- uma cor;
- uma classe CSS;
- um tamanho de título;
- qualquer elemento visual;
- um ajuste local;
- uma composição usada uma única vez;
- uma estrutura específica demais para ser reutilizável.

Uma classe CSS pode implementar um componente, mas não é sua definição conceitual.

## 47. Famílias possíveis

Sem antecipar o futuro Catálogo, o sistema reconhece que componentes podem pertencer a famílias como:

- **tipográfica** — tratamento recorrente em que hierarquia textual realiza a função;
- **estrutural** — organiza unidades e relações sem depender de conteúdo específico;
- **tabular** — compara, relaciona ou decompõe dados genuinamente tabulares;
- **documental / apresentação de corpus** — solução editorial reutilizável para apresentar, contextualizar, identificar, creditar ou preservar corpus e sua materialidade sem alterar seu estatuto epistemológico;
- **visual** — torna perceptível relação espacial ou estrutural;
- **textual-visual** — integra prosa e representação em uma única unidade funcional;
- **prática** — organiza ação do estudante;
- **gabarito** — organiza resposta, critério, justificativa ou faixa de aceitação.

**O corpus em si não é um componente.** Corpus é objeto, evidência, ocorrência ou documento; componente é, quando necessário, a solução editorial usada para apresentá-lo.

```text
CORPUS
= objeto / evidência / ocorrência / documento

COMPONENTE DE APRESENTAÇÃO DE CORPUS
= solução editorial
```

A existência dessas famílias não cria automaticamente componentes canônicos.

## 48. Critério de economia

Antes de criar componente novo, verificar se a função pode ser cumprida por:

- prosa;
- hierarquia tipográfica;
- espaço;
- estrutura semântica simples;
- tabela genuína;
- componente existente.

O componente novo entra apenas quando acrescenta clareza funcional suficiente para justificar seu custo.

---

# XI — Componentes e estatuto epistemológico

## 49. Aparência não deve apagar estatuto

Funções epistemologicamente diferentes não devem ser fundidas apenas porque cabem na mesma caixa visual. O sistema precisa tornar distinguível, quando relevante, **que tipo de afirmação ou resposta o leitor está recebendo**.

## 50. Definições

O Plano Linguístico distingue:

### 50.1 Definição conceitual

Formulação adequada como referência geral no nível do Plano.

### 50.2 Definição situada

Formulação dependente de teoria, tradição ou modelo específico.

### 50.3 Definição de trabalho

Formulação pedagógica adotada para tornar o fenômeno analisável naquele estágio.

A arquitetura editorial deve ser capaz de preservar essas diferenças. Ela não deve recuperar a antiga categoria “Definição Central” como se “centralidade” fosse um quarto estatuto epistemológico.

**Centralidade curricular** e **tipo de definição** são eixos diferentes. Uma definição de trabalho pode ser central para uma unidade; uma definição conceitual pode ser auxiliar.

## 51. Estatutos de afirmação

Quando necessário à clareza, a materialização também deve respeitar diferenças entre:

- observação;
- descrição;
- generalização;
- inferência;
- interpretação;
- hipótese;
- reconstrução histórica;
- prescrição;
- formulação teórica;
- formulação pedagógica.

Isso não implica criar um componente visual para cada categoria. Implica impedir que a forma editorial faça parecer equivalente aquilo que epistemologicamente não é.

## 52. Gabarito aberto

O Texto Prático distingue três funções que não devem ser confundidas:

### 52.1 Resposta-modelo

Uma realização possível de resposta correta. Não deve sugerir que sua redação é a única aceitável quando o comando admite formulações equivalentes.

### 52.2 Critério de suficiência

Conjunto de elementos conceituais, evidenciais ou relacionais que qualquer resposta adequada precisa preservar.

### 52.3 Faixa de aceitação

Explicita formulações, interpretações ou variações ainda compatíveis com os dados e com o comando.

Essas funções podem receber soluções editoriais relacionadas, mas não devem ser colapsadas semanticamente em uma única categoria genérica de “resposta”.

---

# XII — Regimes de representação

## 53. Regime de representação é decisão curricular antes de ser editorial

As Estruturas Canônicas distinguem cinco regimes principais:

- **verbal**;
- **simbólico**;
- **visual**;
- **espacial**;
- **multimodal**.

A arquitetura editorial recebe essa orientação e decide como materializá-la. Não escolhe um regime diferente apenas para produzir variedade gráfica.

## 54. Regime verbal

A prosa conduz definição, explicação, distinção, justificação, análise e interpretação. Recursos adicionais permanecem subordinados ao raciocínio quando não constituem parte do próprio fenômeno.

## 55. Regime simbólico

Notação, IPA, segmentação, marcação, índices ou outros sistemas simbólicos carregam parte indispensável do conteúdo. A implementação precisa assegurar legibilidade, cobertura Unicode, alinhamento e relação clara com a explicação verbal.

## 56. Regime visual

Diagramas, mapas, imagens e esquemas tornam relações perceptíveis. A geometria e os sinais gráficos podem carregar significado e precisam ser auditados semanticamente.

## 57. Regime espacial

Posição, alcance, hierarquia, proximidade, inclusão e ordenação são parte da representação. Alterar a composição pode alterar o conteúdo percebido.

## 58. Regime multimodal

Diferentes modos — texto, imagem, voz representada, disposição, tipografia, gesto, interface, mapa ou outros — cooperam na própria produção do fenômeno. Nesses casos, prosa e recurso não devem ser tratados como elementos independentes colocados lado a lado por conveniência.

## 59. Regimes podem combinar-se

Uma unidade pode ser predominantemente verbal com apoio simbólico; outra pode exigir integração espacial e multimodal. A classificação orienta proporção e responsabilidade, não cria templates rígidos.

---

# XIII — Relação entre prosa, recurso e página

## 60. Gramática preferencial de integração

Um movimento frequente e funcional é:

```text
PROSA PREPARA
        ↓
RECURSO REVELA / ORGANIZA / PRESERVA / FORNECE O FENÔMENO
        ↓
PROSA INTERPRETA E CONTINUA
```

A prosa pode preparar o olhar, o recurso pode tornar uma relação perceptível ou oferecer o próprio objeto e a prosa pode então interpretar, limitar ou fazer o conceito avançar.

## 61. A gramática não é fórmula obrigatória

Há casos em que o recurso deve aparecer primeiro:

```text
RECURSO PROVOCA
        ↓
PROSA INVESTIGA
        ↓
CONCEITO ORGANIZA
        ↓
RECURSO É RELIDO
```

Há também situações em que prosa e recurso desenvolvem simultaneamente dimensões complementares da mesma relação.

A arquitetura editorial deve preservar o movimento real do conteúdo, não impor uma coreografia fixa.

## 62. A página física não substitui a unidade conceitual

Uma Parte, seção, corpus ou atividade pode atravessar páginas quando sua extensão real exigir. Da mesma forma, duas unidades não devem ser mantidas juntas apenas para “encher” uma página.

A atomicidade deve acompanhar a **dependência semântica**. Nem todo componente é indivisível; nem todo conteúdo pode ser quebrado livremente. Unidades pequenas e fortemente dependentes devem permanecer juntas quando possível, enquanto unidades extensas podem exigir continuidade controlada entre páginas.

Entre as dependências que normalmente merecem preservação de proximidade estão:

- título + início do conteúdo;
- imagem + legenda;
- corpus curto + fonte;
- comando + alternativas;
- critério + resposta-modelo quando inseparáveis;
- visual + explicação imediata quando a relação exige proximidade.

Corpus longos, transcrições, questões extensas, gabaritos, tabelas e outros objetos de grande extensão podem exigir continuidade entre páginas sem que sua unidade conceitual seja falsificada. **O mecanismo técnico dessa continuidade pertence à Arquitetura Técnica.**

## 63. Espaço em branco é consequência possível da coerência

Uma página não precisa ser preenchida até o limite se isso exigir separar elementos dependentes, miniaturizar recurso importante ou introduzir conteúdo artificial.

Coerência editorial possui prioridade sobre densidade uniforme.

## 64. Materialidade pode determinar composição

Quando a disposição faz parte do objeto, a página deve se adaptar ao recurso na medida necessária. Isso não significa que o restante do documento deva adotar o mesmo layout.

---

# XIV — Apoio, autonomia e não vazamento de resposta

## 65. O mesmo recurso pode ser legítimo ou indevido conforme a função da atividade

No Texto Prático, uma marcação pode ser excelente apoio durante aprendizagem guiada e, ao mesmo tempo, tornar inválida uma atividade destinada a medir autonomia.

Por isso, a auditoria editorial deve reconhecer pelo menos três regimes:

- **atividade guiada**;
- **atividade parcialmente guiada**;
- **atividade autônoma**.

## 66. Apoio legítimo

Um apoio é legítimo quando corresponde ao grau de suporte previsto pela prática. Pode incluir, conforme a atividade:

- perguntas intermediárias;
- categorias fornecidas;
- organização parcial do corpus;
- marcações;
- hipóteses para comparação;
- estrutura inicial de resposta;
- representação incompleta;
- indicação do que observar.

## 67. Vazamento de resposta

> **O recurso se torna inadequado quando realiza pelo estudante uma operação que a atividade pretendia tornar observável sob seu controle.**

Devem ser auditados, especialmente:

- cores;
- setas;
- destaque tipográfico;
- agrupamentos;
- rótulos;
- recortes;
- legendas;
- ordem privilegiada;
- proximidade;
- linhas de conexão;
- preenchimentos;
- ícones;
- sequências espaciais.

## 68. Não existe proibição absoluta de pistas

A arquitetura não deve transformar “não entregar a resposta” em proibição geral de orientação visual. O critério depende da operação avaliada.

Uma representação que mostra a distinção para ensinar pode ser correta. A mesma representação, reapresentada resolvida em uma tarefa autônoma que pede justamente localizar essa distinção, pode invalidar a evidência de domínio.

## 69. O Gabarito pode revelar o que a atividade não podia antecipar

Após a tentativa do estudante, o Gabarito pode utilizar marcações, decomposições, conexões e outras representações que tornem explícito o raciocínio correto, desde que permaneça fiel ao comando e à pluralidade legítima de respostas.

---

# XV — Taxonomia de precedentes

## 70. Precedente é evidência histórica

Precedentes demonstram que determinada solução já foi usada em contexto real. Eles não são primeira fonte de autoridade e não devem funcionar como templates integrais quando regras e arquitetura já resolvem a necessidade.

## 71. Tipos de precedente

### 71.1 Precedente de infraestrutura

Mostra funcionamento anterior de chassi documental, paginação, cabeçalho, rodapé, outline ou comportamento de impressão.

### 71.2 Precedente de componente

Mostra uso real de uma função reutilizável já classificada ou candidata a classificação.

### 71.3 Precedente de solução específica

Mostra como um fenômeno particular foi representado. Pode permanecer Nível C sem promoção.

### 71.4 Precedente de patch

Registra correção localizada de defeito. Não deve ser confundido com regra geral apenas porque resolveu um caso.

### 71.5 Precedente de paginação

Mostra como dependências ou continuidades difíceis foram tratadas em documento real.

### 71.6 Precedente documental

Mostra tratamento de corpus, fac-símile, crédito, original/derivado, imagem externa ou materialidade comparável.

## 72. Consultar o menor precedente suficiente

Se a dúvida é sobre tratamento de uma definição, não é necessário reler uma apostila inteira quando o Catálogo e um único exemplo resolvem a questão.

> **Precedente deve reduzir incerteza, não aumentar contexto sem necessidade.**

## 73. Precedente antigo não vence regra nova

Quando o sistema evolui, documentos históricos continuam úteis como evidência, mas não podem contrariar silenciosamente norma posterior.

Diferenças históricas em apostilas congeladas não exigem retronormalização automática.

---

# XVI — Promoção, manutenção, rebaixamento e depreciação

## 74. Solução nova nasce local

Por padrão, uma necessidade inédita produz **extensão local**. A própria construção da apostila não possui autoridade para declarar que a nova solução agora pertence ao sistema inteiro.

## 75. Critérios de promoção

Uma solução local só deve ser promovida quando, em conjunto, houver evidência suficiente de que:

1. sua função pode ser descrita sem depender do exemplo que a originou;
2. a função reaparece ou possui generalidade claramente demonstrável;
3. sua semântica editorial é clara;
4. pode ser reutilizada sem deformar conteúdos diferentes;
5. reduz improvisação ou custo de decisão;
6. já foi implementada em material real;
7. sobreviveu à renderização HTML;
8. sobreviveu ao PDF oficial;
9. sobreviveu ao preflight pertinente;
10. possui critério claro de uso;
11. possui critério claro de não uso;
12. não cria rigidez desnecessária;
13. não depende de uma peculiaridade do tópico original;
14. pode ser mantida sem contaminar a Base com especificidade excessiva.

Repetição visual não basta.

## 76. Manutenção

Uma solução canônica pode receber correções que preservem sua função e contrato. Ajustes técnicos, de acessibilidade ou de robustez podem ser incorporados quando realmente melhoram o sistema sem alterar silenciosamente seu significado.

## 77. Rebaixamento

Uma solução deve ser rebaixada quando a experiência mostrar que sua suposta generalidade era menor do que se imaginava. Um componente B pode tornar-se precedente C; uma regra sistêmica pode ser reconhecida como caso específico.

Rebaixar não significa declarar a solução errada. Significa corrigir seu alcance.

## 78. Substituição

Uma solução pode ser substituída quando outra realiza a mesma função de forma mais robusta, simples, acessível ou compatível com o sistema.

A substituição deve declarar o que passa a ocupar sua função e em que escopo.

## 79. Depreciação

Uma solução é depreciada quando não deve ser utilizada em novas produções. A causa pode ser defeito conceitual, baixa robustez, manutenção excessiva, risco de interpretação, incompatibilidade técnica ou existência de solução superior.

Depreciação não autoriza retronormalização indiscriminada de apostilas congeladas.

## 80. Promoção deve acontecer depois da validação, não durante a empolgação da criação

O sistema deve resistir à tendência de transformar toda solução nova bem-sucedida em nova norma. A ordem saudável é:

```text
NECESSIDADE LOCAL
        ↓
SOLUÇÃO LOCAL
        ↓
IMPLEMENTAÇÃO
        ↓
PDF
        ↓
VALIDAÇÃO
        ↓
RECORRÊNCIA OU GENERALIDADE DEMONSTRADA?
        ↓
PROMOÇÃO DELIBERADA, SE JUSTIFICADA
```

---

# XVII — Estados dos artefatos editoriais

## 81. Estados devem corresponder a mudanças reais de trabalho

O sistema evita multiplicar rótulos para pequenas fases internas. Um conjunto simples de estados é suficiente.

### 81.1 Em construção

O artefato ainda pode receber mudanças substantivas dentro de seu escopo.

### 81.2 Candidato

A construção está suficientemente completa para validação formal ou teste em produto real, mas ainda não foi aprovada.

### 81.3 Aprovado

O artefato passou pelas validações pertinentes e não possui defeito conhecido que impeça seu uso.

### 81.4 Congelado

A versão aprovada foi encerrada e sai da superfície normal de alteração.

### 81.5 Reaberto excepcionalmente

Um artefato congelado retorna ao fluxo porque surgiu defeito real, incompatibilidade, mudança sistêmica autorizada ou outra razão documentável.

## 82. Congelamento encerra refinamento opcional

> **Congelamento não significa infalibilidade. Significa que a possibilidade de fazer diferente já não é razão suficiente para alterar.**

Depois do congelamento, não reabrir apenas para:

- modernizar aparência;
- experimentar outra composição;
- uniformizar diferenças históricas;
- aplicar retrospectivamente componente novo;
- reduzir duplicação de código;
- trocar uma solução correta por outra apenas preferida.

## 83. Estados podem aplicar-se a objetos diferentes

Apostila, Base, componente, documento canônico e solução técnica podem possuir ciclos próprios. Não se deve presumir que congelar uma apostila congele automaticamente todo componente nela utilizado como regra do sistema.

## 84. Estado da solução e nível de canonicidade são independentes

Uma apostila pode estar congelada e conter solução C específica. Um componente B pode estar apenas candidato. A Base pode estar congelada enquanto o Catálogo ainda cresce.

---

# XVIII — Política de reabertura e roteamento de problemas

## 85. Regra causal

Quando surgir defeito, perguntar primeiro:

> **Qual é a causa do problema e qual camada possui autoridade para corrigi-la?**

O roteamento geral é:

```text
problema curricular
→ Estruturas Canônicas

problema conceitual ou epistemológico da teoria
→ Texto Teórico

problema de capacidade, comando, atividade ou gabarito
→ Texto Prático

problema editorial local de composição
→ HTML/CSS da apostila

problema de função reutilizável
→ componente / Catálogo

problema técnico sistêmico
→ Arquitetura Técnica / Base

problema de corpus, proveniência, crédito, transformação ou materialidade
→ política documental correspondente

problema visível apenas no produto renderizado
→ diagnosticar causa antes de escolher a camada de correção
```

## 86. Um nível inferior não corrige silenciosamente um problema superior

Exemplos:

- Se o exercício exige conceito nunca construído, não inserir explicação oculta no HTML; reabrir a prática ou teoria conforme a causa.
- Se um Visual essencial não pode ser construído sem decidir uma relação que a arquitetura deixou indefinida, não inventar a relação no SVG; retornar à especificação conceitual.
- Se o corpus não sustenta a generalização feita no Texto Teórico, não resolver isso trocando silenciosamente a legenda; reabrir a afirmação ou sua evidência.

## 87. Problemas locais devem produzir patches locais quando a causa for local

Não usar a política de reabertura como justificativa para redesign amplo. Quando o defeito estiver restrito à composição e não afetar o sistema, a correção deve ter a menor superfície compatível com o problema.

## 88. Reabertura sistêmica exige alcance explícito

Alterar Base, regra geral, arquitetura técnica, taxonomia ou política documental afeta produções futuras e potencialmente diversos artefatos. Essas mudanças exigem tarefa deliberadamente sistêmica; não devem nascer como efeito colateral de corrigir uma única página.

---

# XIX — Relação entre os documentos canônicos

## 89. Separação deliberada de responsabilidades

O sistema documental pretendido deve evitar que um único arquivo acumule arquitetura, norma, implementação, catálogo, fluxo e instruções de agente.

A organização de referência é:

```text
00 — ESTRUTURAS CANÔNICAS DO PLANO LINGUÍSTICO
Arquitetura curricular.
O que será construído, por que, até onde, em que movimento e com quais fronteiras.

00A — REGRAS DO TEXTO TEÓRICO
Construção da compreensão.
Como a arquitetura congelada se transforma em prosa, conceitos, corpus, evidências e representações.

00B — REGRAS DO TEXTO PRÁTICO
Construção da prática e evidência de domínio.
Como compreensão legitimamente construída se transforma em ação observável e progressivamente autônoma.

01 — ARQUITETURA E TAXONOMIA CANÔNICA DO SISTEMA EDITORIAL
Fundação sistêmica.
O que pertence ao sistema editorial, em que nível pertence e como evolui.

02 — REGRAS GERAIS HTML/CSS
Conformidade normativa.
O que uma produção editorial precisa respeitar.

03 — ARQUITETURA TÉCNICA HTML/CSS
Infraestrutura herdável.
Como o chassi técnico do documento funciona antes do conteúdo particular.

04 — CATÁLOGO DE COMPONENTES HTML/CSS
Repertório funcional opcional.
Que soluções reutilizáveis existem, quando usar e quando não usar.

05 — FLUXO DE PRODUÇÃO HTML/CSS
Processo.
Em que ordem entender, classificar, herdar, construir, validar, corrigir e congelar.

06 — GUIA CODEX / GUIA DE AGENTE
Delegação e operação.
Como um agente recebe contexto, escopo, autonomia e critérios de validação proporcionais à tarefa.

07 — CORPUS, ASSETS, PROVENIÊNCIA E MATERIALIDADE
Governança documental.
Como objetos externos, originais, derivados, créditos, licenças, tratamentos e materialidade são preservados.

BASE HTML/CSS
Implementação concreta da infraestrutura aprovada.
```

Os nomes e a existência definitiva dos documentos posteriores ainda podem ser refinados durante sua elaboração. O que este Documento 01 fixa é a **separação de responsabilidades**. A presença de um artefato nesse mapa significa que existe uma **categoria arquitetônica prevista**, não que o documento, o Catálogo, a política especializada ou a Base já estejam produzidos, aprovados ou canônicos.

## 90. Fronteira do Documento 01

Este documento responde:

> **O que pertence ao sistema editorial, em que nível pertence e como esse pertencimento é governado?**

Ele não deve responder em detalhe:

- quais seletores CSS implementar;
- qual algoritmo de paginação utilizar;
- quais valores exatos de margem ou tipografia adotar;
- qual HTML mínimo de cada componente;
- como executar Git;
- como o agente deve operar passo a passo;
- como registrar cada asset;
- como gerar o PDF por linha de comando.

Essas decisões pertencem aos documentos especializados.

## 91. Relação com as antigas Regras HTML/CSS V2.0

As Regras HTML/CSS Linguísticas V2.0 permanecem patrimônio normativo e editorial importante. Seus princípios de fidelidade, economia visual, identidade própria, A4, cabeçalho, rodapé, outline, corpus, materialidade, proveniência, controle semiótico e preflight devem alimentar a futura norma.

Entretanto, alguns elementos precisam ser redistribuídos pelo novo sistema:

- arquitetura e taxonomia pertencem a este Documento 01;
- obrigações e proibições gerais pertencerão ao Documento 02;
- implementação pertencerá ao Documento 03 e à Base;
- componentes reutilizáveis pertencerão ao Documento 04;
- sequência operacional pertencerá ao Documento 05;
- instruções de agente pertencerão ao Documento 06;
- corpus, assets e materialidade documental poderão receber aprofundamento próprio no Documento 07.

Assim, a evolução para uma futura Regras HTML/CSS V3.0 não deve apagar o patrimônio da V2.0; deve **redistribuí-lo em uma arquitetura documental mais madura**.

Também deve ser abandonada qualquer leitura ritual do antigo exemplo de outline do Texto Prático. **Exemplos Resolvidos, Quiz, análise de erros, desafios, sínteses e atividades integradoras não constituem seções editoriais obrigatórias.** A estrutura prática deve seguir o Texto Prático congelado e suas capacidades; em sua metodologia atual, **Exercícios + Gabarito Comentado** formam o núcleo permanente, enquanto os demais recursos entram somente quando possuem função demonstrável.

## 92. Relação com o precedente matemático

A experiência do Plano Matemático fornece evidência forte para princípios como:

- níveis A/B/C/D;
- distinção entre canonicidade e maturidade;
- Base estável + extensão local;
- herdar antes de criar;
- precedentes sob demanda;
- Catálogo por função;
- separação entre conteúdo semântico e página física;
- fluxo até PDF e preflight;
- congelamento e reabertura controlada;
- contexto mínimo suficiente para agentes.

Esses princípios são transdisciplinares quando sua função independe da Matemática.

Não devem ser importados automaticamente:

- paleta matemática;
- classes de notação matemática;
- componentes inferenciais próprios da Lógica;
- convenções de fórmulas;
- exemplos de Geometria;
- decisões que só fazem sentido porque o objeto matemático possui determinada formalização.

A regra de transferência entre planos é:

```text
IDENTIFICAR A FUNÇÃO
        ↓
VERIFICAR SE É TRANSDISCIPLINAR
        ↓
ADAPTAR À LINGUÍSTICA
        ↓
REJEITAR O QUE FOR ESPECÍFICO DA MATEMÁTICA
```

---

# XX — Regra final da arquitetura

## 93. Finalidade última

A arquitetura editorial existe para **preservar decisões maduras, explicitar os limites de cada camada e liberar atenção para aquilo que cada novo conteúdo realmente exige**.

Ela não deve transformar a produção em burocracia nem permitir que flexibilidade se torne improvisação.

O sistema deve ser suficientemente estável para que uma nova apostila não precise reaprender identidade, infraestrutura e convenções já resolvidas; e suficientemente aberto para que novos fenômenos linguísticos não sejam forçados a caber em soluções criadas para conteúdos diferentes.

## 94. Três movimentos fundamentais

```text
HERDAR → ADAPTAR → CRIAR SOMENTE O NOVO
```

A construção parte do que já está resolvido, ajusta apenas o necessário e cria somente quando existe função nova.

```text
FUNÇÃO → REPRESENTAÇÃO → IMPLEMENTAÇÃO
```

Primeiro se identifica o trabalho que precisa ser realizado; depois se escolhe a forma capaz de realizá-lo; por fim se implementa tecnicamente essa forma.

```text
CONSTRUIR → VALIDAR → PROMOVER SOMENTE O QUE MERECER CANONICIDADE
```

A solução nova precisa provar seu valor em material real antes de ganhar alcance sistêmico.

## 95. Critério de sucesso do sistema

Esta arquitetura estará cumprindo sua função quando permitir responder com clareza:

- o que pertence ao currículo;
- o que pertence ao conteúdo;
- o que pertence à camada editorial;
- o que pertence à implementação técnica;
- o que é universal;
- o que é opcional;
- o que é específico;
- o que é microajuste;
- quão madura é uma solução;
- como recursos são classificados;
- como corpus e materialidade são preservados;
- quando um componente realmente existe;
- quando um precedente deve ser consultado;
- quando uma solução merece promoção;
- quando um artefato deve ser congelado;
- em que camada um problema precisa ser corrigido.

O princípio de encerramento é:

> **reduzir improvisação sem produzir rigidez artificial; preservar o que já funciona sem impedir que o conteúdo exija algo novo.**

---

**FIM — ARQUITETURA E TAXONOMIA CANÔNICA DO SISTEMA EDITORIAL · PLANO DE ESTUDO LINGUÍSTICO E DA LÍNGUA PORTUGUESA · VERSÃO 1.0 — CONGELADO**
