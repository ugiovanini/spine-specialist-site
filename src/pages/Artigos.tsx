import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import colunaInfografico from "@/assets/coluna-vertebral-infografico.png";
import dorLombarThumb from "@/assets/dor-lombar-thumb.png";
import dorCervicalThumb from "@/assets/dor-cervical-thumb.png";

const Artigos = () => {
  const artigos = [
    {
      id: 1,
      title: "Sua Coluna Vertebral, Saúde e Performance",
      description: "Entenda a estrutura, função e importância da coluna vertebral para sua saúde, mobilidade e performance.",
      date: "14 Fev 2026",
      href: "/artigos/o-que-e-coluna-vertebral",
      image: colunaInfografico,
    },
    {
      id: 2,
      title: "Dor Lombar: Entenda os fatores envolvidos e quando buscar avaliação especializada",
      description: "Dor lombar é uma das queixas mais comuns na população adulta. Entenda os fatores envolvidos e quando buscar avaliação especializada.",
      date: "16 Fev 2026",
      href: "/artigos/dor-lombar",
      image: dorLombarThumb,
    },
    {
      id: 3,
      title: "Dor Cervical: Entenda as causas e quando procurar avaliação especializada",
      description: "Dor cervical é comum na rotina moderna e pode envolver fatores mecânicos e posturais. Entenda quando procurar avaliação especializada.",
      date: "17 Fev 2026",
      href: "/artigos/dor-cervical",
      image: dorCervicalThumb,
    },
    {
      id: 4,
      title: "Spine Specialist Process: Clareza, Segurança e Método no Cuidado da Coluna Vertebral",
      description: "Conheça o modelo de cuidado estruturado em 6 etapas: avaliação funcional, plano personalizado e acompanhamento progressivo.",
      date: "17 Fev 2026",
      href: "/artigos/spine-specialist-process",
    },
    {
      id: 5,
      title: "Hérnia de Disco: Causas, Sintomas e Tratamentos",
      description: "Entenda tudo sobre a hérnia de disco e as opções de tratamento disponíveis.",
      date: "15 Jan 2024",
    },
    {
      id: 6,
      title: "Postura Correta no Trabalho",
      description: "Dicas práticas para manter uma postura saudável durante o expediente.",
      date: "10 Jan 2024",
    },
    {
      id: 7,
      title: "Exercícios para Fortalecer a Coluna",
      description: "Conheça exercícios seguros para fortalecer a musculatura da coluna.",
      date: "05 Jan 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/#conteudo">
              <Button variant="ghost" className="gap-2 mb-4">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Artigos</h1>
                <p className="text-muted-foreground">Publicações científicas e informativas sobre saúde da coluna vertebral.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {artigos.map((artigo) => {
              const cardContent = (
                <Card className="card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`flex ${artigo.image ? 'flex-row' : 'flex-col'}`}>
                      {artigo.image && (
                        <div className="w-40 md:w-48 flex-shrink-0">
                          <img
                            src={artigo.image}
                            alt={artigo.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-5 flex flex-col justify-center">
                        <h3 className="text-lg font-bold text-foreground leading-snug mb-1">{artigo.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{artigo.date}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{artigo.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
              return artigo.href ? (
                <Link key={artigo.id} to={artigo.href}>
                  {cardContent}
                </Link>
              ) : (
                <div key={artigo.id}>{cardContent}</div>
              );
            })}
          </div>

          {artigos.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum artigo disponível no momento.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Artigos;
