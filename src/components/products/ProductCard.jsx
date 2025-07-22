import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Star, 
  Download, 
  Heart, 
  Eye, 
  ShoppingCart,
  TrendingUp,
  Clock
} from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { useAuthStore } from '../../store/authStore'
import toast from 'react-hot-toast'

const ProductCard = ({ product, layout = 'vertical' }) => {
  const { addItem, isInCart } = useCartStore()
  const { isAuthenticated } = useAuthStore()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!isAuthenticated) {
      toast.error('Connectez-vous pour ajouter au panier')
      return
    }

    addItem(product)
  }

  const handleQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Implement quick view modal logic here
    toast.success('Aperçu rapide (à implémenter)')
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      minimumFractionDigits: 0,
    }).format(price).replace('MGA', 'Ar')
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    )
  }

  if (layout === 'horizontal') {
    return (
      <Link to={`/products/${product.id}`} className="block group">
        <motion.div
          whileHover={{ y: -2 }}
          className="card-hover flex overflow-hidden h-40"
        >
          {/* Image */}
          <div className="w-48 h-full relative overflow-hidden flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.discount && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{product.discount}%
              </div>
            )}
            {product.isTopSeller && (
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                Top
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  Récent
                </div>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                {product.title}
              </h3>
              
              <div className="flex items-center mb-2">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-500 ml-2">
                  ({product.reviewCount})
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleQuickView}
                  className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  title="Aperçu rapide"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={handleAddToCart}
                  className={`btn-primary btn-sm ${isInCart(product.id) ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  title={isInCart(product.id) ? 'Déjà dans le panier' : 'Ajouter au panier'}
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    )
  }

  return (
    <Link to={`/products/${product.id}`} className="block group">
      <motion.div
        whileHover={{ y: -4 }}
        className="card-hover overflow-hidden"
      >
        {/* Image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.discount && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{product.discount}%
              </div>
            )}
            {product.isTopSeller && (
              <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                Top vente
              </div>
            )}
          </div>

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
            <button
              onClick={handleQuickView}
              className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
              title="Aperçu rapide"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-full transition-colors ${
                isInCart(product.id) 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
              title={isInCart(product.id) ? 'Déjà dans le panier' : 'Ajouter au panier'}
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist */}
          <button 
            className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 rounded-full transition-colors opacity-0 group-hover:opacity-100"
            title="Ajouter aux favoris"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category & Time */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <span className="text-xs text-gray-500">
              {product.likes.toLocaleString()} ❤️
            </span>
          </div>
          
          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors leading-tight">
            {product.title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-3">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-500 ml-2">
              ({product.reviewCount})
            </span>
          </div>

          {/* Seller */}
          <p className="text-sm text-gray-500 mb-4">
            Par <span className="font-medium">{product.seller}</span>
          </p>

          {/* Price & Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className={`btn-primary btn-sm ${isInCart(product.id) ? 'bg-green-600 hover:bg-green-700' : ''}`}
              title={isInCart(product.id) ? 'Déjà dans le panier' : 'Ajouter au panier'}
            >
              {isInCart(product.id) ? (
                'Dans le panier'
              ) : (
                <>
                  <Download className="w-4 h-4 mr-1" />
                  Acheter
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductCard