import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [hero1, hero2, hero3];

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 13,
    minutes: 28,
    seconds: 45
  });

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

  return (
    <section className="relative min-h-[100vh] bg-gray-50 overflow-hidden">
      {/* Summer Sale Timer - Sticky */}
      <div className="fixed top-0 left-0 right-0 bg-black text-white py-3 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white">Zylumia</span>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="font-semibold text-xs">LIQUIDAÇÃO TERMINA EM</span>
              <div className="flex items-center space-x-2">
                <div className="flex flex-col items-center">
                  <span className="bg-white text-black px-2 py-1 rounded font-bold text-sm">{timeLeft.hours}</span>
                  <span className="text-xs mt-1">Hours</span>
                </div>
                <span className="text-sm">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-white text-black px-2 py-1 rounded font-bold text-sm">{timeLeft.minutes}</span>
                  <span className="text-xs mt-1">Minutes</span>
                </div>
                <span className="text-sm">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-white text-black px-2 py-1 rounded font-bold text-sm">{timeLeft.seconds}</span>
                  <span className="text-xs mt-1">Seconds</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col items-center justify-center space-y-2">
            <span className="font-semibold text-sm">A LIQUIDAÇÃO DE VERÃO TERMINA EM</span>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <span className="bg-white text-black px-3 py-2 rounded font-bold text-lg">{timeLeft.hours}</span>
                <span className="text-xs mt-1">Hours</span>
              </div>
              <span className="text-lg">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white text-black px-3 py-2 rounded font-bold text-lg">{timeLeft.minutes}</span>
                <span className="text-xs mt-1">Minutes</span>
              </div>
              <span className="text-lg">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white text-black px-3 py-2 rounded font-bold text-lg">{timeLeft.seconds}</span>
                <span className="text-xs mt-1">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full pt-20">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="w-full h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`Mulher com pele radiante ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ width: '390px', height: '573px', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div className="relative w-full h-full z-10 flex flex-col items-center justify-center text-center px-4 pt-24">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Logo */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wider">
              Zylumia
            </h1>
          </div>

          {/* Main Text */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Sinta-se bem na sua pele
              <br />
              <span className="text-gray-700">todos os dias</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-sm mx-auto leading-relaxed">
              Cuidados com a pele que simplificam, sem comprometer
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-bold rounded-md"
            >
              COMPRE AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;