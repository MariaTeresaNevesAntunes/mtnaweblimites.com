import { HeroSection } from "@/components/HeroSection";
import { WhatIsLimit } from "@/components/WhatIsLimit";
import { LateralLimits } from "@/components/LateralLimits";
import InfiniteLimits from "@/components/InfiniteLimits";
import IndeterminationsSection from "@/components/IndeterminationsSection";
import { NavigationDots } from "@/components/NavigationDots";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="MTNA – Limites Matemáticos e Cálculo | Exercícios Resolvidos"
        description="Aprende limites matemáticos de forma simples. Exercícios resolvidos, quizzes interativos, flashcards e PDFs gratuitos para o secundário e universidade."
      />
      {/* Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <div id="hero" className="pt-16">
        <HeroSection />
      </div>
      
      {/* Educational Content */}
      <WhatIsLimit />
      <LateralLimits />
      <InfiniteLimits />
      <IndeterminationsSection />
      
      {/* Navigation */}
      <NavigationDots />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
