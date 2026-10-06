import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, BookOpen, Award } from "lucide-react";
import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sobre"
        description="Conhece o projeto Limites Matemáticos. Uma plataforma educativa dedicada a tornar o conceito de limites acessível para todos os estudantes."
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              📘 Sobre o Projeto
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma educativa dedicada a tornar o conceito de limites matemáticos acessível e compreensível para todos os estudantes.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Nossa Missão
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed">
                  Acreditamos que a matemática deve ser acessível a todos. O conceito de limite é fundamental para o cálculo e muitas áreas da ciência e engenharia. Nossa missão é desmistificar este conceito através de explicações claras, exemplos práticos e recursos interativos.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Objectives Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Objetivos
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Educação Acessível</h3>
                  <p className="text-muted-foreground">
                    Oferecer conteúdo gratuito e de qualidade para estudantes do ensino secundário e universitário.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Aprendizagem Interativa</h3>
                  <p className="text-muted-foreground">
                    Utilizar exemplos visuais e exercícios práticos para facilitar a compreensão.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Progressão Lógica</h3>
                  <p className="text-muted-foreground">
                    Estruturar o conteúdo de forma progressiva, do básico ao avançado.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Apoio Contínuo</h3>
                  <p className="text-muted-foreground">
                    Disponibilizar recursos complementares como exercícios e materiais de estudo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Who We Are Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Quem Somos
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed">
                  Somos uma equipa de entusiastas da matemática e da educação, comprometidos em criar recursos educativos de alta qualidade. Este projeto nasceu da vontade de ajudar estudantes que enfrentam dificuldades com o conceito de limites, um tema essencial mas frequentemente desafiador.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* What You'll Learn Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              O Que Vais Aprender
            </h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>O conceito fundamental de limite e sua intuição geométrica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Limites laterais e sua importância na continuidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Limites infinitos e comportamento assintótico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Formas indeterminadas e técnicas de resolução</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Limites notáveis e suas aplicações</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
