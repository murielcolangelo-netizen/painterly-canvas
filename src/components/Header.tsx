import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Marie Dubois</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("presentation")}
              className="text-muted-foreground hover:text-foreground"
            >
              Présentation
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("galerie")}
              className="text-muted-foreground hover:text-foreground"
            >
              Œuvres
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("expositions")}
              className="text-muted-foreground hover:text-foreground"
            >
              Expositions
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 border-t border-border pt-4">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("presentation")}
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              Présentation
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("galerie")}
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              Œuvres
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("expositions")}
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              Expositions
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("contact")}
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;