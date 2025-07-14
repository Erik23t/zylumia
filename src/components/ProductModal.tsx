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
import productImage from "@/assets/product-new.jpg";
import testimonialUser1 from "@/assets/testimonial-user-1.webp";
import testimonialUser2 from "@/assets/testimonial-user-2.webp";
import testimonialUser3 from "@/assets/testimonial-user-3.webp";
import testimonialUser4 from "@/assets/testimonial-user-4.webp";

interface ProductModalProps {
  children: React.ReactNode;
  productName: string;
  productImage: string;
}

const testimonials = [
  {
    name: "Marina S.",
    comment: "Em apenas 3 semanas de uso, minha pele ficou visivelmente mais luminosa e hidratada. Os produtos são incríveis! A textura é suave e o resultado aparece rapidamente.",
    rating: 5,
    image: testimonialUser1
  },
  {
    name: "Carolina P.", 
    comment: "Nunca pensei que produtos de skincare pudessem fazer tanta diferença. Minha pele está muito mais saudável e radiante. Vale cada centavo investido!",
    rating: 5,
    image: testimonialUser2
  },
  {
    name: "Beatriz M.",
    comment: "Produto excelente! Minha pele nunca esteve tão bonita e suave. Recomendo para todas as minhas amigas! A qualidade é surpreendente.",
    rating: 5,
    image: testimonialUser3
  },
  {
    name: "Ana L.",
    comment: "Resultados visíveis desde a primeira aplicação! Minha pele ficou com um brilho natural incrível. Produto de altíssima qualidade, super recomendo!",
    rating: 5,
    image: testimonialUser4
  }
];

const ProductModal = ({ children, productName, productImage: propProductImage }: ProductModalProps) => {
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

            {/* Testimonials */}
            <div className="space-y-4 pt-4">
              <h4 className="font-bold text-lg text-center text-red-600">Mais de 5000 pessoas estão usando Zylumia</h4>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-lg object-cover mb-2"
                    />
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="font-semibold text-sm mb-2">{testimonial.name}</span>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-xs">{testimonial.comment}</p>
                  </div>
                ))}
              </div>
              
              {/* Video */}
              <div className="mt-6">
                <video 
                  className="w-full rounded-lg max-w-md mx-auto"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  controls
                >
                  <source src="https://storage.googleapis.com/videemio-89i/V%C3%ADdeo%20sem%20t%C3%ADtulo%20%E2%80%90%20Feito%20com%20o%20Clipchamp%20(19).mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
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