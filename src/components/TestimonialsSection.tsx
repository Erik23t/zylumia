import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialBefore1 from "@/assets/testimonial-1-before.jpg";
import testimonialAfter1 from "@/assets/testimonial-1-after.jpg";
import testimonialBefore2 from "@/assets/testimonial-2-before.jpg";
import testimonialAfter2 from "@/assets/testimonial-2-after.jpg";
import testimonialBefore3 from "@/assets/testimonial-3-before.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jessica Williams",
    beforeImage: testimonialBefore1,
    afterImage: testimonialAfter1,
    text: "Nunca imaginei que algo tão simples poderia transformar tanto minha pele. Após a segunda aplicação, notei minha pele mais hidratada, luminosa e com aparência descansada. Não troco por nada!",
    rating: 5
  },
  {
    id: 2,
    name: "Amanda Johnson",
    beforeImage: testimonialBefore2,
    afterImage: testimonialAfter2,
    text: "Sou mãe de dois, durmo pouco e minha pele vivia opaca. Essa máscara virou meu ritual noturno! Em poucos dias, senti mais firmeza, menos manchas e até elogios no trabalho. Vale cada centavo.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Davis",
    beforeImage: testimonialBefore3,
    afterImage: testimonialAfter1,
    text: "Minha pele era extremamente sensível, e mesmo assim a máscara funcionou perfeitamente. Reduziu a vermelhidão e melhorou até a textura. Hoje, me sinto mais confiante sem maquiagem.",
    rating: 5
  },
  {
    id: 4,
    name: "Michelle Brown",
    beforeImage: testimonialAfter2,
    afterImage: testimonialBefore1,
    text: "Depois dos 40, achei que nada mais faria diferença. Mas essa máscara me surpreendeu! Linhas de expressão suavizadas, pele mais uniforme e um viço que eu só via em fotos editadas. Incrível!",
    rating: 5
  },
  {
    id: 5,
    name: "Emily Wilson",
    beforeImage: testimonialBefore1,
    afterImage: testimonialAfter2,
    text: "Tenho rotina corrida, mas não abro mão dessa máscara. É meu momento de autocuidado. A sensação de pele renovada é imediata, e o efeito a longo prazo é visível — mais firmeza e menos sinais de cansaço.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Mais de 5000 pessoas usam Zylumia com resultados surpreendentes
          </h2>
        </div>

        {/* Before/After Carousel */}
        <div className="mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                          <img
                            src={testimonial.beforeImage}
                            alt={`${testimonial.name} - Before`}
                            className="w-full h-64 sm:h-80 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-gray-700">
                            BEFORE
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src={testimonial.afterImage}
                            alt={`${testimonial.name} - After`}
                            className="w-full h-64 sm:h-80 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-gray-700">
                            AFTER
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stars and testimonial */}
                    <div className="text-center space-y-2">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm font-medium text-primary">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;