import { Facebook, Instagram, Twitter, Youtube, ArrowLeft } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Footer = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  const policies = {
    "about": {
      title: "Sobre nós",
      content: `A Zylumia é uma empresa líder em cuidados com a pele, dedicada a fornecer produtos premium com ingredientes cientificamente comprovados. 

Nossa missão é transformar a rotina de beleza de nossos clientes através de produtos inovadores e de alta qualidade.

Fundada nos Estados Unidos, seguimos rigorosamente todas as regulamentações da FDA e padrões internacionais de qualidade.

Nossa equipe de especialistas trabalha constantemente para desenvolver fórmulas avançadas que entregam resultados visíveis e duradouros.`
    },
    "refunds": {
      title: "Reembolsos e Pagamentos",
      content: `POLÍTICA DE REEMBOLSO:
- Garantia de 30 dias para todos os produtos
- Reembolso integral se não estiver satisfeito
- Processo simples e rápido de devolução

MÉTODOS DE PAGAMENTO ACEITOS:
- Cartões de crédito principais (Visa, Mastercard, American Express)
- PayPal
- Apple Pay e Google Pay
- Transferência bancária

SEGURANÇA:
- Todas as transações são criptografadas com SSL
- Seus dados financeiros estão totalmente protegidos
- Processamento seguro através de gateways certificados`
    },
    "privacy": {
      title: "Política de Privacidade",
      content: `COLETA DE INFORMAÇÕES:
Coletamos apenas as informações necessárias para processar seus pedidos e melhorar sua experiência.

USO DOS DADOS:
- Processamento de pedidos
- Comunicação sobre produtos
- Melhorias no serviço
- Marketing (apenas com seu consentimento)

PROTEÇÃO:
- Dados criptografados e armazenados com segurança
- Não compartilhamos informações com terceiros sem consentimento
- Conformidade com GDPR e regulamentações americanas

SEUS DIREITOS:
- Acesso aos seus dados
- Correção de informações
- Exclusão de dados
- Portabilidade dos dados`
    },
    "shipping": {
      title: "Política de envio e entrega",
      content: `TEMPOS DE ENTREGA:
- Estados Unidos: 3-5 dias úteis
- Internacional: 7-14 dias úteis
- Entrega expressa disponível

CUSTOS DE ENVIO:
- Frete grátis para pedidos acima de $50
- Entrega expressa: $15
- Internacional: varia por região

RASTREAMENTO:
- Código de rastreamento enviado por email
- Acompanhamento em tempo real
- Notificações de entrega

POLÍTICA DE ENTREGA:
- Entrega na porta de casa
- Assinatura pode ser necessária
- Reentrega gratuita em caso de ausência`
    },
    "terms": {
      title: "Termos e Condições",
      content: `ACEITAÇÃO DOS TERMOS:
Ao usar nosso site e produtos, você concorda com estes termos.

USO DO PRODUTO:
- Para uso externo apenas
- Teste em pequena área antes do uso completo
- Descontinue o uso se houver irritação

LIMITAÇÃO DE RESPONSABILIDADE:
- Produtos destinados para maiores de 18 anos
- Consulte um dermatologista se tiver dúvidas
- Não nos responsabilizamos por uso inadequado

PROPRIEDADE INTELECTUAL:
- Todos os conteúdos são protegidos por direitos autorais
- Marca Zylumia é registrada
- Proibida reprodução não autorizada`
    },
    "faq": {
      title: "Perguntas frequentes",
      content: `COMO USAR O PRODUTO?
Aplique uma pequena quantidade na pele limpa, massageie suavemente e deixe absorver.

QUANTO TEMPO PARA VER RESULTADOS?
A maioria dos clientes vê resultados em 2-3 semanas de uso regular.

É SEGURO PARA PELE SENSÍVEL?
Sim, nossa fórmula é desenvolvida para todos os tipos de pele.

POSSO USAR COM OUTROS PRODUTOS?
Recomendamos testar a compatibilidade gradualmente.

QUAL A DURABILIDADE?
Cada produto tem validade de 24 meses quando armazenado adequadamente.

COMO ENTRAR EM CONTATO?
Email: contato@zylumia.com
WhatsApp: (11) 99999-9999`
    }
  };

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
                <button 
                  onClick={() => setSelectedPolicy("about")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy("refunds")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Reembolsos e Pagamentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy("privacy")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Políticas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => setSelectedPolicy("shipping")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Política de envio e entrega
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy("terms")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Termos e Condições
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy("faq")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Perguntas frequentes
                </button>
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

      {/* Policy Modal */}
      <Dialog open={!!selectedPolicy} onOpenChange={() => setSelectedPolicy(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => setSelectedPolicy(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="text-center flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">Zylumia</h2>
                <DialogTitle className="text-xl font-semibold">
                  {selectedPolicy && policies[selectedPolicy as keyof typeof policies]?.title}
                </DialogTitle>
              </div>
            </div>
          </DialogHeader>
          
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-sm leading-relaxed">
              {selectedPolicy && policies[selectedPolicy as keyof typeof policies]?.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;