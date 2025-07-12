import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] bg-background overflow-hidden">
      {/* Background Model Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroModel}
          alt="Modelo com pele radiante"
          className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      </div>
      
      <div className="relative w-full h-full z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
              ZYLUMIA
            </h1>
          </div>

          {/* Main Text */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Sinta-se bem na sua pele
              <br />
              <span className="text-white/90">todos os dias</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-md mx-auto leading-relaxed">
              Cuidados com a pele que simplificam, sem comprometer
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background px-12 py-4 text-lg font-bold rounded-none"
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