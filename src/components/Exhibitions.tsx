import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const currentExhibitions = [
  {
    title: "Couleurs en Mouvement",
    location: "Galerie Contemporaine, Paris",
    dates: "15 Mars - 30 Avril 2024",
    type: "Exposition collective",
    status: "current"
  },
  {
    title: "Rétrospective 2024",
    location: "Centre d'Art Moderne, Lyon",
    dates: "10 Mai - 15 Juin 2024",
    type: "Exposition solo",
    status: "upcoming"
  }
];

const pastExhibitions = [
  {
    title: "Abstractions Contemporaines",
    location: "Musée des Arts, Marseille",
    dates: "Septembre 2023",
    type: "Exposition collective"
  },
  {
    title: "Visions Colorées",
    location: "Galerie du Marais, Paris",
    dates: "Juin 2023",
    type: "Exposition solo"
  },
  {
    title: "Jeune Création Française",
    location: "Palais des Arts, Toulouse",
    dates: "Mars 2023",
    type: "Exposition collective"
  },
  {
    title: "Peintures Nouvelles",
    location: "Espace Art Contemporain, Nantes",
    dates: "Décembre 2022",
    type: "Exposition collective"
  }
];

const Exhibitions = () => {
  return (
    <section id="expositions" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expositions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Retrouvez mes œuvres dans les expositions actuelles et découvrez 
            mon parcours à travers les expositions passées.
          </p>
        </div>

        {/* Current and Upcoming Exhibitions */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Expositions actuelles et à venir
          </h3>
          <div className="space-y-8">
            {currentExhibitions.map((exhibition, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-xl font-semibold text-foreground">
                      {exhibition.title}
                    </h4>
                    <Badge 
                      variant={exhibition.status === 'current' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {exhibition.status === 'current' ? 'En cours' : 'À venir'}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {exhibition.dates} • {exhibition.location}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {exhibition.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Exhibitions */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Expositions passées
          </h3>
          <div className="space-y-6">
            {pastExhibitions.map((exhibition, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-border/50 last:border-b-0">
                <div className="space-y-1">
                  <h4 className="text-lg font-medium text-foreground">
                    {exhibition.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {exhibition.location}
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                  <span className="text-sm text-muted-foreground">
                    {exhibition.dates}
                  </span>
                  <span className="text-xs text-muted-foreground italic">
                    {exhibition.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;