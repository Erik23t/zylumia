import { useState, useEffect } from "react";
import { AlertTriangle, Clock, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  const [stockCount, setStockCount] = useState(97);
  const [viewersCount, setViewersCount] = useState(234);

  useEffect(() => {
    // Simular mudanças no estoque e visualizadores
    const interval = setInterval(() => {
      setStockCount(prev => Math.max(85, prev - Math.floor(Math.random() * 2)));
      setViewersCount(prev => 200 + Math.floor(Math.random() * 50));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Urgency Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-500 text-white rounded-full px-4 py-2 mb-4 animate-pulse">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">ATENÇÃO - ESTOQUE LIMITADO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Não perca esta <span className="text-red-500">oportunidade única!</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossos produtos estão com estoque limitado devido à alta demanda
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-red-200 bg-white/80 backdrop-blur">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-red-500 mb-2">{stockCount}</div>
              <p className="text-sm text-muted-foreground">Unidades restantes</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(stockCount / 150) * 100}%` }}
                ></div>
              </div>
            </Card>

            <Card className="p-6 text-center border-orange-200 bg-white/80 backdrop-blur">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500 mb-2">{viewersCount}</div>
              <p className="text-sm text-muted-foreground">Pessoas visualizando agora</p>
              <div className="flex justify-center mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 ml-1">Online</span>
              </div>
            </Card>

            <Card className="p-6 text-center border-yellow-200 bg-white/80 backdrop-blur">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-yellow-500 mb-2">72h</div>
              <p className="text-sm text-muted-foreground">Para próxima reposição</p>
              <p className="text-xs text-red-500 mt-1 font-medium">Sem previsão de desconto</p>
            </Card>
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🔥 DESCONTO ESPECIAL - PRIMEIRA COMPRA
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
              <div className="text-center">
                <span className="text-sm opacity-80">De:</span>
                <div className="text-2xl line-through opacity-70">R$ 297</div>
              </div>
              <div className="text-center">
                <span className="text-sm opacity-80">Por apenas:</span>
                <div className="text-4xl font-bold">R$ 147</div>
              </div>
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                50% OFF
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
              <div className="flex items-center justify-center">
                <span className="mr-2">✅</span>
                Frete GRÁTIS para todo Brasil
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">✅</span>
                Garantia de 30 dias
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">✅</span>
                Suporte 24/7
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-red-500 hover:bg-gray-100 font-bold text-lg px-8 py-4 animate-pulse"
            >
              QUERO TRANSFORMAR MINHA PELE AGORA
            </Button>
            
            <p className="text-xs mt-4 opacity-80">
              ⚠️ Esta oferta é válida apenas para primeiros clientes e pode encerrar a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;