// Protection par mot de passe simple
// À ajouter dans index.html : <script src="js/simple-auth.js"></script>

(function() {
    'use strict';
    
    // ⚙️ CONFIGURATION - CHANGEZ LE MOT DE PASSE ICI
    const CORRECT_PASSWORD = 'DesignPro2024'; // ← Changez-moi !
    const HASH_PASSWORD = true; // Utilise hash pour plus de sécurité
    
    // Fonction de hash simple
    function simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString();
    }
    
    // Vérifier si déjà authentifié
    function isAuthenticated() {
        const authToken = sessionStorage.getItem('design_gen_auth');
        if (!authToken) return false;
        
        if (HASH_PASSWORD) {
            return authToken === simpleHash(CORRECT_PASSWORD);
        } else {
            return authToken === CORRECT_PASSWORD;
        }
    }
    
    // Demander mot de passe
    function requestPassword() {
        // Créer l'overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
        `;
        
        // Créer le formulaire
        overlay.innerHTML = `
            <div style="
                background: white;
                padding: 3rem;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                max-width: 400px;
                width: 90%;
                text-align: center;
            ">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
                <h2 style="color: #1e293b; margin-bottom: 1rem; font-family: Inter, sans-serif;">
                    Accès Protégé
                </h2>
                <p style="color: #64748b; margin-bottom: 2rem; font-family: Inter, sans-serif;">
                    Entrez le mot de passe pour accéder au générateur
                </p>
                <input 
                    type="password" 
                    id="passwordInput" 
                    placeholder="Mot de passe"
                    style="
                        width: 100%;
                        padding: 1rem;
                        border: 2px solid #e2e8f0;
                        border-radius: 10px;
                        font-size: 1rem;
                        margin-bottom: 1rem;
                        font-family: Inter, sans-serif;
                        box-sizing: border-box;
                    "
                />
                <button 
                    id="loginBtn"
                    style="
                        width: 100%;
                        padding: 1rem;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        border: none;
                        border-radius: 10px;
                        font-size: 1.1rem;
                        font-weight: 600;
                        cursor: pointer;
                        font-family: Inter, sans-serif;
                    "
                >
                    Accéder
                </button>
                <p id="errorMsg" style="
                    color: #ef4444;
                    margin-top: 1rem;
                    display: none;
                    font-family: Inter, sans-serif;
                ">
                    ❌ Mot de passe incorrect
                </p>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        const passwordInput = document.getElementById('passwordInput');
        const loginBtn = document.getElementById('loginBtn');
        const errorMsg = document.getElementById('errorMsg');
        
        // Focus automatique
        setTimeout(() => passwordInput.focus(), 100);
        
        // Fonction de vérification
        function checkPassword() {
            const password = passwordInput.value;
            let isValid = false;
            
            if (HASH_PASSWORD) {
                isValid = simpleHash(password) === simpleHash(CORRECT_PASSWORD);
            } else {
                isValid = password === CORRECT_PASSWORD;
            }
            
            if (isValid) {
                // Sauvegarder l'authentification
                const token = HASH_PASSWORD ? simpleHash(password) : password;
                sessionStorage.setItem('design_gen_auth', token);
                
                // Supprimer l'overlay
                overlay.style.opacity = '0';
                overlay.style.transition = 'opacity 0.3s';
                setTimeout(() => overlay.remove(), 300);
                
                // Log pour debug
                console.log('✅ Authentification réussie');
            } else {
                // Afficher erreur
                errorMsg.style.display = 'block';
                passwordInput.value = '';
                passwordInput.focus();
                
                // Animation shake
                passwordInput.style.animation = 'shake 0.5s';
                setTimeout(() => passwordInput.style.animation = '', 500);
                
                console.log('❌ Mot de passe incorrect');
            }
        }
        
        // Events
        loginBtn.addEventListener('click', checkPassword);
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkPassword();
        });
        
        // Animation shake CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
                20%, 40%, 60%, 80% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Déconnecter (pour debug)
    window.logout = function() {
        sessionStorage.removeItem('design_gen_auth');
        location.reload();
    };
    
    // Vérifier l'authentification au chargement
    document.addEventListener('DOMContentLoaded', function() {
        if (!isAuthenticated()) {
            // Cacher le contenu
            document.body.style.opacity = '0';
            
            // Demander mot de passe
            requestPassword();
        } else {
            console.log('✅ Déjà authentifié');
        }
    });
    
    // Info dans la console
    console.log('%c🔒 Protection Active', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%cPour vous déconnecter, tapez: logout()', 'color: #64748b; font-size: 12px;');
})();
