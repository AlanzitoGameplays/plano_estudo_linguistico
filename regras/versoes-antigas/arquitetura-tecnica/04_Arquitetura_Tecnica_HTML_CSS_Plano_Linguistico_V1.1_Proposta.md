# 03 — Arquitetura Técnica HTML/CSS do Plano Linguístico

## Plano de Estudo Linguístico e da Língua Portuguesa — Versão 1.1 (proposta)

**Natureza:** especificação técnica da infraestrutura editorial de apostilas.  
**Estado:** proposta para revisão e aprovação — **não congelada**.  
**Referência implementada:** Base Editorial `Plano_Linguistico_Base_V2.1.html` / `.css` e `Paginador_Plano_V1.1.js`.  
**Aplicações existentes:** Tópicos 1.1 — Linguagem e Comunicação; 1.2 — Linguagem Verbal, Não Verbal e Multimodal.  
**Repositório de produção:** `AlanzitoGameplays/plano_estudo_linguistico`.  
**Repositório de fontes:** `AlanzitoGameplays/plano_estudo_linguistico_corpus` (PDFs sob Git LFS).

> **Princípio:** o conteúdo determina o que precisa ser representado; a arquitetura técnica determina como representá-lo de maneira estável, fiel, reutilizável e imprimível. A página não possui autoridade para modificar o conteúdo.

---

# 0. Função e razão de existir

Esta Arquitetura Técnica responde a uma pergunta delimitada:

> **Quais contratos reais de HTML, CSS, JavaScript, recursos locais, paginação e impressão permitem transformar Textos Teóricos e Práticos aprovados em apostilas A4/PDF, mantendo a integridade semântica e evitando reconstruir a infraestrutura a cada Tópico?**

O documento identifica **interfaces, responsabilidades, invariantes, comportamentos atualmente implementados, limitações e critérios técnicos de validação**. Seu valor está em tornar a infraestrutura previsível e corrigível sem transformar cada nova apostila numa experiência de redesign.

Ele **não** decide:

- currículo, objetivos, Blocos ou Partes;
- definições e explicações do Texto Teórico;
- exercícios, respostas e critérios do Texto Prático;
- quais passagens literárias devem ser usadas;
- repertório de componentes opcionais ainda não homologados;
- sequência administrativa integral da produção;
- instruções extensas de uso do Codex, Git ou PowerShell;
- conteúdo de um prompt-mestre específico.

Essas competências pertencem, respectivamente, às **Estruturas Canônicas V2.3**, às **Regras do Texto Teórico V2.3**, às **Regras do Texto Prático V2.3**, ao **Mapa de Uso do Corpus**, às **Regras HTML/CSS V3.0**, à **Arquitetura e Taxonomia V1.0**, ao **Contrato de Produção** e às instruções operacionais que vierem a ser adotadas.

A relação entre especificação e implementação é:

```text
Arquitetura Técnica (este documento)
       │ define o contrato executável e seus limites
       ▼
Base HTML/CSS V2.1 + Paginador JS V1.1
       │ oferecem infraestrutura herdável
       ▼
HTML de um Tópico + CSS local + assets locais
       │ materializam conteúdo já aprovado
       ▼
PDF A4, inspecionado e validado
```

**Importante:** esta V1.1 **atualiza o diagnóstico da V1.0**, que foi redigida antes da estabilização da Base e ainda chama de candidatas várias escolhas já implementadas. Isso não significa afirmar que todas as funcionalidades futuras imaginadas na V1.0 já existam no JavaScript real.

## 0.1. Três categorias de decisão técnica

Para evitar confundir documentação com desejo de implementação, cada contrato pode ter um destes estados:

| Estado | Significado | Consequência |
|---|---|---|
| **Implementado** | Existe no código atual e foi utilizado no projeto | Pode ser herdado dentro de seus limites efetivos |
| **Implementado com limite** | Existe, mas não resolve todos os casos da família | Não ampliar sua capacidade por inferência |
| **Pendente de validação** | É uma necessidade ou proposta, não uma função comprovada | Exige teste, implementação ou decisão antes de se tornar promessa do sistema |

A existência de uma classe ou atributo em um exemplo **não prova**, por si só, seu funcionamento em todos os contextos ou engines.

---

# I. Posição no sistema documental e autoridade

## 1.1. Separação de responsabilidades

| Fonte | Pergunta que responde |
|---|---|
| Plano Curricular e Estruturas Canônicas | O que será construído, em que ordem e com quais fronteiras? |
| Regras do Texto Teórico e do Texto Prático | Como construir conhecimento e transformá-lo em prática? |
| Documento 01 — Arquitetura e Taxonomia | Que soluções pertencem ao núcleo, às opções reutilizáveis ou ao Tópico? |
| Documento 02 — Regras HTML/CSS | O que uma materialização deve respeitar? |
| **Documento 03 — Arquitetura Técnica** | **Que estrutura e interfaces realizam essas exigências no sistema atual?** |
| Contrato/Fluxo de Produção | Em que sequência construir, conferir, aprovar e congelar? |
| Base, Paginador e apostilas | Como os contratos estão efetivamente implementados e que resultados produzem? |

**Precedência para decisões técnicas:** o conteúdo aprovado e suas relações semânticas são preservados; as normas de arquitetura e conformidade delimitam o permitido; esta especificação define o contrato técnico; a Base e o Paginador o implementam. Um defeito de implementação não se transforma em regra porque está no código. Inversamente, uma descrição desatualizada neste documento não autoriza ignorar o comportamento concreto do código: a divergência deve ser registrada e resolvida no nível competente.

O `00_Registro_Canonico_Sistema_Editorial_Linguistico_V1.0.md` contém um retrato histórico da infraestrutura, mas não deve ser mantido como autoridade concorrente depois que suas informações exclusivas forem consolidadas. A indicação de versão vigente pode residir de modo conciso no `README.md` e nesta especificação.

## 1.2. Regra arquitetônica superior

> **HERDAR → ADAPTAR → CRIAR SOMENTE O NOVO.**

Uma nova apostila recebe os contratos universais da Base; acrescenta classes e recursos locais quando o conteúdo os exige; e só propõe alteração global diante de necessidade recorrente e suficientemente demonstrada.

**Contrato técnico não é molde visual obrigatório.** Uma árvore sintática, uma página de poesia e um exercício de interpretação podem usar o mesmo chassi A4 sem a mesma disposição interna.

---

# II. Arquivos vigentes e fronteiras de responsabilidade

## 2.1. Implementações existentes

No repositório principal, a infraestrutura examinada está em:

```text
ferramentas/
├── base/
│   ├── Plano_Linguistico_Base_V2.1.html
│   ├── Plano_Linguistico_Base_V2.1.css
│   ├── Paginador_Plano_V1.1.js
│   └── assets/
│       ├── teste_visual_raster.png
│       └── teste_facsimile.png
└── GERAR_PDF_PADRAO_V4_CORRIGIDO_90S.bat
```

| Arquivo | Responsabilidade | Não deve fazer |
|---|---|---|
| **Base HTML V2.1** | Demonstrar o modelo estrutural do documento e os pontos de extensão | Estabelecer conteúdo curricular ou obrigar reprodução dos casos de teste |
| **Base CSS V2.1** | Definir tema, geometria, tipografia, capa, hierarquia geral, tabelas, mídia, screen e print | Corrigir por estilização uma relação conceitual defeituosa |
| **Paginador V1.1** | Medir, distribuir, agrupar e fragmentar unidades pelos contratos suportados; emitir diagnósticos | Reescrever, resumir, inventar continuidades semânticas ou decidir aparência |
| **CSS local do Tópico** | Implementar componentes e necessidades específicas | Sobrescrever casualmente o chassi global |
| **Assets locais** | Materializar ou preservar recursos do conteúdo | Simular falsamente documentos ou alterar dados relevantes |
| **Gerador PDF** | Acionar a renderização oficial e suas verificações operacionais | Servir como fonte de conteúdo ou substituir auditoria do resultado |

A Base V2.1 contém **conteúdo demonstrativo**. Ela não deve ser copiada integralmente mantendo exemplos, imagens e parágrafos de teste numa apostila real. O que se herda são seus contratos e infraestrutura; o conteúdo-fonte é substituído pelo conteúdo aprovado do Tópico.

## 2.2. Versões independentes

A Base CSS/HTML e o Paginador possuem **ciclos de versão distintos**. Uma correção interna de paginação não exige nova paleta; um novo recurso local não exige nova Base; uma mudança em norma técnica não obriga a reabrir PDFs congelados sem defeito demonstrado.

O número **V1.1 deste documento** não implica nova versão de nenhum dos três arquivos executáveis. Não afirmar uma Base V2.2 ou um Paginador V1.2 antes que tais implementações existam, sejam testadas e sejam aprovadas.

---

# III. Modelo estrutural: SOURCE, PAGE e PAGINATOR

## 3.1. Os três papéis

1. **SOURCE** é a estrutura HTML semanticamente organizada do conteúdo aprovado. Não contém paginação manual de todas as folhas.
2. **PAGE** é a folha física gerada, com geometria A4, contexto, corpo e rodapé.
3. **PAGINATOR** é a função que transforma a distribuição física sem alterar a sequência semântica.

```text
#document
├── .page.page--cover                   ← capa
└── #source-content.source-content      ← fonte semântica
    ├── .source-section [data-context]
    │   ├── abertura
    │   └── conteúdo
    ├── .source-section [data-context]
    └── ...
                │
                ▼ Paginador V1.1
#document
├── .page.page--cover
├── .page.page--generated
│   ├── .page-header
│   ├── .page-content
│   └── .page-footer
├── .page.page--generated
└── ...
```

No código atual, o Paginador cria páginas, desloca ou fragmenta nós da fonte e **remove `#source-content` do DOM visível** após a paginação. Ele guarda internamente um clone de referência para permitir nova paginação. A página impressa deriva dessa única fonte; não se deve manter outra cópia semanticamente ativa concorrente.

## 3.2. Contrato estrutural implementado

O JavaScript atual procura obrigatoriamente:

- `#document` — contêiner do documento;
- `#source-content` — fonte semântica;
- `.source-section` como **filhos diretos** da fonte;
- `data-context` em cada seção, quando houver um contexto de cabeçalho;
- `data-header-identity` e `data-footer-identity` em `#document`, quando definidos.

**Exemplo reduzido de instanciação:**

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tópico 1.3 — [Título aprovado]</title>
  <link rel="stylesheet" href="../../ferramentas/base/Plano_Linguistico_Base_V2.1.css">
  <link rel="stylesheet" href="Plano_Linguistico_Topico_1.3.css">
</head>
<body class="theme--ling">
  <main id="document" class="document"
        data-header-identity="PLANO DE ESTUDO — LÍNGUA PORTUGUESA"
        data-footer-identity="TÓPICO 1.3 — [TÍTULO]">
    <section class="page page--cover" id="capa" aria-label="Capa">
      <!-- Reutilizar o chassi de capa, sem copiar conteúdo demonstrativo. -->
    </section>
    <div id="source-content" class="source-content">
      <section class="source-section" data-context="TEXTO TEÓRICO • PARTE I">
        <!-- Texto Teórico aprovado, marcado semanticamente. -->
      </section>
      <section class="source-section" data-context="TEXTO PRÁTICO • EXERCÍCIOS">
        <!-- Texto Prático aprovado. -->
      </section>
    </div>
  </main>
  <script src="../../ferramentas/base/Paginador_Plano_V1.1.js"></script>
</body>
</html>
```

Os caminhos relativos acima **pressupõem a estrutura de pastas atualmente existente** (`macroestrutura-1/topico-1-3/` na profundidade equivalente à dos Tópicos 1.1 e 1.2). Devem ser recalculados se o arquivo for movido. O trecho ilustra a interface, **não constitui uma Base substituta nem um HTML completo pronto para PDF**.

## 3.3. Unidade curricular e unidade paginável

O sistema deve aceitar, conforme a arquitetura já aprovada:

```text
Tópico → Partes
Tópico → Blocos → Partes
```

**Bloco não é obrigatório.** Uma `.source-section` é uma **fronteira técnica** para paginar e definir contexto, não uma declaração automática de que existe novo Bloco, Parte ou capítulo. Cabe à marcação representar a arquitetura real do material.

No Paginador V1.1, cada `.source-section` não vazia **inicia uma página interna nova**. Esta é uma propriedade concreta da implementação, e não uma regra pedagógica segundo a qual toda subseção merece página própria. O uso indiscriminado de `source-section` produziria páginas desnecessárias.

---

# IV. A4, regiões físicas e identidade visual

## 4.1. Geometria implementada

A Base V2.1 utiliza:

```css
@page { size: A4; margin: 0; }

.theme--ling {
  --page-width: 210mm;
  --page-height: 297mm;
  --page-top: 12mm;
  --page-right: 17mm;
  --page-bottom: 7mm;
  --page-left: 20mm;
}
```

A `.page` é um grid de três linhas — cabeçalho, corpo e rodapé — com altura e largura A4. A `.page--cover` possui um contrato visual distinto e utiliza a folha integral. `.page-content` concentra a área para o texto paginado; a Base acrescenta espaçamento interno vertical ao corpo da folha.

O sistema **não utiliza o preenchimento visual completo de cada página como critério de correção**. Espaços remanescentes podem resultar legitimamente da preservação de figuras, exercícios, tabelas e unidades conceituais.

## 4.2. Tema e tokens vigentes

A identidade atual usa a classe `.theme--ling` e tokens compartilhados da família editorial:

| Token | Valor atual na Base V2.1 | Função |
|---|---|---|
| `--primary` | `#6B293C` | títulos e ênfases estruturais |
| `--secondary` | `#874257` | hierarquia e tabelas |
| `--accent` | `#9A6648` | acentos editoriais |
| `--support` | `#B9836D` | suporte visual |
| `--soft` | `#F1E4E7` | fundo discreto |
| `--border` | `#CBBDB6` | divisórias |
| `--text` | `#302A28` | texto |
| `--muted` | `#756A65` | metadados |
| `--paper` e `--white` | `#FBF8F3` | superfície da folha |
| `--screen` | `#E9E4DF` | ambiente de pré-visualização |

A V1.0 da Arquitetura Técnica propunha um namespace alternativo com tokens `--ling-*`. **Esse namespace não é o contrato efetivo adotado pela Base V2.1.** Não se deve criar dois sistemas de tokens concorrentes apenas para preservar uma proposta anterior.

O mesmo raciocínio vale para tipografia e espaçamento: os valores exatos devem ser obtidos da Base aprovada, não copiados de uma especificação candidata já superada.

## 4.3. Tela e impressão

A Base estabelece `@media screen` para visualização em navegador e `@media print` para impressão. Ambos são modos do **mesmo documento**. A impressão remove efeitos auxiliares, conserva a geometria da página e utiliza `@page` A4 com margem do navegador neutralizada.

Não criar um segundo HTML exclusivo para PDF nem corrigir manualmente o PDF mantendo o HTML errado.

---

# V. Tipografia, notação e estruturas linguísticas

## 5.1. Tipografia como suporte de conteúdo

A Base V2.1 utiliza, entre outros, os tokens:

- `--font-heading`: família sans-serif para títulos;
- `--font-body`: família serifada para prosa;
- `--font-symbol`: fallback de símbolos;
- `--font-ipa`: fallback para transcrição fonética.

O CSS vigente usa **pilhas de fontes locais/de sistema**, não um conjunto completo de arquivos de fontes incorporados via `@font-face`. Portanto, a robustez de diacríticos e caracteres especializados **precisa ser verificada no ambiente efetivo de geração**, especialmente quando houver troca de máquina.

## 5.2. Convenções não podem ser alteradas visualmente

Distinguir conforme a função:

- `/.../` — representação fonológica;
- `[...]` — representação fonética;
- grafemas, morfemas, glosas, acentos e diacríticos;
- colchetes, setas, barras, índices, subscritos e convenções linguísticas relevantes.

Por exemplo, não substituir uma transcrição fonética por texto com grafia ortográfica semelhante para contornar uma fonte ausente. Se o glifo falhar, trata-se de defeito técnico a corrigir, não de autorização para mudar o objeto de estudo.

A Base já exemplifica `.ipa`, `[lang="x-ipa"]` e `.symbol`. **Não implica** que suporte, sem ensaio específico, glosas interlineares complexas, árvores sintáticas, mapas dialetais ou qualquer inventário futuro de sinais.

## 5.3. Formas especializadas nascem localmente

Uma representação especializada, como árvore de constituintes, alinhamento de morfemas, análise sintática em camadas ou mapa dialetal, deve utilizar as primitivas genéricas de página e figura, mas preservar suas relações espaciais num componente próprio. Só será promovida a componente reutilizável quando houver função estável e teste em apostilas reais.

---

# VI. Hierarquia, navegação e contexto de página

## 6.1. Três coisas distintas

- **Hierarquia semântica:** organização do conteúdo no HTML (`h1`, `h2`, `h3` e equivalentes adequados).
- **Título editorial:** apresentação visual, por exemplo `.part-title`, `.section-title`, `.item-title`.
- **Contexto de página:** texto de orientação no cabeçalho, fornecido por `data-context`.

Esses eixos se relacionam, mas não são sinônimos. Não transformar uma pequena etiqueta visual em novo nível conceitual; não criar uma seção formal apenas para obter um cabeçalho bonito.

## 6.2. O que o sistema realmente implementa

O JavaScript cria `.page-header`, `.header-context`, `.page-footer` e `.page-number`. O contexto é captado de `data-context` da seção paginável; as páginas internas são numeradas sequencialmente, com a primeira após a capa indicada como página 2.

A Base usa também `.outline-root` em suas aberturas. **O Paginador V1.1 não constitui, por si, uma implementação autônoma de criação e validação de bookmarks PDF.** O outline final depende da interpretação do HTML pelo mecanismo de impressão e precisa ser conferido no PDF gerado.

Evitar repetir headings apenas para forçar bookmarks. Cada entrada do outline deve corresponder a uma unidade real de navegação.

---

# VII. Contratos reais de paginação

O Paginador V1.1 mede o espaço disponível e tenta dispor os filhos diretos de cada `.source-section` preservando a ordem. Quando uma unidade não cabe, o comportamento depende do contrato declarado.

## 7.1. Quadro dos contratos implementados

| Interface | Comportamento real | Situação e limite |
|---|---|---|
| `.keep-with-next` | Tenta agrupar o nó e o próximo **quando são filhos no nível percorrido de `.source-section`** | Preferência, não indivisibilidade absoluta |
| `data-keep-count="N"` | Tenta manter o nó junto aos próximos `N-1` irmãos no nível da seção | Se exceder a página, o código recorre à colocação das partes |
| `.atomic-group` | Não fragmenta o grupo automaticamente | Se não couber nem em página vazia, emite erro |
| `data-split="children"` | Fragmenta um contêiner por seus **filhos elementares diretos** | Não divide nós de texto soltos; um filho maior que a página gera erro |
| `.table-wrap > table` ou `table` | Fragmentação por linhas de `tbody`, com reconstrução de fragmentos | Restrições estruturais descritas adiante |
| `.source-section[data-context]` | Fronteira de paginação e contexto; começa página interna | Usar somente quando semanticamente/editorialmente justificado |

**Observação:** as políticas aspiracionais `MEDIA-FIT` com limite mínimo de escala, `KEEP-GROUP` genérico e divisão de um parágrafo gigante por `Range` não devem ser descritas como funções prontas apenas porque foram imaginadas na V1.0. O código atual não oferece automaticamente todas essas interfaces.

## 7.2. Grupo preferencial não é grupo atômico

Um título e o parágrafo seguinte podem ser agrupados preferencialmente para evitar um título isolado. Mas uma unidade muito longa não deve permanecer presa em bloco indivisível apenas por conveniência visual.

Use `.atomic-group` quando a leitura efetivamente depender da unidade indivisa — e somente se o conteúdo couber numa página vazia. Se não couber, o problema não deve ser mascarado por redução arbitrária do texto ou pela supressão de elementos.

## 7.3. Divisão por filhos

`data-split="children"` funciona quando o contêiner é composto de **elementos filhos diretos**, cada qual suficientemente pequeno para ser colocado numa página. A função não deve ser confundida com divisão por linha de texto, palavra ou oração.

Exemplo adequado de estrutura, condicionado ao teste de paginação:

```html
<article class="resolved-example" data-split="children">
  <div class="keep-unit"><h3>Exemplo resolvido</h3><p>Instrução inicial.</p></div>
  <div class="keep-unit"><p>Primeiro passo.</p></div>
  <div class="keep-unit"><p>Segundo passo.</p></div>
</article>
```

A lógica de agrupamento `.keep-with-next` no laço principal **não é garantia automática de agrupamento interno** de nós aninhados numa divisão por filhos. Se uma unidade interna precisar ser indivisa, sua estrutura e comportamento deverão ser testados na instância real.

A correção que distingue o Paginador V1.1 do V1.0 trata especificamente de um caso em que o primeiro filho era deslocado para página nova e o algoritmo anterior produzia páginas adicionais desnecessárias. Essa correção não resolve por si todas as possibilidades de divisão.

## 7.4. Tabelas

O sistema suporta tabelas reais com `<thead>` e `<tbody>`, e pode dividir tabelas longas por linhas. A implementação examina, entre outros fatores:

- tabela diretamente recebida ou `.table-wrap` contendo **exatamente uma** `<table>` como filho elementar;
- presença de `tbody` com linhas;
- ausência de tabelas aninhadas;
- ausência de células com `rowspan` maior que 1;
- capacidade de cada linha caber na área útil.

O código gera fragmentos e pode repetir cabeçalhos de tabela para preservar a orientação. Tabelas com `rowspan`, estruturas internas não suportadas ou linha isolada maior que a página **não devem ser declaradas seguramente fragmentáveis**; seu tratamento exige diagnóstico específico, componente adequado ou revisão da representação.

O splitter não autoriza perder legenda, fonte, relação entre colunas ou conteúdo.

## 7.5. Mídia maior que a página

O paginador não deve cortar uma imagem documental nem reduzir indefinidamente um visual para fazê-lo caber. O comportamento efetivo da V1.1 é **deslocar a unidade** para outra página quando necessário e emitir erro se ela continuar excedendo o espaço útil. Uma política inteligente de encaixe com escala mínima semanticamente testada não deve ser presumida.

---

# VIII. Figuras, corpus, fac-símiles e recursos

## 8.1. Infraestrutura genérica de mídia

A Base fornece `.visual`, regras de largura/proporção, `img`, `svg` e `figcaption`. Uma figura usual pode seguir:

```html
<figure class="visual visual-topic atomic-group">
  <img src="imagens/exemplo-documental.png"
       alt="Descrição funcional sem antecipar o resultado da análise"
       width="1200" height="850" loading="eager">
  <figcaption>Legenda documental e referência conferida.</figcaption>
</figure>
```

Este é um padrão de integração **possível**, não a forma obrigatória de todos os recursos. Quando a materialidade não importar, um excerto verbal transcrito em HTML pode ser superior a um screenshot.

## 8.2. Três categorias que o chassi não deve confundir

| Categoria | Estatuto | Responsabilidade técnica |
|---|---|---|
| **Visual para HTML** | Representação didática construída | preservar geometria, relações, rótulos e limites; pode ser SVG/HTML/CSS/raster |
| **Imagem para HTML** | Imagem efetiva utilizada como objeto, corpus ou documentação | preservar elementos relevantes, proporção, legibilidade e proveniência |
| **Fac-símile para HTML** | Reprodução cuja materialidade original faz parte da análise | preservar organização gráfica e integridade relevante; não criar autenticidade artificial |

A **função representacional** vem antes da escolha do formato. “Visual” não significa necessariamente “SVG”, e “fac-símile” não é simplesmente um estilo de borda.

## 8.3. SVG e representação espacial

- Usar `viewBox` coerente e texto interno legível na escala final.
- Não usar CSS global genérico (`svg path`, `svg rect`, `svg text`) para mudar detalhes semânticos de figuras particulares.
- Dar nomes ou classes locais a elementos internos quando precisarem de tratamento.
- Não deslocar nós, setas, hierarquias ou rótulos apenas para preencher o papel.
- Uma árvore de análise linguística exige fidelidade ao agrupamento; um diagrama comparativo exige equivalências e distinções corretas.

O paginador trata o SVG como parte do elemento visual; **não calcula sua semântica interna**.

## 8.4. Proveniência e relação com o corpus Git LFS

O corpus literário tem um repositório separado e usa Git LFS para PDF. Uma referência ao PDF no GitHub pode devolver apenas o **ponteiro LFS**; isso não equivale à leitura do livro. A seleção e conferência de citações deve ocorrer com o arquivo real recuperado, por exemplo em um clone configurado com Git LFS, ou em cópia cuja identidade editorial seja comprovadamente correspondente.

A função desta Arquitetura Técnica é apenas garantir que **os assets efetivamente usados pela apostila sejam locais, acessíveis na renderização e identificáveis**. A política de seleção e de proveniência detalhada pertence às regras textuais, ao Mapa de Uso do Corpus e ao Contrato de Produção.

Quando houver imagem externa ou fac-símile, conservar autoria/fonte/edição/recorte em lugar recuperável, sem exigir uma ficha individual extensa para cada arquivo quando uma nota editorial suficiente já cumprir essa função.

---

# IX. Portabilidade, dependências e reprodução offline

## 9.1. O problema comprovado no repositório

Os HTMLs atualmente versionados dos Tópicos 1.1 e 1.2 contêm vínculos como:

```html
<link href="/Users/alanr/Documents/plano_linguistico/ferramentas/base/Plano_Linguistico_Base_V2.1.css" rel="stylesheet">
<script src="/Users/alanr/Documents/plano_linguistico/ferramentas/base/Paginador_Plano_V1.1.js"></script>
```

Esses são caminhos **absolutos de uma máquina**. Quando o repositório é clonado em outro computador, esses endereços não identificam os recursos necessários. A existência de um PDF previamente exportado não torna o HTML portátil.

**Correção proposta de contrato para novas produções:** referências relativas à organização do repositório ou uma estratégia de empacotamento local explicitamente testada.

Para HTMLs em `macroestrutura-1/topico-1-N/`:

```html
<link rel="stylesheet" href="../../ferramentas/base/Plano_Linguistico_Base_V2.1.css">
<script src="../../ferramentas/base/Paginador_Plano_V1.1.js"></script>
```

A alteração dos arquivos congelados existentes exige **patch técnico localizado e nova validação do PDF**, preservando o conteúdo.

## 9.2. Sem dependências remotas essenciais

A geração oficial deve funcionar sem depender de conexão a CDN, fontes online, imagens por URL externa ou JavaScript remoto. **Portabilidade** e **fidelidade visual** não são sinônimos: caminhos relativos resolvem localização de arquivos, enquanto cobertura de fontes e estabilidade de impressão continuam exigindo teste no ambiente de destino.

## 9.3. Fonte única ou pacote independente?

Há duas situações distintas:

1. **Construção dentro do repositório:** HTML referencia a Base e o Paginador por caminhos relativos comuns.
2. **Exportação de uma apostila como pasta independente:** HTML, CSS e JS necessários devem ser empacotados com dependências locais ou por mecanismo equivalente documentado.

Não presumir que copiar isoladamente um HTML para outra pasta preserve o acesso a `../../ferramentas/base/`. O requisito é **que cada modo de distribuição declarado seja comprovadamente reproduzível**.

---

# X. Contrato de diagnósticos e validação

## 10.1. Diagnósticos efetivamente implementados

O Paginador V1.1 possui verificações e registros relativos a:

- ausência de `#document`, `#source-content` e `.source-section`;
- falha em divisões por filhos;
- unidade maior que uma página;
- tabela não fragmentável ou linha excessiva;
- imagem não carregada;
- overflow da área útil ou tabela larga;
- IDs duplicados;
- falta de progresso no algoritmo.

Os detalhes de erro são emitidos no console e/ou sinalizados nos elementos envolvidos. A mera ausência de uma mensagem visual grande **não equivale** à aprovação técnica.

## 10.2. Duas informações que não devem ser confundidas

A implementação atual escreve dois atributos diferentes no `<html>`:

```html
<html data-pagination-ready="true"
      data-pagination-problems="error">
```

Essa combinação é **possível**: `data-pagination-ready="true"` significa que o procedimento de paginação chegou ao fim, **não** que a auditoria tenha encontrado zero erros. Se houver exceção fatal, `data-pagination-ready="error"` pode ser registrado.

O estado pode ter `data-pagination-problems="warning"` ou `"error"` quando foram detectados problemas; na ausência de registros, o atributo pode nem existir.

**Contrato de aceitação automática:** antes de gerar ou aprovar o PDF, verificar conjuntamente conclusão da paginação **e ausência de erros críticos**. Diagnósticos de aviso também devem ser examinados conforme sua causa. Um script não deve testar apenas `ready="true"`.

## 10.3. Preflight em três níveis

**Nível 1 — Estrutura e recursos**

- caminhos relativos resolvem corretamente;
- fontes e imagens carregam;
- títulos, tabelas e figuras possuem marcação adequada;
- nenhum trecho do conteúdo mestre foi omitido ou alterado;
- não há IDs duplicados ou falhas sintáticas bloqueantes.

**Nível 2 — Paginação e impressão**

- página A4 correta;
- `data-pagination-ready` e diagnósticos conferidos;
- sem overflow horizontal/vertical;
- sem unidades cortadas, tabelas ilegíveis ou imagens indevidamente reduzidas;
- sem páginas vazias artificiais;
- cabeçalho e rodapé coerentes com o contexto.

**Nível 3 — Integridade linguística, documental e didática**

- símbolos IPA, diacríticos e distinções notacionais preservados;
- excertos e fac-símiles correspondem à fonte indicada;
- nenhum desenho sugere relação semântica falsa;
- enunciados, alternativas, recursos e gabaritos mantêm correspondência;
- atividades não recebem pistas introduzidas inadvertidamente pela composição;
- outline e bookmarks PDF verificados no resultado final.

O nível 3 é **validação do produto** e conversa com as regras editoriais; não autoriza o código a reescrever conteúdo.

## 10.4. PDF oficial e limites da validação atual

O repositório possui `GERAR_PDF_PADRAO_V4_CORRIGIDO_90S.bat`, derivado do fluxo de geração utilizado no projeto. O nome do arquivo e sua presença não dispensam confirmar comandos, requisitos do Chrome/Chromium, resultado e comportamento em cada ambiente.

**PDF final é evidência necessária, não substituto da fonte.** O HTML/CSS e os assets permanecem a origem editável; o PDF deve ser inspecionado no formato efetivamente distribuído. Não declarar validada uma função apenas porque ela aparece descrita neste documento.

---

# XI. Testes mínimos de regressão da infraestrutura

Uma revisão da Base, do Paginador ou de contrato global deve utilizar, conforme a alteração, o menor conjunto de testes capaz de revelar regressão real. Para uma mudança ampla de infraestrutura, a suíte mínima proposta é:

| Caso de teste | O que deve ser verificado |
|---|---|
| Página de capa + prosa longa | A4, tipografia, cabeçalho, rodapé, fluxo |
| Tópico sem Blocos e com várias Partes | Não impor Blocos fictícios |
| Texto Prático com exercício extenso | Continuidade por filhos e unidades internas |
| Agrupamento preferencial | Título não fica isolado quando há espaço legítimo |
| Grupo atômico maior que a folha | Erro explícito; sem corte silencioso |
| Tabela longa simples | `thead` e linhas preservados em fragmentos |
| Tabela com `rowspan` | Diagnóstico de limite do splitter |
| Raster horizontal e vertical | Proporção, legibilidade, figura e legenda |
| SVG com texto e setas | Geometria e glifos preservados |
| IPA e diacríticos raros | Cobertura tipográfica no PDF |
| Asset ausente | Erro detectável |
| IDs duplicados | Erro detectável |
| Caminhos relativos em clone independente | HTML carrega CSS/JS/imagens sem caminho pessoal |
| Navegação do PDF | Outline com entradas justificadas |
| Conteúdo e gabarito | Concordância com os mestres congelados |

**Distinção de prova:** o fato de a Base V2.1 ter sido utilizada em duas apostilas reais é evidência valiosa de maturidade, mas não comprova todos os casos acima, especialmente tipografia especializada, fragmentação de casos extremos, diferentes instalações de fontes ou portabilidade em sistemas distintos.

---

# XII. Extensões locais, promoção e manutenção

## 12.1. O que é global

A Base e o Paginador são responsáveis por propriedades gerais: documento, página, capa, tokens, hierarquia editorial básica, tabela genérica, mídia genérica, contêiner-fonte, quebra e diagnósticos. O núcleo deve permanecer estável.

## 12.2. O que é local

Componentes como definição de trabalho, análise de corpus, comentário interpretativo, exercício, resposta-modelo, faixa de aceitação ou árvore sintática podem exigir marcação e CSS próprios do Tópico. Seu caráter local não indica pouca importância; significa apenas que a função ou solução ainda não exige herança global.

## 12.3. Quando promover

Promover uma solução ao repertório compartilhado somente se:

1. sua função puder ser descrita independentemente de um exemplo;
2. reaparecer com necessidade comparável em outros Tópicos;
3. não induzir estruturas artificiais nos materiais;
4. reduzir trabalho e inconsistência;
5. funcionar com paginação, PDF, navegação e tipografia;
6. não introduzir dependências ou efeitos globais indevidos.

Promoção exige decisão própria, não ocorre automaticamente durante a criação de uma apostila.

## 12.4. Roteamento da correção

| Defeito observado | Onde investigar primeiro |
|---|---|
| Explicação imprecisa, exercício mal formulado | Conteúdo Teórico/Prático e respectivas arquiteturas |
| Recurso essencial não especificado | Arquitetura e handoff de conteúdo |
| Elemento HTML mal estruturado | HTML local |
| Visual particular com escala inadequada | Asset e CSS local |
| Todas as apostilas com erro equivalente de capa | Base HTML/CSS |
| Falha de agrupamento ou divisão de páginas | Contrato de paginação e Paginador |
| Recurso com autoria/edição incorreta | Fonte e tratamento documental, com correção localizada na apostila |
| Novo comportamento geral necessário | Arquitetura Técnica antes de modificar a infraestrutura |

Patches devem ser tão locais quanto a causa permita. Não modificar uma apostila congelada para experimentar nova estética sem defeito substantivo.

---

# XIII. Fronteira com o Contrato de Produção

A Arquitetura Técnica diz **que interfaces precisam existir**; o Contrato de Produção diz **quando e como utilizá-las**.

Por isso, este documento **não** deve conter um prompt de execução de cinquenta etapas nem uma descrição integral de como produzir cada apostila. O fluxo geral, apenas para situar as interfaces, é:

```text
Arquitetura do Tópico aprovada
        ↓
Texto Teórico congelado
        ↓
Texto Prático congelado
        ↓
Handoff editorial (conteúdo, recursos, fontes, pendências)
        ↓
Base HTML/CSS + contratos do Paginador
        ↓
Extensões locais e assets necessários
        ↓
Renderização A4/PDF + diagnósticos + inspeção
        ↓
Apostila aprovada/congelada
```

A seleção de fontes pode ocorrer em momentos diferentes conforme a construção teórica ou prática, mas a incorporação editorial deve usar fontes efetivamente verificadas. A existência de Git LFS não substitui a conferência dos PDFs reais.

---

# XIV. Pendências reais antes do congelamento desta V1.1

Esta revisão não deve ser congelada como descrição de um sistema totalmente resolvido sem tratar ou, ao menos, delimitar formalmente os seguintes pontos:

| Questão | Situação conhecida | Encaminhamento recomendado |
|---|---|---|
| Caminhos absolutos nas apostilas 1.1 e 1.2 | **Defeito de portabilidade confirmado no HTML versionado** | Patch relativo, teste e nova validação sem reescrever conteúdo |
| `STATUS_Plano_Linguistico.md` | Contém retrato ultrapassado da estrutura e dos Tópicos | Arquivar/remover da governança ativa após transferir informação indispensável |
| Registro Canônico V1.0 | Retrato útil, mas concorrente e parcialmente desatualizado | Consolidar informações exclusivas e arquivar sua função histórica |
| Arquitetura Técnica V1.0 | Mistura contratos estáveis com nomes/tokens candidatos superados | Substituir pela revisão aprovada, sem copiar propostas obsoletas |
| CSS da Base V2.1 | Comentário de cabeçalho ainda indica “candidata” e “migração pendente” | Atualização de comentário, não redesign |
| Nome e localização do script `.bat` | Nome herdado do Plano Matemático e cópia idêntica em um Tópico | Normalizar somente quando o empacotamento estiver definido |
| Bookmarks/outline | Dependentes da exportação; não garantidos pelo paginador | Conferir o PDF e documentar comportamento real |
| IPA e fontes especializadas | Há fallback CSS, mas cobertura depende do ambiente | Criar ou executar teste de glifos e verificar o PDF |
| Média oversized e parágrafos muito longos | Alguns limites não têm splitter seguro | Diagnóstico explícito; extensão somente sob caso real |
| Imagens documentais de Tópico 1.2 | Existe indicação de recorte histórico possivelmente oriundo de transcrição moderna | Auditoria documental pontual fora do escopo técnico desta V1.1 |
| Mapa de Uso do Corpus | Já existe no repositório do corpus | Integrar por referência, sem duplicar catálogo de obras |

**A existência destas pendências não desautoriza a Base V2.1 ou as apostilas aprovadas em seus usos já testados.** Significa apenas que maturidade local não é validação universal.

---

# XV. Matriz final de contratos

| Camada | Entrada | Responsabilidade estável | Limite |
|---|---|---|---|
| Fonte semântica | Texto aprovado e marcação | Preservar estrutura, ordem, conteúdo, IDs | Não paginar manualmente todo o livro |
| Base HTML | Fonte e identidade editorial | Fornecer chassi, capa, regiões e semântica geral | Não adicionar conteúdo temático |
| Base CSS | Estrutura e tokens | Definir A4, tipografia, hierarquia e mídia | Não inventar relações linguísticas |
| Paginador | Nós e contratos de quebra | Distribuir, fragmentar nos limites suportados e diagnosticar | Não reescrever nem corrigir raciocínio |
| Extensão local | Necessidade específica | Componente proporcional e isolado | Não contaminar classes universais |
| Assets | Recursos aprovados | Realizar ou preservar os objetos necessários | Não fabricar evidência documental |
| PDF | HTML/CSS/JS/assets renderizados | Superfície final de leitura e inspeção | Não substituir fonte editável |
| Corpus externo | PDF real, edição verificável | Disponibilizar dados/documentos consultáveis | Ponteiro LFS não é conteúdo lido |

---

# XVI. Critério de aprovação e regra de encerramento

Esta V1.1 estará pronta para aprovação quando:

1. suas descrições das interfaces da Base V2.1 e do Paginador V1.1 forem confirmadas no código;
2. nenhuma função candidata for descrita como implementada;
3. a precedência sobre conteúdo e normas estiver sem ambiguidade;
4. os exemplos de caminho e de marcação corresponderem à organização efetiva do repositório;
5. as limitações forem explícitas, inclusive diagnóstico de erro e portabilidade;
6. as decisões futuras permanecerem separadas de contratos vigentes;
7. o documento não duplicar o Texto Teórico, o Texto Prático, o Catálogo de Componentes ou o Fluxo de Produção.

O sucesso desta Arquitetura Técnica será medido por um resultado operacional concreto:

> **O Tópico 1.3 deve poder herdar a infraestrutura aprovada, incorporar seus dois textos congelados e os recursos necessários, produzir HTML/CSS/PDF legíveis e verificáveis e introduzir somente as soluções genuinamente novas exigidas pelo conteúdo.**

A Arquitetura Técnica não existe para aumentar o volume documental do projeto. Existe para fazer com que a infraestrutura desapareça do centro da atenção cotidiana — porque suas decisões recorrentes já estarão resolvidas e suas limitações claramente conhecidas.

---

## Referências internas consultadas na elaboração desta proposta

Documentos do repositório `AlanzitoGameplays/plano_estudo_linguistico`, branch `main`, consultados para identificação das interfaces existentes:

- `regras/01_Arquitetura_e_Taxonomia_Canonica_Sistema_Editorial_Plano_Linguistico_V1.0.md`;
- `regras/02_Regras_Gerais_HTML_CSS_Plano_Linguistico_V3.0.md`;
- `regras/03_Arquitetura_Tecnica_HTML_CSS_Plano_Linguistico_V1.0.md`;
- `regras/00_Registro_Canonico_Sistema_Editorial_Linguistico_V1.0.md`;
- `regras/01_Contrato_de_Producao_de_Apostilas_Linguisticas_V1.0.md`;
- `regras/Estruturas_Canonicas_Plano_Linguistico_V2.3_Definitiva.md`;
- `regras/Regras_Gerais_Construcao_Texto_Teorico_Linguistico_V2.3_Definitiva.md`;
- `regras/Regras_Gerais_Construcao_Texto_Pratico_Linguistico_V2.3_Definitiva.md`;
- `ferramentas/base/Plano_Linguistico_Base_V2.1.html`;
- `ferramentas/base/Plano_Linguistico_Base_V2.1.css`;
- `ferramentas/base/Paginador_Plano_V1.1.js`;
- `macroestrutura-1/topico-1-1/Plano_Linguistico_Topico_1.1.html`;
- `macroestrutura-1/topico-1-2/Plano_Linguistico_Topico_1.2.html`;
- `Mapa_de_Uso_do_Corpus_Linguistico_V1.0.md` do repositório do corpus.

**Nota:** esta é uma **proposta de documento**, não uma alteração enviada ao GitHub nem uma homologação automática do funcionamento dos PDFs binários. As afirmações sobre os contratos implementados foram confrontadas com os arquivos HTML/CSS/JS disponíveis; inspeção visual exaustiva dos PDFs continua sendo atividade distinta.
