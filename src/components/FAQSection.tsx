import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como usar a máscara corretamente?",
    answer: `🔹 Rotina noturna: Inicie com o rosto limpo e tonificado. Certifique-se de que a pele esteja completamente livre de oleosidade e resíduos de cremes.

🔹 Aplicação: Posicione a máscara começando pela parte inferior do rosto e depois ajuste a parte superior. Pressione suavemente com as mãos para garantir que ela se acomode perfeitamente à pele.
Dica profissional: Incline a cabeça levemente para trás para facilitar o encaixe.

🔹 Tempo de uso:
• Brilho Expresso: 1 a 2 horas
• Resultados Máximos: Deixe agir durante a noite para potencializar os benefícios (certifique-se de que a máscara esteja completamente seca antes de dormir para evitar que ela se desloque).

🔹 Remoção: Retire a máscara com delicadeza e massageie a pele com o restante da essência, fazendo leves batidinhas para facilitar a absorção.
Dica profissional: Aplique também no pescoço e colo para um cuidado completo.`
  },
  {
    question: "Quantas máscaras vêm em um pacote?",
    answer: `Cada pacote contém 4 máscaras de uso único.
Recomendamos iniciar com 2 aplicações por semana durante o primeiro mês para resultados rápidos e visíveis.
Após esse período, use 1 máscara por semana para manter sua pele radiante e saudável.`
  },
  {
    question: "Quais são os ingredientes da máscara?",
    answer: `Nossa fórmula poderosa combina ingredientes de alta performance para garantir hidratação profunda, firmeza e rejuvenescimento:

Água purificada, glicerina, propilenoglicol, betaína, carragenina sódica, poliuretano-35, glucomanan, 1,2-hexanodiol, hidroxiacetofenona, butilenoglicol, hidroxietilcelulose, pantenol, acetato de tocoferila (vitamina E), niacinamida (vitamina B3), colágeno hidrolisado, ácido hialurônico de baixo e alto peso molecular, extrato de raiz de alcaçuz, extrato de cogumelo Tremella Fuciformis, Centella Asiática, alantoína, entre outros ativos calmantes, antioxidantes e nutritivos.`
  },
  {
    question: "E se eu não gostar? Posso ter meu dinheiro de volta?",
    answer: `Sim! Garantimos a sua satisfação com uma devolução de 100% do valor pago, caso você não perceba uma melhora visível na sua pele.

💡 Garantia estendida: Você ainda conta com uma garantia de 60 dias sem riscos para testar nosso produto com total tranquilidade.`
  },
  {
    question: "Quais são os prazos de entrega?",
    answer: `📦 Tempo de processamento: Após a confirmação do seu pedido, ele será preparado e embalado em até 1 dia útil.

🚚 Prazo de entrega: A entrega leva de 3 a 5 dias úteis, dependendo da sua localização.

📬 Código de rastreamento: Assim que o pedido for enviado, você receberá um e-mail com o código de rastreio para acompanhar cada etapa da entrega.`
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