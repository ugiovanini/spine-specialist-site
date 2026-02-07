import { Headphones, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Audios = () => {
  const audios = [
    {
      id: 1,
      title: "Podcast: Saúde da Coluna no Dia a Dia",
      description: "Dicas práticas para manter sua coluna saudável nas atividades cotidianas.",
      duration: "25 min",
    },
    {
      id: 2,
      title: "Meditação Guiada para Relaxamento Muscular",
      description: "Áudio de relaxamento focado na região da coluna e pescoço.",
      duration: "15 min",
    },
    {
      id: 3,
      title: "Orientações Pós-Consulta",
      description: "Instruções importantes para seguir após sua consulta.",
      duration: "10 min",
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
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Áudios</h1>
                <p className="text-muted-foreground">Podcasts e orientações em áudio para você ouvir onde estiver.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audios.map((audio) => (
              <Card key={audio.id} className="card-hover">
                <CardHeader>
                  <div className="w-full h-24 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Headphones className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{audio.title}</CardTitle>
                  <CardDescription>Duração: {audio.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{audio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {audios.length === 0 && (
            <div className="text-center py-16">
              <Headphones className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum áudio disponível no momento.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Audios;
