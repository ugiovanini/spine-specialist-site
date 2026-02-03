const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#hero" className="text-2xl font-bold">
              SPINE<span className="text-primary">SPECIALIST</span>
            </a>
            <p className="text-background/60 text-sm mt-2">
              Especialista em Coluna Vertebral
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
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

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {currentYear} Spine Specialist. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
