import { Card, CardContent } from "@/components/ui/card";
import artistPhoto from "@/assets/artist-photo.jpg";

const Presentation = () => {
  return (
    <section id="presentation" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              À propos de l'artiste
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Diplômée des Beaux-Arts de Paris en 2010, je développe depuis plus de 
                dix ans un univers artistique personnel mêlant abstraction et figuration.
              </p>
              <p>
                Mon travail explore les tensions entre couleur et forme, mouvement et 
                statisme, dans une recherche constante d'équilibre et d'harmonie visuelle.
              </p>
              <p>
                Mes œuvres ont été exposées dans de nombreuses galeries en France et 
                à l'international, et font partie de collections privées et publiques.
              </p>
            </div>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Formation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>2010 - Diplôme National Supérieur d'Expression Plastique, Beaux-Arts de Paris</li>
                  <li>2008 - Master en Arts Plastiques, Université Paris 8</li>
                  <li>2006 - Licence Arts Plastiques, Université Paris 1 Panthéon-Sorbonne</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={artistPhoto} 
              alt="Muriel Colangelo dans son atelier" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;