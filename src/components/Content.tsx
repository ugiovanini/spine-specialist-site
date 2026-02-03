import { FileText, Video, Headphones, StickyNote } from "lucide-react";

const Content = () => {
  const contentTypes = [
    {
      icon: FileText,
      title: "Artigos",
      description: "Publicações científicas e informativas sobre saúde da coluna vertebral.",
      href: "#artigos",
    },
    {
      icon: Video,
      title: "Vídeos",
      description: "Conteúdo audiovisual com orientações e exercícios para sua coluna.",
      href: "#videos",
    },
    {
      icon: Headphones,
      title: "Áudios",
      description: "Podcasts e orientações em áudio para você ouvir onde estiver.",
      href: "#audios",
    },
    {
      icon: StickyNote,
      title: "Notas",
      description: "Dicas rápidas e atualizações sobre cuidados com a coluna.",
      href: "#notas",
    },
  ];

  return (
    <section id="conteudo" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Conhecimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Conteúdo <span className="gradient-text">Exclusivo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acesse materiais educativos e informativos para cuidar melhor da sua coluna vertebral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentTypes.map((content, index) => (
            <a
              key={index}
              href={content.href}
              className="group bg-background rounded-2xl p-6 border border-border card-hover text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <content.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {content.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {content.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
