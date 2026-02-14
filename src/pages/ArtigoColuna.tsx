import { useEffect } from "react";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ArtigoColuna = () => {
  useEffect(() => {
    document.title = "O que é a Coluna Vertebral? | Spine Specialist";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Entenda a estrutura, função e importância da coluna vertebral para sua saúde, mobilidade e performance. Saiba quando procurar um especialista."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://spinespecialist.com.br/artigos/o-que-e-coluna-vertebral");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Link to="/artigos">
              <Button variant="ghost" className="gap-2 mb-4">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Artigos
              </Button>
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sua Coluna Vertebral, Saúde e Performance
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Muitas vezes, só passamos a notar a existência da nossa coluna quando ela manifesta o primeiro sinal de desconforto, no entanto, para a Spine Specialist, a coluna vertebral é muito mais do que a origem de uma dor. Ela é o eixo central e mestre do corpo humano, responsável por integrar nossa estrutura física, órgão e visceras ao comando central do sistema nervoso. Uma coluna equilibrada é, portanto, o alicerce para que todos os sistemas do seu corpo funcionem em harmonia e produza qualidade de vida
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Entender o que é a coluna vertebral e como ela funciona é o primeiro passo para sair de tratamentos paliativos e buscar resultados sustentáveis para sua mobilidade e autonomia na qualidade de vida.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              1. A Estrutura: Um Equilíbrio entre Rigidez e Flexibilidade
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A coluna vertebral é uma estrutura complexa formada, originalmente, por 33 vértebras empilhadas. Ela é dividida em cinco regiões principais, cada uma com uma missão específica para o seu movimento:
            </p>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Cervical (Pescoço):</strong> Composta por 7 vértebras, é a região mais móvel, permitindo que você direcione seus sentidos (visão e audição) com precisão.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Torácica (Meio das costas):</strong> São 12 vértebras conectadas às costelas, garantindo estabilidade e proteção aos órgãos vitais, como o coração e os pulmões.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Lombar (Baixo dorso):</strong> Composta por 5 vértebras robustas, é a base que suporta a maior parte do peso do seu corpo e absorve as cargas das atividades diárias.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Sacral e Coccígea:</strong> Formadas por vértebras fundidas que unem a coluna à pelve, servindo como ponto de ancoragem para a força que vem das pernas.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              2. O Escudo Protetor do seu Sistema Nervoso
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Além da sustentação, a coluna possui uma função neurológica vital: ela forma o canal vertebral, um túnel ósseo que abriga e protege a medula espinhal (o "cabo" central de comunicação que conecta o cérebro ao restante do corpo, transmitindo comandos de movimento e todas as nossas sensações)
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              É através de pequenos espaços entre as vértebras (os forames) que as raízes nervosas saem para levar comandos de movimento e trazer sensações de todo o corpo. Quando ocorre uma subluxação (uma disfunção articular que afeta a mobilidade e o posicionamento dessas vértebras) essa comunicação pode ser interrompida, gerando dor, formigamento ou perda de força.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              3. Amortecedores e Molas: A Engenharia do Movimento
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para que possamos caminhar, correr e saltar sem danificar nossa estrutura, a natureza dotou a coluna de dois sistemas de proteção geniais:
            </p>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Discos Intervertebrais:</strong> Localizados entre as vértebras, funcionam como "almofadas" de amortecimento que distribuem a pressão e evitam o impacto direto entre os ossos.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Curvaturas Fisiológicas:</strong> Quando olhada de lado, a coluna não é reta. Ela possui curvas naturais (lordoses e cifoses) que permitem que ela atue como uma mola helicoidal, aumentando em até 10 vezes a resistência aos impactos em comparação com uma estrutura reta.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              4. Por que a Coluna Adoece?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A vida moderna impõe desafios constantes a esse eixo, como o sedentarismo, a má postura no trabalho e o uso excessivo de dispositivos eletrônicos forçam a coluna a posições para as quais ela não foi projetada, podendo, gerar microtraumas repetitivos que levam a um processo de desgaste precoce, como a desidratação dos discos e a formação de osteófitos (bicos de papagaio), que limitam sua performance e geram dor recorrente.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              O Diferencial Spine Specialist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na Spine Specialist, não tratamos apenas o sintoma local, pois a nossa abordagem é baseada na Ciência do Movimento e{" "}
              <Link to="/terapias-manuais" className="text-primary hover:underline font-medium">
                Terapias Manuais Avançadas
              </Link>
              , como a{" "}
              <Link to="/quiropraxia" className="text-primary hover:underline font-medium">
                Quiropraxia
              </Link>
              {" "}e a{" "}
              <Link to="/osteopatia" className="text-primary hover:underline font-medium">
                Osteopatia
              </Link>
              {" "}e nas bases da Práticas Integrativas e Complementares em Saúde (PICS, abordagens terapêuticas baseadas em conhecimentos tradicionais, focadas na visão integral do indivíduo: físico, mental, emocional e social
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nosso foco é identificar exatamente onde a mecânica da sua coluna falhou e restaurar a função perdida. Entendemos que uma coluna saudável é o alicerce para uma vida de alta performance, seja no treino, no trabalho ou no lazer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Você sente que sua coluna está limitando o seu potencial e diminuindo a sua qualidade de vida?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Converse com a gente e saia do ciclo da dor com quem é especialista em coluna vertebral.
            </p>

            <div className="bg-secondary/30 rounded-2xl p-8 text-center mt-12">
              <p className="text-foreground font-medium mb-6 text-lg">
                Agende a sua avaliação especializada e descubra uma vida com melhor qualidade de vida
              </p>
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/5511983544301?text=Olá! Gostaria de agendar uma avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5" />
                  Agendar Avaliação
                </a>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtigoColuna;
