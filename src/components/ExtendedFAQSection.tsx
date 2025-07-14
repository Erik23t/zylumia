import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExtendedFAQSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            ❓ Dúvidas? Nós temos as respostas!
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-0" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                📌 Como devo usar a máscara?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">🕯️ Rotina Noturna:</p>
                    <p>Limpe e tonifique o rosto, garantindo que a pele esteja livre de oleosidade e cremes.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">📌 Aplicação:</p>
                    <p>Comece com a parte inferior da máscara e depois aplique a parte superior. Pressione suavemente para garantir aderência.</p>
                    <p className="italic text-sm mt-1">Dica: Incline a cabeça para trás para facilitar o encaixe.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">⏳ Duração:</p>
                    <p><strong>Brilho Rápido:</strong> 1 a 2 horas</p>
                    <p><strong>Resultado Máximo:</strong> Deixe agir durante a noite (quando estiver completamente seca para evitar que se desloque).</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">💖 O Toque Final:</p>
                    <p>Remova delicadamente a máscara e massageie o restante do sérum na pele.</p>
                    <p className="italic text-sm mt-1">Dica Pro: Aproveite o excesso de sérum no pescoço e colo.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                📌 Quantas máscaras vêm no pacote?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <div className="space-y-3">
                  <p>Cada pacote contém 4 máscaras de uso único.</p>
                  <p>Recomendamos usar 2 máscaras por semana no primeiro mês para revitalizar sua pele. Após esse período, 1 máscara por semana ajuda a manter o brilho e a saúde da pele.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                📌 Com que frequência devo usar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <div className="space-y-3">
                  <p>Use de 1 a 2 vezes por semana para melhores resultados. O uso regular potencializa os efeitos de firmeza, hidratação e luminosidade.</p>
                  <p>⏲️ Deixe a máscara por no mínimo 60 minutos — idealmente de 3 a 4 horas. Ela vai ficando transparente conforme os nutrientes são absorvidos.</p>
                  <p>🌙 <strong>Melhor opção:</strong> Utilize como máscara noturna. Ela não deixa resíduos no travesseiro.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                📌 É indicada para pele sensível?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <p>Com certeza. A máscara foi formulada para ser suave, sem retirar a hidratação natural da pele. Ideal para todos os tipos de pele.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                📌 Preciso lavar o rosto após o uso?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <p>Não é necessário. O sérum restante pode ser massageado suavemente na pele para intensificar a hidratação.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                📌 Garantia de satisfação?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <div className="space-y-3">
                  <p>Sim! Oferecemos uma garantia de 100% de reembolso.</p>
                  <p>Se você não perceber melhora na saúde da sua pele, devolvemos o valor pago.</p>
                  <p>Aproveite nossa garantia de 60 dias sem riscos para testar com tranquilidade.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                📌 Quais são os prazos de entrega?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <div className="space-y-3">
                  <p>🛠️ <strong>Tempo de Processamento:</strong> Após o pedido, levamos 1 dia útil para preparar e enviar sua encomenda.</p>
                  <p>🚚 <strong>Envio:</strong> Após a postagem, a entrega geralmente leva de 3 a 5 dias úteis, dependendo da sua localização.</p>
                  <p>📨 <strong>Rastreamento:</strong> Assim que seu pedido for enviado, você receberá um e-mail com o código de rastreio para acompanhar a entrega em tempo real.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExtendedFAQSection;