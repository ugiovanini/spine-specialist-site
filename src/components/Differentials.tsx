import { CircleCheck, Award, BookOpen, Users, RefreshCw, Home, ClipboardCheck, Target, Stethoscope, CalendarCheck } from "lucide-react";

const Differentials = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Ciência e Evidência",
      description: "Todos os tratamentos são fundamentados nas melhores evidências científicas disponíveis, diretrizes clínicas internacionais e prática profissional validada. Cada conduta é escolhida com critério, segurança e responsabilidade, priorizando eficácia real e risco mínimo ao paciente.",
    },
    {
      icon: Award,
      title: "Especialização Profunda em Coluna Vertebral",
      description: "Atuação clínica dedicada exclusivamente à coluna vertebral, sustentada por múltiplas pós-graduações e certificações avançadas. Esse foco absoluto permite diagnósticos mais precisos, intervenções direcionadas à causa do problema e maior previsibilidade de resultados.",
    },
    {
      icon: Stethoscope,
      title: "Avaliação Clínica Avançada",
      description: "Avaliação completa e estruturada, integrando exame físico funcional, análise postural, testes específicos e histórico clínico detalhado. Essa abordagem permite compreender o problema em profundidade e definir o melhor plano terapêutico desde o primeiro atendimento.",
    },
    {
      icon: ClipboardCheck,
      title: "Plano Terapêutico com Metas Claras",
      description: "Cada paciente recebe um plano de tratamento individualizado, organizado por fases, com objetivos definidos, critérios de evolução e prazos estimados. Isso garante transparência, engajamento e acompanhamento real do progresso ao longo do cuidado.",
    },
    {
      icon: Target,
      title: "Resultado Funcional",
      description: "O foco do tratamento é a recuperação funcional, permitindo retorno seguro às atividades do trabalho, do esporte e da vida diária. Mais do que aliviar a dor, buscamos restaurar movimento, confiança e qualidade de vida de forma sustentável.",
    },
    {
      icon: Users,
      title: "Centralidade no Paciente",
      description: "O cuidado é centrado na pessoa, não apenas no diagnóstico. Cada plano considera sua rotina, profissão, nível de atividade, objetivos pessoais e histórico de saúde, garantindo um tratamento verdadeiramente personalizado.",
    },
    {
      icon: RefreshCw,
      title: "Sustentabilidade Clínica e Prevenção",
      description: "Os tratamentos são orientados a resultados duradouros, com ênfase em educação, prevenção de recidivas e autonomia do paciente. O objetivo é reduzir a dependência contínua de tratamentos e promover saúde a longo prazo.",
    },
    {
      icon: CalendarCheck,
      title: "Acompanhamento Pós-Tratamento",
      description: "Mesmo após a fase intensiva do cuidado, o paciente pode contar com acompanhamento clínico periódico, reavaliações e ajustes preventivos, garantindo manutenção dos resultados e segurança ao longo do tempo.",
    },
    {
      icon: Home,
      title: "Atendimento Domiciliar",
      description: "Quando indicado, oferecemos atendimento no conforto do seu lar ou ambiente profissional, mantendo o mesmo padrão técnico, ético e clínico do consultório, conforme critérios de cobertura e segurança.",
    },
  ];

  return (
    <section id="diferenciais" className="py-12 md:py-16 bg-primary/5 relative">
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Por que nos escolher
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="gradient-text">Diferenciais</span>
          </h3>
          <p className="text-muted-foreground">
            Valores clínicos que orientam cada decisão terapêutica e garantem segurança, previsibilidade e resultados reais para sua saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-background rounded-xl border border-border card-hover"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{value.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Golden Circle */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-4">
                <span className="text-primary-foreground text-xl font-bold">?</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">Por Quê</h4>
              <p className="text-sm text-muted-foreground">
                Porque viver com dor na coluna limita o trabalho, o desempenho físico, a autonomia e a qualidade de vida. Acreditamos que ninguém deve conviver com dor ou restrições quando existe tratamento seguro, baseado em ciência e focado em recuperar função e confiança no movimento.
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/80 mx-auto flex items-center justify-center mb-4">
                <span className="text-primary-foreground text-xl font-bold">→</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">Como</h4>
              <p className="text-sm text-muted-foreground">
                Por meio de uma abordagem clínica especializada, integrada e personalizada, fundamentada em evidência científica, avaliação aprofundada e planos terapêuticos com metas claras, respeitando a rotina, os objetivos e a realidade de cada paciente.
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/60 mx-auto flex items-center justify-center mb-4">
                <span className="text-primary-foreground text-xl font-bold">!</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">O Quê</h4>
              <p className="text-sm text-muted-foreground">
                Atendimento especializado em coluna vertebral, focado na causa da dor, na recuperação da mobilidade e na melhoria da performance funcional, com tratamentos seguros, progressivos e orientados a resultados duradouros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
