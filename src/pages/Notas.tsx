import { StickyNote, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Notas = () => {
  const notas = [
    {
      id: 1,
      title: "Dica do Dia: Postura ao Dormir",
      content: "Dormir de lado com um travesseiro entre os joelhos ajuda a manter o alinhamento da coluna durante a noite.",
      date: "Hoje",
    },
    {
      id: 2,
      title: "Lembrete: Pausas no Trabalho",
      content: "Levante-se a cada 50 minutos e faça pequenos alongamentos. Sua coluna agradece!",
      date: "Ontem",
    },
    {
      id: 3,
      title: "Hidratação e Saúde da Coluna",
      content: "Os discos intervertebrais são compostos principalmente de água. Mantenha-se bem hidratado!",
      date: "2 dias atrás",
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
                <StickyNote className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Notas</h1>
                <p className="text-muted-foreground">Dicas rápidas e atualizações sobre cuidados com a coluna.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notas.map((nota) => (
              <Card key={nota.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{nota.title}</CardTitle>
                    <span className="text-xs text-muted-foreground">{nota.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{nota.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {notas.length === 0 && (
            <div className="text-center py-16">
              <StickyNote className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhuma nota disponível no momento.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notas;
