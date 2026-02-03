import { CircleCheck, Award, BookOpen, Users, RefreshCw, Home } from "lucide-react";

const Differentials = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Ciência e Evidência",
      description: "Tratamentos baseados nas melhores evidências científicas disponíveis.",
    },
    {
      icon: Award,
      title: "Especialização Profunda",
      description: "Foco exclusivo em coluna vertebral com múltiplas certificações.",
    },
    {
      icon: CircleCheck,
      title: "Resultado Funcional",
      description: "Metas claras de recuperação para trabalho, treino e vida diária.",
    },
    {
      icon: Users,
      title: "Centralidade no Paciente",
      description: "Tratamento personalizado de acordo com suas necessidades específicas.",
    },
    {
      icon: RefreshCw,
      title: "Sustentabilidade Clínica",
      description: "Foco em resultados duradouros e prevenção de recidivas.",
    },
    {
      icon: Home,
      title: "Atendimento Domiciliar",
      description: "Conforto do seu lar ou escritório para seu tratamento. (vide cobertura)",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-primary/5 relative">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z"
            className="fill-primary/5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Por que nos escolher
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="gradient-text">Diferenciais</span>
          </h3>
          <p className="text-muted-foreground">
            Valores que guiam nossa prática e garantem os melhores resultados 
            para sua saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-background rounded-xl border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Golden Circle */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-4">
                <span className="text-primary-foreground text-xl font-bold">?</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">Por Quê</h4>
              <p className="text-sm text-muted-foreground">
                Porque viver com dor na coluna limita trabalho, treino e autonomia.
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/80 mx-auto flex items-center justify-center mb-4">
                <span className="text-primary-foreground text-xl font-bold">→</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">Como</h4>
              <p className="text-sm text-muted-foreground">
                Abordagem integrada e personalizada baseada em ciência.
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/60 mx-auto flex items-center justify-center mb-4">
                <span className="text-primary-foreground text-xl font-bold">!</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">O Quê</h4>
              <p className="text-sm text-muted-foreground">
                Atendimento especializado focado em dor, mobilidade e performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
