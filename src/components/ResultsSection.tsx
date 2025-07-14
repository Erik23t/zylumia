import { CheckCircle, Award, Users, Zap, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

        {/* Video Carousel Section */}
        <div className="mb-16 max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[...Array(5)].map((_, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="relative rounded-lg overflow-hidden shadow-elegant w-full">
                    <video
                      className="w-full h-auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      onClick={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.muted = false;
                      }}
                    >
                      <source src="https://storage.googleapis.com/videemio-89i/V%C3%ADdeo%20sem%20t%C3%ADtulo%20%E2%80%90%20Feito%20com%20o%20Clipchamp%20(19).mp4" type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                    {/* Brand Overlay */}
                    <div className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded text-xs">
                      <span className="text-white font-bold">ZYLUMIA</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Science-Based Results Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Resultados <span className="text-primary">apoiados pela ciência</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada máscara é rigorosamente testada para atender aos padrões 
              dermatológicos, garantindo uma solução de cuidado da pele segura e 
              eficaz.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted/20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2.51 * 90} ${2.51 * 100}`}
                    className="text-primary transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">90%</span>
                </div>
              </div>
              <p className="text-foreground">
                Experimentei uma textura mais suave e uma pele mais 
                hidratada, com menos ressecamento, em duas semanas.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted/20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2.51 * 90} ${2.51 * 100}`}
                    className="text-primary transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">90%</span>
                </div>
              </div>
              <p className="text-foreground">
                Notei poros mais finos, menos linhas finas e um brilho 
                radiante — principalmente ao redor dos olhos e da testa.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted/20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2.51 * 90} ${2.51 * 100}`}
                    className="text-primary transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">90%</span>
                </div>
              </div>
              <p className="text-foreground">
                Notei uma pele mais brilhante e uniforme após apenas um 
                uso.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            *Esses resultados são baseados no feedback de clientes que usaram a máscara 
            semanalmente conforme as instruções.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;