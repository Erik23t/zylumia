import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star, Minus, Plus } from "lucide-react";

interface ProductModalProps {
  children: React.ReactNode;
  productName: string;
  productImage: string;
}

const ProductModal = ({ children, productName, productImage }: ProductModalProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);

  const options = [
    { 
      id: 1, 
      quantity: "4 Máscaras", 
      duration: "Suprimento para 1 mês", 
      price: "£ 21,95", 
      originalPrice: "£ 32,95",
      discount: "ECONOMIZE 33%",
      popular: false
    },
    { 
      id: 2, 
      quantity: "8 Máscaras", 
      duration: "Suprimento para 2 meses", 
      price: "£ 30,95", 
      originalPrice: "£ 65,90",
      discount: "ECONOMIZE 53%",
      popular: true
    },
    { 
      id: 3, 
      quantity: "16 Máscaras", 
      duration: "Suprimento para 4 meses", 
      price: "£ 48,95", 
      originalPrice: "£ 131,80",
      discount: "ECONOMIZE 64%",
      popular: false
    },
    { 
      id: 4, 
      quantity: "24 Máscaras", 
      duration: "Suprimento para 6 meses", 
      price: "£ 60,95", 
      originalPrice: "£ 197,70",
      discount: "ECONOMIZE 70%",
      popular: false
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">
            Máscara de colágeno PDRN de salmão
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="space-y-4">
            <img 
              src={productImage} 
              alt={productName}
              className="w-full rounded-lg"
            />
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-semibold">4,6/5</span>
              <span className="text-sm text-muted-foreground">(mais de 5.000 avaliações)</span>
            </div>

            {/* Benefits */}
            <div className="space-y-2 text-sm">
              <p><strong>Brilho instantâneo</strong> após 1 máscara por semana</p>
              <p>🌸 Obtenha <strong>uma pele firme, viçosa e brilhante</strong></p>
              <p>🌿 <strong>Redução de linhas finas</strong> e rugas</p>
              <p>🌱 <strong>Fórmula 100% vegana</strong>, limpa e livre de crueldade</p>
              <p>🛡️ Garantia vitalícia</p>
            </div>

            {/* Alert */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm">
              <p className="font-semibold text-red-600">ATUALIZAÇÃO:</p>
              <p className="text-red-700">Devido à alta demanda durante a nossa Liquidação de Primavera, o estoque é limitado. Oferta válida enquanto durarem os estoques.</p>
            </div>

            {/* Social Proof */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p><strong>Maria S.</strong> - "Minha pele ficou incrível em apenas 5 dias!"</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p><strong>Ana P.</strong> - "Nunca vi resultados tão rápidos!"</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p><strong>Carla R.</strong> - "Produto revolucionário para a pele!"</p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            <h3 className="text-center font-bold text-lg">OFERTA POR TEMPO LIMITADO</h3>
            
            <div className="space-y-3">
              {options.map((option) => (
                <div 
                  key={option.id}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors relative ${
                    selectedOption === option.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  {option.popular && (
                    <div className="absolute -top-2 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded">
                      MAIS POPULARES
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                        <img src={productImage} alt="" className="w-8 h-8 object-cover rounded" />
                      </div>
                      <div>
                        <p className="font-semibold">{option.quantity}</p>
                        <p className="text-sm text-muted-foreground">{option.duration}</p>
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded font-bold">
                          {option.discount}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{option.price}</p>
                      <p className="text-sm text-muted-foreground line-through">{option.originalPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold py-6"
            >
              ADICIONAR AO CARRINHO
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;