# NANI MULTISERVICES

Site vitrine statique de NANI MULTISERVICES, entreprise de nettoyage courant des bâtiments
basée à Clichy (92).

## Stack

HTML, CSS et JavaScript natifs. Aucune dépendance, aucune étape de build, aucune requête
vers un service externe hormis la carte OpenStreetMap du bloc « Zone d'intervention ».

```
index.html                    page unique, sections ancrées, JSON-LD ProfessionalService
assets/css/styles.css         variables de thème, layout, mode sombre, responsive
assets/js/main.js             menu mobile, apparition au défilement, année du footer
assets/img/logo.svg           logo horizontal couleur (fond clair)
assets/img/logo-mono-blanc.svg logo monochrome blanc (fond sombre, footer)
assets/img/favicon.svg        monogramme seul, utilisé comme favicon
robots.txt / sitemap.xml      référencement
```

Le sprite d'icônes est inline dans `index.html` : un `<use href="fichier.svg#id">` externe
n'est pas supporté par tous les navigateurs et échoue en `file://`.

## Développement local

```sh
python3 -m http.server 8000
# puis http://localhost:8000
```

## Deploiement

Copier le contenu du dépôt à la racine de l'hébergement. Fonctionne tel quel sur
GitHub Pages, Netlify, Cloudflare Pages, ou tout hébergement mutualisé.

## À compléter avant mise en ligne

- Numéro de téléphone : placeholder `00 00 00 00 00` dans la section Contact de `index.html`
  (recherche `TODO`), à remplacer dans le libellé et dans le `href="tel:"`.
- Nom de domaine : `https://nani-multiservices.fr/` est utilisé dans la balise canonical,
  les metas Open Graph, le JSON-LD, `robots.txt` et `sitemap.xml`. Remplacer par le domaine réel.

## Sources des données légales

Toutes les informations du footer et du JSON-LD proviennent de l'Annuaire des Entreprises
(data.gouv.fr), SIREN 807837430 :
https://annuaire-entreprises.data.gouv.fr/entreprise/nani-multiservices-807837430
