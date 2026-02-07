import { Button } from "@/components/ui/button";
import { Phone, Globe, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Entre em Contato
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agende sua <span className="gradient-text">Avaliação</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dê o primeiro passo para sair do ciclo da dor.
              <br />
              Entre em contato e agende sua avaliação personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone / WhatsApp</p>
                  <a
                    href="tel:+5511983544301"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    +55 11 98354-4301
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a
                    href="https://www.spinespecialist.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    www.spinespecialist.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Atendimento</p>
                  <p className="font-semibold text-foreground">
                    No conforto do seu lar ou escritório
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary to-primary-glow p-8 rounded-2xl text-primary-foreground flex flex-col justify-center">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-bold mb-3">
                Fale Conosco pelo WhatsApp
              </h4>
              <p className="text-primary-foreground/90 mb-6">
                Tire suas dúvidas e agende sua avaliação de forma rápida e prática.
              </p>
              <Button variant="whatsapp" size="lg" asChild className="w-full">
                <a
                  href="https://wa.me/5511983544301?text=Olá! Gostaria de agendar uma avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Iniciar Conversa
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
