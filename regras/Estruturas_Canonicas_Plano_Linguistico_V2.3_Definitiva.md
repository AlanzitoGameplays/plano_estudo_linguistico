# Estruturas Canônicas do Plano de Estudo Linguístico e da Língua Portuguesa

## Versão 2.3 — 2026

**Estado:** definitiva e congelada  
**Abrangência:** Estrutura do Tópico; Estrutura do Bloco e suas Partes; Estrutura das Partes.

---

# Princípio geral

As estruturas servem para decidir a arquitetura conceitual antes da redação. Elas não devem transformar-se em formulários rígidos nem em camadas burocráticas. Cada nível existe apenas quando realiza trabalho necessário.

Princípios comuns:

- mínima estrutura necessária;
- identidade, entrada, saída e fronteiras claras;
- profundidade proporcional à importância e à dificuldade;
- continuidade conceitual sem reensino automático;
- corpus selecionado por necessidade;
- recursos visuais, imagéticos, documentais e multimodais definidos por função;
- sinergia entre prosa e recursos;
- distinção entre função, representação, categoria do recurso e implementação;
- economia representacional;
- legibilidade na escala real da apostila;
- teoria e prática conectadas, mas não confundidas;
- unidade de produção determinada pela densidade e pela qualidade possível, não pelo máximo de conteúdo que cabe em um único pedido;
- congelamento encerra refinamento opcional, mas não impede correção necessária.

O princípio superior permanece:

> **a estrutura deve ser suficiente para controlar o raciocínio e simples o bastante para não competir com o conteúdo.**

---

# Princípio de decisão representacional

A arquitetura não deve começar pela tecnologia.

Aplicar a sequência:

> **FUNÇÃO → REGIME DE REPRESENTAÇÃO → CATEGORIA DO RECURSO → IMPLEMENTAÇÃO EDITORIAL**

Antes de prever um recurso, perguntar:

1. **O que precisa tornar-se perceptível?**
2. **Por que a prosa, sozinha, não realiza essa função com igual eficiência?**
3. **Que função representacional precisa ser cumprida?**
4. **Que regime de representação corresponde melhor à função?**
5. **Há necessidade de um recurso propriamente dito ou apenas de boa organização editorial?**
6. **Se houver recurso, qual categoria é adequada?**
7. **Ele é essencial ou complementar?**
8. **Qual é seu núcleo representacional?**
9. **Sua complexidade é compatível com a escala real de leitura?**
10. **Só então: como deverá ser materializado editorialmente?**

A arquitetura decide necessidade, função, regime, categoria, núcleo, fidelidade, materialidade e limites conceituais.

A etapa editorial e técnica decide a materialização concreta.

> **Visual para HTML não é sinônimo de SVG.**

> **Arquivo raster não é sinônimo de Imagem para HTML.**

O formato técnico do asset não determina, sozinho, sua categoria.

---

# Quatro níveis que não devem ser confundidos

## 1. Função cognitiva ou representacional

Pergunta:

> **O que a representação precisa realizar para o estudante?**

Pode, conforme o caso:

- abstrair;
- relacionar;
- comparar;
- tornar uma estrutura perceptível;
- mostrar uma situação;
- preservar materialidade;
- organizar informação;
- permitir análise;
- apoiar transformação;
- tornar contraste visível.

## 2. Regime de representação

Pergunta:

> **Como o conteúdo precisa ser apresentado?**

Pode ser predominantemente:

- verbal;
- simbólico;
- visual;
- espacial;
- multimodal;
- documental.

Os regimes podem combinar-se.

## 3. Categoria do recurso

Quando houver recurso propriamente dito, aplicar a taxonomia vigente:

### Visual para HTML

Representação construída.

Sua função pode ser tornar perceptível uma relação, estrutura, comparação, transformação, hierarquia, organização ou contraste.

### Imagem para HTML

Imagem preexistente incorporada porque sua configuração visual participa do objeto, da evidência ou do contexto necessário.

### Fac-símile para HTML

Reprodução suficientemente fiel de objeto cuja materialidade participa da análise.

A categoria não deve ser inferida apenas pelo formato técnico do arquivo.

## 4. Implementação editorial ou técnica

Pode envolver, conforme a etapa posterior:

- SVG;
- raster;
- HTML/CSS;
- tabela;
- grid;
- asset externo;
- outra solução adequada.

Essas decisões não pertencem primariamente às Estruturas Canônicas.

---

# Funções representacionais recorrentes

Antes de escolher a categoria do recurso, identificar sua função predominante.

## Abstrair e relacionar

Adequado quando é necessário tornar perceptível:

- estrutura;
- relação;
- oposição;
- hierarquia;
- sequência;
- dependência;
- transformação;
- organização conceitual.

Tende a favorecer representações esquemáticas.

## Mostrar e contrastar configurações concretas

Adequado quando participam da compreensão:

- gesto;
- posição;
- aparência;
- ambiente;
- objetos;
- simultaneidade;
- disposição concreta;
- relação espacial observável.

Nem toda comparação conceitual precisa tornar-se diagrama. Algumas dependem justamente de ver cenas ou configurações concretas.

## Preservar e documentar

Adequado quando a materialidade de um objeto real constitui parte do dado.

Pode ocorrer com:

- anúncios;
- manuscritos;
- páginas;
- cartazes;
- interfaces;
- documentos;
- inscrições;
- materiais históricos;
- composições multimodais.

Nesses casos, fidelidade documental tem prioridade.

## Organizar editorialmente

Adequado quando a necessidade é organizar:

- tabelas;
- caixas;
- listas;
- campos;
- comparações;
- colunas;
- hierarquias tipográficas;
- blocos de resposta.

Isso não exige automaticamente um recurso gráfico autônomo. HTML/CSS pode resolver diretamente a função.

---

# Núcleo representacional

Todo recurso essencial deve permitir completar:

> **Este recurso existe principalmente para tornar perceptível __________.**

Se a resposta exigir muitas funções independentes, considerar:

- simplificar;
- dividir;
- substituir a forma de representação;
- devolver parte do conteúdo à prosa;
- utilizar outro recurso;
- dispensar o recurso quando a organização editorial bastar.

O recurso não precisa representar tudo que é conceitualmente verdadeiro.

> **Omissão controlada pode ser condição de legibilidade.**

---

# Economia representacional

A representação deve conter apenas o necessário para cumprir sua função.

Evitar, quando produzirem sobrecarga sem ganho:

- excesso de caixas;
- excesso de nós;
- múltiplas hierarquias simultâneas;
- setas cruzadas;
- frases longas dentro de elementos gráficos;
- microtexto;
- redundância com a prosa;
- decoração que compete com a relação central.

Não existem quotas universais de elementos.

Aplicar o teste:

> **Se este elemento desaparecer, alguma função representacional necessária se perde?**

Se não, considerar sua remoção.

---

# Escala real de leitura

Todo recurso deve ser concebido para o espaço real em que será utilizado.

A arquitetura não define pixels, `viewBox`, resolução, CSS ou dimensões finais. Ela deve, porém, impedir que seja congelado um recurso cuja função dependa de condições incompatíveis com a página.

Perguntar:

- continuará legível no tamanho normal de leitura?
- depende de zoom?
- depende de microtexto?
- exige largura incompatível com a página?
- contém elementos demais para o espaço previsível?
- deveria ser dividido?
- outra representação faria o mesmo trabalho com menos sobrecarga?

> **Não projetar recursos como se dispusessem de espaço infinito.**

---

# Relação entre prosa e recurso

Preservar o princípio:

> **prosa prepara → recurso torna algo perceptível → prosa interpreta, qualifica e prossegue**

Esse movimento não é molde obrigatório, mas expressa a divisão de trabalho desejável.

A prosa pode carregar:

- condições;
- ressalvas;
- exceções;
- desenvolvimento argumentativo;
- limites;
- interpretações.

O recurso pode concentrar:

- relações;
- contrastes;
- estruturas;
- materialidade;
- configurações simultâneas.

Evitar prosa + recurso + prosa quando os três apenas repetem a mesma informação.

---

# I. Estrutura do Tópico

## Função

Definir a arquitetura macro do Tópico: o que ele estuda, de onde parte, onde precisa chegar, quais são suas fronteiras, que tipo de exposição exige e se sua organização interna necessita de Blocos ou pode seguir diretamente para Partes.

## Perguntas e princípios

1. **Qual é a identidade linguística do Tópico?**  
   Qual fenômeno, relação, problema ou objeto realmente o define?

2. **Qual é a pergunta central do Tópico?**  
   Que pergunta intelectual deve conduzir sua construção?

3. **Qual é sua função e importância curricular?**  
   Por que este conteúdo precisa existir? Ele é introdutório, estrutural, recorrente, transferível, conceitualmente difícil, importante para leitura, escrita, análise ou avaliações?

4. **Qual é o contrato de entrada?**  
   O que o estudante pode legitimamente compreender e utilizar antes de entrar no Tópico?

5. **O que precisa ser apenas retomado brevemente?**  
   Há conceitos anteriores que reaparecem em nova função sem precisar ser reensinados?

6. **Quais conhecimentos ainda não podem ser pressupostos?**  
   Que conteúdos posteriores ou não construídos precisam ser protegidos pela fronteira curricular?

7. **Qual é o contrato de saída?**  
   Ao terminar o Tópico, o que o estudante deve compreender e conseguir reconhecer, distinguir, relacionar, representar, analisar, justificar, transformar, interpretar ou transferir?

8. **Quais são as fronteiras do Tópico?**  
   Classificar, quando útil:
   - entra e será ensinado;
   - já existe e será utilizado;
   - será retomado brevemente;
   - será apenas preparado;
   - será deliberadamente adiado;
   - fica fora do escopo.

9. **Como o Tópico se conecta conceitualmente ao conhecimento anterior?**  
   Que compreensão já existente torna este novo avanço possível? A conexão deve ocorrer pelos conceitos, não por metacomentários curriculares na prosa final.

10. **Qual é o movimento conceitual global?**  
    Que transformação intelectual deve ocorrer do início ao fim? Ex.: experiência → insuficiência → distinção → conceito → análise; dado → problema → conceito → retorno ao dado.

11. **Qual é o perfil didático predominante?**  
    A voz de base permanece professoral, expositiva e analítica. Determinar se o Tópico será predominantemente conceitual, descritivo, estrutural, comparativo, transformacional, interpretativo-evidencial, contextual-pragmático, social-discursivo, histórico ou multimodal-documental.

12. **Qual é o regime de representação e o que precisa tornar-se perceptível?**  
    Quanto o Tópico depende de linguagem verbal, simbólica, visual, espacial, multimodal ou documental? Antes de prever recursos, identificar se o estudante precisa perceber principalmente:
    - uma relação ou estrutura abstrata;
    - uma configuração concreta;
    - uma transformação;
    - uma disposição espacial;
    - a materialidade de um objeto real;
    - uma combinação de modos.

13. **Que função representacional e que categoria de recurso podem ser necessárias?**  
    Identificar primeiro se a necessidade é:
    - abstrair e relacionar;
    - mostrar e contrastar configurações concretas;
    - preservar e documentar;
    - organizar editorialmente.

    Somente depois identificar, quando houver recurso propriamente dito:
    - **Visual para HTML**;
    - **Imagem para HTML**;
    - **Fac-símile para HTML**.

    Se tabela, caixa, lista, grid ou outra estrutura editorial resolver a função adequadamente, não criar recurso autônomo apenas porque o conteúdo pode ser visualizado.

14. **Como prosa e recursos deverão dividir o trabalho conceitual?**  
    A estrutura deve prever:
    - o que a prosa prepara;
    - qual é o núcleo representacional de cada recurso relevante;
    - o que o recurso torna perceptível, preserva ou fornece;
    - o que permanece na prosa por exigir desenvolvimento, ressalva ou interpretação;
    - se a representação é plausivelmente legível na escala real de leitura.

    Em regime multimodal, prosa e recurso formam uma única arquitetura explicativa. O recurso não precisa condensar todas as condições conceituais da prosa.

15. **Que tipos de corpus são especialmente adequados ao fenômeno?**  
    Pensar a sequência: fenômeno → necessidade → tipo de corpus → objeto. Podem aparecer fala, escrita cotidiana, literatura, poesia, canção, publicidade, jornalismo, documentos, charges, quadrinhos, mapas, páginas, textos digitais, materiais históricos, avaliativos ou outros dados.

16. **Há particularidades do conteúdo que precisam influenciar sua construção?**  
    Algum tipo de corpus, materialidade, modalidade, contexto de uso ou forma de representação é especialmente produtivo para este Tópico?

17. **Que capacidades o futuro Texto Prático deverá tornar observáveis?**  
    Sem criar os exercícios, definir que ações a prática poderá legitimamente cobrar.

18. **Como vestibulares e avaliações externas calibram o Tópico?**  
    Considerar importância, tipo de aplicação, autonomia exigida, formatos recorrentes, integração com interpretação textual e erros ou distratores frequentes. As avaliações calibram; não governam o currículo.

19. **O Tópico precisa de Blocos?**  
    Criar Blocos apenas quando houver mudanças substanciais de objeto, problema, escala, operação, representação, dificuldade ou movimento conceitual. Se o conteúdo formar um movimento contínuo, seguir diretamente para Partes.

20. **Qual é o critério de encerramento do Tópico?**  
    Em que ponto sua pergunta central estará suficientemente resolvida sem começar a invadir conteúdo posterior?

## Resultado esperado

Ao final, deve estar claro:

- o que o Tópico é;
- sua pergunta central;
- sua função e profundidade;
- entrada e saída;
- fronteiras;
- movimento global;
- perfil didático;
- regime de representação;
- aquilo que precisa tornar-se perceptível;
- funções representacionais gerais;
- necessidades de corpus e recursos;
- distinção entre recurso e simples organização editorial;
- relação entre prosa e multimodalidade;
- implicações para a prática;
- calibração avaliativa;
- critério de encerramento;
- decisão: **Tópico → Blocos** ou **Tópico → Partes**.

---

# II. Estrutura do Bloco e suas Partes

## Função

Definir uma unidade conceitual intermediária dentro do Tópico e estruturar integralmente as Partes que realizam seu movimento. O Bloco deve justificar sua autonomia; não é uma divisão automática.

## A. Estrutura do Bloco

1. **Qual é a identidade linguística do Bloco?**  
   Qual fenômeno, relação, distinção, operação analítica ou problema local realmente o define?

2. **Qual é a pergunta central do Bloco?**  
   Que pergunta ainda não suficientemente respondida deve conduzi-lo?

3. **Qual insuficiência do estado anterior faz este Bloco ser necessário?**  
   O que o estudante já consegue fazer e onde esse conhecimento deixa de ser suficiente?

4. **Qual é sua função dentro do Tópico?**  
   Que trabalho específico realiza no movimento global: introduzir, distinguir, estruturar, aprofundar, deslocar, integrar ou fechar uma relação?

5. **Qual é sua importância relativa e quanto aprofundamento merece?**  
   Considerar importância estrutural, recorrência, dificuldade, transferência, leitura, escrita, análise, custo de compreensão superficial e relevância avaliativa.

6. **Qual é o contrato de entrada?**  
   O que já pode ser utilizado sem reensino?

7. **O que precisa apenas ser retomado brevemente?**

8. **Quais conhecimentos ainda não podem ser pressupostos?**

9. **Qual é o contrato de saída?**  
   O que o estudante deve compreender e conseguir explicar, distinguir, representar, transformar, relacionar, justificar, analisar ou utilizar ao final?

10. **Quais são as fronteiras do Bloco?**  
    Distinguir, quando necessário:
    - entra e será ensinado;
    - já existe e será utilizado;
    - será retomado;
    - será preparado;
    - será adiado;
    - fica fora.

11. **Quais são os conceitos nucleares?**  
    Sem quais ideias o Bloco perderia sua identidade?

12. **Quais são os conceitos auxiliares?**  
    Que ideias aparecem apenas para sustentar o núcleo?

13. **Há terminologia dispensável?**  
    Algum nome, classificação ou formalismo existe nas fontes, mas não aumenta o poder de compreensão ou análise neste estágio?

14. **Qual é o movimento conceitual completo do Bloco?**  
    Construir uma cadeia que mostre a transformação intelectual real, sem impor um formato único.

15. **Que conceitos devem emergir por necessidade e quais podem ser definidos diretamente?**  
    Evitar tanto definição imediata para tudo quanto teatralização artificial de conceitos simples.

16. **Onde estão os verdadeiros gargalos?**  
    Em quais pontos a prosa deve desacelerar e aprofundar verticalmente?

17. **Quais pontos são simples e devem receber pouco espaço?**  
    Não distribuir profundidade por simetria.

18. **Quais confusões são realmente plausíveis?**  
    Que diferenças precisam ser construídas por contraste, transformação, exemplo, não exemplo, contraexemplo ou análise concorrente?

19. **Qual é o perfil didático do Bloco?**  
    Pode ser predominantemente conceitual-explicativo, descritivo-analítico, estrutural, comparativo-contrastivo, transformacional-experimental, interpretativo-evidencial, contextual-pragmático, social-discursivo, histórico ou multimodal-documental.

20. **Qual é o regime de representação e o que precisa ser percebido?**  
    Como verbal, simbólico, visual, espacial, multimodal e documental devem dividir o trabalho? Que relação, configuração, transformação ou materialidade precisa tornar-se perceptível? Não decidir tecnologia nesta etapa.

21. **Que exemplos controlados possuem melhor ganho didático?**  
    Quais isolam a relação central sem exigir pré-requisitos indevidos?

22. **Algum exemplo tradicional deve ser evitado?**  
    Há exemplos famosos, mas inadequados ao estágio ou à fronteira?

23. **É útil reutilizar poucos exemplos persistentes?**  
    Só quando cada retorno realizar trabalho novo.

24. **Que estratégia de corpus o Bloco exige?**  
    Definir os tipos de dados reais mais produtivos sem criar repertórios paralelos desnecessários.

25. **Que função representacional e que recursos são necessários?**  
    Identificar primeiro se cada necessidade exige:
    - abstrair/relacionar;
    - mostrar/contrastar;
    - preservar/documentar;
    - organizar editorialmente.

    Depois, quando houver recurso propriamente dito, classificar:
    - **Visual para HTML**;
    - **Imagem para HTML**;
    - **Fac-símile para HTML**.

    Distinguir recurso essencial de complementar. Não confundir categoria com implementação técnica.

26. **Como prosa e recursos dividem o trabalho conceitual?**  
    Para cada recurso relevante, pensar:
    - o que a prosa faz antes;
    - qual é o núcleo representacional;
    - o que o recurso permite perceber, preservar ou analisar;
    - o que deve permanecer na prosa para evitar sobrecarga;
    - o que a prosa faz depois.

    Possíveis movimentos:
    - prosa prepara → recurso revela → prosa interpreta;
    - recurso provoca → prosa investiga → conceito organiza → recurso é relido;
    - prosa e representação desenvolvem dimensões complementares da mesma relação.

27. **O recurso essencial está suficientemente definido e é viável na escala real?**  
    Se a compreensão depende dele, não podem permanecer vagos:
    - função;
    - núcleo representacional;
    - elementos indispensáveis;
    - elementos que podem ser omitidos;
    - relações que devem ser mostradas;
    - relações que não podem ser sugeridas;
    - grau de fidelidade;
    - materialidade relevante;
    - escala previsível de leitura;
    - riscos de sobrecarga.

    A arquitetura não precisa definir software, pixels, código ou formato final. Deve, porém, evitar congelar um recurso cuja função dependa de microtexto, ampliação ou densidade incompatível com o espaço normal da apostila.

28. **Que fontes são realmente importantes e para qual função?**  
    Precisão, terminologia, descrição, perspectiva, exemplos, corpus, representação ou controle de fronteira.

29. **Alguma fonte não deve governar a arquitetura?**  
    Uma fonte pode ser tecnicamente forte, mas enciclopédica, especializada ou sequenciada de forma inadequada ao Plano.

30. **Há perspectivas teóricas divergentes relevantes?**  
    Se modificarem a compreensão necessária, explicitar enquadramentos sem transformar o Bloco em revisão bibliográfica nem misturar teorias silenciosamente.

31. **Há alguma calibração avaliativa específica do Bloco?**  
    Só registrar quando houver algo além da calibração já feita no Tópico.

## B. Divisão e Estrutura das Partes do Bloco

32. **O Bloco precisa de Partes?**  
    Só dividir quando houver mudança real de problema, conceito, relação, escala, operação, representação, dificuldade, tipo de análise ou função.

33. **Quantas Partes são necessárias?**  
    Utilizar o menor número capaz de realizar integralmente o movimento do Bloco.

Para **cada Parte**, responder:

34. **Qual é a identidade da Parte?**  
    O que exatamente ela constrói?

35. **Qual é sua pergunta central?**  
    Que pergunta local precisa estar resolvida ao final?

36. **Qual é sua função dentro do Bloco?**

37. **Qual é seu contrato de entrada?**  
    O que recebe já construído?

38. **Qual é seu contrato de saída?**  
    Que novo estado de compreensão entrega?

39. **Qual é seu conteúdo nuclear?**

40. **Qual é seu conteúdo auxiliar?**

41. **Quais são suas fronteiras?**  
    O que entra aqui, o que apenas é utilizado e o que pertence a outra Parte?

42. **Qual é seu movimento conceitual interno?**

43. **O que deve ser definido diretamente e o que deve emergir?**

44. **Onde estão seus gargalos e pontos simples?**

45. **Quais confusões realmente precisam ser resolvidas nesta Parte?**

46. **Qual é o perfil didático da Parte?**  
    O perfil local pode diferir do perfil geral do Bloco.

47. **Qual é seu regime de representação e o que precisa tornar-se perceptível?**  
    Como prosa, símbolos, visual, espaço, multimodalidade e documentação dividem o trabalho? A Parte precisa principalmente tornar visível uma estrutura abstrata, uma configuração concreta, uma transformação, uma disposição ou uma materialidade?

48. **Que exemplos controlados são necessários?**

49. **Que corpus é adequado?**  
    Definir tipo e, quando indispensável, o objeto específico.

50. **Que função representacional e que recursos específicos entram nesta Parte?**  
    Perguntar primeiro se a necessidade é:
    - abstrair/relacionar;
    - mostrar/contrastar;
    - preservar/documentar;
    - organizar editorialmente.

    Somente depois, se houver recurso propriamente dito, identificar:
    - Visual para HTML;
    - Imagem para HTML;
    - Fac-símile para HTML.

    Distinguir essencial de complementar. A categoria não determina a implementação técnica.

51. **Como cada recurso se relaciona com a prosa e qual é seu núcleo representacional?**  
    Definir:
    - posição conceitual;
    - preparação;
    - função;
    - núcleo representacional;
    - elementos indispensáveis;
    - elementos que podem ser omitidos;
    - interpretação posterior;
    - limites conceituais;
    - legibilidade previsível na escala final.

    O recurso não deve ser decoração nem segunda página de teoria.

52. **A materialidade da própria página participa do fenômeno?**  
    Tipografia, espaço, posição, sequência, quebra, alinhamento ou organização gráfica são conceitualmente relevantes? Se forem apenas recursos de organização editorial, não tratá-los automaticamente como Visual para HTML.

53. **Há necessidade real de seções internas?**  
    Só quando houver mudanças perceptíveis de raciocínio; evitar microfragmentação.

54. **Como esta Parte se conecta às demais?**  
    O que recebe e o que torna possível depois, sem transformar isso em metacurrículo na prosa final?

55. **As Partes precisam ter tamanhos semelhantes?**  
    Presumir que não. Justificar assimetria pela densidade real.

56. **Que capacidades o futuro Texto Prático poderá cobrar a partir desta Parte?**

57. **O que seria injusto cobrar porque ainda não foi construído?**

58. **Quais fontes específicas são necessárias nesta Parte, se houver?**

59. **Quais expansões laterais devem ser evitadas?**

60. **Qual é o principal risco pedagógico ou editorial da Parte?**  
    Considerar também risco de representação excessivamente densa, materialidade mal preservada ou recurso cuja forma introduza relação que o conteúdo não sustenta.

61. **Qual é seu critério de encerramento?**  
    Onde deve parar sem invadir o movimento seguinte?

## C. Auditoria do Bloco

62. **As Partes formam um movimento único e inteligível?**

63. **Há sobreposição, lacuna, repetição ou simetria artificial?**

64. **Alguma Parte deve ser fundida, dividida ou reordenada?**

65. **A arquitetura continua clara se retirarmos títulos e convenções editoriais?**

66. **O Bloco está completo ou apenas volumoso?**

67. **Depois da análise, ele ainda merece existir como Bloco?**  
    Se não possui pergunta, movimento, contrato de saída e autonomia suficientes, rebaixar para Parte.

68. **Qual é a estratégia de produção e unidade do pedido?**  
    O Texto Teórico deve ser solicitado:
    - integralmente;
    - Parte por Parte;
    - excepcionalmente, em unidades menores dentro de uma Parte.

    Considerar densidade conceitual, gargalos, extensão prevista, heterogeneidade, dependência entre Partes, quantidade e complexidade dos recursos, risco de antecipação ou repetição, necessidade de auditoria intermediária e custo de compressão.

    O critério é:

    > **pedir apenas a quantidade de texto que pode receber o aprofundamento que merece.**

### Auditoria representacional do Bloco

Antes do congelamento, verificar:

- a função representacional de cada recurso está clara?
- algum recurso foi escolhido por hábito tecnológico?
- categoria e implementação foram confundidas?
- cada recurso essencial possui núcleo representacional identificável?
- algum recurso tenta realizar funções demais?
- há conteúdo gráfico que deveria permanecer na prosa?
- a espacialização realmente reduz carga cognitiva?
- uma cena concreta está sendo forçada a virar diagrama?
- a materialidade realmente justifica fac-símile?
- algum elemento deveria ser apenas estrutura editorial?
- a representação é legível na escala previsível?
- dividir ou simplificar produziria solução conceitualmente superior?
- algum recurso existe apenas porque o conteúdo poderia ser visualizado?

## Resultado esperado

Ao final, o Bloco deve estar pronto para orientar diretamente a produção do Texto Teórico, com suas Partes definidas e delimitadas, recursos essenciais conceitualmente resolvidos, funções representacionais justificadas e estratégia de produção explicitada.

---

# III. Estrutura das Partes

## Função

Organizar diretamente a arquitetura interna de um Tópico que **não necessita de Blocos**. Esta estrutura primeiro organiza o conjunto das Partes como um percurso único e depois define cada Parte em profundidade suficiente para orientar diretamente a produção do Texto Teórico.

## A. Arquitetura geral do conjunto das Partes

1. **Por que o Tópico precisa ser dividido em Partes?**  
   Que mudanças reais de problema, conceito, objeto, escala, relação, dificuldade, representação, corpus ou regime expositivo justificam a divisão?

2. **Quantas Partes são realmente necessárias?**  
   Qual é o menor número capaz de realizar integralmente o movimento do Tópico?

3. **Que parcela do movimento global do Tópico cabe a cada Parte?**

4. **Qual é a função de cada Parte dentro do percurso?**

5. **Por que as Partes aparecem nessa ordem?**  
   A sequência precisa ter lógica conceitual, não apenas temática.

6. **Que dependências existem entre elas?**  
   O que uma Parte precisa receber da anterior?

7. **Que assimetria é legítima?**  
   Quais Partes precisam de mais espaço por densidade, gargalo, corpus ou representação?

8. **Qual é a estratégia geral de produção?**  
   O Tópico pode ser solicitado integralmente, Parte por Parte ou, excepcionalmente, em unidades menores? A decisão deve proteger profundidade e qualidade.

## B. Estrutura de cada Parte

Para **cada Parte**, responder:

9. **Qual é sua identidade?**  
   O que exatamente esta Parte estuda ou constrói?

10. **Qual é sua pergunta central?**

11. **Qual é sua função dentro do Tópico?**

12. **Qual é seu contrato de entrada?**

13. **O que precisa apenas ser retomado brevemente?**

14. **Quais conhecimentos ainda não podem ser pressupostos?**

15. **Qual é seu contrato de saída?**

16. **Qual é seu conteúdo nuclear?**

17. **Qual é seu conteúdo auxiliar?**

18. **Quais são suas fronteiras?**  
   O que entra, o que é utilizado, o que deve esperar pela Parte seguinte e o que fica fora?

19. **Qual é seu movimento conceitual interno?**  
   Como a compreensão muda do começo ao fim da Parte?

20. **O que pode ser definido diretamente e o que deve surgir por necessidade?**

21. **Onde estão os verdadeiros gargalos?**

22. **Quais pontos são simples e merecem pouco espaço?**

23. **Quais confusões ou falsas analogias realmente ameaçam a compreensão?**

24. **Qual é o perfil didático da Parte?**  
   Conceitual-explicativo, descritivo, estrutural, comparativo, transformacional, interpretativo-evidencial, contextual-pragmático, social-discursivo, histórico ou multimodal-documental, conforme necessidade.

25. **Qual é o regime de representação e o que precisa tornar-se perceptível além da prosa?**  
   Como verbal, simbólico, visual, espacial, multimodal e documental dividem o trabalho? Perguntar se é necessário tornar perceptível principalmente:
   - uma relação abstrata;
   - uma configuração concreta;
   - uma transformação;
   - uma disposição espacial;
   - a materialidade de um objeto real;
   - uma combinação de modos.

26. **Qual é a relação entre prosa e recursos?**  
   Para cada recurso relevante, definir:
   - o que a prosa faz antes;
   - que trabalho deve permanecer na prosa;
   - o que o recurso permite perceber, preservar ou analisar;
   - o que a prosa faz depois.

   O recurso não deve carregar todas as ressalvas e exceções se isso comprometer sua legibilidade. Em exposição multimodal, prosa e recurso formam uma única construção explicativa.

27. **Que exemplos controlados são necessários?**  
   É útil isolar variáveis, manter exemplo persistente ou evitar algum exemplo por pré-requisito indevido?

28. **Que corpus é adequado?**  
   Qual tipo de dado real torna o fenômeno observável? É necessário um objeto específico ou basta um tipo de objeto com determinadas propriedades?

29. **Que função representacional e que recursos precisam estar definidos?**  
   Antes da categoria, decidir se a necessidade é:
   - **abstrair e relacionar**;
   - **mostrar e contrastar configurações concretas**;
   - **preservar e documentar**;
   - **organizar editorialmente**.

   Depois, quando houver recurso propriamente dito, identificar:
   - **Visual para HTML**;
   - **Imagem para HTML**;
   - **Fac-símile para HTML**.

   Não confundir a categoria com SVG, raster ou outra implementação. Se uma tabela, caixa, grid ou organização tipográfica resolver a função, não criar recurso autônomo.

30. **O recurso é essencial ou complementar, qual é seu núcleo representacional e sua economia interna?**  
   Se essencial, não pode permanecer vago no congelamento.

   Completar:

   > **Este recurso existe principalmente para tornar perceptível __________.**

   Definir:
   - elementos indispensáveis;
   - elementos que podem ser omitidos;
   - relações que precisam ser mostradas;
   - relações que não podem ser sugeridas;
   - se está tentando realizar funções demais.

   Recurso complementar também precisa possuir função real; “complementar” não significa decorativo.

31. **Que grau de fidelidade, precisão e legibilidade o recurso exige?**  
   O que precisa ser preservado? O que não pode ser reconstruído, estilizado ou sugerido incorretamente?

   Perguntar também:
   - continua legível na escala normal da apostila?
   - depende de zoom ou microtexto?
   - deve ser simplificado?
   - deve ser dividido?
   - outra representação realizaria melhor a mesma função?

   A arquitetura não determina pixels, software, resolução, SVG ou CSS.

32. **A materialidade da própria página participa do fenômeno?**  
   Tipografia, espaço, posição, quebra, alinhamento, sequência ou disposição gráfica realizam trabalho conceitual?

   Perguntar ainda:
   - se o objeto real fosse redesenhado, alguma informação relevante desapareceria, seria alterada ou passaria a ser inventada?
   - a situação exige Fac-símile?
   - ou apenas boa organização editorial em HTML/CSS?

33. **Há necessidade real de seções internas?**  
   Cada seção deve marcar mudança perceptível no raciocínio.

34. **Há risco de microfragmentação?**  
   Algumas supostas seções funcionariam melhor como prosa contínua?

35. **Que fontes são especificamente necessárias nesta Parte?**  
   Só registrar quando houver função própria além das fontes gerais do Tópico.

36. **Que capacidades o futuro Texto Prático poderá cobrar a partir desta Parte?**

37. **O que seria injusto cobrar porque esta Parte não construiu?**

38. **Como esta Parte se conecta às demais sem reensino automático?**  
   Aplicar a lógica: construído → estabilizado → utilizado → transferido.

39. **Quais expansões laterais devem ser evitadas?**

40. **Qual é o principal risco pedagógico ou editorial da Parte?**  
   Considerar conteúdo, fronteira, corpus e também:
   - representação excessivamente densa;
   - recurso escolhido por hábito tecnológico;
   - cena concreta transformada em diagrama sem ganho;
   - diagrama tentando substituir prosa;
   - materialidade indevidamente reconstruída;
   - estrutura editorial confundida com recurso conceitual.

41. **Onde a Parte deve parar?**  
   Qual é seu critério de encerramento?

42. **Qual deve ser sua unidade de produção?**  
   Pode ser solicitada integralmente ou precisa ser subdividida? O critério é a profundidade e a qualidade possíveis, não o máximo de conteúdo que cabe em um único pedido.

## C. Auditoria do conjunto

43. **Existe sobreposição entre Partes?**

44. **Há alguma lacuna no movimento do Tópico?**

45. **Alguma Parte perdeu função própria?**

46. **Alguma Parte deveria ser fundida, dividida ou reordenada?**

47. **Há simetria artificial de tamanho ou estrutura?**

48. **A continuidade conceitual entre as Partes está clara?**

49. **A relação entre prosa, corpus e recursos multimodais forma um percurso coerente?**  
    Verificar também se cada recurso realiza função própria em vez de repetir prosa ou disputar completude com ela.

50. **Os recursos essenciais estão suficientemente definidos antes da produção?**  
    Para cada um, verificar:
    - função;
    - núcleo representacional;
    - elementos indispensáveis;
    - elementos dispensáveis;
    - relações que não podem ser sugeridas;
    - fidelidade;
    - materialidade;
    - legibilidade previsível;
    - compatibilidade entre complexidade e espaço real.

51. **A estratégia de produção preserva a profundidade de cada Parte?**

52. **A decisão de não utilizar Blocos ainda se sustenta?**  
    Se as Partes se agruparem naturalmente em unidades intermediárias com pergunta, movimento e contrato próprios, reabrir a decisão arquitetônica do Tópico.

### Auditoria representacional do conjunto

Antes do congelamento, perguntar:

- a função representacional de cada recurso está clara?
- cada recurso foi escolhido por função, não por preferência tecnológica?
- função, regime, categoria e implementação permanecem distintos?
- algum recurso tenta realizar funções demais?
- há informação que deveria permanecer na prosa?
- a espacialização realmente reduz carga cognitiva?
- alguma configuração concreta está sendo forçada a virar esquema?
- algum esquema poderia ser substituído por prosa mais simples?
- a materialidade justifica Fac-símile?
- algum elemento deveria ser apenas organização editorial?
- algum recurso depende de zoom, microtexto ou dimensão incompatível com a página?
- dividir ou simplificar produziria melhor resultado?
- algum recurso existe apenas porque o conteúdo poderia ser visualizado?

## Resultado esperado

Ao final, o Tópico sem Blocos deve possuir um conjunto de Partes claramente justificadas, sequenciadas, delimitadas e prontas para orientar diretamente o Texto Teórico, com recursos essenciais, funções representacionais, limites de complexidade e estratégia de produção já resolvidos.

---

# Regra de congelamento e reabertura

Estas estruturas são consideradas **definitivas e congeladas** nesta Versão 2.3.

Congelamento significa encerrar refinamento opcional, não tornar o documento imune à correção.

Não reabrir por simples possibilidade de:

- acrescentar perguntas;
- criar classificações novas;
- expandir a camada metodológica;
- formular outra redação igualmente válida;
- detalhar implementação técnica que pertence a documento posterior.

Reabrir somente se a aplicação concreta demonstrar problema real, como:

- pergunta estrutural essencial ausente;
- contrato de entrada ou saída inadequado;
- fronteira impossível de preservar;
- sobreposição recorrente;
- decisão inadequada entre Bloco e Parte;
- recurso essencial que a estrutura não consegue acomodar;
- confusão recorrente entre função, representação, categoria e implementação;
- regime representacional incapaz de orientar decisão concreta;
- recurso essencial cuja complexidade não pode ser resolvida dentro da escala normal da apostila;
- falha entre teoria e prática;
- estratégia de produção que comprometa profundidade ou qualidade.

Um problema técnico local de SVG, rasterização, paginação, CSS ou exportação não reabre automaticamente estas Estruturas. Deve primeiro ser tratado na camada editorial ou técnica correspondente.

O princípio final permanece:

> **Primeiro decidir o que precisa tornar-se perceptível. Depois decidir que representação realiza melhor essa função. Só então escolher como implementá-la.**

Em forma condensada:

> **FUNÇÃO → REPRESENTAÇÃO → RECURSO → IMPLEMENTAÇÃO**

A tecnologia deve servir à arquitetura.

A arquitetura não deve nascer da tecnologia.

---

**FIM — ESTRUTURAS CANÔNICAS DO PLANO DE ESTUDO LINGUÍSTICO E DA LÍNGUA PORTUGUESA · VERSÃO 2.3 — 2026 · DEFINITIVA E CONGELADA**
