import { Navigation, ArrowLeft, ArrowRight } from "lucide-react";
import { Quiz } from "./Quiz";
import { Flashcards } from "./Flashcards";

const lateralLimitsFlashcards = [
  {
    front: "O que significa lim(x→a⁻)?",
    back: "Limite pela esquerda - aproximamo-nos de 'a' por valores menores."
  },
  {
    front: "O que significa lim(x→a⁺)?",
    back: "Limite pela direita - aproximamo-nos de 'a' por valores maiores."
  },
  {
    front: "Quando é que o limite existe?",
    back: "Quando os limites laterais são iguais: lim(x→a⁻) = lim(x→a⁺)"
  },
  {
    front: "Se lim(x→1⁻) = 2 e lim(x→1⁺) = 5, o limite existe?",
    back: "Não! Os limites laterais são diferentes (2 ≠ 5), logo o limite não existe."
  },
  {
    front: "O que é uma descontinuidade de salto?",
    back: "Quando os limites laterais existem mas são diferentes - a função 'salta' de um valor para outro."
  }
];
const lateralLimitsQuestions = [
  {
    question: "O que significa lim(x→a⁻) f(x)?",
    options: [
      "Limite quando x se afasta de a",
      "Limite quando x se aproxima de a pela esquerda",
      "Limite quando x se aproxima de a pela direita",
      "Limite quando x é igual a a"
    ],
    correctAnswer: 1,
    explanation: "O símbolo ⁻ indica que nos aproximamos de a por valores menores (pela esquerda)."
  },
  {
    question: "Para que o limite exista num ponto, os limites laterais devem ser:",
    options: [
      "Diferentes",
      "Iguais",
      "Infinitos",
      "Zero"
    ],
    correctAnswer: 1,
    explanation: "O limite só existe se lim(x→a⁻) = lim(x→a⁺), ou seja, os dois limites laterais devem ser iguais."
  },
  {
    question: "Se f(x) = 2 para x < 1 e f(x) = 5 para x ≥ 1, o limite em x = 1:",
    options: [
      "É igual a 2",
      "É igual a 5",
      "Não existe",
      "É igual a 3.5"
    ],
    correctAnswer: 2,
    explanation: "Como lim(x→1⁻) = 2 e lim(x→1⁺) = 5 são diferentes, o limite não existe."
  },
  {
    question: "O símbolo + em lim(x→a⁺) significa:",
    options: [
      "Soma",
      "Valor positivo",
      "Aproximação pela direita",
      "Limite maior que zero"
    ],
    correctAnswer: 2,
    explanation: "O + indica que nos aproximamos de a por valores maiores (pela direita)."
  },
  {
    question: "Numa função contínua, os limites laterais:",
    options: [
      "São sempre diferentes",
      "Não existem",
      "São sempre iguais ao valor da função",
      "São sempre infinitos"
    ],
    correctAnswer: 2,
    explanation: "Numa função contínua, os limites laterais são iguais entre si e iguais ao valor da função nesse ponto."
  }
];

export const LateralLimits = () => {
  return (
    <section id="lateral-limits" className="py-20 px-6 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Navigation className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold">🧭 Limites Laterais</h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Nem sempre nos aproximamos de um ponto da mesma forma. Às vezes, o comportamento da função 
            muda dependendo do lado por onde nos aproximamos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="math-card animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <ArrowLeft className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">🔹 Limite pela esquerda</h3>
            </div>
            
            <div className="space-y-4">
              <div className="math-formula text-center">
                lim<sub className="text-sm">x → a⁻</sub> f(x)
              </div>
              
              <p className="text-foreground/80">
                Significa que estamos a aproximar-nos de <span className="font-mono text-primary">a</span> vindo 
                de valores <strong>menores</strong> que <span className="font-mono text-primary">a</span>.
              </p>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-center text-primary font-semibold">← ← ← a</div>
                <div className="text-sm text-center text-muted-foreground mt-2">
                  Aproximando pela esquerda
                </div>
              </div>
            </div>
          </div>
          
          <div className="math-card animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <ArrowRight className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold">🔸 Limite pela direita</h3>
            </div>
            
            <div className="space-y-4">
              <div className="math-formula text-center">
                lim<sub className="text-sm">x → a⁺</sub> f(x)
              </div>
              
              <p className="text-foreground/80">
                Significa que estamos a aproximar-nos de <span className="font-mono text-primary">a</span> vindo 
                de valores <strong>maiores</strong> que <span className="font-mono text-primary">a</span>.
              </p>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <div className="text-center text-secondary font-semibold">a → → →</div>
                <div className="text-sm text-center text-muted-foreground mt-2">
                  Aproximando pela direita
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="math-card animate-scale-in mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">📊 Exemplo visual</h3>
            <p className="text-lg text-foreground/80">
              Imagina uma função com um salto — como uma escada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-accent">📈 Exemplo numérico:</h4>
              
              <div className="math-formula">
                f(x) = {"{"}
                <div className="ml-4 space-y-1">
                  <div>2 &nbsp;&nbsp;&nbsp; se x &lt; 1</div>
                  <div>5 &nbsp;&nbsp;&nbsp; se x ≥ 1</div>
                </div>
                {"}"}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5 text-primary" />
                  <span className="math-formula inline">
                    lim<sub className="text-xs">x → 1⁻</sub> f(x) = 2
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-secondary" />
                  <span className="math-formula inline">
                    lim<sub className="text-xs">x → 1⁺</sub> f(x) = 5
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-primary p-6 rounded-xl text-primary-foreground">
              <div className="text-center space-y-4">
                <div className="text-4xl">⚠️</div>
                <h4 className="text-xl font-bold">Conclusão importante:</h4>
                <p className="leading-relaxed">
                  Como os dois limites laterais são <strong>diferentes</strong> (2 ≠ 5), 
                  dizemos que <strong>o limite em x = 1 não existe</strong>.
                </p>
                
                <div className="bg-background/20 p-4 rounded-lg mt-4">
                  <div className="text-sm">Para o limite existir:</div>
                  <div className="font-mono text-lg mt-2">
                    lim<sub>x → a⁻</sub> f(x) = lim<sub>x → a⁺</sub> f(x)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flashcards Section */}
        <div className="animate-fade-in mb-8">
          <Flashcards title="🃏 Flashcards: Limites Laterais" cards={lateralLimitsFlashcards} />
        </div>

        {/* Quiz Section */}
        <div className="animate-fade-in">
          <Quiz title="📝 Quiz: Limites Laterais" questions={lateralLimitsQuestions} />
        </div>
      </div>
    </section>
  );
};