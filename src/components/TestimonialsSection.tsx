import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialUser1 from "@/assets/testimonial-user-1.webp";
import testimonialUser2 from "@/assets/testimonial-user-2.webp";
import testimonialUser3 from "@/assets/testimonial-user-3.webp";
import testimonialUser4 from "@/assets/testimonial-user-4.webp";
import beforeAfter1 from "@/assets/before-after-1.webp";
import beforeAfter2 from "@/assets/before-after-2.webp";
import beforeAfter3 from "@/assets/before-after-3.webp";
import beforeAfter4 from "@/assets/before-after-4.webp";

import testimonialUser5 from "@/assets/testimonial-user-5.webp";

const testimonials = [
  {
    id: 1,
    name: "Camila Freitas",
    image: testimonialUser1,
    text: "Nunca imaginei que algo tão simples poderia transformar tanto minha pele. Após a segunda aplicação, notei minha pele mais hidratada, luminosa e com aparência descansada. Não troco por nada!",
    rating: 5
  },
  {
    id: 2,
    name: "Renata Lima",
    image: testimonialUser2,
    text: "Sou mãe de dois, durmo pouco e minha pele vivia opaca. Essa máscara virou meu ritual noturno! Em poucos dias, senti mais firmeza, menos manchas e até elogios no trabalho. Vale cada centavo.",
    rating: 5
  },
  {
    id: 3,
    name: "Bruna Azevedo",
    image: testimonialUser3,
    text: "Minha pele era extremamente sensível, e mesmo assim a máscara funcionou perfeitamente. Reduziu a vermelhidão e melhorou até a textura. Hoje, me sinto mais confiante sem maquiagem.",
    rating: 5
  },
  {
    id: 4,
    name: "Juliana Mendes",
    image: testimonialUser4,
    text: "Depois dos 40, achei que nada mais faria diferença. Mas essa máscara me surpreendeu! Linhas de expressão suavizadas, pele mais uniforme e um viço que eu só via em fotos editadas. Incrível!",
    rating: 5
  },
  {
    id: 5,
    name: "Larissa M.",
    image: testimonialUser5,
    text: "Tenho rotina corrida, mas não abro mão dessa máscara. É meu momento de autocuidado. A sensação de pele renovada é imediata, e o efeito a longo prazo é visível — mais firmeza e menos sinais de cansaço.",
    rating: 5
  }
];

const beforeAfterImages = [
  {
    id: 1,
    name: "Cliente 1",
    image: beforeAfter1
  },
  {
    id: 2,
    name: "Cliente 2", 
    image: beforeAfter2
  },
  {
    id: 3,
    name: "Cliente 3",
    image: beforeAfter3
  },
  {
    id: 4,
    name: "Cliente 4",
    image: beforeAfter4
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

        {/* Testimonials Grid */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-lg shadow-soft p-6 flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary/20"
              />
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-primary text-sm">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Before/After Gallery */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Não é só skin care<br />
            São os nossos clientes felizes
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {beforeAfterImages.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={`${item.name} - Antes e Depois`}
                        className="w-full h-80 sm:h-96 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-gray-700">
                        BEFORE
                      </div>
                      <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-gray-700">
                        AFTER
                      </div>
                    </div>
                    
                    {/* Stars and testimonial */}
                    <div className="text-center space-y-2">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm font-medium text-primary">Sarah M. - California, USA</p>
                      <p className="text-xs text-muted-foreground italic">
                        "Incredible results! My skin was completely renewed in just 2 days of use. The collagen mask worked like magic!"
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