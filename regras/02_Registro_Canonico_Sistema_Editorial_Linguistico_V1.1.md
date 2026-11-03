# REGISTRO CANÔNICO DO SISTEMA EDITORIAL LINGUÍSTICO
## Plano de Estudo Linguístico e da Língua Portuguesa
### Versão 1.1 — Definitiva · 02/11/2026

> **ESTADO DESTA VERSÃO: DEFINITIVA E CONGELADA QUANTO AO CONTEÚDO.**  
> Esta V1.1 consolida o registro atual do sistema editorial. Seu congelamento não aprova automaticamente documentos técnicos ainda pendentes nem reabre apostilas anteriores. A incorporação ao GitHub depende de autorização específica e deve preservar a V1.0 como registro histórico; a publicação é verificável pelo histórico do repositório.

**Natureza:** registro de estado, índice de autoridade e contrato de canonicidade.  
**Documento de origem:** Registro Canônico V1.0 (2026).  
**Âmbito:** dois repositórios do Plano Linguístico, documentos normativos, infraestrutura editorial e estado dos tópicos produzidos.  
**Recorte da verificação:** arquivos e documentos localizados na branch `main` dos repositórios consultados em 02/11/2026.

---

# 0. FUNÇÃO, ESCOPO E LIMITES

Este documento registra **o que está vigente, em que camada, com qual alcance e em que condição de maturidade**, para que decisões já estabilizadas não sejam rediscutidas em cada apostila.

Suas três funções, herdadas da V1.0, são:

1. **Registro de estado:** localizar as versões e os produtos operacionais efetivamente existentes.
2. **Índice de autoridade:** identificar que documento ou artefato responde a cada tipo de decisão.
3. **Contrato de canonicidade:** preservar critérios de herança, promoção, versionamento, congelamento e reabertura.

O Registro **não substitui** as Estruturas Canônicas, as Regras Gerais dos Textos Teórico e Prático, a Arquitetura e Taxonomia Canônica, as Regras HTML/CSS, a Arquitetura Técnica, o Contrato de Produção, o conteúdo mestre de cada tópico nem o Mapa de Uso do Corpus. Tampouco exerce autoridade para declarar tecnicamente validado aquilo que ainda não passou por auditoria própria.

**Regra de interpretação:** uma *existência confirmada no repositório* não equivale, por si só, à *validação completa de todos os contratos* ou à *aprovação de alterações futuras*.

---

# 1. PANORAMA OPERACIONAL CONSOLIDADO

| Elemento | Versão / identificação | Estado reconhecido | Fonte primária |
|---|---|---|---|
| Base Editorial Linguística | `Plano_Linguistico_Base_V2.1` | **Canônica**, conforme Registro V1.0 e `STATUS_Plano_Linguistico.md` | Repositório principal, `ferramentas/base/` |
| Paginador comum | `Paginador_Plano_V1.1.js` | **Canônico**, conforme os mesmos registros | Repositório principal, `ferramentas/base/` |
| Tema editorial | `theme--ling` | **Canônico**, conforme Registro V1.0 | Base Editorial V2.1 |
| Estruturas Canônicas | V2.3 | **Definitivas e congeladas** | `regras/` |
| Regras Gerais do Texto Teórico | V2.3 | **Definitivas e congeladas** | `regras/` |
| Regras Gerais do Texto Prático | V2.3 | **Definitivas e congeladas** | `regras/` |
| Arquitetura e Taxonomia Canônica do Sistema Editorial | V1.0 | **Congelada** | `regras/` |
| Regras Gerais HTML/CSS | V3.0 | **Congeladas e vigentes** | `regras/` |
| Arquitetura Técnica HTML/CSS | V1.0 | **Documento candidato**, com contratos implementados a identificar por auditoria | `regras/` |
| Contrato de Produção de Apostilas | V1.0 | **Vigente**, conforme status do projeto | `regras/` |
| Registro Canônico do Sistema Editorial | V1.1 | **Definitivo e congelado quanto ao conteúdo** | Este documento; incorporação em `regras/` mediante autorização |
| Mapa de Uso do Corpus Linguístico | V1.1 | **Operacional e revisável; não congelado** | Repositório privado de corpus |
| Apostila do Tópico 1.1 | Edição definitiva de 2026 | **Congelada**, conforme status do projeto | `macroestrutura-1/topico-1-1/` |
| Apostila do Tópico 1.2 | Edição definitiva de 2026 | **Congelada no status do projeto**, com uma observação documental a conferir | `macroestrutura-1/topico-1-2/` |
| Tópico 1.3 — Signo Linguístico | Sem produto na árvore verificada | **Não iniciado / arquitetura pendente**, conforme status do projeto | `STATUS_Plano_Linguistico.md` |

**Precisão:** a tabela distingue *estado declarado pelos documentos aprovados* de *constatação de arquivo existente*. O estado da Arquitetura Técnica e a observação relativa aos visuais do Tópico 1.2 não são resolvidos por inferência neste Registro.

---

# 2. BASE EDITORIAL CANÔNICA

## 2.1. Identificação

**Base:** `Plano_Linguistico_Base_V2.1`  
**Estado:** canônica, segundo a V1.0 e o status atual do projeto.  
**Arquivos localizados:**

- `ferramentas/base/Plano_Linguistico_Base_V2.1.html`
- `ferramentas/base/Plano_Linguistico_Base_V2.1.css`
- `ferramentas/base/Plano_Linguistico_Base_V2.1.pdf`

A Base fornece a infraestrutura editorial comum: A4, geometria e margens, tipografia, identidade de página, capa, cabeçalho, rodapé, hierarquia, fluxo textual, estrutura genérica de tabelas, apresentação externa de figuras, visuais e fac-símiles, compatibilidade tela/impressão e contratos estruturais de paginação.

## 2.2. Alcance e precedente

A V1.0 registra validação da Base por corpus demonstrativo multimodal, SVG inline, imagens raster, fac-símile e aplicação numa apostila real, especialmente o Tópico 1.1. A existência de produtos HTML/CSS/PDF dos Tópicos 1.1 e 1.2 confirma seu emprego no sistema atual.

Isso **não equivale a declarar que cada previsão da Arquitetura Técnica V1.0 foi implementada e auditada**. A correspondência entre especificação, Base e testes continua sujeita à auditoria técnica específica.

**A Base implementa contratos e soluções editoriais; não governa currículo, conceitos, interpretação linguística ou critérios de exercício.**

---

# 3. PAGINADOR CANÔNICO

**Arquivo:** `ferramentas/base/Paginador_Plano_V1.1.js`  
**Estado:** canônico.

A V1.0 registra que a passagem do Paginador V1.0 para o V1.1 corrigiu um problema localizado na distribuição de contêineres com `data-split="children"`, que em certas circunstâncias gerava páginas adicionais desnecessárias quando o primeiro elemento precisava ser deslocado.

A correção não constituiu revisão automática da Base Editorial. São camadas versionadas independentemente.

O paginador é responsável por distribuir o conteúdo semântico em páginas, respeitar agrupamentos e contratos de divisão, controlar overflow e produzir diagnósticos e sinais de prontidão. **Não** define tipografia, cores, importância didática, redação, dimensões editoriais ideais ou interpretação do corpus.

Contratos gerais já mencionados no registro anterior:

- `.keep-with-next`
- `data-keep-count="N"`
- `.atomic-group`
- `data-split="children"`

Detalhes de comportamento, valores e extensões dependem da Arquitetura Técnica, da implementação e de testes. Uma mudança exclusivamente no algoritmo do paginador não obriga a mudar a versão da Base, exceto se também alterar os contratos de integração.

---

# 4. TEMA E IDENTIDADE EDITORIAL

**Tema:** `theme--ling` — canônico conforme a V1.0.

O Plano Linguístico compartilha a gramática editorial geral desenvolvida para a coleção, mas mantém identidade visual própria e adaptações justificadas pelos fenômenos da linguagem. **Herança funcional não significa imitação automática da Matemática.**

A diferenciação disciplinar deve utilizar os tokens genéricos previstos no contrato da Base, sem criar uma segunda nomenclatura global redundante:

`--primary`, `--secondary`, `--accent`, `--support`, `--soft`, `--border`, `--text`, `--muted`, `--paper`, `--white`, `--screen`.

Evitar tokens globais concorrentes como `--ling-primary` ou `--ling-accent` quando o contrato comum já for suficiente. Componentes específicos podem possuir variáveis locais justificadas e delimitadas.

---

# 5. HERANÇA, CAMADAS E COMPONENTES

> **HERDAR → ADAPTAR → CRIAR SOMENTE O NOVO.**

Cada nova apostila herda a Base vigente, adapta somente o que o fenômeno linguístico exige e cria soluções locais apenas para necessidades ainda não atendidas. «Base primeiro» é uma regra **de reutilização da infraestrutura**, não de precedência sobre as normas ou sobre o conteúdo congelado.

| Camada | Responsabilidade | Limite |
|---|---|---|
| Infraestrutura comum | Página, capa, cabeçalho, rodapé, tabelas, `figure`, `figcaption`, imagens/SVG, impressão e contratos de paginação. | Não redefinir sem problema global comprovado. |
| Tema `theme--ling` | Identidade e escolhas disciplinares recorrentes. | Não criar uma segunda Base. |
| Soluções locais | Apresentação de corpus, exemplos, exercícios, respostas, diagramas e ajustes particulares. | Não promover por simples ocorrência num tópico. |

**Corpus, exemplo e resposta são conteúdos/objetos; os componentes que os apresentam são instrumentos editoriais.**

Nomes de infraestrutura já registrados na V1.0: `.page`, `.page-content`, `.page-header`, `.page-footer`, `.page--cover`, `.part-opening`, `.section-opening`, `.item-title`, `.minor-title`, `.gabarito-subtitle`, `.visual`, `.keep-with-next`, `.atomic-group`, `data-keep-count` e `data-split="children"`. Entre as primitivas linguísticas previstas estão `.ipa`, `[lang="x-ipa"]` e `.symbol`.

Classes como `.corpus-text`, `.definition-working`, `.resolved-example`, `.exercise`, `.answer`, `.answer-model`, `.answer-criteria`, `.acceptance-range` e `.answer-limits` **permanecem locais** até promoção formal. Os nomes exigem conferência na Base quando usados: o Registro não é catálogo de seletores.

---

# 6. REGRA DE PROMOÇÃO À BASE

Uma solução local não é automaticamente canônica por funcionar bem em uma única apostila. Sua promoção requer, em conjunto:

1. recorrência demonstrada em tópicos distintos;
2. função editorial reconhecível e estável;
3. independência suficiente de um conteúdo particular;
4. redução efetiva de duplicação ou de inconsistência;
5. generalização sem impor formato inadequado a outros fenômenos;
6. compatibilidade com os contratos superiores e aprovação da alteração global.

> **RECORRÊNCIA PRIMEIRO; CANONICIDADE DEPOIS.**

Conservar a distinção da Arquitetura e Taxonomia V1.0 entre **alcance** (A: canônico universal; B: canônico opcional; C: específico; D: microajuste local) e **maturidade** (consolidado, provisoriamente canônico, local/precedente, depreciado). Ser reutilizável não torna uma solução obrigatória; ser visualmente bem-sucedida não prova sua generalidade.

---

# 7. AUTORIDADE E PRECEDÊNCIA — ESCLARECIMENTO DA V1.0

A V1.0 poderia ser lida como se a Base estivesse acima das Regras HTML/CSS. A V1.1 esclarece a distinção: a **Base canônica é a implementação que deve ser herdada**, mas sua conformidade é governada pelas normas e contratos superiores. A Arquitetura e Taxonomia V1.0 orienta essa interpretação.

| Natureza da decisão | Autoridade principal |
|---|---|
| Currículo, limites e contratos de aprendizagem | Estruturas Canônicas e arquitetura aprovada do Tópico |
| Conteúdo conceitual | Texto Teórico congelado, sob suas Regras V2.3 |
| Atividades, comandos e gabaritos | Texto Prático congelado, sob suas Regras V2.3 |
| Alcance, maturidade e promoção editorial | Arquitetura e Taxonomia Canônica V1.0 |
| Obrigações e limites de composição editorial | Regras HTML/CSS V3.0 |
| Implementação e paginação | Arquitetura Técnica **na parte validada**, Base V2.1 e Paginador V1.1 |
| Proveniência e escolha de fontes | Normas de evidência e Mapa do Corpus V1.1 como índice funcional |
| Solução específica de uma apostila | HTML/CSS/recursos locais, dentro dos contratos vigentes |

**Precedência não é lista cega.** Todo conflito deve ser classificado pela natureza da decisão: deficiência conceitual não se corrige clandestinamente no CSS; erro de paginação não se resolve reescrevendo o Texto Prático; divergência documental não se decide por estética. A Base não autoriza alterar as normas que a governam, e uma regra geral nova não reabre automaticamente uma apostila congelada.

---

# 8. NÃO SOBRESCRITA E CONTROLE DE MUDANÇA LOCAL

CSS local não deve substituir sem razão demonstrável contratos comuns como `.page`, `.page-content`, `.page-header`, `.page-footer`, `.page--cover`, `.cover-top`, `.cover-bottom`, `.part-opening`, `.section-opening`, `body`, `.document`, tokens globais ou regras genéricas de tabela.

Quando uma alteração parecer necessária: **demonstrar o problema → localizar a camada responsável → aprovar a menor correção suficiente → verificar os efeitos**. Problema local pede solução local; defeito da Base deve ser tratado na Base, não ocultado numa apostila.

---

# 9. RECURSOS, IMAGENS E FAC-SÍMILES

Preservam-se as categorias das Regras V2.3/V3.0: **Visual para HTML** (representação construída), **Imagem para HTML** (imagem preexistente incorporada), **Fac-símile para HTML** (reprodução fiel da materialidade pertinente) e **organização editorial** (composição que não constitui automaticamente um recurso autônomo).

**Função representacional ≠ regime de representação ≠ categoria do recurso ≠ implementação técnica.** Um Visual pode ser SVG, raster ou HTML/CSS; um texto que descreve sons e gestos não é, por isso, materialmente audiovisual.

A Base governa a apresentação **externa** dos recursos, não o interior de SVGs específicos; evitar seletores globais como `svg rect` ou `svg path` para modificar diagramas locais. Imagens e fac-símiles devem preservar proporção, integridade e legibilidade; não aplicar `crop`, altura fixa ou `object-fit: cover` indiscriminadamente.

**Cenas construídas, inclusive por IA, não são evidência empírica pelo realismo de sua aparência.**

---

# 10. PAGINAÇÃO E VALIDAÇÃO DO PDF

O Paginador distribui a fonte semântica em páginas, respeita agrupamentos, continuidade e contratos de divisão e emite diagnósticos. **Não** corrige automaticamente conteúdo, intenção pedagógica ou estrutura interna de um recurso.

A validação editorial verifica no **PDF efetivo**: A4, área útil, overflow, continuidade, legibilidade, integridade de tabelas, imagens e fac-símiles, headings/bookmarks e assets necessários à reprodução local. O HTML isolado não comprova a integridade do produto final.

Defeitos conceituais identificados durante a materialização exigem retorno autorizado à etapa do conteúdo, não reescrita silenciosa para caber na página.

---

# 11. CORPUS E FUNDAMENTAÇÃO COMO INFRAESTRUTURA DE CONSULTA

## 11.1. Estado atual

Existe um **repositório privado específico do corpus linguístico**, distinto do repositório principal das apostilas e regras:

- `AlanzitoGameplays/plano_estudo_linguistico_corpus`
- Mapa vigente para consulta: `Mapa_de_Uso_do_Corpus_Linguistico_V1.1.md` (**operacional, revisável e não congelado**).

O mapa reúne literatura e documentação histórica, referências teóricas e gramaticais, material de provas e objetos multimodais, além do mapeamento reverso por Tópico. A existência de um arquivo, seu caminho no GitHub ou seu ponteiro Git LFS **não implica** exame integral, licença verificada ou passagem apta para citação.

## 11.2. Regra de uso

> **Necessidade curricular → fonte candidata → identificação e consulta dirigidas → verificação de conteúdo/edição → utilização → registro do uso efetivo.**

A identificação bibliográfica e o reconhecimento funcional **podem avançar durante a elaboração dos tópicos**, sem exigir a análise prévia de toda a biblioteca. Contudo, toda afirmação, passagem, dado ou adaptação efetivamente incorporada deve ser verificada no objeto adequado antes da utilização.

O mapa **orienta a escolha**, mas não substitui:

- fundamentação conceitual;
- auditoria da proveniência, edição e tradução;
- análise do texto real;
- distinção entre original, tradução, OCR, transcrição e fac-símile;
- critérios de reprodução e direitos de uso;
- julgamento didático sobre pertinência e custo curricular.

As fontes teóricas sustentam conceitos; o corpus literário/documental permite observar fenômenos em objetos concretos; provas calibram certas competências e fornecem materiais de prática. **Nenhuma dessas classes é substituto automático das demais.**

## 11.3. Relação com este Registro

Este Registro identifica o mapa e seu papel institucional. **Não reproduz o inventário de obras, não atribui IDs bibliográficos e não deve incorporar tabelas de todos os livros.** Esse conteúdo pertence ao próprio Mapa do Corpus. Mudanças em uma obra ou caminho do corpus não exigem nova versão da Base, do Paginador ou deste Registro, salvo mudança de governança do sistema.

---

# 12. REPOSITÓRIOS E FONTE OPERACIONAL DE VERDADE

## 12.1. Repositórios efetivamente existentes

| Repositório | Visibilidade | Responsabilidade principal |
|---|---|---|
| [`AlanzitoGameplays/plano_estudo_linguistico`](https://github.com/AlanzitoGameplays/plano_estudo_linguistico) | Público | Regras, infraestrutura editorial, fontes dos tópicos, HTML/CSS, imagens e PDFs finais. |
| [`AlanzitoGameplays/plano_estudo_linguistico_corpus`](https://github.com/AlanzitoGameplays/plano_estudo_linguistico_corpus) | Privado | Corpus literário, documental, comparativo e teórico; mapa funcional de consulta; arquivos binários rastreados por Git LFS quando aplicável. |

A afirmação antiga «GitHub específico — não necessário no estado atual» foi superada pela **existência e utilização efetiva** desses dois repositórios.

## 12.2. Fonte de verdade e cópias de trabalho

Para **arquivos efetivamente versionados**, a referência operacional de consulta é a versão aprovada na branch principal correspondente. Arquivos locais ou cópias do Drive podem servir como materiais de trabalho, origem de importação ou consulta; não devem ser proclamados uma segunda versão oficial independente e incompatível.

Esta formulação descreve a prática de versionamento observada. **Não afirma que houve migração formal completa e auditada de todos os materiais antigos do Drive** nem que todo arquivo do projeto esteja nos repositórios.

Apostilas congeladas são representadas pelos respectivos artefatos aprovados; o Git não transforma automaticamente qualquer alteração feita na branch principal em aprovação conceitual ou editorial.

## 12.3. Regra de autorização para escrita

**Consultas e auditorias são distintas de alterações de estado.** Por decisão expressa do responsável pelo projeto, nenhum arquivo deve ser criado, substituído, movido ou excluído **nos repositórios**, e nenhum commit, push, merge ou mudança equivalente deve ser executado, **sem autorização prévia específica**. Rascunhos locais destinados à análise podem ser preparados sem publicação; a aprovação da redação precede sua incorporação ao GitHub.

Essa regra protege a separação entre *proposta*, *revisão aprovada* e *versão oficialmente incorporada*.

---

# 13. CONTRATO DE PRODUÇÃO E TRANSIÇÃO ENTRE ETAPAS

Permanece vigente o `01_Contrato_de_Producao_de_Apostilas_Linguisticas_V1.0.md`, cujas etapas centrais são:

**Arquitetura congelada → Texto Teórico auditado/congelado → Texto Prático auditado/congelado → Base e recursos locais → paginação → PDF → auditorias finais → congelamento da apostila.**

A sequência não permite usar etapas posteriores para decidir silenciosamente o que deveria ter sido resolvido nas anteriores. Especificações de *handoff*, capacidades e auditoria representacional pertencem às Regras V2.3 e ao próprio Contrato, não a este índice.

---

# 14. VERSIONAMENTO INDEPENDENTE POR CAMADA

| Alteração comprovadamente necessária | Documento/artefato a versionar | O que não deve mudar automaticamente |
|---|---|---|
| Revisão de conceito, trecho ou exercício de uma apostila | Conteúdo da unidade e respectivos produtos derivados, mediante reabertura quando congelados | Base, Paginador e regras gerais |
| Ajuste específico de CSS/visual de um tópico | Componente ou CSS local, com auditoria do PDF | Base, Paginador e tema global |
| Componente local recorrente promovido formalmente | Base ou catálogo aplicável, conforme o contrato afetado | Demais documentos não afetados |
| Mudança estrutural global de HTML/CSS | Nova versão da Base, após validação e aprovação | Paginador se seu contrato permanecer estável |
| Correção isolada do algoritmo de paginação | Nova versão do Paginador | Base, quando a integração não mudar |
| Alteração incompatível do contrato de paginação | Paginador e, se afetada, Base/Arquitetura Técnica | Conteúdo das apostilas sem necessidade demonstrada |
| Atualização bibliográfica ou de caminho do corpus | Mapa de Uso do Corpus | Regras teóricas, Base e Paginador |
| Atualização do inventário de estados e versões | Registro Canônico ou `STATUS_Plano_Linguistico.md` | Conteúdo e implementação quando não há mudança substantiva |

**Princípio:** documentação de estado não autoriza reescrever conteúdos congelados; mudanças locais não exigem “efeito dominó” no sistema. Não criar versões novas apenas porque há possibilidade de melhora estilística.

---

# 15. ESTADO DOS TÓPICOS 1.1, 1.2 E 1.3

## 15.1. Tópico 1.1 — Linguagem e Comunicação

**Estado oficial registrado:** arquitetura, Texto Teórico, Texto Prático, editoração e apostila **congelados**; versão definitiva de 2026. Emprega Base V2.1 e Paginador V1.1.

Arquivos encontrados em `macroestrutura-1/topico-1-1/` incluem Texto Teórico e Prático em `fontes/`, HTML, CSS, PDF e imagens. A V1.0 também documenta validações editoriais e representacionais da unidade.

**Regra:** não reabrir por preferência estilística, cosmética ou reorganização arbitrária. Somente defeito substantivo demonstrável autoriza a revisão formal.

## 15.2. Tópico 1.2 — Linguagem Verbal, Não Verbal e Multimodal

**Estado oficial registrado:** arquitetura, Texto Teórico, Texto Prático, editoração e apostila **congelados**; versão definitiva de 2026, segundo `STATUS_Plano_Linguistico.md`. Os arquivos HTML, CSS, PDF e recursos de imagem constam de `macroestrutura-1/topico-1-2/`.

**Ressalva documental não resolvida:** o cabeçalho do Texto Prático em `fontes/Texto_Pratico_Topico_1.2_Linguagem_Verbal_Nao_Verbal_Multimodal.md` contém observação segundo a qual alguns recursos visuais permanecem sujeitos à validação material. O registro de status, por sua vez, declara a apostila congelada. **A V1.1 não escolhe arbitrariamente entre esses dois registros**: a verificação do alcance dessa observação pertence ao item específico de revisão documental do Tópico 1.2. Enquanto isso, não se declara reabertura nem uma validação material adicional que não tenha sido comprovada.

## 15.3. Tópico 1.3 — Signo Linguístico

**Estado no status atual:** não iniciado; arquitetura pendente; sem Texto Teórico, Texto Prático, editoração ou apostila identificados no repositório. O próximo trabalho curricular previsto é a **arquitetura do Tópico 1.3**, respeitadas as Estruturas Canônicas.

A denominação usada aqui segue o arquivo `STATUS_Plano_Linguistico.md`. O Mapa do Corpus V1.1 conserva referência a uma designação curricular anterior mais ampla, mas não possui autoridade para ampliar automaticamente o escopo deste tópico. Qualquer diferença deverá ser tratada **na arquitetura curricular apropriada**, não por alteração casual deste Registro.

---

# 16. CONGELAMENTO, REABERTURA E AUDITORIA

Congelamento encerra o refinamento opcional; **não declara perfeição ou proíbe correção necessária**. Só cabe reabertura diante de erro factual/conceitual, contradição relevante, problema documental, quebra de conteúdo, falha técnica/representacional substantiva ou incompatibilidade comprovada com o contrato da unidade.

Não bastam preferências estilísticas, cosmética, descoberta de nova obra, disponibilidade de tecnologia ou mera possibilidade de melhoria. O problema deve ser localizado em sua camada, corrigido na extensão mínima suficiente e ter suas consequências auditadas. Atualização do Registro não reabre, por si, as apostilas.

---

# 17. ÍNDICE DOS DOCUMENTOS DE AUTORIDADE

Os nomes abaixo correspondem a arquivos encontrados no repositório principal em `regras/`, salvo indicação em contrário.

| Competência | Documento | Estado no recorte verificado |
|---|---|---|
| Estrutura de Tópicos, Blocos e Partes | `Estruturas_Canonicas_Plano_Linguistico_V2.3_Definitiva.md` | Congelado |
| Construção de conceitos e Texto Teórico | `Regras_Gerais_Construcao_Texto_Teorico_Linguistico_V2.3_Definitiva.md` | Congelado |
| Exercícios, progressão e Gabarito | `Regras_Gerais_Construcao_Texto_Pratico_Linguistico_V2.3_Definitiva.md` | Congelado |
| Arquitetura e taxonomia do sistema | `01_Arquitetura_e_Taxonomia_Canonica_Sistema_Editorial_Plano_Linguistico_V1.0.md` | Congelado |
| Conformidade editorial HTML/CSS | `02_Regras_Gerais_HTML_CSS_Plano_Linguistico_V3.0.md` | Congelado |
| Contratos técnicos e implementação | `03_Arquitetura_Tecnica_HTML_CSS_Plano_Linguistico_V1.0.md` | Candidato; auditoria de correspondência pendente |
| Fluxo de produção | `01_Contrato_de_Producao_de_Apostilas_Linguisticas_V1.0.md` | Vigente |
| Estado canônico editorial | `00_Registro_Canonico_Sistema_Editorial_Linguistico_V1.1.md` | Definitivo; V1.0 preservado como histórico |
| Estado das apostilas e próxima etapa | `STATUS_Plano_Linguistico.md` (raiz) | Necessita sincronização documental específica |
| Fontes teóricas e corpus | `Mapa_de_Uso_do_Corpus_Linguistico_V1.1.md` (repositório privado) | Operacional, revisável e não congelado |

A presença de títulos V2.2 no histórico de documentos V1.0 e HTML/CSS V3.0 decorre do contexto de produção original desses arquivos; **não deve ser lida como indicação de que a V2.2 continue vigente**. O índice atual usa as versões 2.3 efetivamente localizadas e declaradas congeladas.

Nenhum documento adicional é considerado existente ou canônico apenas porque foi mencionado em uma arquitetura como artefato futuro (por exemplo, Catálogo de Componentes ou política documental independente).

---

# 18. PENDÊNCIAS DELIMITADAS — NÃO RESOLVIDAS POR ESTE REGISTRO

| Questão | Situação | Responsável pela próxima decisão |
|---|---|---|
| Atualização do `STATUS_Plano_Linguistico.md` | Registra GitHub como desnecessário e contém próximo passo incorreto no 1.3. | **Item 2** da rodada de consolidação documental. |
| Arquitetura Técnica HTML/CSS V1.0 | Documento permanece candidato, embora Base e Paginador operem. É preciso verificar contratos implementados, ainda candidatos e eventuais divergências. | **Item 3**: auditoria técnica de correspondência, não aprovação automática. |
| Observação de visuais no Texto Prático 1.2 | Diverge do congelamento afirmado pelo arquivo de status. | **Item 4**: conferência do alcance e da materialização dos recursos. |
| Fonte e direitos dos materiais do corpus | Identificação bibliográfica e verificação de passagens devem avançar por necessidade, conforme o Mapa V1.1. | Processo contínuo de consulta, não bloqueio para o Tópico 1.3. |

Essas pendências não são desculpa para abrir nova reforma de todas as regras. Cada uma tem objeto e autoridade delimitados.

---

# 19. PRINCÍPIOS CANÔNICOS RESUMIDOS

> **HERDAR → ADAPTAR → CRIAR SOMENTE O NOVO.**
>
> **ARQUITETURA CURRICULAR ≠ ARQUITETURA EDITORIAL ≠ IMPLEMENTAÇÃO.**
>
> **VERIFICAR A FONTE ANTES DE UTILIZÁ-LA COMO EVIDÊNCIA.**
>
> **RECORRÊNCIA PRIMEIRO; CANONICIDADE DEPOIS.**
>
> **CORRIGIR O PROBLEMA NA CAMADA EM QUE SURGIU.**
>
> **CONGELADO = FORA DO REFINAMENTO OPCIONAL.**
>
> **SE NÃO HOUVER PROBLEMA SUBSTANTIVO, NÃO MODIFICAR.**

---

# 20. HISTÓRICO, CONGELAMENTO E INCORPORAÇÃO

## 20.1. Alterações consolidadas em relação à V1.0

1. Atualiza o inventário documental para as Regras Teóricas e Práticas V2.3, Estruturas Canônicas V2.3 e HTML/CSS V3.0.
2. Reconhece os dois repositórios GitHub já existentes e suas funções distintas, sem alegar uma migração total do antigo acervo.
3. Incorpora o Mapa do Corpus V1.1 como instrumento de consulta **não congelado**, sem duplicar seu catálogo.
4. Preserva a Base V2.1, o Paginador V1.1, o tema `theme--ling`, os contratos de herança, o alcance dos componentes e a regra de congelamento.
5. Registra os Tópicos 1.1 e 1.2 como congelados **segundo o status vigente** e o 1.3 como não iniciado; não confunde o antigo 1.2 com Signo Linguístico.
6. Corrige a leitura da hierarquia editorial: **norma e arquitetura governam a implementação**, mesmo quando a Base aprovada deve ser herdada.
7. Diferencia aprovação editorial existente de validação técnica ainda pendente e ressalva a observação documental do Tópico 1.2.
8. Explicita que operações de escrita nos repositórios e commits dependem de autorização expressa antes da execução.

## 20.2. Congelamento e incorporação

**Congelamento do conteúdo:** a V1.1 constitui a revisão definitiva deste Registro, preservando as decisões válidas da V1.0 e corrigindo seu estado documental. Novas alterações substanciais exigem problema demonstrado e revisão explicitamente autorizada.

**Publicação e controle de versão:** o arquivo de destino é `regras/00_Registro_Canonico_Sistema_Editorial_Linguistico_V1.1.md`. Sua incorporação, commit e eventuais mudanças posteriores dependem de autorização prévia e específica do responsável pelo projeto. A V1.0 deve permanecer preservada como histórico. O congelamento deste Registro **não equivale** à atualização automática do `STATUS`, à aprovação integral da Arquitetura Técnica nem à resolução da pendência documental do Tópico 1.2.

## 20.3. Princípio final

**O QUE É CANÔNICO É HERDADO.**  
**O QUE É LOCAL PERMANECE LOCAL.**  
**O QUE É NOVO É TESTADO.**  
**O QUE SE REPETE PODE SER CANDIDATO À PROMOÇÃO.**  
**O QUE NÃO APRESENTA PROBLEMA NÃO É ALTERADO.**  
**O QUE ESTÁ CONGELADO SÓ É REABERTO POR RAZÃO SUBSTANTIVA DEMONSTRÁVEL.**

O Registro existe para tornar dispensável a reconstrução cotidiana de decisões já estabilizadas — **não para acrescentar mais uma camada de burocracia ao Plano Linguístico**.
