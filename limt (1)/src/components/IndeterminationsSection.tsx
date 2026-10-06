import { Card } from "./ui/card";
import { Quiz } from "./Quiz";
import { Flashcards } from "./Flashcards";

const indeterminationsFlashcards = [
  {
    front: "Quais são as formas indeterminadas?",
    back: "0/0, ∞/∞, ∞-∞, 0·∞, 1^∞, 0^0, ∞^0"
  },
  {
    front: "lim(x→0) sin(x)/x = ?",
    back: "1 - Este é um limite notável fundamental."
  },
  {
    front: "lim(x→0) (eˣ - 1)/x = ?",
    back: "1 - Limite notável exponencial."
  },
  {
    front: "lim(x→0) ln(1+x)/x = ?",
    back: "1 - Limite notável logarítmico."
  },
  {
    front: "Como resolver 0/0?",
    back: "Fatorar, simplificar, usar limites notáveis ou regra de L'Hôpital."
  }
];
const indeterminationsQuestions = [
  {
    question: "Qual destas é uma forma indeterminada?",
    options: [
      "5/0",
      "0/0",
      "1/0",
      "0/5"
    ],
    correctAnswer: 1,
    explanation: "0/0 é uma forma indeterminada clássica. 5/0 e 1/0 tendem para infinito, e 0/5 = 0."
  },
  {
    question: "Para resolver lim(x→2) (x²-4)/(x-2), devemos:",
    options: [
      "Substituir x por 2 diretamente",
      "Fatorar o numerador e simplificar",
      "Usar a regra do hospital",
      "Dizer que não existe"
    ],
    correctAnswer: 1,
    explanation: "Fatorando: (x²-4) = (x-2)(x+2), podemos simplificar e obter lim(x→2) (x+2) = 4."
  },
  {
    question: "Qual é o valor de lim(x→0) sin(x)/x?",
    options: [
      "0",
      "∞",
      "1",
      "Não existe"
    ],
    correctAnswer: 2,
    explanation: "Este é um dos limites notáveis fundamentais: lim(x→0) sin(x)/x = 1."
  },
  {
    question: "O limite lim(x→0) (eˣ - 1)/x é igual a:",
    options: [
      "0",
      "e",
      "1",
      "∞"
    ],
    correctAnswer: 2,
    explanation: "Este é outro limite notável: lim(x→0) (eˣ - 1)/x = 1."
  },
  {
    question: "Qual destas NÃO é uma forma indeterminada?",
    options: [
      "∞ - ∞",
      "0 · ∞",
      "5/∞",
      "1^∞"
    ],
    correctAnswer: 2,
    explanation: "5/∞ = 0, é determinado. As outras (∞-∞, 0·∞, 1^∞) são formas indeterminadas."
  }
];

const IndeterminationsSection = () => {
  return (
    <section id="indeterminations" className="min-h-screen bg-gradient-hero p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            ⚠️ Indeterminações: Quando o limite não se revela de imediato
          </h2>
          <p className="text-xl text-foreground/80 mb-12 text-center">
            Nem todos os limites podem ser calculados diretamente. Às vezes, ao substituir o valor na função, obtemos expressões indeterminadas.
          </p>
        </div>

        {/* Formas Indeterminadas */}
        <Card className="math-card animate-scale-in mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Formas Indeterminadas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div className="math-formula">0/0</div>
            <div className="math-formula">∞/∞</div>
            <div className="math-formula">∞ - ∞</div>
            <div className="math-formula">0 · ∞</div>
            <div className="math-formula">1<sup>∞</sup></div>
            <div className="math-formula">0<sup>0</sup></div>
          </div>
          <p className="text-foreground/80 mt-6 text-center">
            Estas são chamadas formas indeterminadas, porque não nos dizem qual é o valor do limite — precisamos de transformar a expressão para descobrir.
          </p>
        </Card>

        {/* Exemplo Clássico */}
        <Card className="math-card animate-slide-in-left mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            🔍 Exemplo clássico: 0/0
          </h3>
          
          <div className="space-y-4">
            <div className="math-formula mb-4">
              lim<sub>x→2</sub> (x² - 4)/(x - 2)
            </div>
            
            <p className="text-foreground">Substituindo diretamente:</p>
            <div className="bg-red-200 dark:bg-red-900/40 p-3 rounded border border-red-300 dark:border-red-700">
              <span className="font-mono text-red-900 dark:text-red-200">(2² - 4)/(2 - 2) = 0/0</span>
            </div>
            
            <p className="text-foreground">Mas se fatorarmos o numerador:</p>
            <div className="math-formula">
              (x - 2)(x + 2)/(x - 2)
            </div>
            
            <p className="text-foreground">Cancelamos x - 2 e obtemos:</p>
            <div className="bg-green-200 dark:bg-green-900/40 p-3 rounded border border-green-300 dark:border-green-700">
              <span className="font-mono text-green-900 dark:text-green-200">lim<sub>x→2</sub> x + 2 = 4</span>
            </div>
            
            <p className="text-accent font-semibold">✅ O limite existe — só precisávamos de simplificar.</p>
          </div>
        </Card>

        {/* Limites Notáveis */}
        <Card className="math-card animate-slide-in-right mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            🧠 Limites Notáveis: Ferramentas para resolver indeterminações
          </h3>
          <p className="text-foreground/80 mb-8 text-center">
            Estes são limites que aparecem frequentemente e que devemos conhecer de cor:
          </p>

          <div className="space-y-8">
            {/* Limite Trigonométrico */}
            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                🔸 1. Limite trigonométrico
              </h4>
              <div className="math-formula mb-3">
                lim<sub>x→0</sub> sin(x)/x = 1
              </div>
              <p className="text-foreground/80 mb-4">
                Usado para resolver indeterminações envolvendo funções trigonométricas.
              </p>
              
              {/* Exemplo Resolvido */}
              <div className="bg-background/80 border border-border p-4 rounded-lg space-y-3">
                <p className="text-sm font-semibold text-primary">📝 Exercício resolvido:</p>
                <div className="math-formula text-sm">
                  lim<sub>x→0</sub> sin(3x)/x
                </div>
                <p className="text-foreground text-sm">
                  <strong>Passo 1:</strong> Multiplicamos e dividimos por 3:
                </p>
                <div className="math-formula text-sm">
                  = lim<sub>x→0</sub> 3 · sin(3x)/(3x)
                </div>
                <p className="text-foreground text-sm">
                  <strong>Passo 2:</strong> Fazemos u = 3x, quando x→0, u→0:
                </p>
                <div className="math-formula text-sm">
                  = 3 · lim<sub>u→0</sub> sin(u)/u = 3 · 1 = <span className="text-accent font-bold">3</span>
                </div>
              </div>
            </div>

            {/* Limite Exponencial */}
            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                🔸 2. Limite exponencial
              </h4>
              <div className="math-formula mb-3">
                lim<sub>x→0</sub> (e<sup>x</sup> - 1)/x = 1
              </div>
              <p className="text-foreground/80 mb-4">
                Essencial para funções exponenciais e logarítmicas.
              </p>
              
              {/* Exemplo Resolvido */}
              <div className="bg-background/80 border border-border p-4 rounded-lg space-y-3">
                <p className="text-sm font-semibold text-primary">📝 Exercício resolvido:</p>
                <div className="math-formula text-sm">
                  lim<sub>x→0</sub> (e<sup>2x</sup> - 1)/x
                </div>
                <p className="text-foreground text-sm">
                  <strong>Passo 1:</strong> Multiplicamos e dividimos por 2:
                </p>
                <div className="math-formula text-sm">
                  = lim<sub>x→0</sub> 2 · (e<sup>2x</sup> - 1)/(2x)
                </div>
                <p className="text-foreground text-sm">
                  <strong>Passo 2:</strong> Fazemos u = 2x, quando x→0, u→0:
                </p>
                <div className="math-formula text-sm">
                  = 2 · lim<sub>u→0</sub> (e<sup>u</sup> - 1)/u = 2 · 1 = <span className="text-accent font-bold">2</span>
                </div>
              </div>
            </div>

            {/* Limite Logarítmico */}
            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                🔸 3. Limite logarítmico
              </h4>
              <div className="math-formula mb-3">
                lim<sub>x→0</sub> ln(1 + x)/x = 1
              </div>
              <p className="text-foreground/80 mb-4">
                Muito útil em cálculo avançado e aplicações em economia e física.
              </p>
              
              {/* Exemplo Resolvido */}
              <div className="bg-background/80 border border-border p-4 rounded-lg space-y-3">
                <p className="text-sm font-semibold text-primary">📝 Exercício resolvido:</p>
                <div className="math-formula text-sm">
                  lim<sub>x→0</sub> ln(1 + 5x)/x
                </div>
                <p className="text-foreground text-sm">
                  <strong>Passo 1:</strong> Multiplicamos e dividimos por 5:
                </p>
                <div className="math-formula text-sm">
                  = lim<sub>x→0</sub> 5 · ln(1 + 5x)/(5x)
                </div>
                <p className="text-foreground text-sm">
                  <strong>Passo 2:</strong> Fazemos u = 5x, quando x→0, u→0:
                </p>
                <div className="math-formula text-sm">
                  = 5 · lim<sub>u→0</sub> ln(1 + u)/u = 5 · 1 = <span className="text-accent font-bold">5</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Flashcards Section */}
        <div className="animate-fade-in mb-8">
          <Flashcards title="🃏 Flashcards: Indeterminações" cards={indeterminationsFlashcards} />
        </div>

        {/* Quiz Section */}
        <div className="animate-fade-in mb-12">
          <Quiz title="📝 Quiz: Indeterminações" questions={indeterminationsQuestions} />
        </div>

        {/* Frase de apoio */}
        <div className="text-center animate-bounce-gentle">
          <div className="bg-gradient-accent text-accent-foreground p-6 rounded-2xl shadow-lg inline-block">
            <h4 className="text-xl font-bold mb-2">💡 Frase de apoio</h4>
            <p className="text-lg italic">
              "Uma indeterminação não é um obstáculo — é um convite para pensar mais fundo."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndeterminationsSection;