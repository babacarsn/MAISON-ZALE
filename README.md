# Maison Zale — Refonte Front-End

Site e-commerce en page unique, sans pages supplémentaires.

## Fonctionnalités
- Catalogue avec tous les produits fournis
- Recherche et filtres
- Tri
- Favoris via localStorage
- Panier via localStorage
- Quantités et total
- Formulaire de commande
- Génération automatique du message WhatsApp
- Responsive mobile / tablette / desktop
- Font Awesome
- Préparation optionnelle pour Google Sheets

## Google Sheets
Le site fonctionne immédiatement avec le catalogue local. Pour connecter un Google Sheet publié en CSV, ouvrir `script.js` et renseigner :

`const GOOGLE_SHEETS_CSV_URL = "URL_CSV_DU_GOOGLE_SHEET";`

Colonnes recommandées :
`n,c,p,i,d,b`

Exemple :
- n = nom
- c = catégorie (`femme`, `homme`, `unisexe`)
- p = prix
- i = chemin ou URL de l'image
- d = description courte
- b = badge

## WhatsApp
Le numéro est configuré dans `script.js` :
`const phone = "221710474235";`

Le bouton de commande ouvre WhatsApp avec :
- produits
- quantités
- total
- nom
- téléphone
- ville
- adresse
- mode de livraison
