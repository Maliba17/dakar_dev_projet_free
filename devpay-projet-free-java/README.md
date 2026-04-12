#  Projet Free Java  API REST DEVPAY

## Objectif
Créer une API REST complète pour gérer les étudiants DEVPAY.

##  Pour démarrer

### 1. Cloner le projet
```bash
git clone https://github.com/votre-org/devpay-projet-free-java.git
cd devpay-projet-free-java
```

### 2. Créer votre branche
```bash
git checkout -b dakar_dev_projet_free_prenom_nom
# Exemple : git checkout -b dakar_dev_projet_free_fatou_ndiaye
```

### 3. Lancer le projet
```bash
./mvnw spring-boot:run
```
L'API sera accessible sur http://localhost:8080

### 4. Base de données
Le projet est configuré avec **H2** (base en mémoire) pour le développement.
Console H2 : http://localhost:8080/h2-console
- URL JDBC : `jdbc:h2:mem:devpaydb`
- User : `sa` / Mot de passe : *(vide)*

Pour passer à **PostgreSQL**, modifier `src/main/resources/application.yml`.

### 5. Documentation API
Swagger UI : http://localhost:8080/swagger-ui.html

---

##  Cahier des charges

### Endpoints à implémenter
```
GET    /api/v1/etudiants              # Liste tous les étudiants
GET    /api/v1/etudiants/{id}         # Détail d'un étudiant
POST   /api/v1/etudiants              # Créer un étudiant
PUT    /api/v1/etudiants/{id}         # Modifier un étudiant
DELETE /api/v1/etudiants/{id}         # Supprimer un étudiant
POST   /api/v1/etudiants/{id}/evaluer # Évaluer (note quiz)

GET    /api/v1/formations             # Liste des formations
GET    /api/v1/statistiques           # Statistiques globales
```

### Exigences techniques
-  Spring Boot 3.x + Java 21
-  Architecture en couches : Controller  Service  Repository
-  Validation des données (`@Valid`, DTOs)
-  Gestion d'erreurs globale (`@ControllerAdvice`)
-  Tests unitaires (JUnit 5 + Mockito, couverture > 70%)
-  Dockerfile + docker-compose.yml
-  Documentation API (Swagger/OpenAPI)

---

##  Barème de notation

| Critère | Points |
|---------|--------|
| Fonctionnalités complètes | /6 |
| Qualité du code (clean code, architecture) | /4 |
| Tests unitaires | /3 |
| Docker + Documentation | /3 |
| Soutenance (présentation, réponses) | /4 |
| **Total** | **/20** |

---

##  Livraison
- Code source sur GitHub (branche `dakar_dev_projet_free_prenom_nom`)
- README.md complété avec vos instructions
- Soutenance de 20 minutes : démo + questions
