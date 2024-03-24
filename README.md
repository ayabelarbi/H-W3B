# LOYALT
LoyalT réinvente la fidélisation avec un NFT évolutif et des quêtes quotidiennes qui gamifient l’expérience utilisateur. 

# Démarrage rapide
Instructions pour lancer le projet :

git clone https://github.com/ayabelarbi/H-W3B
## Aller dans le dossier du projet
cd src

## Installer les dépendances
npm install

## Lancer le projet
npm run dev


# Fonctionnalité

- Un login permettant de se connecter et récuperer un token
- Une interface utilisateur permettant de consulter les restaurants dans lequel on peut faire une quête/mission
- Une interface retail permettant d'enregistrer une nouvelle mission pour son restaurant
- Une Navigation Panel permettant de : 
  - Consulter une Map
  - Consulter le classement dans le LeaderBoard des clients ayant fait le plus de missions / ayant acheté le plus
  - Consulter dans Collection les cartes de fidelité ou les quêtes que l'utilisateur à accepté

## Note : 
Nous avons voulu implémenter une base de donnée avec fireBase. Celle-ci aurait permit d'enregistrer dans une base les différentes missions des restaurants que les retails auraient pu enregistrer. Par manque de temps, nous n'avons pu aboutir à cette fonctionnalité.

# Pages / Composants

## dans le fichier src

## fichier pages
- Home.tsx : Page d'accueil 
- Navbar.tsx : Navigation Panel qui permet de :
  - se connecter via Login
  - consulter la map avec map.tsx
  - consulter le classement avec leaderboard.tsx
  - consulter tes collection avec Collection.tsx
- getstarted.tsx : Page permettant de s'identifier en tant que client ou retail 
- ClientPage.tsx : Page qui contient l'interface du client
- RetailPage.tsx : Page qui contient l'interface du retail

## fichier Design 
- contient nos photos utilisé



# Auteurs

- Belarbi Aya : https://github.com/ayabelarbi
- Saïdi Kim : https://github.com/KIMSAIDI

