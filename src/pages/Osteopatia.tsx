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

const Osteopatia = () => {
  useEffect(() => {
    // Title
    document.title = "Osteopatia | Spine Specialist";

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Avaliação manual para identificar disfunções de movimento e apoiar o equilíbrio funcional do corpo. Atendimento individualizado."
    );

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://spinespecialist.com.br/osteopatia");

    // Open Graph
    const ogTags = [
      { property: "og:title", content: "Osteopatia | Spine Specialist" },
      { property: "og:description", content: "Avaliação manual para identificar disfunções de movimento e apoiar o equilíbrio funcional do corpo." },
      { property: "og:url", content: "https://spinespecialist.com.br/osteopatia" },
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
      { name: "twitter:title", content: "Osteopatia | Spine Specialist" },
      { name: "twitter:description", content: "Avaliação manual para identificar disfunções de movimento e apoiar o equilíbrio funcional do corpo." },
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
          name: "O que é osteopatia e qual seu princípio fundamental?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A osteopatia é uma abordagem de cuidado em saúde que entende o corpo como uma unidade integrada. Seu princípio histórico pode ser resumido na ideia de 'encontrar a disfunção, corrigi-la e deixar o corpo responder'. Não se trata de promessa de cura, mas de apoiar a capacidade natural de adaptação do organismo."
          }
        },
        {
          "@type": "Question",
          name: "Osteopatia é indicada para dor na coluna?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A osteopatia pode ser considerada em casos de desconfortos na coluna, especialmente quando há suspeita de que fatores articulares, musculares ou posturais estejam envolvidos. A indicação depende de avaliação individualizada para verificar se a abordagem é adequada."
          }
        },
        {
          "@type": "Question",
          name: "Como é a avaliação osteopática?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A avaliação osteopática inclui análise do movimento, palpação de tecidos e articulações, testes funcionais e escuta atenta das queixas. O objetivo é identificar possíveis disfunções e compreender como o corpo está se adaptando, para então definir condutas individualizadas."
          }
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre osteopatia e quiropraxia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ambas são abordagens manuais, mas com filosofias e técnicas distintas. A osteopatia enfatiza a integração entre sistemas do corpo (ossos, músculos, nervos, circulação), enquanto a quiropraxia foca mais na relação entre coluna e sistema nervoso. Podem ser complementares, conforme avaliação."
          }
        },
        {
          "@type": "Question",
          name: "Quantas sessões de osteopatia são necessárias para ver resultados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não há um número fixo de sessões. A resposta varia conforme o caso, a cronicidade das queixas e a adesão ao plano de cuidado. O acompanhamento é ajustado conforme a evolução, sem previsibilidade garantida de prazos ou resultados."
          }
        }
      ]
    };

    let scriptTag = document.querySelector('script[data-schema="faq-osteopatia"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-schema", "faq-osteopatia");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(faqSchema);

    return () => {
      const schemaScript = document.querySelector('script[data-schema="faq-osteopatia"]');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  const faqs = [
    {
      question: "O que é osteopatia e qual seu princípio fundamental?",
      answer: "A osteopatia é uma abordagem de cuidado em saúde que entende o corpo como uma unidade integrada. Seu princípio histórico pode ser resumido na ideia de 'encontrar a disfunção, corrigi-la e deixar o corpo responder'. Não se trata de promessa de cura, mas de apoiar a capacidade natural de adaptação do organismo."
    },
    {
      question: "Osteopatia é indicada para dor na coluna?",
      answer: "A osteopatia pode ser considerada em casos de desconfortos na coluna, especialmente quando há suspeita de que fatores articulares, musculares ou posturais estejam envolvidos. A indicação depende de avaliação individualizada para verificar se a abordagem é adequada."
    },
    {
      question: "Como é a avaliação osteopática?",
      answer: "A avaliação osteopática inclui análise do movimento, palpação de tecidos e articulações, testes funcionais e escuta atenta das queixas. O objetivo é identificar possíveis disfunções e compreender como o corpo está se adaptando, para então definir condutas individualizadas."
    },
    {
      question: "Qual a diferença entre osteopatia e quiropraxia?",
      answer: "Ambas são abordagens manuais, mas com filosofias e técnicas distintas. A osteopatia enfatiza a integração entre sistemas do corpo (ossos, músculos, nervos, circulação), enquanto a quiropraxia foca mais na relação entre coluna e sistema nervoso. Podem ser complementares, conforme avaliação."
    },
    {
      question: "Quantas sessões de osteopatia são necessárias para ver resultados?",
      answer: "Não há um número fixo de sessões. A resposta varia conforme o caso, a cronicidade das queixas e a adesão ao plano de cuidado. O acompanhamento é ajustado conforme a evolução, sem previsibilidade garantida de prazos ou resultados."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Osteopatia: encontre a causa, corrija o que limita, deixe o corpo responder
          </h1>

          {/* Parágrafo exclusivo - filosofia osteopática */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            O princípio que guia a osteopatia desde sua origem pode ser expresso como: 
            "Encontre-a, corrija-a, deixe-a em paz". Essa frase, atribuída ao fundador da 
            osteopatia, reflete uma filosofia de cuidado que respeita a capacidade do corpo 
            de se autorregular. Não se trata de promessa de cura, mas de criar condições 
            para que o organismo possa responder da melhor forma possível, considerando 
            sua história, seus limites e sua individualidade.
          </p>

          {/* H2: O princípio: causa raiz e função */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              O princípio: causa raiz e função
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A osteopatia busca compreender não apenas onde está o desconforto, mas por que 
              ele surgiu. O corpo funciona de forma integrada: uma disfunção em uma região 
              pode gerar compensações em outras. Por isso, a avaliação osteopática considera 
              o organismo como um todo, investigando possíveis conexões entre sintomas e 
              suas causas subjacentes.
            </p>
          </section>

          {/* H2: O que é avaliado */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              O que é avaliado: movimento, tecidos, articulações
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A avaliação osteopática inclui análise da mobilidade articular, qualidade do 
              movimento, tensão dos tecidos e resposta do corpo a diferentes estímulos. 
              São observados padrões posturais, áreas de restrição e como o corpo se adapta 
              às demandas do dia a dia. Essa investigação minuciosa permite identificar 
              disfunções que podem estar contribuindo para o quadro apresentado.
            </p>
          </section>

          {/* H2: Como o plano é definido */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Como o plano de cuidado é definido
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O plano de cuidado é construído a partir dos achados da avaliação, das 
              expectativas do paciente e de metas realistas. Inclui técnicas manuais 
              selecionadas conforme a necessidade, orientações posturais e, quando indicado, 
              exercícios complementares. O plano não é fixo: é ajustado conforme a resposta 
              individual ao longo do acompanhamento.
            </p>
          </section>

          {/* H2: O que esperar do acompanhamento */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              O que esperar do acompanhamento
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O acompanhamento osteopático é um processo. A cada sessão, são reavaliados os 
              achados anteriores, a evolução do quadro e as necessidades atuais. Resultados 
              variam conforme a complexidade do caso, a cronicidade das queixas e a adesão 
              às orientações. Não há promessas de prazos ou resultados garantidos, mas um 
              compromisso com a transparência e o cuidado contínuo.
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

export default Osteopatia;
