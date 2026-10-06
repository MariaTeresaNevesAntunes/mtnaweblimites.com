import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading font-bold text-lg">
            <span className="text-primary">MTNA</span>
            <span className="text-muted-foreground font-medium text-sm"> – Matemática Sem Limites</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link 
              to="/sobre" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link 
              to="/recursos" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Recursos
            </Link>
            <Link 
              to="/blog" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/contato" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link 
              to="/politica-privacidade" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidade
            </Link>
            <Link 
              to="/termos-uso" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termos
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 MTNA – Matemática Sem Limites. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
