# Plano de Estudo Linguístico e da Língua Portuguesa

Projeto de estudo progressivo da linguagem e da língua portuguesa, articulando **estrutura, sentido e uso**. O objetivo é compreender fenômenos linguísticos, analisar textos e práticas de linguagem, justificar interpretações com evidências e transferir o conhecimento para situações novas.

O Plano combina uma organização curricular com um método de elaboração das apostilas. ENEM e Fatec são referências para aplicações e calibração de atividades, mas não determinam sozinhos o currículo.

## Plano de referência — V4.0

O **Plano V4.0** apresenta o currículo, seus fundamentos e o método de estudo. É o documento-mestre do projeto, **não** uma apostila de um tópico.

- [Ler o Plano V4.0 (PDF)](referencias/Plano_Linguistico_V4.0.pdf)
- [Consultar o Texto-Mestre (Markdown)](referencias/base/Texto_Mestre_Plano_Linguistico_V4.0.md)
- [Abrir a edição HTML](referencias/Plano_Linguistico_V4.0.html) e [seu CSS](referencias/Plano_Linguistico_V4.0.css)
- [Consultar o gerador da edição V4.0](referencias/produzir.py)

### Currículo

O percurso organiza **32 tópicos em oito macroestruturas**:

| Macroestrutura | Tópicos |
| --- | ---: |
| 1. Fundamentos da Linguagem e da Comunicação | 4 |
| 2. Sons, Escrita e Formação das Palavras | 3 |
| 3. Morfologia em Uso | 4 |
| 4. Sintaxe e Relações Gramaticais | 5 |
| 5. Semântica, Pragmática e Discurso | 5 |
| 6. Variação, Norma e Adequação | 3 |
| 7. Textualidade, Gêneros e Multimodalidade | 4 |
| 8. Leitura, Interpretação e Argumentação | 4 |
| **Total** | **32** |

A sequência é progressiva, não rígida: conceitos podem retornar em outras escalas de análise, desde que cada retomada acrescente precisão ou capacidade de aplicação.

## Apostilas disponíveis

| Tópico | Conteúdo | Materiais |
| --- | --- | --- |
| **1.1** | Linguagem e Comunicação | [PDF](macroestrutura-1/topico-1-1/Plano_Linguistico_Topico_1.1.pdf) · [HTML](macroestrutura-1/topico-1-1/Plano_Linguistico_Topico_1.1.html) · [Fontes](macroestrutura-1/topico-1-1/fontes/) |
| **1.2** | Linguagem Verbal, Não Verbal e Multimodal | [PDF](macroestrutura-1/topico-1-2/Plano_Linguistico_Topico_1.2.pdf) · [HTML](macroestrutura-1/topico-1-2/Plano_Linguistico_Topico_1.2.html) · [Fontes](macroestrutura-1/topico-1-2/fontes/) |

**Próxima unidade curricular:** Tópico **1.3 — Signo Linguístico**, com a relação significante–significado e a distinção entre língua e fala em seu enquadramento saussuriano. Não há, por enquanto, uma pasta desse tópico na árvore principal do repositório.

## Método de produção

As unidades são planejadas para construir compreensão e depois transformá-la em capacidades observáveis:

1. **Arquitetura da unidade:** delimita fenômeno, pergunta central, conhecimentos prévios, objetivos e fronteiras.
2. **Texto Teórico:** desenvolve conceitos, exemplos, evidências e representações necessários à compreensão.
3. **Passagem à prática:** identifica o que já foi ensinado e quais capacidades podem ser legitimamente exigidas.
4. **Texto Prático:** propõe exercícios e gabarito comentado; recursos adicionais são usados apenas quando têm função didática.
5. **Materialização editorial:** organiza HTML/CSS, recursos locais, paginação e PDF sem reescrever o conteúdo.
6. **Auditoria:** verifica fidelidade textual, rigor conceitual, pertinência das atividades e qualidade do PDF efetivo.

A regra geral é **preservar por padrão, adaptar quando necessário e inovar somente quando o conteúdo justificar**. A documentação e os recursos devem ser proporcionais às exigências reais de cada unidade.

## Organização do repositório

```text
referencias/          Plano V4.0: Texto-Mestre, HTML, CSS, PDF e gerador
macroestrutura-1/    Apostilas dos tópicos 1.1 e 1.2, fontes e imagens
ferramentas/base/     Base editorial V2.1 e Paginador V1.1
regras/              Normas curriculares, pedagógicas e editoriais
regras/versoes-antigas/  Histórico de documentos substituídos
```

### Regras e infraestrutura

Documentos de referência versionados em [regras/](regras/):

- [Estruturas Canônicas V2.3](regras/Estruturas_Canonicas_Plano_Linguistico_V2.3_Definitiva.md) — planejamento de tópicos, blocos e partes.
- [Regras do Texto Teórico V2.3](regras/Regras_Gerais_Construcao_Texto_Teorico_Linguistico_V2.3_Definitiva.md) — construção conceitual.
- [Regras do Texto Prático V2.3](regras/Regras_Gerais_Construcao_Texto_Pratico_Linguistico_V2.3_Definitiva.md) — exercícios, progressão e gabarito.
- [Arquitetura e Taxonomia Canônica V1.0](regras/01_Arquitetura_e_Taxonomia_Canonica_Sistema_Editorial_Plano_Linguistico_V1.0.md) — organização do sistema editorial.
- [Registro Canônico V1.1](regras/02_Registro_Canonico_Sistema_Editorial_Linguistico_V1.1.md) — identificação das versões e responsabilidades.
- [Contrato de Produção V1.0](regras/03_Contrato_de_Producao_de_Apostilas_Linguisticas_V1.0.md) — dependências entre as etapas.
- [Arquitetura Técnica HTML/CSS V1.2](regras/04_Arquitetura_Tecnica_HTML_CSS_Plano_Linguistico_V1.2_Definitiva.md) e [Regras HTML/CSS V3.0](regras/05_Regras_Gerais_HTML_CSS_Plano_Linguistico_V3.0.md) — contratos de materialização.

A infraestrutura reutilizável está em [ferramentas/base/](ferramentas/base/), incluindo **Plano_Linguistico_Base_V2.1** e **Paginador_Plano_V1.1.js**. Os documentos específicos de cada unidade devem herdar esses contratos sem modificar a infraestrutura compartilhada por conveniência local.

## Consulta e manutenção

Para compreender o propósito e o currículo, comece pelo [Plano V4.0](referencias/Plano_Linguistico_V4.0.pdf). Para conferir redação e realizar trabalho autoral, consulte o [Texto-Mestre em Markdown](referencias/base/Texto_Mestre_Plano_Linguistico_V4.0.md). Para examinar a apresentação final e possíveis problemas de paginação, consulte os PDFs e respectivos HTML/CSS.

Correções devem ocorrer na camada responsável pelo problema: conteúdo, arquitetura, prática ou materialização. Documentos já estabilizados não precisam ser reabertos por melhorias apenas ornamentais; alterações substantivas exigem justificativa e verificação de seus efeitos.
