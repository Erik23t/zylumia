import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonial1Before from "@/assets/testimonial-1-before.jpg";
import testimonial1After from "@/assets/testimonial-1-after.jpg";
import testimonial2Before from "@/assets/testimonial-2-before.jpg";
import testimonial2After from "@/assets/testimonial-2-after.jpg";

const testimonials = [
  {
    id: 1,
    name: "Maria S.",
    beforeImage: testimonial1Before,
    afterImage: testimonial1After,
    text: "Em apenas 3 semanas de uso, minha pele ficou visivelmente mais luminosa e hidratada. Os produtos são incríveis!",
    rating: 5
  },
  {
    id: 2,
    name: "João P.",
    beforeImage: testimonial2Before,
    afterImage: testimonial2After,
    text: "Nunca pensei que produtos de skincare pudessem fazer tanta diferença. Minha pele está muito mais saudável.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Mais de 5000 pessoas estão Nitfora
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Text testimonials */}
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary text-sm">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Additional testimonial card */}
          <Card className="bg-background border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 text-sm leading-relaxed">
                "Produto excelente! Minha pele nunca esteve tão bonita e saudável. Recomendo para todos!"
              </p>
              <p className="font-semibold text-primary text-sm">
                Ana M.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Before/After Gallery */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Não é só skin care<br />
            São os nossos clientes felizes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={`before-after-${testimonial.id}`} className="space-y-4">
                <div className="relative">
                  <img
                    src={testimonial.beforeImage}
                    alt={`${testimonial.name} - Antes`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={testimonial.afterImage}
                    alt={`${testimonial.name} - Depois`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-semibold">
                    After
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;