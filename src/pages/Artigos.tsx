import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Artigos = () => {
  const artigos = [
    {
      id: 1,
      title: "Hérnia de Disco: Causas, Sintomas e Tratamentos",
      description: "Entenda tudo sobre a hérnia de disco e as opções de tratamento disponíveis.",
      date: "15 Jan 2024",
    },
    {
      id: 2,
      title: "Postura Correta no Trabalho",
      description: "Dicas práticas para manter uma postura saudável durante o expediente.",
      date: "10 Jan 2024",
    },
    {
      id: 3,
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artigos.map((artigo) => (
              <Card key={artigo.id} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{artigo.title}</CardTitle>
                  <CardDescription>{artigo.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{artigo.description}</p>
                </CardContent>
              </Card>
            ))}
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
