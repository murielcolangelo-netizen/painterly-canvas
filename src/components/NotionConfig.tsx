import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Key, Database } from 'lucide-react';

interface NotionConfigProps {
  onConfigSaved: (apiKey: string, databaseId: string) => void;
  isConfigured: boolean;
}

const NotionConfig = ({ onConfigSaved, isConfigured }: NotionConfigProps) => {
  const [apiKey, setApiKey] = useState('');
  const [databaseId, setDatabaseId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!apiKey.trim() || !databaseId.trim()) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    setIsLoading(true);
    try {
      // Sauvegarder dans localStorage
      localStorage.setItem('notion_api_key', apiKey);
      localStorage.setItem('notion_database_id', databaseId);
      
      onConfigSaved(apiKey, databaseId);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde de la configuration');
    } finally {
      setIsLoading(false);
    }
  };

  if (isConfigured) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground">
          Configuration Notion active
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => {
            localStorage.removeItem('notion_api_key');
            localStorage.removeItem('notion_database_id');
            window.location.reload();
          }}
          className="mt-2"
        >
          Reconfigurer
        </Button>
      </div>
    );
  }

  return (
    <Card className="max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          Configuration Notion
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
          <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-blue-800">
            Pour connecter Supabase et sécuriser vos clés, consultez le README-NOTION.md
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="apiKey" className="flex items-center gap-2">
            <Key className="w-4 h-4" />
            Clé API Notion
          </Label>
          <Input
            id="apiKey"
            type="password"
            placeholder="secret_..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="databaseId">ID de la base de données</Label>
          <Input
            id="databaseId"
            placeholder="32 caractères..."
            value={databaseId}
            onChange={(e) => setDatabaseId(e.target.value)}
          />
        </div>
        
        <Button 
          onClick={handleSave} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Sauvegarde...' : 'Sauvegarder la configuration'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotionConfig;