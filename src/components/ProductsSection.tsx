import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductModal from "@/components/ProductModal";
import productImage from "@/assets/product-new.jpg";

const products = [
  {
    id: 1,
    name: "Bio-Collagen Mask",
    subtitle: "Wake Up to Glass Skin",
    price: "£21.95",
    originalPrice: "£34.95",
    image: productImage,
    discount: "SAVE 37%"
  },
  {
    id: 2,
    name: "Bio-Collagen Mask",
    subtitle: "Wake Up to Glass Skin",
    price: "£21.95", 
    originalPrice: "£34.95",
    image: productImage,
    discount: "SAVE 37%"
  },
  {
    id: 3,
    name: "Bio-Collagen Mask",
    subtitle: "Wake Up to Glass Skin",
    price: "£21.95",
    originalPrice: "£34.95", 
    image: productImage,
    discount: "SAVE 37%"
  },
  {
    id: 4,
    name: "Bio-Collagen Mask",
    subtitle: "Wake Up to Glass Skin",
    price: "£21.95",
    originalPrice: "£34.95",
    image: productImage,
    discount: "SAVE 37%"
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
            <Card key={product.id} className="border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-white group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded text-xs font-bold">
                      {product.discount}
                    </span>
                  )}
                </div>
                
                <div className="p-4 space-y-3 text-center">
                  <div className="text-red-600 text-sm font-medium">
                    {product.subtitle}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl font-bold text-red-600">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  
                   <ProductModal productName={product.name} productImage={product.image}>
                     <Button 
                       className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg"
                       size="sm"
                     >
                       Add to Cart
                     </Button>
                   </ProductModal>
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