import { CheckCircle, Award, Users, Zap } from "lucide-react";

const results = [
  {
    icon: CheckCircle,
    title: "Resultados comprovados",
    description: "Fórmulas cientificamente testadas e aprovadas por dermatologistas"
  },
  {
    icon: Award,
    title: "Ingredientes premium",
    description: "Apenas os melhores ingredientes ativos para sua pele"
  },
  {
    icon: Users,
    title: "Mais de 10.000 clientes satisfeitos",
    description: "Uma comunidade crescente de pessoas com pele radiante"
  },
  {
    icon: Zap,
    title: "Resultados em até 7 dias",
    description: "Veja a diferença na sua pele em apenas uma semana"
  }
];

const ResultsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Resultados
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Resultados apoiados pela ciência
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa pesquisa e desenvolvimento são baseados nos mais rigorosos estudos científicos, 
            garantindo produtos eficazes e seguros para todos os tipos de pele. Cada fórmula é 
            testada e aprovada por especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <result.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h4 className="font-semibold text-foreground text-lg">
                {result.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-lg">98%</span>
            </div>
            <h4 className="font-semibold text-foreground">Taxa de satisfação</h4>
            <p className="text-muted-foreground text-sm">
              De clientes que recomendam nossos produtos
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-lg">7</span>
            </div>
            <h4 className="font-semibold text-foreground">Dias</h4>
            <p className="text-muted-foreground text-sm">
              Para ver os primeiros resultados na sua pele
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-lg">24h</span>
            </div>
            <h4 className="font-semibold text-foreground">Atendimento</h4>
            <p className="text-muted-foreground text-sm">
              Suporte disponível todos os dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;