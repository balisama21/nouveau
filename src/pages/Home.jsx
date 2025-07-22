import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Download,
  Search,
  Filter,
  Grid3X3,
  List
} from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import ProductCard from '../components/products/ProductCard'
import SearchFilters from '../components/products/SearchFilters'
import { products } from '../data/products'

const Home = () => {
  const { addItem } = useCartStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState('grid')
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Hero section animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || 
        product.categorySlug === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating)
        break
      default: // popular
        filtered = filtered.sort((a, b) => b.likes - a.likes)
    }

    setFilteredProducts(filtered)
  }, [searchQuery, selectedCategory, sortBy])

  const topSellingProducts = products
    .filter(p => p.isTopSeller)
    .slice(0, 6)

  const featuredCategories = [
    {
      name: 'Templates Canva',
      slug: 'canva',
      count: products.filter(p => p.categorySlug === 'canva').length,
      color: 'from-purple-500 to-pink-500',
      icon: '🎨'
    },
    {
      name: 'E-books',
      slug: 'ebook',
      count: products.filter(p => p.categorySlug === 'ebook').length,
      color: 'from-blue-500 to-cyan-500',
      icon: '📚'
    },
    {
      name: 'Formations',
      slug: 'formation',
      count: products.filter(p => p.categorySlug === 'formation').length,
      color: 'from-green-500 to-emerald-500',
      icon: '🎓'
    },
    {
      name: 'Coaching',
      slug: 'coaching',
      count: products.filter(p => p.categorySlug === 'coaching').length,
      color: 'from-orange-500 to-red-500',
      icon: '💼'
    }
  ]

  const stats = [
    { label: 'Produits', value: products.length.toLocaleString(), icon: Download },
    { label: 'Utilisateurs', value: '2,500+', icon: Users },
    { label: 'Note moyenne', value: '4.8', icon: Star },
    { label: 'Téléchargements', value: '15K+', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNGY0ZjQiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container-custom relative">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Plateforme basée à Madagascar
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight"
            >
              Votre marketplace de{' '}
              <span className="gradient-text">produits numériques</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Découvrez des milliers de ressources digitales créées par des talents malgaches. 
              Templates, formations, e-books et bien plus pour booster votre business.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link
                to="/products"
                className="btn-primary btn-lg group"
              >
                Explorer les produits
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/sell"
                className="btn-outline btn-lg group"
              >
                Vendre vos créations
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Explorez nos catégories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trouvez exactement ce dont vous avez besoin parmi nos collections soigneusement organisées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-hover p-6 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} produits</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
                Meilleures ventes
              </h2>
              <p className="text-lg text-gray-600">
                Les produits les plus populaires de notre communauté
              </p>
            </div>
            <Link
              to="/products?filter=top-seller"
              className="btn-secondary hidden sm:inline-flex items-center"
            >
              Voir tout
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topSellingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products?filter=top-seller"
              className="btn-primary btn-lg sm:hidden"
            >
              Voir toutes les meilleures ventes
            </Link>
          </div>
        </div>
      </section>

      {/* All Products with Search */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Tous les produits
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez l'intégralité de notre catalogue
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input pl-10 pr-4"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input min-w-[200px]"
              >
                <option value="all">Toutes les catégories</option>
                <option value="canva">Templates Canva</option>
                <option value="ebook">E-books</option>
                <option value="formation">Formations</option>
                <option value="coaching">Coaching</option>
                <option value="webdesign">Web Design</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input min-w-[180px]"
              >
                <option value="popular">Plus populaires</option>
                <option value="newest">Plus récents</option>
                <option value="price-low">Prix croissant</option>
                <option value="price-high">Prix décroissant</option>
                <option value="rating">Mieux notés</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results count */}
            <div className="text-sm text-gray-500 mb-4">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard 
                  product={product} 
                  layout={viewMode === 'list' ? 'horizontal' : 'vertical'}
                />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Aucun produit trouvé
              </h3>
              <p className="text-gray-500 mb-6">
                Essayez de modifier vos critères de recherche
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                  setSortBy('popular')
                }}
                className="btn-secondary"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Prêt à développer votre business ?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Rejoignez des milliers d'entrepreneurs qui font confiance à SmartDigitalPro 
              pour leurs ressources numériques.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/auth"
                className="btn-lg bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Commencer gratuitement
              </Link>
              <Link
                to="/contact"
                className="btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home