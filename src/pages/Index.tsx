import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProductsSection from "@/components/ProductsSection";
import UrgencySection from "@/components/UrgencySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <BeforeAfterSection />
      <ProductsSection />
      <UrgencySection />
      <TestimonialsSection />
      <ResultsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
