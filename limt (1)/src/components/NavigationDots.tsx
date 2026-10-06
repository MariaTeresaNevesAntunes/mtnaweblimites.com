import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'what-is-limit', label: 'O que é um limite?' },
  { id: 'lateral-limits', label: 'Limites Laterais' },
  { id: 'infinite-limits', label: 'Limites Infinitos' },
  { id: 'indeterminations', label: 'Indeterminações' },
];

export const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);
  
  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-3">
      {sections.map(({ id, label }) => (
        <div key={id} className="relative group">
          <button
            onClick={() => scrollToSection(id)}
            className={cn(
              "w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
              activeSection === id 
                ? "bg-accent border-accent shadow-lg" 
                : "bg-transparent border-muted-foreground/50 hover:border-accent"
            )}
            aria-label={`Ir para: ${label}`}
          />
          
          <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-card border border-border px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};