import { CheckCircle2 } from "lucide-react";
import specialistPortrait from "@/assets/specialist-portrait.jpg";

const About = () => {
  const credentials = [
    "Tecnologia em Quiropraxia",
    "Especialista em Osteopatia",
    "Especialista em Quiropraxia",
    "Especialista em Fisioterapia nas Algias Posturais da Coluna Vertebral",
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative z-10">
              <img
                src={specialistPortrait}
                alt="Ulisses Giovanini - Especialista em Coluna Vertebral"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-0" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-2xl -z-0" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Formação
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="gradient-text">Especialista em Coluna</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Profissional especializado em coluna vertebral com atuação baseada em 
              Ciência do Movimento, Quiropraxia, Osteopatia e Terapias Manuais Avançadas. 
              Minha abordagem é integrada e personalizada, focada em resultados mensuráveis 
              e sustentáveis.
            </p>

            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{credential}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-background rounded-xl border border-border shadow-soft">
              <h4 className="font-semibold text-foreground mb-2">Propósito</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Promover alívio da dor, recuperação da mobilidade e elevação da 
                performance funcional em pessoas com algias da coluna vertebral, 
                por meio de atendimento especializado, personalizado e baseado na ciência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
