import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <a href="#hero" className="text-2xl font-bold">
              SPINE<span className="text-primary">SPECIALIST</span>
            </a>
            <p className="text-background/60 text-sm mt-2">
              Especialista em Coluna Vertebral
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold text-background mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#sobre"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Serviços
              </a>
              <a
                href="#diferenciais"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Diferenciais
              </a>
              <a
                href="#contato"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Conteúdo */}
          <div>
            <h4 className="font-semibold text-background mb-4">Conteúdo</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#artigos"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Artigos
              </a>
              <a
                href="#videos"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Vídeos
              </a>
              <a
                href="#audios"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Áudios
              </a>
              <a
                href="#notas"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Notas
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/legal"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Cookies
              </Link>
              <Link
                to="/legal"
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                Políticas, Privacidade e Proteção de Dados
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {currentYear} Spine Specialist, todos os direitos reservados. Conteúdos, textos, imagens, logotipo e marca são de propriedade exclusiva, sendo vedada a reprodução sem autorização. As informações deste site têm caráter informativo e não substituem avaliação profissional individual. Os dados fornecidos são utilizados exclusivamente para contato e atendimento, conforme a Política de Privacidade e Proteção de Dados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
