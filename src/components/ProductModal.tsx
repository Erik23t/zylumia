import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import productImage from "@/assets/product-new.jpg";
import testimonialUser1 from "@/assets/testimonial-user-1.webp";
import testimonialUser2 from "@/assets/testimonial-user-2.webp";
import testimonialUser3 from "@/assets/testimonial-user-3.webp";
import testimonialUser4 from "@/assets/testimonial-user-4.webp";
import carousel1 from "@/assets/product-carousel-1.webp";
import carousel2 from "@/assets/product-carousel-2.webp";
import carousel3 from "@/assets/product-carousel-3.webp";
import carousel4 from "@/assets/product-carousel-4.webp";

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
  const [selectedOption, setSelectedOption] = useState(0);
  const [currentProductImage, setCurrentProductImage] = useState(productImage);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 13,
    minutes: 28,
    seconds: 45
  });

  const carouselImages = [carousel1, carousel2, carousel3, carousel4];

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % carouselImages.length;
    setCurrentImageIndex(nextIndex);
    setCurrentProductImage(carouselImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    setCurrentImageIndex(prevIndex);
    setCurrentProductImage(carouselImages[prevIndex]);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
    setCurrentProductImage(carouselImages[index]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      <DialogContent className="max-w-sm md:max-w-4xl max-h-[95vh] overflow-y-auto p-0">
        {/* Timer - Fixed position at the top */}
        <div className="bg-black text-white py-2 md:py-3 rounded-t-lg sticky top-0 z-10">
          <div className="flex items-center justify-between px-2 md:px-4">
            <span className="font-bold text-white text-sm md:text-base">Zylumia</span>
            <div className="flex items-center space-x-1 md:space-x-2 text-xs">
              <span className="font-semibold hidden md:inline">OFERTA TERMINA EM</span>
              <span className="font-semibold md:hidden">TERMINA EM</span>
              <div className="flex space-x-1">
                <span className="bg-white text-black px-1 py-1 rounded text-xs font-bold">{timeLeft.days}</span>
                <span className="text-xs">:</span>
                <span className="bg-white text-black px-1 py-1 rounded text-xs font-bold">{timeLeft.hours}</span>
                <span className="text-xs">:</span>
                <span className="bg-white text-black px-1 py-1 rounded text-xs font-bold">{timeLeft.minutes}</span>
                <span className="text-xs">:</span>
                <span className="bg-white text-black px-1 py-1 rounded text-xs font-bold">{timeLeft.seconds}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 md:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4 text-center">
              Máscara Nutritiva com Colágeno Ativo
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Product Image */}
            <div className="space-y-2 md:space-y-4">
              <div className="relative max-w-[340px] mx-auto md:max-w-none">
                <img 
                  src={currentProductImage} 
                  alt={productName}
                  className="w-[340px] h-48 md:h-auto object-cover rounded-lg mx-auto"
                />
                
                {/* Navigation icons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-md transition-colors"
                >
                  <ChevronLeft size={16} className="md:w-5 md:h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-md transition-colors"
                >
                  <ChevronRight size={16} className="md:w-5 md:h-5" />
                </button>
              </div>
              
              {/* Product Carousel Images */}
              <div className="grid grid-cols-4 gap-1 md:gap-2">
                {carouselImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Produto ${index + 1}`}
                    className={`w-full h-12 md:h-20 object-cover rounded-lg cursor-pointer border-2 transition-colors ${
                      currentImageIndex === index ? 'border-primary' : 'border-transparent hover:border-primary'
                    }`}
                    onClick={() => selectImage(index)}
                  />
                ))}
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 md:gap-2">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={12} className="md:w-4 md:h-4" fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs md:text-sm font-semibold">4,6/5</span>
                <span className="text-xs md:text-sm text-muted-foreground">(mais de 5.000 avaliações)</span>
              </div>

              {/* Benefits */}
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <p><strong>Brilho instantâneo</strong> após 1 máscara por semana</p>
                <p>🌸 Obtenha <strong>uma pele firme, viçosa e brilhante</strong></p>
                <p>🌿 <strong>Redução de linhas finas</strong> e rugas</p>
                <p>🌱 <strong>Fórmula 100% vegana</strong>, limpa e livre de crueldade</p>
                <p>🛡️ Garantia vitalícia</p>
              </div>

              {/* Alert */}
              <div className="bg-red-50 border-l-4 border-red-500 p-2 md:p-4 text-xs md:text-sm">
                <p className="font-semibold text-red-600">ATUALIZAÇÃO:</p>
                <p className="text-red-700">Devido à alta demanda durante a nossa Liquidação de Primavera, o estoque é limitado. Oferta válida enquanto durarem os estoques.</p>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-center font-bold text-sm md:text-lg">OFERTA POR TEMPO LIMITADO</h3>
              
              <div className="space-y-2 md:space-y-3">
                {options.map((option) => (
                  <div 
                    key={option.id}
                    className={`border-2 rounded-lg p-3 md:p-4 cursor-pointer transition-colors relative ${
                      selectedOption === option.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    {option.popular && (
                      <div className="absolute -top-2 right-2 md:right-4 bg-primary text-primary-foreground px-2 md:px-3 py-1 text-xs font-bold rounded">
                        MAIS POPULARES
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded flex items-center justify-center">
                          <img src={productImage} alt="" className="w-8 h-8 md:w-8 md:h-8 object-cover rounded" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm md:text-base">{option.quantity}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{option.duration}</p>
                          <span className="text-xs bg-red-600 text-white px-2 py-1 rounded font-bold">
                            {option.discount}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg md:text-xl font-bold">{option.price}</p>
                        <p className="text-xs md:text-sm text-muted-foreground line-through">{option.originalPrice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buy Now Button - Always visible but disabled if no option selected */}
              <Button 
                size="lg" 
                className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-lg font-bold py-3 md:py-6 transition-opacity ${
                  selectedOption === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={selectedOption === 0}
              >
                COMPRAR AGORA
              </Button>
            </div>
          </div>

          {/* Bottom Section - Full width */}
          <div className="mt-4 md:mt-8 space-y-3 md:space-y-6">
            <h4 className="font-bold text-sm md:text-lg text-center text-red-600">Mais de 5000 pessoas estão usando Zylumia</h4>
            
            <h5 className="font-bold text-center text-sm md:text-base">Máscara de colágeno PDRN de salmão</h5>

            {/* Testimonials Carousel */}
            <div className="space-y-2 md:space-y-4 pt-2 md:pt-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="flex flex-col items-center text-center p-2 md:p-4 bg-gray-50 rounded-lg">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover mb-2"
                        />
                        <div className="flex text-yellow-400 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={12} className="md:w-4 md:h-4" fill="currentColor" />
                          ))}
                        </div>
                        <span className="font-semibold text-xs md:text-sm mb-2">{testimonial.name}</span>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xs">{testimonial.comment}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:left-2" />
                <CarouselNext className="right-0 md:right-2" />
              </Carousel>
            </div>
              
            {/* Video */}
            <div className="mt-3 md:mt-6">
              <video 
                className="w-full rounded-lg max-w-xs md:max-w-md mx-auto"
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

            {/* Discover Section */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 md:p-6 mt-3 md:mt-6">
              <h3 className="text-center text-xl md:text-2xl font-bold mb-4 text-gray-800">
                Descubra sua Melhor Pele ✨
              </h3>
              <p className="text-center text-sm md:text-base text-gray-600 leading-relaxed max-w-lg mx-auto">
                Do opaco ao radiante com Zylumia! Colágeno que nutre, firma e ilumina de dentro para fora. 
                <span className="font-semibold"> Resultados visíveis, sensação real.</span> 💖
              </p>
            </div>

            {/* Extended FAQ Section */}
            <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-4 md:p-6 mt-3 md:mt-6">
              <h3 className="text-center text-xl md:text-2xl font-bold mb-4 text-gray-800">
                ❓ Dúvidas? Nós temos as respostas!
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="como-usar">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    📌 Como devo usar a máscara?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <div className="space-y-2">
                      <p><strong>🕯️ Rotina Noturna:</strong> Limpe e tonifique o rosto, garantindo que a pele esteja livre de oleosidade e cremes.</p>
                      <p><strong>📌 Aplicação:</strong> Comece com a parte inferior da máscara e depois aplique a parte superior. Pressione suavemente para garantir aderência.</p>
                      <p><strong>Dica:</strong> Incline a cabeça para trás para facilitar o encaixe.</p>
                      <p><strong>⏳ Duração:</strong></p>
                      <p>• <strong>Brilho Rápido:</strong> 1 a 2 horas</p>
                      <p>• <strong>Resultado Máximo:</strong> Deixe agir durante a noite (quando estiver completamente seca para evitar que se desloque).</p>
                      <p><strong>💖 O Toque Final:</strong> Remova delicadamente a máscara e massageie o restante do sérum na pele.</p>
                      <p><strong>Dica Pro:</strong> Aproveite o excesso de sérum no pescoço e colo.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="quantas-mascaras">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    🎁 Quantas máscaras vêm no pacote?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <p>Cada pacote contém 4 máscaras de uso único.</p>
                    <p>Recomendamos usar 2 máscaras por semana no primeiro mês para revitalizar sua pele. Após esse período, 1 máscara por semana ajuda a manter o brilho e a saúde da pele.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="frequencia">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    🔁 Com que frequência devo usar?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <p>Use de 1 a 2 vezes por semana para melhores resultados. O uso regular potencializa os efeitos de firmeza, hidratação e luminosidade.</p>
                    <p>⏲️ Deixe a máscara por no mínimo 60 minutos — idealmente de 3 a 4 horas. Ela vai ficando transparente conforme os nutrientes são absorvidos.</p>
                    <p>🌙 <strong>Melhor opção:</strong> Utilize como máscara noturna. Ela não deixa resíduos no travesseiro.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="outros-produtos">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    🧴 Posso usar com outros produtos de skincare?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <p>Sim! A máscara bio-colágena da Nifora pode ser integrada à sua rotina atual.</p>
                    <p><strong>Recomendação:</strong> Sempre teste novos produtos em uma pequena área antes de aplicar no rosto todo.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pele-sensivel">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    👶 É indicada para pele sensível?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <p>Com certeza. A máscara foi formulada para ser suave, sem retirar a hidratação natural da pele. Ideal para todos os tipos de pele.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="lavar-rosto">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    🧼 Preciso lavar o rosto após o uso?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <p>Não é necessário. O sérum restante pode ser massageado suavemente na pele para intensificar a hidratação.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ingredientes">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    🔬 Quais ingredientes a máscara contém?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <p><strong>Ingredientes principais:</strong></p>
                    <p>Água, glicerina, propilenoglicol, betaína, carragenina, poliuretano-35, glucomanano, 1,2-hexanodiol</p>
                    <p>Ácido hialurônico (em diferentes formas), colágeno hidrolisado, vitamina E (acetato de tocoferol), vitamina B3 (niacinamida), pantenol</p>
                    <p>Extratos naturais: alcaçuz, cogumelo Tremella, Centella Asiática</p>
                    <p>Peptídeos, ceramidas, cobre tripeptídeo, beta-glucano, entre outros agentes calmantes e hidratantes</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="garantia">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    💸 Garantia de satisfação?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <p>Sim! Oferecemos uma garantia de 100% de reembolso.</p>
                    <p>Se você não perceber melhora na saúde da sua pele, devolvemos o valor pago.</p>
                    <p>Aproveite nossa garantia de 60 dias sem riscos para testar com tranquilidade.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entrega">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    📦 Quais são os prazos de entrega?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-600">
                    <p><strong>🛠️ Tempo de Processamento:</strong> Após o pedido, levamos 1 dia útil para preparar e enviar sua encomenda.</p>
                    <p><strong>🚚 Envio:</strong> Após a postagem, a entrega geralmente leva de 3 a 5 dias úteis, dependendo da sua localização.</p>
                    <p><strong>📨 Rastreamento:</strong> Assim que seu pedido for enviado, você receberá um e-mail com o código de rastreio para acompanhar a entrega em tempo real.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;