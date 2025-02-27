// Variables globales
let currentLanguage = 'fr';

// Dictionnaire de traductions
const translations = {
    fr: {
        title: "Calculateur d'Automatisation",
        description: "Cet outil vous aide à déterminer si l'automatisation d'une tâche vaut l'investissement en temps.",
        taskTimeLabel: "Temps par tâche manuelle",
        taskTimeDescription: "Le temps moyen nécessaire pour effectuer la tâche une seule fois :",
        frequencyLabel: "Fréquence d'exécution",
        frequencyDescription: "Combien de fois effectuez-vous cette tâche :",
        perDay: "par jour",
        perWeek: "par semaine",
        perMonth: "par mois",
        automationTimeLabel: "Temps d'automatisation",
        automationTimeDescription: "Le temps nécessaire pour automatiser cette tâche :",
        hourlyRateLabel: "Taux horaire",
        hourlyRateDescription: "Votre taux horaire pour calculer les économies monétaires :",
        calculateButton: "Calculer",
        resetButton: "Réinitialiser",
        resultTitle: "Résultat",
        recommendedTitle: "Automatisation Recommandée",
        notRecommendedTitle: "Automatisation Non Recommandée",
        dailySavingsLabel: "Économie quotidienne :",
        automationTimeResultLabel: "Temps d'automatisation :",
        breakEvenLabel: "Seuil de rentabilité :",
        breakEvenDateLabel: "Date de rentabilité :",
        yearlySavingsLabel: "Économie annuelle :",
        minutesUnit: "minutes",
        secondsUnit: "secondes",
        hoursUnit: "heures",
        daysUnit: "jours",
        and: "et",
        ofWork: "de travail",
        moreThanYear: "(plus d'un an)",
        considerOtherOptions: "Envisagez d'autres options ou de simplifier la tâche avant d'automatiser.",
        fillAllFields: "Veuillez remplir tous les champs.",
        taskTimeInput: "0",
        frequencyInput: "10",
        automationTimeInput: "2",
        hourlyRateInput: "25€",
        moneySavingsLabel: "Économies monétaires",
        monthlySavingsLabel: "Par mois :",
        yearlySavingsMoneyLabel: "Par an :",
        currencyUnit: "€",
        darkMode: "Mode sombre",
        lightMode: "Mode clair",
        saveCalculation: "Sauvegarder",
        shareCalculation: "Partager",
        loadCalculation: "Charger",
        calculationSaved: "Calcul sauvegardé avec succès !",
        noSavedCalculations: "Aucun calcul sauvegardé.",
        load: "Charger",
        cancel: "Annuler",
        linkCopied: "Lien copié dans le presse-papier !",
        copyError: "Erreur lors de la copie du lien.",
        shareText: "Voici mon calcul d'automatisation",
        sharedCalculationLoaded: "Calcul partagé chargé avec succès !",
        withoutAutomation: "Sans automatisation",
        withAutomation: "Avec automatisation",
        breakEvenPoint: "Point de rentabilité",
        months: "Mois",
        cost: "Coût",
        timeSavingsLabel: "Économie de temps",
        dailySavingsMoneyLabel: "Par jour :",
        roiLabel: "Retour sur investissement (1 an) :",
        chartTitle: "Visualisation des économies",
        saveButton: "Sauvegarder",
        loadButton: "Charger",
        shareButton: "Partager",
        copyright: " 2025 Calculateur d'Automatisation",
        footerText: "Conçu pour vous aider à prendre des décisions éclairées sur l'automatisation de vos tâches.",
        appTitle: "Calculateur d'Automatisation"
    },
    en: {
        title: "Automation Calculator",
        description: "This tool helps you determine if automating a task is worth the time investment.",
        taskTimeLabel: "Time per manual task",
        taskTimeDescription: "The average time needed to perform the task once:",
        frequencyLabel: "Execution frequency",
        frequencyDescription: "How often do you perform this task:",
        perDay: "per day",
        perWeek: "per week",
        perMonth: "per month",
        automationTimeLabel: "Automation time",
        automationTimeDescription: "The time needed to automate this task:",
        hourlyRateLabel: "Hourly rate",
        hourlyRateDescription: "Your hourly rate to calculate monetary savings:",
        calculateButton: "Calculate",
        resetButton: "Reset",
        resultTitle: "Result",
        recommendedTitle: "Automation Recommended",
        notRecommendedTitle: "Automation Not Recommended",
        dailySavingsLabel: "Daily savings:",
        automationTimeResultLabel: "Automation time:",
        breakEvenLabel: "Break-even point:",
        breakEvenDateLabel: "Break-even date:",
        yearlySavingsLabel: "Yearly savings:",
        minutesUnit: "minutes",
        secondsUnit: "seconds",
        hoursUnit: "hours",
        daysUnit: "days",
        and: "and",
        ofWork: "of work",
        moreThanYear: "(more than a year)",
        considerOtherOptions: "Consider other options or simplifying the task before automating.",
        fillAllFields: "Please fill in all fields.",
        taskTimeInput: "0",
        frequencyInput: "10",
        automationTimeInput: "2",
        hourlyRateInput: "$25",
        moneySavingsLabel: "Money Savings",
        monthlySavingsLabel: "Per month:",
        yearlySavingsMoneyLabel: "Per year:",
        currencyUnit: "$",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        saveCalculation: "Save",
        shareCalculation: "Share",
        loadCalculation: "Load",
        calculationSaved: "Calculation saved successfully!",
        noSavedCalculations: "No saved calculations.",
        load: "Load",
        cancel: "Cancel",
        linkCopied: "Link copied to clipboard!",
        copyError: "Error copying link.",
        shareText: "Check out my automation calculation",
        sharedCalculationLoaded: "Shared calculation loaded successfully!",
        withoutAutomation: "Without automation",
        withAutomation: "With automation",
        breakEvenPoint: "Break-even point",
        months: "Months",
        cost: "Cost",
        timeSavingsLabel: "Time Savings",
        dailySavingsMoneyLabel: "Per day:",
        roiLabel: "Return on Investment (1 year):",
        chartTitle: "Savings Visualization",
        saveButton: "Save",
        loadButton: "Load",
        shareButton: "Share",
        copyright: " 2025 Automation Calculator",
        footerText: "Designed to help you make informed decisions about task automation.",
        appTitle: "Automation Calculator"
    }
};

// Éléments du DOM
let taskTimeMinutesInput;
let taskTimeSecondsInput;
let frequencyInput;
let frequencyUnitSelect;
let automationTimeHoursInput;
let automationTimeMinutesInput;
let hourlyRateInput;
let calculateBtn;
let resetBtn;
let resultDiv;
let resultText;
let breakEvenDate;
let languageSwitch;
let darkModeToggle;
let saveButton;
let shareButton;
let loadButton;

// Fonction pour formater la monnaie selon la langue
function formatMoney(amount, language) {
    const currency = translations[language].currencyUnit;
    return language === 'fr' ? amount.toFixed(2) + ' ' + currency : currency + amount.toFixed(2);
}

// Taux de conversion (à mettre à jour selon les taux actuels)
const conversionRates = {
    eurToUsd: 1.08, // 1 EUR = 1.08 USD
    usdToEur: 0.93  // 1 USD = 0.93 EUR
};

// Fonction pour convertir le montant selon la langue
function convertCurrency(amount, fromLanguage, toLanguage) {
    if (fromLanguage === toLanguage) {
        return amount;
    }
    
    if (fromLanguage === 'fr' && toLanguage === 'en') {
        // Conversion de EUR à USD
        return amount * conversionRates.eurToUsd;
    } else if (fromLanguage === 'en' && toLanguage === 'fr') {
        // Conversion de USD à EUR
        return amount * conversionRates.usdToEur;
    }
    
    return amount;
}

// Fonction pour appliquer les traductions
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
    
    // Mettre à jour les options du sélecteur de fréquence
    const frequencyOptions = frequencyUnitSelect.querySelectorAll('option');
    frequencyOptions.forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            option.textContent = translations[currentLanguage][key];
        }
    });
    
    // Mettre à jour les placeholders des champs de saisie
    taskTimeMinutesInput.placeholder = translations[currentLanguage].taskTimeInput;
    taskTimeSecondsInput.placeholder = translations[currentLanguage].taskTimeInput;
    frequencyInput.placeholder = translations[currentLanguage].frequencyInput;
    automationTimeHoursInput.placeholder = translations[currentLanguage].automationTimeInput;
    automationTimeMinutesInput.placeholder = translations[currentLanguage].automationTimeInput;
    hourlyRateInput.placeholder = currentLanguage === 'fr' ? "25€" : "$25";
    
    // Mettre à jour le titre de la page
    document.title = translations[currentLanguage].title;
    
    // Mettre à jour les symboles de devise dans les résultats monétaires
    const moneySavingsElements = document.querySelectorAll('.money-savings');
    moneySavingsElements.forEach(el => {
        if (el.textContent !== '0' && el.textContent !== '0.00') {
            const value = parseFloat(el.textContent.replace(/[^\d.-]/g, ''));
            el.textContent = formatMoney(value, currentLanguage);
        } else {
            el.textContent = formatMoney(0, currentLanguage);
        }
    });
    
    // Mettre à jour le texte du mode sombre
    const darkModeLabel = document.querySelector('label[for="darkModeToggle"]');
    if (darkModeLabel) {
        darkModeLabel.textContent = translations[currentLanguage].darkMode;
    }
}

// Fonction pour calculer le ROI
function calculateROI() {
    // Récupérer les valeurs du formulaire
    const taskTimeMinutes = parseFloat(taskTimeMinutesInput.value) || 0;
    const taskTimeSeconds = parseFloat(taskTimeSecondsInput.value) || 0;
    const taskTimeInMinutes = taskTimeMinutes + (taskTimeSeconds / 60);
    
    const frequency = parseFloat(frequencyInput.value) || 0;
    const frequencyUnit = frequencyUnitSelect.value;
    
    // Convertir la fréquence en base quotidienne
    let dailyFrequency = frequency;
    if (frequencyUnit === 'weekly') {
        dailyFrequency = frequency / 5; // 5 jours ouvrés par semaine
    } else if (frequencyUnit === 'monthly') {
        dailyFrequency = frequency / 20; // 20 jours ouvrés par mois
    }
    
    const automationTimeHours = parseFloat(automationTimeHoursInput.value) || 0;
    const automationTimeMinutes = parseFloat(automationTimeMinutesInput.value) || 0;
    const automationTime = automationTimeHours + (automationTimeMinutes / 60);
    
    const hourlyRate = parseFloat(hourlyRateInput.value) || 0;

    if (!taskTimeInMinutes || !frequency || !automationTime || !hourlyRate) {
        alert(translations[currentLanguage].fillAllFields);
        return;
    }
    
    // Conversion en minutes
    const automationTimeInMinutes = automationTime * 60;
    const dailySavings = taskTimeInMinutes * dailyFrequency;
    const daysToBreakEven = Math.ceil(automationTimeInMinutes / dailySavings);

    document.getElementById('results').classList.remove('hidden');
    
    // Calcul des économies annuelles en jours/heures/minutes
    const yearlyMinutesSaved = dailySavings * 260; // 260 jours ouvrés par an
    const yearlyDaysSaved = Math.floor(yearlyMinutesSaved / (60 * 8)); // 8 heures par jour
    const yearlyHoursSaved = Math.floor((yearlyMinutesSaved - (yearlyDaysSaved * 60 * 8)) / 60);
    const yearlyMinutesRemaining = Math.round(yearlyMinutesSaved - (yearlyDaysSaved * 60 * 8) - (yearlyHoursSaved * 60));
    
    // Formatage des valeurs pour l'affichage
    const formattedDailySavings = dailySavings.toFixed(1);
    const formattedAutomationTime = automationTimeInMinutes.toFixed(0);
    
    // Calcul des économies monétaires
    const dailyMoneySavings = (dailySavings / 60) * hourlyRate;
    const monthlyMoneySavings = dailyMoneySavings * 20; // 20 jours ouvrés par mois
    const yearlyMoneySavings = dailyMoneySavings * 260; // 260 jours ouvrés par an
    
    // Formatage des valeurs monétaires
    const formattedDailyMoneySavings = formatMoney(dailyMoneySavings, currentLanguage);
    const formattedMonthlyMoneySavings = formatMoney(monthlyMoneySavings, currentLanguage);
    const formattedYearlyMoneySavings = formatMoney(yearlyMoneySavings, currentLanguage);

    const t = translations[currentLanguage]; // Raccourci pour les traductions
    
    // Déterminer si l'automatisation est recommandée (seuil de rentabilité < 1 an)
    const isRecommended = daysToBreakEven <= 260;
    
    // Mettre à jour les valeurs d'économie de temps
    document.getElementById('dailyTimeSaved').textContent = formattedDailySavings + ' ' + t.minutesUnit;
    document.getElementById('monthlyTimeSaved').textContent = (dailySavings * 20).toFixed(1) + ' ' + t.minutesUnit;
    document.getElementById('yearlyTimeSaved').textContent = (dailySavings * 260).toFixed(1) + ' ' + t.minutesUnit;
    
    // Mettre à jour les valeurs d'économie monétaire
    document.getElementById('dailyMoneySaved').textContent = formattedDailyMoneySavings;
    document.getElementById('monthlyMoneySaved').textContent = formattedMonthlyMoneySavings;
    document.getElementById('yearlyMoneySaved').textContent = formattedYearlyMoneySavings;
    
    // Mettre à jour le point de rentabilité
    document.getElementById('breakEvenDate').textContent = daysToBreakEven + ' ' + t.daysUnit;
    
    // Calculer et mettre à jour le ROI
    const roi = ((yearlyMoneySavings - (automationTime * hourlyRate)) / (automationTime * hourlyRate) * 100).toFixed(0);
    document.getElementById('roi').textContent = roi + '%';
    
    // Mettre à jour la bannière de recommandation
    const recommendationBanner = document.getElementById('recommendationBanner');
    recommendationBanner.textContent = isRecommended ? t.recommendedTitle : t.notRecommendedTitle;
    recommendationBanner.className = `mb-4 p-3 rounded-lg text-center text-white font-bold text-xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${isRecommended ? 'bg-green-600' : 'bg-red-600'}`;
    
    // Ajouter une animation pour attirer l'attention
    recommendationBanner.classList.add('animate-pulse');
    setTimeout(() => {
        recommendationBanner.classList.remove('animate-pulse');
    }, 2000);
    
    // Construire le texte de résultat
    let resultHTML = '';
    
    resultHTML += `<p class="mt-2"><strong>${t.dailySavingsLabel}</strong> ${formattedDailySavings} ${t.minutesUnit}</p>`;
    resultHTML += `<p><strong>${t.automationTimeResultLabel}</strong> ${formattedAutomationTime} ${t.minutesUnit}</p>`;
    resultHTML += `<p><strong>${t.breakEvenLabel}</strong> ${daysToBreakEven} ${t.daysUnit}</p>`;
    
    // Économies annuelles
    resultHTML += `<p class="mt-2"><strong>${t.yearlySavingsLabel}</strong> `;
    if (yearlyDaysSaved > 0) {
        resultHTML += `${yearlyDaysSaved} ${t.daysUnit} `;
    }
    if (yearlyHoursSaved > 0) {
        resultHTML += `${yearlyHoursSaved} ${t.hoursUnit} `;
    }
    if (yearlyMinutesRemaining > 0 || (yearlyDaysSaved === 0 && yearlyHoursSaved === 0)) {
        resultHTML += `${yearlyMinutesRemaining} ${t.minutesUnit} `;
    }
    resultHTML += `${t.ofWork}</p>`;
    
    resultText.innerHTML = resultHTML;
    
    // Afficher la date de rentabilité
    const today = new Date();
    if (daysToBreakEven > 365) {
        breakEvenDate.innerHTML = `<p><strong>${t.breakEvenDateLabel}</strong> ${t.moreThanYear}</p>`;
        if (!isRecommended) {
            breakEvenDate.innerHTML += `<p class="text-red-600">${t.considerOtherOptions}</p>`;
        }
    } else {
        const breakEvenDateObj = new Date(today);
        breakEvenDateObj.setDate(today.getDate() + daysToBreakEven);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        breakEvenDate.innerHTML = `<p><strong>${t.breakEvenDateLabel}</strong> ${breakEvenDateObj.toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'en-US', options)}</p>`;
    }
    
    // Créer ou mettre à jour le graphique
    createOrUpdateChart(dailySavings, automationTimeInMinutes);
}

// Fonction pour créer ou mettre à jour le graphique
function createOrUpdateChart(dailySavings, automationTimeInMinutes) {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    const t = translations[currentLanguage];
    
    // Calculer les données pour le graphique
    const months = Array.from({length: 12}, (_, i) => i + 1);
    const withoutAutomation = months.map(month => 0);
    const withAutomation = months.map(month => {
        const totalMinutesSaved = dailySavings * 20 * month;
        const netMinutesSaved = totalMinutesSaved - automationTimeInMinutes;
        return netMinutesSaved > 0 ? netMinutesSaved / 60 : 0; // Convertir en heures
    });
    
    // Trouver le point de rentabilité en mois
    const breakEvenMonth = Math.ceil(automationTimeInMinutes / (dailySavings * 20));
    
    // Détruire le graphique existant s'il existe
    if (window.savingsChart) {
        window.savingsChart.destroy();
    }
    
    // Créer le nouveau graphique
    window.savingsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months.map(m => m.toString()),
            datasets: [
                {
                    label: t.withoutAutomation,
                    data: withoutAutomation,
                    borderColor: '#e53e3e',
                    backgroundColor: 'rgba(229, 62, 62, 0.1)',
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: t.withAutomation,
                    data: withAutomation,
                    borderColor: '#38a169',
                    backgroundColor: 'rgba(56, 161, 105, 0.1)',
                    borderWidth: 2,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: t.months
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: t.hoursUnit
                    },
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw.toFixed(1) + ' ' + t.hoursUnit;
                        }
                    }
                },
                annotation: {
                    annotations: breakEvenMonth <= 12 ? {
                        line1: {
                            type: 'line',
                            xMin: breakEvenMonth,
                            xMax: breakEvenMonth,
                            borderColor: '#4c51bf',
                            borderWidth: 2,
                            label: {
                                content: t.breakEvenPoint,
                                enabled: true,
                                position: 'top'
                            }
                        }
                    } : {}
                }
            }
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments du DOM
    taskTimeMinutesInput = document.getElementById('taskTimeMinutes');
    taskTimeSecondsInput = document.getElementById('taskTimeSeconds');
    frequencyInput = document.getElementById('frequency');
    frequencyUnitSelect = document.getElementById('frequencyUnit');
    automationTimeHoursInput = document.getElementById('automationTimeHours');
    automationTimeMinutesInput = document.getElementById('automationTimeMinutes');
    hourlyRateInput = document.getElementById('hourlyRate');
    calculateBtn = document.getElementById('calculateBtn');
    resetBtn = document.getElementById('resetBtn');
    resultDiv = document.getElementById('results');
    resultText = document.getElementById('resultText');
    breakEvenDate = document.getElementById('breakEvenDate');
    languageSwitch = document.getElementById('languageSwitch');
    darkModeToggle = document.getElementById('darkModeToggle');
    saveButton = document.getElementById('saveCalculation');
    shareButton = document.getElementById('shareCalculation');
    loadButton = document.getElementById('loadCalculation');
    
    // Charger la langue préférée
    loadLanguagePreference();
    
    // Ajouter les écouteurs d'événements
    calculateBtn.addEventListener('click', calculateROI);
    resetBtn.addEventListener('click', resetForm);
    languageSwitch.addEventListener('change', toggleLanguage);
    darkModeToggle.addEventListener('change', toggleDarkMode);
    saveButton.addEventListener('click', saveCalculation);
    shareButton.addEventListener('click', shareCalculation);
    loadButton.addEventListener('click', loadCalculation);
});

// Fonction pour charger la préférence de langue
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        languageSwitch.value = currentLanguage;
    }
    document.documentElement.setAttribute('lang', currentLanguage);
    applyTranslations();
}

// Fonction pour basculer entre les langues
function toggleLanguage() {
    const previousLanguage = currentLanguage;
    currentLanguage = languageSwitch.value;
    localStorage.setItem('language', currentLanguage);
    document.documentElement.setAttribute('lang', currentLanguage);
    applyTranslations();
    
    // Mettre à jour le taux horaire en fonction de la langue
    const hourlyRate = parseFloat(hourlyRateInput.value);
    if (hourlyRate) {
        const convertedHourlyRate = convertCurrency(hourlyRate, previousLanguage, currentLanguage);
        hourlyRateInput.value = convertedHourlyRate.toFixed(2);
    }
    
    // Si des résultats sont affichés, recalculer pour mettre à jour les textes
    if (!document.getElementById('results').classList.contains('hidden')) {
        calculateROI();
    } else {
        // Réinitialiser les sections de résultats
        resultText.innerHTML = '';
        breakEvenDate.innerHTML = '';
        document.getElementById('moneySavings').innerHTML = '';
    }
}

// Fonction pour réinitialiser le formulaire
function resetForm() {
    taskTimeMinutesInput.value = '';
    taskTimeSecondsInput.value = '';
    frequencyInput.value = '';
    frequencyUnitSelect.value = 'daily';
    automationTimeHoursInput.value = '';
    automationTimeMinutesInput.value = '';
    hourlyRateInput.value = '';
    document.getElementById('results').classList.add('hidden');
}

// Fonction pour initialiser le mode sombre
function initializeDarkMode() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Vérifier si l'utilisateur a déjà une préférence enregistrée
    const savedTheme = localStorage.getItem('theme');
    
    // Appliquer le thème selon les préférences
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.classList.add('dark');
        darkModeToggle.checked = true;
    }
    
    // Écouter les changements du toggle
    darkModeToggle.addEventListener('change', toggleDarkMode);
}

// Fonction pour basculer le mode sombre/clair
function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // Ajouter une animation de transition
    darkModeToggle.classList.add('animate-pulse');
    setTimeout(() => {
        darkModeToggle.classList.remove('animate-pulse');
    }, 500);
}

// Fonction pour sauvegarder le calcul actuel
function saveCalculation() {
    const formData = getFormData();
    const results = calculateResults(formData);
    
    // Créer un objet avec toutes les données
    const calculationData = {
        formData: formData,
        results: results,
        timestamp: new Date().toISOString(),
        language: currentLanguage
    };
    
    // Récupérer les calculs existants ou initialiser un tableau vide
    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '[]');
    
    // Ajouter le nouveau calcul
    savedCalculations.push(calculationData);
    
    // Sauvegarder dans le localStorage
    localStorage.setItem('savedCalculations', JSON.stringify(savedCalculations));
    
    // Afficher un message de confirmation
    alert(translations[currentLanguage].calculationSaved);
}

// Fonction pour charger un calcul sauvegardé
function loadCalculation() {
    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '[]');
    
    if (savedCalculations.length === 0) {
        alert(translations[currentLanguage].noSavedCalculations);
        return;
    }
    
    // Créer une liste des calculs sauvegardés
    let options = '';
    savedCalculations.forEach((calc, index) => {
        const date = new Date(calc.timestamp).toLocaleString();
        const savings = calc.results.moneySavedPerYear;
        options += `<option value="${index}">${date} - ${formatMoney(savings, calc.language)}</option>`;
    });
    
    // Créer un élément select pour choisir le calcul à charger
    const selectHTML = `
        <div style="margin-bottom: 1rem;">
            <select id="calculationSelect" class="form-select">
                ${options}
            </select>
        </div>
    `;
    
    // Afficher une boîte de dialogue pour sélectionner le calcul
    const container = document.createElement('div');
    container.innerHTML = selectHTML;
    
    const loadDialog = document.createElement('dialog');
    loadDialog.classList.add('gradient-border');
    loadDialog.style.padding = '1rem';
    loadDialog.style.borderRadius = '0.5rem';
    loadDialog.style.maxWidth = '90%';
    loadDialog.style.width = '400px';
    
    const title = document.createElement('h3');
    title.textContent = translations[currentLanguage].loadCalculation;
    title.style.marginTop = '0';
    
    const loadButton = document.createElement('button');
    loadButton.textContent = translations[currentLanguage].load;
    loadButton.classList.add('btn-primary');
    loadButton.style.marginRight = '0.5rem';
    
    const cancelButton = document.createElement('button');
    cancelButton.textContent = translations[currentLanguage].cancel;
    cancelButton.classList.add('btn-secondary');
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.marginTop = '1rem';
    
    buttonContainer.appendChild(loadButton);
    buttonContainer.appendChild(cancelButton);
    
    loadDialog.appendChild(title);
    loadDialog.appendChild(container);
    loadDialog.appendChild(buttonContainer);
    
    document.body.appendChild(loadDialog);
    loadDialog.showModal();
    
    // Gérer les événements des boutons
    cancelButton.addEventListener('click', () => {
        loadDialog.close();
        document.body.removeChild(loadDialog);
    });
    
    loadButton.addEventListener('click', () => {
        const select = document.getElementById('calculationSelect');
        const selectedIndex = select.value;
        const selectedCalculation = savedCalculations[selectedIndex];
        
        // Charger les données du formulaire
        document.getElementById('taskTimeMinutes').value = selectedCalculation.formData.taskTimeMinutes;
        document.getElementById('taskTimeSeconds').value = selectedCalculation.formData.taskTimeSeconds;
        document.getElementById('frequency').value = selectedCalculation.formData.frequency;
        document.getElementById('frequencyUnit').value = selectedCalculation.formData.frequencyUnit;
        document.getElementById('automationTimeHours').value = selectedCalculation.formData.automationTimeHours;
        document.getElementById('automationTimeMinutes').value = selectedCalculation.formData.automationTimeMinutes;
        
        // Convertir le taux horaire si nécessaire
        let hourlyRate = parseFloat(selectedCalculation.formData.hourlyRate);
        const savedCurrency = selectedCalculation.formData.currency || (selectedCalculation.language === 'fr' ? 'EUR' : 'USD');
        const currentCurrency = currentLanguage === 'fr' ? 'EUR' : 'USD';
        
        if (savedCurrency !== currentCurrency) {
            // Convertir le taux horaire en fonction des devises
            if (savedCurrency === 'EUR' && currentCurrency === 'USD') {
                hourlyRate = hourlyRate * conversionRates.eurToUsd;
            } else if (savedCurrency === 'USD' && currentCurrency === 'EUR') {
                hourlyRate = hourlyRate * conversionRates.usdToEur;
            }
        }
        
        document.getElementById('hourlyRate').value = hourlyRate.toFixed(2);
        
        // Mettre à jour la langue si nécessaire
        if (selectedCalculation.language !== currentLanguage) {
            currentLanguage = selectedCalculation.language;
            languageSwitch.value = currentLanguage;
            applyTranslations();
        }
        
        // Calculer et afficher les résultats
        calculateROI();
        
        loadDialog.close();
        document.body.removeChild(loadDialog);
    });
}

// Fonction pour partager le calcul actuel
function shareCalculation() {
    const formData = getFormData();
    const results = calculateResults(formData);
    
    // Créer un objet avec toutes les données
    const calculationData = {
        formData: formData,
        results: results,
        language: currentLanguage
    };
    
    // Encoder les données en base64
    const encodedData = btoa(JSON.stringify(calculationData));
    
    // Créer l'URL avec les données
    const shareUrl = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;
    
    // Vérifier si l'API de partage est disponible
    if (navigator.share) {
        navigator.share({
            title: translations[currentLanguage].title,
            text: translations[currentLanguage].shareText,
            url: shareUrl
        }).catch(error => {
            console.error('Erreur lors du partage:', error);
            copyToClipboard(shareUrl);
        });
    } else {
        // Sinon, copier l'URL dans le presse-papier
        copyToClipboard(shareUrl);
    }
}

// Fonction pour copier du texte dans le presse-papier
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        alert(translations[currentLanguage].linkCopied);
    } catch (err) {
        console.error('Erreur lors de la copie du lien:', err);
        alert(translations[currentLanguage].copyError);
    } finally {
        document.body.removeChild(textarea);
    }
}

// Fonction pour récupérer les données du formulaire
function getFormData() {
    return {
        taskTimeMinutes: taskTimeMinutesInput.value,
        taskTimeSeconds: taskTimeSecondsInput.value,
        frequency: frequencyInput.value,
        frequencyUnit: frequencyUnitSelect.value,
        automationTimeHours: automationTimeHoursInput.value,
        automationTimeMinutes: automationTimeMinutesInput.value,
        hourlyRate: hourlyRateInput.value,
        currency: currentLanguage === 'fr' ? 'EUR' : 'USD',
        language: currentLanguage
    };
}

// Fonction pour calculer les résultats
function calculateResults(data) {
    // Temps économisé par mois (en heures)
    const timeSavedPerMonth = (data.frequency * (data.taskTimeMinutes + (data.taskTimeSeconds / 60))) / 60;
    
    // Temps économisé par an (en heures)
    const timeSavedPerYear = timeSavedPerMonth * 12;
    
    // Argent économisé par mois
    const moneySavedPerMonth = timeSavedPerMonth * data.hourlyRate;
    
    // Argent économisé par an
    const moneySavedPerYear = moneySavedPerMonth * 12;
    
    // Coût de l'automatisation (argent + temps)
    const automationCost = (data.automationTimeHours + (data.automationTimeMinutes / 60)) * data.hourlyRate;
    
    // Temps de rentabilité (en mois)
    const breakEvenMonths = automationCost / moneySavedPerMonth;
    
    // ROI sur un an
    const roi = ((moneySavedPerYear - automationCost) / automationCost) * 100;
    
    return {
        timeSavedPerMonth,
        timeSavedPerYear,
        moneySavedPerMonth,
        moneySavedPerYear,
        automationCost,
        breakEvenMonths,
        roi
    };
}

// Vérifier s'il y a des données partagées dans l'URL
function checkForSharedData() {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('data');
    
    if (encodedData) {
        try {
            // Décoder les données
            const decodedData = JSON.parse(atob(encodedData));
            
            // Remplir le formulaire avec les données
            document.getElementById('taskTimeMinutes').value = decodedData.formData.taskTimeMinutes;
            document.getElementById('taskTimeSeconds').value = decodedData.formData.taskTimeSeconds;
            document.getElementById('frequency').value = decodedData.formData.frequency;
            document.getElementById('frequencyUnit').value = decodedData.formData.frequencyUnit;
            document.getElementById('automationTimeHours').value = decodedData.formData.automationTimeHours;
            document.getElementById('automationTimeMinutes').value = decodedData.formData.automationTimeMinutes;
            document.getElementById('hourlyRate').value = decodedData.formData.hourlyRate;
            
            // Mettre à jour la langue si nécessaire
            if (decodedData.language !== currentLanguage) {
                currentLanguage = decodedData.language;
                updateLanguage();
            }
            
            // Calculer et afficher les résultats
            calculateROI();
            
            // Afficher un message
            setTimeout(() => {
                alert(translations[currentLanguage].sharedCalculationLoaded);
            }, 500);
        } catch (error) {
            console.error('Erreur lors du décodage des données partagées:', error);
        }
    }
}

// Initialisation du mode sombre
initializeDarkMode();

// Vérifier s'il y a des données partagées dans l'URL au chargement
window.addEventListener('DOMContentLoaded', function() {
    checkForSharedData();
});

// Mettre à jour la fonction de changement de langue pour prendre en compte le graphique
const originalUpdateLanguage = updateLanguage;
updateLanguage = function() {
    originalUpdateLanguage();
};
