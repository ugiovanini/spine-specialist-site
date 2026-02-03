import { Activity, Target, TrendingUp, Shield, Heart, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Quiropraxia",
      description:
        "Técnicas especializadas para correção da biomecânica da coluna, promovendo alívio da dor e melhora da função.",
    },
    {
      icon: Target,
      title: "Osteopatia",
      description:
        "Abordagem holística que trata o corpo como um todo, identificando e corrigindo disfunções estruturais.",
    },
    {
      icon: TrendingUp,
      title: "Terapias Manuais",
      description:
        "Técnicas avançadas de manipulação e mobilização para restaurar a função e aliviar tensões.",
    },
    {
      icon: Shield,
      title: "Ciência do Movimento",
      description:
        "Avaliação funcional completa baseada em evidências científicas para tratamento preciso.",
    },
    {
      icon: Zap,
      title: "Performance Funcional",
      description:
        "Programas personalizados para elevar sua capacidade funcional no trabalho, treino e vida diária.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Tratamentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços <span className="gradient-text">Especializados</span>
          </h3>
          <p className="text-muted-foreground">
            Abordagem integrada e personalizada baseada em ciência do movimento 
            e terapias manuais avançadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
