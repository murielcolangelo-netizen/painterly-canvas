import { Button } from "@/components/ui/button";
import painting1 from "@/assets/painting-1.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Muriel Colangelo
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Artiste peintre contemporaine, je explore les couleurs et les formes 
              à travers une approche expressionniste moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("galerie")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Découvrir mes œuvres
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("contact")}
                className="border-border text-foreground hover:bg-accent"
              >
                Me contacter
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={painting1} 
              alt="Œuvre de Muriel Colangelo" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;