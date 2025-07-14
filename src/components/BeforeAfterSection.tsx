import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import beforeAfter1 from "@/assets/before-after-1.webp";
import beforeAfter2 from "@/assets/before-after-2.webp";
import beforeAfter3 from "@/assets/before-after-3.webp";
import beforeAfter4 from "@/assets/before-after-4.webp";
import beforeAfter5 from "@/assets/before-after-5.webp";

const beforeAfterImages = [
  { 
    id: 1, 
    image: beforeAfter1, 
    alt: "Sarah Wilson - Antes e Depois",
    name: "Sarah Wilson",
    description: "Após 30 dias com Zylumia, minha pele estava completamente renovada. As linhas finas desapareceram e agora tenho um brilho natural que nunca tive antes!"
  },
  { 
    id: 2, 
    image: beforeAfter2, 
    alt: "Jessica Martinez - Antes e Depois",
    name: "Jessica Martinez",
    description: "Incrível! Minha pele passou de opaca e cansada para radiante e firme. O colágeno realmente funciona de dentro para fora!"
  },
  { 
    id: 3, 
    image: beforeAfter3, 
    alt: "Amanda Johnson - Antes e Depois",
    name: "Amanda Johnson",
    description: "A transformação foi surreal! Minha pele recuperou a elasticidade e o tom uniforme. Sinto-me 10 anos mais jovem!"
  },
  { 
    id: 4, 
    image: beforeAfter4, 
    alt: "Emma Davis - Antes e Depois",
    name: "Emma Davis",
    description: "Nunca pensei que seria possível ter uma pele tão lisa e luminosa novamente. Zylumia restaurou minha confiança!"
  },
  { 
    id: 5, 
    image: beforeAfter5, 
    alt: "Olivia Thompson - Antes e Depois",
    name: "Olivia Thompson",
    description: "Resultados visíveis em apenas 3 semanas! Minha pele está mais firme, hidratada e com aquele brilho saudável que sempre quis."
  },
];

const BeforeAfterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Descubra sua Melhor Pele ✨
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Do opaco ao radiante com Zylumia! Colágeno que nutre, firma e ilumina de dentro para fora. 
            Resultados visíveis, sensação real. 💖
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-8">
            Antes & Depois
          </h3>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <Carousel className="w-full">
            <CarouselContent>
              {beforeAfterImages.map((item) => (
                <CarouselItem key={item.id}>
                  <Card className="p-4 border-0 shadow-lg">
                    <div className="relative rounded-lg overflow-hidden mb-4">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                    <div className="text-center space-y-3">
                      <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed px-2">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white shadow-lg border-0" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white shadow-lg border-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;