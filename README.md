# Ma Todo List

Cette application est une Todo List intuitive et visuellement attrayante qui permet aux utilisateurs de mieux organiser leur quotidien. Elle a été développée avec React et utilise des animations subtiles pour offrir une expérience agréable.

## Fonctionnalités
- **Ajouter des tâches**.
- **Modifier** ou **supprimer** des tâches existantes.
- **Marquer des tâches comme complétées**.
- **Filtrer les tâches** pour afficher celles qui sont actives, complétées ou toutes.
- **Animation d'arrière-plan** avec des pétales pour un effet visuel apaisant.

## Technologies Utilisées
- **React** : pour la structure et l'interface de l'application.
- **Styled-components** : pour le styling dynamique et personnalisé des composants.
- **LocalStorage** : pour la persistance des tâches.
- **Three.js** avec **react-three-fiber** : pour les animations visuelles de l'arrière-plan.

## Installation et Lancement

1. **Clôner le dépôt** :
   ```bash
   git clone https://github.com/raphaeldebot/todolist.git
   cd todolist
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer l'application** :
   ```bash
   npm start
   ```

4. **Accéder à l'application** :
   Ouvrez votre navigateur et rendez-vous sur `http://localhost:3000`.

## Structure du Projet
- **src/**
  - **components/** : Contient les composants principaux de l'application (formulaire, liste de tâches, éléments de tâche, etc.).
  - **assets/** : Images et éléments graphiques (par exemple, les pétales).
  - **App.js** : Point d'entrée principal de l'application.
  - **GlobalStyle.js** et **theme.js** : Gestion des styles globaux et des thèmes.

## Fonctionnement
L'application permet de gérer facilement ses tâches du quotidien. L'ajout d'une tâche est très simple. Les tâches peuvent être triées et filtrées selon leur statut (toutes, actives, complétées). Chaque tâche peut être modifiée ou supprimée facilement. L'application utilise le **localStorage** pour conserver les tâches entre les sessions de navigation.


## Contribution
Les contributions sont les bienvenues ! Pour contribuer, clônez le dépôt, créez une branche pour vos modifications, puis ouvrez une Pull Request.

## License
Ce projet est sous licence MIT - voir le fichier [LICENSE](./LICENSE) pour plus de détails.

