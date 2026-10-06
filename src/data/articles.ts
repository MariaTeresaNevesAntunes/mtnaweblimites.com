export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  content: string; // markdown-like sections separated by \n\n; we render with simple parser
}

export const articles: Article[] = [
  {
    id: 1,
    title: "A Importância dos Limites no Cálculo",
    excerpt:
      "Descobre porque os limites são a base fundamental do cálculo diferencial e integral, e como este conceito revolucionou a matemática moderna.",
    date: "2024-12-10",
    readTime: "6 min",
    category: "Fundamentos",
    slug: "importancia-limites-calculo",
    content: `
## Introdução

O conceito de limite é, sem exagero, a pedra angular do cálculo. Todos os grandes pilares desta área — derivadas, integrais, séries, continuidade — dependem, de forma direta ou indireta, da ideia de "aproximação". Compreender limites é, portanto, compreender a linguagem que os matemáticos criaram para lidar com o infinitamente pequeno e o infinitamente grande.

## O que é, afinal, um limite?

De forma intuitiva, dizer que o limite de f(x) quando x tende a a é L significa que, à medida que x se aproxima de a (sem nunca ser igual a a), os valores de f(x) aproximam-se cada vez mais de L. Escreve-se:

    lim (x → a) f(x) = L

Repara num detalhe crucial: não interessa o valor de f em a — pode até nem existir. O que importa é o comportamento à volta de a.

## Porque foi tão revolucionário

Antes da definição rigorosa de limite (formalizada por Cauchy e depois por Weierstrass no século XIX), o cálculo era feito com "infinitésimos", quantidades misteriosas que eram simultaneamente zero e não-zero. Isto gerava paradoxos e críticas ferozes de filósofos como George Berkeley. O limite resolveu tudo: substituiu o vago pelo preciso.

## Onde aparece nas outras partes do cálculo

- **Derivada:** a derivada f'(a) é definida como o limite do quociente incremental quando o acréscimo tende a zero.
- **Integral:** a integral definida é o limite de somas de Riemann quando a largura das partições tende a zero.
- **Continuidade:** uma função é contínua em a exatamente quando o limite em a existe e coincide com f(a).
- **Séries infinitas:** uma soma de infinitos termos só faz sentido como limite das somas parciais.

## Um exemplo simples mas revelador

Considera f(x) = (x² − 1) / (x − 1). Em x = 1 a expressão dá 0/0 — indeterminada. Mas fatorizando:

    (x² − 1) / (x − 1) = (x − 1)(x + 1) / (x − 1) = x + 1,  para x ≠ 1

Logo o limite quando x → 1 é 2. A função "quer" valer 2 em x = 1, embora não esteja lá definida. É esta capacidade de descrever "o valor que a função tenta atingir" que dá aos limites o seu poder.

## Conclusão

Sem limites não há cálculo moderno. Dominar este conceito é o primeiro passo para dominar a análise matemática — e é também o passo mais importante.
`,
  },
  {
    id: 2,
    title: "5 Erros Comuns ao Calcular Limites",
    excerpt:
      "Evita os erros mais frequentes que os estudantes cometem ao resolver problemas de limites. Dicas práticas e exemplos.",
    date: "2024-12-05",
    readTime: "7 min",
    category: "Dicas",
    slug: "erros-comuns-limites",
    content: `
## Introdução

Calcular limites parece simples até que os exercícios ficam mais complicados. Depois de corrigir centenas de exercícios, notamos que quase todos os erros caem em cinco categorias. Vamos vê-las uma a uma.

## Erro 1: Substituir sem pensar

O primeiro instinto é substituir x pelo valor de tendência. Muitas vezes funciona, mas se o resultado for 0/0, ∞/∞, 0·∞ ou ∞ − ∞, a resposta **não** é essa — é uma indeterminação, e é preciso trabalho adicional (fatorização, racionalização, L'Hôpital, etc.).

## Erro 2: Confundir "não existe" com "é infinito"

lim (x → 0) 1/x² = +∞ tem uma resposta clara (o limite é infinito, no sentido de crescer sem cota). Mas lim (x → 0) 1/x **não existe**, porque pela esquerda vai a −∞ e pela direita a +∞. "Ser infinito" e "não existir" são coisas diferentes.

## Erro 3: Esquecer os limites laterais

Sempre que a função tem uma "quebra" (módulo, função por partes, denominador que se anula), verifica os dois lados. Se o limite pela esquerda difere do limite pela direita, o limite bilateral não existe.

## Erro 4: Aplicar L'Hôpital sem verificar as condições

L'Hôpital só se aplica a indeterminações 0/0 ou ∞/∞. Aplicar a 2/3 dá disparate. Além disso, deriva-se **numerador e denominador separadamente**, não a fração como um todo.

## Erro 5: Cancelar termos sem cuidado

Em (x² − 1)/(x − 1) podemos cancelar (x − 1) porque estamos a estudar x → 1 com x ≠ 1. Mas escrever 0/0 = 1 ou "cortar" x's que não são fator comum é erro grave.

## Bónus: notação sloppy

Escrever "lim = 5" sem indicar a que tende x, ou trocar "→" por "=", parecem detalhes, mas escondem confusões conceituais. Cuidado com a notação é cuidado com o pensamento.

## Conclusão

A maioria dos erros nasce da pressa e da falta de verificação. Antes de escrever a resposta final, pergunta-te: "É uma indeterminação? Verifiquei os laterais? A regra que apliquei tinha condições?" Vais poupar imensos pontos nos exames.
`,
  },
  {
    id: 3,
    title: "Limites e o Conceito de Infinito",
    excerpt:
      "Uma exploração filosófica e matemática do conceito de infinito através dos limites. Como os matemáticos dominaram o infinito.",
    date: "2024-11-28",
    readTime: "8 min",
    category: "Teoria",
    slug: "limites-conceito-infinito",
    content: `
## Introdução

O infinito fascinou humanos desde Zenão e os seus paradoxos. Como é que Aquiles nunca alcança a tartaruga se em cada instante reduz a distância a metade? A resposta viria mais de dois mil anos depois, com o conceito rigoroso de limite.

## Duas caras do infinito

Nos limites, o infinito aparece de duas formas:

1. **A variável tende para infinito:** lim (x → ∞) f(x). Estudamos o comportamento assimptótico.
2. **O valor da função tende para infinito:** lim (x → a) f(x) = ∞. Indica uma assíntota vertical.

Ambos são "modos de falar" — o infinito não é um número, é um comportamento.

## O paradoxo de Zenão, resolvido

A distância total percorrida por Aquiles é uma soma infinita:

    1/2 + 1/4 + 1/8 + 1/16 + ...

À primeira vista, somar infinitas parcelas devia dar infinito. Mas o limite das somas parciais é 1. Aquiles alcança a tartaruga porque a série geométrica **converge**.

## Infinito potencial vs infinito atual

Aristóteles distinguia entre infinito potencial (sempre possível continuar) e infinito atual (já dado, completo). O cálculo clássico usa apenas o primeiro: "x pode crescer tanto quanto se queira". Só com Cantor, no fim do século XIX, o infinito atual (com diferentes "tamanhos" de infinito) entrou na matemática.

## Assíntotas: onde o infinito toca o gráfico

- **Assíntota vertical em x = a:** lim (x → a) f(x) = ±∞.
- **Assíntota horizontal y = L:** lim (x → ±∞) f(x) = L.
- **Assíntota oblíqua y = mx + b:** m = lim f(x)/x, b = lim (f(x) − mx), ambos com x → ±∞.

## A indeterminação ∞ − ∞

Um dos casos mais traiçoeiros. Exemplo:

    lim (x → ∞) (√(x² + x) − x)

Multiplicando pelo conjugado:

    (√(x² + x) − x)·(√(x² + x) + x) / (√(x² + x) + x) = x / (√(x² + x) + x) → 1/2

A intuição diz "infinito menos infinito = 0", mas a resposta é 1/2. Este é o poder dos limites: transformam o vago em número concreto.

## Conclusão

O limite é a ferramenta que domesticou o infinito. Não o eliminou — deu-lhe regras. E é com essas regras que construímos praticamente toda a matemática moderna aplicada.
`,
  },
  {
    id: 4,
    title: "Aplicações Práticas dos Limites",
    excerpt:
      "De física a economia, descobre como os limites são usados no mundo real para resolver problemas práticos.",
    date: "2024-11-20",
    readTime: "7 min",
    category: "Aplicações",
    slug: "aplicacoes-praticas-limites",
    content: `
## Introdução

"Para que é que eu preciso disto?" é a pergunta que qualquer aluno faz. No caso dos limites, a resposta é: **para praticamente tudo o que envolve mudança**. Vejamos como.

## Física: velocidade instantânea

Velocidade média é distância a dividir por tempo. Mas a velocidade que o velocímetro marca **agora** é um limite:

    v(t) = lim (Δt → 0) [s(t + Δt) − s(t)] / Δt

Isto é a derivada da posição — e a derivada é, por definição, um limite.

## Engenharia: análise de sinais

Filtros digitais, análise de estabilidade e resposta em frequência dependem de limites de séries e integrais impróprias. Se um sinal tem energia finita, é porque um certo limite converge.

## Economia: custo marginal

O custo marginal — quanto custa produzir mais uma unidade — é o limite da variação do custo total quando a variação da quantidade tende a zero. Ou seja, é a derivada da função custo. As decisões de "produzir mais ou menos" saem daqui.

## Biologia: dinâmica de populações

Modelos populacionais como o logístico dP/dt = rP(1 − P/K) usam derivadas — logo, limites. A capacidade de suporte K é literalmente o limite quando t → ∞.

## Medicina: farmacocinética

A concentração de um medicamento no sangue segue equações diferenciais. A concentração de equilíbrio a longo prazo é um limite quando t → ∞. Dosagens seguras dependem disso.

## Informática: complexidade de algoritmos

Quando dizemos que um algoritmo é O(n log n), estamos a comparar o crescimento de funções via limites de quocientes. É pura análise assimptótica.

## Conclusão

Sempre que se fala em "taxa", "instantâneo", "assimptótico" ou "acumulado ao longo do tempo", há um limite escondido. Este conceito abstrato é, na prática, uma das ferramentas mais aplicadas da matemática.
`,
  },
  {
    id: 5,
    title: "História do Cálculo: De Newton a Cauchy",
    excerpt:
      "A fascinante história de como o conceito de limite evoluiu ao longo dos séculos, desde as primeiras ideias até a definição rigorosa.",
    date: "2024-11-15",
    readTime: "9 min",
    category: "História",
    slug: "historia-calculo-newton-cauchy",
    content: `
## Antes de Newton

Os gregos já sabiam somar séries geométricas (método da exaustão de Eudoxo e Arquimedes) para calcular áreas de figuras curvas. Mas faltava-lhes uma linguagem geral.

## Newton e Leibniz (século XVII)

Independentemente, Newton e Leibniz criaram o cálculo por volta de 1670. Newton falava em "fluxões" e "fluentes"; Leibniz em "diferenciais" dx, dy. Ambos usavam quantidades infinitesimais — mais pequenas que qualquer número positivo, mas não-nulas. Funcionava, mas conceptualmente era frágil.

## A crítica de Berkeley (1734)

O bispo George Berkeley publicou "The Analyst", onde chamou aos infinitésimos "fantasmas de quantidades falecidas". A crítica era justa: os matemáticos usavam infinitésimos como quisessem, e a base lógica era pantanosa.

## D'Alembert e a ideia de limite (século XVIII)

D'Alembert foi dos primeiros a dizer, na Encyclopédie, que a base do cálculo devia ser o **limite**, não o infinitésimo. Faltava-lhe, porém, precisão formal.

## Cauchy formaliza (1821)

No seu "Cours d'Analyse", Cauchy define: "Diz-se que uma quantidade é o limite de outra quando a segunda se aproxima da primeira mais que qualquer quantidade dada, por pequena que seja." É a primeira definição moderna, ainda com alguma vagueza em "aproxima-se".

## Weierstrass e o rigor final (segunda metade do século XIX)

Weierstrass propôs a definição ε–δ que ainda hoje se usa:

> lim (x → a) f(x) = L se, para todo ε > 0, existe δ > 0 tal que 0 < |x − a| < δ implica |f(x) − L| < ε.

Esta é a linguagem que qualquer estudante de análise conhece. Aqui não há infinitésimos, não há fantasmas — só desigualdades sobre números reais.

## Bónus: o regresso dos infinitésimos (século XX)

Em 1960, Abraham Robinson criou a "análise não-standard", que reabilitou os infinitésimos com base em lógica matemática. Newton, afinal, estava certo — só faltavam duzentos anos de fundamentação.

## Conclusão

O conceito de limite não caiu do céu. Foi construído ao longo de dois séculos de debate, crítica e refinamento. Perceber esta história ajuda a valorizar cada símbolo do cálculo — inclusive esse elegante "lim" que hoje escrevemos sem pensar.
`,
  },
  {
    id: 6,
    title: "Como Calcular Limites por Fatorização",
    excerpt:
      "Passo a passo para resolver indeterminações 0/0 usando fatorização. Vários exemplos comentados com truques úteis.",
    date: "2024-11-08",
    readTime: "6 min",
    category: "Técnicas",
    slug: "calcular-limites-fatorizacao",
    content: `
## Quando usar

A fatorização é a primeira técnica a tentar quando substituir dá **0/0** e a expressão envolve polinómios ou funções racionais.

## Ideia

Se numerador e denominador se anulam em x = a, então ambos têm (x − a) como fator. Fatoriza, cancela, e substitui.

## Exemplo 1: diferença de quadrados

    lim (x → 3) (x² − 9)/(x − 3)
    = lim (x − 3)(x + 3)/(x − 3)
    = lim (x + 3) = 6

## Exemplo 2: fator comum não óbvio

    lim (x → 2) (x³ − 8)/(x² − 4)

Usando a fatorização a³ − b³ = (a − b)(a² + ab + b²):

    x³ − 8 = (x − 2)(x² + 2x + 4)
    x² − 4 = (x − 2)(x + 2)

Cancelando (x − 2):

    lim (x² + 2x + 4)/(x + 2) = (4 + 4 + 4)/4 = 3

## Exemplo 3: divisão de polinómios

    lim (x → 1) (x³ − 2x² + x)/(x² − 1)
    = lim x(x − 1)²/[(x − 1)(x + 1)]
    = lim x(x − 1)/(x + 1) = 0

## Truques úteis

- **Ruffini** (divisão sintética) acelera a fatorização quando conheces uma raiz.
- **Identidades notáveis**: a² − b², a³ ± b³, quadrados perfeitos.
- **Regra**: se x = a é raiz de P(x), então (x − a) divide P(x).

## Conclusão

Fatorizar é a técnica mais elementar e a que resolve 60–70% dos exercícios com 0/0 em polinómios. Domina-a antes de correres para L'Hôpital.
`,
  },
  {
    id: 7,
    title: "Regra de L'Hôpital Explicada Passo a Passo",
    excerpt:
      "Aprende quando e como aplicar a regra de L'Hôpital para resolver indeterminações 0/0 e ∞/∞ com facilidade.",
    date: "2024-10-30",
    readTime: "7 min",
    category: "Técnicas",
    slug: "regra-hopital-passo-a-passo",
    content: `
## O que diz a regra

Se f(x) e g(x) são deriváveis perto de a, g'(x) ≠ 0 perto de a, e o limite lim f(x)/g(x) é da forma 0/0 ou ∞/∞, então:

    lim (x → a) f(x)/g(x) = lim (x → a) f'(x)/g'(x)

desde que este último limite exista (finito ou infinito).

## Condições — muito importantes!

1. Verifica que é **mesmo** 0/0 ou ∞/∞. Se for 2/0, 3/5 ou similar, L'Hôpital **não se aplica**.
2. Deriva **numerador e denominador separadamente**, não o quociente.
3. Se o novo limite ainda for indeterminado, aplica outra vez.

## Exemplo 1: caso 0/0

    lim (x → 0) sin(x)/x  →  0/0
    L'Hôpital: lim cos(x)/1 = 1

## Exemplo 2: caso ∞/∞

    lim (x → ∞) ln(x)/x  →  ∞/∞
    L'Hôpital: lim (1/x)/1 = 0

## Exemplo 3: aplicar duas vezes

    lim (x → 0) (1 − cos x)/x²  →  0/0
    L'Hôpital: lim sin(x)/(2x)  →  0/0
    L'Hôpital de novo: lim cos(x)/2 = 1/2

## Truque: outras indeterminações

L'Hôpital serve para 0/0 e ∞/∞, mas outras indeterminações podem ser convertidas:

- **0·∞**: reescrever como 0/(1/∞) = 0/0 ou como ∞/(1/0) = ∞/∞.
- **∞ − ∞**: pôr em fração comum.
- **0⁰, ∞⁰, 1^∞**: aplicar logaritmo, obter 0·∞, converter.

## Cuidado

L'Hôpital é poderoso mas pode esconder o entendimento. Sempre que possível, tenta primeiro fatorização, racionalização ou limites notáveis — são mais rápidos e mostram melhor o que se passa.

## Conclusão

Bem aplicada, a regra de L'Hôpital é uma navalha suíça. Mal aplicada, é a fonte número um de erros em exames de cálculo. Verifica as condições **sempre**.
`,
  },
  {
    id: 8,
    title: "Limites Laterais: Guia Completo",
    excerpt:
      "Tudo o que precisas de saber sobre limites laterais: notação, cálculo, aplicações em funções por partes e módulos.",
    date: "2024-10-22",
    readTime: "6 min",
    category: "Fundamentos",
    slug: "limites-laterais-guia",
    content: `
## O que são

Um limite lateral estuda o comportamento da função quando x se aproxima de a **apenas por um lado**:

- **Pela esquerda:** lim (x → a⁻) f(x), usando valores x < a.
- **Pela direita:** lim (x → a⁺) f(x), usando valores x > a.

## Teorema fundamental

    lim (x → a) f(x) = L   ⟺   lim (x → a⁻) f(x) = lim (x → a⁺) f(x) = L

Se os laterais diferem, o bilateral **não existe**.

## Onde os laterais são essenciais

### 1. Funções por partes

    f(x) = { x + 1,   se x < 2
           { x² − 1,  se x ≥ 2

Em x = 2:
- Esquerda: lim (x → 2⁻) (x + 1) = 3
- Direita: lim (x → 2⁺) (x² − 1) = 3

Iguais → bilateral existe e vale 3.

### 2. Módulos

    lim (x → 0) |x|/x

- Direita: |x|/x = 1
- Esquerda: |x|/x = −1

Bilateral **não existe**.

### 3. Assíntotas verticais

    lim (x → 0⁻) 1/x = −∞,   lim (x → 0⁺) 1/x = +∞

Ambos infinitos, com sinais opostos → o bilateral não existe.

## Aplicações

- **Continuidade em pontos de junção** de funções por partes.
- **Análise de assíntotas verticais** (sinal do infinito de cada lado).
- **Definição de derivadas laterais**, úteis em funções com "bicos" como |x|.

## Conclusão

Verificar os laterais é um hábito que evita muitos erros. Sempre que a função tem módulo, definição por partes, ou denominador que se anula, calcula os dois lados antes de decidir se o limite existe.
`,
  },
  {
    id: 9,
    title: "Limites Trigonométricos Fundamentais",
    excerpt:
      "Domina os limites notáveis com seno, coseno e tangente. Demonstrações intuitivas e uso em exercícios avançados.",
    date: "2024-10-14",
    readTime: "7 min",
    category: "Técnicas",
    slug: "limites-trigonometricos-fundamentais",
    content: `
## O limite estrela

    lim (x → 0) sin(x)/x = 1

Este é o limite trigonométrico mais importante do cálculo. Toda a derivada de funções trigonométricas nasce daqui.

## Ideia da demonstração (geométrica)

Num círculo de raio 1, para 0 < x < π/2 tem-se:

    sin(x) < x < tan(x)

Dividindo por sin(x):

    1 < x/sin(x) < 1/cos(x)

Quando x → 0, cos(x) → 1, e pelo teorema do enquadramento (squeeze), sin(x)/x → 1.

## Consequências imediatas

    lim (x → 0) (1 − cos(x))/x² = 1/2
    lim (x → 0) tan(x)/x = 1
    lim (x → 0) (1 − cos(x))/x = 0

## Como usar em exercícios

A ideia é **fabricar** a forma sin(u)/u onde u → 0. Exemplo:

    lim (x → 0) sin(5x)/x
    = lim [sin(5x)/(5x)] · 5
    = 1 · 5 = 5

Outro:

    lim (x → 0) sin(3x)/sin(7x)
    = lim [sin(3x)/(3x)] · [(7x)/sin(7x)] · (3/7)
    = 1 · 1 · 3/7 = 3/7

## Exemplo com (1 − cos)

    lim (x → 0) (1 − cos(2x))/x²
    = lim [(1 − cos(2x))/(2x)²] · 4
    = (1/2) · 4 = 2

## Limite exponencial primo

    lim (x → 0) (1 + x)^(1/x) = e
    lim (x → ∞) (1 + 1/x)^x = e

Não é trigonométrico, mas é o outro grande "limite notável" que aparece a par.

## Conclusão

Basta memorizar dois ou três limites-mãe e aprender a **manipular** a expressão para que apareça a forma conhecida. Depois disso, os limites trigonométricos deixam de ser um obstáculo.
`,
  },
  {
    id: 10,
    title: "Assíntotas Verticais e Horizontais em Detalhe",
    excerpt:
      "Como identificar e calcular todas as assíntotas de uma função. Método passo a passo com exemplos gráficos.",
    date: "2024-10-05",
    readTime: "7 min",
    category: "Aplicações",
    slug: "assintotas-verticais-horizontais",
    content: `
## O que é uma assíntota

Uma reta à qual o gráfico da função se aproxima cada vez mais, sem (em geral) tocar. Existem três tipos: verticais, horizontais e oblíquas.

## Assíntota vertical

A reta x = a é assíntota vertical de f se:

    lim (x → a⁻) f(x) = ±∞   ou   lim (x → a⁺) f(x) = ±∞

**Onde procurar:** valores de x que anulam o denominador (e não anulam o numerador), pontos onde a função "explode".

**Exemplo:** f(x) = 1/(x − 2). Em x = 2 o denominador anula-se. Calculando os laterais, obtemos ±∞. Logo x = 2 é assíntota vertical.

## Assíntota horizontal

A reta y = L é assíntota horizontal se:

    lim (x → +∞) f(x) = L   ou   lim (x → −∞) f(x) = L

Uma função pode ter uma, duas ou nenhuma assíntota horizontal (uma para cada lado).

**Exemplo:** f(x) = (2x² + 1)/(x² − 3). Dividindo por x²:

    (2 + 1/x²)/(1 − 3/x²) → 2/1 = 2

Assíntota horizontal: y = 2, dos dois lados.

## Assíntota oblíqua

Se não há horizontal desse lado, procura oblíqua y = mx + b:

    m = lim (x → ±∞) f(x)/x
    b = lim (x → ±∞) [f(x) − mx]

Se m é finito e não nulo, e b é finito, então y = mx + b é assíntota oblíqua.

**Exemplo:** f(x) = (x² + 1)/x = x + 1/x. Como m = 1 e b = 0, a reta y = x é assíntota oblíqua.

## Roteiro para uma função qualquer

1. Domínio: identifica onde f não está definida — candidatos a verticais.
2. Calcula limites laterais nesses pontos.
3. Calcula limites em +∞ e −∞ — dão as horizontais.
4. Se não há horizontal de um lado, testa oblíqua.

## Erros comuns

- Assumir que "anula o denominador" ⇒ assíntota vertical. **Falso** se o numerador também anular e o fator cancelar (nesse caso é um buraco, não uma assíntota).
- Confundir assíntota horizontal e oblíqua. Numa função **só existe uma** de cada lado (ou horizontal, ou oblíqua, nunca as duas para o mesmo lado).

## Conclusão

Assíntotas são o esqueleto de qualquer esboço gráfico. Domínio, laterais e limites no infinito — é literalmente tudo o que precisas. Um bom aluno de cálculo deve conseguir esboçar uma função racional em menos de dois minutos com esta técnica.
`,
  },
  {
    id: 11,
    title: "Limites e Continuidade: A Ligação Essencial",
    excerpt:
      "Entende o que significa uma função ser contínua, como usar limites para o provar e quais são os três tipos de descontinuidade que aparecem nos exames.",
    date: "2025-01-15",
    readTime: "8 min",
    category: "Fundamentos",
    slug: "limites-e-continuidade",
    content: `
## Porque é que limites e continuidade andam sempre juntos

Quando falamos de **limites e continuidade** estamos, na prática, a falar do mesmo assunto visto de dois ângulos. O limite descreve para onde a função *tende*; a continuidade compara esse destino com o valor que a função *realmente assume*. Se coincidirem, o gráfico desenha-se sem levantar o lápis do papel.

## Definição formal de continuidade

Uma função f é contínua num ponto a quando se verificam **três condições em simultâneo**:

1. f(a) existe (o ponto a pertence ao domínio);
2. lim (x → a) f(x) existe (os limites laterais existem e são iguais);
3. lim (x → a) f(x) = f(a).

    f contínua em a  ⟺  lim (x → a) f(x) = f(a)

Se falhar qualquer uma das três, a função é **descontínua** em a. Repara que a ordem importa: podes ter limite sem ter imagem, e podes ter imagem sem ter limite.

## Os três tipos de descontinuidade

### 1. Descontinuidade removível

Os limites laterais existem e são iguais, mas ou f(a) não está definida, ou está definida com outro valor. Chama-se removível porque basta redefinir f(a) para "colar" o buraco.

    f(x) = (x² − 4)/(x − 2),  x ≠ 2

Aqui lim (x → 2) f(x) = 4, mas f(2) não existe. Se definirmos f(2) = 4, a função passa a ser contínua.

### 2. Descontinuidade de salto

Os limites laterais existem mas **são diferentes**. É o caso típico das funções definidas por ramos:

    f(x) = x + 1, se x < 0
    f(x) = x − 1, se x ≥ 0

À esquerda de 0 a função tende para 1; à direita tende para −1. Há um salto de amplitude 2 e nada o remove.

### 3. Descontinuidade infinita

Pelo menos um dos limites laterais é infinito — o gráfico dispara para cima ou para baixo junto de uma **assíntota vertical**:

    lim (x → 0⁻) 1/x = −∞      lim (x → 0⁺) 1/x = +∞

## Continuidade num intervalo

Dizer que f é contínua em [a, b] significa que é contínua em todos os pontos interiores e **contínua à direita** em a e **contínua à esquerda** em b, ou seja:

    lim (x → a⁺) f(x) = f(a)      e      lim (x → b⁻) f(x) = f(b)

## Que funções são sempre contínuas?

No seu domínio, são contínuas:

- funções polinomiais (contínuas em ℝ);
- funções racionais (exceto onde o denominador se anula);
- funções trigonométricas, exponenciais e logarítmicas;
- somas, produtos, quocientes e composições de funções contínuas.

Este resultado é enormemente prático: se a função é contínua em a, o limite calcula-se por **substituição direta**.

> Para uma função contínua, calcular o limite é simplesmente avaliar a função no ponto.

## Exercício resolvido: encontrar o parâmetro k

Determina k para que f seja contínua em x = 1:

    f(x) = (x² − 1)/(x − 1),  se x ≠ 1
    f(x) = k,                 se x = 1

**Passo 1** — calcular o limite:

    lim (x → 1) (x² − 1)/(x − 1) = lim (x → 1) (x − 1)(x + 1)/(x − 1) = lim (x → 1) (x + 1) = 2

**Passo 2** — impor a terceira condição de continuidade: f(1) = k tem de igualar o limite. Logo **k = 2**.

## Teorema de Bolzano: a recompensa da continuidade

Se f é contínua em [a, b] e f(a) e f(b) têm sinais contrários, então existe pelo menos um c em ]a, b[ tal que f(c) = 0. Este teorema é usado em exames para provar a existência de soluções sem as calcular — e só funciona porque a função é contínua.

## Erros mais comuns

- Confundir "existe limite" com "é contínua": pode existir limite e a função nem estar definida no ponto.
- Esquecer de verificar os **dois** limites laterais em funções por ramos.
- Assumir continuidade num ponto fora do domínio (por exemplo, x = 0 em 1/x).

## Resumo

A continuidade é o teste que confirma se o limite e o valor da função concordam. Domina as três condições, aprende a classificar as descontinuidades e ganhas simultaneamente uma ferramenta de cálculo (substituição direta) e uma ferramenta de demonstração (Bolzano).
`,
  },
];
