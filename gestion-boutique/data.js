// Données mensuelles
const monthlyData = [
    {
        month: 'Septembre',
        tontine: 62000,
        affiza: 30000,
        djimen: 30000,
        internet: 15000,
        electricite: 0,
        autres: 0,
        entreeAutre: 200000,
        entree: 0,
        total: 137000,
        reste: 63000
    },
    {
        month: 'Octobre',
        tontine: 62000,
        affiza: 30000,
        djimen: 30000,
        internet: 15000,
        electricite: 0,
        autres: 118420,
        entreeAutre: 0,
        entree: 0,
        total: 137000,
        reste: -18580
    },
    {
        month: 'Novembre',
        tontine: 62000,
        affiza: 30000,
        djimen: 30000,
        internet: 15000,
        electricite: 0,
        autres: 0,
        entreeAutre: 0,
        entree: 0,
        total: 137000,
        reste: -137000
    },
    {
        month: 'Décembre',
        tontine: 62000,
        affiza: 30000,
        djimen: 30000,
        internet: 15000,
        electricite: 0,
        autres: 0,
        entreeAutre: 0,
        entree: 0,
        total: 137000,
        reste: -137000
    },
    {
        month: 'Janvier',
        tontine: 62000,
        affiza: 30000,
        djimen: 30000,
        internet: 15000,
        electricite: 0,
        autres: 0,
        entreeAutre: 0,
        entree: 0,
        total: 137000,
        reste: -137000
    },
    {
        month: 'Février',
        tontine: 62000,
        affiza: 30000,
        djimen: 30000,
        internet: 15000,
        electricite: 0,
        autres: 0,
        entreeAutre: 0,
        entree: 0,
        total: 137000,
        reste: -137000
    }
];

// Données de produits
const productsData = {
    photocopie: [
        { name: 'Photocopie 25f', price: 25, quantity: 628, total: 15700 },
        { name: 'Photocopie 15f', price: 15, quantity: 353, total: 5295 }
    ],
    impression: [
        { name: 'Impression 100f', price: 100, quantity: 37, total: 3700 },
        { name: 'Impression 50f', price: 50, quantity: 126, total: 6300 },
        { name: 'Impression 25f', price: 25, quantity: 32, total: 800 }
    ],
    sim: [
        { name: 'SIM Moov', price: 1000, quantity: 6, total: 6000 },
        { name: 'SIM Tgcom 1000', price: 1000, quantity: 3, total: 3000 },
        { name: 'SIM Tgcom 800', price: 800, quantity: 2, total: 1600 }
    ],
    scanner: { price: 100, quantity: 15, total: 1500 },
    saisie: [
        { name: 'Saisie + Imp', price: 300, quantity: 4, total: 1200 },
        { name: 'Saisie 250', price: 250, quantity: 2, total: 500 },
        { name: 'Saisie 200', price: 200, quantity: 0, total: 0 }
    ],
    accessoires: [
        { name: 'RAM', price: 550, quantity: 1, total: 550 },
        { name: 'Chargeur', price: 1500, quantity: 1, total: 1500 },
        { name: 'Écouteurs', price: 700, quantity: 1, total: 700 }
    ],
    wifi: [
        { name: 'WIFI 100', price: 100, quantity: 372, total: 37200 },
        { name: 'WIFI 150', price: 150, quantity: 36, total: 5400 },
        { name: 'WIFI 200', price: 200, quantity: 194, total: 38800 },
        { name: 'WIFI 500', price: 500, quantity: 58, total: 29000 },
        { name: 'WIFI 2000', price: 2000, quantity: 1, total: 2000 }
    ],
    credit: [
        { name: 'CREDIT TGCOM', price: 1000, quantity: 6, total: 6000 },
        { name: 'CREDIT MOOV', price: 500, quantity: 5, total: 2500 }
    ]
};

// Données de dépenses
const expensesData = [
    { category: 'Tontine', amount: 62000 },
    { category: 'Affiza', amount: 30000 },
    { category: 'Djimen', amount: 30000 },
    { category: 'Internet', amount: 15000 },
    { category: 'Électricité', amount: 0 },
    { category: 'Stock', amount: 30000 },
    { category: 'Autres', amount: 500 }
];

// Données de ventes quotidiennes pour Septembre
const dailySalesData = [
    { date: '2024-09-01', photocopie25: 17, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 4, wifi150: 2, wifi200: 4 },
    { date: '2024-09-02', photocopie25: 35, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 14, wifi150: 12, wifi200: 0 },
    { date: '2024-09-03', photocopie25: 20, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 14, wifi150: 9, wifi200: 0 },
    { date: '2024-09-04', photocopie25: 23, photocopie15: 0, impression100: 4, impression50: 0, wifi100: 17, wifi150: 13, wifi200: 0 },
    { date: '2024-09-05', photocopie25: 16, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 4, wifi150: 8, wifi200: 0 },
    { date: '2024-09-06', photocopie25: 9, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 22, wifi150: 8, wifi200: 0 },
    { date: '2024-09-07', photocopie25: 0, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 7, wifi150: 6, wifi200: 0 },
    { date: '2024-09-09', photocopie25: 23, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 32, wifi150: 15, wifi200: 0 },
    { date: '2024-09-10', photocopie25: 35, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 14, wifi150: 10, wifi200: 0 },
    { date: '2024-09-11', photocopie25: 19, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 14, wifi150: 10, wifi200: 0 },
    { date: '2024-09-12', photocopie25: 25, photocopie15: 60, impression100: 0, impression50: 0, wifi100: 13, wifi150: 4, wifi200: 0 },
    { date: '2024-09-13', photocopie25: 52, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 8, wifi150: 6, wifi200: 0 },
    { date: '2024-09-14', photocopie25: 27, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 11, wifi150: 3, wifi200: 0 },
    { date: '2024-09-15', photocopie25: 28, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 17, wifi150: 5, wifi200: 0 },
    { date: '2024-09-16', photocopie25: 55, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 10, wifi150: 6, wifi200: 0 },
    { date: '2024-09-17', photocopie25: 28, photocopie15: 36, impression100: 0, impression50: 0, wifi100: 16, wifi150: 8, wifi200: 0 },
    { date: '2024-09-18', photocopie25: 22, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 11, wifi150: 5, wifi200: 0 },
    { date: '2024-09-19', photocopie25: 35, photocopie15: 30, impression100: 0, impression50: 0, wifi100: 17, wifi150: 7, wifi200: 0 },
    { date: '2024-09-20', photocopie25: 10, photocopie15: 0, impression100: 0, impression50: 0, wifi100: 15, wifi150: 5, wifi200: 0 },
    { date: '2024-09-21', photocopie25: 6, photocopie15: 30, impression100: 0, impression50: 0, wifi100: 15, wifi150: 3, wifi200: 0 }
];