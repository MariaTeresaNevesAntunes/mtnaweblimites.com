import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Termos de Uso"
        description="Condições de utilização da plataforma MTNA – Matemática Sem Limites: direitos, deveres e regras de uso dos conteúdos educativos."
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Termos de Uso</h1>
        
        <div className="space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao aceder e utilizar este site educacional sobre Limites Matemáticos, concorda em 
              cumprir e ficar vinculado a estes Termos de Uso. Se não concordar com qualquer parte 
              destes termos, não deve utilizar o site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso do Conteúdo</h2>
            <p className="mb-4">O conteúdo deste site é fornecido exclusivamente para fins educacionais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pode utilizar o material para estudo pessoal</li>
              <li>A reprodução comercial não é permitida sem autorização</li>
              <li>Deve sempre creditar a fonte ao partilhar conteúdo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste site, incluindo textos, fórmulas matemáticas, gráficos e 
              design, está protegido por direitos de autor e outras leis de propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Precisão do Conteúdo</h2>
            <p>
              Embora nos esforcemos para garantir que todo o conteúdo matemático seja preciso e 
              atualizado, não garantimos a ausência de erros. O conteúdo é fornecido "como está" 
              e deve ser utilizado como complemento ao estudo formal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitação de Responsabilidade</h2>
            <p>
              Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou 
              consequentes resultantes do uso ou incapacidade de usar este site ou o seu conteúdo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Comportamento do Utilizador</h2>
            <p className="mb-4">Ao utilizar este site, concorda em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Não utilizar o site para fins ilegais</li>
              <li>Não tentar aceder a áreas restritas do sistema</li>
              <li>Não interferir com o funcionamento normal do site</li>
              <li>Respeitar os direitos de outros utilizadores</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Links Externos</h2>
            <p>
              Este site pode conter links para sites externos. Não somos responsáveis pelo conteúdo 
              ou práticas de privacidade de sites de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Alterações aos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
              entram em vigor imediatamente após a publicação no site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pela legislação portuguesa e da União Europeia em matéria 
              de proteção de dados e comércio eletrónico.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Última atualização: Dezembro de 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
