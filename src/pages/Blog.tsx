import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { articles } from "@/data/articles";

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog"
        description="Artigos, dicas e explorações sobre limites matemáticos. Aprende com conteúdos práticos sobre cálculo e matemática."
        type="website"
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              📝 Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Artigos, dicas e explorações sobre o mundo dos limites matemáticos.
            </p>
          </section>

          {/* Articles List */}
          <section className="space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${article.slug}`}
                      className="flex items-center gap-1 text-primary hover:underline font-medium"
                    >
                      Ler mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
