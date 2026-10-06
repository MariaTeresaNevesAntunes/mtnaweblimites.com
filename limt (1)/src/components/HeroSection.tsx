import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex items-center justify-center gap-4 mb-6">
          <BookOpen className="w-12 h-12 text-accent animate-bounce-gentle" />
          <TrendingUp className="w-10 h-10 text-primary-glow" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
          MTNA – Matemática Sem Limites
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground/90 mb-8">
          A Fronteira do Conhecimento
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Os limites ajudam-nos a entender o comportamento de uma função quando nos aproximamos de um ponto — 
          mesmo sem o atingir. São fundamentais para o cálculo, a física, a economia e até para compreender 
          o mundo em constante mudança.
        </p>
        
        <div className="pt-8">
          <Button 
            variant="hero" 
            size="hero"
            className="animate-scale-in"
            onClick={() => document.getElementById('what-is-limit')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Começar a Explorar
          </Button>
        </div>
      </div>
      
      {/* Decorative mathematical symbols */}
      <div className="absolute top-20 left-10 text-6xl text-primary/20 animate-bounce-gentle">∫</div>
      <div className="absolute bottom-20 right-10 text-5xl text-secondary/20 animate-bounce-gentle" style={{ animationDelay: '1s' }}>∞</div>
      <div className="absolute top-1/2 left-20 text-4xl text-accent/30 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>∂</div>
    </section>
  );
};