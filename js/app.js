// State Management
const state = {
    selectedProduct: null,
    selectedStyle: null,
    selectedTheme: null,
    selectedRatio: '1:1',
    generatedDesigns: []
};

// Product Specifications for Gelato
const productSpecs = {
    'mug': {
        name: 'Mug',
        dimensions: '2475 x 1155 px',
        dpi: '300 DPI',
        format: 'PNG',
        aspectRatio: '4:3',
        description: 'Design optimisé pour mug 11oz/15oz avec zone de sécurité'
    },
    'tshirt': {
        name: 'T-shirt',
        dimensions: '4500 x 5400 px',
        dpi: '300 DPI',
        format: 'PNG transparent',
        aspectRatio: '3:4',
        description: 'Design haute résolution pour impression textile'
    },
    'phone-case': {
        name: 'Coque de téléphone',
        dimensions: '3000 x 3000 px',
        dpi: '300 DPI',
        format: 'PNG',
        aspectRatio: '1:1',
        description: 'Design carré adaptable à tous les modèles'
    },
    'poster': {
        name: 'Poster',
        dimensions: '2480 x 3508 px (A4)',
        dpi: '300 DPI',
        format: 'PDF/PNG',
        aspectRatio: '3:4',
        description: 'Poster haute qualité avec bleed de 3mm'
    },
    'sweatshirt': {
        name: 'Sweatshirt',
        dimensions: '4500 x 5400 px',
        dpi: '300 DPI',
        format: 'PNG transparent',
        aspectRatio: '3:4',
        description: 'Design unisexe pour impression directe'
    },
    'tote-bag': {
        name: 'Tote Bag',
        dimensions: '4500 x 5400 px',
        dpi: '300 DPI',
        format: 'PNG transparent',
        aspectRatio: '3:4',
        description: 'Design pour tote bag canvas'
    }
};

// Style Descriptions
const styleDescriptions = {
    'minimalist': 'style minimaliste épuré avec lignes simples et palette limitée',
    'vintage': 'style vintage rétro avec textures usées et couleurs délavées',
    'abstract': 'style abstrait moderne avec formes géométriques et couleurs vives',
    'illustration': 'illustration artistique détaillée avec traits expressifs',
    'typography': 'design typographique centré sur les lettrages créatifs',
    'geometric': 'motifs géométriques avec formes et patterns répétitifs',
    'watercolor': 'effet aquarelle avec couleurs fluides et légères',
    'line-art': 'dessin au trait simple et élégant en noir et blanc',
    'retro': 'design rétro années 70-80 avec couleurs vibrantes',
    'modern': 'style moderne contemporain avec design épuré'
};

// Theme Descriptions
const themeDescriptions = {
    'trending': 'design tendance viral actuel populaire sur les réseaux sociaux',
    'coffee': 'thème café avec tasses grains arômes ambiance cozy',
    'nature': 'éléments naturels feuilles plantes arbres paysages verts',
    'animals': 'animaux mignons chats chiens oiseaux faune adorable',
    'motivation': 'citation inspirante motivante positive développement personnel',
    'humor': 'design humoristique drôle avec jeu de mots amusant',
    'space': 'espace galaxie planètes étoiles cosmos univers',
    'flowers': 'fleurs botaniques floraux pétales jardins délicats',
    'ocean': 'océan mer vagues poissons vie marine aquatique',
    'christmas': 'Noël hiver neige sapin cadeaux festif',
    'halloween': 'Halloween citrouilles fantômes sorcières spooky',
    'love': 'amour cœurs romance Saint-Valentin sentiments'
};

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeSelectionHandlers();
    loadExampleIfPresent();
});

// Initialize Selection Handlers
function initializeSelectionHandlers() {
    // Product Selection
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.product-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            state.selectedProduct = card.dataset.product;
            
            // Auto-select best aspect ratio for product
            const product = productSpecs[state.selectedProduct];
            if (product) {
                selectRatio(product.aspectRatio);
            }
        });
    });

    // Style Selection
    document.querySelectorAll('.style-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelectorAll('.style-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            state.selectedStyle = tag.dataset.style;
        });
    });

    // Theme Selection
    document.querySelectorAll('.theme-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelectorAll('.theme-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            state.selectedTheme = tag.dataset.theme;
        });
    });

    // Ratio Selection
    document.querySelectorAll('.ratio-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelectorAll('.ratio-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            state.selectedRatio = tag.dataset.ratio;
        });
    });
}

// Select Ratio Programmatically
function selectRatio(ratio) {
    state.selectedRatio = ratio;
    document.querySelectorAll('.ratio-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.ratio === ratio) {
            tag.classList.add('active');
        }
    });
}

// Quick Generate Function
function quickGenerate(style, product) {
    state.selectedStyle = style;
    state.selectedProduct = product;
    
    // Activate UI elements
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('active');
        if (card.dataset.product === product) {
            card.classList.add('active');
        }
    });
    
    document.querySelectorAll('.style-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.style === style) {
            tag.classList.add('active');
        }
    });
    
    // Select trending theme by default
    state.selectedTheme = 'trending';
    document.querySelectorAll('.theme-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.theme === 'trending') {
            tag.classList.add('active');
        }
    });
    
    // Auto-select best aspect ratio
    const productInfo = productSpecs[product];
    if (productInfo) {
        selectRatio(productInfo.aspectRatio);
    }
    
    // Scroll to generator
    document.querySelector('.generator-section').scrollIntoView({ behavior: 'smooth' });
    
    // Generate after a short delay
    setTimeout(() => {
        generateDesign();
    }, 500);
}

// Main Generate Function
async function generateDesign() {
    // Validation
    if (!state.selectedProduct) {
        alert('⚠️ Veuillez sélectionner un type de produit');
        return;
    }
    
    if (!state.selectedStyle) {
        alert('⚠️ Veuillez sélectionner un style visuel');
        return;
    }
    
    if (!state.selectedTheme) {
        alert('⚠️ Veuillez sélectionner un thème');
        return;
    }
    
    // Show loading
    showLoading();
    
    try {
        // Build prompt
        const prompt = buildPrompt();
        
        let imageUrl;
        let design;
        
        // Try to use OpenAI API if configured, otherwise simulate
        if (isApiKeyConfigured()) {
            try {
                imageUrl = await generateImageWithOpenAI(prompt);
                
                const productInfo = productSpecs[state.selectedProduct];
                design = {
                    imageUrl: imageUrl,
                    prompt: prompt,
                    product: state.selectedProduct,
                    style: state.selectedStyle,
                    theme: state.selectedTheme,
                    specs: productInfo,
                    timestamp: new Date().toISOString(),
                    isReal: true
                };
            } catch (apiError) {
                console.error('Erreur OpenAI, utilisation du mode simulation:', apiError);
                
                // Message d'erreur personnalisé selon le type
                let errorMessage = apiError.message;
                let helpText = '';
                
                if (errorMessage.includes('billing') || errorMessage.includes('quota') || errorMessage.includes('limit')) {
                    helpText = `\n\n💡 SOLUTION :\n1. Allez sur platform.openai.com/account/billing\n2. Ajoutez $5-10 de crédit\n3. Attendez 2-3 minutes\n4. Réessayez !\n\n📊 En attendant, le mode simulation est activé.`;
                } else if (errorMessage.includes('API key')) {
                    helpText = `\n\n💡 SOLUTION :\n1. Vérifiez votre clé API\n2. Créez une nouvelle clé si nécessaire\n3. Reconfigurez dans l'application\n\n📊 En attendant, le mode simulation est activé.`;
                } else {
                    helpText = `\n\n📊 Le mode simulation est activé automatiquement.`;
                }
                
                alert(`⚠️ Erreur OpenAI: ${errorMessage}${helpText}`);
                design = await simulateImageGeneration(prompt);
                design.isReal = false;
            }
        } else {
            console.log('Mode simulation (clé API non configurée)');
            alert('ℹ️ Mode Simulation Activé\n\nVous utilisez le mode simulation car aucune clé API n\'est configurée.\n\n💡 Pour générer de vraies images :\n1. Cliquez sur "Configurer API"\n2. Ajoutez votre clé OpenAI\n3. Ajoutez du crédit sur votre compte\n\nPour l\'instant, profitez du mode simulation gratuit ! 🎨');
            design = await simulateImageGeneration(prompt);
            design.isReal = false;
        }
        
        // Display results
        displayResults(design);
        
        // Hide loading
        hideLoading();
        
        // Scroll to results
        setTimeout(() => {
            document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
        }, 300);
        
    } catch (error) {
        console.error('Erreur de génération:', error);
        alert(`❌ Une erreur est survenue lors de la génération: ${error.message}`);
        hideLoading();
    }
}

// Build Prompt for Image Generation
function buildPrompt() {
    const productInfo = productSpecs[state.selectedProduct];
    const styleDesc = styleDescriptions[state.selectedStyle] || state.selectedStyle;
    const themeDesc = themeDescriptions[state.selectedTheme] || state.selectedTheme;
    const customPrompt = document.getElementById('customPrompt').value.trim();
    
    let prompt = '';
    
    if (customPrompt) {
        // Use custom prompt as base
        prompt = `${customPrompt}, ${styleDesc}, optimisé pour ${productInfo.name}`;
    } else {
        // Build automatic prompt
        prompt = `Design professionnel pour ${productInfo.name}, ${themeDesc}, ${styleDesc}, haute qualité, print-ready, ${productInfo.dpi}, couleurs vibrantes, composition équilibrée`;
    }
    
    // Add product-specific requirements
    if (state.selectedProduct === 'tshirt' || state.selectedProduct === 'sweatshirt') {
        prompt += ', fond transparent, design centré';
    }
    
    if (state.selectedProduct === 'mug') {
        prompt += ', design panoramique wraparound';
    }
    
    return prompt;
}

// Generate Image with OpenAI DALL-E 3
async function generateImageWithOpenAI(prompt) {
    // Check if API key is configured
    if (!isApiKeyConfigured()) {
        throw new Error('Clé API OpenAI non configurée. Veuillez configurer votre clé API.');
    }
    
    // Get image size based on selected ratio
    const size = CONFIG.sizeMapping[state.selectedRatio] || '1024x1024';
    
    const requestBody = {
        model: CONFIG.openai.model,
        prompt: prompt,
        n: 1,
        size: size,
        quality: CONFIG.openai.quality,
        style: CONFIG.openai.style
    };
    
    try {
        const response = await fetch(CONFIG.openai.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.openai.apiKey}`
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Erreur API OpenAI');
        }
        
        const data = await response.json();
        
        if (!data.data || !data.data[0] || !data.data[0].url) {
            throw new Error('Réponse API invalide');
        }
        
        return data.data[0].url;
    } catch (error) {
        console.error('Erreur OpenAI API:', error);
        throw error;
    }
}

// Simulate Image Generation (Fallback)
async function simulateImageGeneration(prompt) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Return mock design data
    const productInfo = productSpecs[state.selectedProduct];
    
    return {
        imageUrl: `https://via.placeholder.com/800x600/667eea/ffffff?text=${encodeURIComponent(productInfo.name + ' Design')}`,
        prompt: prompt,
        product: state.selectedProduct,
        style: state.selectedStyle,
        theme: state.selectedTheme,
        specs: productInfo,
        timestamp: new Date().toISOString()
    };
}

// Display Results
function displayResults(design) {
    const resultsSection = document.getElementById('resultsSection');
    const resultsInfo = document.getElementById('resultsInfo');
    const resultsGrid = document.getElementById('resultsGrid');
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Mode badge
    const modeBadge = design.isReal 
        ? '<span style="background: #10b981; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">🎨 Image Réelle HD</span>'
        : '<span style="background: #f59e0b; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">📊 Mode Simulation</span>';
    
    // Update info
    resultsInfo.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <h3 style="margin: 0;">✅ Design généré avec succès !</h3>
            ${modeBadge}
        </div>
        <p><strong>Produit:</strong> ${design.specs.name}</p>
        <p><strong>Style:</strong> ${state.selectedStyle.charAt(0).toUpperCase() + state.selectedStyle.slice(1)}</p>
        <p><strong>Thème:</strong> ${state.selectedTheme.charAt(0).toUpperCase() + state.selectedTheme.slice(1)}</p>
        <p><strong>Prompt:</strong> ${design.prompt}</p>
        ${!design.isReal ? '<p style="margin-top: 1rem; padding: 0.75rem; background: rgba(245, 158, 11, 0.1); border-left: 3px solid #f59e0b; border-radius: 4px;"><strong>💡 Note:</strong> Ceci est une image de démonstration. Pour générer de vraies images HD, ajoutez du crédit sur votre compte OpenAI.</p>' : ''}
    `;
    
    // Add design to state
    state.generatedDesigns.unshift(design);
    
    // Create result card
    const card = createResultCard(design);
    
    // Clear previous results and add new one
    resultsGrid.innerHTML = '';
    resultsGrid.appendChild(card);
}

// Create Result Card
function createResultCard(design) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    card.innerHTML = `
        <img src="${design.imageUrl}" alt="${design.specs.name}" class="result-image" />
        <div class="result-info-card">
            <h3>${design.specs.name}</h3>
            <div class="result-specs">
                <div class="result-spec">
                    <i class="fas fa-ruler-combined"></i>
                    <span>${design.specs.dimensions}</span>
                </div>
                <div class="result-spec">
                    <i class="fas fa-file-image"></i>
                    <span>${design.specs.format}</span>
                </div>
                <div class="result-spec">
                    <i class="fas fa-compress"></i>
                    <span>${design.specs.dpi}</span>
                </div>
                <div class="result-spec">
                    <i class="fas fa-info-circle"></i>
                    <span>${design.specs.description}</span>
                </div>
            </div>
            <div class="result-actions">
                <button class="result-btn primary" onclick="downloadDesign('${design.imageUrl}', '${design.specs.name}')">
                    <i class="fas fa-download"></i> Télécharger
                </button>
                <button class="result-btn secondary" onclick="regenerateDesign()">
                    <i class="fas fa-sync-alt"></i> Régénérer
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Download Design
async function downloadDesign(url, name) {
    try {
        showLoading();
        
        // For OpenAI generated images, we need to fetch and download
        const response = await fetch(url, {
            mode: 'cors',
            cache: 'no-cache'
        });
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const blob = await response.blob();
        
        // Vérifier que le blob n'est pas vide
        if (blob.size === 0) {
            throw new Error('Image vide reçue');
        }
        
        // Create download link
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${name.toLowerCase().replace(/\s+/g, '-')}-design-${Date.now()}.png`;
        link.style.display = 'none';
        document.body.appendChild(link);
        
        // Attendre un peu avant le clic (fix pour certains navigateurs)
        setTimeout(() => {
            link.click();
            
            // Clean up après un délai
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(downloadUrl);
            }, 100);
        }, 100);
        
        hideLoading();
        
        alert('✅ Design téléchargé avec succès !\n\n📋 Nom: ' + link.download + '\n\n💡 Pour Gelato, redimensionnez aux dimensions exactes spécifiées.');
    } catch (error) {
        hideLoading();
        console.error('Erreur de téléchargement:', error);
        
        // Messages d'erreur spécifiques
        let errorMsg = '❌ Erreur lors du téléchargement\n\n';
        
        if (error.message.includes('CORS') || error.message.includes('cors')) {
            errorMsg += '🔒 Problème de sécurité CORS\n\n';
            errorMsg += 'SOLUTIONS :\n';
            errorMsg += '1. Clic droit sur l\'image > Enregistrer l\'image sous...\n';
            errorMsg += '2. Ou ouvrez l\'image dans un nouvel onglet puis enregistrez\n';
            errorMsg += '3. Ou utilisez un autre navigateur (Chrome recommandé)';
        } else if (error.message.includes('HTTP')) {
            errorMsg += '🌐 Erreur de connexion\n\n';
            errorMsg += 'SOLUTIONS :\n';
            errorMsg += '1. Vérifiez votre connexion internet\n';
            errorMsg += '2. Réessayez dans quelques secondes\n';
            errorMsg += '3. Ou faites : Clic droit > Enregistrer l\'image';
        } else if (error.message.includes('vide')) {
            errorMsg += '📭 Image vide reçue\n\n';
            errorMsg += 'SOLUTIONS :\n';
            errorMsg += '1. Régénérez le design\n';
            errorMsg += '2. Ou faites : Clic droit > Enregistrer l\'image';
        } else {
            errorMsg += 'Erreur: ' + error.message + '\n\n';
            errorMsg += 'SOLUTION ALTERNATIVE :\n';
            errorMsg += 'Faites un clic droit sur l\'image\n';
            errorMsg += 'puis "Enregistrer l\'image sous..."';
        }
        
        alert(errorMsg);
    }
}

// Regenerate Design
function regenerateDesign() {
    generateDesign();
}

// Loading Functions
function showLoading() {
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('active');
}

// Console Info
console.log('%c🎨 Design Generator Pro', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cOptimisé pour Etsy & Gelato', 'color: #8b5cf6; font-size: 14px;');
console.log('%c\nÉtat actuel:', 'color: #10b981; font-weight: bold;');
console.log('State:', state);
console.log('Product Specs:', productSpecs);

// API Configuration Modal Functions
function openApiConfig() {
    const modal = document.getElementById('apiConfigModal');
    modal.classList.add('active');
    
    // Update status
    updateApiStatus();
    
    // Load current API key if exists
    const currentKey = loadApiKey();
    if (currentKey) {
        document.getElementById('apiKeyInput').value = currentKey;
    }
}

function closeApiConfig() {
    const modal = document.getElementById('apiConfigModal');
    modal.classList.remove('active');
}

function updateApiStatus() {
    const statusEl = document.getElementById('apiStatus');
    const statusTextEl = document.getElementById('apiStatusText');
    
    if (isApiKeyConfigured()) {
        statusEl.classList.add('connected');
        statusEl.classList.remove('disconnected');
        statusTextEl.textContent = 'Configuré et prêt';
    } else {
        statusEl.classList.add('disconnected');
        statusEl.classList.remove('connected');
        statusTextEl.textContent = 'Non configuré';
    }
}

function saveApiConfig() {
    const apiKey = document.getElementById('apiKeyInput').value.trim();
    
    if (!apiKey) {
        alert('⚠️ Veuillez entrer une clé API');
        return;
    }
    
    if (!apiKey.startsWith('sk-')) {
        alert('⚠️ Format de clé API invalide. Les clés OpenAI commencent par "sk-"');
        return;
    }
    
    if (saveApiKey(apiKey)) {
        updateApiStatus();
        alert('✅ Clé API sauvegardée avec succès !');
    } else {
        alert('❌ Erreur lors de la sauvegarde de la clé API');
    }
}

function clearApiConfig() {
    if (confirm('Êtes-vous sûr de vouloir supprimer la clé API ?')) {
        if (clearApiKey()) {
            document.getElementById('apiKeyInput').value = '';
            updateApiStatus();
            alert('✅ Clé API supprimée');
        } else {
            alert('❌ Erreur lors de la suppression');
        }
    }
}

async function testApiConfig() {
    const apiKey = document.getElementById('apiKeyInput').value.trim();
    
    if (!apiKey) {
        alert('⚠️ Veuillez entrer une clé API');
        return;
    }
    
    // Temporarily save the key for testing
    const originalKey = CONFIG.openai.apiKey;
    CONFIG.openai.apiKey = apiKey;
    
    try {
        showLoading();
        
        const response = await fetch('https://api.openai.com/v1/models', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        
        hideLoading();
        
        if (response.ok) {
            alert('✅ Connexion réussie ! Votre clé API fonctionne correctement.');
            // Save the key since it works
            saveApiKey(apiKey);
            updateApiStatus();
        } else {
            const error = await response.json();
            alert(`❌ Erreur: ${error.error?.message || 'Clé API invalide'}`);
            CONFIG.openai.apiKey = originalKey;
        }
    } catch (error) {
        hideLoading();
        alert(`❌ Erreur de connexion: ${error.message}`);
        CONFIG.openai.apiKey = originalKey;
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('apiConfigModal');
    if (e.target === modal) {
        closeApiConfig();
    }
});

// Load example from localStorage if present (from examples.html)
function loadExampleIfPresent() {
    const exampleProduct = localStorage.getItem('example_product');
    const exampleStyle = localStorage.getItem('example_style');
    const exampleTheme = localStorage.getItem('example_theme');
    
    if (exampleProduct && exampleStyle && exampleTheme) {
        // Clear from localStorage
        localStorage.removeItem('example_product');
        localStorage.removeItem('example_style');
        localStorage.removeItem('example_theme');
        
        // Set state
        state.selectedProduct = exampleProduct;
        state.selectedStyle = exampleStyle;
        state.selectedTheme = exampleTheme;
        
        // Activate UI elements
        setTimeout(() => {
            document.querySelectorAll('.product-card').forEach(card => {
                if (card.dataset.product === exampleProduct) {
                    card.classList.add('active');
                }
            });
            
            document.querySelectorAll('.style-tag').forEach(tag => {
                if (tag.dataset.style === exampleStyle) {
                    tag.classList.add('active');
                }
            });
            
            document.querySelectorAll('.theme-tag').forEach(tag => {
                if (tag.dataset.theme === exampleTheme) {
                    tag.classList.add('active');
                }
            });
            
            // Auto-select ratio
            const productInfo = productSpecs[exampleProduct];
            if (productInfo) {
                selectRatio(productInfo.aspectRatio);
            }
            
            // Scroll to generator
            document.querySelector('.generator-section').scrollIntoView({ behavior: 'smooth' });
            
            // Show notification
            alert(`✨ Exemple chargé !\n\nProduit: ${exampleProduct}\nStyle: ${exampleStyle}\nThème: ${exampleTheme}\n\nVous pouvez maintenant générer ce design ou le personnaliser.`);
        }, 100);
    }
}

// Export for debugging
window.designGenerator = {
    state,
    productSpecs,
    generateDesign,
    quickGenerate,
    openApiConfig,
    closeApiConfig,
    loadExampleIfPresent
};