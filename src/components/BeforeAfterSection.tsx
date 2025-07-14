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

const beforeAfterImages = [
  { id: 1, image: beforeAfter1, alt: "Resultado 1 - Antes e Depois" },
  { id: 2, image: beforeAfter2, alt: "Resultado 2 - Antes e Depois" },
  { id: 3, image: beforeAfter3, alt: "Resultado 3 - Antes e Depois" },
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
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
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