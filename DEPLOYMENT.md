# 🚀 Guide de Déploiement - SmartDigitalPro

## 📋 Options de Déploiement

### 1. GitHub Pages (Gratuit)
```bash
# 1. Pousser le code sur GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Aller dans Settings > Pages
# 3. Sélectionner "Deploy from a branch"
# 4. Choisir "main" branch
# 5. Votre site sera disponible à: https://username.github.io/repo-name
```

### 2. Netlify (Gratuit)
```bash
# 1. Connecter votre repo GitHub à Netlify
# 2. Build command: (laisser vide)
# 3. Publish directory: . (racine)
# 4. Déploiement automatique à chaque push
```

### 3. Vercel (Gratuit)
```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer
vercel

# 3. Suivre les instructions
```

### 4. Firebase Hosting (Gratuit)
```bash
# 1. Installer Firebase CLI
npm install -g firebase-tools

# 2. Initialiser Firebase
firebase init hosting

# 3. Déployer
firebase deploy
```

### 5. Serveur Web (VPS/Hébergement)
```bash
# Copier tous les fichiers dans le dossier public_html
# Aucune configuration serveur nécessaire
# Fonctionne avec Apache, Nginx, etc.
```

## 🔧 Configuration Locale

### Démarrage rapide
```bash
# Option 1: Python (recommandé)
python -m http.server 8000

# Option 2: Node.js
npx serve .

# Option 3: PHP
php -S localhost:8000

# Ouvrir: http://localhost:8000
```

## 📱 PWA (Application Mobile)
Pour transformer en application mobile:

1. Ajouter `manifest.json`
2. Ajouter Service Worker
3. Installer sur mobile comme une app

## 🌐 Nom de Domaine
Pour un domaine personnalisé:
- Acheter un domaine (.mg pour Madagascar)
- Configurer les DNS vers votre hébergement
- Activer HTTPS (Let's Encrypt gratuit)

## 📈 Analytics
Ajouter Google Analytics:
```html
<!-- Dans <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔐 Sécurité
- Toujours utiliser HTTPS
- Configurer les headers de sécurité
- Valider toutes les entrées utilisateur

## 📧 Contact
support@smartdigitalpro.mg
