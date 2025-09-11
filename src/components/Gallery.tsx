import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";

const paintings = [
  {
    id: 1,
    title: "Symphonie Bleue",
    year: "2023",
    technique: "Huile sur toile",
    dimensions: "100 x 80 cm",
    image: painting1,
    description: "Une exploration des nuances bleues dans un mouvement expressionniste."
  },
  {
    id: 2,
    title: "Paysage Intérieur",
    year: "2023",
    technique: "Acrylique sur toile",
    dimensions: "120 x 90 cm",
    image: painting2,
    description: "Un paysage imaginaire aux couleurs vives et contrastées."
  },
  {
    id: 3,
    title: "Portrait d'Émotions",
    year: "2022",
    technique: "Huile sur toile",
    dimensions: "80 x 60 cm",
    image: painting3,
    description: "Une représentation figurative jouant sur les contrastes chromatiques."
  },
  {
    id: 4,
    title: "Abstraction Verte",
    year: "2022",
    technique: "Technique mixte",
    dimensions: "150 x 100 cm",
    image: painting4,
    description: "Une composition abstraite aux formes organiques et fluides."
  }
];

const Gallery = () => {
  const [selectedPainting, setSelectedPainting] = useState<typeof paintings[0] | null>(null);

  return (
    <section id="galerie" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galerie d'œuvres
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes créations récentes, 
            reflets de mon exploration artistique actuelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <Dialog key={painting.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img
                        src={painting.image}
                        alt={painting.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-foreground mb-1">
                        {painting.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {painting.year}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {painting.technique} - {painting.dimensions}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={painting.image}
                      alt={painting.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {painting.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="font-medium">Année :</span> {painting.year}</p>
                      <p><span className="font-medium">Technique :</span> {painting.technique}</p>
                      <p><span className="font-medium">Dimensions :</span> {painting.dimensions}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {painting.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;