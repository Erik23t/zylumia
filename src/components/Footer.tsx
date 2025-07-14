import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Zylumia</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Cuidados com a pele que transformam sua rotina de beleza. 
              Produtos premium com ingredientes cientificamente comprovados.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Procurar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Reembolsos e Pagamentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Políticas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Política de envio e entrega
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atendimento</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 14h</p>
              <p>WhatsApp: (11) 99999-9999</p>
              <p>Email: contato@nitfora.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Zylumia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;