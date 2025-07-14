import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchContent = [
    { type: "product", title: "Máscara de colágeno PDRN de salmão", content: "Bio-Collagen Real Deep Mask" },
    { type: "product", title: "Hidratante corporal", content: "Cuidados com a pele corporal" },
    { type: "product", title: "Hidratante rosto", content: "Cuidados faciais diários" },
    { type: "product", title: "Protetor solar", content: "Proteção UV para pele" },
    { type: "service", title: "Sobre nós", content: "História e missão da Zylumia" },
    { type: "service", title: "Política de Privacidade", content: "Como protegemos seus dados" },
    { type: "service", title: "Termos e Condições", content: "Regras de uso do site" },
    { type: "service", title: "Política de envio", content: "Informações sobre entrega" },
    { type: "service", title: "Reembolsos", content: "Política de devolução" },
    { type: "service", title: "Perguntas frequentes", content: "Dúvidas comuns" }
  ];

  const filteredResults = searchContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setShowSearchResults(value.length > 0);
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Zylumia</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Hidratante corporal
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Hidratante rosto
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Protetor solar
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Sobre nós
            </a>
          </nav>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar produtos, serviços..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
            
            {/* Search Results */}
            {showSearchResults && filteredResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredResults.map((result, index) => (
                  <div 
                    key={index}
                    className="p-3 hover:bg-muted cursor-pointer border-b border-border last:border-b-0"
                    onClick={() => {
                      setSearchQuery("");
                      setShowSearchResults(false);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded ${
                        result.type === 'product' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary-foreground'
                      }`}>
                        {result.type === 'product' ? 'Produto' : 'Serviço'}
                      </span>
                      <span className="font-medium">{result.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{result.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;