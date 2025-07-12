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
            Resultados comprovados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de clientes já transformaram sua pele com nossos produtos
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-elegant">
            <iframe
              src="https://app.vidzflow.com/v/8cNXgwT4gX?dq=576&ap=false&muted=false&loop=false&ctp=false&bv=false&piv=false&playsinline=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen"
              className="w-full h-[400px] md:h-[500px]"
              frameBorder="0"
              allowFullScreen
            />
            {/* Brand Overlay */}
            <div className="absolute top-4 right-4 bg-primary px-4 py-2 rounded">
              <span className="text-primary-foreground font-bold text-lg">ZYLUMIA</span>
            </div>
          </div>
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