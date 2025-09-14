import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, RefreshCw } from "lucide-react";
import { notionService, type NotionPainting } from "@/services/notionService";
import NotionConfig from "./NotionConfig";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";

// Données de fallback si Notion n'est pas configuré
const fallbackPaintings = [
  {
    id: "1",
    title: "Symphonie Bleue",
    width: 100,
    height: 80,
    imageUrl: painting1,
    description: "Une exploration des nuances bleues dans un mouvement expressionniste."
  },
  {
    id: "2", 
    title: "Paysage Intérieur",
    width: 120,
    height: 90,
    imageUrl: painting2,
    description: "Un paysage imaginaire aux couleurs vives et contrastées."
  },
  {
    id: "3",
    title: "Portrait d'Émotions", 
    width: 80,
    height: 60,
    imageUrl: painting3,
    description: "Une représentation figurative jouant sur les contrastes chromatiques."
  },
  {
    id: "4",
    title: "Abstraction Verte",
    width: 150, 
    height: 100,
    imageUrl: painting4,
    description: "Une composition abstraite aux formes organiques et fluides."
  }
];

const Gallery = () => {
  const [paintings, setPaintings] = useState<NotionPainting[]>([]);
  const [selectedPainting, setSelectedPainting] = useState<NotionPainting | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Vérifier si Notion est configuré
  useEffect(() => {
    const apiKey = localStorage.getItem('notion_api_key');
    const databaseId = localStorage.getItem('notion_database_id');
    
    if (apiKey && databaseId) {
      setIsConfigured(true);
      notionService.initialize(apiKey, databaseId);
      loadPaintings();
    } else {
      // Utiliser les données de fallback
      setPaintings(fallbackPaintings);
    }
  }, []);

  const loadPaintings = async (showLoader = true) => {
    if (showLoader) setIsLoading(true);
    setError(null);
    
    try {
      const data = await notionService.fetchPaintings();
      setPaintings(data.length > 0 ? data : fallbackPaintings);
    } catch (err) {
      setError('Erreur lors du chargement des œuvres');
      console.error('Erreur Notion:', err);
      setPaintings(fallbackPaintings);
    } finally {
      if (showLoader) setIsLoading(false);
    }
  };

  const handleConfigSaved = (apiKey: string, databaseId: string) => {
    notionService.initialize(apiKey, databaseId);
    setIsConfigured(true);
    loadPaintings();
  };

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
          
          {isConfigured && (
            <div className="mt-6">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => loadPaintings(false)}
                disabled={isLoading}
                className="gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                Actualiser
              </Button>
            </div>
          )}
        </div>

        <NotionConfig 
          onConfigSaved={handleConfigSaved} 
          isConfigured={isConfigured} 
        />

        {error && (
          <div className="text-center mb-8 p-4 bg-red-50 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {isLoading && (
          <div className="text-center mb-8">
            <Loader2 className="w-8 h-8 animate-spin mx-auto" />
            <p className="text-muted-foreground mt-2">Chargement des œuvres...</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <Dialog key={painting.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img
                        src={painting.imageUrl}
                        alt={painting.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback en cas d'erreur de chargement d'image
                          e.currentTarget.src = painting1;
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-foreground mb-1">
                        {painting.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {painting.width} × {painting.height} cm
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={painting.imageUrl}
                      alt={painting.title}
                      className="w-full h-auto rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = painting1;
                      }}
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {painting.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="font-medium">Dimensions :</span> {painting.width} × {painting.height} cm</p>
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