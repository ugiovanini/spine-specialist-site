import { useEffect } from "react";

// SEO PAGE - Local landing for Osasco
// noindex, nofollow - NOT linked in navigation or sitemap

const Osasco = () => {
  useEffect(() => {
    // Set page title
    document.title = "Especialista em Coluna em Osasco | Spine Specialist";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Avaliação e cuidado da coluna com foco em movimento e mobilidade em Osasco.');

    // Ensure page is not indexed
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Especialista em Coluna em Osasco
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed mb-6">
            A proximidade e conveniência de um especialista em coluna em Osasco podem facilitar o acesso a cuidados regulares, sem a necessidade de grandes deslocamentos até a capital. Isso permite maior frequência no acompanhamento e melhor aderência ao plano de tratamento proposto.
          </p>

          <p className="leading-relaxed mb-6">
            A avaliação clínica especializada permite identificar fatores que podem estar associados ao problema, orientando condutas individualizadas. O objetivo é favorecer a melhora funcional, respeitando a resposta de cada pessoa ao tratamento.
          </p>

          <p className="leading-relaxed mb-6">
            Se você mora em Osasco ou região e busca cuidado especializado em coluna, agende uma avaliação para entender melhor sua condição e conhecer as opções de tratamento adequadas ao seu caso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Osasco;
