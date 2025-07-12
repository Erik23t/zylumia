import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como usar o produto?",
    answer: "Aplique uma pequena quantidade do produto na pele limpa e seca, massageando suavemente até completa absorção. Use pela manhã e/ou à noite conforme indicado na embalagem."
  },
  {
    question: "Quando começarei a ver os resultados?",
    answer: "Os primeiros resultados podem ser observados em até 7 dias de uso regular. Resultados mais significativos são geralmente visíveis após 2-4 semanas de uso contínuo."
  },
  {
    question: "O produto é adequado para todos os tipos de pele?",
    answer: "Sim, nossos produtos são formulados para serem adequados a todos os tipos de pele, incluindo peles sensíveis. Todos os produtos são testados dermatologicamente."
  },
  {
    question: "Quanto tempo dura o frascos do produto?",
    answer: "Com uso regular (duas vezes ao dia), um frasco dura aproximadamente 2-3 meses, dependendo da quantidade aplicada e da área de uso."
  },
  {
    question: "Quais são os prazos de entrega?",
    answer: "Entregamos em todo o Brasil. O prazo varia de 3-7 dias úteis para regiões Sul e Sudeste, e 7-12 dias úteis para demais regiões. Frete grátis para compras acima de R$ 150."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background rounded-lg border border-border shadow-soft overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;