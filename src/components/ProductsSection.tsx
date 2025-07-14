import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductModal from "@/components/ProductModal";
import productImage from "@/assets/product-new.jpg";
import product2Image from "@/assets/product-2-new.webp";
import product4Image from "@/assets/product-4-new.webp";

const products = [
  {
    id: 1,
    name: "Wake Up to Glass Skin",
    subtitle: "Bio-Collagen Mask",
    price: "£21.95",
    originalPrice: "£34.95",
    image: productImage,
    discount: "SAVE 37%"
  },
  {
    id: 2,
    name: "Wake Up to Glass Skin",
    subtitle: "Bio-Collagen Mask",
    price: "£21.95", 
    originalPrice: "£34.95",
    image: product2Image,
    discount: "SAVE 37%"
  },
  {
    id: 3,
    name: "Wake Up to Glass Skin",
    subtitle: "Bio-Collagen Mask",
    price: "£21.95",
    originalPrice: "£34.95", 
    image: productImage,
    discount: "SAVE 37%"
  },
  {
    id: 4,
    name: "Wake Up to Glass Skin",
    subtitle: "Bio-Collagen Mask",
    price: "£21.95",
    originalPrice: "£34.95",
    image: product4Image,
    discount: "SAVE 37%"
  },
  {
    id: 5,
    name: "Wake Up to Glass Skin",
    subtitle: "Bio-Collagen Mask",
    price: "£21.95",
    originalPrice: "£34.95",
    image: product2Image,
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-white group w-full">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      {product.discount}
                    </span>
                  )}
                </div>
                
                <div className="p-3 sm:p-4 space-y-2 text-center">
                  <div className="text-red-600 text-xs sm:text-sm font-medium">
                    {product.subtitle}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg sm:text-xl font-bold text-red-600">
                      {product.price}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  
                   <ProductModal productName={product.name} productImage={product.image}>
                     <Button 
                       className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold py-2 sm:py-3 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm"
                       size="sm"
                     >
                       Buy Now
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