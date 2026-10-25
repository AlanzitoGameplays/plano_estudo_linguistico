# REGISTRO CANÔNICO DO SISTEMA EDITORIAL LINGUÍSTICO
## Plano de Estudo Linguístico e da Língua Portuguesa
### Versão 1.0 — 2026

---

# 0. FUNÇÃO DO DOCUMENTO

Este documento registra o estado canônico atual do sistema editorial do:

**PLANO DE ESTUDO LINGUÍSTICO E DA LÍNGUA PORTUGUESA.**

Sua função é estabelecer, de maneira explícita e compacta:

— quais arquivos constituem atualmente a infraestrutura editorial oficial;  
— quais decisões são globais e quais pertencem a tópicos específicos;  
— quais versões foram aprovadas;  
— quais materiais estão congelados;  
— qual é a hierarquia de autoridade entre documentos e implementações;  
— como futuras alterações devem ser classificadas e versionadas.

Este documento **NÃO** substitui:

— as Regras Gerais do Texto Teórico;  
— as Regras Gerais do Texto Prático;  
— as Estruturas Canônicas do Plano Linguístico;  
— as Regras Gerais HTML/CSS;  
— a Arquitetura Técnica;  
— a arquitetura específica de cada tópico.

Ele funciona como:

**REGISTRO DE ESTADO**  
+  
**ÍNDICE DE AUTORIDADE**  
+  
**CONTRATO DE CANONICIDADE.**

---

# 1. ESTADO ATUAL DO SISTEMA

Na data deste registro, o sistema editorial canônico do Plano Linguístico é composto por:

## Base Editorial

**Plano_Linguistico_Base_V2.1**

Status:

**CANÔNICA**

Função:

fornecer a infraestrutura editorial comum das apostilas linguísticas.

A Base V2.1 define:

— formato A4;  
— geometria;  
— margens;  
— tipografia;  
— densidade textual;  
— capa;  
— cabeçalho;  
— rodapé;  
— hierarquia editorial;  
— tabelas;  
— regime genérico de visuais;  
— comportamento de `figure`;  
— comportamento de `figcaption`;  
— source-content;  
— screen;  
— print;  
— contratos estruturais comuns.

A Base V2.1 foi validada por:

1. corpus demonstrativo multimodal;
2. SVG inline;
3. imagem raster horizontal;
4. fac-símile raster vertical;
5. aplicação em apostila real;
6. migração integral do Tópico 1.1 — Linguagem e Comunicação.

Nenhuma necessidade de alteração estrutural da Base foi demonstrada durante o piloto real.

---

# 2. PAGINADOR CANÔNICO

Arquivo:

**Paginador_Plano_V1.1.js**

Status:

**CANÔNICO**

O Paginador V1.1 substitui o V1.0 como versão vigente.

A mudança V1.0 → V1.1 ocorreu após a aplicação do sistema numa apostila real revelar um problema específico no tratamento de contêineres:

`data-split="children"`

O problema provocava, em determinadas condições, criação desnecessária de páginas adicionais quando o primeiro filho de um contêiner precisava ser deslocado para uma nova página.

A V1.1 realizou correção localizada desse comportamento sem alterar:

— arquitetura editorial;  
— dimensões;  
— estilos;  
— hierarquia;  
— conteúdo;  
— contratos públicos do sistema.

Portanto:

**Paginador V1.1**  
=  
**V1.0**  
+  
**CORREÇÃO DE PAGINAÇÃO COMPROVADAMENTE NECESSÁRIA.**

A versão do paginador possui ciclo de versionamento próprio.

Uma atualização do paginador **NÃO** implica automaticamente mudança da versão da Base Editorial.

---

# 3. TEMA EDITORIAL CANÔNICO

Tema:

`theme--ling`

O Plano Linguístico utiliza a mesma gramática editorial geral da coleção do Plano Matemático, com identidade cromática própria.

Princípio:

**MESMO ESQUELETO, OUTRA PELE.**

A identidade linguística utiliza o contrato genérico de tokens:

`--primary`

`--secondary`

`--accent`

`--support`

`--soft`

`--border`

`--text`

`--muted`

`--paper`

`--white`

`--screen`

Não devem ser criados tokens globais paralelos como:

`--ling-primary`

`--ling-accent`

ou equivalentes.

A diferenciação disciplinar deve ocorrer principalmente pelos valores dos tokens e por componentes locais realmente necessários.

---

# 4. PRINCÍPIO DE HERANÇA EDITORIAL

Toda nova apostila do Plano Linguístico deve seguir:

**HERDAR → ADAPTAR → CRIAR SOMENTE O NOVO**

Isso significa:

1. herdar a Base Editorial vigente;
2. adaptar somente aquilo que o conteúdo específico exige;
3. criar componentes locais apenas quando não existir solução adequada na Base.

A regra operacional é:

**BASE PRIMEIRO.**  
**CONTEÚDO DEPOIS.**  
**COMPONENTES LOCAIS SOMENTE QUANDO NECESSÁRIOS.**

---

# 5. CAMADAS DO SISTEMA

O sistema editorial possui três níveis.

## Camada 1 — Infraestrutura editorial comum

Pertencem à Base:

— página;  
— capa;  
— margens;  
— cabeçalho;  
— rodapé;  
— tipografia;  
— hierarquia principal;  
— tabelas;  
— figure;  
— figcaption;  
— comportamento genérico de imagem;  
— comportamento genérico de SVG;  
— source-content;  
— print;  
— screen;  
— contratos de paginação.

Esses elementos não devem ser redefinidos localmente sem necessidade substantiva demonstrável.

## Camada 2 — Tema disciplinar

Pertencem ao tema linguístico:

— paleta;  
— identidade nominal;  
— primitivas linguísticas realmente recorrentes.

## Camada 3 — Componentes locais

Pertencem às apostilas específicas:

— corpus;  
— definições de trabalho;  
— exemplos;  
— exercícios;  
— respostas-modelo;  
— critérios de correção;  
— faixas de aceitação;  
— limites interpretativos;  
— SVGs conceituais particulares;  
— ajustes específicos de determinados visuais.

Esses componentes não devem ser promovidos à Base apenas porque apareceram em um tópico.

---

# 6. COMPONENTES GLOBAIS E COMPONENTES LOCAIS

A Base fornece apenas componentes suficientemente gerais e recorrentes.

Exemplos de infraestrutura global:

`.page`

`.page-content`

`.page-header`

`.page-footer`

`.page--cover`

`.part-opening`

`.section-opening`

`.item-title`

`.minor-title`

`.gabarito-subtitle`

`.visual`

`.keep-with-next`

`.atomic-group`

`data-keep-count`

`data-split="children"`

Primitivas linguísticas globais podem incluir, quando já previstas pela Base:

`.ipa`

`[lang="x-ipa"]`

`.symbol`

Componentes como:

`.corpus-text`

`.definition-working`

`.resolved-example`

`.exercise`

`.answer`

`.answer-model`

`.answer-criteria`

`.acceptance-range`

`.answer-limits`

permanecem locais enquanto sua recorrência global não justificar promoção formal à Base.

---

# 7. REGRA DE PROMOÇÃO À BASE

Um componente local **NÃO** se torna componente canônico apenas porque funcionou bem numa apostila.

A promoção para a Base exige demonstração de que o componente:

— reaparece em diferentes tópicos;  
— possui função editorial estável;  
— não depende de conteúdo específico;  
— evita duplicação real;  
— pode ser generalizado sem impor estrutura indevida a outros materiais.

Princípio:

**RECORRÊNCIA PRIMEIRO.**  
**CANONICIDADE DEPOIS.**

---

# 8. HIERARQUIA DE AUTORIDADE

Quando houver conflito entre fontes, utilizar a seguinte ordem.

## Para conteúdo pedagógico

1. conteúdo congelado do tópico;
2. arquitetura específica do tópico;
3. Regras Gerais do Texto Teórico ou Texto Prático;
4. implementações anteriores.

## Para forma editorial

1. Base Editorial canônica;
2. Registro Canônico do Sistema Editorial;
3. Regras Gerais HTML/CSS;
4. Arquitetura Técnica;
5. CSS/HTML de versões antigas.

## Para paginação

1. versão canônica do `Paginador_Plano`;
2. contratos documentados de paginação;
3. soluções locais apenas quando absolutamente necessárias.

Implementações antigas não possuem autoridade sobre versões canônicas posteriores.

---

# 9. REGRA DE NÃO SOBRESCRITA

CSS local de uma apostila não deve redefinir, sem justificativa substantiva:

`.page`

`.page-content`

`.page-header`

`.page-footer`

`.page--cover`

`.cover-top`

`.cover-bottom`

`.part-opening`

`.section-opening`

`body`

`.document`

tokens globais

ou a gramática tabular da Base.

Quando uma sobrescrita global parecer necessária:

1. identificar o problema;
2. determinar se ele pertence ao tópico ou à Base;
3. registrar a justificativa;
4. corrigir na camada correta.

Não utilizar CSS local para corrigir silenciosamente problema global.

---

# 10. REGRA DOS VISUAIS

A Base define somente o regime externo comum dos recursos visuais.

Ela pode controlar:

— largura máxima;  
— proporção;  
— espaçamento;  
— indivisibilidade;  
— legenda;  
— integração à página.

A Base **NÃO** deve controlar internamente SVGs específicos por meio de seletores globais como:

`svg rect`

`svg line`

`svg path`

`svg text`

ou equivalentes.

Cada SVG conceitual deve utilizar classes locais próprias.

Imagens raster devem preservar proporção e não devem receber automaticamente:

— crop;  
— altura fixa;  
— `object-fit: cover`;  
— redimensionamento silencioso pelo paginador.

---

# 11. REGRA DE PAGINAÇÃO

O paginador comum é responsável por:

— criar páginas internas;  
— distribuir conteúdo;  
— controlar overflow;  
— respeitar agrupamentos;  
— fragmentar tabelas quando seguro;  
— respeitar visuais indivisíveis;  
— emitir diagnósticos técnicos;  
— informar readiness.

Os principais contratos são:

`.keep-with-next`

`data-keep-count="N"`

`.atomic-group`

`data-split="children"`

O paginador **NÃO** decide:

— tipografia;  
— cor;  
— importância pedagógica;  
— estilo visual;  
— tamanho editorial ideal de um recurso.

Essas decisões pertencem ao HTML/CSS.

---

# 12. REGRAS DE VERSIONAMENTO

O sistema utiliza versionamento independente por camada.

## Alteração apenas de conteúdo de um tópico

Não altera a Base.

Não altera o Paginador.

A versão ou estado do próprio tópico pode mudar.

## Alteração apenas de CSS local

Não altera a Base.

Não altera o Paginador.

## Novo componente específico de um tópico

Permanece local.

Não altera a Base.

## Componente local promovido a recurso global

Nova versão da Base pode ser necessária.

## Alteração estrutural global de HTML/CSS

Exige nova versão da Base.

Exemplo:

V2.1 → V2.2

ou, em mudança incompatível ampla:

V2.x → V3.0.

## Correção exclusivamente no algoritmo de paginação

Altera somente a versão do Paginador.

Exemplo:

V1.0 → V1.1.

## Mudança incompatível dos contratos de paginação

Pode exigir:

— nova versão principal do Paginador;  
— revisão da Base caso os contratos HTML também sejam afetados.

---

# 13. ESTADO DO TÓPICO 1.1

Tópico:

**1.1 — Linguagem e Comunicação**

Estado:

**CONGELADO — VERSÃO DEFINITIVA 2026**

Situação:

Texto Teórico:  
**CONGELADO**

Texto Prático:  
**CONGELADO**

Arquitetura pedagógica:  
**CONGELADA**

Apostila editorial:  
**CONGELADA**

Base utilizada:  
**Base Editorial V2.1**

Paginador vigente:  
**Paginador_Plano_V1.1**

A apostila foi validada em aplicação real contendo:

— três Partes de Texto Teórico;  
— Exemplos Resolvidos;  
— treze exercícios;  
— Gabarito Comentado;  
— corpus literário;  
— tabelas;  
— quatro imagens raster definitivas;  
— um SVG conceitual inline;  
— paginação integral em A4.

O Tópico 1.1 não deve ser reaberto para:

— polimento estilístico;  
— alterações cosméticas;  
— reorganização editorial arbitrária;  
— reformulações conceituais não necessárias.

Reabertura somente diante de:

**ERRO SUBSTANTIVO DEMONSTRÁVEL.**

---

# 14. REGRA DE CONGELAMENTO

Um material congelado permanece estável.

Congelamento significa:

— redação aprovada;  
— estrutura aprovada;  
— visuais aprovados;  
— paginação aprovada;  
— versão editorial preservada.

Congelamento **NÃO** significa impossibilidade absoluta de correção.

Uma versão congelada pode ser reaberta quando houver:

— erro conceitual;  
— erro factual;  
— problema técnico real;  
— perda de conteúdo;  
— incompatibilidade estrutural futura;  
— defeito editorial substantivo.

Mudanças meramente preferenciais não justificam reabertura.

---

# 15. FONTE DE VERDADE

Enquanto o Plano Linguístico permanecer operando no ambiente atual do projeto, os arquivos canônicos ali mantidos constituem a fonte operacional de verdade.

Não há obrigação atual de:

— espelhar o projeto em GitHub;  
— utilizar Codex;  
— criar infraestrutura externa;  
— manter duas fontes paralelas.

Caso um repositório Git venha a ser criado futuramente, deverá existir uma migração formal da fonte de verdade.

Não manter simultaneamente duas versões independentes consideradas “oficiais”.

---

# 16. DOCUMENTOS NORMATIVOS ASSOCIADOS

Este registro deve ser lido em conjunto com os documentos normativos já existentes do Plano Linguístico, especialmente:

— Regras Gerais para Construção do Texto Teórico Linguístico — V2.2;  
— Regras Gerais para Construção do Texto Prático Linguístico — V2.2;  
— Estruturas Canônicas do Plano Linguístico;  
— Arquitetura e Taxonomia Canônica do Sistema Editorial;  
— Regras Gerais HTML/CSS;  
— Arquitetura Técnica HTML/CSS;  
— arquitetura específica de cada tópico.

Este registro não repete esses documentos.

Ele apenas informa quais partes do sistema estão vigentes.

---

# 17. PRINCÍPIOS CANÔNICOS RESUMIDOS

O sistema editorial linguístico adota como princípios permanentes:

**HERDAR → ADAPTAR → CRIAR SOMENTE O NOVO**

**FORMA COMUM; CONTEÚDO DISCIPLINAR**

**ARQUITETURA CURRICULAR ≠ ARQUITETURA EDITORIAL**

**FUNÇÃO → REPRESENTAÇÃO → IMPLEMENTAÇÃO**

**CONSTRUIR → VALIDAR → PROMOVER SOMENTE O QUE MERECER CANONICIDADE**

**RECORRÊNCIA PRIMEIRO; CANONICIDADE DEPOIS**

**PROBLEMA LOCAL → CORREÇÃO LOCAL**

**PROBLEMA GLOBAL → CORREÇÃO GLOBAL**

**SE NÃO HOUVER PROBLEMA → NÃO MEXER**

---

# 18. ESTADO CANÔNICO CONSOLIDADO — 2026

Na data deste registro:

Base Editorial Linguística:  
**V2.1 — CANÔNICA**

Paginador comum:  
**Paginador_Plano_V1.1 — CANÔNICO**

Tema:  
**theme--ling — CANÔNICO**

Tópico 1.1 — Linguagem e Comunicação:  
**CONGELADO**

Próximo tópico curricular:  
**1.2 — Signo Linguístico**

GitHub específico do Plano Linguístico:  
**NÃO NECESSÁRIO NO ESTADO ATUAL**

Sistema operacional:  
**AMBIENTE DO PROJETO ATUAL**

---

# 19. PRINCÍPIO FINAL

Este documento existe para impedir que decisões já estabilizadas precisem ser reconstruídas a cada nova apostila.

O objetivo do sistema não é acumular regras.

É permitir que decisões estáveis desapareçam do processo de criação cotidiano porque já foram resolvidas.

Portanto:

**O QUE É CANÔNICO**  
→ **É HERDADO.**

**O QUE É LOCAL**  
→ **PERMANECE LOCAL.**

**O QUE É NOVO**  
→ **É TESTADO.**

**O QUE SE REPETE**  
→ **PODE SER CANDIDATO À PROMOÇÃO.**

**O QUE NÃO APRESENTA PROBLEMA**  
→ **NÃO É ALTERADO.**

**O QUE ESTÁ CONGELADO**  
→ **SÓ É REABERTO DIANTE DE PROBLEMA SUBSTANTIVO DEMONSTRÁVEL.**
