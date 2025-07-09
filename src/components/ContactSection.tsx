import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Formulário de contato
          </h2>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground font-medium">
                Nome
              </Label>
              <Input
                id="nome"
                type="text"
                placeholder="Seu nome"
                className="border-border focus:ring-primary focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                E-mail*
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="border-border focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="assunto" className="text-foreground font-medium">
              Assunto da Mensagem
            </Label>
            <Input
              id="assunto"
              type="text"
              placeholder="Assunto"
              className="border-border focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem" className="text-foreground font-medium">
              Mensagem*
            </Label>
            <Textarea
              id="mensagem"
              placeholder="Sua mensagem..."
              rows={6}
              className="border-border focus:ring-primary focus:border-primary resize-none"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg"
          >
            ENVIAR
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;