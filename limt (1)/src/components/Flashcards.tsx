import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlashcardData {
  front: string;
  back: string;
}

interface FlashcardsProps {
  title: string;
  cards: FlashcardData[];
}

export const Flashcards = ({ title, cards }: FlashcardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set());

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCompletedCards(prev => new Set([...prev, currentIndex]));
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompletedCards(new Set());
  };

  const card = cards[currentIndex];
  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <Card className="p-6 bg-card border-primary/20 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1}/{cards.length}
          </span>
          <Button variant="ghost" size="sm" onClick={handleRestart}>
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-muted rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Flashcard */}
      <div 
        className="perspective-1000 cursor-pointer mb-6"
        onClick={handleFlip}
      >
        <div 
          className={cn(
            "relative w-full min-h-[200px] transition-transform duration-500 transform-style-preserve-3d",
            isFlipped && "rotate-y-180"
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-primary/15 to-secondary/25 rounded-xl p-6 flex flex-col items-center justify-center border-2 border-primary/40 shadow-inner"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-sm text-primary font-medium mb-2">Pergunta</p>
            <p className="text-lg text-center text-foreground font-semibold">{card.front}</p>
            <p className="text-xs text-muted-foreground mt-4">Clique para ver a resposta</p>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-secondary/30 to-accent/40 rounded-xl p-6 flex flex-col items-center justify-center border-2 border-secondary/50 shadow-inner"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <p className="text-sm text-primary font-medium mb-2">Resposta</p>
            <p className="text-lg text-center text-foreground font-semibold">{card.back}</p>
            <p className="text-xs text-muted-foreground mt-4">Clique para voltar</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </Button>

        <div className="flex gap-1">
          {cards.map((_, index) => (
            <div 
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentIndex 
                  ? "bg-primary" 
                  : completedCards.has(index) 
                  ? "bg-accent" 
                  : "bg-muted"
              )}
            />
          ))}
        </div>

        <Button 
          variant="outline" 
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          className="gap-2"
        >
          Próximo
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};
