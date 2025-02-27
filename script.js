// Variables globales
let currentLanguage = 'fr';

// Dictionnaire de traductions
const translations = {
    fr: {
        title: "Calculateur d'Automatisation",
        description: "Cet outil vous aide à déterminer si l'automatisation d'une tâche vaut l'investissement en temps.",
        howItWorksTitle: "",
        howItWorksStep1: "",
        howItWorksStep2: "",
        howItWorksStep3: "",
        howItWorksStep4: "",
        exampleTitle1: "",
        exampleText1: "",
        exampleTitle2: "",
        exampleText2: "",
        servicesTitle: "",
        service1: "",
        service2: "",
        service3: "",
        service4: "",
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
        dailySavingsLabel: "Par jour :",
        automationTimeResultLabel: "Temps d'automatisation :",
        breakEvenLabel: "Point de rentabilité :",
        breakEvenDateLabel: "Date de rentabilité :",
        yearlySavingsLabel: "Par an :",
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
        moneySavingsLabel: "Économie monétaire",
        monthlySavingsLabel: "Par mois :",
        yearlySavingsMoneyLabel: "Par an :",
        currencyUnit: "€",
        darkMode: "Mode sombre",
        lightMode: "Mode clair",
        saveButton: "Sauvegarder",
        shareButton: "Partager",
        loadButton: "Charger",
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
        copyright: " 2025 Calculateur d'Automatisation",
        footerText: "Conçu pour vous aider à prendre des décisions éclairées sur l'automatisation de vos tâches.",
        appTitle: "Calculateur d'Automatisation",
        french: "Français",
        english: "English",
        disclaimerNote: "Note : Ces résultats sont fournis à titre indicatif et constituent une estimation approximative. Plusieurs facteurs peuvent influencer les résultats. Ce calculateur ne remplace en aucun cas un diagnostic ou un audit professionnel.",
        ctaTitle: "Besoin d'un audit professionnel ?",
        ctaText: "Contactez-moi pour une analyse approfondie de vos processus et découvrez comment l'automatisation peut transformer votre productivité.",
        ctaButton: "Prendre rendez-vous"
    },
    en: {
        title: "Automation Calculator",
        description: "This tool helps you determine if automating a task is worth the time investment.",
        howItWorksTitle: "",
        howItWorksStep1: "",
        howItWorksStep2: "",
        howItWorksStep3: "",
        howItWorksStep4: "",
        exampleTitle1: "",
        exampleText1: "",
        exampleTitle2: "",
        exampleText2: "",
        servicesTitle: "",
        service1: "",
        service2: "",
        service3: "",
        service4: "",
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
        dailySavingsLabel: "Per day:",
        automationTimeResultLabel: "Automation time:",
        breakEvenLabel: "Break-even point:",
        breakEvenDateLabel: "Break-even date:",
        yearlySavingsLabel: "Per year:",
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
        moneySavingsLabel: "Money savings",
        monthlySavingsLabel: "Per month:",
        yearlySavingsMoneyLabel: "Per year:",
        currencyUnit: "$",
        darkMode: "Dark mode",
        lightMode: "Light mode",
        saveButton: "Save",
        shareButton: "Share",
        loadButton: "Load",
        calculationSaved: "Calculation saved successfully!",
        noSavedCalculations: "No saved calculations.",
        load: "Load",
        cancel: "Cancel",
        linkCopied: "Link copied to clipboard!",
        copyError: "Error copying link.",
        shareText: "Here's my automation calculation",
        sharedCalculationLoaded: "Shared calculation loaded successfully!",
        withoutAutomation: "Without automation",
        withAutomation: "With automation",
        breakEvenPoint: "Break-even point",
        months: "Months",
        cost: "Cost",
        timeSavingsLabel: "Time savings",
        dailySavingsMoneyLabel: "Per day:",
        roiLabel: "Return on investment (1 year):",
        chartTitle: "Savings visualization",
        copyright: " 2025 Automation Calculator",
        footerText: "Designed to help you make informed decisions about automating your tasks.",
        appTitle: "Automation Calculator",
        french: "Français",
        english: "English",
        disclaimerNote: "Note: These results are provided for informational purposes only and represent an approximate estimate. Several factors may influence the results. This calculator does not replace a professional diagnosis or audit in any way.",
        ctaTitle: "Need a professional audit?",
        ctaText: "Contact me for an in-depth analysis of your processes and discover how automation can transform your productivity.",
        ctaButton: "Schedule a meeting"
    }
};

// Fonction pour calculer le ROI
function calculateROI() {
    // Vérifier que tous les champs sont remplis
    if (!taskTimeMinutesInput.value || !frequencyInput.value || !automationTimeHoursInput.value || !hourlyRateInput.value) {
        alert(translations[currentLanguage].fillAllFields);
        return;
    }

    // Récupérer les valeurs du formulaire
    const taskTimeMinutes = parseInt(taskTimeMinutesInput.value) || 0;
    const taskTimeSeconds = parseInt(taskTimeSecondsInput.value) || 0;
    const frequency = parseInt(frequencyInput.value);
    const frequencyUnit = frequencyUnitSelect.value;
    const automationTimeHours = parseInt(automationTimeHoursInput.value) || 0;
    const automationTimeMinutes = parseInt(automationTimeMinutesInput.value) || 0;
    const hourlyRate = parseFloat(hourlyRateInput.value);

    // Convertir le temps de tâche en minutes
    const taskTimeInMinutes = taskTimeMinutes + (taskTimeSeconds / 60);

    // Convertir le temps d'automatisation en minutes
    const automationTimeInMinutes = (automationTimeHours * 60) + automationTimeMinutes;

    // Calculer le temps économisé par jour (en minutes)
    let dailySavingsMinutes;
    switch (frequencyUnit) {
        case 'day':
            dailySavingsMinutes = taskTimeInMinutes * frequency;
            break;
        case 'week':
            dailySavingsMinutes = (taskTimeInMinutes * frequency) / 7;
            break;
        case 'month':
            dailySavingsMinutes = (taskTimeInMinutes * frequency) / 30;
            break;
    }

    // Calculer le temps économisé par mois et par an (en minutes)
    const monthlySavingsMinutes = dailySavingsMinutes * 30;
    const yearlySavingsMinutes = dailySavingsMinutes * 365;

    // Calculer le point de rentabilité (en jours)
    const breakEvenDays = automationTimeInMinutes / dailySavingsMinutes;

    // Calculer le ROI sur un an
    const yearlyROI = ((yearlySavingsMinutes - automationTimeInMinutes) / automationTimeInMinutes) * 100;

    // Calculer les économies monétaires
    const hourlyRatePerMinute = hourlyRate / 60;
    const dailyMoneySaved = dailySavingsMinutes * hourlyRatePerMinute;
    const monthlyMoneySaved = monthlySavingsMinutes * hourlyRatePerMinute;
    const yearlyMoneySaved = yearlySavingsMinutes * hourlyRatePerMinute;

    // Formater les résultats pour l'affichage
    const formatTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = Math.round(minutes % 60);
        
        if (hours === 0) {
            return `${mins} ${translations[currentLanguage].minutesUnit}`;
        } else if (mins === 0) {
            return `${hours} ${translations[currentLanguage].hoursUnit}`;
        } else {
            return `${hours} ${translations[currentLanguage].hoursUnit} ${translations[currentLanguage].and} ${mins} ${translations[currentLanguage].minutesUnit}`;
        }
    };

    // Afficher les résultats
    document.getElementById('dailyTimeSaved').textContent = formatTime(dailySavingsMinutes);
    document.getElementById('monthlyTimeSaved').textContent = formatTime(monthlySavingsMinutes);
    document.getElementById('yearlyTimeSaved').textContent = formatTime(yearlySavingsMinutes);

    // Afficher les économies monétaires
    document.getElementById('dailyMoneySaved').textContent = formatMoney(dailyMoneySaved, currentLanguage);
    document.getElementById('monthlyMoneySaved').textContent = formatMoney(monthlyMoneySaved, currentLanguage);
    document.getElementById('yearlyMoneySaved').textContent = formatMoney(yearlyMoneySaved, currentLanguage);

    // Afficher le point de rentabilité
    if (breakEvenDays > 365) {
        document.getElementById('breakEvenDate').textContent = translations[currentLanguage].moreThanYear;
    } else {
        document.getElementById('breakEvenDate').textContent = `${Math.ceil(breakEvenDays)} ${translations[currentLanguage].daysUnit}`;
    }

    // Afficher le ROI
    document.getElementById('roi').textContent = `${Math.round(yearlyROI)}%`;

    // Afficher la bannière de recommandation
    const recommendationBanner = document.getElementById('recommendationBanner');
    if (breakEvenDays < 365) {
        recommendationBanner.textContent = translations[currentLanguage].recommendedTitle;
        recommendationBanner.classList.remove('bg-gradient-to-r', 'from-red-500', 'to-orange-500', 'from-amber-600', 'to-red-500');
        recommendationBanner.classList.add('bg-gradient-to-r', 'from-green-600', 'to-emerald-500', 'text-white', 'font-bold');
    } else {
        recommendationBanner.textContent = translations[currentLanguage].notRecommendedTitle;
        recommendationBanner.classList.remove('bg-gradient-to-r', 'from-green-600', 'to-emerald-500', 'from-green-500', 'to-teal-500');
        recommendationBanner.classList.add('bg-gradient-to-r', 'from-amber-600', 'to-red-500', 'text-white', 'font-bold');
    }

    // Construire le texte de résultat pour l'élément resultText
    if (resultText) {
        let resultHTML = '';
        resultHTML += `<p class="mt-2"><strong>${translations[currentLanguage].dailySavingsLabel}</strong> ${formatTime(dailySavingsMinutes)}</p>`;
        resultHTML += `<p><strong>${translations[currentLanguage].automationTimeResultLabel}</strong> ${formatTime(automationTimeInMinutes)}</p>`;
        resultHTML += `<p><strong>${translations[currentLanguage].breakEvenLabel}</strong> ${Math.ceil(breakEvenDays)} ${translations[currentLanguage].daysUnit}</p>`;
        
        // Économies annuelles
        resultHTML += `<p class="mt-2"><strong>${translations[currentLanguage].yearlySavingsLabel}</strong> `;
        const yearlyDaysSaved = Math.floor(yearlySavingsMinutes / (60 * 8)); // Jours de travail (8h)
        const yearlyHoursSaved = Math.floor((yearlySavingsMinutes - (yearlyDaysSaved * 60 * 8)) / 60);
        const yearlyMinutesRemaining = Math.round(yearlySavingsMinutes - (yearlyDaysSaved * 60 * 8) - (yearlyHoursSaved * 60));
        
        if (yearlyDaysSaved > 0) {
            resultHTML += `${yearlyDaysSaved} ${translations[currentLanguage].daysUnit} `;
        }
        if (yearlyHoursSaved > 0) {
            resultHTML += `${yearlyHoursSaved} ${translations[currentLanguage].hoursUnit} `;
        }
        if (yearlyMinutesRemaining > 0 || (yearlyDaysSaved === 0 && yearlyHoursSaved === 0)) {
            resultHTML += `${yearlyMinutesRemaining} ${translations[currentLanguage].minutesUnit} `;
        }
        resultHTML += `${translations[currentLanguage].ofWork}</p>`;
        
        resultText.innerHTML = resultHTML;
    }

    // Afficher la section des résultats
    document.getElementById('results').classList.remove('hidden');

    // Créer ou mettre à jour le graphique
    createOrUpdateChart(dailySavingsMinutes, automationTimeInMinutes);
}

// Fonction pour créer ou mettre à jour le graphique
function createOrUpdateChart(dailySavingsMinutes, automationTimeInMinutes) {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    const t = translations[currentLanguage];
    
    // Calculer les données pour le graphique
    const months = Array.from({length: 12}, (_, i) => i + 1);
    const withoutAutomation = months.map(month => 0);
    const withAutomation = months.map(month => {
        const totalMinutesSaved = dailySavingsMinutes * 30 * month;
        const netMinutesSaved = totalMinutesSaved - automationTimeInMinutes;
        return netMinutesSaved > 0 ? netMinutesSaved / 60 : 0; // Convertir en heures
    });
    
    // Trouver le point de rentabilité en mois
    const breakEvenMonth = Math.ceil(automationTimeInMinutes / (dailySavingsMinutes * 30));
    
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
                }
            }
        }
    });
}

// Fonction pour formater la monnaie selon la langue
function formatMoney(amount, language) {
    const currencyUnit = translations[language].currencyUnit;
    return amount.toFixed(2) + currencyUnit;
}

// Variables DOM
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
let loadButton;
let shareButton;

// Fonction pour réinitialiser le formulaire
function resetForm() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('results').classList.add('hidden');
    if (window.savingsChart) {
        window.savingsChart.destroy();
        window.savingsChart = null;
    }
}

// Fonction pour basculer entre les langues
function toggleLanguage() {
    currentLanguage = languageSwitch.value;
    localStorage.setItem('preferredLanguage', currentLanguage);
    applyTranslations();
    
    // Si des résultats sont affichés, recalculer avec la nouvelle langue
    if (!resultDiv.classList.contains('hidden')) {
        calculateROI();
    }
}

// Fonction pour appliquer les traductions
function applyTranslations() {
    const t = translations[currentLanguage];
    
    // Appliquer les traductions à tous les éléments avec l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Mettre à jour les placeholders des champs de saisie
    taskTimeMinutesInput.placeholder = t.taskTimeInput;
    frequencyInput.placeholder = t.frequencyInput;
    automationTimeHoursInput.placeholder = t.automationTimeInput;
    hourlyRateInput.placeholder = t.hourlyRateInput;
}

// Fonction pour charger la préférence de langue
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        languageSwitch.value = currentLanguage;
    }
    applyTranslations();
}

// Fonction pour initialiser le mode sombre
function initializeDarkMode() {
    // Vérifier si le mode sombre est activé dans le localStorage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    
    // Appliquer le mode sombre si nécessaire
    if (darkModeEnabled) {
        document.documentElement.classList.add('dark');
    }
    
    // Ajouter un écouteur d'événement pour le bouton de bascule du mode sombre
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Fonction pour basculer le mode sombre
function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    }
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
    loadButton = document.getElementById('loadCalculation');
    shareButton = document.getElementById('shareCalculation');
    
    // Ajouter les écouteurs d'événements
    calculateBtn.addEventListener('click', calculateROI);
    resetBtn.addEventListener('click', resetForm);
    languageSwitch.addEventListener('change', toggleLanguage);
    
    // Ajouter les écouteurs d'événements pour les boutons de sauvegarde, chargement et partage
    if (saveButton) saveButton.addEventListener('click', saveCalculation);
    if (loadButton) loadButton.addEventListener('click', loadCalculation);
    if (shareButton) shareButton.addEventListener('click', shareCalculation);
    
    // Charger les préférences de langue
    loadLanguagePreference();
    
    // Initialiser le mode sombre
    initializeDarkMode();
    
    // Vérifier s'il y a des données partagées dans l'URL
    checkForSharedData();
});

// Fonction pour sauvegarder le calcul actuel
function saveCalculation() {
    // Récupérer les données du formulaire
    const data = getFormData();
    
    // Récupérer les calculs sauvegardés existants
    let savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '[]');
    
    // Ajouter le nouveau calcul avec un horodatage
    data.timestamp = new Date().toISOString();
    data.id = Date.now().toString();
    savedCalculations.push(data);
    
    // Sauvegarder dans le localStorage
    localStorage.setItem('savedCalculations', JSON.stringify(savedCalculations));
    
    // Afficher un message de confirmation
    alert(translations[currentLanguage].calculationSaved);
}

// Fonction pour charger un calcul sauvegardé
function loadCalculation() {
    // Récupérer les calculs sauvegardés
    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '[]');
    
    // Vérifier s'il y a des calculs sauvegardés
    if (savedCalculations.length === 0) {
        alert(translations[currentLanguage].noSavedCalculations);
        return;
    }
    
    // Créer une liste de calculs sauvegardés
    let selectHTML = '<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" id="loadModal">';
    selectHTML += '<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">';
    selectHTML += '<h3 class="text-lg font-medium mb-4">' + translations[currentLanguage].loadButton + '</h3>';
    selectHTML += '<ul class="max-h-60 overflow-y-auto mb-4">';
    
    // Trier les calculs par date (le plus récent en premier)
    savedCalculations.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // Ajouter chaque calcul à la liste
    savedCalculations.forEach(calc => {
        const date = new Date(calc.timestamp);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        
        selectHTML += '<li class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded" data-id="' + calc.id + '">';
        selectHTML += formattedDate + ' - ';
        selectHTML += calc.taskTimeMinutes + 'min ' + calc.taskTimeSeconds + 's × ' + calc.frequency + ' ';
        
        switch (calc.frequencyUnit) {
            case 'day':
                selectHTML += translations[currentLanguage].perDay;
                break;
            case 'week':
                selectHTML += translations[currentLanguage].perWeek;
                break;
            case 'month':
                selectHTML += translations[currentLanguage].perMonth;
                break;
        }
        
        selectHTML += '</li>';
    });
    
    selectHTML += '</ul>';
    selectHTML += '<div class="flex justify-end space-x-2">';
    selectHTML += '<button id="cancelLoadBtn" class="btn-secondary py-1 px-3">' + translations[currentLanguage].cancel + '</button>';
    selectHTML += '</div>';
    selectHTML += '</div></div>';
    
    // Ajouter la liste au document
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = selectHTML;
    document.body.appendChild(modalContainer);
    
    // Ajouter des écouteurs d'événements pour les éléments de la liste
    document.querySelectorAll('#loadModal li').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const selectedCalc = savedCalculations.find(calc => calc.id === id);
            
            if (selectedCalc) {
                // Remplir le formulaire avec les données sauvegardées
                taskTimeMinutesInput.value = selectedCalc.taskTimeMinutes || '';
                taskTimeSecondsInput.value = selectedCalc.taskTimeSeconds || '';
                frequencyInput.value = selectedCalc.frequency || '';
                frequencyUnitSelect.value = selectedCalc.frequencyUnit || 'day';
                automationTimeHoursInput.value = selectedCalc.automationTimeHours || '';
                automationTimeMinutesInput.value = selectedCalc.automationTimeMinutes || '';
                hourlyRateInput.value = selectedCalc.hourlyRate || '';
                
                // Changer la langue si nécessaire
                if (selectedCalc.language && selectedCalc.language !== currentLanguage) {
                    currentLanguage = selectedCalc.language;
                    languageSwitch.value = currentLanguage;
                    applyTranslations();
                }
                
                // Calculer les résultats
                calculateROI();
                
                // Fermer la modale
                document.body.removeChild(modalContainer);
            }
        });
    });
    
    // Ajouter un écouteur d'événement pour le bouton d'annulation
    document.getElementById('cancelLoadBtn').addEventListener('click', function() {
        document.body.removeChild(modalContainer);
    });
}

// Fonction pour partager le calcul actuel
function shareCalculation() {
    // Récupérer les données du formulaire
    const data = getFormData();
    
    // Créer une chaîne de requête URL
    const queryString = new URLSearchParams({
        data: JSON.stringify(data)
    }).toString();
    
    // Créer l'URL de partage
    const shareUrl = window.location.href.split('?')[0] + '?' + queryString;
    
    // Copier l'URL dans le presse-papier
    copyToClipboard(shareUrl)
        .then(() => {
            alert(translations[currentLanguage].linkCopied);
        })
        .catch(() => {
            alert(translations[currentLanguage].copyError);
        });
}

// Fonction pour copier du texte dans le presse-papier
function copyToClipboard(text) {
    // Utiliser l'API Clipboard si disponible
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback pour les navigateurs plus anciens
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        return new Promise((resolve, reject) => {
            const successful = document.execCommand('copy');
            textArea.remove();
            if (successful) {
                resolve();
            } else {
                reject();
            }
        });
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
        language: currentLanguage
    };
}

// Vérifier s'il y a des données partagées dans l'URL
function checkForSharedData() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedData = urlParams.get('data');
    
    if (sharedData) {
        try {
            const data = JSON.parse(sharedData);
            
            // Remplir le formulaire avec les données partagées
            taskTimeMinutesInput.value = data.taskTimeMinutes || '';
            taskTimeSecondsInput.value = data.taskTimeSeconds || '';
            frequencyInput.value = data.frequency || '';
            frequencyUnitSelect.value = data.frequencyUnit || 'day';
            automationTimeHoursInput.value = data.automationTimeHours || '';
            automationTimeMinutesInput.value = data.automationTimeMinutes || '';
            hourlyRateInput.value = data.hourlyRate || '';
            
            // Changer la langue si nécessaire
            if (data.language && data.language !== currentLanguage) {
                currentLanguage = data.language;
                languageSwitch.value = currentLanguage;
                applyTranslations();
            }
            
            // Calculer les résultats
            calculateROI();
            
            // Afficher un message de confirmation
            alert(translations[currentLanguage].sharedCalculationLoaded);
            
            // Nettoyer l'URL
            window.history.replaceState({}, document.title, window.location.pathname);
        } catch (error) {
            console.error('Erreur lors du chargement des données partagées:', error);
        }
    }
}
