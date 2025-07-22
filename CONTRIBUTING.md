# 🤝 Contribuer à SmartDigitalPro

Merci de votre intérêt pour contribuer à SmartDigitalPro ! Ce guide vous aidera à démarrer.

## 📋 Types de Contributions

### �� Rapporter des Bugs
- Utilisez les GitHub Issues
- Décrivez le problème clairement
- Incluez les étapes de reproduction
- Mentionnez votre navigateur/OS

### ✨ Proposer des Fonctionnalités
- Ouvrez une issue avec le label "enhancement"
- Décrivez la fonctionnalité souhaitée
- Expliquez pourquoi elle serait utile
- Proposez une implémentation si possible

### 🔧 Améliorer le Code
- Fork le repository
- Créez une branche feature
- Implémentez vos changements
- Testez sur différents navigateurs
- Soumettez une Pull Request

## 🛠️ Setup Développement

### Prérequis
- Git
- Navigateur moderne
- Éditeur de code (VS Code recommandé)

### Installation
```bash
# Cloner le repo
git clone https://github.com/votre-username/smartdigitalpro-marketplace.git
cd smartdigitalpro-marketplace

# Lancer le serveur de développement
python -m http.server 8000
# ou
npx serve .

# Ouvrir http://localhost:8000
```

### Structure du Projet
```
smartdigitalpro-marketplace/
├── index.html              # Page principale
├── assets/
│   ├── css/
│   │   └── styles.css      # Styles CSS
│   ├── js/
│   │   └── app.js          # JavaScript principal
│   └── images/             # Images du projet
├── docs/                   # Documentation
├── README.md               # Documentation principale
├── FEATURES.md             # Liste des fonctionnalités
├── DEPLOYMENT.md           # Guide de déploiement
└── package.json            # Configuration npm
```

## 📝 Standards de Code

### HTML
- HTML5 sémantique
- Indentation 4 espaces
- Attributs en lowercase
- Alt text pour toutes les images

### CSS
- Variables CSS pour les couleurs
- Mobile-first responsive
- BEM methodology recommandée
- Commentaires pour sections importantes

### JavaScript
- ES6+ moderne
- Variables const/let
- Fonctions fléchées
- Commentaires JSDoc

### Conventions de Nommage
- Variables: camelCase
- CSS classes: kebab-case
- Fichiers: lowercase avec tirets
- Fonctions: verbes descriptifs

## 🔄 Processus de Contribution

### 1. Fork & Branch
```bash
# Fork sur GitHub puis cloner
git clone https://github.com/VOTRE-USERNAME/smartdigitalpro-marketplace.git
cd smartdigitalpro-marketplace

# Créer une branche feature
git checkout -b feature/nom-de-la-fonctionnalite
```

### 2. Développement
- Implémentez vos changements
- Testez sur Chrome, Firefox, Safari
- Vérifiez la responsivité mobile
- Validez le HTML/CSS

### 3. Tests
- Testez toutes les fonctionnalités
- Vérifiez les interactions utilisateur
- Testez sur différentes tailles d'écran
- Validez l'accessibilité

### 4. Commit
```bash
# Messages de commit descriptifs
git add .
git commit -m "feat: ajouter système de notifications push"

# Types de commits:
# feat: nouvelle fonctionnalité
# fix: correction de bug
# docs: documentation
# style: formatage, point-virgules
# refactor: refactoring du code
# test: ajout/modification tests
# chore: maintenance
```

### 5. Pull Request
- Push vers votre fork
- Ouvrez une PR vers main
- Décrivez vos changements
- Liez les issues concernées
- Attendez la review

## 🧪 Tests Requis

### Tests Manuels
- [ ] Navigation entre sections
- [ ] Formulaires (inscription, publication)
- [ ] Upload d'images
- [ ] Interactions (likes, commentaires)
- [ ] Messagerie
- [ ] Responsive mobile/tablette

### Tests Navigateurs
- [ ] Chrome (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (si disponible)
- [ ] Edge (si disponible)
- [ ] Mobile Safari/Chrome

## 🎨 Guidelines UI/UX

### Design Principles
- **Simplicité**: Interface claire et intuitive
- **Cohérence**: Styles et interactions uniformes
- **Performance**: Chargement rapide
- **Accessibilité**: Utilisable par tous

### Couleurs
```css
--primary: #10b981;      /* Vert principal */
--secondary: #3b82f6;    /* Bleu secondaire */
--danger: #ef4444;       /* Rouge erreur */
--warning: #f59e0b;      /* Orange avertissement */
```

### Typographie
- Police: Inter (Google Fonts)
- Tailles cohérentes
- Hiérarchie claire
- Lisibilité optimisée

## 📚 Ressources Utiles

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Outils
- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Validation
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [WAVE Accessibility](https://wave.webaim.org/)

## 🏷️ Labels Issues

- `bug`: Problème à corriger
- `enhancement`: Nouvelle fonctionnalité
- `documentation`: Amélioration docs
- `good first issue`: Bon pour débuter
- `help wanted`: Aide appréciée
- `question`: Question/discussion

## 💬 Communication

### Canaux
- **Issues**: Bugs et fonctionnalités
- **Discussions**: Questions générales
- **Email**: contact@smartdigitalpro.mg

### Code of Conduct
- Respectueux et inclusif
- Constructif dans les commentaires
- Patient avec les nouveaux contributeurs
- Professionnel en toute circonstance

## 🎉 Reconnaissance

Tous les contributeurs seront:
- Mentionnés dans les releases
- Ajoutés au fichier CONTRIBUTORS.md
- Remerciés sur les réseaux sociaux
- Invités aux événements communautaires

## 🚀 Roadmap

### Priorités Actuelles
1. **Backend Integration**: API REST
2. **Paiements**: MVola, Stripe
3. **PWA**: Application mobile
4. **Analytics**: Statistiques avancées

### Contributions Souhaitées
- Intégration backend Node.js/PHP
- Système de paiement Madagascar
- Optimisations performance
- Tests automatisés
- Traductions (Malagasy, English)

## ❓ Questions

Pour toute question:
1. Consultez la documentation existante
2. Cherchez dans les issues existantes
3. Ouvrez une nouvelle issue
4. Contactez par email si nécessaire

---

Merci de contribuer à SmartDigitalPro ! 🇲🇬 ❤️
