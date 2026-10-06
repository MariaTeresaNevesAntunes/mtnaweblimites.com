import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Quiz } from "@/components/Quiz";
import { Flashcards } from "@/components/Flashcards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formulas = [
  {
    title: "Limite trigonométrico fundamental",
    formula: "limₓ→₀ sen(x) / x = 1",
    note: "O ângulo x deve estar expresso em radianos. Também é válido limₓ→₀ x / sen(x) = 1.",
  },
  {
    title: "Limite exponencial fundamental",
    formula: "limₓ→₀ (eˣ − 1) / x = 1",
    note: "Este resultado descreve o comportamento da função exponencial perto de zero.",
  },
  {
    title: "Limite que define o número e",
    formula: "limₓ→∞ (1 + 1/x)ˣ = e",
    note: "A forma equivalente limₓ→₀ (1 + x)¹⁄ˣ = e é frequentemente usada em exercícios.",
  },
];

const flashcards = [
  { front: "Qual é o limite de sen(x)/x quando x tende a zero?", back: "O limite é 1, desde que x esteja em radianos." },
  { front: "Qual é o limite de (eˣ − 1)/x quando x tende a zero?", back: "O limite é 1." },
  { front: "Que número surge em (1 + 1/x)ˣ quando x tende a infinito?", back: "O número de Euler: e ≈ 2,71828." },
  { front: "Quanto vale limₓ→₀ sen(5x)/x?", back: "Vale 5, pois sen(5x)/x = 5 · sen(5x)/(5x)." },
  { front: "Qual é a condição essencial no limite trigonométrico fundamental?", back: "O ângulo deve ser medido em radianos." },
];

const questions = [
  {
    question: "Quanto vale limₓ→₀ sen(3x)/x?",
    options: ["0", "1", "3", "Não existe"],
    correctAnswer: 2,
    explanation: "Escrevemos sen(3x)/x = 3 · sen(3x)/(3x). O segundo fator tende a 1.",
  },
  {
    question: "Quanto vale limₓ→₀ (e²ˣ − 1)/x?",
    options: ["1", "2", "e²", "0"],
    correctAnswer: 1,
    explanation: "Fazendo u = 2x, obtemos 2 · (eᵘ − 1)/u, cujo limite é 2.",
  },
  {
    question: "Qual expressão tende ao número e?",
    options: ["(1 + x)ˣ quando x → 0", "(1 + 1/x)ˣ quando x → ∞", "sen(x)/x quando x → ∞", "eˣ/x quando x → 0"],
    correctAnswer: 1,
    explanation: "Esta é uma das definições clássicas do número de Euler.",
  },
  {
    question: "Quanto vale limₓ→₀ sen(4x)/sen(2x)?",
    options: ["1/2", "1", "2", "4"],
    correctAnswer: 2,
    explanation: "Separando os limites fundamentais, a razão dos coeficientes é 4/2 = 2.",
  },
];

const FundamentalLimits = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Limites Fundamentais: Fórmulas e Exemplos",
    description: "Guia gratuito sobre limites fundamentais com fórmulas, exercícios resolvidos, quiz e flashcards.",
    educationalLevel: "Ensino secundário e superior",
    learningResourceType: "Guia de estudo",
    inLanguage: "pt-PT",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Limites Fundamentais: Fórmulas e Exemplos"
        description="Aprende os limites fundamentais com fórmulas explicadas, exercícios resolvidos passo a passo, quiz e flashcards para revisão."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pb-16 pt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/recursos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos recursos
            </Link>
          </Button>

          <header className="mb-14 max-w-3xl">
            <p className="mb-3 font-semibold text-primary">Guia de estudo</p>
            <h1 className="mb-5 text-4xl font-bold text-foreground md:text-5xl">Limites Fundamentais</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Os limites fundamentais são resultados de referência usados para transformar e resolver expressões que, por substituição direta, produzem formas indeterminadas. Aqui encontras as fórmulas essenciais, o raciocínio por trás de cada aplicação e exercícios resolvidos.
            </p>
          </header>

          <section className="mb-14" aria-labelledby="formulas-title">
            <h2 id="formulas-title" className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
              <BookOpen className="h-6 w-6 text-primary" />
              Três limites fundamentais
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {formulas.map((item) => (
                <Card key={item.title} className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 rounded-md bg-primary/10 p-4 text-center text-xl font-bold text-primary">{item.formula}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-14" aria-labelledby="examples-title">
            <h2 id="examples-title" className="mb-6 text-2xl font-bold text-foreground">Exercícios resolvidos passo a passo</h2>
            <div className="space-y-6">
              <article className="border-l-4 border-secondary bg-card p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">1. Calcular limₓ→₀ sen(7x) / x</h3>
                <ol className="space-y-2 text-foreground/80">
                  <li><strong>Passo 1:</strong> criar a forma sen(u)/u, multiplicando e dividindo por 7.</li>
                  <li><strong>Passo 2:</strong> sen(7x)/x = 7 · sen(7x)/(7x).</li>
                  <li><strong>Passo 3:</strong> quando x → 0, também 7x → 0, logo sen(7x)/(7x) → 1.</li>
                </ol>
                <p className="mt-4 font-bold text-primary">Resultado: 7</p>
              </article>

              <article className="border-l-4 border-secondary bg-card p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">2. Calcular limₓ→₀ (e³ˣ − 1) / x</h3>
                <ol className="space-y-2 text-foreground/80">
                  <li><strong>Passo 1:</strong> definir u = 3x; assim, x = u/3.</li>
                  <li><strong>Passo 2:</strong> (e³ˣ − 1)/x = 3 · (eᵘ − 1)/u.</li>
                  <li><strong>Passo 3:</strong> aplicar o limite exponencial fundamental, que vale 1.</li>
                </ol>
                <p className="mt-4 font-bold text-primary">Resultado: 3</p>
              </article>

              <article className="border-l-4 border-secondary bg-card p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">3. Calcular limₓ→∞ (1 + 4/x)ˣ</h3>
                <ol className="space-y-2 text-foreground/80">
                  <li><strong>Passo 1:</strong> definir u = x/4, ficando 1 + 4/x = 1 + 1/u.</li>
                  <li><strong>Passo 2:</strong> como x = 4u, a expressão torna-se [(1 + 1/u)ᵘ]⁴.</li>
                  <li><strong>Passo 3:</strong> a expressão entre parênteses tende a e.</li>
                </ol>
                <p className="mt-4 font-bold text-primary">Resultado: e⁴</p>
              </article>
            </div>
          </section>

          <section className="mb-14 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <Lightbulb className="h-6 w-6 text-primary" /> Quando aplicar
              </h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> A substituição direta produz 0/0.</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> A expressão pode ser reescrita para coincidir com uma fórmula fundamental.</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> Existem senos, exponenciais ou potências do tipo 1∞.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Erros frequentes</h2>
              <ul className="space-y-3 text-foreground/80">
                <li><strong>Graus em vez de radianos:</strong> a fórmula sen(x)/x = 1 exige radianos.</li>
                <li><strong>Ignorar o coeficiente:</strong> em sen(ax)/x, o resultado é a, não 1.</li>
                <li><strong>Aplicar sem transformar:</strong> confirma sempre se numerador e denominador tendem a zero na variável auxiliar.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8" aria-label="Revisão com flashcards">
            <Flashcards title="Flashcards: Limites Fundamentais" cards={flashcards} />
          </section>
          <section aria-label="Quiz sobre limites fundamentais">
            <Quiz title="Quiz: Limites Fundamentais" questions={questions} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FundamentalLimits;