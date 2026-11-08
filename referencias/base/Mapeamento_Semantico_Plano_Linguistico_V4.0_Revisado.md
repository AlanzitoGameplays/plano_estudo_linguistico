# Mapeamento Semântico — Plano de Estudo Linguístico e da Língua Portuguesa V4.0

**Texto-fonte:** `Texto_Mestre_Plano_Linguistico_V4.0.md`  
**SHA-256 dos bytes da fonte:** `ba27219d85754fe4db991e3325408a0e1201ab0742ed1d85b9b25acc37de7dff`  
**Arquitetura vinculada:** `Arquitetura_Definitiva_Plano_Linguistico_V4.0_Revisada.md`  
**SHA-256 da Arquitetura:** `1ec85591490aaee8dd48c51d4f0990bba85b62e7fcc8742427840188d597b422`  
**Localização:** números `L` referem-se às linhas da fonte indicada, contadas a partir de 1; os títulos e identificadores fornecem uma segunda âncora.

> **Regra de leitura:** a fonte contém o texto integral; a Arquitetura contém os contratos gerais; este Mapeamento identifica as funções, relações e riscos das ocorrências concretas. O que não recebe instrução especial continua sujeito à **transposição integral e fiel**, nunca à omissão.

## I. Correspondência e hierarquia

### 1. Árvore da fonte e hierarquia de saída

| Unidade documental | Fonte | Destino semântico | Observação indispensável |
|---|---|---|---|
| Identidade do Plano | L1–5 | Título `h1`, subtítulo e princípio orientador | O princípio é formulação do Plano, não citação atribuída a terceiro. Não duplicar conteúdo ao compor a capa. |
| Apresentação | L9–23 | Unidade maior `h2` | A prosa é abertura autônoma, anterior à Parte I. |
| Parte I | L27–177 | Unidade maior `h2`; seções 1–5 em `h3` | A Seção 3 contém oito macroestruturas subordinadas. |
| Parte II | L181–345 | Unidade maior `h2`; seções 6–13 em `h3` | Subseções 7.1, 9.1, 9.2 e 11.1–11.3 em `h4`. |
| Parte III | L349–448 | Unidade maior `h2`; seções 14–19 em `h3` | Subseções 16.1–16.4 em `h4`. |
| Parte IV | L452–530 | Unidade maior `h2`; seções 20–25 em `h3` | **L454** é a abertura própria da Parte, antes de §20. |
| Conclusão | L534–542 | Unidade maior `h2` | Fecho argumentativo, sem resumo editorial substitutivo. |

O Markdown emprega `#` tanto para o título do documento quanto para as Partes; essa igualdade de marcação **não** é equivalência hierárquica. Os oito títulos `Macroestrutura N — ...` são `h4` **dentro da Seção 3**, assim como as dez subseções numeradas pertencem às seções correspondentes. Os identificadores de tópico nas tabelas não devem virar headings adicionais.

Para destinos e auditoria de origem, utilizar âncoras estáveis derivadas das unidades reais, como `plv4-s06`, `plv4-m01`, `plv4-tab-m01` e `plv4-t1-3`. Esses nomes são uma **convenção de identificação**, não novos rótulos a imprimir na página. Em páginas geradas, não reproduzir `id` duplicado em clones ou fragmentações.

### 2. Matriz funcional das 25 seções

A matriz identifica **o trabalho local de cada seção**. Os componentes gerais, a capa, as políticas de tabelas e a paginação são definidos apenas pela Arquitetura.

| Seção | Linhas | Função concreta / dependência semântica |
|---|---:|---|
| **1** | 29–38 | Define linguagem e língua, distingue descrição/prescrição e apresenta forma–sentido–uso como perguntas complementares, não etapas fixas. |
| **2** | 39–50 | Enuncia a ordem orientadora do currículo; a sequência com setas não equivale a cronograma. |
| **3** | 51–156 | Contém oito módulos curriculares: título, pergunta central, tabela e comentário posterior de cada macroestrutura. |
| **4** | 157–168 | Explica retomadas com aprofundamento; preservar diferenças de escala entre referenciação, multimodalidade e implícitos. |
| **5** | 169–177 | Situa ENEM/Fatec como calibração, sem fundir formação linguística com Literatura e Redação; escrita permanece uma capacidade própria. |
| **6** | 183–198 | Investiga ambiguidade referencial antes da classificação; o exemplo não possui referente determinado pela frase isolada. |
| **7** | 199–230 | Explica rigor progressivo; §7.1 compara duas pontuações e distingue forma, sentido e uso. |
| **8** | 231–246 | Diferencia Tópico, Blocos opcionais e Partes; três contratos de entrada, saída e fronteira. |
| **9** | 247–272 | Justifica a prosa teórica e distingue exemplo autoral, corpus e contraexemplo; §§9.1–9.2 possuem funções próprias. |
| **10** | 273–282 | Apresenta a passagem da teoria à prática por capacidades e evidências de domínio. |
| **11** | 283–321 | Define núcleo do Texto Prático; §§11.1–11.3 diferenciam Exemplos Resolvidos, Exercícios e Gabarito. |
| **12** | 322–331 | Retoma `ela` para distinguir falha da questão, erro do estudante e insuficiência da evidência. |
| **13** | 332–345 | Seis capacidades de domínio; lista ordenada não é nota nem escala universal. |
| **14** | 351–368 | Diferencia três classes de fontes, suas funções e cautelas na tabela analítica. |
| **15** | 369–380 | Aborda literatura e tradução como possibilidades de análise; nomes de autores não são excertos documentados. |
| **16** | 381–421 | Formula quatro perguntas de representação; §§16.1–16.4 discutem esquema, imagem, fac-símile e transposição, **sem exigir assets novos**. |
| **17** | 422–431 | Discute economia representacional; não transformar sua crítica ao excesso de recursos em ilustração redundante. |
| **18** | 432–441 | Discute perspectivas históricas e filosóficas sem estabelecer uma equivalência artificial entre tradições. |
| **19** | 442–448 | Distingue dado, construção didática, interpretação e responsabilidade documental. |
| **20** | 456–471 | Orienta o uso das apostilas pelo estudante; os marcadores temporais não formam calendário obrigatório. |
| **21** | 472–485 | Explica a cadeia de produção da apostila; sua sequência com setas não é a progressão curricular do §2. |
| **22** | 486–495 | Justifica identidade compartilhada, adaptação local e limites de paginação. |
| **23** | 496–513 | Apresenta cinco dimensões da auditoria em tabela; manter perguntas e exemplos ligados à respectiva dimensão. |
| **24** | 514–521 | Distingue competências de documentos especializados; não inserir catálogo externo de versões ou links. |
| **25** | 522–530 | Estabelece que alterações da fonte exigem confrontar os instrumentos dependentes, não adaptar a redação ao layout. |

A Apresentação e a Conclusão possuem tratamento de prosa autônomo. Nenhuma frase dos títulos ou do corpo poderá ser substituída pela síntese funcional desta tabela.

## II. Dez tabelas e relações curriculares

### 3. Inventário das tabelas concretas

| ID de fonte | Linhas | Pertencimento | Dados | Vínculo a preservar |
|---|---:|---|---:|---|
| `TAB-M1` | 57–62 | §3, Macroestrutura 1 | 4 tópicos, 1.1–1.4 | Pergunta L55; comentário L64, inclusive ressalva de língua/fala no 1.3. |
| `TAB-M2` | 70–74 | §3, Macroestrutura 2 | 3 tópicos, 2.1–2.3 | Pergunta L68; comentário L76 sobre fala e escrita. |
| `TAB-M3` | 82–87 | §3, Macroestrutura 3 | 4 tópicos, 3.1–3.4 | Pergunta L80; comentário L89 sobre 2.3 versus classes e aprofundamentos. |
| `TAB-M4` | 95–101 | §3, Macroestrutura 4 | 5 tópicos, 4.1–4.5 | Pergunta L93; comentário L103 sobre estrutura e efeitos de sentido. |
| `TAB-M5` | 109–115 | §3, Macroestrutura 5 | 5 tópicos, 5.1–5.5 | Pergunta L107; comentário L117 sobre evidência de ironia. |
| `TAB-M6` | 123–127 | §3, Macroestrutura 6 | 3 tópicos, 6.1–6.3 | Pergunta L121; comentário L129 sobre variação e norma. |
| `TAB-M7` | 135–140 | §3, Macroestrutura 7 | 4 tópicos, 7.1–7.4 | Pergunta L133; comentário L142 sobre coesão e coerência. |
| `TAB-M8` | 148–153 | §3, Macroestrutura 8 | 4 tópicos, 8.1–8.4 | Pergunta L146; comentário L155 sobre interpretação e Redação. |
| `TAB-FONTES` | 361–365 | §14 | 3 classes de fonte | Trinca inseparável **Tipo de fonte / Trabalho que realiza / Cuidado indispensável**. |
| `TAB-AUDITORIA` | 500–506 | §23 | 5 dimensões | Trinca inseparável **Dimensão / Pergunta de auditoria / Exemplo de problema**. |

Em cada macroestrutura o conjunto semântico é **título → pergunta central → tabela → comentário interpretativo**. A pergunta não é uma linha ou `thead` da tabela. Cada célula `Tópico` da primeira coluna corresponde à descrição integral da mesma linha na coluna `Núcleo de estudo`; preservar texto, pontuação, identificador e associação. Cabeçalho repetido na paginação é repetição física legítima, não nova linha curricular.

As linhas curriculares somam **4 + 3 + 4 + 5 + 5 + 3 + 4 + 4 = 32** e devem permanecer nos oito grupos dessa ordem. Os títulos e núcleos completos **são recuperados do Texto-Mestre**: reproduzi-los numa segunda lista aqui geraria duas fontes concorrentes e risco de desatualização. A linha **1.3** mantém o título *Signo Linguístico*, com a explicação sobre *língua e fala* no núcleo e no parágrafo posterior; não a renomear por inferência.

Na tabela de fontes, as categorias são *Referências teóricas e gramaticais*, *Corpus literário, social e documental* e *Provas e materiais multimodais*. Na tabela de auditoria, as dimensões são *Curricular*, *Conceitual e epistemológica*, *Didática e prática*, *Documental e representacional* e *Editorial e técnica*. Essas sequências são comparativas, não rankings.

## III. Ocorrências que exigem tratamento particular

### 4. Exemplos, princípio e citações

| ID | Fonte | Função concreta | Tratamento e risco |
|---|---|---|---|
| `C-PRINCIPIO` | L5 | Princípio orientador do Plano | Uma única instância semântica; pode compor capa, sem autoria externa inventada. |
| `E-REFERENTE` | L187–195; exemplo em **L189** | Enunciado construído sobre Camila, Júlia e `ela` | Manter a frase literal e sua indeterminação; proibir cor, seta, legenda ou destaque que escolha uma das candidatas como referente obrigatório. |
| `E-NEGACAO` | L213–229; frases em **L215 e L217** | Par comparativo sobre a vírgula e a organização do enunciado | Manter **“Não espere.”** e **“Não, espere.”** com pontuação exata, proximidade, simetria e ordem original; suas explicações continuam associadas. |
| `E-RETORNO` | §12, **L326** | Retorno ao exemplo do pronome para criticar uma correção injustificada | Não suprimir como redundância; não apresentar como novo problema resolvido. |

Os quatro blocos de citação da fonte são o princípio e os três enunciados construídos; todos pertencem à prosa autoral, mas desempenham funções diferentes. O par pontuado deve ser percebido simultaneamente quando viável, sem converter as duas citações num enunciado contínuo ou permitir que a quebra física oculte sua relação.

### 5. Listas estruturadas

| Seção | Linhas | Formato/itens | Função distintiva |
|---|---:|---|---|
| §7.1 | 223–225 | `ul`, 3 | Perguntas de forma, sentido e uso; não são um roteiro universal em três estágios. |
| §8 | 239–241 | `ul`, 3 | Contratos de entrada, saída e fronteira; não são cronograma. |
| §11.2 | 301–305 | `ul`, 5 | Apoio, estabilização, variação, transferência e autonomia. |
| §11.3 | 315–318 | `ul`, 4 | Resposta-modelo, suficiência, aceitação e limites da correção. |
| §13 | 338–343 | `ol`, 6 | Critérios de domínio; não converter em pontuação de desempenho. |
| §16 | 389–392 | `ol`, 4 | Perguntas sucessivas para escolher função, regime, categoria e implementação. |

O destaque tipográfico do rótulo integra o item. Não separar rótulo de explicação, embaralhar ordem ou uniformizar todas as listas visualmente como se todas exprimissem etapas cronológicas.

### 6. Sequências e relações com setas

| Fonte | Natureza | Restrição específica |
|---|---|---|
| §2, L43–45 | **Percurso curricular**: fundamentos → sons/escrita → organização → ... → interpretação/argumentação. | Preservar integralmente palavras, setas e direção, sem fixar prazos ou transformar em cronograma rígido. |
| §6, L197 | **Heurística de investigação**: observar → problematizar → distinguir → conceituar → explicar → aplicar → verificar. | Está dentro de um parágrafo e é expressamente não obrigatória; não converter em regra universal autônoma. |
| §21, L476–478 | **Fluxo de produção da apostila**: arquitetura → teoria → revisão → prática → editoração → PDF → verificação. | Preservar a sequência literal e sua explicação; não misturar com o percurso curricular da Seção 2. |

As relações não precisam de novo infográfico. Se uma apresentação especializada for usada, deve conservar a redação integral na ordem do Texto-Mestre e respeitar a política da Arquitetura.

### 7. Relações transversais de conteúdo

| Relação | Locais | O que a materialização não deve apagar |
|---|---|---|
| **Signo, língua e fala** | `TAB-M1` (1.3), L64 e §18 | A distinção saussuriana é enquadramento específico, não definição exaustiva de toda linguagem. |
| **Retomadas com ganho curricular** | §§2, 4, 6 e 12 | Repetição aparente pode corresponder a mudança de objeto, escala ou operação. |
| **Pronomes e textualidade** | 3.2 ↔ 7.1; §4 | Estudo pronominal inicial e referenciação na continuidade textual não são o mesmo estágio. |
| **Multimodalidade** | 1.2 ↔ 7.4; §4 | Relações entre modos, de um lado, e textos, gêneros, suportes e circulação, de outro. |
| **Implícitos e interpretação** | 5.4 ↔ 8.2; §4 | Mecanismos pragmáticos versus avaliação de inferências em leitura. |
| **Formação e classes** | 2.3 ↔ 3.1; L89 | Estrutura interna da palavra versus sua categoria e funcionamento nas construções. |
| **Forma, sentido e uso** | §1, §7.1 e §16.4 | Operações interligadas, sem três capítulos compulsórios; transposição não é mera ilustração. |
| **Literatura e comprovação** | §§15 e 19 | Referência a Machado, Rosa, Graciliano ou Tolkien não equivale a citação verificada de passagem. |
| **Estudante e produção** | L454, §20 ↔ §§21–25 | A Parte IV muda de interlocução sem deixar de integrar o argumento do método. |

## IV. Cobertura integral sem inventário redundante

### 8. Regra de correspondência para todas as unidades

**Todas** as unidades do Texto-Mestre devem aparecer no HTML semântico em ordem, no mesmo contexto e com as mesmas palavras e ênfases. A tabela de exceções acima **não** é uma lista do que deve ser incluído: somente identifica onde o tratamento exige mais do que as regras herdadas.

O tratamento padrão é: headings normalizados sem mudar o título; parágrafos contínuos; `strong`/`em` preservados; listas HTML reais; quatro citações semanticamente distintas; tabelas reais; separadores como transições semânticas; nenhuma edição silenciosa do texto. A numeração e os títulos das seções são literais; a presença do nome de um tópico não autoriza inventar seu conteúdo de apostila.

Para permitir conferência completa com documentação econômica:

1. **Identidade da entrada:** comparar o SHA-256 da fonte indicada acima. Em cópias com CRLF, normalizar os finais de linha antes de concluir que houve mudança textual; nenhuma normalização autoriza alterar caracteres, acentos ou pontuação.
2. **Inventário automático:** analisar o Markdown integral (com suporte a tabelas), não apenas os itens especificados nesta matriz. O recorte atual apresenta **544 linhas físicas, 307 não vazias, 7 headings de origem `#`, 25 `##`, 18 `###` (8 macroestruturas e 10 subseções), 10 tabelas, 6 listas, 4 blockquotes e 7 divisores**. Contagens de parágrafos podem variar conforme o parser; a cobertura não depende de inventar IDs manuais para eles.
3. **Rastreabilidade no HTML-fonte:** registrar o contexto de seção e uma chave lógica por tabela, lista, citação ou exemplo especial. Para parágrafos comuns, o contêiner de seção e a **ordem do parser** bastam se a comparação integral puder localizar omissões ou deslocamentos.
4. **Comparação estrutural e textual:** conferir a sequência de blocos do Markdown e a árvore de conteúdo-fonte HTML, incluindo os conteúdos das células, itens de listas, destaques e enunciados exemplificativos. Comparar textos com normalização limitada a espaços editoriais e quebras de linha; não eliminar pontuação nem palavras repetidas, pois podem ser o objeto de ensino.
5. **Separar fonte e paginação:** excluir da comparação semântica apenas elementos físicos gerados (cabeçalhos/rodapés, numeração, cabeçalhos de tabela repetidos mecanicamente). A fragmentação física não pode criar nova instância lógica de conteúdo.
6. **Alteração da fonte:** se o texto mudar, recalcular o hash e reconferir seção, tabelas e ocorrências especiais. Não ajustar o Texto-Mestre para caber num inventário anterior.

### 9. Verificações dirigidas do produto

Além da cobertura geral, a auditoria da implementação deverá confirmar:

- oito macroestruturas preservadas com pergunta, tabela, descrição de cada tópico e comentário posterior; **32 associações corretas** entre título e núcleo de estudo;
- duas tabelas analíticas com suas três colunas e, respectivamente, três e cinco linhas de dados;
- os dois exemplos de §6/§7.1 e a retomada do §12 sem resolver artificialmente ambiguidades ou modificar vírgulas;
- seis listas com a cardinalidade e o estatuto correto e três sequências de setas com funções distintas;
- abertura própria da Parte IV, ressalvas sobre fonte real, tradução, diversidade, interpretação e escopo do currículo;
- continuidade legível no A4 real, tabelas sem corte, títulos vinculados ao início do conteúdo, sem erros de overflow;
- links relativos, caracteres íntegros, cabeçalhos/rodapés consistentes, IDs de origem únicos e bookmarks conferidos no PDF;
- interpretação dos diagnósticos de paginação **além** do simples sinal de prontidão.

**Resultado exigido:** correspondência integral entre fonte e HTML semântico e preservação das relações intelectuais no PDF. O Mapeamento termina ao definir **o que cada ocorrência exige**; não substitui a decisão de CSS nem o exame do produto final.
