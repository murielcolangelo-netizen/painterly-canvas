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
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Expositions actuelles et à venir
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentExhibitions.map((exhibition, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-foreground">
                      {exhibition.title}
                    </CardTitle>
                    <Badge 
                      variant={exhibition.status === 'current' ? 'default' : 'secondary'}
                      className="shrink-0"
                    >
                      {exhibition.status === 'current' ? 'En cours' : 'À venir'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} />
                    {exhibition.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays size={16} />
                    {exhibition.dates}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {exhibition.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Exhibitions */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Expositions passées
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastExhibitions.map((exhibition, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    {exhibition.title}
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exhibition.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays size={14} />
                      {exhibition.dates}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs mt-3">
                    {exhibition.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;