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

const testimonials = [
  {
    id: 1,
    name: "Marina S.",
    image: testimonialUser1,
    text: "Em apenas 3 semanas de uso, minha pele ficou visivelmente mais luminosa e hidratada. Os produtos são incríveis!",
    rating: 5
  },
  {
    id: 2,
    name: "Carolina P.",
    image: testimonialUser2,
    text: "Nunca pensei que produtos de skincare pudessem fazer tanta diferença. Minha pele está muito mais saudável e radiante.",
    rating: 5
  },
  {
    id: 3,
    name: "Beatriz M.",
    image: testimonialUser3,
    text: "Produto excelente! Minha pele nunca esteve tão bonita e suave. Recomendo para todas as minhas amigas!",
    rating: 5
  },
  {
    id: 4,
    name: "Fernanda L.",
    image: testimonialUser4,
    text: "Transformação incrível! A textura da minha pele melhorou muito e as manchas diminuíram visivelmente.",
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
            Mais de 5000 pessoas estão Zylumia
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="bg-background border-0 shadow-soft h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-primary text-sm">
                            {testimonial.name}
                          </h4>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground text-sm leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
                      <div className="absolute bottom-2 left-2 flex gap-2">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold">
                          Before & After
                        </div>
                      </div>
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