import { useEffect } from "react";

// SEO PAGE - Local landing for ABC Paulista
// noindex, nofollow - NOT linked in navigation or sitemap

const AbcPaulista = () => {
  useEffect(() => {
    // Set page title
    document.title = "Especialista em Coluna no ABC Paulista | Spine Specialist";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Avaliação e cuidado da coluna com foco em movimento e mobilidade no ABC Paulista.');

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
          Especialista em Coluna no ABC Paulista
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed mb-6">
            A rotina industrial e o esforço físico característicos da região do ABC Paulista podem contribuir para sobrecargas na coluna vertebral. Contar com um especialista em coluna próximo à sua região facilita o acesso a avaliações e acompanhamentos regulares, sem a necessidade de longos deslocamentos.
          </p>

          <p className="leading-relaxed mb-6">
            A avaliação clínica especializada permite identificar fatores que podem estar associados ao problema, orientando condutas individualizadas. O objetivo é favorecer a melhora funcional, respeitando a resposta de cada pessoa ao tratamento.
          </p>

          <p className="leading-relaxed mb-6">
            Se você mora no ABC Paulista e busca cuidado especializado em coluna, agende uma avaliação para entender melhor sua condição e conhecer as opções de tratamento adequadas ao seu caso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbcPaulista;
