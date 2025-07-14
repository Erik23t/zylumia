import { useProducts } from "@/contexts/ProductContext";
import ProductModal from "@/components/ProductModal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Shop = () => {
  const { products } = useProducts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Nossa Loja</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductModal key={product.id} productName={product.name} productImage={product.image}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    {product.popular && <Badge variant="secondary">Popular</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  {product.discount && (
                    <Badge variant="destructive" className="text-xs">{product.discount}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </ProductModal>
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum produto disponível no momento.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;