# ARQUITETURA TÉCNICA HTML/CSS DO PLANO LINGUÍSTICO
## Plano de Estudo Linguístico e da Língua Portuguesa — Versão 1.2

**Documento 03 do Sistema Editorial do Plano Linguístico**  
**Estado:** versão documental definitiva e congelada; **não publicada no GitHub**. A homologação integral da implementação permanece condicionada aos testes e correções identificados neste documento.  
**Data de elaboração:** 02/11/2026  
**Origem normativa:** *Arquitetura Técnica HTML/CSS — V1.0*; *Arquitetura e Taxonomia Canônica do Sistema Editorial — V1.0*; *Regras Gerais HTML/CSS — V3.0*.  
**Implementação confrontada:** `Plano_Linguistico_Base_V2.1.html`, `Plano_Linguistico_Base_V2.1.css`, `Paginador_Plano_V1.1.js`, apostilas dos Tópicos 1.1 e 1.2.  
**Registro de estado relacionado:** *Registro Canônico do Sistema Editorial Linguístico — V1.1*, aprovado quanto ao conteúdo, cuja publicação deve ser tratada separadamente.

> **REGRA TÉCNICA SUPERIOR:** a fonte contém o significado; a infraestrutura o materializa; a página o acomoda; nenhuma dessas camadas deve reescrever aquilo que recebeu.

> **Regra de evidência desta revisão:** identificar um recurso no código significa **implementação localizada**, não validação exaustiva. Um PDF existente comprova uma materialização realizada, mas não a conformidade de todos os contratos em todos os casos. Sempre distinguir **especificado, implementado, observado e validado**.

---

# I — OBJETO, AUTORIDADE, VERSÃO E MATURIDADE

## 1. Função deste documento

Esta Arquitetura Técnica especifica **como a infraestrutura HTML/CSS/JavaScript** recebe conteúdo conceitualmente congelado, o organiza em uma árvore semântica, o materializa em folhas A4, aplica políticas de paginação e permite produzir um PDF verificável sem redefinir decisões curriculares, teóricas, práticas ou documentais.

É uma **especificação de contratos e responsabilidades**, não um manual linha a linha do código. Não substitui:

- as Estruturas Canônicas V2.3;
- as Regras Gerais dos Textos Teórico e Prático V2.3;
- a Arquitetura e Taxonomia Canônica V1.0 (Documento 01);
- as Regras Gerais HTML/CSS V3.0 (Documento 02);
- o Contrato de Produção de Apostilas V1.0;
- o Registro Canônico vigente;
- o Mapa de Uso do Corpus V1.1;
- a Base HTML/CSS, o Paginador ou a arquitetura particular de um tópico.

O Documento 01 determina **a categoria, o alcance e a autoridade** de uma decisão; o Documento 02 determina **a conformidade editorial exigida**; o Documento 03 estabelece **os contratos técnicos**; Base e Paginador **implementam** esses contratos. Quando o código divergir de norma superior, a divergência é objeto de auditoria: **não é homologada automaticamente pela simples existência do código**.

## 2. Natureza da V1.2

A V1.0 era predominantemente prospectiva: admitia interfaces, tokens e componentes ainda candidatos. A V1.2 documenta a implementação realmente localizada e separa os aspectos comprovados dos ainda pendentes.

**A numeração V1.2 foi escolhida para atender à denominação solicitada.** Não foi localizado no repositório principal um arquivo intermediário de Arquitetura Técnica V1.1; esta versão **não presume sua existência, aprovação ou conteúdo**. Seu antecedente documental verificável é a V1.0.

A V1.2 não altera automaticamente as versões da Base V2.1 ou do Paginador V1.1. Eventuais correções de código são ações próprias, dependentes de diagnóstico e aprovação.

## 3. Vocabulário de maturidade e de prova

| Termo | Sentido no presente documento | Critério |
|---|---|---|
| **Contrato preservado** | Princípio da V1.0 que permanece normativamente adequado. | Compatível com as regras vigentes e com a finalidade do sistema. |
| **Implementado (I)** | Interface ou comportamento identificável nos arquivos da Base/Paginador. | Evidência estática no código. |
| **Aplicado (A)** | Interface ou recurso presente no HTML/CSS de apostila real. | Evidência nos produtos do Tópico 1.1 ou 1.2. |
| **Validado (V)** | Contrato passou por prova dirigida suficiente para seu escopo. | Teste reproduzível, inspeção de renderização/PDF e ausência de defeito bloqueante. |
| **Parcial (P)** | Parte do contrato existe ou foi aplicada, mas faltam casos relevantes. | Registrar cobertura e lacuna. |
| **Pendente (D)** | Previsão sem prova suficiente ou divergência a resolver. | Não atribuir conformidade automaticamente. |
| **Não conforme (NC)** | Implementação identificada contraria requisito vigente. | Apontar a ocorrência concreta, sem corrigir silenciosamente. |

`I` e `A` **não implicam** `V`. Uma mesma linha pode ter implementação localizada e validação pendente. A matriz da seção XIII explicita esse limite.

## 4. Regra de mudança

Alterar apenas aquilo que possui causa demonstrada. **Problema local → correção local; problema global → correção global.** Congelamento de apostila anterior impede reabertura por preferência, mas não impede a correção justificada de defeito substantivo. Uma atualização da especificação não reescreve automaticamente arquivos já congelados.

---

# II — MODELO ARQUITETÔNICO E FRONTEIRAS

## 5. Cadeia de materialização

```text
ARQUITETURA CURRICULAR CONGELADA
              ↓
TEXTO TEÓRICO + TEXTO PRÁTICO CONGELADOS
              ↓
FONTE HTML SEMÂNTICA + ASSETS AUTORIZADOS
              ↓
BASE EDITORIAL V2.1 (CSS, GEOMETRIA, TEMA)
              +
PAGINADOR V1.1 (MEDIÇÃO E DISTRIBUIÇÃO)
              ↓
PÁGINAS A4 GERADAS EM NAVEGADOR
              ↓
PRÉ-VERIFICAÇÃO TÉCNICA E EDITORIAL
              ↓
IMPRESSÃO / PDF
              ↓
AUDITORIA DO PDF REAL
              ↓
EVENTUAL CONGELAMENTO DA APOSTILA
```

Não existe autorização para introduzir mudanças conceituais, corrigir respostas, reduzir texto ou alterar evidências durante a paginação.

## 6. Responsabilidades por camada

| Camada | Responsabilidade permitida | Limite |
|---|---|---|
| **Fonte HTML** | Estrutura e ordem semânticas; conteúdo, marcação, metadados e referências a assets. | Não escolher quebras por mera conveniência estética. |
| **CSS da Base** | A4, geometria, tipografia, tokens, tema, elementos comuns, screen/print. | Não definir respostas, fenômenos linguísticos ou conteúdo local. |
| **CSS do tópico** | Compor recursos e componentes particulares herdando a Base. | Não sobrescrever o núcleo sem causa e autorização. |
| **Paginador** | Medir, mover, agrupar, fragmentar quando autorizado, numerar e diagnosticar. | Não modificar texto ou geometria interna de recurso para fazê-lo caber. |
| **Assets** | Materializar imagens, fac-símiles, diagramas e elementos documentais. | Não criar evidência documental que a fonte original não fornece. |
| **Pipeline de PDF** | Executar o navegador e preservar o resultado impresso. | Não transformar a impressão em etapa de reautoria. |
| **Auditoria** | Detectar incompatibilidades e encaminhá-las à camada competente. | Não corrigir silenciosamente o conteúdo ou os contratos. |

## 7. Invariantes do sistema

1. **Fonte semântica ≠ página física.**
2. **Arquitetura curricular ≠ arquitetura editorial.**
3. **Estrutura do documento ≠ estilo visual ≠ contexto do cabeçalho.**
4. **Materialidade representada ≠ materialidade incorporada.**
5. **Representação construída ≠ evidência empírica.**
6. **HTML renderizado ≠ PDF auditado.**
7. **Execução concluída ≠ conformidade comprovada.**
8. **Recurso localizado no código ≠ capacidade validada em todos os casos.**

---

# III — FONTE SEMÂNTICA, DOM E PÁGINAS GERADAS

## 8. Estrutura de referência implementada

A Base V2.1 utiliza a seguinte relação estrutural, apresentada aqui como **esquema contratual** e não como template obrigatório de conteúdo:

```html
<body class="theme--ling">
  <main id="document" class="document"
        data-header-identity="..."
        data-footer-identity="...">
    <section class="page page--cover" id="capa">...</section>
    <div id="source-content" class="source-content">
      <section class="source-section" data-context="TEXTO TEÓRICO • PARTE 1">
        ...conteúdo semanticamente organizado...
      </section>
      <section class="source-section" data-context="TEXTO PRÁTICO • ...">
        ...atividades e gabarito...
      </section>
    </div>
  </main>
  <script src=".../Paginador_Plano_V1.1.js"></script>
</body>
```

Identificadores e classes principais **identificados na implementação**:

- `#document`: raiz do documento administrada pelo paginador;
- `#source-content.source-content`: origem contínua a partir da qual são geradas páginas;
- `.source-section[data-context]`: fronteira de processamento e fornecedora do contexto de cabeçalho;
- `.page--cover`: capa independente;
- `.page.page--generated`: página interna produzida pelo JavaScript;
- `.page-header`, `.page-content`, `.page-footer`, `.header-context`, `.page-number`: zonas de páginas geradas;
- `data-header-identity` e `data-footer-identity`: identificações documentais provenientes de `#document`.

**Correção de especificação frente à V1.0:** o atributo efetivamente utilizado é **`data-context`**, não `data-running-context` como apresentado em exemplo candidato da versão original. `data-running-context` não deve ser anunciado como interface canônica da implementação atual sem migração explícita.

## 9. Árvore curricular variável

A estrutura técnica deve comportar **Tópico → Partes** e **Tópico → Bloco → Partes** sem exigir um número fixo de Blocos, Partes, seções ou exercícios. A implementação materializa as `.source-section` fornecidas; o seu número não é uma decisão do paginador.

`section`, `article`, `figure`, `table`, `blockquote`, listas e componentes locais podem compor a árvore, desde que mantenham a ordem de leitura. O mecanismo não deve criar um Bloco inexistente nem transformar o título visual em heading arbitrário.

## 10. Uma só versão semanticamente ativa

O paginador prepara uma cópia de referência da fonte, gera páginas físicas e remove o nó `#source-content` ativo após a distribuição. O CSS da Base esconde `.source-content` durante a apresentação. Essas escolhas impedem a duplicação visual da fonte e das páginas paginadas em execução normal.

**Limite técnico:** a remoção da fonte e a ocultação por CSS exigem inspeção específica de ordem de leitura, acessibilidade e comportamento quando JavaScript falha. Não declarar a acessibilidade do documento validada apenas porque o HTML inicial contém elementos semânticos.

## 11. IDs, fragmentação e navegação

A fragmentação pode clonar a estrutura externa de contêineres. Na continuação, o paginador remove `id` do contêiner clonado e, no caso das tabelas, remove IDs das cópias técnicas de elementos repetidos. Ao final, executa auditoria de IDs duplicados.

A conservação dos **destinos de navegação efetivamente necessários**, especialmente quando a origem de um fragmento é movida ou clonada, continua sujeita a teste de links e bookmarks no PDF. Remover IDs repetidos não prova, sozinho, que toda navegação foi preservada.

---

# IV — BASE, TOKENS E TEMA DISCIPLINAR

## 12. Base efetivamente existente

A infraestrutura comum observada é:

```text
ferramentas/base/
├── Plano_Linguistico_Base_V2.1.html
├── Plano_Linguistico_Base_V2.1.css
├── Plano_Linguistico_Base_V2.1.pdf
└── Paginador_Plano_V1.1.js
```

O *Registro Canônico V1.0* e o *STATUS* do projeto classificam Base V2.1 e Paginador V1.1 como **canônicos**. A existência e a aplicação nas apostilas dos Tópicos 1.1 e 1.2 estão confirmadas nos arquivos. **Isso não encerra a auditoria dos contratos não testados.**

## 13. Tema `theme--ling` e tokens existentes

A Base adota **tokens genéricos dentro de `.theme--ling`**, e não a família de prefixos `--ling-*` sugerida como candidata na Arquitetura Técnica V1.0.

| Família | Tokens identificados na Base V2.1 |
|---|---|
| Identidade cromática | `--primary`, `--secondary`, `--accent`, `--support`, `--soft`, `--border`, `--text`, `--muted`, `--paper`, `--white`, `--screen` |
| Geometria A4 | `--page-width`, `--page-height`, `--page-top`, `--page-right`, `--page-bottom`, `--page-left` |
| Fontes | `--font-heading`, `--font-body`, `--font-symbol`, `--font-ipa` |
| Tipografia | `--text-size`, `--text-line`, `--text-small`, `--text-micro`, `--title-cover`, `--title-part`, `--title-section`, `--title-subsection`, `--title-minor` |
| Linhas e raio | `--line-thin`, `--line-regular`, `--line-medium`, `--line-strong`, `--radius-small` |

A V1.2 **consolida a nomenclatura implementada**. Não criar tokens globais concorrentes como `--ling-color-primary` ou `--ling-primary` enquanto o contrato existente já cumprir a função. Variáveis internas de um componente podem ser criadas localmente se seu escopo e sua necessidade forem demonstrados.

## 14. Valores e geometria

Na Base V2.1, os tokens de dimensão incluem `--page-width: 210mm`, `--page-height: 297mm`, `--page-top: 12mm`, `--page-right: 17mm`, `--page-bottom: 7mm` e `--page-left: 20mm`. Esses valores são **estado da implementação**, não permissões para regras locais reconfigurarem a geometria da coleção.

A escala tipográfica, as margens e as cores pertencem à Base e à norma editorial. Este documento referencia seus contratos; não reproduz toda a folha de estilos nem fixa novas paletas.

## 15. Herança sem cópia indiscriminada

**HERDAR → ADAPTAR → CRIAR SOMENTE O NOVO.**

A reutilização do chassi técnico não autoriza impor à Língua Portuguesa um componente concebido exclusivamente para fenômenos matemáticos. Estruturas editoriais universais podem ser compartilhadas; representações de fenômenos, estilos locais e regimes de recursos são decididos pelo conteúdo e por suas regras próprias.

Componentes locais não se tornam globais por terem sido bem-sucedidos uma vez; a promoção exige recorrência, estabilidade funcional, independência temática, validação e aprovação.

---

# V — A4, CAPA, ÁREA ÚTIL, TIPOGRAFIA E CONTEXTO

## 16. Página física e impressão

Cada folha deve manter **210 × 297 mm**, sem aplicar simultaneamente margens no `@page` e padding da própria página que reduzam duas vezes a área útil. A Base V2.1 utiliza o contrato:

```css
@page {
  size: A4;
  margin: 0;
}
```

As páginas internas distinguem `header`, `.page-content` e `footer`. A capa usa `.page--cover` e não deve ser tratada como uma página interna comum. A área útil precisa ser mensurável no mesmo regime visual em que será impressa.

O paginador distribui material segundo o espaço disponível; não modifica fontes, cores ou proporções de mídia apenas para obter encaixe. **Espaço residual legítimo não é defeito**, mas clipping e overflow substantivo são.

## 17. Cabeçalho, rodapé e contexto

A implementação utiliza:

- `#document[data-header-identity]` para a identificação superior;
- `#document[data-footer-identity]` para a identificação inferior;
- `.source-section[data-context]` para o contexto de cada conjunto paginado;
- `.header-context` e `.page-number` como recipientes da informação exibida.

O JavaScript numera as páginas geradas começando em **2**, depois da capa. A numeração física de páginas é distinta de uma eventual paginação lógica do conteúdo.

Não inferir contexto pela posição visual de um título: ele deve ser fornecido por atributo ou por contrato formal equivalente. **No estado atual, a interface observada é `data-context`.**

Cabeçalhos excessivamente longos devem ser auditados em largura e legibilidade; truncamento visual não deve ocultar uma identificação indispensável sem decisão editorial expressa.

## 18. Tipografia e repertório linguístico

A Base utiliza pilhas serifadas e sem serifa com fallback; possui `.ipa`, `[lang="x-ipa"]` e `.symbol`. O contrato exige legibilidade e cobertura para caracteres efetivamente utilizados, incluindo IPA, diacríticos combinantes, sinais, línguas estrangeiras e notação de análise linguística.

Uma declaração de `font-family` **não comprova cobertura dos glifos**, nem a presença de uma fonte específica no sistema operacional de todas as máquinas. Antes do congelamento de uma apostila que exija tais caracteres, verificar no PDF real a distinção entre símbolos, posições de diacríticos, itálicos e quebras.

Controles CSS como `orphans`, `widows` e `break-inside` podem auxiliar; não substituem o algoritmo de paginação quando o documento opera com folhas físicas explícitas.

---

# VI — PAGINADOR V1.1 E CONTRATOS DE CONTINUIDADE

## 19. Interface pública observada

O JavaScript `Paginador_Plano_V1.1.js` registra no navegador:

```js
window.PaginadorPlano = Object.freeze({ paginate });
```

Executa `paginate()` quando a página já foi carregada, ou aguarda o evento `load`. A existência dessa interface permite nova paginação conforme a implementação; **não autoriza assumir suporte a qualquer forma de alteração dinâmica de DOM ou a observadores automáticos**.

A função busca `#document`, prepara `#source-content`, obtém `.source-section` e cria `.page--generated` na ordem recebida. O algoritmo usa medições da área útil, contadores de segurança e sinalização de anomalias.

## 20. Contratos de agrupamento efetivamente utilizados

| Marcação | Função observável | Condição e limite |
|---|---|---|
| `.atomic-group` | Trata o nó como indivisível na tentativa de posicionamento. | Se não couber sozinho, registra erro; não o recorta. |
| `.keep-with-next` | Solicita preferência pelo nó e o seguinte como grupo. | Se o grupo não couber inteiro numa página vazia, pode ser dividido com aviso. |
| `data-keep-count="N"` | Solicita preferência pelos próximos N nós irmãos da seção. | `N` é reduzido aos nós disponíveis; não representa bloqueio absoluto de quebra. |
| `data-split="children"` | Permite distribuir os filhos **elementares** de um contêiner entre páginas. | Exige filhos elementos e ausência de texto solto significativo; não divide automaticamente o texto interno de cada filho. |
| `.table-wrap` ou `table` | Candidatos à fragmentação tabular específica. | Somente quando o blueprint é considerado seguro pelo algoritmo. |

**Precisão importante:** `.keep-with-next` e `data-keep-count` são **preferências de continuidade**, não garantias incondicionais de indivisibilidade. A V1.2 não deve chamá-los de “agrupamentos atômicos” sem qualificação.

## 21. Correção incorporada na V1.1 do paginador

A V1.1 resolveu um caso em `data-split="children"`: quando o primeiro filho não cabia no restante da folha anterior, mas cabia na página nova, os próximos filhos podiam continuar naquele mesmo fragmento, evitando uma nova página indevida. Isso está explicado no comentário da função `splitChildren`.

Essa correção é **local ao Paginador**, não muda por si só a Base CSS ou a arquitetura semântica. Ela não comprova que todos os padrões possíveis de fragmentação estejam validados.

## 22. Limite da divisão por filhos

O algoritmo de `splitChildren` percorre `container.children`. Se o contêiner estiver vazio ou contiver nós de texto soltos com conteúdo significativo, sinaliza **FALHA DE SPLIT**. Se algum filho elementar ultrapassar sozinho a página, sinaliza **UNIDADE MAIOR QUE UMA PÁGINA**.

Portanto, **não existe contrato genérico comprovado de divisão arbitrária de um parágrafo longo em linhas ou palavras**. A previsão prospectiva da V1.0 sobre um splitter textual mais amplo não deve ser apresentada como recurso implementado sem evidência adicional.

Quando um item for extenso, o conteúdo deve receber estrutura semântica e política de continuidade adequadas **antes** de ser materializado. Não se deve mutilar o trecho para resolver paginação.

## 23. Progresso e detecção de erro

O paginador limita operações com `MAX_STEPS = 20000` e lança falha quando excede esse limite. A comparação de `scrollHeight`/`clientHeight` e `scrollWidth`/`clientWidth` aplica tolerância de medição (`TOLERANCE = 1` no código consultado).

Esses limites são detalhes de implementação observados, não uma garantia formal de que toda situação excepcional esteja coberta. O contrato normativo é: **progredir, resolver legalmente ou falhar com diagnóstico visível — nunca entrar em loop ilimitado ou ocultar perda de conteúdo**.

## 24. Reprocessamento

A implementação possui procedimentos para remover páginas geradas, restaurar a fonte a partir de uma cópia preparada e paginar novamente. Isso é uma capacidade localizável no código, mas suas condições de segurança, conservação de listeners, IDs e acesso assistivo precisam ser verificadas em teste específico quando houver reprocessamento real.

---

# VII — TABELAS E UNIDADES EXTENSAS

## 25. HTML tabular real

Dados tabulares devem usar `table`, `thead`, `tbody`, `th`, `td` e `caption`, conforme a função. Uma composição editorial em colunas não se torna tabela apenas para facilitar o paginador.

## 26. Condições efetivas do splitter de tabelas

A função que prepara a tabela pode receber uma tabela diretamente ou uma `.table-wrap` contendo **exatamente uma tabela como filho elementar**. Rejeita para fragmentação genérica casos como:

- tabela aninhada;
- qualquer célula com `rowspan > 1`;
- ausência de `tbody` fragmentável;
- ausência de linhas em `tbody`;
- `.table-wrap` com filhos elementares adicionais ou estrutura incompatível.

Esses casos não devem ser disfarçados com divisão automática potencialmente corruptora. Se a tabela não couber na folha, a implementação tenta posicioná-la como não fragmentável e registra **TABELA NÃO FRAGMENTÁVEL** em caso de falha de encaixe.

## 27. O que a fragmentação faz

Para tabelas consideradas seguras, o algoritmo distribui linhas dos `tbody` entre folhas, preserva sua ordem e permite repetição técnica do `thead`. `colgroup` também é reconstruído em cada fragmento; `caption` aparece no primeiro fragmento; `tfoot`, quando presente, é acrescentado ao fragmento final segundo o fluxo do código.

A repetição de cabeçalho é **recurso de leitura física**; não é criação de conteúdo semântico novo. Em cópias técnicas, IDs são retirados conforme necessário para evitar duplicação.

## 28. Casos que exigem teste de fronteira

Não declarar validados sem prova dirigida:

- linha isolada mais alta que a área útil;
- tabela com `colspan` extenso ou largura que exceda a página;
- `thead` alto repetido em fragmentos;
- notas e captions extensas;
- `tfoot` em diferentes configurações;
- tabelas multipágina com vários `tbody`;
- tabelas que contenham conteúdo multimodal;
- contraste entre páginas geradas e bookmarks/ordem de leitura.

A implementação registra **TABELA LARGA** quando uma tabela renderizada ultrapassa a largura útil em sua auditoria final. Isso não substitui inspeção visual do PDF nem auditoria de semântica tabular.

---

# VIII — VISUAIS, IMAGENS, FAC-SÍMILES E MATERIALIDADE

## 29. Categoria ≠ formato do asset

A classificação funcional permanece a do sistema editorial:

| Categoria | Natureza | Regra de preservação |
|---|---|---|
| **Visual para HTML** | Representação construída para tornar uma relação perceptível. | Preservar relações, núcleos representacionais e legibilidade; pode ser HTML/CSS, SVG ou raster conforme a função. |
| **Imagem para HTML** | Imagem preexistente incorporada como objeto, contexto ou evidência. | Preservar o que fundamenta a análise e a proveniência. |
| **Fac-símile para HTML** | Reprodução fiel de documento em que materialidade é parte do objeto. | Conservar disposição, texto, escala e elementos relevantes à inferência. |
| **Organização editorial** | Arranjo tipográfico e espacial sem recurso representacional autônomo. | Não criar um asset independente quando tipografia, tabela ou espaço já resolvem a função. |

A infraestrutura conhece contêineres, escalas e contratos de renderização; **não escolhe a categoria epistemológica de um recurso por sua extensão `.png`, `.jpg` ou `.svg`**.

## 30. Interface genérica de figura

O CSS da Base possui `.visual`, `.visual img`, `.visual > svg` e `.visual figcaption`, estabelecendo limites externos, alinhamento e tratamento de legenda. As apostilas podem usar subclasses locais como `visual-topic`, `documentary-image` ou outras soluções particulares.

`figure` não indica por si só que um conteúdo é um Visual construído. Seu estatuto depende da origem e da função; `figcaption` não substitui a proveniência quando essa informação é necessária.

## 31. SVG e suas limitações

SVG é adequado quando relações geométricas, nós, agrupamentos e conexões precisam conservar nitidez e proporção. Exigir `viewBox` coerente, texto legível, largura adequada e ausência de recortes. **SVG não é obrigatório para todo Visual**; HTML/CSS estruturado pode representar melhor algumas configurações concretas.

O paginador não deve reposicionar retângulos, linhas, setas, textos ou nós internos de um SVG para ganhar espaço. Deve preservar a geometria ou emitir diagnóstico para uma decisão de nível superior.

Em SVG inline, controlar quando necessário rótulos, descrições e classes locais. SVG externo deve continuar disponível offline. Sua eventual incorporação como imagem não dispensa verificar contraste e acessibilidade.

## 32. Imagens raster e fac-símiles

A regra é escala proporcional, sem crop automático de material documental. Imagem ou fac-símile que não couber com legibilidade suficiente exige solução explícita no nível apropriado: nova disposição, outro recorte documentado, outra página ou reavaliação do recurso — nunca redução silenciosa abaixo do mínimo funcional.

O CSS da Base aplica `max-width: 100%` e `height: auto` a imagens e SVGs diretos no contêiner `.visual`. Esses estilos mostram o tratamento genérico existente; **não comprovam um subsistema de `MEDIA-FIT` com aferição automática de escala mínima**.

## 33. Cenas didáticas criadas e evidência documental

Elementos visuais construídos — inclusive com IA — podem servir para contraste, hipóteses e exercícios. Não se tornam fotografias documentais ou dados empíricos pela aparência realista. Exigir rotulagem e enunciados que não confundam representação construída, ocorrência registrada e inferência autorizada.

---

# IX — SEMÂNTICA, OUTLINE, ID E ACESSIBILIDADE

## 34. Hierarquia de leitura, título visual e navegação

`h1`–`h6`, elementos de abertura editorial (`.part-opening`, `.section-opening`) e running context não são sinônimos. A hierarquia DOM deve refletir o conteúdo realmente existente, sem forçar três Partes ou um número obrigatório de Exercícios.

A Base contém `.outline-root` e estilos que permitem tratar determinados headings de modo visualmente integrado à abertura. A presença de `.outline-root` **não comprova, por si, a existência de bookmarks corretos no PDF final**.

## 35. Bookmarks e limites da evidência

A V1.0 previa verificação dos bookmarks do Chromium, e as regras HTML/CSS V3.0 exigem sua inspeção. O mecanismo observado gera páginas e controla IDs, mas **não constitui uma implementação explícita de árvore de bookmarks**. Assim, o contrato de outline permanece **dependente de teste do PDF no engine efetivamente utilizado**.

Recomendação de auditoria: verificar ordem, níveis, nomes, destinos e ausência de entradas artificiais de abertura ou de Gabarito. Não confundir o texto visível do heading com o seu destino no índice do PDF.

## 36. Acessibilidade e degradação

A fonte HTML deve conter idioma do documento, texto alternativo quando pertinente, relações semânticas adequadas e ordem de leitura consistente. A divisão física não deve tornar o material incompreensível em leitura linear.

**Pendência técnica explícita:** o CSS oculta a fonte (`.source-content { display: none; }`) enquanto o JavaScript gera páginas e remove o contêiner original. Em cenário sem JavaScript ou com falha de paginação, isso pode inviabilizar a exposição do conteúdo. É necessário testar um modo de falha/degradação e o comportamento assistivo antes de proclamar conformidade de acessibilidade universal. Esse ponto não autoriza reescrever automaticamente apostilas congeladas.

---

# X — ASSETS, CAMINHOS E PORTABILIDADE

## 37. Independência de rede

O produto HTML deve poder carregar seus recursos oficiais sem CDN, imagem remota indispensável, stylesheet temporária ou script na rede. O fato de PDF já ter sido gerado não garante o funcionamento offline do HTML.

## 38. Caminhos relativos como contrato

O caminho de recurso deve ser resolúvel a partir do arquivo HTML e de uma estrutura de projeto ou pacote explicitamente versionada. **Caminhos absolutos de máquina não são portáveis.**

Nos HTMLs publicados dos Tópicos 1.1 e 1.2, os vínculos para `Plano_Linguistico_Base_V2.1.css` e `Paginador_Plano_V1.1.js` aparecem como caminhos absolutos de ambiente local (`/Users/.../Documents/...`). Isso representa **não conformidade do requisito de portabilidade**; não implica, isoladamente, que os PDFs existentes estejam visualmente corrompidos.

Exemplo **ilustrativo** de links relativos para um HTML em `macroestrutura-1/topico-1-2/`, supondo a árvore atual dos repositórios:

```html
<link rel="stylesheet" href="../../ferramentas/base/Plano_Linguistico_Base_V2.1.css">
<link rel="stylesheet" href="Plano_Linguistico_Topico_1.2.css">
<script src="../../ferramentas/base/Paginador_Plano_V1.1.js"></script>
```

O exemplo não é uma alteração realizada nem uma garantia de funcionamento de todo o pacote. Ele exige verificação de todos os `src`/`href`, arquivos locais, espaços/acentos e condições do gerador de PDF.

## 39. Integridade dos assets

O paginador possui auditoria de imagens `img` não carregadas (`complete` falso ou `naturalWidth === 0`). Outros recursos, como fontes e SVG externo, requerem verificações adicionais conforme seu papel. Não interpretar a auditoria de `img` como verificador universal de assets.

Original de corpus, derivado editorial e reprodução documental têm proveniências distintas; seus detalhes bibliográficos e permissões de reprodução pertencem ao Mapa do Corpus e às regras documentais aplicáveis, não à lógica de paginação.

---

# XI — DIAGNÓSTICOS, ESTADOS DE PRONTIDÃO E PDF

## 40. Diagnósticos já localizados no Paginador V1.1

O código registra problemas e pode marcar elementos/páginas com `.debug-problem`, `.page--overflow-warning` e atributos `data-pagination-problem` / `data-problem`. Casos localizados:

- estrutura ausente;
- falha de split;
- unidade maior que uma página;
- tabela não fragmentável;
- tabela larga;
- overflow de página;
- imagem não carregada;
- ID duplicado;
- grupo de continuidade impossível de manter inteiro, como aviso.

Esses são **diagnósticos implementados**, não uma lista comprovadamente exaustiva de todos os problemas que podem ocorrer.

## 41. `ready` não equivale a aprovação

A implementação assinala:

- `data-pagination-ready="true"` ao fim do fluxo de paginação mesmo quando houve problemas registrados;
- `data-pagination-ready="error"` quando ocorre exceção capturada;
- `data-pagination-problems="error"` ou `"warning"` quando problemas foram sinalizados.

Logo, **não basta consultar somente `data-pagination-ready="true"` para aprovar a geração**.

Para o **contrato de autorização do PDF**, recomenda-se verificar conjuntamente:

1. paginação concluída sem exceção;
2. ausência de `data-pagination-problems="error"`;
3. inspeção consciente de eventuais `warning`;
4. carregamento de assets essenciais e disponibilidade de fontes;
5. integridade do documento paginado e dimensões A4;
6. posterior auditoria do PDF gerado.

Esses requisitos são **critério normativo proposto pela V1.2**. A existência de um arquivo `.bat` gerador não demonstra que todas essas verificações já estejam implementadas. A integração real do gerador deve ser examinada numa auditoria específica.

## 42. Erros bloqueantes e avisos

| Categoria | Exemplos | Consequência |
|---|---|---|
| **ERROR** | conteúdo perdido, overflow substantivo, mídia essencial ausente, ID duplicado relevante, impossibilidade de paginação, tabela não fragmentável que excede a folha | Não aprovar como produto final. |
| **WARNING** | grupo preferencial quebrado de forma controlada, situação que exige inspeção de legibilidade ou contexto | Revisão obrigatória; sua gravidade depende do caso. |
| **INFO** | estado de execução ou apoio à depuração sem defeito detectado | Não bloqueia por si só. |

A implementação usa `console.error` e `console.warn`, além de contadores internos; **não foi localizado um protocolo público completo de mensagens `INFO`**. A tabela acima define uma classificação desejável de severidade, não inventaria uma API já implementada.

## 43. PDF como superfície final de verificação

O resultado oficial deve ser validado no próprio PDF, não somente no navegador. Examinar, conforme aplicável:

- A4, capa, margens, cabeçalho, rodapé e numeração;
- páginas vazias indevidas, cortes, clipping, overflow e objetos muito reduzidos;
- ordem de leitura, fragmentação e repetição legítima de `thead`;
- enunciados, alternativas, respostas e gabaritos íntegros;
- materialidade de fac-símiles e legibilidade de imagens/diagramas;
- IPA, diacríticos, caracteres de outras línguas e fonte incorporada/substituída;
- links, IDs, outline e bookmarks;
- correspondência entre HTML de origem, páginas geradas e conteúdo aprovado.

A verificação técnica da forma não substitui a auditoria conceitual e prática. Uma página visualmente perfeita pode conter texto incorreto ou representação enganosa; o PDF não pode corrigir tais problemas diretamente.

---

# XII — EXTENSÕES, TESTES E VERSIONAMENTO

## 44. Componentes locais e promoção

Um recurso nasce no escopo de seu tópico e utiliza a infraestrutura sem redefini-la. Pode ser considerado para promoção quando reaparece de maneira funcionalmente equivalente em diferentes unidades, com interfaces estáveis, testes reais e ganho de manutenção. Não promover estética local nem semântica de um fenômeno particular por conveniência.

A implementação genérica não deve antecipar árvore sintática, mapa dialetal, glosa ou representação acústica sem demanda curricular concreta. Esses recursos precisam herdar regras de tamanho, legibilidade, isolamento e impressão quando forem desenvolvidos.

## 45. Testes mínimos de consolidação

A V1.2 recomenda um **conjunto enxuto, mas reprodutível**, capaz de testar:

| Cenário | Evidência exigida |
|---|---|
| Texto curto e longo | Ordem, integridade e continuidade do conteúdo. |
| Tópico sem Bloco e com Bloco | Hierarquia, contexto e títulos compatíveis. |
| `data-keep-count` e `.keep-with-next` | Continuidade normal e caso em que grupo excede página vazia. |
| `data-split="children"` | Primeiro filho deslocado para nova folha; outros filhos continuam corretamente. |
| Item indivisível maior que A4 útil | Erro explícito e ausência de perda silenciosa. |
| Tabela longa segura e tabela com `rowspan` | Divisão correta no primeiro caso e falha controlada no segundo. |
| Documento multimodal | Imagem, fac-símile, SVG, HTML/CSS composto e respectivas legendas. |
| Falha de recurso | `img` inexistente e stylesheet/script indisponível. |
| Repertório linguístico | IPA, diacríticos, Unicode e fallback. |
| Portabilidade | Abrir HTML em cópia do projeto localizada noutro diretório, sem depender de caminhos da máquina original. |
| Navegação | IDs únicos, bookmarks e ordem de leitura no PDF. |
| Ready com erros | O pipeline não confunde conclusão com aprovação. |
| Reprocessamento | Uma segunda paginação não duplica conteúdo, IDs ou páginas. |

Um teste é considerado **validado** apenas se o resultado e as condições forem registrados. A simples previsão deste quadro não prova que os testes já ocorreram.

## 46. Versionamento independente

| Mudança | Camada a versionar | Não alterar automaticamente |
|---|---|---|
| Ajuste CSS específico | CSS ou produto do tópico | Base e Paginador. |
| Novo componente local | Tópico | Base global. |
| Promoção de componente comprovado | Base/catálogo pertinente | Arquitetura curricular. |
| Mudança global de tokens ou geometria | Base e contratos afetados | Texto Teórico e Prático congelados. |
| Correção isolada de paginação | Paginador | Base, se a integração for idêntica. |
| Mudança de contrato entre fonte, Base e paginador | Arquitetura Técnica e implementações afetadas | Apostilas antigas sem justificativa específica. |
| Revisão do corpus, edição ou direitos | Mapa do Corpus / documentação da fonte | Paginador e Base. |

A versão desta especificação não acompanha mecanicamente a numeração da Base, do Paginador ou do Registro Canônico.

## 47. Congelamento documental e homologação técnica são decisões distintas

A **aprovação documental** encerra a revisão desta especificação e permite adotá-la como referência para a próxima produção. Requer: (a) contratos descritos sem contradições substantivas conhecidas; (b) interfaces efetivamente identificadas; (c) divergências e limitações registradas; (d) regras vigentes respeitadas; (e) aprovação expressa do conteúdo. **Não presume execução de testes que ainda não ocorreram.**

A **homologação técnica** das capacidades da Base, do Paginador e do pipeline de PDF exige, adicionalmente:

1. testes proporcionais a cada contrato declarado como validado;
2. evidências reprodutíveis de comportamento em HTML e PDF;
3. tratamento das não conformidades conhecidas no escopo avaliado, especialmente portabilidade;
4. ausência de defeitos bloqueantes nos casos que sustentam a aprovação;
5. autorização expressa para qualquer alteração e publicação dos artefatos.

Portanto, o congelamento da **Arquitetura Técnica V1.2 como documento** não implica que a infraestrutura inteira esteja homologada. A matriz seguinte permanece parte normativa do registro e não deve ter pendências convertidas em validações por mero ato editorial.
---

# XIII — MATRIZ DE CORRESPONDÊNCIA E CONFORMIDADE

**Como ler:** “I/A” registra o que foi **localizado** no código/produtos; “verificação” registra o que ainda é necessário para declarar validação técnica. A matriz não deve converter uma observação estática em certificação de funcionamento.

| ID | Contrato / subsistema | Evidência concreta observada | Situação nesta V1.2 | Verificação ou ação necessária |
|---|---|---|---|---|
| C01 | A4 e `.page` | Tokens 210 × 297 mm; `@page`; CSS da Base | **I/A** | Conferir dimensões nos PDFs e escala do gerador. |
| C02 | Fonte contínua e páginas físicas | `#source-content`, `.source-section`, `.page--generated` | **I/A** | Testar falhas de JS e leitura assistiva. |
| C03 | Contexto do cabeçalho | `data-context` e `.header-context` no código | **I/A** | Validar textos longos e mudanças de contexto. |
| C04 | Tokens genéricos / tema | `theme--ling`, `--primary` etc. | **I/A; V1.0 divergente** | Substituir exemplos candidatos de prefixo `--ling-*` na documentação; não duplicar tokens. |
| C05 | Capa e páginas internas | `.page--cover`, `.page--generated` | **I/A** | Verificar contagem, numeração e papel do rodapé. |
| C06 | Preferências de agrupamento | `data-keep-count`, `.keep-with-next` | **I/A** | Testar grupos que cabem e que excedem folha vazia. |
| C07 | Unidades indivisíveis | `.atomic-group` | **I/A** | Testar imagem e elemento maior que área útil. |
| C08 | Divisão por filhos | `data-split="children"`, função `splitChildren` | **I/A** | Reproduzir regressão que motivou V1.1 e casos extremos. |
| C09 | Divisão textual arbitrária | Não localizada função de corte genérico por linha/palavra | **D** | Não anunciar como implementada; especificar apenas quando necessária. |
| C10 | Fragmentação tabular | `tableBlueprint`, `splitTableAcrossPages` | **I** | Testar vários `tbody`, `thead`, `tfoot` e longos. |
| C11 | Limite de `rowspan` | Código rejeita `rowspan > 1` para splitter seguro | **I** | Confirmar erro sem corrupção nem perda. |
| C12 | Diagnóstico de overflow | `pageFits`, `auditRenderedPages` | **I** | Inspecionar falsos negativos e clipping interno. |
| C13 | Diagnóstico de assets raster | `auditAssets` verifica `img` | **I** | Expandir preflight para todos os assets essenciais. |
| C14 | ID duplicado | `auditDuplicateIds` | **I** | Testar âncoras e referências após fragmentação. |
| C15 | Estados de prontidão | `data-pagination-ready` / `data-pagination-problems` | **I; contrato de aprovação D** | Fazer o pipeline exigir ausência de erros bloqueantes. |
| C16 | Figures e legendas | `.visual` e `.visual figcaption` | **I/A** | Verificar imagens, fac-símiles, contraste e escala. |
| C17 | Escala mínima de mídia | CSS proporcional; nenhum limiar geral verificado | **P** | Não presumir verificação automática de legibilidade. |
| C18 | SVG / HTML/CSS como visuais | Exemplos na Base e Tópico 1.2 | **I/A** | Validar geometria e ordem semiótica em A4. |
| C19 | IPA e símbolos | `.ipa`, `.symbol`, `--font-ipa` | **I; V D** | Teste real de cobertura e posicionamento. |
| C20 | Bookmarks/outline | `.outline-root` e headings presentes | **P** | Validar índice e destinos no PDF. |
| C21 | Portabilidade offline | Paths absolutos nos HTMLs dos tópicos | **NC** | Substituir por caminhos relativos e executar teste fora da máquina original. |
| C22 | Imagens quebradas | Auditoria de `naturalWidth`/`complete` | **I** | Distinguir erro de asset de falha de CSS/script/fonte. |
| C23 | Regeneração de páginas | `clearGeneratedPages`, `restoreSource`, `paginate()` | **I; V D** | Teste específico de repetição. |
| C24 | Páginas vazias | `removeEmptyGeneratedPages` | **I** | Confirmar que não mascara perda de conteúdo. |
| C25 | PDF final | Arquivos PDF dos Tópicos 1.1 e 1.2 no repositório | **A** | Auditoria visual e técnica do produto é prova distinta. |
| C26 | Separação de camadas | Base CSS, Paginador JS, CSS local | **I/A** | Auditar overrides locais que afetem o núcleo. |
| C27 | Fallback sem JavaScript | Fonte ocultada por CSS; JS necessário para páginas | **D / risco identificado** | Verificar apresentação alternativa e acessibilidade. |

**Síntese da matriz:** o núcleo de paginação, geometria, classes e sinalização existe e já foi aplicado a produtos reais. A versão documental anterior contém exemplos técnicos superados, e a portabilidade dos HTMLs publicados apresenta divergência concreta. Demais capacidades amplas — especialmente acesso assistivo, IPA, bookmarks, casos extremos de tabelas e escala mínima — requerem testes antes de receber o estado **V**.

---

# XIV — PENDÊNCIAS E REGRAS DE TRANSIÇÃO

## 48. Pendências que não devem ser apagadas por declaração documental

**P1 — Portabilidade.** HTML dos Tópicos 1.1 e 1.2 com `href`/`src` absolutos para a Base e o Paginador. Correção futura deve ser autorizada, testada e distinguida de reabertura conceitual.

**P2 — Status de artefatos.** Cabeçalho do CSS da Base V2.1 ainda se apresenta como “candidata à validação multimodal — migração do tópico pendente”, apesar de o Registro e o STATUS declararem a Base canônica. Harmonização documental exige controle de versão e não deve modificar o CSS sem aprovação.

**P3 — Prontidão do PDF.** Confrontar o gerador real com `data-pagination-ready` e `data-pagination-problems`. Sem essa conferência, não afirmar que erros registrados bloqueiam automaticamente o PDF.

**P4 — Cobertura de testes.** IPA, tabelas extremas, bookmarks, falha de script e comportamento assistivo ainda carecem de evidência dirigida.

**P5 — Publicação e vigência no GitHub.** A V1.2 foi aceita como documento definitivo nesta conversa, mas sua incorporação ao repositório ainda exige autorização específica. Até a publicação autorizada, a V1.0 permanece como versão registrada no GitHub.

## 49. Critério de migração documental

Após autorização expressa de publicação, a V1.2 poderá ser incorporada ao diretório `regras/` como novo Documento 03, preservando a V1.0 em histórico ou versão antiga conforme decisão editorial. **O congelamento do documento não autoriza, por si só, correções na Base, no Paginador ou nas apostilas**.

Não existe necessidade demonstrada de uma V2.0 da Arquitetura Técnica: ela seria proporcional apenas a mudança incompatível de contratos nucleares, não à atualização de exemplos, nomes, maturidade ou evidências.

---

# ANEXO A — QUADRO DE ALTERAÇÕES EM RELAÇÃO À V1.0

| Ponto da V1.0 | Decisão nesta V1.2 | Natureza |
|---|---|---|
| Base e Paginador futuros | Identificação da Base V2.1 e do Paginador V1.1 existentes | Atualização factual |
| Tokens candidatos `--ling-*` | Contrato de tokens genéricos em `theme--ling` | Conciliação com implementação e Registro Canônico |
| `data-running-context` como exemplo | `data-context` como interface identificada | Correção de interface documental |
| Políticas abstratas de quebra | Descrição precisa das classes e atributos implementados | Consolidação técnica |
| Split de texto longo | Não presumir implementação de divisão arbitrária | Redução de alegação não comprovada |
| TABLE-SPLIT genérico | Condições reais de fragmentação e rejeição de `rowspan` | Especificação de limite |
| MEDIA-FIT previsto | CSS proporcional identificado; limiar mínimo geral não comprovado | Separação entre previsão e evidência |
| Readiness genérico | Distinção entre `ready` e problemas reportados | Correção de contrato de validação |
| Assets locais como princípio | Registrar caminhos absolutos não conformes nas apostilas | Pendência operacional |
| Bookmarks previstos | Verificação de PDF ainda necessária | Limite de maturidade |
| Testes futuros abstratos | Matriz C01–C27 e suíte de testes proposta | Auditabilidade |
| Congelamento técnico condicionado | Manter condição de aprovação, teste e autorização | Governança |

---

# ANEXO B — MAPA DE FONTES CONSULTADAS

**Normas e registros:**

- `regras/03_Arquitetura_Tecnica_HTML_CSS_Plano_Linguistico_V1.0.md` — fonte estrutural principal desta revisão;
- `regras/01_Arquitetura_e_Taxonomia_Canonica_Sistema_Editorial_Plano_Linguistico_V1.0.md` — autoridade arquitetônica e taxonômica;
- `regras/02_Regras_Gerais_HTML_CSS_Plano_Linguistico_V3.0.md` — conformidade editorial;
- `regras/01_Contrato_de_Producao_de_Apostilas_Linguisticas_V1.0.md` — processo de produção;
- `00_Registro_Canonico_Sistema_Editorial_Linguistico_V1.1.md` — versão definitiva local aprovada quanto ao conteúdo, não presumida publicada no GitHub.

**Implementações e produtos:**

- `ferramentas/base/Plano_Linguistico_Base_V2.1.html`;
- `ferramentas/base/Plano_Linguistico_Base_V2.1.css`;
- `ferramentas/base/Paginador_Plano_V1.1.js`;
- `macroestrutura-1/topico-1-1/Plano_Linguistico_Topico_1.1.html`;
- `macroestrutura-1/topico-1-2/Plano_Linguistico_Topico_1.2.html`;
- `macroestrutura-1/topico-1-2/Plano_Linguistico_Topico_1.2.css`;
- PDFs existentes das duas apostilas, **identificados na árvore do repositório, não revalidados visualmente nesta revisão**.

**Método da atualização:** confronto documental e inspeção estática dos arquivos acessíveis no GitHub. Não foram executados testes automatizados nem regenerados PDFs nesta etapa. A V1.2 é, por isso, **especificação documental definitiva com limites de validação explicitados**, e não certificado de conformidade da implementação.

---

> **PRINCÍPIO FINAL:** a arquitetura técnica serve para tornar previsível a passagem de conteúdo aprovado a páginas auditáveis. A infraestrutura deve ser suficientemente estável para ser herdada, suficientemente explícita para ser testada e suficientemente limitada para não substituir o raciocínio linguístico ou a decisão editorial.

**FIM — ARQUITETURA TÉCNICA HTML/CSS DO PLANO LINGUÍSTICO · V1.2 · DEFINITIVA COMO ESPECIFICAÇÃO DOCUMENTAL**
