import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Vitamina C 15% Brightening Serum",
    description: "Antioxidante | Hidratante",
    price: "R$ 89,90",
    originalPrice: "R$ 109,90",
    image: product1,
    badge: "Mais vendido"
  },
  {
    id: 2,
    name: "Vitamina C 10% Smoothing Serum",
    description: "Antioxidante | Hidratante",
    price: "R$ 79,90", 
    originalPrice: "R$ 99,90",
    image: product2,
    badge: "Mais vendido"
  },
  {
    id: 3,
    name: "Vitamina B3 1% Hydrating Serum",
    description: "Hidratante | Suavizante",
    price: "R$ 69,90",
    originalPrice: "R$ 89,90", 
    image: product3,
    badge: "Mais vendido"
  },
  {
    id: 4,
    name: "Ácido Hialurônico 2% Radiant Serum",
    description: "Antioxidante | Anti-idade",
    price: "R$ 99,90",
    originalPrice: "R$ 119,90",
    image: product4,
    badge: "Mais vendido"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Mais vendidos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="border border-border hover:shadow-soft transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                      {product.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground text-sm leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    size="sm"
                  >
                    COMPRAR
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            VER MAIS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;