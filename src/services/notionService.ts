import { Client } from '@notionhq/client';

export interface NotionPainting {
  id: string;
  title: string;
  width: number;
  height: number;
  description: string;
  imageUrl: string;
}

class NotionService {
  private client: Client | null = null;
  private databaseId: string = '';

  initialize(apiKey: string, databaseId: string) {
    this.client = new Client({
      auth: apiKey,
    });
    this.databaseId = databaseId;
  }

  async fetchPaintings(): Promise<NotionPainting[]> {
    if (!this.client || !this.databaseId) {
      throw new Error('Notion client not initialized');
    }

    try {
      // Using the correct API method
      const response = await (this.client as any).databases.query({
        database_id: this.databaseId,
        sorts: [
          {
            property: 'Nom',
            direction: 'ascending',
          },
        ],
      });

      return response.results.map((page: any) => {
        const properties = page.properties;
        
        // Extraction du titre
        const title = properties.Nom?.title?.[0]?.plain_text || 'Sans titre';
        
        // Extraction des dimensions
        const width = properties.largeur?.number || 0;
        const height = properties.hauteur?.number || 0;
        
        // Extraction de la description
        const description = properties.description?.rich_text?.[0]?.plain_text || '';
        
        // Extraction de l'image
        let imageUrl = '';
        if (properties.photo?.files?.[0]) {
          const file = properties.photo.files[0];
          imageUrl = file.file?.url || file.external?.url || '';
        }

        return {
          id: page.id,
          title,
          width,
          height,
          description,
          imageUrl,
        };
      }).filter(painting => painting.title !== 'Sans titre' && painting.title !== 'vide' && painting.width > 0);
    } catch (error) {
      console.error('Erreur lors de la récupération des données Notion:', error);
      throw error;
    }
  }
}

export const notionService = new NotionService();