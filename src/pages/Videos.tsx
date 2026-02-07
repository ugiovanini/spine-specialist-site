import { Video, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Como Aliviar a Dor Lombar em Casa",
      description: "Técnicas simples para aliviar a dor lombar no conforto da sua casa.",
      duration: "8:45",
    },
    {
      id: 2,
      title: "Alongamentos para a Coluna Cervical",
      description: "Exercícios de alongamento para melhorar a flexibilidade da região cervical.",
      duration: "12:30",
    },
    {
      id: 3,
      title: "Entendendo a Escoliose",
      description: "Explicação completa sobre escoliose, diagnóstico e tratamento.",
      duration: "15:20",
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
                <Video className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Vídeos</h1>
                <p className="text-muted-foreground">Conteúdo audiovisual com orientações e exercícios para sua coluna.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="card-hover">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Video className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{video.title}</CardTitle>
                  <CardDescription>Duração: {video.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {videos.length === 0 && (
            <div className="text-center py-16">
              <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum vídeo disponível no momento.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
