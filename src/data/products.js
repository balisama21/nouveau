export const products = [
  {
    id: 'product1',
    title: '100 modèles Canva pour les réseaux sociaux',
    category: 'Modèles Canva',
    categorySlug: 'canva',
    description: 'Un pack complet de 100 modèles Canva professionnels et personnalisables pour dynamiser votre présence sur les réseaux sociaux. Idéal pour Instagram, Facebook, et plus encore. Gagnez du temps et créez du contenu percutant en quelques clics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 25000,
    oldPrice: 35000,
    discount: 29,
    seller: 'Jean Dupont',
    likes: 1250,
    rating: 4.8,
    reviewCount: 156,
    isTopSeller: true,
    isFeatured: true,
    createdAt: '2024-01-15',
    tags: ['canva', 'réseaux sociaux', 'instagram', 'facebook', 'marketing'],
    files: [
      { name: 'Canva_Templates_Pack.zip', size: '125 MB', type: 'zip' }
    ],
    preview: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    comments: [
      { 
        id: 1,
        author: 'Marie Rasoa', 
        text: 'Super produit, très utile pour ma stratégie marketing ! Les templates sont variés et de haute qualité.',
        rating: 5,
        date: '2024-02-10'
      },
      { 
        id: 2,
        author: 'Designer Pro', 
        text: 'Les modèles sont très bien conçus et faciles à modifier. Je recommande !',
        rating: 5,
        date: '2024-02-05'
      }
    ]
  },
  {
    id: 'product2',
    title: 'E-book : Les fondamentaux du Marketing Digital',
    category: 'E-books',
    categorySlug: 'ebook',
    description: 'Découvrez les bases essentielles du marketing digital avec cet e-book complet. Apprenez le SEO, le SEM, le marketing de contenu, les réseaux sociaux et bien plus encore pour propulser votre activité en ligne.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 15000,
    oldPrice: null,
    discount: null,
    seller: 'DigitalExpert',
    likes: 800,
    rating: 4.6,
    reviewCount: 89,
    isTopSeller: false,
    isFeatured: true,
    createdAt: '2024-01-20',
    tags: ['marketing digital', 'seo', 'sem', 'stratégie', 'guide'],
    files: [
      { name: 'Marketing_Digital_Guide.pdf', size: '12 MB', type: 'pdf' }
    ],
    preview: {
      type: 'pdf',
      url: '/previews/marketing-digital-preview.pdf'
    },
    comments: [
      { 
        id: 1,
        author: 'Lecteur Curieux', 
        text: 'Très instructif, j\'ai appris beaucoup de choses. Parfait pour débuter.',
        rating: 5,
        date: '2024-02-08'
      },
      { 
        id: 2,
        author: 'Entrepreneur Débutant', 
        text: 'Une excellente ressource pour commencer en marketing digital.',
        rating: 4,
        date: '2024-02-03'
      }
    ]
  },
  {
    id: 'product3',
    title: 'Formation complète Adobe Premiere Pro (Débutant)',
    category: 'Formations Vidéo',
    categorySlug: 'formation',
    description: 'Maîtrisez Adobe Premiere Pro du débutant à un niveau intermédiaire avec cette formation vidéo détaillée. Apprenez le montage, l\'étalonnage, l\'ajout d\'effets et l\'exportation de vos projets pour des vidéos de qualité professionnelle.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 50000,
    oldPrice: 70000,
    discount: 28,
    seller: 'VideoMaestro',
    likes: 2100,
    rating: 4.9,
    reviewCount: 267,
    isTopSeller: true,
    isFeatured: true,
    createdAt: '2024-01-10',
    tags: ['premiere pro', 'montage vidéo', 'formation', 'adobe', 'création'],
    files: [
      { name: 'Premiere_Pro_Course_Part1.mp4', size: '850 MB', type: 'video' },
      { name: 'Premiere_Pro_Course_Part2.mp4', size: '920 MB', type: 'video' },
      { name: 'Course_Resources.zip', size: '156 MB', type: 'zip' }
    ],
    preview: {
      type: 'video',
      url: 'https://player.vimeo.com/video/sample-preview'
    },
    comments: [
      { 
        id: 1,
        author: 'Monteur Junior', 
        text: 'La formation est très claire et les exercices pratiques sont super ! J\'ai progressé rapidement.',
        rating: 5,
        date: '2024-02-12'
      },
      { 
        id: 2,
        author: 'Apprenti Vidéaste', 
        text: 'J\'ai enfin compris comment utiliser Premiere Pro, merci ! Très pédagogique.',
        rating: 5,
        date: '2024-02-07'
      }
    ]
  },
  {
    id: 'product4',
    title: 'Calendrier Éditorial 2024 pour Réseaux Sociaux',
    category: 'Outils',
    categorySlug: 'outils',
    description: 'Organisez votre contenu sur les réseaux sociaux avec notre calendrier éditorial pré-rempli pour 2024. Planifiez vos publications, suivez vos performances et optimisez votre stratégie de contenu tout au long de l\'année.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 10000,
    oldPrice: null,
    discount: null,
    seller: 'ContentStrategist',
    likes: 450,
    rating: 4.4,
    reviewCount: 67,
    isTopSeller: false,
    isFeatured: false,
    createdAt: '2024-01-25',
    tags: ['calendrier', 'planification', 'réseaux sociaux', 'organisation'],
    files: [
      { name: 'Calendrier_Editorial_2024.xlsx', size: '2.5 MB', type: 'excel' }
    ],
    preview: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    comments: [
      { 
        id: 1,
        author: 'Community Manager', 
        text: 'Indispensable pour la gestion de mes réseaux sociaux. Très bien structuré.',
        rating: 4,
        date: '2024-02-06'
      }
    ]
  },
  {
    id: 'product5',
    title: 'Séance de Coaching Marketing Personnalisé 1H',
    category: 'Coaching',
    categorySlug: 'coaching',
    description: 'Bénéficiez d\'une séance de coaching personnalisée d\'une heure pour discuter de votre stratégie marketing, résoudre vos défis spécifiques et obtenir des conseils d\'experts adaptés à votre entreprise.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 80000,
    oldPrice: null,
    discount: null,
    seller: 'Jean Dupont',
    likes: 320,
    rating: 4.7,
    reviewCount: 45,
    isTopSeller: false,
    isFeatured: true,
    createdAt: '2024-01-30',
    tags: ['coaching', 'conseil', 'marketing', 'stratégie', 'personnalisé'],
    files: [
      { name: 'Coaching_Session_Booking.pdf', size: '0.5 MB', type: 'pdf' }
    ],
    preview: {
      type: 'video',
      url: 'https://player.vimeo.com/video/coaching-intro'
    },
    comments: [
      { 
        id: 1,
        author: 'Client Satisfait', 
        text: 'La séance a été très enrichissante et m\'a donné une nouvelle perspective sur mon business.',
        rating: 5,
        date: '2024-02-09'
      }
    ]
  },
  {
    id: 'product6',
    title: '50 Modèles de Site Web Responsive (HTML/CSS)',
    category: 'Web Design',
    categorySlug: 'webdesign',
    description: 'Un ensemble de 50 modèles de sites web modernes et entièrement responsives, conçus avec HTML et CSS. Parfait pour les développeurs ou les agences souhaitant démarrer rapidement des projets professionnels.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 30000,
    oldPrice: null,
    discount: null,
    seller: 'WebCrafters Mada',
    likes: 750,
    rating: 4.5,
    reviewCount: 98,
    isTopSeller: false,
    isFeatured: false,
    createdAt: '2024-02-01',
    tags: ['web design', 'templates', 'html', 'css', 'responsive'],
    files: [
      { name: 'Web_Templates_Pack.zip', size: '45 MB', type: 'zip' }
    ],
    preview: {
      type: 'website',
      url: '/previews/web-templates-demo'
    },
    comments: [
      { 
        id: 1,
        author: 'Développeur Junior', 
        text: 'Ces modèles sont un gain de temps incroyable. Très adaptables et bien codés !',
        rating: 5,
        date: '2024-02-11'
      }
    ]
  },
  {
    id: 'product7',
    title: 'Outil de Gestion de Stock Simple pour PME',
    category: 'Outils',
    categorySlug: 'logistique',
    description: 'Un outil intuitif basé sur Excel (ou Google Sheets) pour les petites et moyennes entreprises. Suivez votre inventaire, gérez les entrées/sorties et optimisez vos stocks facilement.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 20000,
    oldPrice: null,
    discount: null,
    seller: 'SolutionsEntreprise',
    likes: 300,
    rating: 4.3,
    reviewCount: 56,
    isTopSeller: false,
    isFeatured: false,
    createdAt: '2024-02-05',
    tags: ['gestion', 'stock', 'inventaire', 'pme', 'excel'],
    files: [
      { name: 'Gestion_Stock_PME.xlsx', size: '3.2 MB', type: 'excel' },
      { name: 'Guide_Utilisation.pdf', size: '1.8 MB', type: 'pdf' }
    ],
    preview: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    comments: [
      { 
        id: 1,
        author: 'Gérant PME', 
        text: 'Très pratique pour nos besoins basiques. Facile à prendre en main et efficace.',
        rating: 4,
        date: '2024-02-13'
      }
    ]
  },
  {
    id: 'product8',
    title: 'Pack Logo Design + Charte Graphique',
    category: 'Design',
    categorySlug: 'design',
    description: 'Service complet de création de logo et charte graphique pour votre entreprise. Incluant 3 propositions de logo, déclinaisons et guide d\'utilisation détaillé.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 120000,
    oldPrice: 150000,
    discount: 20,
    seller: 'Creative Studio MG',
    likes: 890,
    rating: 4.8,
    reviewCount: 134,
    isTopSeller: true,
    isFeatured: true,
    createdAt: '2024-01-05',
    tags: ['logo', 'design', 'charte graphique', 'identité visuelle', 'branding'],
    files: [
      { name: 'Logo_Package.zip', size: '25 MB', type: 'zip' }
    ],
    preview: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    comments: [
      { 
        id: 1,
        author: 'Startup CEO', 
        text: 'Travail de qualité exceptionnelle ! Notre nouvelle identité visuelle est parfaite.',
        rating: 5,
        date: '2024-02-14'
      }
    ]
  }
]

export const categories = [
  { id: 'all', name: 'Toutes les catégories', slug: 'all' },
  { id: 'canva', name: 'Templates Canva', slug: 'canva' },
  { id: 'ebook', name: 'E-books', slug: 'ebook' },
  { id: 'formation', name: 'Formations', slug: 'formation' },
  { id: 'coaching', name: 'Coaching', slug: 'coaching' },
  { id: 'webdesign', name: 'Web Design', slug: 'webdesign' },
  { id: 'design', name: 'Design', slug: 'design' },
  { id: 'outils', name: 'Outils', slug: 'outils' },
  { id: 'logistique', name: 'Logistique', slug: 'logistique' }
]

export const sortOptions = [
  { value: 'popular', label: 'Plus populaires' },
  { value: 'newest', label: 'Plus récents' },
  { value: 'price-low', label: 'Prix croissant' },
  { value: 'price-high', label: 'Prix décroissant' },
  { value: 'rating', label: 'Mieux notés' }
]

// Helper functions
export const getProductsByCategory = (categorySlug) => {
  if (categorySlug === 'all') return products
  return products.filter(product => product.categorySlug === categorySlug)
}

export const getTopSellingProducts = (limit = 6) => {
  return products.filter(product => product.isTopSeller).slice(0, limit)
}

export const getFeaturedProducts = (limit = 8) => {
  return products.filter(product => product.isFeatured).slice(0, limit)
}

export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase()
  return products.filter(product => 
    product.title.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

export const getProductById = (id) => {
  return products.find(product => product.id === id)
}

export default products