import { useEffect } from "react";

// DRAFT PAGE - NOT FOR PRODUCTION
// This page is a placeholder for future local SEO implementation
// It is NOT linked in navigation, sitemap, or any internal links

const SaoPaulo = () => {
  useEffect(() => {
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
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Página em Construção
        </h1>
        <p className="text-muted-foreground">
          Especialista em Coluna - São Paulo
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          [DRAFT - Não publicado]
        </p>
      </div>
    </div>
  );
};

export default SaoPaulo;
