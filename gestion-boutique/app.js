// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    // Données initiales pour les mois
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

    // Données pour les ventes wifi
    const wifiData = {
        wifi100: {price: 100, quantity: 372, total: 37200},
        wifi150: {price: 150, quantity: 36, total: 5400},
        wifi200: {price: 200, quantity: 194, total: 38800},
        wifi500: {price: 500, quantity: 58, total: 29000},
        wifi2000: {price: 2000, quantity: 1, total: 2000}
    };

    // Données pour les produits
    const productsData = [
        {name: 'Photocopie 25f', category: 'Photocopie', price: 25, stock: 'Illimité'},
        {name: 'Photocopie 15f', category: 'Photocopie', price: 15, stock: 'Illimité'},
        {name: 'Impression 100f', category: 'Impression', price: 100, stock: 'Illimité'},
        {name: 'Impression 50f', category: 'Impression', price: 50, stock: 'Illimité'},
        {name: 'Impression 25f', category: 'Impression', price: 25, stock: 'Illimité'},
        {name: 'SIM Moov', category: 'SIM', price: 1000, stock: 6},
        {name: 'SIM Tgcom 1000', category: 'SIM', price: 1000, stock: 3},
        {name: 'SIM Tgcom 800', category: 'SIM', price: 800, stock: 2},
        {name: 'WiFi 100', category: 'WiFi', price: 100, stock: 'Illimité'},
        {name: 'WiFi 150', category: 'WiFi', price: 150, stock: 'Illimité'},
        {name: 'WiFi 200', category: 'WiFi', price: 200, stock: 'Illimité'},
        {name: 'WiFi 500', category: 'WiFi', price: 500, stock: 'Illimité'},
        {name: 'WiFi 2000', category: 'WiFi', price: 2000, stock: 'Illimité'},
        {name: 'Écouteurs', category: 'Accessoire', price: 700, stock: 1},
        {name: 'Chargeur', category: 'Accessoire', price: 1500, stock: 5}
    ];

    // Données pour les dépenses
    const expensesData = [
        {category: 'Tontine', amount: 62000, description: 'Cotisation mensuelle'},
        {category: 'Affiza', amount: 30000, description: 'Paiement mensuel'},
        {category: 'Djimen', amount: 30000, description: 'Paiement mensuel'},
        {category: 'Internet', amount: 15000, description: 'Abonnement internet'},
        {category: 'Stock', amount: 16000, description: 'Achat de cartes SIM'},
        {category: 'Autre', amount: 1000, description: 'Frais divers'}
    ];

    // Données pour les ventes
    let salesData = [];
    
    // Génération de données aléatoires pour la démonstration
    const today = new Date().toISOString().slice(0, 10);
    for(let i = 0; i < 10; i++) {
        const productIndex = Math.floor(Math.random() * productsData.length);
        const product = productsData[productIndex];
        const quantity = Math.floor(Math.random() * 5) + 1;
        
        salesData.push({
            date: today,
            product: product.name,
            quantity: quantity,
            unitPrice: product.price,
            total: product.price * quantity
        });
    }

    // Navigation entre sections
    document.getElementById('dashboardLink').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('dashboardSection');
        updateActiveLink(this);
    });

    document.getElementById('salesLink').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('salesSection');
        updateActiveLink(this);
    });

    document.getElementById('expensesLink').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('expensesSection');
        updateActiveLink(this);
    });

    document.getElementById('wifiLink').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('wifiSection');
        updateActiveLink(this);
    });

    document.getElementById('productsLink').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('productsSection');
        updateActiveLink(this);
    });

    // Initialisation des formulaires
    initSalesForm();
    initExpenseForm();
    initWifiForm();
    initProductForm();

    // Remplir les tableaux avec les données initiales
    populateMonthlyTable(monthlyData);
    populateSalesTable(salesData);
    calculateTodaySales();

    // Initialiser les graphiques
    initCharts(monthlyData, wifiData, expensesData);
});

// Fonctions utilitaires
function showSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    document.getElementById(sectionId).classList.add('active');
}

function updateActiveLink(link) {
    // Désactiver tous les liens actifs
    document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
    });
    
    // Activer le lien courant
    link.classList.add('active');
}

function formatNumber(number) {
    return new Intl.NumberFormat('fr-FR').format(number);
}

// Initialisation des formulaires
function initSalesForm() {
    const form = document.getElementById('salesForm');
    const unitPriceInput = document.getElementById('unitPrice');
    const quantityInput = document.getElementById('quantity');
    const totalPriceInput = document.getElementById('totalPrice');
    const productTypeSelect = document.getElementById('productType');
    
    // Pré-remplir la date avec la date du jour
    document.getElementById('saleDate').valueAsDate = new Date();
    
    // Mettre à jour le prix unitaire en fonction du produit sélectionné
    productTypeSelect.addEventListener('change', function() {
        switch(this.value) {
            case 'photocopie25':
                unitPriceInput.value = 25;
                break;
            case 'photocopie15':
                unitPriceInput.value = 15;
                break;
            case 'impression100':
                unitPriceInput.value = 100;
                break;
            case 'impression50':
                unitPriceInput.value = 50;
                break;
            case 'impression25':
                unitPriceInput.value = 25;
                break;
            case 'simMoov':
                unitPriceInput.value = 1000;
                break;
            case 'simTgcom1000':
                unitPriceInput.value = 1000;
                break;
            case 'simTgcom800':
                unitPriceInput.value = 800;
                break;
            case 'wifi100':
                unitPriceInput.value = 100;
                break;
            case 'wifi150':
                unitPriceInput.value = 150;
                break;
            case 'wifi200':
                unitPriceInput.value = 200;
                break;
            case 'wifi500':
                unitPriceInput.value = 500;
                break;
            case 'wifi2000':
                unitPriceInput.value = 2000;
                break;
            default:
                unitPriceInput.value = '';
        }
        
        // Mettre à jour le prix total
        if (unitPriceInput.value && quantityInput.value) {
            totalPriceInput.value = unitPriceInput.value * quantityInput.value;
        }
    });
    
    // Mettre à jour le prix total quand la quantité change
    quantityInput.addEventListener('input', function() {
        if (unitPriceInput.value && this.value) {
            totalPriceInput.value = unitPriceInput.value * this.value;
        }
    });
    
    // Mettre à jour le prix total quand le prix unitaire change
    unitPriceInput.addEventListener('input', function() {
        if (this.value && quantityInput.value) {
            totalPriceInput.value = this.value * quantityInput.value;
        }
    });
    
    // Soumission du formulaire de vente
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const date = document.getElementById('saleDate').value;
        const productType = document.getElementById('productType');
        const productName = productType.options[productType.selectedIndex].text;
        const quantity = parseInt(document.getElementById('quantity').value);
        const unitPrice = parseFloat(document.getElementById('unitPrice').value);
        const total = parseFloat(document.getElementById('totalPrice').value);
        
        // Créer un nouvel objet de vente
        const newSale = {
            date: date,
            product: productName,
            quantity: quantity,
            unitPrice: unitPrice,
            total: total
        };
        
        // Ajouter la vente à la table des ventes
        addSaleToTable(newSale);
        
        // Recalculer les ventes du jour
        calculateTodaySales();
        
        // Réinitialiser le formulaire
        form.reset();
        document.getElementById('saleDate').valueAsDate = new Date();
        totalPriceInput.value = '';
        
        // Afficher un message de confirmation
        alert('Vente enregistrée avec succès !');
    });
}

function initExpenseForm() {
    const form = document.getElementById('expenseForm');
    
    // Pré-remplir la date avec la date du jour
    document.getElementById('expenseDate').valueAsDate = new Date();
    
    // Soumission du formulaire de dépense
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const date = document.getElementById('expenseDate').value;
        const categorySelect = document.getElementById('expenseCategory');
        const category = categorySelect.options[categorySelect.selectedIndex].text;
        const amount = parseFloat(document.getElementById('expenseAmount').value);
        const description = document.getElementById('expenseDescription').value;
        
        // Créer un nouvel objet de dépense
        const newExpense = {
            date: date,
            category: category,
            description: description,
            amount: amount
        };
        
        // Ajouter la dépense à la table des dépenses
        addExpenseToTable(newExpense);
        
        // Réinitialiser le formulaire
        form.reset();
        document.getElementById('expenseDate').valueAsDate = new Date();
        
        // Mettre à jour le total des dépenses du mois
        updateMonthExpenses(amount);
        
        // Afficher un message de confirmation
        alert('Dépense enregistrée avec succès !');
    });
}

function initWifiForm() {
    const form = document.getElementById('wifiForm');
    const wifiTypeSelect = document.getElementById('wifiType');
    const wifiQuantityInput = document.getElementById('wifiQuantity');
    const wifiTotalInput = document.getElementById('wifiTotal');
    
    // Pré-remplir la date avec la date du jour
    document.getElementById('wifiDate').valueAsDate = new Date();
    
    // Mettre à jour le prix total en fonction du forfait sélectionné
    wifiTypeSelect.addEventListener('change', function() {
        let price = 0;
        switch(this.value) {
            case 'wifi100':
                price = 100;
                break;
            case 'wifi150':
                price = 150;
                break;
            case 'wifi200':
                price = 200;
                break;
            case 'wifi500':
                price = 500;
                break;
            case 'wifi2000':
                price = 2000;
                break;
        }
        
        if (price && wifiQuantityInput.value) {
            wifiTotalInput.value = price * wifiQuantityInput.value;
        }
    });
    
    // Mettre à jour le prix total quand la quantité change
    wifiQuantityInput.addEventListener('input', function() {
        let price = 0;
        switch(wifiTypeSelect.value) {
            case 'wifi100':
                price = 100;
                break;
            case 'wifi150':
                price = 150;
                break;
            case 'wifi200':
                price = 200;
                break;
            case 'wifi500':
                price = 500;
                break;
            case 'wifi2000':
                price = 2000;
                break;
        }
        
        if (price && this.value) {
            wifiTotalInput.value = price * this.value;
        }
    });
    
    // Soumission du formulaire WiFi
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const date = document.getElementById('wifiDate').value;
        const wifiType = wifiTypeSelect.options[wifiTypeSelect.selectedIndex].text;
        const quantity = parseInt(wifiQuantityInput.value);
        const total = parseFloat(wifiTotalInput.value);
        
        // Créer un nouvel objet de vente WiFi (qui est aussi une vente normale)
        const newSale = {
            date: date,
            product: wifiType,
            quantity: quantity,
            unitPrice: total / quantity,
            total: total
        };
        
        // Ajouter la vente à la table des ventes
        addSaleToTable(newSale);
        
        // Recalculer les ventes du jour
        calculateTodaySales();
        
        // Mettre à jour le total des ventes WiFi
        updateTotalWifi(total);
        
        // Réinitialiser le formulaire
        form.reset();
        document.getElementById('wifiDate').valueAsDate = new Date();
        wifiTotalInput.value = '';
        
        // Afficher un message de confirmation
        alert('Forfait WiFi enregistré avec succès !');
    });
}

function initProductForm() {
    const form = document.getElementById('productForm');
    
    // Soumission du formulaire de produit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = document.getElementById('productName').value;
        const categorySelect = document.getElementById('productCategory');
        const category = categorySelect.options[categorySelect.selectedIndex].text;
        const price = parseFloat(document.getElementById('productPrice').value);
        const stock = parseInt(document.getElementById('stockQuantity').value);
        
        // Créer un nouvel objet de produit
        const newProduct = {
            name: name,
            category: category,
            price: price,
            stock: stock
        };
        
        // Ajouter le produit à la table des produits
        addProductToTable(newProduct);
        
        // Réinitialiser le formulaire
        form.reset();
        
        // Afficher un message de confirmation
        alert('Produit ajouté avec succès !');
    });
}

// Fonctions de remplissage des tableaux
function populateMonthlyTable(data) {
    const tableBody = document.getElementById('monthlyTable');
    tableBody.innerHTML = '';
    
    data.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.month}</td>
            <td>${formatNumber(item.tontine)}</td>
            <td>${formatNumber(item.affiza)}</td>
            <td>${formatNumber(item.djimen)}</td>
            <td>${formatNumber(item.internet)}</td>
            <td>${formatNumber(item.electricite)}</td>
            <td>${formatNumber(item.autres)}</td>
            <td>${formatNumber(item.entreeAutre)}</td>
            <td>${formatNumber(item.entree)}</td>
            <td>${formatNumber(item.total)}</td>
            <td class="${item.reste < 0 ? 'text-danger' : 'text-success'}">${formatNumber(item.reste)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function populateSalesTable(data) {
    const tableBody = document.getElementById('salesData');
    tableBody.innerHTML = '';
    
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${formatNumber(item.unitPrice)}</td>
            <td>${formatNumber(item.total)}</td>
            <td>
                <button class="btn btn-sm btn-outline-danger delete-sale" data-index="${index}">Supprimer</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Ajouter les écouteurs d'événements pour supprimer les ventes
    document.querySelectorAll('.delete-sale').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteSale(index);
        });
    });
}

function addSaleToTable(sale) {
    // Récupérer les données existantes
    const salesData = getSalesDataFromTable();
    
    // Ajouter la nouvelle vente
    salesData.push(sale);
    
    // Mettre à jour le tableau
    populateSalesTable(salesData);
}

function addExpenseToTable(expense) {
    const tableBody = document.getElementById('expensesData');
    
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${expense.date}</td>
        <td>${expense.category}</td>
        <td>${expense.description}</td>
        <td>${formatNumber(expense.amount)}</td>
        <td>
            <button class="btn btn-sm btn-outline-danger">Supprimer</button>
        </td>
    `;
    
    tableBody.appendChild(row);
}

function addProductToTable(product) {
    const tableBody = document.getElementById('productsData');
    
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${formatNumber(product.price)}</td>
        <td>${product.stock === 'Illimité' ? product.stock : product.stock}</td>
        <td>
            <button class="btn btn-sm btn-outline-primary">Modifier</button>
        </td>
    `;
    
    tableBody.appendChild(row);
}

function getSalesDataFromTable() {
    const salesData = [];
    const rows = document.querySelectorAll('#salesData tr');
    
    rows.forEach(row => {
        const columns = row.querySelectorAll('td');
        
        salesData.push({
            date: columns[0].textContent,
            product: columns[1].textContent,
            quantity: parseInt(columns[2].textContent),
            unitPrice: parseFloat(columns[3].textContent.replace(/\s/g, '').replace(',', '.')),
            total: parseFloat(columns[4].textContent.replace(/\s/g, '').replace(',', '.'))
        });
    });
    
    return salesData;
}

function deleteSale(index) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette vente ?')) {
        // Récupérer les données existantes
        const salesData = getSalesDataFromTable();
        
        // Supprimer la vente
        salesData.splice(index, 1);
        
        // Mettre à jour le tableau
        populateSalesTable(salesData);
        
        // Recalculer les ventes du jour
        calculateTodaySales();
    }
}

function calculateTodaySales() {
    const salesData = getSalesDataFromTable();
    const today = new Date().toISOString().slice(0, 10);
    
    // Filtrer les ventes du jour
    const todaySales = salesData.filter(sale => sale.date === today);
    
    // Calculer le total des ventes du jour
    const total = todaySales.reduce((sum, sale) => sum + sale.total, 0);
    
    // Mettre à jour l'affichage
    document.getElementById('todaySales').textContent = formatNumber(total);
    
    // Mettre à jour les top produits
    updateTopProducts(todaySales);
}

function updateTopProducts(sales) {
    const topProductsList = document.getElementById('topProducts');
    topProductsList.innerHTML = '';
    
    // Compter les occurrences de chaque produit
    const productCounts = {};
    sales.forEach(sale => {
        if (productCounts[sale.product]) {
            productCounts[sale.product] += sale.quantity;
        } else {
            productCounts[sale.product] = sale.quantity;
        }
    });
    
    // Convertir en tableau pour trier
    const sortedProducts = Object.entries(productCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3); // Prendre les 3 premiers
    
    // Afficher les top produits
    if (sortedProducts.length > 0) {
        sortedProducts.forEach(([product, count]) => {
            const li = document.createElement('li');
            li.textContent = `${product}: ${count} unités`;
            topProductsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Pas de ventes aujourd\'hui';
        topProductsList.appendChild(li);
    }
}

function updateMonthExpenses(amount) {
    const currentExpenses = parseFloat(document.getElementById('monthExpenses').textContent.replace(/\s/g, '').replace(',', '.'));
    const newTotal = currentExpenses + amount;
    document.getElementById('monthExpenses').textContent = formatNumber(newTotal);
}

function updateTotalWifi(amount) {
    const currentTotal = parseFloat(document.getElementById('totalWifi').textContent.replace(/\s/g, '').replace(',', '.'));
    const newTotal = currentTotal + amount;
    document.getElementById('totalWifi').textContent = formatNumber(newTotal);
}

// Initialisation des graphiques
function initCharts(monthlyData, wifiData, expensesData) {
    // Graphique des revenus
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: monthlyData.map(item => item.month),
            datasets: [{
                label: 'Revenus',
                data: monthlyData.map(item => item.total),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Revenus mensuels'
                }
            }
        }
    });
    
    // Graphique des dépenses
    const expensesCtx = document.getElementById('expensesChart').getContext('2d');
    new Chart(expensesCtx, {
        type: 'pie',
        data: {
            labels: ['Tontine', 'Affiza', 'Djimen', 'Internet', 'Électricité', 'Autres'],
            datasets: [{
                data: [62000, 30000, 30000, 15000, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Répartition des dépenses'
                }
            }
        }
    });
    
    // Graphique des dépenses par type
    const expensesTypeCtx = document.getElementById('expensesTypePie').getContext('2d');
    new Chart(expensesTypeCtx, {
        type: 'doughnut',
        data: {
            labels: expensesData.map(item => item.category),
            datasets: [{
                data: expensesData.map(item => item.amount),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderWidth: 1
            }]
        }
    });
    
    // Graphique des ventes WiFi
    const wifiCtx = document.getElementById('wifiChart').getContext('2d');
    new Chart(wifiCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(wifiData).map(key => key.replace('wifi', 'WIFI ')),
            datasets: [{
                label: 'Quantité vendue',
                data: Object.values(wifiData).map(item => item.quantity),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Ventes par type de forfait WiFi'
                }
            }
        }
    });
}