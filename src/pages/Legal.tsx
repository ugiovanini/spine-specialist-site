import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">Legal</span>
          </h1>

          <div className="max-w-4xl mx-auto space-y-16">
            {/* Política de Privacidade */}
            <section className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Política de Privacidade e Proteção de Dados
              </h2>
              
              <div className="prose prose-gray max-w-none space-y-6 text-foreground/80">
                <p>
                  O Spine Specialist respeita a privacidade e protege os dados pessoais de seus usuários, tratando-os de forma lícita, transparente e segura, em conformidade com a legislação brasileira.
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Dados coletados</h3>
                  <p>
                    São tratados apenas os dados estritamente necessários, fornecidos voluntariamente pelo usuário, como nome, e-mail e telefone, por meio de formulários de contato ou comunicação direta.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Finalidade do tratamento</h3>
                  <p>Os dados pessoais são utilizados exclusivamente para:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>responder solicitações e contatos;</li>
                    <li>viabilizar atendimento e comunicação;</li>
                    <li>cumprir obrigações legais e regulatórias;</li>
                    <li>aprimorar a experiência do usuário no site.</li>
                  </ul>
                  <p className="mt-3">
                    Não realizamos venda, compartilhamento comercial ou uso publicitário de dados.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Base legal</h3>
                  <p>
                    O tratamento de dados fundamenta-se nos arts. 7º e 11 da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD), especialmente no consentimento do titular, na execução de procedimentos solicitados e no cumprimento de obrigação legal.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Compartilhamento</h3>
                  <p>Os dados poderão ser compartilhados apenas:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>por exigência legal ou ordem judicial;</li>
                    <li>para serviços técnicos essenciais ao funcionamento do site, observada a proteção adequada.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Segurança</h3>
                  <p>
                    São adotadas medidas técnicas e administrativas razoáveis para proteger os dados contra acesso não autorizado, perda, alteração ou uso indevido.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Direitos do titular</h3>
                  <p>O titular pode, a qualquer momento, solicitar:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>acesso aos dados;</li>
                    <li>correção;</li>
                    <li>exclusão, quando legalmente possível;</li>
                    <li>revogação do consentimento.</li>
                  </ul>
                  <p className="mt-3">
                    As solicitações podem ser feitas pelos canais de contato do site.
                  </p>
                </div>

                <p className="text-sm text-foreground/60 italic">
                  Esta política pode ser atualizada a qualquer tempo para refletir alterações legais ou operacionais.
                </p>
              </div>
            </section>

            {/* Política de Cookies */}
            <section className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Política de Cookies
              </h2>
              
              <div className="prose prose-gray max-w-none space-y-6 text-foreground/80">
                <p>
                  Este site utiliza cookies estritamente necessários para garantir seu funcionamento técnico, segurança e correta navegação.
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Como utilizamos cookies</h3>
                  <p>Os cookies utilizados têm finalidade exclusiva de:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>permitir a navegação adequada;</li>
                    <li>manter funcionalidades essenciais;</li>
                    <li>gerar estatísticas anonimizadas de uso.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Não utilizamos cookies para:</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>publicidade direcionada;</li>
                    <li>remarketing;</li>
                    <li>criação de perfis de consumo;</li>
                    <li>venda ou compartilhamento de dados.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Consentimento e controle</h3>
                  <p>
                    Ao continuar navegando, o usuário declara estar ciente do uso de cookies.
                  </p>
                  <p>
                    A qualquer momento, é possível gerenciar ou desativar cookies diretamente nas configurações do navegador, ciente de que isso pode afetar algumas funcionalidades do site.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Base legal</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Lei nº 13.709/2018 (LGPD);</li>
                    <li>Lei nº 12.965/2014 (Marco Civil da Internet);</li>
                    <li>Orientações da Autoridade Nacional de Proteção de Dados.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Legal;
