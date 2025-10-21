// Bibliothèque de Prompts Professionnels pour Design Generator Pro

const PROMPTS_LIBRARY = {
    // MUGS
    mugs: {
        coffee_lover: {
            name: "Amateur de Café",
            prompt: "Illustration minimaliste d'une tasse de café fumante avec grains de café dispersés, citation 'But first, coffee' en typographie élégante script, palette de couleurs marron chaud et crème, style moderne cozy",
            tags: ["café", "minimaliste", "citation"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        mom_quote: {
            name: "Citation Maman",
            prompt: "Design floral délicat avec la citation 'Mom: the heart of our home' en typographie douce, couronne de fleurs aquarelle pastel, style élégant féminin",
            tags: ["maman", "fête des mères", "floral"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        cat_crazy: {
            name: "Fou de Chats",
            prompt: "Plusieurs silhouettes de chats joueurs en positions amusantes, style line art simple, citation 'Crazy Cat Lady' en typographie ludique, noir et blanc minimaliste",
            tags: ["chat", "humour", "animaux"],
            popularity: "⭐⭐⭐⭐"
        },
        motivational: {
            name: "Motivation Matinale",
            prompt: "Lever de soleil stylisé avec rayons lumineux, citation 'Make Today Amazing' en typographie bold moderne, palette de couleurs orange et jaune énergiques",
            tags: ["motivation", "sunrise", "positif"],
            popularity: "⭐⭐⭐⭐"
        }
    },

    // T-SHIRTS
    tshirts: {
        vintage_adventure: {
            name: "Aventure Vintage",
            prompt: "Montagne stylisée avec forêt de pins, style vintage rétro années 70, palette de couleurs terre orange et marron, badge circulaire avec texte 'Adventure Awaits', fond transparent",
            tags: ["vintage", "montagne", "aventure"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        minimalist_geometric: {
            name: "Géométrique Minimaliste",
            prompt: "Formes géométriques abstraites interconnectées, ligne art épuré, composition symétrique, noir sur fond transparent, style moderne minimaliste",
            tags: ["géométrique", "minimaliste", "moderne"],
            popularity: "⭐⭐⭐⭐"
        },
        dog_lover: {
            name: "Amoureux des Chiens",
            prompt: "Portrait stylisé de chien golden retriever avec couronne de fleurs, style illustration douce, texte 'Dog Mom' en script élégant, couleurs pastels chaleureuses, fond transparent",
            tags: ["chien", "animaux", "maman"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        gamer: {
            name: "Gamer Rétro",
            prompt: "Manette de jeu vintage pixelisée style 8-bit, effets glitch colorés néon, texte 'Level Up' en typographie pixel art, palette cyber futuriste",
            tags: ["gaming", "rétro", "geek"],
            popularity: "⭐⭐⭐⭐"
        }
    },

    // POSTERS
    posters: {
        botanical_modern: {
            name: "Botanique Moderne",
            prompt: "Feuille de monstera délicieuse en gros plan, style illustration botanique moderne, palette de verts profonds, détails fins des nervures, composition verticale élégante minimaliste",
            tags: ["botanique", "plante", "moderne"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        abstract_shapes: {
            name: "Formes Abstraites",
            prompt: "Composition abstraite de formes organiques qui se chevauchent, palette de couleurs terracotta rose et beige, textures subtiles, style moderne scandinave apaisant",
            tags: ["abstract", "moderne", "scandinave"],
            popularity: "⭐⭐⭐⭐"
        },
        mountain_sunset: {
            name: "Coucher de Soleil Montagne",
            prompt: "Silhouette de chaîne de montagnes en couches, coucher de soleil avec dégradé orange rose violet, style minimaliste géométrique, composition verticale paisible",
            tags: ["nature", "montagne", "sunset"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        quote_minimalist: {
            name: "Citation Minimaliste",
            prompt: "Citation inspirante 'Inhale Confidence, Exhale Doubt' en typographie serif élégante, éléments décoratifs linéaires subtils, palette noir et or, composition équilibrée",
            tags: ["citation", "motivation", "typographie"],
            popularity: "⭐⭐⭐⭐"
        }
    },

    // COQUES TÉLÉPHONE
    phone_cases: {
        marble_gold: {
            name: "Marbre Or",
            prompt: "Texture marbre blanc veiné d'or, détails métalliques dorés, style luxueux élégant, composition carrée équilibrée, finition brillante",
            tags: ["marbre", "or", "luxe"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        floral_watercolor: {
            name: "Aquarelle Florale",
            prompt: "Composition florale aquarelle avec pivoines et eucalyptus, couleurs pastel rose et vert menthe, style délicat romantique, fond blanc doux",
            tags: ["floral", "aquarelle", "romantique"],
            popularity: "⭐⭐⭐⭐"
        },
        geometric_gradient: {
            name: "Dégradé Géométrique",
            prompt: "Motif géométrique avec triangles et losanges, dégradé de couleurs néon rose bleu violet, style futuriste vibrant, composition symétrique",
            tags: ["géométrique", "gradient", "moderne"],
            popularity: "⭐⭐⭐⭐"
        },
        space_galaxy: {
            name: "Galaxie Cosmique",
            prompt: "Nébuleuse spatiale avec étoiles scintillantes, palette de couleurs violet bleu et rose cosmique, style réaliste astronomique impressionnant",
            tags: ["espace", "galaxie", "cosmos"],
            popularity: "⭐⭐⭐⭐⭐"
        }
    },

    // SWEATSHIRTS
    sweatshirts: {
        cozy_vibes: {
            name: "Ambiance Cozy",
            prompt: "Illustration de tasse fumante avec couverture tricotée, texte 'Cozy Vibes Only' en typographie chaleureuse script, éléments hygge, palette couleurs automnales, fond transparent",
            tags: ["cozy", "automne", "hygge"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        feminist_power: {
            name: "Pouvoir Féminin",
            prompt: "Texte bold 'Nevertheless She Persisted' en typographie forte impactante, éléments floraux puissants, palette rose et noir, style empowerment moderne",
            tags: ["féministe", "empowerment", "citation"],
            popularity: "⭐⭐⭐⭐"
        },
        nature_lover: {
            name: "Amoureux Nature",
            prompt: "Scène de forêt minimaliste avec pins et montagnes, silhouettes d'animaux (cerf, renard), texte 'Into the Wild', style aventure naturel, fond transparent",
            tags: ["nature", "aventure", "forêt"],
            popularity: "⭐⭐⭐⭐⭐"
        }
    },

    // TOTE BAGS
    tote_bags: {
        book_lover: {
            name: "Passionné de Livres",
            prompt: "Pile de livres stylisée avec tasse de thé, plante en pot, citation 'Just One More Chapter' en typographie littéraire, style cozy librairie, couleurs douces",
            tags: ["livres", "lecture", "cozy"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        eco_friendly: {
            name: "Écologique",
            prompt: "Planète Terre avec feuilles et fleurs, texte 'Choose Reusable' en typographie écologique, style illustratif moderne, palette verte naturelle",
            tags: ["éco", "planète", "durable"],
            popularity: "⭐⭐⭐⭐"
        },
        farmers_market: {
            name: "Marché Fermier",
            prompt: "Illustration de fruits et légumes frais (tomates, citrons, carottes), style dessin au trait vintage, texte 'Fresh from the Market', composition équilibrée",
            tags: ["fruits", "marché", "bio"],
            popularity: "⭐⭐⭐⭐⭐"
        }
    }
};

// Fonction pour obtenir tous les prompts d'une catégorie
function getPromptsByProduct(productType) {
    const mapping = {
        'mug': 'mugs',
        'tshirt': 'tshirts',
        'poster': 'posters',
        'phone-case': 'phone_cases',
        'sweatshirt': 'sweatshirts',
        'tote-bag': 'tote_bags'
    };
    
    const category = mapping[productType];
    return category ? PROMPTS_LIBRARY[category] : null;
}

// Fonction pour obtenir un prompt aléatoire
function getRandomPrompt(productType) {
    const prompts = getPromptsByProduct(productType);
    if (!prompts) return null;
    
    const promptKeys = Object.keys(prompts);
    const randomKey = promptKeys[Math.floor(Math.random() * promptKeys.length)];
    return prompts[randomKey];
}

// Fonction pour rechercher des prompts par tags
function searchPromptsByTag(tag) {
    const results = [];
    
    for (const category in PROMPTS_LIBRARY) {
        for (const key in PROMPTS_LIBRARY[category]) {
            const prompt = PROMPTS_LIBRARY[category][key];
            if (prompt.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))) {
                results.push({
                    ...prompt,
                    category: category,
                    key: key
                });
            }
        }
    }
    
    return results;
}

// Fonction pour obtenir les prompts les plus populaires
function getTopPrompts(limit = 10) {
    const allPrompts = [];
    
    for (const category in PROMPTS_LIBRARY) {
        for (const key in PROMPTS_LIBRARY[category]) {
            const prompt = PROMPTS_LIBRARY[category][key];
            allPrompts.push({
                ...prompt,
                category: category,
                key: key
            });
        }
    }
    
    // Trier par popularité (nombre d'étoiles)
    return allPrompts
        .sort((a, b) => b.popularity.length - a.popularity.length)
        .slice(0, limit);
}

// Export pour utilisation globale
if (typeof window !== 'undefined') {
    window.PROMPTS_LIBRARY = PROMPTS_LIBRARY;
    window.getPromptsByProduct = getPromptsByProduct;
    window.getRandomPrompt = getRandomPrompt;
    window.searchPromptsByTag = searchPromptsByTag;
    window.getTopPrompts = getTopPrompts;
}

// Export pour Node.js (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PROMPTS_LIBRARY,
        getPromptsByProduct,
        getRandomPrompt,
        searchPromptsByTag,
        getTopPrompts
    };
}