# Arquitetura Definitiva — Plano de Estudo Linguístico e da Língua Portuguesa V4.0

**Objeto:** organização e materialização editorial do documento-mestre do Plano V4.0.  
**Fonte de conteúdo:** `Texto_Mestre_Plano_Linguistico_V4.0.md`.  
**Instrumento complementar:** `Mapeamento_Semantico_Plano_Linguistico_V4.0_Revisado.md`.

> **Princípio construtivo:** preservar por padrão, adaptar quando necessário e inovar somente quando o conteúdo justificar. O Texto-Mestre define o que se diz; esta Arquitetura define o sistema de apresentação; o Mapeamento Semântico especifica a aplicação desse sistema aos elementos concretos do texto.

## I. Identidade e fronteiras do documento

### 1. Função e experiência de leitura

O Plano V4.0 é um **documento curricular e metodológico**, não uma apostila de um tópico. Deve permitir tanto a leitura argumentativa contínua quanto a consulta ao currículo, às capacidades pretendidas e aos princípios do método. A presença de Textos Teórico e Prático como assuntos **não** autoriza criar, neste documento, rótulos de abertura próprios dessas modalidades ou exercícios adicionais.

A forma editorial deve favorecer a prosa e a consulta. O visual organiza, diferencia e acompanha o argumento, sem substituí-lo por um catálogo de cards, infográficos ou resumos.

### 2. Precedência das decisões

| Camada | Autoridade própria | Limite |
|---|---|---|
| **Texto-Mestre V4.0** | Redação, títulos, exemplos, tabelas, listas, números e percurso argumentativo | Não é reescrito por exigência de paginação. |
| **Esta Arquitetura** | Árvore documental, identidade editorial, contratos gerais de apresentação e continuidade | Não atribui um sentido novo a ocorrências particulares. |
| **Mapeamento Semântico** | Identificação e tratamento de ocorrências específicas, suas dependências e riscos | Não altera o sistema geral nem a fonte. |
| **Implementação** | Marcação HTML, CSS local, aplicação das interfaces existentes e exportação | Não decide omissões, reorganizações ou reformulações de conteúdo. |
| **Auditoria** | Conferência do HTML e do PDF reais | Não confunde página renderizada com fidelidade demonstrada. |

A infraestrutura a **herdar** é a Base Linguística V2.1 (`Plano_Linguistico_Base_V2.1.html` e `.css`) e o Paginador V1.1 (`Paginador_Plano_V1.1.js`), observadas as Regras Gerais HTML/CSS V3.0 e a Arquitetura Técnica HTML/CSS V1.2. Estruturas Canônicas e regras de autoria Teórica e Prática V2.3 fundamentam o método descrito, mas não devem ser duplicadas como manual técnico no PDF.

### 3. Regra de economia

Preservar componentes, tokens e decisões editoriais existentes sempre que suficientes. A presente arquitetura registra apenas **exigências particulares** do documento-mestre e os **contratos de fronteira** necessários à sua construção. Detalhes já normatizados pela Base e pelas regras globais não são redefinidos aqui.

Não criar uma identidade visual alternativa, impor páginas fixas, igualar artificialmente a extensão das partes, nem transformar toda distinção conceitual em recurso gráfico. A ausência de um recurso novo é uma solução válida.

## II. Organização e hierarquia

### 4. Árvore documental

A ordem de conteúdo deve seguir a fonte:

1. Identidade do Plano: título, subtítulo e princípio orientador.
2. Apresentação.
3. Parte I — O percurso de formação linguística (seções 1–5).
4. Parte II — Como se constrói o conhecimento linguístico (seções 6–13).
5. Parte III — Fontes, representações e materialidade da linguagem (seções 14–19).
6. Parte IV — Utilização das apostilas, produção e preservação do método (abertura própria e seções 20–25).
7. Conclusão.

**Hierarquia semântica de saída:** título documental único (`h1`); Apresentação, Partes e Conclusão como unidades maiores (`h2`); seções numeradas como `h3`; oito macroestruturas da Seção 3 e as subseções numeradas como `h4`. As marcas `#`, `##` e `###` do Markdown **não** são transferidas mecanicamente aos níveis do HTML. Subtítulo, princípio orientador, perguntas centrais e identificadores de tópicos nas tabelas não são headings concorrentes.

As macroestruturas são oito **subunidades da Seção 3**, e seus 32 tópicos constituem **linhas curriculares**, não 32 capítulos novos. As subseções 7.1, 9.1, 9.2, 11.1–11.3 e 16.1–16.4 permanecem subordinadas às respectivas seções. A Parte IV contém prosa introdutória entre o título da Parte e o título da Seção 20: essa abertura não deve ser deslocada.

### 5. Função editorial de cada Parte

| Unidade | Regime predominante | Exigência particular |
|---|---|---|
| Apresentação | Prosa expositiva | Formular a razão pedagógica do Plano sem condensação em resumo. |
| Parte I | Prosa e inventário curricular | Dar legibilidade consultável às oito macroestruturas, preservando comentários após as tabelas. |
| Parte II | Prosa, exemplos e listas | Favorecer a continuidade do raciocínio; manter reconhecíveis os casos linguísticos e suas análises. |
| Parte III | Prosa e uma tabela analítica | Distinguir discussão **sobre** recursos representacionais de inserção efetiva de novos recursos. |
| Parte IV | Prosa, sequência de processo e tabela analítica | Diferenciar orientação de estudo de procedimento de produção editorial. |
| Conclusão | Prosa de fechamento | Não inventar uma síntese substitutiva ou um painel de resultados. |

Nenhum dos títulos acima implica folha obrigatoriamente exclusiva. Aberturas de Parte devem ser perceptíveis por espaço, hierarquia e identidade visual, evitando páginas ornamentais vazias. Um sumário é facultativo e, se empregado, deriva apenas dos headings reais e da paginação final.

## III. Sistema visual e componentes

### 6. Herança gráfica

Utilizar `theme--ling`, tipografia, paleta, medidas A4 e componentes compartilhados da Base V2.1. Capa, cabeçalho, rodapé e numeração pertencem à mesma família editorial das apostilas, **sem** rotular o documento como Tópico, Bloco ou Texto Teórico/Prático. Os cabeçalhos contextuais derivam de Apresentação, Parte, Seção e Conclusão.

Tipografia e ritmo devem privilegiar a legibilidade da prosa: hierarquia clara, largura de leitura adequada, espaçamento consistente e ênfases proporcionais. Perguntas centrais, princípio orientador e explicações não devem receber tratamento idêntico simplesmente porque contêm negritos. Não adicionar ícones recorrentes, badges, caixas repetitivas, galerias de autores, capas de livros ou elementos ornamentais sem função indispensável.

Qualquer adaptação local deve ficar isolada do núcleo comum; não editar a Base ou o Paginador para corrigir uma particularidade estética da V4.0.

### 7. Gramática de apresentação

| Classe de conteúdo | Contrato geral |
|---|---|
| Prosa, negrito e itálico | Preservar conteúdo, posição relativa e ênfases; a prosa permanece o meio principal. |
| Títulos e aberturas | Manter hierarquia, ordem e vínculo com o primeiro conteúdo pertinente; evitar headings artificiais. |
| Princípio orientador e exemplos construídos | Diferenciar seus estatutos: formulação do Plano versus objeto linguístico de análise. |
| Listas | Preservar estrutura `ul`/`ol`, ordem, cardinalidade, rótulos e explicações; listas não são necessariamente etapas. |
| Tabelas | Empregar tabela HTML semântica, com cabeçalhos e linhas de dados vinculados. |
| Perguntas centrais das macroestruturas | Preservar como enunciados próprios entre título da macroestrutura e sua tabela, não como cabeçalho tabular. |
| Sequências com setas | Manter palavras, direção e ordem; representar como percurso textual, sem inventar ações, datas ou interatividade. |
| Divisores Markdown | Tratar como transição editorial; não transformá-los em seções de conteúdo ou entradas do sumário. |

O documento contém **dez tabelas**: oito curriculares de duas colunas, uma comparativa de fontes (Seção 14) e uma de dimensões de auditoria (Seção 23), ambas de três colunas. Os núcleos curriculares devem permanecer vinculados aos respectivos títulos e identificadores. Não adicionar dados de duração, incidência em provas, dificuldade ou carga horária. Tabelas devem conservar todas as linhas, as descrições integrais e a comparabilidade de colunas.

### 8. Contratos transversais de representação

O regime predominante da V4.0 é **verbal e tabular**. Um visual adicional só é legítimo quando resolve insuficiência concreta da apresentação verbal. Os exemplos e contrastes cujos sinais gráficos produzem diferença de sentido exigem **fidelidade literal, proximidade e tratamento comparável**, sem realces que determinem interpretações ainda abertas.

Não inferir, da exposição conceitual sobre Visual, Imagem e Fac-símile na Parte III, uma obrigação de criar SVG, fotografia, fac-símile ou infográfico nesta edição. O Mapeamento identifica quais ocorrências reais possuem riscos particulares; a Arquitetura fixa apenas o princípio aplicável a todas elas.

## IV. Paginação e integridade

### 9. Geometria e continuidade

Usar A4 (210 × 297 mm) e os contratos de impressão da Base, sem margens duplicadas. Não reduzir fonte indiscriminadamente, cortar células, ocultar trechos nem reescrever texto para fechar página. Espaço residual legítimo é preferível a uma quebra semântica.

**Vínculos preferenciais de composição:** título e início do conteúdo; título da macroestrutura, pergunta central e início da tabela; cabeçalho de tabela e primeiras linhas; exemplo curto e sua contextualização indispensável; rótulo de lista e explicação. O Paginador V1.1 oferece `keep-with-next`, `data-keep-count`, `.atomic-group` e `data-split="children"` com limites próprios. Preferência de continuidade **não** é atomicidade garantida: agrupamento indivisível só é admissível se a unidade couber integralmente; divisão por filhos não equivale a divisão de parágrafos em linhas.

As tabelas podem fragmentar-se **entre linhas**, quando o caso e a implementação permitirem, repetindo `thead` nas páginas seguintes. Preservar células e relações de linha. Não presumir que toda tabela longa, `rowspan` ou unidade atômica extensa será dividida automaticamente.

### 10. Fonte, portabilidade e navegação

A fonte semântica deve permanecer distinta das páginas geradas pelo Paginador. Utilizar o padrão da Base (`#document`, `#source-content`, seções-fonte com contexto e páginas geradas), sem criar segunda fonte de conteúdo ativo. Referências a CSS, JavaScript e assets devem utilizar **caminhos relativos portáveis**, nunca caminhos específicos da máquina do autor ou serviços externos indispensáveis.

Assegurar: um título documental semanticamente superior; níveis de headings coerentes; leitura linear íntegra; tabelas com cabeçalhos identificáveis; IDs únicos na origem; destinos e bookmarks testados no PDF. Um `data-pagination-ready="true"` isolado não comprova ausência de problemas: verificar os diagnósticos efetivos e o produto exportado.

## V. Fronteira com o Mapeamento e o Codex

### 11. O que cabe ao Mapeamento Semântico

O Mapeamento deve:

- vincular-se à **versão exata** do Texto-Mestre e localizar as unidades por headings, seções e âncoras verificáveis;
- registrar a função de cada grupo ou ocorrência especial, suas dependências de leitura e o risco de representação indevida;
- individualizar as dez tabelas, as listas estruturadas, os exemplos sensíveis e as sequências com setas;
- estabelecer uma verificação completa da cobertura do conteúdo **sem** inventariar manualmente cada parágrafo homogêneo ou repetir toda a redação.

A regra geral para todo conteúdo não individualizado é **transposição semântica fiel**, conservando ordem, conteúdo literal e pertencimento. A ausência de uma linha no inventário de exceções não autoriza omissão.

### 12. Liberdades e proibições da implementação

**Pode adaptar:** CSS local, espaçamentos, quebra de páginas, organização física de cabeçalhos, medidas adequadas de continuidade, aplicação de classes existentes e soluções técnicas equivalentes que não modifiquem o texto nem suas relações.

**Deve herdar:** identidade e componentes da Base, comportamento conhecido do Paginador, hierarquia, tipografia de família, critérios de acessibilidade e contratos globais.

**Não pode decidir por conta própria:** novas seções, alterações no currículo, resumos, cortes, correções conceituais silenciosas, nova bibliografia, atribuições a autores, imagens de conteúdo não especificado, transformação de tabela em síntese parcial ou destaque que elimine ambiguidade deliberada.

Se surgir conflito entre fidelidade e composição, registrar o ponto e corrigi-lo na camada pertinente. Uma solução visual não adquire autoridade para reescrever o Texto-Mestre.

## VI. Critérios de conformidade

A auditoria deverá examinar tanto o **HTML semântico** quanto o **PDF A4 real**:

1. Integridade e sequência da Apresentação, quatro Partes, 25 seções, dez subseções, oito macroestruturas, 32 tópicos e Conclusão.
2. Dez tabelas completas, cabeçalhos corretos, linhas curriculares indivisas em seu significado e explicações subsequentes preservadas.
3. Ausência de omissões, duplicações de conteúdo, mudanças de pontuação em exemplos e deslocamentos de ressalvas ou vínculos de leitura.
4. Semântica de títulos, listas, exemplos, citações, contextos e ordem de leitura; navegação e bookmarks quando aplicáveis.
5. Paginação, tamanho de texto, caracteres, tabelas largas, overflow, cabeçalhos/rodapés, páginas indevidas e disponibilidade offline.
6. Adequação do tratamento visual aos casos particulares assinalados no Mapeamento, sem adições editoriais não justificadas.

**Critério de êxito:** o leitor encontra a mesma construção intelectual do Texto-Mestre numa edição mais legível e consultável, e a correspondência entre fonte e produto pode ser comprovada. Esta Arquitetura termina nesse contrato; não é um roteiro de páginas nem um segundo texto de autoria.
