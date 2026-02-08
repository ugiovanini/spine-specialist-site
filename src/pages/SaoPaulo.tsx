import { useEffect } from "react";

// SEO PAGE - Local landing for São Paulo
// noindex, nofollow - NOT linked in navigation or sitemap

const SaoPaulo = () => {
  useEffect(() => {
    // Set page title
    document.title = "Especialista em Coluna em São Paulo | Spine Specialist";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Avaliação e cuidado da coluna com foco em movimento e mobilidade em São Paulo.');

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
          Especialista em Coluna em São Paulo
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed mb-6">
            A rotina urbana de São Paulo, com longos deslocamentos, jornadas extensas e pouco tempo para pausas, pode contribuir para o surgimento de desconfortos na coluna. Nesse contexto, contar com um especialista em coluna na capital paulista pode fazer diferença na forma como você cuida do seu corpo e preserva sua mobilidade no dia a dia.
          </p>

          <p className="leading-relaxed mb-6">
            A avaliação clínica especializada permite identificar fatores que podem estar associados ao problema, orientando condutas individualizadas. O objetivo é favorecer a melhora funcional, respeitando a resposta de cada pessoa ao tratamento.
          </p>

          <p className="leading-relaxed mb-6">
            Se você busca cuidado especializado em coluna em São Paulo, agende uma avaliação para entender melhor sua condição e conhecer as opções de tratamento adequadas ao seu caso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaoPaulo;
