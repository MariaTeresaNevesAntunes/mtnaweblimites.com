import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Cog, Eye, EyeOff, Layers, Target, PenLine } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Quiz } from "@/components/Quiz";
import { Flashcards } from "@/components/Flashcards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabContentClass = "mt-6 space-y-6 data-[state=inactive]:hidden";

const Formula = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-center font-mono text-lg font-semibold text-primary">
    {children}
  </div>
);

const flashcards = [
  { front: "O que é uma função?", back: "Uma regra que associa a cada objeto (x) uma e uma só imagem (f(x))." },
  { front: "Como se chama o x?", back: "Objeto ou variável independente." },
  { front: "Como se chama o f(x)?", back: "Imagem ou variável dependente." },
  { front: "Porque é que não podemos dividir por zero?", back: "Porque nenhum número multiplicado por 0 dá o número que estamos a dividir." },
  { front: "Qual é o domínio de f(x) = √(x − 5)?", back: "x ≥ 5, porque não existem raízes quadradas reais de números negativos." },
];

const questions = [
  { question: "Se f(x) = 2x + 1, qual é a imagem de 3?", options: ["5", "6", "7", "8"], correctAnswer: 2, explanation: "f(3) = 2 × 3 + 1 = 6 + 1 = 7." },
  { question: "Qual número NÃO pertence ao domínio de f(x) = 10 / (x − 3)?", options: ["0", "3", "−3", "10"], correctAnswer: 1, explanation: "Para x = 3 o denominador fica 3 − 3 = 0, e não se pode dividir por zero." },
  { question: "Qual é o domínio de f(x) = √(x − 5)?", options: ["x > 0", "x ≥ 5", "x ≤ 5", "Todos os números reais"], correctAnswer: 1, explanation: "x − 5 tem de ser maior ou igual a zero, logo x ≥ 5." },
  { question: "Que tipo de função é f(x) = x²?", options: ["Linear", "Quadrática", "Exponencial", "Constante"], correctAnswer: 1, explanation: "O x aparece elevado ao quadrado, por isso é uma função quadrática." },
];

const Resolution = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant={open ? "outline" : "default"} size="sm" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
        {open ? "Esconder Resolução" : "Ver Resolução Explicada"}
      </Button>
      {/* Texto sempre presente no HTML; apenas escondido visualmente */}
      <div className={open ? "mt-4 space-y-3 rounded-lg border border-border bg-muted/40 p-4 text-foreground/90 leading-relaxed animate-fade-in" : "hidden"}>
        {children}
      </div>
    </div>
  );
};

const Functions = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Funções Matemáticas Explicadas para o 7.º ano",
    description: "O que é uma função, domínio, contradomínio, tipos de funções e exercícios resolvidos passo a passo.",
    educationalLevel: "7.º ano",
    inLanguage: "pt-PT",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Funções Matemáticas: Explicação Simples e Exercícios Resolvidos"
        description="Aprende o que é uma função com a máquina mágica de números: objeto, imagem, domínio, contradomínio, tipos de funções e exercícios resolvidos."
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-24 sm:px-6">
        <Link to="/recursos" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-1 h-4 w-4" /> Voltar aos Recursos
        </Link>

        <header className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Funções: a Máquina Mágica dos Números</h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            As funções estão em todo o lado: no preço que pagas pelos gelados conforme a quantidade, na distância que percorres de bicicleta conforme o tempo, ou na tua altura ao longo dos anos. Nesta página vais aprender, passo a passo e com calma, o que é uma função, que números podem entrar nela, que tipos de funções existem e como resolver exercícios.
          </p>
        </header>

        <Tabs defaultValue="definicao" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4">
            <TabsTrigger value="definicao" className="py-2"><Cog className="mr-1 h-4 w-4" />Definição</TabsTrigger>
            <TabsTrigger value="dominio" className="py-2"><Target className="mr-1 h-4 w-4" />Domínio</TabsTrigger>
            <TabsTrigger value="tipos" className="py-2"><Layers className="mr-1 h-4 w-4" />Tipos</TabsTrigger>
            <TabsTrigger value="exercicios" className="py-2"><PenLine className="mr-1 h-4 w-4" />Exercícios</TabsTrigger>
          </TabsList>

          {/* 1. Definição */}
          <TabsContent value="definicao" forceMount className={tabContentClass}>
            <Card>
              <CardHeader><CardTitle><h2 className="font-heading text-2xl">1. O que é uma Função?</h2></CardTitle></CardHeader>
              <CardContent className="space-y-4 leading-relaxed text-foreground/85">
                <p>
                  Imagina uma <strong>máquina mágica de processar números</strong>. Tem uma porta de entrada, um motor lá dentro que segue sempre a mesma regra, e uma porta de saída. Tu colocas um número na entrada, a máquina trabalha e, do outro lado, sai um novo número. Uma função é exatamente isto: uma regra que transforma cada número que entra em <strong>um e um só</strong> número que sai.
                </p>
                <div className="grid gap-3 text-center sm:grid-cols-3">
                  <div className="rounded-lg border border-border bg-card p-4"><p className="text-sm text-muted-foreground">Entrada</p><p className="text-2xl font-bold text-primary">x</p><p className="text-sm">o número que colocas</p></div>
                  <div className="rounded-lg border border-primary/40 bg-primary/10 p-4"><p className="text-sm text-muted-foreground">Regra da máquina</p><p className="text-2xl font-bold text-primary">2x + 1</p><p className="text-sm">o que a máquina faz</p></div>
                  <div className="rounded-lg border border-border bg-card p-4"><p className="text-sm text-muted-foreground">Saída</p><p className="text-2xl font-bold text-primary">f(x)</p><p className="text-sm">o número que sai</p></div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">A lei f(x) = 2x + 1 explicada por extenso</h3>
                <Formula>f(x) = 2x + 1</Formula>
                <p>
                  Lê-se assim: <em>"f de x é igual a duas vezes x mais um"</em>. A expressão chama-se <strong>lei descritiva</strong> ou <strong>expressão analítica</strong> da função, porque descreve, com símbolos matemáticos, aquilo que a máquina faz a cada número. Neste caso, a máquina faz duas coisas, sempre pela mesma ordem: primeiro <strong>multiplica o número por 2</strong> (ou seja, duplica-o) e depois <strong>soma 1</strong> ao resultado.
                </p>
                <p>
                  Vamos experimentar. Se colocarmos o número 3 na entrada, a máquina duplica-o e obtém 6; depois soma 1 e obtém 7. Escrevemos f(3) = 2 × 3 + 1 = 7. Se colocarmos o 0, fica f(0) = 2 × 0 + 1 = 1. E com um número negativo, como −2? f(−2) = 2 × (−2) + 1 = −4 + 1 = −3. Repara que, seja qual for o número que entra, sai sempre apenas um resultado — é isso que torna esta regra uma função.
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground">Objeto e imagem</h3>
                <p>
                  O <strong>x</strong> é o número que entra na máquina. Chama-se <strong>objeto</strong> e também <strong>variável independente</strong>, porque somos nós que o escolhemos livremente: ele não depende de nada.
                </p>
                <p>
                  O <strong>f(x)</strong>, que muitas vezes também se escreve <strong>y</strong>, é o número que sai da máquina. Chama-se <strong>imagem</strong> e também <strong>variável dependente</strong>, porque o seu valor depende do objeto que escolhemos. No exemplo anterior, 3 é o objeto e 7 é a imagem de 3.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2. Domínio */}
          <TabsContent value="dominio" forceMount className={tabContentClass}>
            <Card>
              <CardHeader><CardTitle><h2 className="font-heading text-2xl">2. Domínio e Contradomínio</h2></CardTitle></CardHeader>
              <CardContent className="space-y-4 leading-relaxed text-foreground/85">
                <p>
                  Voltemos à nossa máquina. Nem todas as máquinas aceitam todos os números! O <strong>domínio</strong> de uma função é o conjunto de todos os números que estão <strong>autorizados a entrar</strong> na máquina, ou seja, os objetos para os quais a regra funciona sem dar erro. Escreve-se muitas vezes D<sub>f</sub>.
                </p>
                <p>
                  O <strong>contradomínio</strong> (em inglês, <em>range</em>) é o conjunto de todos os números que <strong>saem</strong> da máquina, isto é, todas as imagens possíveis. Escreve-se D'<sub>f</sub>. Por exemplo, na função f(x) = x², por mais números que coloques, nunca sai um número negativo, porque qualquer número multiplicado por si próprio dá zero ou positivo. Assim, o contradomínio de x² são os números maiores ou iguais a zero.
                </p>
                <p>Nos números reais há duas grandes proibições que limitam o domínio:</p>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-l-4 border-l-destructive">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg"><AlertTriangle className="h-5 w-5 text-destructive" /><h3>Proibição 1: Divisão por zero</h3></CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/85">
                  <Formula>f(x) = 10 / (x − 3)</Formula>
                  <p>Dividir é repartir. Se tens 10 rebuçados e os divides por 2 amigos, cada um recebe 5, porque 5 × 2 = 10. Mas se os quiseres dividir por 0 amigos, que número multiplicado por 0 dá 10? Nenhum! Qualquer número vezes zero dá sempre zero. Por isso, <strong>dividir por zero é impossível</strong>.</p>
                  <p>Nesta função, o denominador (a parte de baixo da fração) é x − 3. Se colocarmos x = 3, fica 3 − 3 = 0, e a máquina teria de calcular 10 / 0, o que não existe. Para qualquer outro número funciona: f(5) = 10 / 2 = 5.</p>
                  <p className="font-semibold text-foreground">Conclusão: o número 3 está proibido. O domínio são todos os números reais exceto o 3.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-destructive">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg"><AlertTriangle className="h-5 w-5 text-destructive" /><h3>Proibição 2: Raiz de negativo</h3></CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/85">
                  <Formula>f(x) = √(x − 5)</Formula>
                  <p>A raiz quadrada de um número é o número que, multiplicado por si próprio, dá esse número: √9 = 3 porque 3 × 3 = 9. Mas qual é √(−9)? Não pode ser 3 (3 × 3 = 9) nem −3 ((−3) × (−3) = 9 também). Nos números reais, <strong>não existe raiz quadrada de números negativos</strong>.</p>
                  <p>Aqui, o que está dentro da raiz é x − 5. Esse valor tem de ser zero ou positivo: x − 5 ≥ 0. Somando 5 aos dois lados, obtemos x ≥ 5. Experimenta: com x = 9 fica √4 = 2 (funciona); com x = 1 fica √(−4), que não existe.</p>
                  <p className="font-semibold text-foreground">Conclusão: x tem de ser igual ou maior que 5. O domínio é x ≥ 5.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 3. Tipos */}
          <TabsContent value="tipos" forceMount className={tabContentClass}>
            <Card>
              <CardHeader><CardTitle><h2 className="font-heading text-2xl">3. Tipos e Operações de Funções</h2></CardTitle></CardHeader>
              <CardContent className="space-y-4 leading-relaxed text-foreground/85">
                <h3 className="font-heading text-xl font-semibold text-foreground">Função Linear (e afim)</h3>
                <Formula>f(x) = a·x  ou  f(x) = a·x + b</Formula>
                <p>É a função mais simples: o gráfico é uma <strong>reta</strong>. Cada vez que x aumenta 1, a imagem aumenta sempre a mesma quantidade (o valor a). Exemplo do dia a dia: se cada caderno custa 2 €, o preço de x cadernos é f(x) = 2x. A função f(x) = 2x + 1 que estudámos é uma função afim, porque tem também o "+ b".</p>
                <h3 className="font-heading text-xl font-semibold text-foreground">Função Quadrática</h3>
                <Formula>f(x) = x²</Formula>
                <p>Aqui o x aparece elevado ao quadrado. O gráfico é uma curva em forma de "U" chamada <strong>parábola</strong>. Serve para descrever, por exemplo, a trajetória de uma bola atirada ao ar ou a área de um quadrado em função do lado.</p>
                <h3 className="font-heading text-xl font-semibold text-foreground">Função Exponencial</h3>
                <Formula>f(x) = 2ˣ</Formula>
                <p>Agora o x está no expoente. Os valores crescem <strong>muito depressa</strong>, porque a cada passo multiplicam-se: 2, 4, 8, 16, 32... É o que acontece quando uma bactéria se divide em duas, e cada uma delas volta a dividir-se.</p>
                <h3 className="font-heading text-xl font-semibold text-foreground">Composição de funções: uma máquina dentro de outra</h3>
                <p>Podemos ligar duas máquinas em fila: o número que sai da primeira entra diretamente na segunda. Chama-se <strong>composição de funções</strong> e escreve-se (g ∘ f)(x) = g(f(x)), que se lê "g após f".</p>
                <p>Por exemplo, se f(x) = x + 1 e g(x) = 3x, então para x = 2: a primeira máquina dá f(2) = 3 e esse 3 entra na segunda, que dá g(3) = 9. Logo, g(f(2)) = 9. A ordem importa: f(g(2)) = f(6) = 7, que é diferente!</p>
                <p>Também podemos somar, subtrair ou multiplicar funções, fazendo a operação às imagens: se f(x) = x e g(x) = 2, então (f + g)(x) = x + 2.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4. Exercícios */}
          <TabsContent value="exercicios" forceMount className={tabContentClass}>
            <h2 className="font-heading text-2xl font-bold text-foreground">4. Ficha de Exercícios Resolvidos</h2>
            <Card>
              <CardHeader><CardTitle className="text-lg"><h3>Exercício 1</h3></CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/85">Dada a função <strong>f(x) = 3x − 2</strong>, calcula a imagem do objeto 4.</p>
                <Resolution>
                  <p><strong>Passo 1 — Perceber o pedido.</strong> Pedem a imagem do objeto 4. Isto significa que vamos colocar o número 4 na entrada da máquina e descobrir que número sai. Em linguagem matemática, queremos calcular f(4).</p>
                  <p><strong>Passo 2 — Substituir.</strong> Na expressão f(x) = 3x − 2, trocamos cada x pelo número 4: f(4) = 3 × 4 − 2.</p>
                  <p><strong>Passo 3 — Respeitar a ordem das operações.</strong> Primeiro fazemos a multiplicação: 3 × 4 = 12. Depois a subtração: 12 − 2 = 10.</p>
                  <p><strong>Passo 4 — Responder.</strong> f(4) = 10. A imagem do objeto 4 é 10. Também podemos dizer que o ponto (4, 10) pertence ao gráfico da função.</p>
                </Resolution>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg"><h3>Exercício 2</h3></CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/85">Determina o domínio da função <strong>g(x) = 5 / (x + 2)</strong>.</p>
                <Resolution>
                  <p><strong>Passo 1 — Procurar perigos.</strong> A função é uma fração, por isso há uma divisão. Lembra-te da Proibição 1: o denominador nunca pode ser zero.</p>
                  <p><strong>Passo 2 — Escrever a condição.</strong> O denominador é x + 2, logo exigimos x + 2 ≠ 0 (lê-se "x mais dois diferente de zero").</p>
                  <p><strong>Passo 3 — Resolver.</strong> Descobrimos qual é o número proibido resolvendo x + 2 = 0. Subtraindo 2 aos dois lados, x = −2. Confirmação: com x = −2 fica −2 + 2 = 0, e teríamos 5 / 0, que é impossível.</p>
                  <p><strong>Passo 4 — Responder.</strong> x ≠ −2. O domínio de g são todos os números reais exceto o −2, que se escreve D<sub>g</sub> = ℝ \ {"{"}−2{"}"}.</p>
                </Resolution>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section aria-label="Flashcards sobre funções" className="mt-12">
          <Flashcards title="Flashcards: Funções" cards={flashcards} />
        </section>
        <section aria-label="Quiz sobre funções" className="mt-8">
          <Quiz title="Quiz: Funções" questions={questions} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Functions;
