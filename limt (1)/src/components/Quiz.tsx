import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
}

export const Quiz = ({ title, questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
  };

  const isCorrect = selectedAnswer === questions[currentQuestion]?.correctAnswer;

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          🎯 Resultado do Quiz
        </h3>
        <div className="text-center space-y-4">
          <div className="text-5xl font-bold text-primary">
            {score}/{questions.length}
          </div>
          <p className="text-foreground/80">
            {percentage >= 80 
              ? "Excelente! Dominas bem este tema! 🌟"
              : percentage >= 60
              ? "Bom trabalho! Continua a praticar! 👍"
              : "Não desistas! Revê o conteúdo e tenta novamente! 💪"}
          </p>
          <Button onClick={handleRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Tentar Novamente
          </Button>
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-lg text-foreground font-medium">{question.question}</p>

        <div className="space-y-2">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === question.correctAnswer;
            
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={answered}
                className={cn(
                  "w-full p-4 text-left rounded-lg border-2 transition-all duration-200",
                  !answered && "hover:border-primary hover:bg-primary/5",
                  answered && isCorrectOption && "border-green-500 bg-green-500/10",
                  answered && isSelected && !isCorrectOption && "border-red-500 bg-red-500/10",
                  !answered && "border-border bg-background",
                  isSelected && !answered && "border-primary bg-primary/10"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-foreground">{option}</span>
                  {answered && isCorrectOption && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {answered && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={cn(
            "p-4 rounded-lg animate-fade-in",
            isCorrect ? "bg-green-500/10 border border-green-500/30" : "bg-red-500/10 border border-red-500/30"
          )}>
            <p className="text-sm text-foreground">
              <strong>{isCorrect ? "✅ Correto!" : "❌ Incorreto."}</strong>{" "}
              {question.explanation}
            </p>
          </div>
        )}

        {answered && (
          <Button onClick={handleNextQuestion} className="w-full">
            {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
          </Button>
        )}
      </div>
    </Card>
  );
};
