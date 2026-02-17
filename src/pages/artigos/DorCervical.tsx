import { useEffect, useState } from "react";
import { ArrowLeft, Phone, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DorCervical = () => {
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem("like-artigo-dor-cervical");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem("liked-artigo-dor-cervical") === "true";
  });

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem("like-artigo-dor-cervical", String(newLikes));
      localStorage.setItem("liked-artigo-dor-cervical", "true");
    }
  };

  useEffect(() => {
    document.title = "Dor Cervical: causas, fatores envolvidos e quando buscar avaliação especializada | Spine Specialist";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Dor cervical é comum na rotina moderna e pode envolver fatores mecânicos e posturais. Entenda quando procurar avaliação especializada na Grande São Paulo, ABC Paulista e Osasco."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://spinespecialist.com.br/artigos/dor-cervical");
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
              Dor Cervical: Entenda as causas e quando procurar avaliação especializada
            </h1>

            <p className="text-xl text-primary font-semibold mb-6">
              Dor Cervical Persistente?
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              A dor cervical (cervicalgia) é uma das queixas musculoesqueléticas mais frequentes na população adulta.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Por ser a região mais móvel da coluna, o pescoço sustenta o peso da cabeça, permite movimentos amplos e protege estruturas neurológicas fundamentais.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Em muitos casos, a dor não está relacionada a uma lesão grave, mas a alterações funcionais, sobrecarga mecânica ou adaptações posturais acumuladas ao longo do tempo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Compreender os fatores associados ao quadro clínico é o primeiro passo para uma conduta adequada.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Por que o pescoço pode doer?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A dor cervical é multifatorial e entre os fatores mais comuns estão:
            </p>

            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">🔹 Sobrecarga Postural ("Tech Neck"):</strong> O uso prolongado de celulares e computadores favorece a projeção anterior da cabeça, aumentando a demanda sobre músculos e articulações cervicais.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">🔹 Alterações Discais:</strong> Hérnias ou protrusões discais (quando parte do disco intervertebral se projeta além do seu limite normal) podem estar associadas a sintomas irradiados quando há compressão ou irritação de raízes nervosas (estruturas que saem da medula espinhal e conduzem sinais motores, sensitivos e reflexos para braços e mãos). Nem toda alteração em exame de imagem corresponde a dor clínica, pois a correlação também depende de uma avaliação funcional.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">🔹 Espondilose (artrose cervical):</strong> Processos degenerativos naturais podem gerar rigidez, desconforto e, em alguns casos, compressão neural.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">🔹 Subluxações Vertebrais (Alterações no alinhamento e na mobilidade entre vértebras):</strong> Podem comprometer a mecânica articular, influenciar a distribuição de carga e a função muscular e, em alguns casos, estar associadas a irritações de estruturas neurais adjacentes.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">🔹 Traumas Cervicais (Whiplash, golpe de chicote):</strong> Movimentos bruscos de aceleração e desaceleração, comuns em colisões automobilísticas, podem gerar lesões ligamentares e musculares na região cervical, quando a cabeça é projetada rapidamente para trás e para frente.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Sintomas que podem estar associados
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A dor cervical nem sempre se limita ao pescoço, podendo estar acompanhada de:
            </p>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                Dor irradiada para ombros, braços ou mãos (radiculopatia);
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                Formigamento ou dormência (parestesia);
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                Dores de cabeça de origem cervical;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                Sensação de rigidez ou limitação de movimento;
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A interpretação desses sintomas depende de uma avaliação clínica individual.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Quando procurar avaliação especializada?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A maioria dos quadros cervicais tende a ser funcional e pode ser inicialmente avaliada de forma estruturada.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entretanto, alguns sinais exigem avaliação imediata, com possível encaminhamento médico conforme indicação clínica:
            </p>
            <ul className="space-y-3 mb-4 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Perda progressiva de força;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Alteração da marcha ou coordenação;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Dor de início súbito e intensidade incomum;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Febre ou perda de peso sem explicação;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                🔹 Sintomas neurológicos associados.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nesses casos, a prioridade é realizar uma avaliação funcional criteriosa para definição da conduta adequada, incluindo encaminhamento médico quando necessário.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos demais quadros, a avaliação funcional estruturada permite identificar os fatores envolvidos e definir o plano terapêutico apropriado.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Como a Spine Specialist aborda a dor cervical
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O atendimento segue um processo clínico estruturado:
            </p>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">1️⃣ Avaliação funcional detalhada:</strong> Análise da mobilidade cervical, padrões de movimento, histórico clínico e fatores associados à dor.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">2️⃣ Definição de plano individualizado:</strong> Condutas manuais baseadas em evidência e orientações específicas conforme os achados clínicos.
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                <strong className="text-foreground">3️⃣ Acompanhamento da evolução:</strong> Reavaliações periódicas e ajustes progressivos conforme resposta individual.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Quando necessário, há encaminhamento para avaliação médica complementar.{" "}
              <Link to="/quiropraxia" className="text-primary hover:underline font-medium">
                Saiba mais sobre Quiropraxia
              </Link>
              {" "}e{" "}
              <Link to="/osteopatia" className="text-primary hover:underline font-medium">
                Conheça a Osteopatia
              </Link>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              O objetivo é favorecer a melhora da função cervical, da mobilidade e da segurança no movimento, respeitando as características de cada paciente.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Dor cervical recorrente merece atenção
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se a dor:
            </p>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                🔹 Persiste por semanas;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                🔹 Retorna com frequência;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                🔹 Limita sua rotina profissional ou esportiva;
              </li>
              <li className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                🔹 Gera insegurança no movimento;
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Uma avaliação funcional estruturada pode esclarecer os fatores associados ao seu quadro clínico. Avaliação estruturada é o primeiro passo.
            </p>

            <div className="bg-primary/5 rounded-2xl p-8 mb-8">
              <p className="text-foreground font-bold text-xl text-center mb-2">
                Agende sua avaliação funcional na Spine Specialist
              </p>
              <p className="text-muted-foreground text-center">
                Receba orientação baseada em critério clínico, segurança e abordagem individualizada.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <Link to="/artigos/o-que-e-coluna-vertebral" className="text-primary hover:underline font-medium">
                Entenda também o papel da Coluna Vertebral na sua saúde
              </Link>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <Link to="/artigos/dor-lombar" className="text-primary hover:underline font-medium">
                Leia também sobre Dor Lombar
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

export default DorCervical;
