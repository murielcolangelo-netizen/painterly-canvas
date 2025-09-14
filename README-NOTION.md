# Configuration Notion pour la Galerie

## Variables d'environnement requises

Pour connecter la galerie à votre base de données Notion, vous devez configurer les variables suivantes :

### Option 1 : Avec Supabase (Recommandé)
Si votre projet est connecté à Supabase, ajoutez ces secrets dans les Edge Function Secrets :

- `NOTION_API_KEY` : Votre clé d'API Notion
- `NOTION_DATABASE_ID` : L'ID de votre base de données Notion

### Option 2 : Sans Supabase (Frontend uniquement)
Si vous n'utilisez pas Supabase, les clés seront demandées dans l'interface utilisateur et stockées localement.

## Configuration de votre base de données Notion

Votre base de données Notion doit contenir les colonnes suivantes :

| Nom de la colonne | Type | Description |
|-------------------|------|-------------|
| `Nom` | Titre | Le nom de l'œuvre |
| `largeur` | Nombre | Largeur en cm |
| `hauteur` | Nombre | Hauteur en cm |
| `description` | Texte | Description de l'œuvre |
| `photo` | Fichiers & médias | Image de l'œuvre |

## Obtenir votre clé API Notion

1. Allez sur [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Cliquez sur "New integration"
3. Donnez un nom à votre intégration
4. Copiez le "Internal Integration Token" - c'est votre `NOTION_API_KEY`

## Obtenir l'ID de votre base de données

1. Ouvrez votre base de données Notion dans un navigateur
2. L'URL ressemble à : `https://www.notion.so/votre-workspace/DATABASE_ID?v=...`
3. Copiez la partie `DATABASE_ID` (32 caractères entre les slashes)

## Partager votre base de données avec l'intégration

1. Dans votre base de données Notion, cliquez sur "Share"
2. Invitez votre intégration en tapant son nom
3. Donnez-lui les permissions de lecture

## Structure de données exemple

```
Nom: "Le Triomphe de Pan"
largeur: 120
hauteur: 100  
description: "toile tendue sur chassis techniques mixtes fusain peinture à l'huile"
photo: [fichier image uploadé dans Notion]
```