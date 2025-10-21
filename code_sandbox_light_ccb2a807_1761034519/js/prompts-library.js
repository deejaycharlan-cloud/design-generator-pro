// Bibliothèque de Prompts Professionnels pour Design Generator Pro

const PROMPTS_LIBRARY = {
    // MUGS
    mugs: {
        coffee_lover: {
            name: "Amateur de Café",
            prompt: "Design plat pour impression sur mug : grains de café dispersés artistiquement avec citation 'But first, coffee' en typographie élégante script, palette de couleurs marron chaud et crème, style moderne cozy, motif graphique sans produit physique, flat design print-ready",
            tags: ["café", "minimaliste", "citation"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        mom_quote: {
            name: "Citation Maman",
            prompt: "Motif graphique plat pour impression : couronne de fleurs aquarelle pastel encadrant la citation 'Mom: the heart of our home' en typographie douce, design délicat féminin, composition centrée sans produit, flat design print-ready",
            tags: ["maman", "fête des mères", "floral"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        cat_crazy: {
            name: "Fou de Chats",
            prompt: "Pattern graphique plat : plusieurs silhouettes de chats joueurs en positions amusantes, style line art simple, citation 'Crazy Cat Lady' en typographie ludique, noir et blanc minimaliste, design sans produit physique, flat illustration print-ready",
            tags: ["chat", "humour", "animaux"],
            popularity: "⭐⭐⭐⭐"
        },
        motivational: {
            name: "Motivation Matinale",
            prompt: "Design graphique plat pour impression : lever de soleil stylisé avec rayons lumineux géométriques, citation 'Make Today Amazing' en typographie bold moderne, palette orange et jaune énergiques, motif sans produit, flat design print-ready",
            tags: ["motivation", "sunrise", "positif"],
            popularity: "⭐⭐⭐⭐"
        }
    },

    // T-SHIRTS
    tshirts: {
        vintage_adventure: {
            name: "Aventure Vintage",
            prompt: "Design graphique plat pour impression textile : montagne stylisée avec forêt de pins, style vintage rétro années 70, palette terre orange et marron, badge circulaire avec texte 'Adventure Awaits', fond transparent, motif centré sans t-shirt, flat design print-ready",
            tags: ["vintage", "montagne", "aventure"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        minimalist_geometric: {
            name: "Géométrique Minimaliste",
            prompt: "Motif graphique plat pour impression : formes géométriques abstraites interconnectées, ligne art épuré, composition symétrique centrée, noir sur fond transparent, style moderne minimaliste, design sans vêtement, flat design print-ready",
            tags: ["géométrique", "minimaliste", "moderne"],
            popularity: "⭐⭐⭐⭐"
        },
        dog_lover: {
            name: "Amoureux des Chiens",
            prompt: "Design graphique plat pour impression textile : portrait stylisé de golden retriever avec couronne de fleurs, style illustration douce, texte 'Dog Mom' en script élégant, couleurs pastels chaleureuses, fond transparent, composition centrée sans t-shirt, flat design print-ready",
            tags: ["chien", "animaux", "maman"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        gamer: {
            name: "Gamer Rétro",
            prompt: "Motif graphique plat pour impression : manette de jeu vintage pixelisée style 8-bit, effets glitch colorés néon, texte 'Level Up' en typographie pixel art, palette cyber futuriste, design centré sans vêtement, flat design print-ready",
            tags: ["gaming", "rétro", "geek"],
            popularity: "⭐⭐⭐⭐"
        }
    },

    // POSTERS
    posters: {
        botanical_modern: {
            name: "Botanique Moderne",
            prompt: "Design graphique plat pour poster : feuille de monstera délicieuse en gros plan, style illustration botanique moderne, palette de verts profonds, détails fins des nervures, composition verticale élégante minimaliste, motif sans cadre, flat design print-ready",
            tags: ["botanique", "plante", "moderne"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        abstract_shapes: {
            name: "Formes Abstraites",
            prompt: "Design graphique plat pour poster : composition abstraite de formes organiques qui se chevauchent, palette terracotta rose et beige, textures subtiles, style moderne scandinave apaisant, motif sans cadre ni mur, flat design print-ready",
            tags: ["abstract", "moderne", "scandinave"],
            popularity: "⭐⭐⭐⭐"
        },
        mountain_sunset: {
            name: "Coucher de Soleil Montagne",
            prompt: "Design graphique plat pour poster : silhouette de chaîne de montagnes en couches, coucher de soleil avec dégradé orange rose violet, style minimaliste géométrique, composition verticale paisible, motif sans cadre, flat design print-ready",
            tags: ["nature", "montagne", "sunset"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        quote_minimalist: {
            name: "Citation Minimaliste",
            prompt: "Design graphique plat pour poster : citation 'Inhale Confidence, Exhale Doubt' en typographie serif élégante, éléments décoratifs linéaires subtils, palette noir et or, composition équilibrée verticale, motif sans cadre, flat design print-ready",
            tags: ["citation", "motivation", "typographie"],
            popularity: "⭐⭐⭐⭐"
        }
    },

    // COQUES TÉLÉPHONE
    phone_cases: {
        marble_gold: {
            name: "Marbre Or",
            prompt: "Pattern graphique plat pour coque téléphone : texture marbre blanc veiné d'or, détails métalliques dorés, style luxueux élégant, composition carrée équilibrée, finition brillante, motif sans téléphone, flat design print-ready",
            tags: ["marbre", "or", "luxe"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        floral_watercolor: {
            name: "Aquarelle Florale",
            prompt: "Design graphique plat pour coque : composition florale aquarelle avec pivoines et eucalyptus, couleurs pastel rose et vert menthe, style délicat romantique, fond blanc doux, motif sans téléphone, flat design print-ready",
            tags: ["floral", "aquarelle", "romantique"],
            popularity: "⭐⭐⭐⭐"
        },
        geometric_gradient: {
            name: "Dégradé Géométrique",
            prompt: "Pattern graphique plat pour coque : motif géométrique avec triangles et losanges, dégradé néon rose bleu violet, style futuriste vibrant, composition symétrique carrée, design sans téléphone, flat design print-ready",
            tags: ["géométrique", "gradient", "moderne"],
            popularity: "⭐⭐⭐⭐"
        },
        space_galaxy: {
            name: "Galaxie Cosmique",
            prompt: "Design graphique plat pour coque : nébuleuse spatiale avec étoiles scintillantes, palette violet bleu et rose cosmique, style astronomique impressionnant, composition carrée immersive, motif sans téléphone, flat design print-ready",
            tags: ["espace", "galaxie", "cosmos"],
            popularity: "⭐⭐⭐⭐⭐"
        }
    },

    // SWEATSHIRTS
    sweatshirts: {
        cozy_vibes: {
            name: "Ambiance Cozy",
            prompt: "Design graphique plat pour sweatshirt : illustration stylisée de tasse fumante avec motif tricot, texte 'Cozy Vibes Only' en typographie chaleureuse script, éléments hygge, palette automnale, fond transparent, composition centrée sans vêtement, flat design print-ready",
            tags: ["cozy", "automne", "hygge"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        feminist_power: {
            name: "Pouvoir Féminin",
            prompt: "Design graphique plat pour sweatshirt : texte bold 'Nevertheless She Persisted' en typographie forte impactante, éléments floraux puissants, palette rose et noir, style empowerment moderne, fond transparent, composition centrée sans vêtement, flat design print-ready",
            tags: ["féministe", "empowerment", "citation"],
            popularity: "⭐⭐⭐⭐"
        },
        nature_lover: {
            name: "Amoureux Nature",
            prompt: "Design graphique plat pour sweatshirt : scène de forêt minimaliste avec pins et montagnes, silhouettes d'animaux (cerf, renard), texte 'Into the Wild', style aventure naturel, fond transparent, composition centrée sans vêtement, flat design print-ready",
            tags: ["nature", "aventure", "forêt"],
            popularity: "⭐⭐⭐⭐⭐"
        }
    },

    // TOTE BAGS
    tote_bags: {
        book_lover: {
            name: "Passionné de Livres",
            prompt: "Design graphique plat pour tote bag : pile de livres stylisée avec tasse de thé, plante en pot, citation 'Just One More Chapter' en typographie littéraire, style cozy librairie, couleurs douces, composition verticale centrée sans sac, flat design print-ready",
            tags: ["livres", "lecture", "cozy"],
            popularity: "⭐⭐⭐⭐⭐"
        },
        eco_friendly: {
            name: "Écologique",
            prompt: "Design graphique plat pour tote bag : planète Terre avec feuilles et fleurs, texte 'Choose Reusable' en typographie écologique, style illustratif moderne, palette verte naturelle, composition verticale centrée sans sac, flat design print-ready",
            tags: ["éco", "planète", "durable"],
            popularity: "⭐⭐⭐⭐"
        },
        farmers_market: {
            name: "Marché Fermier",
            prompt: "Design graphique plat pour tote bag : illustration de fruits et légumes frais (tomates, citrons, carottes), style dessin au trait vintage, texte 'Fresh from the Market', composition verticale équilibrée, motif sans sac, flat design print-ready",
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