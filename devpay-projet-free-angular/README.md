#  Projet Free Angular  Frontend DEVPAY

## Objectif
Créer le frontend de la plateforme DEVPAY avec Angular.

##  Pour démarrer

### 1. Cloner le projet
```bash
git clone https://github.com/votre-org/devpay-projet-free-angular.git
cd devpay-projet-free-angular
```

### 2. Créer votre branche
```bash
git checkout -b dakar_dev_projet_free_prenom_nom
# Exemple : git checkout -b dakar_dev_projet_free_fatou_ndiaye
```

### 3. Installer les dépendances
```bash
npm install
```

### 4. Lancer le projet
```bash
ng serve
```
L'application sera accessible sur http://localhost:4200

---

##  Cahier des charges

### Pages à implémenter
- **Page d'accueil** : présentation DEVPAY, formations disponibles
- **Page d'inscription** : formulaire réactif avec validation
- **Page de connexion** : authentification JWT
- **Dashboard étudiant** : profil, notes, progression, certificats
- **Liste des formations** : cards avec filtres et recherche
- **Page formation** : détail, programme, inscription

### Exigences techniques
-  Angular 18+ avec composants standalone
-  TypeScript strict (pas de `any`)
-  Reactive Forms avec validation
-  Routing avec lazy loading et guards
-  HttpClient avec interceptors (auth JWT)
-  RxJS : opérateurs (`switchMap`, `debounceTime` pour la recherche)
-  Responsive design (mobile-first)
-  Gestion d'état (services ou NgRx)

### API Backend
L'API Java est disponible sur `http://localhost:8080/api/v1`.
Configurable dans `src/environments/environment.ts`.

---

##  Barème de notation

| Critère | Points |
|---------|--------|
| Pages complètes et fonctionnelles | /6 |
| Qualité du code (TypeScript strict, architecture) | /4 |
| Reactive Forms + RxJS | /3 |
| Responsive + UX | /3 |
| Soutenance (démo, réponses) | /4 |
| **Total** | **/20** |

---

##  Livraison
- Code source sur GitHub (branche `dakar_dev_projet_free_prenom_nom`)
- Application déployée (Vercel, Netlify ou Firebase Hosting)
- README.md complété avec screenshots et instructions
- Soutenance de 20 minutes : démo + questions
