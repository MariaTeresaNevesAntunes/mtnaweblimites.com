import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const sectionItems = [
  { id: 'hero', label: 'Início', href: '#hero' },
  { id: 'what-is-limit', label: 'O que é um limite?', href: '#what-is-limit' },
  { id: 'lateral-limits', label: 'Limites Laterais', href: '#lateral-limits' },
  { id: 'infinite-limits', label: 'Limites Infinitos', href: '#infinite-limits' },
  { id: 'indeterminations', label: 'Indeterminações', href: '#indeterminations' }
];

const pageItems = [
  { path: '/sobre', label: '📘 Sobre' },
  { path: '/recursos', label: '📚 Recursos' },
  { path: '/funcoes', label: '📐 Funções' },
  { path: '/blog', label: '📝 Blog' },
  { path: '/contato', label: '📩 Contato' }
];
export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, { threshold: 0.6 });

      sectionItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });

      window.addEventListener('scroll', handleScroll);
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-xl font-heading font-bold">
              <span className="text-primary">MTNA</span>
              <span className="text-muted-foreground font-medium"> – Matemática Sem Limites</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Section links (only on home page) */}
            {isHomePage && sectionItems.slice(1).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary relative",
                  activeSection === id ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {label}
                {activeSection === id && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
              </button>
            ))}

            {/* Page links */}
            {pageItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary",
                  location.pathname === path ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {/* Section links (only on home page) */}
              {isHomePage && sectionItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
                    activeSection === id ? "text-primary bg-primary/10 font-semibold" : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  )}
                >
                  {label}
                </button>
              ))}

              {/* Divider */}
              {isHomePage && <div className="border-t border-border my-2" />}

              {/* Page links */}
              {pageItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
                    location.pathname === path ? "text-primary bg-primary/10 font-semibold" : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};