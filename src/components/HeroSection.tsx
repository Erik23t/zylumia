import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-new.webp";
import { useState, useEffect } from "react";

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
      {/* Summer Sale Timer */}
      <div className="absolute top-0 left-0 right-0 bg-black text-white py-2 z-20">
        <div className="container mx-auto px-4 flex items-center justify-center space-x-4 text-sm">
          <span className="font-semibold">SUMMER SALE ENDS IN</span>
          <div className="flex space-x-2">
            <span className="bg-white text-black px-2 py-1 rounded font-bold">{timeLeft.days}</span>
            <span>:</span>
            <span className="bg-white text-black px-2 py-1 rounded font-bold">{timeLeft.hours}</span>
            <span>:</span>
            <span className="bg-white text-black px-2 py-1 rounded font-bold">{timeLeft.minutes}</span>
            <span>:</span>
            <span className="bg-white text-black px-2 py-1 rounded font-bold">{timeLeft.seconds}</span>
          </div>
          <button className="ml-4 text-white hover:opacity-80">×</button>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pt-12">
        <img
          src={heroImage}
          alt="Mulher com pele radiante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30" />
      </div>
      
      <div className="relative w-full h-full z-10 flex flex-col items-center justify-center text-center px-4 pt-16">
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