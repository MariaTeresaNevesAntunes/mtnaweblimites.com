import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SEO
        title="Página não encontrada (404)"
        description="A página que procuras não existe ou foi movida. Volta ao início para continuar a aprender limites matemáticos."
        noindex
      />
      <div className="text-center px-6">
        <h1 className="mb-4 text-5xl font-bold text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Ups! Não encontrámos esta página.
        </p>
        <Link to="/" className="text-primary underline hover:text-primary/80">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
