# 📝 Guide d'ajout d'article au Blog

Ce guide détaille les étapes pour ajouter manuellement un nouvel article à votre portfolio.

## 1. Création du fichier
Allez dans le répertoire : `src/content/blog/`
Créez un fichier `.md` avec un nom simple (ex: `intelligence-artificielle-2026.md`).

## 2. Structure de l'en-tête (Frontmatter)
Copiez-collez ce bloc tout en haut du fichier. C'est ce qui définit les métadonnées de l'article.

```markdown
---
title: "Titre de l'article"
description: "Résumé court pour la liste du blog."
pubDate: 2026-02-11
author: "Léonel VODOUNOU"
image: "/images/blog/votre-image.jpg"
tags: ["IA", "Recherche"]
category: "Science"
readTime: 5
draft: false
---
```

## 3. Rédaction du contenu
Écrivez votre contenu en Markdown après la deuxième ligne `---`.

### Astuces Markdown :
- `## Titre de section` : Pour créer des sous-titres.
- `**texte**` : Pour mettre en gras.
- `[texte](url)` : Pour ajouter un lien.
- `![image](/chemin/image.jpg)` : Pour insérer une image.

## 4. Gestion des images
- Placez vos images de blog dans `public/images/blog/`.
- Référencez-les dans le `frontmatter` (ligne `image:`) ou dans le texte.

## 5. Mode Brouillon
Si vous voulez travailler sur un article sans le publier immédiatement, réglez `draft: true`. Il ne sera visible que lorsque vous passerez la valeur à `false`.

---
*Note : Le système de commentaires et la barre d'interactions s'ajouteront automatiquement à chaque nouvel article.*
