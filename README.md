# VitamineScope 🍊

<img width="1055" height="768" alt="{5524128F-6A6A-402C-9C99-A96D2915A2FC}" src="https://github.com/user-attachments/assets/53bba1df-05f6-4392-a683-5bf24c631c2f" />


> **Explorez votre chimie intérieure.** Une application éducative premium pour comprendre les vitamines, analyser ses apports nutritionnels et apprendre grâce à l'IA.

## 📖 À propos

**VitamineScope** est une application web interactive ("Pédagogie Augmentée") conçue pour démocratiser la science de la nutrition. Elle permet aux utilisateurs de naviguer dans la complexité des micronutriments essentiels (Vitamines A, B, C, D, E, K) à travers une interface moderne, fluide et ludique.

L'application ne se contente pas de lister des données ; elle contextualise l'information grâce à des outils de visualisation et un assistant IA, aidant l'utilisateur à faire le lien entre son mode de vie et ses besoins physiologiques.

## ✨ Fonctionnalités Principales

### 🍎 1. Encyclopédie Visuelle
Une base de données exhaustive et structurée :
- **Fiches détaillées** : Rôles, AJR (Apports Journaliers Recommandés), toxicité.
- **Sources alimentaires** : Classement par densité nutritionnelle avec visualisation graphique.
- **Code couleur** : Identité visuelle unique pour chaque vitamine.

### 📊 2. "Mon Bilan" (Analyseur Interactif)
Un moteur de simulation pédagogique :
- Ajustez des curseurs (Régime, Soleil, Stress, Sommeil).
- Algorithme de calcul de scores nutritionnels théoriques.
- Visualisation des résultats via un **Radar Chart** dynamique.
- Recommandations alimentaires ciblées en cas de "risque" théorique.

### 🤖 3. Coach IA (Gemini)
Intégration native de l'API **Google Gemini** (`@google/genai`) :
- **Mode Chat** : Explications simplifiées avec analogies ludiques.
- **Mode Quiz** : Génération dynamique de QCM pour tester ses connaissances.

## 🛠️ Stack Technique

- **Frontend** : React 18+ (Hooks, Context), TypeScript.
- **Styling** : Tailwind CSS (Design System moderne, responsive).
- **Data Viz** : Recharts (Graphiques circulaires et Radars).
- **Icons** : Lucide React.
- **Intelligence Artificielle** : Google Gemini Flash 2.5.
- **Build Tool** : Vite / Create React App (selon configuration).

## 🚀 Installation et Démarrage

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-username/vitaminescope.git
   cd vitaminescope
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de l'IA**
   Créez un fichier `.env` ou configurez votre environnement pour inclure la clé API Google Gemini :
   ```env
   API_KEY=votre_cle_api_google
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm start
   ```

## ⚠️ Disclaimer Santé

**VitamineScope est un outil à but strictement éducatif.**

Les analyses, scores et conseils générés par l'application ou l'IA sont des estimations théoriques basées sur des données générales. Ils ne remplacent en aucun cas une consultation médicale, un diagnostic biologique ou l'avis d'un nutritionniste certifié.

---

*Développé avec passion pour la pédagogie et le code propre.*
