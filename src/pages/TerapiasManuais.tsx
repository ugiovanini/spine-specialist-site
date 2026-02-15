import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ThumbsUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TerapiasManuais = () => {
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem("like-terapias-manuais");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem("liked-terapias-manuais") === "true";
  });

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem("like-terapias-manuais", String(newLikes));
      localStorage.setItem("liked-terapias-manuais", "true");
    }
  };

  useEffect(() => {
    // Title
    document.title = "Terapias Manuais | Spine Specialist";

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Técnicas manuais para avaliação e melhora do movimento, com foco em segurança, função e educação do paciente."
    );

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://spinespecialist.com.br/terapias-manuais");

    // Open Graph
    const ogTags = [
      { property: "og:title", content: "Terapias Manuais | Spine Specialist" },
      { property: "og:description", content: "Técnicas manuais para avaliação e melhora do movimento, com foco em segurança, função e educação do paciente." },
      { property: "og:url", content: "https://spinespecialist.com.br/terapias-manuais" },
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
      { name: "twitter:title", content: "Terapias Manuais | Spine Specialist" },
      { name: "twitter:description", content: "Técnicas manuais para avaliação e melhora do movimento, com foco em segurança, função e educação do paciente." },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
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
          name: "O que são terapias manuais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Terapias manuais são abordagens de cuidado em saúde que utilizam as mãos para avaliar e tratar músculos, articulações e tecidos. Incluem técnicas de mobilização, manipulação e liberação, sempre com foco em segurança e na resposta individual do paciente."
          }
        },
        {
          "@type": "Question",
          name: "Quais são os benefícios das terapias manuais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As terapias manuais podem auxiliar na melhora da mobilidade, redução de tensões musculares e alívio de desconfortos, conforme avaliação individual. Também podem contribuir para a recuperação funcional e o retorno gradual às atividades. Resultados variam de pessoa para pessoa."
          }
        },
        {
          "@type": "Question",
          name: "Como é escolhida a técnica manual adequada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A escolha da técnica depende da avaliação inicial, dos objetivos do paciente e da resposta ao longo do acompanhamento. Não há uma técnica única que sirva para todos os casos. O plano é individualizado e ajustado conforme a evolução."
          }
        },
        {
          "@type": "Question",
          name: "Terapias manuais podem ser combinadas com exercícios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, frequentemente as terapias manuais são integradas a exercícios e orientações de autocuidado. Essa combinação pode potencializar os resultados e favorecer a manutenção dos benefícios a longo prazo, sempre respeitando a individualidade de cada caso."
          }
        },
        {
          "@type": "Question",
          name: "Terapias manuais são seguras?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quando realizadas por profissional qualificado, as terapias manuais são consideradas seguras. A avaliação prévia é fundamental para identificar contraindicações e adaptar as técnicas às necessidades e limites de cada paciente."
          }
        }
      ]
    };

    let scriptTag = document.querySelector('script[data-schema="faq-terapias-manuais"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-schema", "faq-terapias-manuais");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(faqSchema);

    return () => {
      const schemaScript = document.querySelector('script[data-schema="faq-terapias-manuais"]');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  const faqs = [
    {
      question: "O que são terapias manuais?",
      answer: "Terapias manuais são abordagens de cuidado em saúde que utilizam as mãos para avaliar e tratar músculos, articulações e tecidos. Incluem técnicas de mobilização, manipulação e liberação, sempre com foco em segurança e na resposta individual do paciente."
    },
    {
      question: "Quais são os benefícios das terapias manuais?",
      answer: "As terapias manuais podem auxiliar na melhora da mobilidade, redução de tensões musculares e alívio de desconfortos, conforme avaliação individual. Também podem contribuir para a recuperação funcional e o retorno gradual às atividades. Resultados variam de pessoa para pessoa."
    },
    {
      question: "Como é escolhida a técnica manual adequada?",
      answer: "A escolha da técnica depende da avaliação inicial, dos objetivos do paciente e da resposta ao longo do acompanhamento. Não há uma técnica única que sirva para todos os casos. O plano é individualizado e ajustado conforme a evolução."
    },
    {
      question: "Terapias manuais podem ser combinadas com exercícios?",
      answer: "Sim, frequentemente as terapias manuais são integradas a exercícios e orientações de autocuidado. Essa combinação pode potencializar os resultados e favorecer a manutenção dos benefícios a longo prazo, sempre respeitando a individualidade de cada caso."
    },
    {
      question: "Terapias manuais são seguras?",
      answer: "Quando realizadas por profissional qualificado, as terapias manuais são consideradas seguras. A avaliação prévia é fundamental para identificar contraindicações e adaptar as técnicas às necessidades e limites de cada paciente."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Voltar para Artigos */}
          <Link
            to="/artigos"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Artigos
          </Link>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Terapias Manuais: técnica, segurança e educação em movimento
          </h1>

          {/* Parágrafo exclusivo - educação e autocuidado */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            As terapias manuais vão além do alívio imediato: são ferramentas de educação em 
            saúde. Cada sessão é uma oportunidade para compreender melhor o próprio corpo, 
            aprender sobre hábitos que favorecem a função e construir autonomia para o 
            retorno gradual às atividades. O foco está em capacitar o paciente para cuidar 
            de si, com orientações práticas e realistas para o dia a dia.
          </p>

          {/* H2: O que são Terapias Manuais */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              O que são Terapias Manuais
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Terapias manuais englobam um conjunto de técnicas realizadas com as mãos, 
              utilizadas para avaliar, mobilizar e tratar estruturas do corpo como músculos, 
              articulações e tecidos conectivos. Incluem manipulações, mobilizações, 
              liberações miofasciais e outras abordagens, sempre selecionadas conforme a 
              necessidade individual e com base em evidências científicas.
            </p>
          </section>

          {/* H2: Benefícios esperados */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Benefícios esperados
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As terapias manuais podem contribuir para a melhora da mobilidade articular, 
              redução de tensões musculares e recuperação funcional. Em alguns casos, podem 
              auxiliar no alívio de desconfortos e na melhora da qualidade de movimento. 
              É importante ressaltar que os resultados variam conforme o caso, a cronicidade 
              das queixas e a adesão ao plano de cuidado. Não há garantia de resultados 
              específicos.
            </p>
          </section>

          {/* H2: Como escolhemos a técnica */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Como escolhemos a técnica
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A escolha da técnica não é aleatória. Parte de uma avaliação criteriosa que 
              considera os achados clínicos, os objetivos do paciente, suas preferências e 
              possíveis contraindicações. Ao longo do acompanhamento, as técnicas podem ser 
              ajustadas conforme a resposta individual, garantindo um cuidado adaptado e 
              seguro.
            </p>
          </section>

          {/* H2: Integração com exercícios e hábitos */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Integração com exercícios e hábitos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Para favorecer a sustentabilidade dos benefícios, as terapias manuais são 
              frequentemente combinadas com exercícios terapêuticos e orientações sobre 
              hábitos do dia a dia. Essa integração visa capacitar o paciente a manter os 
              ganhos obtidos, desenvolver consciência corporal e construir autonomia no 
              cuidado com a saúde.
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
              <Link to="/quiropraxia" className="text-primary hover:underline">
                Quiropraxia
              </Link>
              <Link to="/osteopatia" className="text-primary hover:underline">
                Osteopatia
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
          {/* Botão Curtir */}
          <div className="flex items-center gap-3 mt-10 mb-8">
            <button
              onClick={handleLike}
              disabled={hasLiked}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-all duration-300 font-medium text-sm ${
                hasLiked
                  ? "border-primary bg-primary/10 text-primary cursor-default"
                  : "border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 cursor-pointer"
              }`}
            >
              <ThumbsUp className={`w-5 h-5 ${hasLiked ? "fill-primary" : ""}`} />
              {hasLiked ? "Curtido" : "Curtir"}
              {likes > 0 && <span className="ml-1">{likes}</span>}
            </button>
          </div>

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

export default TerapiasManuais;
