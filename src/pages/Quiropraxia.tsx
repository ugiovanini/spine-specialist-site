import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Quiropraxia = () => {
  useEffect(() => {
    // Title
    document.title = "Quiropraxia | Spine Specialist";

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Abordagem manual focada em mobilidade e função, com avaliação individual e plano de cuidado. Agende sua avaliação."
    );

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://spinespecialist.com.br/quiropraxia");

    // Open Graph
    const ogTags = [
      { property: "og:title", content: "Quiropraxia | Spine Specialist" },
      { property: "og:description", content: "Abordagem manual focada em mobilidade e função, com avaliação individual e plano de cuidado." },
      { property: "og:url", content: "https://spinespecialist.com.br/quiropraxia" },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Twitter Cards
    const twitterTags = [
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Quiropraxia | Spine Specialist" },
      { name: "twitter:description", content: "Abordagem manual focada em mobilidade e função, com avaliação individual e plano de cuidado." },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", content);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é quiropraxia e como pode ajudar na dor nas costas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A quiropraxia é uma abordagem da área da saúde focada no cuidado da coluna vertebral e das articulações. Por meio de ajustes manuais seguros e precisos, pode auxiliar na melhora da mobilidade e no alívio de desconfortos, conforme avaliação individual."
          }
        },
        {
          "@type": "Question",
          name: "Quiropraxia é segura?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, quando realizada por profissional qualificado. A segurança depende de avaliação prévia criteriosa para identificar contraindicações e adaptar as técnicas às necessidades individuais de cada paciente."
          }
        },
        {
          "@type": "Question",
          name: "Quantas sessões de quiropraxia são necessárias?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O número de sessões varia conforme a avaliação inicial, a resposta individual ao cuidado e os objetivos estabelecidos. Não há um número fixo, pois cada caso é único e o plano é ajustado ao longo do acompanhamento."
          }
        },
        {
          "@type": "Question",
          name: "Quiropraxia pode ajudar quem trabalha sentado?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pessoas que passam longos períodos sentadas podem apresentar alterações posturais e desconfortos. A quiropraxia, aliada a orientações ergonômicas e exercícios, pode contribuir para a melhora da função e do bem-estar, conforme avaliação."
          }
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre quiropraxia e fisioterapia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "São abordagens complementares com focos distintos. A quiropraxia enfatiza ajustes articulares e a relação entre coluna e sistema nervoso, enquanto a fisioterapia abrange reabilitação funcional ampla. A escolha depende da avaliação e das necessidades de cada pessoa."
          }
        }
      ]
    };

    let scriptTag = document.querySelector('script[data-schema="faq-quiropraxia"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-schema", "faq-quiropraxia");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(faqSchema);

    return () => {
      // Cleanup
      const schemaScript = document.querySelector('script[data-schema="faq-quiropraxia"]');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  const faqs = [
    {
      question: "O que é quiropraxia e como pode ajudar na dor nas costas?",
      answer: "A quiropraxia é uma abordagem da área da saúde focada no cuidado da coluna vertebral e das articulações. Por meio de ajustes manuais seguros e precisos, pode auxiliar na melhora da mobilidade e no alívio de desconfortos, conforme avaliação individual."
    },
    {
      question: "Quiropraxia é segura?",
      answer: "Sim, quando realizada por profissional qualificado. A segurança depende de avaliação prévia criteriosa para identificar contraindicações e adaptar as técnicas às necessidades individuais de cada paciente."
    },
    {
      question: "Quantas sessões de quiropraxia são necessárias?",
      answer: "O número de sessões varia conforme a avaliação inicial, a resposta individual ao cuidado e os objetivos estabelecidos. Não há um número fixo, pois cada caso é único e o plano é ajustado ao longo do acompanhamento."
    },
    {
      question: "Quiropraxia pode ajudar quem trabalha sentado?",
      answer: "Pessoas que passam longos períodos sentadas podem apresentar alterações posturais e desconfortos. A quiropraxia, aliada a orientações ergonômicas e exercícios, pode contribuir para a melhora da função e do bem-estar, conforme avaliação."
    },
    {
      question: "Qual a diferença entre quiropraxia e fisioterapia?",
      answer: "São abordagens complementares com focos distintos. A quiropraxia enfatiza ajustes articulares e a relação entre coluna e sistema nervoso, enquanto a fisioterapia abrange reabilitação funcional ampla. A escolha depende da avaliação e das necessidades de cada pessoa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quiropraxia com foco em mobilidade e função
          </h1>

          {/* Parágrafo exclusivo - rotina urbana */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            A rotina urbana impõe desafios constantes ao corpo: longas horas sentado no trabalho, 
            trânsito, estresse acumulado e pouco tempo para movimento. Esses fatores podem contribuir 
            para tensões musculares, rigidez articular e desconfortos que limitam o dia a dia. 
            A quiropraxia pode ser uma aliada para quem busca voltar a mover com mais confiança, 
            respeitando os limites e a resposta individual de cada organismo.
          </p>

          {/* H2: Quando considerar */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Quando considerar a quiropraxia
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A quiropraxia pode ser considerada quando há desconfortos na coluna, rigidez ao 
              acordar, dificuldade para realizar movimentos do cotidiano ou sensação de que o 
              corpo não responde como antes. Também pode ser uma opção para quem deseja cuidar 
              preventivamente da saúde articular. A indicação depende sempre de avaliação 
              individualizada para verificar se a abordagem é adequada ao caso.
            </p>
          </section>

          {/* H2: Como funciona a avaliação */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Como funciona a avaliação
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A avaliação inicial é uma etapa fundamental. Inclui escuta atenta das queixas, 
              histórico de saúde, análise postural, testes de movimento e palpação. O objetivo 
              é compreender os fatores que podem estar associados ao desconforto e verificar se 
              a quiropraxia é indicada. A partir dessa avaliação, é possível traçar um plano de 
              cuidado com metas claras e realistas.
            </p>
          </section>

          {/* H2: O que pode ser utilizado no cuidado */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              O que pode ser utilizado no cuidado
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O cuidado quiroprático pode incluir ajustes articulares, técnicas de mobilização, 
              orientações posturais e recomendações de exercícios complementares. A escolha das 
              técnicas depende da avaliação, das preferências do paciente e da resposta ao longo 
              do acompanhamento. Não há uma fórmula única: cada plano é construído de forma 
              individualizada.
            </p>
          </section>

          {/* H2: Segurança e individualização */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Segurança e individualização
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A segurança é prioridade em todo o processo. Antes de qualquer intervenção, são 
              verificadas possíveis contraindicações e ajustadas as técnicas conforme a 
              sensibilidade e as necessidades de cada pessoa. O acompanhamento contínuo permite 
              adaptar o plano conforme a evolução, sempre respeitando os limites individuais.
            </p>
          </section>

          {/* H2: Perguntas frequentes */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Links internos discretos */}
          <section className="mb-10 pt-8 border-t border-border">
            <h3 className="text-lg font-medium text-foreground mb-4">
              Conteúdos relacionados
            </h3>
            <nav className="flex flex-wrap gap-4 text-sm">
              <Link to="/osteopatia" className="text-primary hover:underline">
                Osteopatia
              </Link>
              <Link to="/terapias-manuais" className="text-primary hover:underline">
                Terapias Manuais
              </Link>
              <Link to="/sao-paulo" className="text-primary hover:underline">
                Atendimento em São Paulo
              </Link>
              <Link to="/osasco" className="text-primary hover:underline">
                Atendimento em Osasco
              </Link>
              <Link to="/abc-paulista" className="text-primary hover:underline">
                Atendimento no ABC Paulista
              </Link>
            </nav>
          </section>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/70 text-center mt-12">
            As informações têm caráter educativo e não substituem avaliação individual. 
            Condutas e resultados variam conforme avaliação e adesão.
          </p>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Quiropraxia;
