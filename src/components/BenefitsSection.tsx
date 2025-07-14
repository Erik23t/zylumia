import { Sparkles, Zap, Shield, Heart, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Sparkles,
    title: "Regeneração Celular Avançada",
    description: "PDRN de salmão estimula a renovação natural das células da pele"
  },
  {
    icon: Zap,
    title: "Resultados Visíveis em 7 Dias",
    description: "Pele mais firme, hidratada e com brilho natural"
  },
  {
    icon: Shield,
    title: "Fórmula Dermatologicamente Testada",
    description: "Aprovada por especialistas e livre de substâncias nocivas"
  },
  {
    icon: Heart,
    title: "Anti-idade Poderoso",
    description: "Reduz linhas de expressão e melhora a elasticidade"
  },
  {
    icon: Clock,
    title: "Ação 24h Contínua",
    description: "Trabalha enquanto você dorme para uma pele renovada"
  },
  {
    icon: Star,
    title: "Ingredientes Premium",
    description: "Colágeno marinho e peptídeos de alta qualidade"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">TRANSFORMAÇÃO REAL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher <span className="text-primary">Zylumia?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A tecnologia mais avançada em cuidados com a pele, com resultados comprovados cientificamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Sua pele merece o melhor cuidado
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a milhares de pessoas que já transformaram sua pele com Zylumia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🔥 OFERTA LIMITADA
              </div>
              <span className="text-sm text-muted-foreground">
                Apenas 97 unidades restantes!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;