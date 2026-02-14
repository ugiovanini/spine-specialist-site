import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroSpine from "@/assets/hero-spine.jpg";
import spineIcon from "@/assets/spine-icon.png";
import spineVertebraIcon from "@/assets/spine-vertebra-icon.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSpine}
          alt="Coluna vertebral"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-primary/10"
          />
          <path
            d="M0 120L48 114C96 108 192 96 288 90C384 84 480 84 576 87C672 90 768 96 864 99C960 102 1056 102 1152 96C1248 90 1344 78 1392 72L1440 66V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-primary/20"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
          <div className="max-w-3xl animate-fade-in order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Especialista em Coluna Vertebral
            </div>

            <h1 className="sr-only">Especialista em Coluna Vertebral na Grande São Paulo, ABC Paulista e Osasco</h1>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" aria-hidden="true">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Spine Specialist</span>
              <br />
              <span className="gradient-text">Coluna Vertebral</span>
            </div>

            <div className="flex flex-col gap-4 max-w-2xl mb-8">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Tratamento especializado em coluna vertebral, baseado em ciência, com avaliação clínica aprofundada e planos terapêuticos personalizados, focados na função, na segurança e na prevenção de recorrências.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/5511983544301" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Agendar Avaliação
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#servicos">
                  Conheça os Tratamentos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="mt-12 mb-24 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10</p>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Especializações</p>
                  <p className="text-sm text-muted-foreground">Em Coluna Vertebral</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spine Image - Right side */}
          <div className="flex items-center justify-center md:items-start md:justify-end flex-shrink-0 order-1 md:order-2">
            <img 
              src={spineIcon} 
              alt="Coluna vertebral" 
              className="w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
