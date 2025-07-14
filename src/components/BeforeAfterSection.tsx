import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Calendar, MapPin } from "lucide-react";

import beforeAfter1 from "@/assets/before-after-1.webp";
import beforeAfter2 from "@/assets/before-after-2.webp";
import beforeAfter3 from "@/assets/before-after-3.webp";
import beforeAfter4 from "@/assets/before-after-4.webp";

const beforeAfterData = [
  {
    name: "Maria Silva",
    age: 34,
    location: "São Paulo, SP",
    beforeImage: beforeAfter1,
    afterImage: beforeAfter2,
    period: "21 dias",
    testimonial: "Não acreditava que ia ver tanta diferença! Minha pele está completamente renovada, as manchas sumiram e o brilho voltou.",
    rating: 5
  },
  {
    name: "Ana Costa",
    age: 29,
    location: "Rio de Janeiro, RJ",
    beforeImage: beforeAfter3,
    afterImage: beforeAfter4,
    period: "14 dias",
    testimonial: "Incrível! Já nos primeiros dias percebi a diferença. Agora minha pele está lisa, hidratada e com uma aparência jovem.",
    rating: 5
  },
  {
    name: "Carla Mendes",
    age: 42,
    location: "Belo Horizonte, MG",
    beforeImage: beforeAfter1,
    afterImage: beforeAfter3,
    period: "30 dias",
    testimonial: "Sempre tive problemas com rugas e linhas de expressão. Com Zylumia, minha pele voltou a ter a firmeza da juventude!",
    rating: 5
  }
];

const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
  };

  const currentData = beforeAfterData[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">RESULTADOS REAIS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja a <span className="text-primary">transformação real</span> de nossas clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Milhares de mulheres já experimentaram a renovação completa da pele com Zylumia
          </p>
        </div>

        {/* Main Before/After Display */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 shadow-elegant">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Before/After Images */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Transformação em {currentData.period}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={currentData.beforeImage} 
                        alt={`${currentData.name} antes`}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        ANTES
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={currentData.afterImage} 
                        alt={`${currentData.name} depois`}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        DEPOIS
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-3">
                    {[...Array(currentData.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground italic mb-6">
                    "{currentData.testimonial}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground text-lg">
                      {currentData.name}, {currentData.age} anos
                    </h4>
                    <div className="flex items-center justify-center lg:justify-start text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {currentData.location}
                    </div>
                    <div className="flex items-center justify-center lg:justify-start text-sm text-primary font-medium">
                      <Calendar className="w-4 h-4 mr-1" />
                      Resultado em {currentData.period}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSlide}
                    className="w-10 h-10 p-0"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex space-x-2">
                    {beforeAfterData.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentIndex ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextSlide}
                    className="w-10 h-10 p-0"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Você também pode ter esses resultados!
              </h3>
              <p className="text-muted-foreground mb-6">
                Faça parte do grupo de mulheres que transformaram sua pele com Zylumia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ✨ GARANTIA DE RESULTADOS
                </div>
                <span className="text-sm text-muted-foreground">
                  Ou seu dinheiro de volta!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;