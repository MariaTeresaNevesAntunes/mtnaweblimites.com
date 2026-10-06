import { Brain, ArrowRight } from "lucide-react";
import { Quiz } from "./Quiz";
import { Flashcards } from "./Flashcards";

const whatIsLimitFlashcards = [
  {
    front: "O que é um limite?",
    back: "O valor que uma função se aproxima quando a variável x se aproxima de um determinado ponto."
  },
  {
    front: "Qual a notação de limite?",
    back: "lim(x→a) f(x) - lê-se 'limite de f(x) quando x tende a a'"
  },
  {
    front: "Se f(x) = 2x, qual é lim(x→3) f(x)?",
    back: "O limite é 6, pois f(3) = 2 × 3 = 6"
  },
  {
    front: "Analogia da ponte para limites?",
    back: "Podemos ver onde a ponte termina sem a cruzar - o limite é o destino, não a chegada."
  }
];
const whatIsLimitQuestions = [
  {
    question: "O que descreve um limite em matemática?",
    options: [
      "O valor máximo de uma função",
      "O valor que uma função se aproxima quando x tende a um ponto",
      "O ponto onde a função cruza o eixo x",
      "A derivada da função"
    ],
    correctAnswer: 1,
    explanation: "Um limite descreve o valor que uma função se aproxima à medida que a variável x se aproxima de um determinado ponto."
  },
  {
    question: "Se f(x) = 2x, qual é lim(x→3) f(x)?",
    options: ["3", "2", "6", "5"],
    correctAnswer: 2,
    explanation: "Quando x se aproxima de 3, f(x) = 2×3 = 6."
  },
  {
    question: "Na analogia da ponte, o limite representa:",
    options: [
      "A ponte em si",
      "O ponto de partida",
      "Onde a ponte termina (mesmo sem a cruzar)",
      "A velocidade ao atravessar"
    ],
    correctAnswer: 2,
    explanation: "O limite é como ver onde a ponte termina — podemos saber o destino sem realmente lá chegar."
  },
  {
    question: "Qual é a notação correta para 'limite de f(x) quando x tende a 5'?",
    options: [
      "f(5) = lim",
      "lim(x→5) f(x)",
      "x → f(5)",
      "lim f(x) = 5"
    ],
    correctAnswer: 1,
    explanation: "A notação correta é lim(x→5) f(x), que se lê 'limite de f(x) quando x tende a 5'."
  }
];

export const WhatIsLimit = () => {
  return (
    <section id="what-is-limit" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">🧠 O que é um limite?</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Um limite descreve o valor que uma função se aproxima à medida que a variável 
              independente (normalmente <span className="font-mono text-primary">x</span>) se aproxima 
              de um determinado ponto.
            </p>
            
            <div className="math-card">
              <h3 className="text-xl font-semibold mb-4 text-accent">📐 Exemplo simples:</h3>
              <p className="mb-4">Se <span className="math-formula inline">f(x) = 2x</span>, então quando 
              <span className="font-mono text-primary"> x → 3</span>, temos:</p>
              
              <div className="math-formula text-center text-xl">
                lim<sub className="text-sm">x → 3</sub> f(x) = 6
              </div>
            </div>
            
            <div className="bg-gradient-accent p-6 rounded-xl text-accent-foreground">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Explicação visual:
              </h4>
              <p className="leading-relaxed">
                Imagina uma estrada que leva até uma ponte. Mesmo que não cruzes a ponte, 
                podes ver claramente onde ela termina — esse é o limite.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="math-card bg-gradient-secondary p-8 text-center">
              <div className="text-6xl mb-6">🌉</div>
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Visualização do Limite
              </h3>
              <div className="space-y-4">
                <div className="bg-background/20 p-4 rounded-lg">
                  <div className="text-sm text-foreground/70 mb-2">À medida que x se aproxima de 3:</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>x = 2.9 → f(x) = 5.8</div>
                    <div>x = 2.99 → f(x) = 5.98</div>
                    <div>x = 2.999 → f(x) = 5.998</div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-accent">
                    O limite é 6! 🎯
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flashcards Section */}
        <div className="mt-12 animate-fade-in">
          <Flashcards title="🃏 Flashcards: O que é um limite?" cards={whatIsLimitFlashcards} />
        </div>

        {/* Quiz Section */}
        <div className="mt-8 animate-fade-in">
          <Quiz title="📝 Quiz: O que é um limite?" questions={whatIsLimitQuestions} />
        </div>
      </div>
    </section>
  );
};