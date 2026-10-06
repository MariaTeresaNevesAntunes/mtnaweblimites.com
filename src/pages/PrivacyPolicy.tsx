import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Política de Privacidade"
        description="Saiba como o MTNA recolhe, utiliza e protege os seus dados ao navegar na plataforma educativa sobre limites matemáticos."
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>
        
        <div className="space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informações Gerais</h2>
            <p>
              Esta Política de Privacidade descreve como recolhemos, usamos e protegemos as suas informações 
              pessoais quando utiliza o nosso site educacional sobre Limites Matemáticos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dados Recolhidos</h2>
            <p className="mb-4">Podemos recolher os seguintes tipos de informações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
              <li>Informações do dispositivo (tipo de browser, sistema operativo)</li>
              <li>Endereço IP para fins de segurança e análise</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Uso das Informações</h2>
            <p className="mb-4">As informações recolhidas são utilizadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Melhorar a experiência do utilizador</li>
              <li>Analisar o desempenho do site</li>
              <li>Garantir a segurança da plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar a sua experiência de navegação. Pode configurar o seu 
              browser para recusar cookies, embora isso possa afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger as suas 
              informações pessoais contra acesso não autorizado, alteração ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Os Seus Direitos</h2>
            <p className="mb-4">Tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aceder aos seus dados pessoais</li>
              <li>Solicitar a correção de dados incorretos</li>
              <li>Solicitar a eliminação dos seus dados</li>
              <li>Opor-se ao processamento dos seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contacto</h2>
            <p>
              Para questões relacionadas com a privacidade, pode contactar-nos através do email: 
              <span className="text-primary"> privacidade@limites.edu</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Atualizações</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que consulte esta página 
              regularmente para se manter informado sobre quaisquer alterações.
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

export default PrivacyPolicy;
