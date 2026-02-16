import { useEffect, useState } from "react";
import { ArrowLeft, Phone, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DorLombar = () => {
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem("like-artigo-dor-lombar");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem("liked-artigo-dor-lombar") === "true";
  });

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem("like-artigo-dor-lombar", String(newLikes));
      localStorage.setItem("liked-artigo-dor-lombar", "true");
    }
  };

  useEffect(() => {
    document.title = "Dor Lombar: causas, fatores envolvidos e quando procurar avaliação especializada | Spine Specialist";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Dor lombar é uma das queixas mais comuns na população adulta. Entenda os fatores envolvidos e quando buscar avaliação especializada na Grande São Paulo, ABC Paulista e Osasco."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://spinespecialist.com.br/artigos/dor-lombar");
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
              Dor Lombar: Entenda os fatores envolvidos e quando buscar avaliação especializada
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A dor lombar é uma das queixas mais comuns na população adulta e economicamente ativa, em muitos casos, está associada a sobrecarga mecânica, alterações de mobilidade ou padrões de movimento repetitivos, já em outros, pode refletir fatores sistêmicos ou condições que exigem avaliação médica.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Compreender os fatores envolvidos é o primeiro passo para sair do ciclo recorrente de dor.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Por que a lombar pode doer?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A dor lombar raramente tem uma única causa, pois, geralmente, envolve a interação entre mobilidade articular, controle muscular, carga aplicada à coluna vertebral e fatores individuais como rotina, histórico clínico e condicionamento físico.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Entre os fatores mais frequentes estão:
            </h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Disfunções mecânicas:</strong> alterações no movimento das articulações vertebrais ou da articulação sacroilíaca podem gerar rigidez, dor localizada ou limitação funcional.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Alterações discais:</strong> hérnias e discopatias podem estar associadas a sintomas irradiados, especialmente quando há compressão ou irritação neural, portanto, nem toda alteração em exame de imagem é sinônimo de dor: a avaliação clínica é fundamental.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Sobrecarga postural e ocupacional:</strong> longos períodos sentado, movimentos repetitivos ou flexão frequente do tronco podem contribuir para sobrecarga cumulativa.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">Fatores de estilo de vida:</strong> sedentarismo, obesidade, tabagismo e estresse crônico influenciam a tolerância dos tecidos à carga e a modulação da dor.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Quando a dor lombar exige atenção imediata?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Embora a maioria dos quadros seja funcional, alguns sinais indicam necessidade de avaliação médica urgente:
            </p>
            <ul className="space-y-3 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Perda de força significativa nos membros inferiores;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Alterações urinárias ou fecais;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Dor intensa que não melhora com repouso;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Trauma recente;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Febre ou perda de peso sem explicação;
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nesses casos, a prioridade é investigação médica apropriada.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              A Abordagem Spine Specialist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na Spine Specialist, o cuidado é estruturado e baseado em uma avaliação funcional criteriosa, envolvendo:
            </p>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">1️⃣ Avaliação clínica e funcional:</strong> análise detalhada da mobilidade, padrões de movimento, histórico clínico e fatores associados ao quadro;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">2️⃣ Plano terapêutico individualizado:</strong> condutas manuais e orientações definidas conforme achados clínicos e resposta individual;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">3️⃣ Acompanhamento e reavaliação:</strong> monitoramento da evolução funcional e ajustes progressivos, com foco em segurança e autonomia do paciente.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Quando indicado, há encaminhamento para avaliação médica complementar.{" "}
              <Link to="/quiropraxia" className="text-primary hover:underline font-medium">
                Saiba mais sobre Quiropraxia
              </Link>
              {" "}e{" "}
              <Link to="/osteopatia" className="text-primary hover:underline font-medium">
                Conheça a Osteopatia
              </Link>.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              O objetivo do tratamento
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O foco não é apenas o alívio pontual dos sintomas, mas favorecer a melhora da função, da mobilidade e da capacidade de realizar atividades cotidianas com mais conforto e segurança.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A evolução depende da avaliação adequada, da aplicação técnica correta e da participação ativa do paciente no processo.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Quando procurar avaliação especializada?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se a dor lombar:
            </p>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                🔹 Persiste por mais de algumas semanas;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                🔹 Retorna com frequência;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                🔹 Limita trabalho, treino ou rotina;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                🔹 Gera insegurança no movimento;
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Uma avaliação estruturada pode ajudar a esclarecer os fatores envolvidos e a definir a melhor conduta.
            </p>

            <div className="bg-primary/5 rounded-2xl p-8 mb-8">
              <p className="text-foreground font-bold text-xl text-center mb-2">
                SUA COLUNA SUSTENTA SUA ROTINA, SEU TRABALHO E SUA PERFORMANCE.
              </p>
              <p className="text-muted-foreground text-center">
                Não ignore sinais persistentes, agende sua avaliação clínica especializada na Spine Specialist.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              <Link to="/artigos/o-que-e-coluna-vertebral" className="text-primary hover:underline font-medium">
                Entenda também o papel da Coluna Vertebral na sua saúde
              </Link>
            </p>

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
                  Agendar Avaliação Especializada
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

export default DorLombar;
