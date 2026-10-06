import { useParams, Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { articles } from "@/data/articles";

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// Very small markdown-ish renderer for our controlled article content.
const renderContent = (content: string) => {
  const blocks = content.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3 font-heading">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote key={i} className="border-l-4 border-primary bg-secondary/40 pl-4 py-2 my-4 italic text-foreground">
          {trimmed.replace(/^>\s+/, "")}
        </blockquote>
      );
    }
    // Lists
    if (/^(-|\d+\.)\s+/.test(trimmed)) {
      const isOrdered = /^\d+\.\s+/.test(trimmed);
      const items = trimmed.split(/\n/).map((l) => l.replace(/^(-|\d+\.)\s+/, ""));
      const Tag = isOrdered ? "ol" : "ul";
      return (
        <Tag
          key={i}
          className={`${isOrdered ? "list-decimal" : "list-disc"} pl-6 my-4 space-y-2 text-foreground/90`}
        >
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inline(it) }} />
          ))}
        </Tag>
      );
    }
    // Code-like indented lines (formulas)
    if (trimmed.split("\n").every((l) => l.startsWith("    "))) {
      return (
        <pre
          key={i}
          className="bg-secondary/60 border border-border rounded-lg p-4 my-4 overflow-x-auto text-sm font-mono text-foreground"
        >
          {trimmed.replace(/^ {4}/gm, "")}
        </pre>
      );
    }
    return (
      <p
        key={i}
        className="text-foreground/90 leading-relaxed my-4"
        dangerouslySetInnerHTML={{ __html: inline(trimmed) }}
      />
    );
  });
};

// Very small inline formatter: **bold**, *italic*
const inline = (text: string) =>
  text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={article.title}
        description={article.excerpt}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          dateModified: article.date,
          articleSection: article.category,
          inLanguage: "pt-PT",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://mtnaweblimites.com/blog/${article.slug}`,
          },
          author: { "@type": "Organization", name: "MTNA – Matemática Sem Limites" },
          publisher: {
            "@type": "Organization",
            name: "MTNA – Matemática Sem Limites",
            logo: {
              "@type": "ImageObject",
              url: "https://mtnaweblimites.com/og-image.png",
            },
          },
        }}
      />
      <Navbar />

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>

          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading leading-tight">
              {article.title}
            </h1>
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
          </header>

          <div className="prose-none">{renderContent(article.content)}</div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Ver mais artigos
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
