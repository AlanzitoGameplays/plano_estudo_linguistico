# Arquitetura Técnica HTML/CSS do Plano Linguístico
## Plano de Estudo Linguístico e da Língua Portuguesa — Versão 1.0

**Documento 03 do Sistema Editorial do Plano Linguístico**  
**Status:** Versão 1.0 candidata para validação técnica  
**Escopo:** especificação técnica da infraestrutura herdável responsável por transformar conteúdo semântico congelado em páginas A4, impressão e PDF sem redefinir currículo, conteúdo, pedagogia ou semântica.

Este documento materializa tecnicamente as decisões já congeladas pela **Arquitetura e Taxonomia Canônica do Sistema Editorial — V1.0** e pelas **Regras Gerais para Criação de HTML/CSS — V3.0**. Sua função é responder:

> **Como deve ser estruturada a infraestrutura HTML/CSS/JS capaz de materializar as apostilas do Plano Linguístico em páginas A4 e PDF sem redefinir conteúdo, currículo, pedagogia ou semântica?**

Ele não é a Base HTML/CSS/JS, não é código-fonte completo, não é template de apostila, não é Catálogo de Componentes, não é Fluxo de Produção e não é política completa de Corpus/Assets. Ele especifica os **contratos técnicos** que esses artefatos deverão respeitar.

A relação fundamental é:

```text
DOCUMENTO 03
= ESPECIFICAÇÃO TÉCNICA

BASE
= IMPLEMENTAÇÃO DA ESPECIFICAÇÃO
```

A primeira versão deste documento permanece candidata porque parte de suas decisões só poderá ser confirmada por implementação e teste real.

> **ARQUITETURA TECNICAMENTE PLAUSÍVEL ≠ ARQUITETURA TECNICAMENTE VALIDADA**

---

# REGRA TÉCNICA SUPERIOR

> **A fonte contém o significado; a infraestrutura o materializa; a página o acomoda; nenhuma dessas camadas deve reescrever aquilo que recebeu.**

Dessa regra decorrem sete invariantes:

1. **fonte semântica ≠ página física**;
2. o paginador distribui e fragmenta segundo contratos, mas não reescreve conteúdo;
3. a infraestrutura conhece comportamento estrutural, não temática linguística;
4. componentes utilizam a infraestrutura e não substituem seu núcleo;
5. extensão local não deve exigir alteração do núcleo quando um contrato existente é suficiente;
6. tela, impressão e PDF são modos do mesmo documento, não conteúdos concorrentes;
7. a Base implementa esta arquitetura e não a redefine silenciosamente.

Para distinguir o que já pode funcionar como contrato do que ainda precisa de prova empírica, este documento utiliza dois rótulos:

- **Contrato estável:** princípio ou interface cuja função já decorre diretamente dos Documentos 01 e 02 e pode orientar a Base desde a primeira implementação;
- **Decisão candidata:** nome, valor, detalhe de DOM ou mecanismo tecnicamente proposto que deve ser validado na Base e no piloto antes de eventual congelamento.

---

# I — STATUS, ESCOPO E FRONTEIRAS TÉCNICAS

## 1. O Documento 03 define contratos de infraestrutura

**Contrato estável.** A Arquitetura Técnica descreve o chassi técnico que uma apostila deve poder herdar antes da introdução de soluções particulares de conteúdo.

Pertencem ao seu escopo:

- fonte semântica;
- documento e páginas físicas;
- modelo A4;
- sistema de tokens;
- tipografia e repertório linguístico;
- cabeçalho, rodapé e contexto de página;
- paginação;
- atomicidade, divisão e continuidade;
- infraestrutura genérica de tabelas;
- figuras, imagens, fac-símiles e SVG;
- outline e bookmarks;
- contrato de extensões;
- assets locais;
- screen, print e PDF;
- diagnósticos técnicos.

## 2. O Documento 03 não substitui documentos superiores nem especializados

Não pertencem a este documento:

- arquitetura curricular;
- decisão sobre Tópicos, Blocos ou Partes;
- reescrita de Texto Teórico ou Texto Prático;
- critérios pedagógicos de apoio ou autonomia;
- catálogo de componentes opcionais;
- sequência operacional completa da produção;
- instruções de agente;
- política documental completa de fontes, licenças, manifestos, originais e derivados;
- implementação integral da Base.

Quando uma questão exigir uma dessas decisões, deve retornar ao documento competente.

## 3. Os Documentos 01 e 02 possuem precedência sobre esta arquitetura

**Contrato estável.** O Documento 01 governa classificação sistêmica e alcance. O Documento 02 governa conformidade normativa. O Documento 03 só pode escolher uma solução técnica dentro dessas fronteiras.

Se uma implementação tecnicamente conveniente contrariar uma regra superior, a implementação está errada; não a regra superior.

## 4. A Base futura é subordinada ao Documento 03

A Base poderá conter HTML, CSS e JavaScript executáveis, mas deverá ser interpretada como implementação versionada desta especificação. Como materialização candidata, o sistema poderá adotar arquivos separados equivalentes a:

```text
Plano_Linguistico_Base_V1.0.html
Plano_Linguistico_Base_V1.0.css
Paginador_Linguistico_V1.0.js
```

Os nomes ainda não constituem contrato congelado, mas a separação entre fonte estrutural, aparência e mecanismo de paginação favorece manutenção e auditoria.

Uma refatoração interna é permitida quando conserva os contratos. Uma mudança que altere um contrato deve retornar primeiro à Arquitetura Técnica.

## 5. O Catálogo futuro deve depender da infraestrutura, não o inverso

O Documento 04 poderá definir componentes opcionais. Esses componentes deverão usar:

- tokens;
- contratos de fluxo;
- contratos de quebra;
- página;
- impressão;
- diagnósticos;

sem obrigar o núcleo a conhecer a semântica particular de cada componente.

## 6. A implementação deve permanecer extensível sem se tornar genérica em excesso

A infraestrutura precisa aceitar fenômenos futuros — por exemplo, árvore sintática, mapa dialetal, glosa interlinear ou transcrição especializada — sem antecipar sua forma concreta.

Extensibilidade significa **oferecer pontos de integração estáveis**, não construir previamente um componente para toda possibilidade imaginável.

---

# II — MODELO ARQUITETÔNICO GERAL

## 7. A arquitetura técnica possui uma cadeia de materialização única

**Contrato estável.** A relação central é:

```text
CONTEÚDO-FONTE SEMÂNTICO
        ↓
ESTRUTURA DOCUMENTAL
        ↓
INFRAESTRUTURA EDITORIAL
        ↓
PAGINADOR
        ↓
PÁGINAS FÍSICAS A4
        ↓
MODO DE IMPRESSÃO
        ↓
PDF OFICIAL
```

Nenhuma etapa posterior ganha autorização para reinterpretar silenciosamente a anterior.

## 8. HTML, CSS, JavaScript e assets possuem responsabilidades diferentes

A divisão técnica deve permanecer:

```text
HTML
→ conteúdo, semântica, ordem, metadados e referências

CSS
→ aparência, tipografia, geometria, estados de tela/impressão e contratos visuais

JS
→ paginação, medição, fragmentação autorizada, contexto e diagnósticos

ASSETS
→ arquivos materiais locais utilizados pelo documento

PDF
→ resultado renderizado para validação e estudo
```

A fronteira não proíbe cooperação entre camadas; impede que uma delas absorva responsabilidades que tornam o sistema opaco.

## 9. A infraestrutura deve ser independente da temática específica

O paginador não deve possuir regras como:

- “se for sintaxe, faça X”;
- “se for fonologia, faça Y”;
- “se for corpus literário, faça Z”.

Deve conhecer contratos como:

- atômico;
- continuável;
- divisível por filhos;
- tabela divisível;
- mídia com restrição de escala;
- unidade com contexto de continuação.

## 10. O resultado renderizado é evidência técnica

Código elegante não constitui prova de correção. A arquitetura deve ser avaliada por:

- ausência de clipping e overflow;
- legibilidade;
- estabilidade de paginação;
- fidelidade semântica;
- suporte a repertório linguístico;
- funcionamento offline;
- compatibilidade com print/PDF;
- manutenção razoável.

O PDF revela defeitos de implementação, mas não redefine sozinho currículo ou conteúdo.

## 11. O núcleo deve falhar de modo explícito

Quando não conseguir materializar uma unidade sem violar seus contratos, a infraestrutura deve emitir diagnóstico em vez de:

- cortar silenciosamente;
- reduzir indefinidamente;
- apagar trecho;
- entrar em loop;
- transbordar sem aviso;
- alterar estrutura.

Falha detectável é preferível a saída aparentemente concluída e semanticamente corrompida.

---

# III — FONTE SEMÂNTICA E PÁGINA FÍSICA

## 12. A fonte semântica é a origem autoral do conteúdo interno

**Contrato estável.** O conteúdo interno deve existir primeiro como uma árvore semântica contínua, independente das páginas em que terminará.

A fonte contém:

- Tópico;
- Bloco, quando existir;
- Parte;
- seções e subseções reais;
- prosa;
- listas;
- tabelas;
- figuras;
- corpus;
- exercícios;
- gabaritos;
- metadados técnicos necessários à materialização.

Ela não deve ser repartida manualmente em páginas apenas para “fazer caber”.

## 13. A página física é uma representação gerada

Uma página interna existe porque o paginador distribuiu conteúdo dentro da área útil A4.

A página pode possuir:

- cabeçalho;
- corpo;
- rodapé;
- número físico;
- contexto herdado.

Esses elementos não transformam a página em unidade curricular.

## 14. SOURCE, PAGE e PAGINATOR são papéis distintos

A arquitetura deve preservar:

```text
SOURCE
= estrutura lógica e semântica

PAGE
= estrutura física de impressão

PAGINATOR
= mecanismo de materialização entre ambas
```

Confundir essas funções tende a produzir HTML manualmente paginado, duplicação de conteúdo ou estrutura conceitual subordinada ao tamanho da folha.

## 15. A fonte não deve depender de um número predeterminado de páginas

Nenhuma Parte ou seção deve carregar pressuposto como:

- “ocupa exatamente duas páginas”;
- “o exemplo começa na página 7”;
- “o Gabarito precisa terminar na página 18”.

Numeração e posição física são saídas da materialização.

## 16. Deve existir apenas uma cópia semanticamente ativa do conteúdo paginado

**Contrato estável.** Após a paginação, a implementação não pode manter simultaneamente duas cópias ativas com IDs duplicados, navegação concorrente ou leitura assistiva redundante.

A Base poderá implementar isso por movimentação de nós, árvore de trabalho, remoção/destacamento da fonte ou estratégia equivalente. O mecanismo exato é **decisão candidata**.

## 17. A fonte deve permitir fronteiras contextuais maiores

**Decisão candidata.** Adotar um conceito equivalente a `.source-section` para marcar uma unidade que:

- inicia novo contexto de running header;
- delimita uma sequência paginável;
- pode, por padrão, iniciar nova página interna quando o contexto físico realmente muda.

Essa unidade não deve ser criada para toda subseção pequena.

## 18. O nome `.source-content` é candidato; o contrato é estável

**Decisão candidata.** Uma estrutura semelhante a:

```html
<main class="document">
  <section class="page page--cover">...</section>
  <section id="source-content" class="source-content">
    <section class="source-section" data-running-context="...">
      ...conteúdo semântico...
    </section>
  </section>
</main>
```

é adequada como skeleton inicial.

Os nomes podem ser refinados pela Base. O contrato que não pode desaparecer é:

> **fonte semântica contínua → materialização em páginas físicas**.

---

# IV — MODELO DE DOCUMENTO E ÁRVORE ESTRUTURAL

## 19. A infraestrutura deve representar as duas arquiteturas curriculares válidas

**Contrato estável.** Deve ser possível materializar tanto:

```text
Documento
└── Tópico
    └── Parte
```

quanto:

```text
Documento
└── Tópico
    └── Bloco
        └── Parte
```

sem código diferente para cada caso.

## 20. Bloco é estruturalmente opcional

Nenhum seletor, função de paginação ou gerador de contexto pode exigir que toda Parte possua um Bloco ancestral.

Quando Bloco não existir, contexto, heading e navegação devem continuar funcionando normalmente.

## 21. A quantidade de Partes é variável

A infraestrutura não deve pressupor:

- três Partes;
- três seções internas;
- uma sequência fixa Teoria → Quiz → Exercícios → Gabarito.

A árvore deve refletir o conteúdo congelado efetivamente recebido.

## 22. Unidades internas são semanticamente abertas

A infraestrutura precisa aceitar, quando existirem:

- `section`;
- `article`;
- `figure`;
- `blockquote`;
- `table`;
- listas;
- elementos de exercício;
- estruturas de corpus;
- outros contêineres semanticamente justificáveis.

Ela não deve transformar essa lista em template obrigatório.

## 23. Heading, título visual e contexto de página são eixos diferentes

Um heading participa da hierarquia semântica. Um título visual participa da composição. Um contexto de página informa o running header.

Uma mesma unidade pode alimentar os três, mas a arquitetura não deve pressupor identidade automática entre eles.

## 24. A árvore semântica deve permanecer legível sem CSS especializado

Mesmo antes da aplicação visual completa, a ordem de leitura e a hierarquia básica precisam ser compreensíveis no DOM.

Um componente futuro pode sofisticar a representação; não deve ser necessário para reconstruir o significado básico do documento.

---

# V — SISTEMA DE PÁGINAS A4

## 25. A página física A4 possui dimensões estáveis

**Contrato estável.** A folha oficial é A4:

```text
largura  = 210 mm
altura   = 297 mm
orientação-base = retrato
```

Mudança de orientação não faz parte da infraestrutura V1.0 e exigirá decisão técnica posterior se surgir caso real que a justifique.

## 26. A margem do navegador deve ser neutralizada quando a própria página controla a geometria

**Contrato estável.** No modelo de páginas físicas, o `@page` deve usar A4 sem margem externa adicional que duplique o padding da `.page` ou equivalente.

Referência arquitetônica:

```css
@page {
  size: A4;
  margin: 0;
}
```

A área útil passa a ser controlada pela própria folha renderizada.

## 27. A página interna deve possuir três zonas técnicas

**Contrato estável.** Páginas internas precisam de:

```text
PAGE
├── HEADER
├── CONTENT
└── FOOTER
```

A capa é uma variante física A4, mas não utiliza obrigatoriamente o mesmo grid interno.

## 28. A área útil deve ser mensurável

O corpo da página precisa possuir largura e altura determináveis em runtime para que o paginador possa decidir se uma unidade cabe, deve ser movida ou pode ser dividida.

Regras de `min-width`, `min-height` e `box-sizing` devem impedir medições falsas produzidas por flex/grid.

## 29. Geometria interna inicial permanece candidata

A tradição do Plano Linguístico utilizou margens efetivas próximas de:

```text
topo    ≈ 18 mm
direita ≈ 17 mm
base    ≈ 19 mm
esquerda≈ 20 mm
```

No modelo com header/footer dentro da folha, não se deve copiar esses números simultaneamente para `@page` e para o padding da `.page`.

**Decisão candidata para a Base:** utilizar padding físico inicial próximo de:

```text
topo    ≈ 12 mm
direita ≈ 17 mm
base    ≈ 7 mm
esquerda≈ 20 mm
```

mais as alturas e separações próprias de header/content/footer, buscando reproduzir área óptica comparável ao legado. Esses valores só poderão ser estabilizados depois do piloto.

## 30. A capa ocupa a folha A4 integral como variante própria

A capa deve:

- preservar `210 × 297 mm`;
- não receber running header/footer interno;
- compartilhar tokens e identidade do documento;
- permanecer separada do conteúdo paginado.

Sua composição específica não pertence a esta arquitetura além desses contratos.

## 31. Overflow horizontal e vertical não podem ser mascarados

A página não deve utilizar `overflow: hidden` como solução genérica para defeitos de conteúdo.

Se algo ultrapassa a área física, a infraestrutura precisa:

- reacomodar segundo contrato;
- dividir quando autorizado;
- reduzir quando a política do recurso permitir;
- ou emitir diagnóstico.

---

# VI — SISTEMA DE TOKENS

## 32. Tokens representam decisões sistêmicas

**Contrato estável.** Cor, tipografia, espaçamento e geometria recorrentes devem ser referenciados por tokens, evitando valores espalhados por componentes e tópicos.

Tokens não devem representar semântica temática como “cor-da-sintaxe” ou “cor-do-Tolkien”.

## 33. O namespace linguístico deve ser explícito

**Decisão candidata.** Preferir nomes com prefixo `--ling-` para reduzir colisões e tornar origem sistêmica reconhecível.

Famílias mínimas:

```text
--ling-color-*
--ling-font-*
--ling-space-*
--ling-page-*
--ling-line-*
```

## 34. A arquitetura deve possuir tokens cromáticos sem fixar paleta temática por tópico

Conjunto funcional mínimo candidato:

```text
--ling-color-primary
--ling-color-primary-soft
--ling-color-secondary
--ling-color-accent
--ling-color-paper
--ling-color-surface
--ling-color-text
--ling-color-muted
--ling-color-rule
--ling-color-screen
```

Os valores devem permanecer dentro da identidade já normatizada: vinho/bordô profundo, tons quentes editoriais, papel claro levemente quente, grafite, cinzas quentes e acentos terrosos moderados.

**Decisão candidata:** os hexadecimais finais devem ser fechados na Base candidata a partir de precedentes aprovados e do piloto; este documento não inventa uma paleta numérica sem validação visual.

## 35. A arquitetura deve possuir tokens tipográficos por função

Conjunto mínimo candidato:

```text
--ling-font-heading
--ling-font-body
--ling-font-symbol
--ling-font-ipa
```

Uma única pilha pode cumprir mais de um papel quando possuir cobertura adequada; a existência dos tokens mantém a possibilidade de separá-los sem reescrever componentes.

## 36. A escala de espaçamento deve ser pequena e coerente

**Decisão candidata.** Uma escala como:

```text
--ling-space-xs
--ling-space-sm
--ling-space-md
--ling-space-lg
--ling-space-xl
```

é suficiente para a infraestrutura inicial.

Valores exatos precisam ser calibrados no piloto. Não criar um token para cada margem histórica.

## 37. Tokens de página devem concentrar geometria física

Conjunto mínimo:

```text
--ling-page-width
--ling-page-height
--ling-page-pad-top
--ling-page-pad-right
--ling-page-pad-bottom
--ling-page-pad-left
--ling-page-content-gap-top
--ling-page-content-gap-bottom
```

Largura e altura A4 são estáveis. Paddings e gaps permanecem candidatos até validação.

## 38. Componentes não devem redefinir tokens universais localmente

Um componente pode derivar valores locais de tokens globais. Não pode mudar o significado de `--ling-color-primary`, `--ling-font-body` ou geometria da página dentro de seu próprio escopo.

Se precisar de valor próprio recorrente, o Catálogo futuro decidirá se um token de componente é justificável.

---

# VII — TIPOGRAFIA E REPERTÓRIO LINGUÍSTICO

## 39. A tipografia técnica deve ser escolhida por cobertura e estabilidade, não apenas estética

Uma fonte só pode participar da Base se renderizar de modo confiável o repertório que lhe for atribuído em tela e PDF.

Devem ser testados, conforme função:

- português;
- acentos;
- aspas;
- travessões;
- itálico e negrito;
- IPA;
- diacríticos combinantes;
- símbolos linguísticos;
- caracteres de corpora multilíngues previsíveis.

## 40. A família editorial de títulos permanece sans-serif

**Decisão candidata baseada no legado:**

```text
Arial
→ Liberation Sans
→ DejaVu Sans
→ sans-serif
```

A pilha exata deverá ser validada na Base no ambiente oficial.

## 41. A família discursiva permanece serifada

**Decisão candidata baseada no legado:**

```text
Georgia
→ Times New Roman
→ Liberation Serif
→ serif
```

O corpo principal deve priorizar leitura longa e impressão estável.

## 42. IPA e símbolos precisam de fallback próprio e testado

A pilha deve priorizar cobertura real. Referência candidata baseada no legado:

```text
Charis SIL
→ Doulos SIL
→ Noto Sans
→ DejaVu Sans
→ sans-serif
```

A presença de um nome na pilha não autoriza dependência exclusiva de uma fonte rara ou não instalada. O fallback efetivamente disponível no ambiente oficial precisa cobrir os glyphs utilizados. A Base não pode depender de serviço externo ou arquivo não garantido no ambiente de renderização.

## 43. Convenções notacionais precisam sobreviver à tipografia

Barras `/ /`, colchetes `[ ]`, glosas, separadores morfológicos, diacríticos, índices e outras marcas não podem ser substituídos, normalizados ou reinterpretados por regras tipográficas automáticas.

A arquitetura deve evitar smart replacements que mudem notação analítica.

## 44. Line-height e tamanhos devem ser definidos por função

A Base deverá possuir valores distintos, quando necessário, para:

- corpo discursivo;
- labels;
- cabeçalhos/rodapés;
- corpus ou citações;
- IPA/notação;
- títulos.

Os valores exatos permanecem candidatos até o piloto. O núcleo deve evitar escalas excessivamente pequenas para “fazer caber”.

## 45. Órfãs e viúvas são controles auxiliares, não mecanismo de paginação

Propriedades como `orphans`, `widows` e `break-inside` podem melhorar impressão, mas não substituem o paginador quando páginas são contêineres físicos explícitos.

A lógica de dependência semântica deve ser expressa pelos contratos de quebra.

## 46. A Base deve possuir teste de glyphs críticos

**Decisão candidata.** O conjunto de validação deve incluir uma amostra com:

- vogais e consoantes IPA frequentes;
- diacríticos sobrepostos;
- caracteres combinantes;
- aspas e travessões;
- símbolos de segmentação;
- caracteres de português.

Glyph ausente ou substituído deve gerar falha técnica antes do congelamento da Base.

---

# VIII — CABEÇALHO, RODAPÉ E CONTEXTO DINÂMICO

## 47. O cabeçalho localiza o leitor dentro do conteúdo paginado

**Contrato estável.** Páginas internas devem poder exibir:

- identidade institucional constante;
- contexto corrente derivado da fonte semântica.

Referência textual institucional:

> **PLANO DE ESTUDO — LÍNGUA PORTUGUESA**

O contexto pode representar, conforme o conteúdo:

- Texto Teórico · Parte I;
- Texto Prático · Exercícios;
- Gabarito Comentado;
- Bloco e Parte, quando necessários.

## 48. O contexto deve ser declarado na fonte e consumido pela página

**Contrato estável.** A página não deve inferir contexto por aparência ou posição absoluta.

**Decisão candidata:** utilizar atributo equivalente a:

```html
data-running-context="TEXTO TEÓRICO · PARTE I"
```

em fronteira contextual maior.

O paginador copia esse valor para o header das páginas geradas até que novo contexto seja iniciado.

## 49. Mudança de running context deve possuir fronteira técnica explícita

Uma unidade que muda o running header deve ser reconhecível antes da paginação.

**Decisão candidata:** `.source-section` funciona como fronteira de contexto e, por padrão, inicia nova página interna. Subdivisões menores permanecem dentro da mesma seção paginável.

Esse comportamento deverá ser testado contra desperdício excessivo de espaço no piloto.

## 50. O rodapé identifica o documento e a página física

**Contrato estável.** O rodapé deve possuir infraestrutura para:

- identidade resumida da apostila à esquerda;
- número físico à direita.

O número é gerado pela materialização e não deve ser escrito manualmente na fonte.

## 51. Capa e páginas internas seguem contratos distintos

A capa não participa da lógica de running header/footer. A primeira página interna deve receber a numeração física correta de acordo com a política da Base.

**Decisão candidata:** preservar a capa como folha 1 e iniciar a primeira página interna em 2, seguindo precedentes maduros. Validar no piloto antes de congelar.

## 52. Contexto longo precisa falhar de modo legível

O header pode limitar largura e usar truncamento técnico como proteção, mas o truncamento não pode esconder o único identificador necessário à localização.

Se o contexto recorrente for excessivamente longo, a solução correta é melhorar o rótulo editorial em sua camada competente, não reduzir o cabeçalho indefinidamente.

---

# IX — SISTEMA DE PAGINAÇÃO

## 53. O paginador recebe unidades semânticas e produz páginas físicas

**Contrato estável.** Seu ciclo abstrato é:

```text
LER FONTE
↓
ABRIR CONTEXTO
↓
CRIAR PÁGINA
↓
SELECIONAR PRÓXIMA UNIDADE
↓
TENTAR INSERIR
↓
MEDIR
↓
CABE?
├── SIM → confirmar inserção
└── NÃO
    ↓
    PODE SER DIVIDIDA?
    ├── NÃO → mover para nova página
    └── SIM → fragmentar segundo contrato
```

## 54. O paginador pode transformar distribuição física, não conteúdo

Pode:

- criar páginas;
- mover nós;
- produzir fragmentos autorizados;
- repetir estrutura técnica permitida;
- acrescentar marcador de continuação previsto;
- atualizar contexto físico;
- medir;
- emitir diagnóstico.

Não pode:

- editar texto;
- resumir;
- corrigir;
- reordenar conceitualmente;
- remover conteúdo;
- mudar alternativa;
- mudar Gabarito;
- converter corpus por conta própria;
- alterar crédito ou fonte.

## 55. A ordem do DOM semântico deve ser preservada

Fragmentação não pode mudar a ordem de leitura. A sequência no PDF deve continuar correspondente à sequência da fonte, salvo elementos técnicos recorrentes como header, footer ou indicação de continuação.

## 56. Cada tentativa de paginação precisa progredir ou falhar explicitamente

**Contrato estável contra loop.** Em cada iteração, o mecanismo deve realizar pelo menos uma destas ações:

1. consumir uma unidade inteira;
2. consumir um fragmento não vazio e reduzir o conteúdo restante;
3. mover a unidade para uma nova página e então consumi-la;
4. emitir diagnóstico bloqueante.

O paginador não pode repetir indefinidamente o mesmo nó inalterado em página vazia.

## 57. Medição deve ocorrer na geometria real de destino

A unidade precisa ser medida com:

- largura real da área útil;
- fontes carregadas;
- estilos de print relevantes;
- dimensões reais de mídia;
- conteúdo já presente na página.

Medição fora do contexto físico pode produzir decisões falsas.

## 58. Fontes e assets precisam estar prontos antes da paginação final

**Decisão candidata.** A execução final deve aguardar, no mínimo:

- `document.fonts.ready` ou mecanismo equivalente;
- dimensões conhecidas das imagens essenciais;
- SVGs disponíveis.

Paginar antes disso pode alterar alturas depois da distribuição e quebrar o PDF.

## 59. O paginador deve trabalhar com políticas declaradas ou inferências estruturais limitadas

A infraestrutura pode reconhecer semanticamente elementos padrão seguros, como `table` ou `figure`, mas não deve adivinhar a pedagogia de um componente por seu nome visual.

Comportamentos especiais devem ser declarados por contrato de quebra ou pelo adaptador técnico do componente.

## 60. A geração não deve deixar fonte e páginas concorrendo visualmente

Ao final da materialização, apenas as páginas devem participar do fluxo renderizado oficial.

A fonte original pode ser removida, tornada inerte ou mantida fora da árvore ativa conforme a estratégia da Base, desde que:

- IDs permaneçam únicos;
- leitores assistivos não recebam duplicação;
- bookmarks não apontem para cópia errada;
- impressão contenha apenas a versão materializada.

---

# X — CONTRATOS DE QUEBRA, ATOMICIDADE E CONTINUIDADE

## 61. O comportamento de quebra deve ser independente da semântica temática

**Contrato estável.** O núcleo deve oferecer políticas gerais. Um futuro componente declara qual política utiliza; o paginador não precisa saber “o que ele significa” linguisticamente.

## 62. Política ATÔMICA

Uma unidade atômica deve permanecer inteira quando couber em uma página vazia.

Se não couber no restante da página, deve ser movida para a próxima.

Se não couber nem em uma página vazia, não deve entrar em loop. Deve:

- recorrer a contrato de mídia, se aplicável;
- recorrer a splitter autorizado, se a unidade tiver um;
- ou emitir diagnóstico `oversize-unsplittable` ou equivalente.

## 63. Política KEEP-WITH-NEXT

Uma unidade pode declarar dependência mínima do elemento seguinte.

Casos típicos:

- título + primeiro bloco;
- rótulo + objeto imediato;
- pequena introdução + tabela/figura.

O contrato deve considerar o conjunto na medição antes de decidir a quebra.

## 64. Política KEEP-GROUP

Pequenos grupos semanticamente inseparáveis podem ser tratados como conjunto atômico até um limite razoável.

**Decisão candidata:** a sintaxe concreta pode utilizar atributo equivalente a `data-keep-group` ou contêiner técnico próprio.

Um grupo maior que a página deve ser reclassificado ou gerar diagnóstico; “estar em grupo” não torna conteúdo infinito indivisível.

## 65. Política CONTINUÁVEL

Uma unidade continuável pode atravessar páginas preservando ordem interna.

O splitter deve preferir fronteiras semânticas já existentes:

1. filhos de bloco;
2. parágrafos;
3. itens de lista;
4. turnos de transcrição;
5. outras subunidades explicitamente autorizadas.

Não dividir por caracteres arbitrários quando existe fronteira semântica melhor.

## 66. Política CONTINUÁVEL COM CONTEXTO

Unidades extensas podem exigir identificação nas páginas seguintes.

A infraestrutura deve permitir marcador gerado como:

> *Corpus — continuação*

ou outra identificação fornecida por metadado.

O texto desse marcador não deve ser inventado pelo paginador a partir de semântica temática; deve vir do contrato ou do componente. A infraestrutura pode oferecer metadados para indicar se identificação, fonte ou crédito devem reaparecer em fragmentos, mas não deve escolher essa política documental automaticamente; a regra concreta pertencerá ao componente e, quando existir, ao Documento 07.

## 67. Política DIVISÍVEL POR FILHOS

Um contêiner pode autorizar que seus filhos sejam distribuídos entre páginas enquanto o invólucro visual é reconstruído por fragmento.

O fragmentador deve preservar:

- ordem;
- classes necessárias;
- atributos relevantes;
- contexto;
- marcação de primeiro/meio/último fragmento quando necessária.

Não deve duplicar IDs.

## 68. Folha textual individual maior que a página exige fallback controlado

Um único parágrafo ou bloco textual excepcionalmente maior que a área útil não pode tornar o documento impossível de paginar.

**Decisão candidata:** a Base deve prever um splitter textual de último recurso capaz de fragmentar em fronteira de linha/palavra por medição de `Range` ou mecanismo equivalente, preservando markup inline e sem reescrever texto.

Até que esse mecanismo seja comprovado, um `oversize-text-leaf` deve ser diagnóstico bloqueante, não overflow silencioso.

## 69. Política TABLE-SPLIT possui contrato próprio

Tabelas multipágina não devem usar o splitter genérico de parágrafos. Seu contrato é definido na Seção XI.

## 70. Política MEDIA-FIT possui contrato próprio

Imagens, fac-símiles e SVGs precisam preservar proporção e legibilidade. Seu comportamento é definido nas Seções XII e XIII.

## 71. A sintaxe concreta dos contratos permanece candidata

Possíveis atributos para a Base incluem:

```text
data-break-policy="atomic|flow|contextual|table|media"
data-keep-with-next
data-continuation-label="..."
data-min-scale="..."
```

Esses nomes não estão congelados. O que é estável são os **comportamentos** que a implementação precisa representar.

---

# XI — TABELAS

## 72. Tabelas usam HTML tabular real

**Contrato estável.** Dados realmente tabulares devem utilizar, quando pertinentes:

- `table`;
- `caption`;
- `thead`;
- `tbody`;
- `tr`;
- `th`;
- `td`;
- `scope`.

Grid visual genérico não substitui semântica tabular.

## 73. Tabela curta deve permanecer inteira quando isso melhora a leitura

Uma tabela que cabe confortavelmente em página vazia pode ser tratada como atômica ou `break-inside: avoid` conforme a Base.

Quando não cabe no restante da página, deve preferir nova página antes de ser fragmentada sem necessidade.

## 74. Tabela longa pode ser dividida por linhas

**Contrato estável.** O splitter de tabela deve:

- manter o mesmo conjunto de colunas;
- repetir `thead` em cada fragmento posterior;
- preservar ordem das linhas;
- não dividir uma linha comum entre páginas por padrão;
- conservar alinhamento e largura das colunas;
- identificar fragmentos quando necessário;
- manter `caption` principal no primeiro fragmento e permitir rótulo técnico de continuação nos seguintes quando o componente exigir.

## 75. Cabeçalho repetido é infraestrutura, não duplicação semântica do corpus

A repetição técnica do `thead` serve à leitura física e pode ser gerada pelo paginador.

Ela não deve criar IDs duplicados nem ser interpretada como segundo dado do conteúdo.

## 76. Rowspan e estruturas complexas exigem cautela

Uma célula com `rowspan` que atravessa o ponto de divisão não pode ser fragmentada por algoritmo genérico sem validação.

**Decisão candidata:** a V1.0 deve tratar tabelas com `rowspan` cruzando split como caso não suportado pelo splitter genérico e emitir diagnóstico para handler especializado ou revisão da representação.

## 77. Uma linha maior que a página é caso bloqueante do splitter genérico

Se uma única linha ultrapassar a altura útil, a infraestrutura não deve reduzi-la indefinidamente nem entrar em loop.

Ela deve emitir diagnóstico para solução especializada.

## 78. Largura excessiva deve ser detectada antes do PDF

Scroll horizontal em tela não é solução para tabela que falhará em A4.

O diagnóstico deve revelar:

- largura acima da área útil;
- colunas que não conseguem quebrar;
- palavras/strings não fragmentáveis;
- mídia interna maior que a célula.

A correção pode ser editorial ou de componente, mas não deve ser mascarada pelo núcleo.

---

# XII — FIGURAS, IMAGENS E FAC-SÍMILES

## 79. A infraestrutura deve suportar figura sem apagar a categoria do recurso

**Contrato estável.** Um contêiner técnico de figura pode acomodar:

- Visual construído;
- Imagem incorporada;
- Fac-símile.

O contêiner comum não transforma as três categorias em uma categoria epistemológica única.

## 80. Figura, legenda e crédito precisam permanecer semanticamente distinguíveis

A estrutura deve permitir:

```text
FIGURA
├── RECURSO
├── LEGENDA, se houver
└── CRÉDITO, se houver
```

Legenda contextualiza ou explica. Crédito registra procedência. A implementação pode agrupá-los visualmente, mas não deve confundir suas funções.

## 81. Mídia deve preservar proporção por padrão

Imagens e fac-símiles não devem ser esticados para preencher área.

O comportamento genérico deve utilizar escala proporcional dentro dos limites da página.

## 82. MEDIA-FIT precisa de escala mínima funcional

Uma mídia pode ser reduzida até o ponto em que continue cumprindo sua função.

**Decisão candidata:** o componente ou recurso poderá declarar `min-scale`, `min-width` ou metadado equivalente. O paginador tenta:

1. largura natural/ideal;
2. ajuste proporcional à largura disponível;
3. ajuste proporcional à altura de página vazia;
4. se a escala mínima funcional for violada, diagnóstico.

## 83. O núcleo não deve recortar automaticamente material documental

Fac-símile ou imagem-corpus não pode ser cortado pelo paginador apenas para caber.

Recorte ou criação de derivado é decisão documental/editorial autorizada, não mecanismo automático de paginação.

## 84. Mídia maior que uma página exige decisão explícita

A V1.0 não deve fatiar automaticamente uma imagem documental longa em duas páginas, pois isso pode alterar materialidade.

Quando um recurso único exceder a folha mesmo na escala mínima, emitir diagnóstico. O Documento 07 ou um componente especializado poderá autorizar derivado multipágina posteriormente.

## 85. A infraestrutura deve carregar assets por caminhos locais

Imagem, fac-símile e SVG externo usados no produto final devem resolver sem rede. URL remota pode existir como metadado documental futuro, não como dependência de renderização.

## 86. A mídia deve estar carregada antes da medição definitiva

Dimensões desconhecidas não podem ser tratadas como zero. O paginador deve aguardar recursos essenciais ou emitir falha de carregamento.

---

# XIII — VISUAIS E SVG

## 87. SVG é a representação preferencial quando geometria construída carrega significado

**Contrato estável.** Relações espaciais, setas, agrupamentos, diagramas e estruturas cuja nitidez precisa sobreviver à escala devem poder usar SVG.

Isso não obriga todo Visual a ser SVG; HTML estruturado ou tabela pode ser superior conforme a função.

## 88. Todo SVG deve possuir `viewBox` coerente

O `viewBox` deve expressar o espaço interno real e permitir escala proporcional sem clipping.

Largura e altura de apresentação devem ser controladas pelo contêiner, não por coordenadas físicas rígidas desconectadas da página.

## 89. Texto interno do SVG deve permanecer legível e semanticamente controlado

O Visual não deve depender de fonte remota. Labels precisam manter tamanho legível no PDF.

Quando o texto fizer parte importante da leitura, a implementação deve avaliar acessibilidade e possibilidade de exposição equivalente fora do SVG.

## 90. SVG inline e externo possuem usos diferentes

**Decisão candidata.** Preferir SVG inline quando:

- tokens CSS precisam estilizar diretamente o Visual;
- classes e estados internos são necessários;
- acessibilidade exige controle fino;
- o Visual é construído junto ao documento.

Preferir SVG externo quando:

- funciona como asset independente;
- não precisa de manipulação interna;
- deve permanecer isolado e reutilizável.

Ambas as formas devem funcionar offline e em print.

## 91. A infraestrutura não define componentes linguísticos específicos

Árvore sintática, waveform, mapa dialetal, diagrama discursivo ou esquema referencial podem futuramente usar SVG.

O Documento 03 apenas garante:

- área disponível;
- escala;
- tokens;
- print;
- contrato de quebra;
- diagnóstico de overflow.

## 92. Geometria do SVG não pode ser alterada pelo paginador para “resolver” conteúdo

O paginador pode dimensionar o Visual proporcionalmente segundo contrato. Não pode mover internamente nós, setas ou labels para fazê-lo caber.

---

# XIV — NAVEGAÇÃO, OUTLINE E BOOKMARKS

## 93. A hierarquia semântica é a fonte primária da navegação

**Contrato estável.** Headings devem representar a estrutura real do conteúdo. Bookmarks devem derivar de metadados ou headings autorizados, não de aparência visual arbitrária.

## 94. Heading HTML, título visual e bookmark PDF não são sinônimos

A infraestrutura deve permitir que:

- um heading não gere bookmark quando for subordinado demais;
- um rótulo visual não seja heading;
- um bookmark possua rótulo conciso diferente do texto visual, se explicitamente declarado.

## 95. A infraestrutura deve suportar as duas árvores curriculares

Exemplos válidos:

```text
Tópico
├── Texto Teórico
│   ├── Parte I
│   └── Parte II
└── Texto Prático
    ├── Exercícios
    └── Gabarito
```

ou, quando houver Blocos:

```text
Tópico
└── Bloco
    ├── Parte I
    └── Parte II
```

A árvore concreta vem do conteúdo, não da Base.

## 96. Bookmarks devem ser econômicos

A infraestrutura não deve gerar bookmark automaticamente para todo `h3`, toda figura ou todo exercício.

**Decisão candidata:** oferecer metadado explícito equivalente a `data-bookmark-level` ou classe de opt-in para unidades que realmente entram no outline do PDF.

## 97. IDs de navegação devem permanecer únicos após fragmentação

Quando uma unidade é dividida:

- o ID original deve permanecer em um ponto canônico, normalmente no primeiro fragmento;
- fragmentos posteriores recebem identificadores técnicos derivados quando necessários;
- nenhum ID deve ser duplicado.

## 98. A implementação de bookmarks no Chromium permanece candidata

O Documento 03 exige que o sistema possua uma estratégia verificável de outline/bookmarks, mas a forma exata depende do comportamento comprovado do engine oficial.

A Base deverá testar se headings nativos são suficientes ou se será necessário mecanismo complementar. Essa decisão só pode ser estabilizada após geração real de PDF.

---

# XV — CONTRATO DE COMPONENTES E EXTENSÕES

## 99. Componentes futuros devem se encaixar no núcleo por contrato

Todo componente deve:

- usar a largura útil da página;
- respeitar tokens;
- funcionar em screen e print;
- declarar comportamento de quebra quando necessário;
- permanecer offline;
- preservar semântica;
- não exigir alteração do paginador para reconhecer seu significado.

## 100. Componente não pode sobrescrever infraestrutura global

Um componente não deve redefinir localmente:

- `.page` ou equivalente;
- geometria A4;
- `@page`;
- header/footer globais;
- tokens universais;
- comportamento geral do documento.

Exceção exige extensão arquitetônica explícita.

## 101. Namespace de classes deve indicar pertencimento funcional sem amarrar tema

**Decisão candidata.** A Base e o Catálogo devem adotar convenção de nomes capaz de distinguir:

- infraestrutura;
- componente;
- estado;
- modificador local.

Não é necessário usar BEM estrito, mas classes como `red-box-2` ou nomes temáticos de um único tópico devem ser evitados.

## 102. JavaScript de componente não pode ser necessário para acessar conteúdo essencial

Interação pode existir futuramente em preview, mas o PDF precisa conter todo o conteúdo necessário.

Um componente não deve depender de clique, hover ou estado colapsado para materializar informação essencial.

## 103. Extensão local deve ser mínima e reversível

Uma necessidade específica pode acrescentar CSS, HTML ou adaptador técnico local. Essa extensão:

- não altera a Base;
- não se promove automaticamente;
- deve possuir escopo restrito;
- deve poder ser removida sem quebrar outras apostilas.

## 104. O núcleo deve oferecer hooks suficientes sem conhecer componentes futuros

Hooks adequados incluem:

- tokens;
- contratos de quebra;
- metadados de contexto;
- contêiner de largura;
- mídia local;
- diagnóstico;
- classes de estado técnico.

Não oferecer hooks sem caso funcional apenas para “completar um design system”.

---

# XVI — ASSETS E CAMINHOS LOCAIS

## 105. Todo asset necessário à renderização oficial deve ser local

**Contrato estável.** Não depender de:

- CDN;
- URL temporária;
- Google Fonts;
- imagem remota;
- script remoto;
- stylesheet remoto.

A apostila precisa continuar funcional offline.

## 106. Caminhos devem ser relativos ao artefato ou à estrutura versionada do projeto

A Base não deve depender de caminhos absolutos como:

```text
C:\Users\...
/home/user/...
```

A portabilidade exige caminhos relativos previsíveis.

## 107. A arquitetura deve permitir original e derivado sem definir a política documental completa

É tecnicamente necessário que o sistema possa referenciar:

- asset original preservado;
- derivado usado na apostila;
- SVG construído;
- imagem de prova;
- fac-símile.

A nomenclatura, manifesto, licença, URL e metadados detalhados pertencem ao Documento 07.

## 108. Asset ausente deve ser erro detectável

Uma referência quebrada não pode chegar silenciosamente ao PDF.

A validação técnica deve registrar, no mínimo:

- caminho ausente;
- falha de carregamento;
- dimensão zero;
- recurso essencial indisponível.

## 109. A Base não deve embutir assets temáticos de uma apostila

Assets universais só pertencem à Base quando fazem parte da própria infraestrutura ou identidade comum.

Corpus, imagens e diagramas de um tópico permanecem fora do núcleo.

---

# XVII — TELA, IMPRESSÃO E PDF

## 110. Screen, print e PDF são modos do mesmo documento

**Contrato estável.** A relação é:

```text
SCREEN
= modo de trabalho e leitura no navegador

PRINT
= modo físico de impressão

PDF
= produto oficial renderizado a partir do modo físico
```

Nenhum modo pode possuir conteúdo semântico exclusivo indispensável.

## 111. O modo de tela pode adicionar apenas infraestrutura de preview

Pode apresentar:

- fundo externo;
- sombra de página;
- espaço entre folhas;
- outlines de diagnóstico;
- labels técnicas de desenvolvimento.

Esses elementos não pertencem ao PDF.

## 112. O modo de impressão deve remover tudo o que é auxiliar

`@media print` ou mecanismo equivalente deve retirar:

- sombra;
- gap externo;
- fundo do ambiente;
- indicadores de diagnóstico;
- controles de desenvolvimento.

A geometria interna da folha deve permanecer estável.

## 113. `@page` deve representar A4 sem escala inesperada

**Contrato estável.** O pipeline oficial deve gerar em tamanho real, evitando opções de “fit to page” que reduzam o documento depois da paginação.

A Base candidata deve validar:

```css
@page {
  size: A4;
  margin: 0;
}
```

em conjunto com páginas físicas `210 × 297 mm`.

## 114. Cores de impressão devem ser preservadas de modo previsível

**Decisão candidata.** Utilizar `print-color-adjust: exact` e equivalente WebKit quando necessário, verificando se o Chromium oficial reproduz fundos, linhas e contrastes como esperado.

A legibilidade nunca deve depender de cor que o engine possa omitir.

## 115. Chromium é o engine primário candidato

O legado do projeto utiliza Chrome/Chromium para geração de PDF. A V1.0 deve tratá-lo como engine primário de validação.

Isso não autoriza usar comportamento não padronizado sem teste. Recursos críticos — bookmarks, quebras, cores, SVG e fontes — precisam ser verificados no engine real.

## 116. O PDF oficial é produto validado, não fonte de autoria

Correções de conteúdo não devem ser feitas diretamente no PDF. O PDF serve para detectar defeitos e confirmar a materialização da fonte.

---

# XVIII — DIAGNÓSTICOS, VALIDAÇÃO TÉCNICA E CONGELAMENTO

## 117. A infraestrutura deve possuir diagnóstico técnico explícito

**Contrato estável.** A Base deve ser capaz de tornar detectáveis, ao menos:

- overflow vertical;
- overflow horizontal;
- clipping;
- unidade maior que página;
- splitter sem progresso;
- asset ausente;
- mídia abaixo da escala mínima;
- tabela larga;
- linha de tabela impossível de dividir;
- heading órfão;
- página interna vazia indevida;
- fonte/glyph ausente;
- contexto de header ausente;
- ID duplicado;
- inconsistência de numeração.

## 118. Diagnósticos precisam ter severidade

**Decisão candidata.** Adotar pelo menos:

```text
ERROR
→ bloqueia aprovação

WARNING
→ exige inspeção consciente

INFO
→ auxilia desenvolvimento sem indicar defeito
```

O modo print não deve exibir essas marcações.

## 119. Erro de paginação não pode ser silenciado por overflow oculto

Se uma unidade não puder ser resolvida, a geração deve manter sinal suficiente para auditoria e impedir que o PDF seja considerado aprovado automaticamente.

## 120. A validação da Base precisa incluir fixture técnica diversificada

Antes do congelamento, deve existir um documento de teste ou conjunto equivalente contendo, no mínimo:

- prosa curta;
- prosa longa;
- Tópico → Partes;
- Tópico → Bloco → Partes;
- tabela curta;
- tabela multipágina;
- imagem;
- fac-símile;
- SVG;
- corpus longo;
- transcrição longa;
- questão externa;
- exercício objetivo;
- Gabarito extenso;
- IPA;
- diacríticos combinantes;
- Unicode especial;
- unidade atômica;
- unidade continuável;
- mídia próxima do limite de escala.

## 121. A validação precisa testar o caso “maior que uma página”

A arquitetura não pode ser aprovada apenas com unidades que cabem em uma folha.

O teste deve provar que:

- o paginador não entra em loop;
- conteúdo continuável se fragmenta;
- contexto é preservado;
- unidades não divisíveis falham explicitamente;
- nenhuma parte é perdida.

## 122. A validação de repertório linguístico é obrigatória

O PDF de teste deve verificar visualmente:

- IPA;
- diacríticos;
- barras e colchetes;
- glosas;
- separadores;
- caracteres multilíngues usados na fixture;
- itálicos e negritos.

## 123. A Arquitetura Técnica não deve ser congelada apenas por auditoria textual

Seu percurso mínimo é:

```text
DOCUMENTO 03 CANDIDATO
        ↓
AUDITORIA TÉCNICA
        ↓
BASE CANDIDATA
        ↓
FIXTURE + PILOTO REAL
        ↓
HTML/PDF
        ↓
PREFLIGHT
        ↓
CORREÇÕES NECESSÁRIAS
        ↓
REVALIDAÇÃO
        ↓
EVENTUAL CONGELAMENTO
```

## 124. O Tópico 1.1 é piloto adequado, mas não prova todos os casos futuros

O piloto deve validar o núcleo em material real. Ausência de IPA pesado, árvores sintáticas ou fac-símile complexo no Tópico 1.1 não autoriza concluir que esses componentes já estão resolvidos.

A arquitetura pode ser congelada quando seu **núcleo genérico** estiver comprovado e as futuras especializações puderem entrar por extensão sem reescrever esse núcleo.

## 125. Uma mudança de contrato após o piloto deve reabrir o Documento 03

Se a Base demonstrar que algum contrato é inviável — por exemplo, modelo de fragmentação, DOM, contexto ou token estrutural — a correção deve voltar a este documento antes de ser absorvida silenciosamente pelo código.

Microajustes de implementação que preservam contratos podem permanecer na Base.

---

# MATRIZ DE CONTRATOS

| Subsistema | Recebe | Deve preservar | Pode transformar | Não pode fazer |
|---|---|---|---|---|
| **Fonte semântica** | conteúdo congelado e metadados técnicos | ordem, hierarquia, texto, relações e estatutos | estruturar semanticamente o conteúdo já aprovado | paginar manualmente por conveniência; reescrever conteúdo |
| **Fronteira contextual** | unidade semântica maior + contexto | identidade da unidade e ordem | declarar running context e política de início de página | criar Bloco/Parte inexistente |
| **Paginador** | nós semânticos + contratos de quebra | ordem, conteúdo, IDs canônicos, contexto | criar páginas, mover, medir e fragmentar quando autorizado | resumir, corrigir, apagar, reordenar ou inventar semântica |
| **Splitter genérico** | unidade declarada como divisível | sequência interna e conteúdo | produzir fragmentos físicos | dividir arbitrariamente objeto não autorizado; duplicar IDs |
| **Splitter textual** | folha textual excepcionalmente longa | texto e markup inline | fragmentar em fronteira legal de linha/palavra | alterar caracteres ou pontuação |
| **Splitter de tabela** | tabela multipágina | colunas, ordem das linhas, thead, dados | criar fragmentos e repetir cabeçalho técnico | corromper rowspan; ocultar linha; alterar dados |
| **Página física** | unidades paginadas | legibilidade, ordem e contexto | acomodar fisicamente, numerar, mostrar header/footer | alterar currículo ou conteúdo |
| **Cabeçalho/rodapé** | metadados de contexto e documento | identidade documental | renderizar contexto e número físico | inferir nova estrutura curricular |
| **Componente** | função e conteúdo local | contratos globais e semântica | representação local autorizada | sobrescrever núcleo, tokens universais ou geometria A4 |
| **Mídia** | asset local + metadados | proporção, materialidade relevante e legibilidade | escala proporcional autorizada | recortar automaticamente corpus documental; baixar recurso remoto |
| **SVG** | visual construído | geometria e relações | escalar proporcionalmente | reposicionar conteúdo interno para resolver paginação |
| **Asset** | arquivo local | integridade funcional | conversão/derivado previamente autorizado | substituir conteúdo ou depender de URL temporária |
| **Modo screen** | páginas físicas | conteúdo completo | adicionar preview e diagnósticos | criar informação essencial exclusiva de tela |
| **Modo print** | páginas físicas | geometria e conteúdo | remover auxiliares de tela | alterar semântica ou ocultar conteúdo essencial |
| **PDF** | resultado renderizado | materialização final | nenhuma transformação conceitual | redefinir norma, currículo ou conteúdo |
| **Diagnóstico** | estado técnico da renderização | evidência do defeito | classificar e sinalizar | corrigir silenciosamente o conteúdo |

---

# NOTA FINAL DE ESCOPO

Esta Arquitetura Técnica constitui o **Documento 03** do Sistema Editorial do Plano Linguístico.

Sua posição permanece:

```text
DOCUMENTO 01
Arquitetura e Taxonomia
→ o que pertence ao sistema e em que nível

DOCUMENTO 02
Regras Gerais HTML/CSS
→ o que deve ser respeitado

DOCUMENTO 03
Arquitetura Técnica HTML/CSS
→ como a infraestrutura funciona

BASE HTML/CSS/JS
→ implementação executável desses contratos

DOCUMENTO 04
Catálogo de Componentes
→ soluções opcionais comprovadas que utilizam a infraestrutura
```

A arquitetura V1.0 permanece **candidata para validação técnica**. Seu próximo teste não é outra rodada abstrata de expansão, mas a construção de uma Base candidata capaz de demonstrar, em navegador e PDF, que os contratos aqui definidos realmente funcionam.

O princípio de encerramento é:

> **A fonte contém o significado; a infraestrutura o materializa; a página o acomoda; nenhuma dessas camadas deve reescrever aquilo que recebeu.**

---

**FIM — ARQUITETURA TÉCNICA HTML/CSS DO PLANO LINGUÍSTICO · VERSÃO 1.0 — CANDIDATA PARA VALIDAÇÃO TÉCNICA**
