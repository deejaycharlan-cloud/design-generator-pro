// Configuration for OpenAI API
const CONFIG = {
    // OpenAI API Configuration
    openai: {
        apiKey: '', // Votre clé API OpenAI (à configurer)
        model: 'dall-e-3', // Modèle DALL-E 3
        endpoint: 'https://api.openai.com/v1/images/generations',
        defaultSize: '1024x1024', // Tailles disponibles: 1024x1024, 1792x1024, 1024x1792
        quality: 'hd', // 'standard' ou 'hd'
        style: 'vivid', // 'vivid' ou 'natural'
        maxRetries: 3,
        timeout: 60000 // 60 secondes
    },
    
    // Mapping des ratios vers les tailles DALL-E 3
    sizeMapping: {
        '1:1': '1024x1024',
        '4:3': '1024x1024',  // DALL-E 3 n'a pas 4:3, on utilise carré
        '16:9': '1792x1024', // Landscape
        '3:4': '1024x1792',  // Portrait
        '9:16': '1024x1792'  // Portrait vertical
    },
    
    // Settings
    settings: {
        saveToLocalStorage: true,
        showDebugInfo: false,
        autoDownload: false
    }
};

// Fonction pour sauvegarder la clé API
function saveApiKey(apiKey) {
    CONFIG.openai.apiKey = apiKey;
    
    if (CONFIG.settings.saveToLocalStorage) {
        try {
            // Tester si localStorage est disponible
            if (typeof(Storage) === "undefined") {
                console.warn('LocalStorage non supporté par ce navigateur');
                alert('⚠️ Votre navigateur ne supporte pas la sauvegarde locale.\n\nLa clé API fonctionnera uniquement pour cette session.\n\nRecommandation : Utilisez Chrome, Firefox ou Edge.');
                return true; // La clé est quand même en mémoire
            }
            
            // Tester l'écriture
            localStorage.setItem('openai_api_key', apiKey);
            
            // Vérifier que ça a fonctionné
            const test = localStorage.getItem('openai_api_key');
            if (test !== apiKey) {
                throw new Error('Échec de vérification');
            }
            
            console.log('✅ Clé API sauvegardée avec succès');
            return true;
            
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
            
            // Messages spécifiques selon l'erreur
            if (error.name === 'QuotaExceededError') {
                alert('⚠️ Erreur : Stockage local plein\n\nSolution :\n1. Videz le cache de votre navigateur\n2. Fermez des onglets\n3. Réessayez\n\nLa clé fonctionnera pour cette session.');
            } else if (error.name === 'SecurityError') {
                alert('⚠️ Erreur : Mode privé détecté\n\nEn mode navigation privée, la sauvegarde est limitée.\n\nSolution :\n1. Utilisez le mode normal\n2. Ou reconfigurez à chaque session\n\nLa clé fonctionnera pour cette session.');
            } else {
                alert('⚠️ Erreur lors de la sauvegarde\n\n' + error.message + '\n\nLa clé fonctionnera pour cette session uniquement.');
            }
            
            return true; // La clé est en mémoire même si pas sauvegardée
        }
    }
    
    return true;
}

// Fonction pour charger la clé API
function loadApiKey() {
    if (CONFIG.settings.saveToLocalStorage) {
        try {
            const savedKey = localStorage.getItem('openai_api_key');
            if (savedKey) {
                CONFIG.openai.apiKey = savedKey;
                return savedKey;
            }
        } catch (error) {
            console.error('Erreur lors du chargement de la clé API:', error);
        }
    }
    return null;
}

// Fonction pour supprimer la clé API
function clearApiKey() {
    CONFIG.openai.apiKey = '';
    try {
        localStorage.removeItem('openai_api_key');
        return true;
    } catch (error) {
        console.error('Erreur lors de la suppression de la clé API:', error);
        return false;
    }
}

// Fonction pour vérifier si la clé API est configurée
function isApiKeyConfigured() {
    return CONFIG.openai.apiKey && CONFIG.openai.apiKey.length > 0;
}

// Charger la clé API au démarrage
document.addEventListener('DOMContentLoaded', () => {
    loadApiKey();
});

// Export pour utilisation globale
window.CONFIG = CONFIG;
window.saveApiKey = saveApiKey;
window.loadApiKey = loadApiKey;
window.clearApiKey = clearApiKey;
window.isApiKeyConfigured = isApiKeyConfigured;