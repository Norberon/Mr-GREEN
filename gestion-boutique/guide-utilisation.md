# Guide d'Utilisation de l'Application de Gestion de Boutique

## Introduction

Bienvenue dans l'application de gestion de boutique ! Cette application a été conçue spécifiquement pour répondre à vos besoins en matière de gestion financière et de suivi des ventes de votre boutique, en se basant sur les données de votre bilan mensuel.

Ce guide vous expliquera étape par étape comment utiliser l'application, la mettre en ligne, et exploiter toutes ses fonctionnalités sans aucune connaissance en programmation.

## Table des matières

1. [Accès à l'application](#1-accès-à-l'application)
2. [Navigation dans l'application](#2-navigation-dans-l'application)
3. [Tableau de bord](#3-tableau-de-bord)
4. [Gestion des ventes](#4-gestion-des-ventes)
5. [Gestion des dépenses](#5-gestion-des-dépenses)
6. [Gestion des forfaits WiFi](#6-gestion-des-forfaits-wifi)
7. [Gestion des produits](#7-gestion-des-produits)
8. [Mise en ligne de l'application](#8-mise-en-ligne-de-l'application)
9. [Sauvegarde des données](#9-sauvegarde-des-données)
10. [Dépannage](#10-dépannage)

## 1. Accès à l'application

### Utilisation en local (sur votre ordinateur)

1. Téléchargez tous les fichiers de l'application sur votre ordinateur
2. Ouvrez le fichier `index.html` en double-cliquant dessus
3. L'application s'ouvrira dans votre navigateur web (Chrome, Firefox, etc.)

### Utilisation en ligne (après mise en ligne)

1. Ouvrez votre navigateur web
2. Entrez l'adresse URL qui vous a été fournie après la mise en ligne (voir section 8)
3. L'application se chargera automatiquement

## 2. Navigation dans l'application

L'application est divisée en 5 sections principales, accessibles via le menu en haut de l'écran :

- **Tableau de Bord** : Vue d'ensemble des finances
- **Ventes** : Enregistrement et suivi des ventes
- **Dépenses** : Gestion des dépenses
- **WiFi** : Suivi spécifique des ventes de forfaits WiFi
- **Produits** : Gestion de l'inventaire

Pour naviguer d'une section à l'autre, il suffit de cliquer sur l'onglet correspondant.

## 3. Tableau de bord

Le tableau de bord vous donne une vue d'ensemble de la situation financière de votre boutique :

### Informations affichées

- **Recettes Totales** : Somme de tous les revenus
- **Dépenses Totales** : Somme de toutes les dépenses
- **Solde Courant** : Différence entre recettes et dépenses

### Graphiques

- **Revenus par Catégorie** : Graphique à barres montrant les revenus mensuels
- **Dépenses par Catégorie** : Graphique en camembert montrant la répartition des dépenses

### Bilan Mensuel

Un tableau détaillé montrant mois par mois :
- Les dépenses par catégorie (Tontine, Affiza, Djimen, Internet, Électricité, Autres)
- Les entrées d'argent
- Le total et le reste

## 4. Gestion des ventes

Cette section vous permet d'enregistrer et de suivre toutes les ventes de la boutique.

### Enregistrer une nouvelle vente

1. Remplissez le formulaire "Ajouter une Vente" :
   - **Date** : Sélectionnez la date (par défaut, la date du jour est sélectionnée)
   - **Type de Produit** : Choisissez parmi la liste déroulante
   - **Quantité** : Indiquez le nombre d'unités vendues
   - **Prix Unitaire** : Se remplit automatiquement selon le produit choisi, mais peut être modifié
   - **Prix Total** : Calculé automatiquement (Prix Unitaire × Quantité)
   - **Commentaire** : Facultatif, pour ajouter des informations supplémentaires

2. Cliquez sur le bouton "Enregistrer la Vente"

### Consulter les ventes

Toutes les ventes sont affichées dans le tableau "Historique des Ventes".

### Supprimer une vente

Si vous avez fait une erreur, vous pouvez supprimer une vente en cliquant sur le bouton "Supprimer" correspondant dans la colonne "Actions".

### Exportation des données

Cliquez sur le bouton "Exporter" pour télécharger l'historique des ventes au format CSV (compatible avec Excel).

## 5. Gestion des dépenses

Cette section vous permet de suivre toutes les dépenses de la boutique.

### Enregistrer une nouvelle dépense

1. Remplissez le formulaire "Ajouter une Dépense" :
   - **Date** : Sélectionnez la date
   - **Catégorie** : Choisissez la catégorie de dépense
   - **Montant** : Indiquez le montant de la dépense
   - **Description** : Ajoutez des détails sur la dépense

2. Cliquez sur le bouton "Enregistrer la Dépense"

### Consulter les dépenses

Toutes les dépenses sont affichées dans le tableau "Historique des Dépenses".

### Exportation des données

Cliquez sur le bouton "Exporter" pour télécharger l'historique des dépenses au format CSV.

## 6. Gestion des forfaits WiFi

Cette section est dédiée spécifiquement aux ventes de forfaits WiFi, qui constituent une part importante de votre activité.

### Enregistrer une vente de forfait WiFi

1. Remplissez le formulaire "Ajouter une Vente WiFi" :
   - **Date** : Sélectionnez la date
   - **Type de Forfait** : Choisissez parmi WIFI 100, WIFI 150, WIFI 200, WIFI 500 ou WIFI 2000
   - **Quantité** : Indiquez le nombre de forfaits vendus
   - **Montant Total** : Calculé automatiquement

2. Cliquez sur le bouton "Enregistrer"

### Statistiques WiFi

Cette section affiche :
- Le total des ventes WiFi
- Un graphique montrant les ventes par type de forfait
- Un tableau récapitulatif des forfaits vendus avec les totaux

## 7. Gestion des produits

Cette section vous permet de gérer votre inventaire de produits.

### Ajouter un nouveau produit

1. Remplissez le formulaire "Ajouter un Produit" :
   - **Nom du Produit** : Entrez le nom du produit
   - **Catégorie** : Sélectionnez la catégorie
   - **Prix de Vente** : Indiquez le prix unitaire
   - **Quantité en Stock** : Indiquez la quantité disponible
   - **Seuil d'Alerte** : Définissez le niveau minimal de stock avant alerte

2. Cliquez sur le bouton "Enregistrer"

### Stock critique

Cette section affiche automatiquement les produits dont le stock est inférieur au seuil d'alerte, vous aidant à gérer vos réapprovisionnements.

### Liste des produits

Un tableau affiche tous les produits avec leurs informations.

## 8. Mise en ligne de l'application

Pour accéder à l'application depuis n'importe quel appareil (smartphone, tablette, autre ordinateur), vous devez la mettre en ligne. Voici deux méthodes gratuites et simples :

### Méthode 1 : Netlify (recommandée)

1. Créez un compte gratuit sur [Netlify](https://www.netlify.com/)
2. Une fois connecté, cliquez sur "Add new site" puis "Deploy manually"
3. Faites glisser le dossier contenant tous les fichiers de l'application (index.html, style.css, app.js, etc.) dans la zone indiquée
4. Attendez quelques instants que le déploiement se termine
5. Netlify vous fournira une adresse URL (par exemple : https://votre-boutique.netlify.app)
6. Utilisez cette adresse pour accéder à votre application depuis n'importe quel appareil

### Méthode 2 : GitHub Pages

1. Créez un compte gratuit sur [GitHub](https://github.com/)
2. Créez un nouveau "repository" (dépôt)
3. Téléchargez tous les fichiers de l'application dans ce dépôt
4. Allez dans les paramètres du dépôt, puis dans la section "Pages"
5. Activez GitHub Pages en sélectionnant la branche "main"
6. GitHub vous fournira une adresse URL (par exemple : https://votre-nom.github.io/votre-boutique)

## 9. Sauvegarde des données

L'application stocke toutes les données localement dans votre navigateur. Pour éviter de perdre des données :

### Exportation régulière

1. Utilisez les boutons "Exporter" dans les sections Ventes et Dépenses pour télécharger vos données
2. Conservez ces fichiers CSV en lieu sûr
3. Faites des exportations au moins une fois par semaine

### Mise à jour de l'application en ligne

Si vous avez mis l'application en ligne, assurez-vous de la mettre à jour régulièrement en redéployant les fichiers (incluant vos données) vers votre hébergeur.

## 10. Dépannage

### L'application ne s'ouvre pas

- Vérifiez que tous les fichiers ont été téléchargés
- Essayez d'ouvrir l'application dans un autre navigateur (Chrome, Firefox)

### Les données disparaissent

- Vérifiez que vous n'avez pas effacé l'historique de votre navigateur
- Exportez régulièrement vos données comme indiqué dans la section 9

### Problèmes de mise en ligne

- Vérifiez que vous avez bien téléchargé tous les fichiers de l'application
- Assurez-vous que le fichier index.html est à la racine du dossier que vous mettez en ligne

Pour toute autre question ou problème, n'hésitez pas à contacter le développeur de l'application.

---

## Conclusion

Cette application a été conçue pour être aussi intuitive que possible, tout en offrant toutes les fonctionnalités nécessaires à la gestion de votre boutique. Avec un peu de pratique, vous serez en mesure de gérer efficacement vos finances, vos ventes et votre inventaire sans aucune connaissance technique préalable.

Nous vous souhaitons une excellente utilisation de votre nouvelle application de gestion !