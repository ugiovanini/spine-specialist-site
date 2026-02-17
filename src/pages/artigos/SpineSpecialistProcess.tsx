import { useEffect, useState } from "react";
import { ArrowLeft, Phone, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SpineSpecialistProcess = () => {
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem("like-artigo-spine-specialist-process");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem("liked-artigo-spine-specialist-process") === "true";
  });

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem("like-artigo-spine-specialist-process", String(newLikes));
      localStorage.setItem("liked-artigo-spine-specialist-process", "true");
    }
  };

  useEffect(() => {
    document.title = "Spine Specialist Process | Método Estruturado para Cuidado da Coluna Vertebral";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Conheça o Spine Specialist Process: avaliação funcional detalhada, plano personalizado e acompanhamento estruturado para dor na coluna vertebral na Grande São Paulo."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://spinespecialist.com.br/artigos/spine-specialist-process");
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
              Spine Specialist Process: Clareza, Segurança e Método no Cuidado da Coluna Vertebral
            </h1>

            <p className="text-xl text-primary font-semibold mb-6">
              Clareza, Segurança e Método no Cuidado da Sua Coluna
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Quando alguém procura ajuda para dor na coluna, a maior insegurança não é apenas a dor.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              É a dúvida.
            </p>
            <ul className="space-y-2 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed italic">O que realmente está causando isso?</li>
              <li className="text-muted-foreground leading-relaxed italic">Será que estou escolhendo a abordagem correta?</li>
              <li className="text-muted-foreground leading-relaxed italic">Existe um plano ou cada sessão será diferente?</li>
              <li className="text-muted-foreground leading-relaxed italic">Estou em um processo estruturado ou em tentativas sucessivas?</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              A{" "}
              <Link to="/artigos/o-que-e-coluna-vertebral" className="text-primary hover:underline font-medium">
                coluna vertebral
              </Link>
              {" "}não é apenas uma estrutura mecânica. Ela envolve movimento, postura, carga, rotina profissional, emoções, histórico físico e expectativas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuidar da coluna é cuidar de um sistema complexo: o ser humano.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Por isso, na Spine Specialist, o atendimento não é improvisado. Ele segue um processo estruturado.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              O que é o Spine Specialist Process?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              É um modelo de cuidado organizado em etapas progressivas e personalizadas, criado para reduzir incertezas e aumentar a clareza sobre cada decisão clínica.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Processo não significa rigidez. Significa consistência estratégica com personalização clínica. Significa que a qualidade não depende do acaso.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Um processo bem definido:
            </p>
            <ul className="space-y-2 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Aumenta clareza</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Reduz incerteza</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Eleva o padrão técnico</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Permite acompanhamento objetivo</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Favorece decisões baseadas em critério</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Gera histórico, aprendizado e melhoria contínua</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              As 6 Etapas do Spine Specialist Process
            </h2>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              1️⃣ Avaliação Funcional Detalhada
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aqui começamos entendendo você. Não se trata apenas de localizar a dor, mas de compreender o contexto funcional em que ela ocorre.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">A avaliação envolve:</p>
            <ul className="space-y-2 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Histórico clínico</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Análise de mobilidade</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Testes funcionais específicos</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Identificação de fatores associados</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              O objetivo é construir uma visão clara do seu quadro.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              2️⃣ Diagnóstico Cinético-Funcional
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm italic">
              (Análise do movimento e da interação entre articulações, músculos e carga)
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">Investigamos como sua coluna se comporta sob demanda. Buscamos entender:</p>
            <ul className="space-y-2 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Sobrecargas mecânicas</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Padrões de compensação</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Alterações de mobilidade</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Fatores contribuintes</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Quando necessário, há encaminhamento médico complementar.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              3️⃣ Plano Personalizado
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-2">Com base na avaliação, definimos um plano estruturado. Ele considera:</p>
            <ul className="space-y-2 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Seu histórico prévio</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Seus objetivos funcionais</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Seu perfil profissional</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Seu nível de atividade física</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Não trabalhamos com protocolos genéricos. Trabalhamos com estrutura padronizada e aplicação individualizada.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              4️⃣ Intervenção Progressiva
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              As intervenções são aplicadas de forma progressiva e criteriosa, respeitando sua resposta clínica. Podem envolver:
            </p>
            <ul className="space-y-2 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Orientações posturais</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Exercícios direcionados</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Ajustes específicos quando indicados</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                Terapias manuais baseadas em evidência
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              O foco não é apenas controlar o sintoma, mas favorecer a melhora da função.{" "}
              <Link to="/quiropraxia" className="text-primary hover:underline font-medium">
                Saiba mais sobre Quiropraxia
              </Link>
              {" "}e{" "}
              <Link to="/osteopatia" className="text-primary hover:underline font-medium">
                Conheça a Osteopatia
              </Link>.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              5️⃣ Reavaliação Periódica
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Evolução sem medição é suposição.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">A reavaliação permite:</p>
            <ul className="space-y-2 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Monitorar progresso</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Ajustar o plano terapêutico</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Identificar necessidade de mudança de conduta</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Previsibilidade aqui não é promessa. É acompanhamento estruturado.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              6️⃣ Estratégia Preventiva
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Após estabilização do quadro, definimos orientações preventivas. O objetivo é:
            </p>
            <ul className="space-y-2 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Reduzir recorrência</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Aumentar autonomia</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">Favorecer manutenção da função</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Prevenção é gestão inteligente de risco funcional.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              O que isso significa para você?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Significa que:</p>
            <ul className="space-y-2 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Você sabe o que está sendo feito</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Entende o porquê de cada etapa</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Tem acompanhamento baseado em critério</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Sente segurança na tomada de decisão</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Percebe profissionalismo estruturado</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Processo gera maturidade clínica. E maturidade clínica gera confiança.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Quando iniciar o Spine Specialist Process?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Se sua dor:</p>
            <ul className="space-y-2 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Persiste</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Limita sua rotina</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Retorna com frequência</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Reduz sua qualidade de vida</li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">✔ Gera insegurança no movimento</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Uma avaliação funcional estruturada é o primeiro passo para compreender seu quadro com clareza.
            </p>

            <div className="bg-primary/5 rounded-2xl p-8 mb-8">
              <p className="text-foreground font-bold text-xl text-center mb-2">
                Estrutura, critério e personalização.
              </p>
              <p className="text-muted-foreground text-center">
                Agende sua avaliação funcional e inicie seu processo com segurança, método e acompanhamento estruturado.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Se você sente{" "}
              <Link to="/artigos/dor-lombar" className="text-primary hover:underline font-medium">
                dor lombar
              </Link>
              {" "}ou{" "}
              <Link to="/artigos/dor-cervical" className="text-primary hover:underline font-medium">
                dor cervical
              </Link>
              , uma avaliação estruturada pode esclarecer os fatores envolvidos.
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
                Agende a sua avaliação especializada e inicie o Spine Specialist Process
              </p>
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/5511983544301?text=Olá! Gostaria de iniciar o Spine Specialist Process."
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

export default SpineSpecialistProcess;
