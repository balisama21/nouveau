// SmartDigitalPro - Marketplace JavaScript Complet
// Toutes les fonctionnalités demandées : modales plein écran, chat vendeur, réactions uniques, etc.

// Global variables
let currentUser = null;
let products = [];
let filteredProducts = [];
let favorites = [];
let comments = {};
let conversations = {};
let currentChatProductId = null;

// Sample products data with all requested features
const sampleProducts = [
    {
        id: 1,
        title: "MacBook Air M2",
        category: "electronics",
        price: 2800000,
        description: "MacBook Air avec puce M2, 8Go RAM, 256Go SSD. État neuf, encore sous garantie. Parfait pour le travail et les études.",
        images: ["https://via.placeholder.com/400x300/10b981/ffffff?text=MacBook+Air"],
        seller: {
            name: "Tech Store Antananarivo",
            rating: 4.8,
            totalSales: 150
        },
        stock: 5,
        type: "physical",
        reactions: { like: 24, love: 8, wow: 3 },
        userReaction: null,
        views: 245,
        featured: true
    },
    {
        id: 2,
        title: "Formation développement web",
        category: "services",
        price: 150000,
        description: "Formation complète en développement web (HTML, CSS, JavaScript, PHP). 3 mois de cours avec certificat. Support inclus.",
        images: ["https://via.placeholder.com/400x300/3b82f6/ffffff?text=Formation+Web"],
        seller: {
            name: "CodeAcademy Madagascar",
            rating: 4.9,
            totalSales: 89
        },
        stock: 20,
        type: "service",
        reactions: { like: 18, love: 5, wow: 2 },
        userReaction: null,
        views: 189
    },
    {
        id: 3,
        title: "Samsung Galaxy S23",
        category: "electronics",
        price: 1200000,
        description: "Samsung Galaxy S23 128Go, état excellent. Avec chargeur et écouteurs d'origine. Facture disponible.",
        images: ["https://via.placeholder.com/400x300/ef4444/ffffff?text=Galaxy+S23"],
        seller: {
            name: "Mobile Shop Tamatave",
            rating: 4.6,
            totalSales: 203
        },
        stock: 3,
        type: "physical",
        reactions: { like: 32, love: 12, wow: 1 },
        userReaction: null,
        views: 321
    },
    {
        id: 4,
        title: "Robe traditionnelle Malagasy",
        category: "clothing",
        price: 85000,
        description: "Belle robe traditionnelle malgache, faite main. Taille M, tissus de qualité premium. Idéale pour les événements.",
        images: ["https://via.placeholder.com/400x300/f59e0b/ffffff?text=Robe+Traditionnelle"],
        seller: {
            name: "Artisanat Malgache",
            rating: 4.7,
            totalSales: 76
        },
        stock: 2,
        type: "physical",
        reactions: { like: 15, love: 20, wow: 5 },
        userReaction: null,
        views: 142
    },
    {
        id: 5,
        title: "Service de livraison express",
        category: "services",
        price: 25000,
        description: "Service de livraison express dans Antananarivo. Livraison le jour même garantie. Suivi en temps réel.",
        images: ["https://via.placeholder.com/400x300/10b981/ffffff?text=Livraison+Express"],
        seller: {
            name: "Express Delivery Mada",
            rating: 4.5,
            totalSales: 312
        },
        stock: 999,
        type: "service",
        reactions: { like: 8, love: 3, wow: 1 },
        userReaction: null,
        views: 89
    },
    {
        id: 6,
        title: "Kit de jardinage complet",
        category: "home",
        price: 75000,
        description: "Kit complet pour jardinage : bêche, râteau, arrosoir, gants, graines diverses. Tout pour commencer votre jardin.",
        images: ["https://via.placeholder.com/400x300/047857/ffffff?text=Kit+Jardinage"],
        seller: {
            name: "Green Garden Madagascar",
            rating: 4.8,
            totalSales: 45
        },
        stock: 8,
        type: "physical",
        reactions: { like: 12, love: 6, wow: 2 },
        userReaction: null,
        views: 156
    }
];

// Initialize the application
function init() {
    products = [...sampleProducts];
    filteredProducts = [...products];
    
    // Initialize comments for existing products
    products.forEach(product => {
        if (!comments[product.id]) {
            comments[product.id] = [
                {
                    id: 1,
                    author: "Marie Rasoavelona",
                    content: "Très bon produit, je recommande !",
                    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
                },
                {
                    id: 2,
                    author: "Jean Rakoto",
                    content: "Livraison rapide et produit conforme à la description.",
                    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
                }
            ];
        }
    });

    renderProducts(products.filter(p => p.featured), document.getElementById('featuredProducts'));
    renderProducts(filteredProducts, document.getElementById('productsGrid'));
    updateFavorites();
}

// Product rendering with improved cards and interactions
function renderProducts(productsToRender, container) {
    if (productsToRender.length === 0) {
        container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--gray);"><i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i><h3>Aucun produit trouvé</h3><p>Essayez d\'autres mots-clés ou catégories</p></div>';
        return;
    }

    container.innerHTML = productsToRender.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-gallery">
                <div class="product-images">
                    ${product.images.map(img => `<img src="${img}" alt="${product.title}">`).join('')}
                </div>
                ${product.featured ? '<div class="product-badge badge-featured">Populaire</div>' : ''}
                ${product.type === 'service' ? '<div class="product-badge badge-new">Service</div>' : ''}
            </div>
            
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)} Ar</div>
                
                <div class="product-meta">
                    <span><i class="fas fa-eye"></i> ${product.views}</span>
                    <span><i class="fas fa-star"></i> ${product.seller.rating}</span>
                    <span><i class="fas fa-box"></i> ${product.stock}</span>
                </div>

                <div class="product-interactions">
                    <div class="interaction-buttons">
                        <button class="interaction-btn like-btn" onclick="toggleReaction(${product.id}, 'like'); event.stopPropagation();">
                            <i class="fas fa-heart"></i> ${product.reactions.like}
                        </button>
                        <button class="interaction-btn comment-btn" onclick="openProductModal(${product.id}); event.stopPropagation();">
                            <i class="fas fa-comment"></i> ${comments[product.id] ? comments[product.id].length : 0}
                        </button>
                        <button class="interaction-btn contact-btn" onclick="openChat(${product.id}); event.stopPropagation();">
                            <i class="fas fa-message"></i> Contact
                        </button>
                    </div>
                    
                    <div class="single-reaction">
                        <button class="reaction-btn ${product.userReaction === 'like' ? 'active' : ''}" onclick="toggleReaction(${product.id}, 'like'); event.stopPropagation();">
                            ❤️ ${product.reactions.like}
                        </button>
                        <button class="reaction-btn ${product.userReaction === 'love' ? 'active' : ''}" onclick="toggleReaction(${product.id}, 'love'); event.stopPropagation();">
                            😍 ${product.reactions.love}
                        </button>
                        <button class="reaction-btn ${product.userReaction === 'wow' ? 'active' : ''}" onclick="toggleReaction(${product.id}, 'wow'); event.stopPropagation();">
                            😮 ${product.reactions.wow}
                        </button>
                    </div>
                </div>

                <div class="product-actions">
                    <button class="btn btn-primary" onclick="buyProduct(${product.id}); event.stopPropagation();">
                        <i class="fas fa-shopping-cart"></i>
                        ${product.type === 'service' ? 'Réserver' : 'Acheter'}
                    </button>
                    <button class="btn btn-outline" onclick="toggleFavorite(${product.id}); event.stopPropagation();">
                        <i class="fas fa-heart ${favorites.includes(product.id) ? '' : ''}"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// FULL SCREEN PRODUCT MODAL
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    product.views++;

    const modalContent = document.getElementById('productModalContent');
    modalContent.innerHTML = `
        <div class="product-modal-gallery">
            <img src="${product.images[0]}" alt="${product.title}" class="main-product-image" id="mainImage">
        </div>
        
        <div class="product-modal-info">
            <h1 class="product-modal-title">${product.title}</h1>
            <div class="product-modal-price">${formatPrice(product.price)} Ar</div>
            <p style="font-size: 1rem; line-height: 1.8; color: var(--gray); margin-bottom: 2rem;">${product.description}</p>
            
            <div class="seller-info">
                <div class="seller-header">
                    <div class="seller-avatar">${product.seller.name.charAt(0)}</div>
                    <div>
                        <h3 style="margin-bottom: 0.25rem; color: var(--dark);">${product.seller.name}</h3>
                        <div class="seller-rating">
                            <i class="fas fa-star"></i>
                            ${product.seller.rating} (${product.seller.totalSales} ventes)
                        </div>
                    </div>
                </div>
                <button class="btn btn-outline" onclick="openChat(${product.id})">
                    <i class="fas fa-comments"></i>
                    Contacter le vendeur
                </button>
            </div>

            <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                <button class="btn btn-primary" onclick="buyProduct(${product.id})" style="flex: 1;">
                    <i class="fas fa-shopping-cart"></i>
                    ${product.type === 'service' ? 'Réserver maintenant' : 'Acheter maintenant'}
                </button>
                <button class="btn btn-outline" onclick="toggleFavorite(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="btn btn-outline" onclick="openChat(${product.id})">
                    <i class="fas fa-message"></i>
                </button>
            </div>

            <div style="border-top: 1px solid var(--border); padding-top: 2rem; margin-top: 2rem;">
                <h3 style="margin-bottom: 1.5rem;">Commentaires (${comments[product.id] ? comments[product.id].length : 0})</h3>
                
                ${currentUser ? `
                    <div style="background: var(--light-gray); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
                        <textarea id="newComment" placeholder="Ajouter un commentaire..." style="width: 100%; padding: 1rem; border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: 1rem; min-height: 100px; resize: vertical;"></textarea>
                        <button class="btn btn-primary" onclick="addComment(${product.id})">
                            <i class="fas fa-paper-plane"></i>
                            Publier
                        </button>
                    </div>
                ` : `
                    <p style="text-align: center; color: var(--gray); padding: 2rem;">
                        <a href="#" onclick="showAuthModal('login')" style="color: var(--primary);">Connectez-vous</a> pour laisser un commentaire
                    </p>
                `}

                <div id="commentsList">
                    ${renderComments(product.id)}
                </div>
            </div>
        </div>
    `;

    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Render comments
function renderComments(productId) {
    const productComments = comments[productId] || [];
    return productComments.map(comment => `
        <div style="background: var(--white); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 1rem; border: 1px solid var(--border);">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--secondary); display: flex; align-items: center; justify-content: center; color: var(--white); font-weight: 600;">
                    ${comment.author.charAt(0)}
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: var(--dark);">${comment.author}</div>
                    <div style="font-size: 0.875rem; color: var(--gray);">${formatDate(comment.date)}</div>
                </div>
            </div>
            <p>${comment.content}</p>
        </div>
    `).join('');
}

// Add comment
function addComment(productId) {
    if (!currentUser) {
        showNotification('🔒 Veuillez vous connecter pour commenter', 'error');
        return;
    }

    const commentInput = document.getElementById('newComment');
    const content = commentInput.value.trim();
    
    if (!content) return;

    if (!comments[productId]) {
        comments[productId] = [];
    }

    const newComment = {
        id: Date.now(),
        author: currentUser.name,
        content: content,
        date: new Date()
    };

    comments[productId].unshift(newComment);
    commentInput.value = '';

    document.getElementById('commentsList').innerHTML = renderComments(productId);
    showNotification('💬 Commentaire ajouté !', 'success');
}

// SINGLE REACTION SYSTEM (une seule réaction par utilisateur)
function toggleReaction(productId, reactionType) {
    if (!currentUser) {
        showNotification('🔒 Veuillez vous connecter pour réagir', 'error');
        showAuthModal('login');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Remove previous reaction if different
    if (product.userReaction && product.userReaction !== reactionType) {
        product.reactions[product.userReaction]--;
    }

    // Toggle current reaction
    if (product.userReaction === reactionType) {
        product.reactions[reactionType]--;
        product.userReaction = null;
        showNotification('💭 Réaction supprimée', 'warning');
    } else {
        product.reactions[reactionType]++;
        product.userReaction = reactionType;
        showNotification(`${getReactionEmoji(reactionType)} Réaction ajoutée !`, 'success');
    }

    // Update displays
    renderProducts(filteredProducts, document.getElementById('productsGrid'));
    renderProducts(products.filter(p => p.featured), document.getElementById('featuredProducts'));
}

function getReactionEmoji(reactionType) {
    const emojis = { like: '❤️', love: '😍', wow: '😮' };
    return emojis[reactionType] || '👍';
}

// SELLER COMMUNICATION CHAT
function openChat(productId) {
    if (!currentUser) {
        showNotification('🔒 Veuillez vous connecter pour contacter le vendeur', 'error');
        showAuthModal('login');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentChatProductId = productId;
    document.querySelector('.chat-title').textContent = `Chat avec ${product.seller.name}`;
    document.getElementById('chatModal').classList.add('active');

    // Initialize conversation if it doesn't exist
    if (!conversations[productId]) {
        conversations[productId] = [
            {
                type: 'received',
                content: `Bonjour ! Je suis ${product.seller.name}. Comment puis-je vous aider concernant "${product.title}" ?`,
                timestamp: new Date()
            }
        ];
    }

    displayChatMessages(productId);
}

function displayChatMessages(productId) {
    const messagesContainer = document.getElementById('chatMessages');
    const conversation = conversations[productId] || [];
    
    messagesContainer.innerHTML = conversation.map(message => `
        <div class="chat-message ${message.type}">
            ${message.content}
        </div>
    `).join('');
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message || !currentChatProductId) return;

    if (!conversations[currentChatProductId]) {
        conversations[currentChatProductId] = [];
    }

    conversations[currentChatProductId].push({
        type: 'sent',
        content: message,
        timestamp: new Date()
    });

    input.value = '';
    displayChatMessages(currentChatProductId);
    
    // Simulate response after 2 seconds
    setTimeout(() => {
        conversations[currentChatProductId].push({
            type: 'received',
            content: 'Merci pour votre message ! Je vous réponds dès que possible.',
            timestamp: new Date()
        });
        displayChatMessages(currentChatProductId);
    }, 2000);
}

function closeChat() {
    document.getElementById('chatModal').classList.remove('active');
    currentChatProductId = null;
}

// BUY PRODUCT (redirects to chat with seller)
function buyProduct(productId) {
    if (!currentUser) {
        showNotification('🔒 Veuillez vous connecter pour acheter', 'error');
        showAuthModal('login');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.stock < 1) {
        showNotification('❌ Stock insuffisant', 'error');
        return;
    }

    product.stock--;
    showNotification(`✅ Commande confirmée ! Contactez le vendeur pour finaliser.`, 'success');
    
    setTimeout(() => {
        closeModal('productModal');
        openChat(productId);
    }, 1000);
}

// FAVORITES SYSTEM
function toggleFavorite(productId) {
    if (!currentUser) {
        showNotification('🔒 Veuillez vous connecter pour ajouter aux favoris', 'error');
        return;
    }

    const index = favorites.indexOf(productId);
    if (index === -1) {
        favorites.push(productId);
        showNotification('❤️ Ajouté aux favoris', 'success');
    } else {
        favorites.splice(index, 1);
        showNotification('💔 Retiré des favoris', 'warning');
    }

    updateFavorites();
    renderProducts(filteredProducts, document.getElementById('productsGrid'));
    renderProducts(products.filter(p => p.featured), document.getElementById('featuredProducts'));
}

function updateFavorites() {
    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    renderProducts(favoriteProducts, document.getElementById('favoritesGrid'));
}

// MULTI-PRODUCT PLATFORM FILTERS AND SEARCH
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!query) {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
    }
    
    renderProducts(filteredProducts, document.getElementById('productsGrid'));
}

function filterByCategory(category) {
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter products
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    renderProducts(filteredProducts, document.getElementById('productsGrid'));
}

function sortProducts() {
    const sortBy = document.getElementById('sortSelect').value;
    
    switch (sortBy) {
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            filteredProducts.sort((a, b) => b.views - a.views);
            break;
    }
    
    renderProducts(filteredProducts, document.getElementById('productsGrid'));
}

// NAVIGATION SYSTEM
function showSection(sectionName) {
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Show section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName).classList.add('active');

    // Load section-specific content
    if (sectionName === 'products') {
        renderProducts(filteredProducts, document.getElementById('productsGrid'));
    } else if (sectionName === 'favorites') {
        updateFavorites();
    }
}

// AUTHENTICATION SYSTEM
function showAuthModal(type) {
    document.getElementById('authModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    switchAuthTab(type);
}

function switchAuthTab(type) {
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });

    document.querySelector(`[onclick="switchAuthTab('${type}')"]`).classList.add('active');
    document.getElementById(type + 'Form').classList.add('active');
}

function login(event) {
    event.preventDefault();
    
    // Simulate login
    currentUser = {
        id: 1,
        name: "John Doe",
        email: "john@example.com"
    };
    
    updateUserUI();
    closeModal('authModal');
    showNotification('🎉 Connexion réussie !', 'success');
}

function register(event) {
    event.preventDefault();
    
    // Simulate registration
    currentUser = {
        id: 1,
        name: "Nouvel Utilisateur",
        email: "user@example.com"
    };
    
    updateUserUI();
    closeModal('authModal');
    showNotification('�� Inscription réussie !', 'success');
}

function logout() {
    currentUser = null;
    favorites = [];
    updateUserUI();
    showNotification('👋 À bientôt !', 'warning');
}

function updateUserUI() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userMenu = document.getElementById('userMenu');
    const userName = document.getElementById('userName');

    if (currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        userMenu.style.display = 'flex';
        userName.textContent = currentUser.name;
    } else {
        loginBtn.style.display = 'flex';
        registerBtn.style.display = 'flex';
        userMenu.style.display = 'none';
    }
}

// UTILITY FUNCTIONS
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

function getCategoryName(category) {
    const categories = {
        'electronics': 'Électronique',
        'clothing': 'Vêtements',
        'home': 'Maison & Jardin',
        'sports': 'Sports & Loisirs',
        'books': 'Livres & Média',
        'services': 'Services',
        'automotive': 'Automobile',
        'beauty': 'Beauté & Santé'
    };
    return categories[category] || category;
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', init);

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
});

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});

// Chat input on Enter key
document.addEventListener('keypress', function(event) {
    if (event.target.id === 'chatInput' && event.key === 'Enter') {
        sendMessage();
    }
});
