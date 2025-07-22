import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  ShoppingBag, 
  ArrowRight,
  Gift
} from 'lucide-react'
import { useCartStore } from '../../store/cartStore'

const CartSidebar = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    clearCart,
    total,
    itemCount,
    subtotal,
    discount,
    couponCode
  } = useCartStore()

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      minimumFractionDigits: 0,
    }).format(price).replace('MGA', 'Ar')
  }

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-6 h-6 text-primary-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Panier ({itemCount})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Votre panier est vide
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Ajoutez des produits pour commencer vos achats
                  </p>
                  <Link
                    to="/products"
                    onClick={closeCart}
                    className="btn-primary"
                  >
                    Découvrir nos produits
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex space-x-4 p-4 bg-gray-50 rounded-lg"
                      >
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500">{item.category}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-semibold text-primary-600">
                              {formatPrice(item.price)}
                            </span>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-white rounded transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-white rounded transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors ml-2"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Clear Cart */}
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="w-full text-center text-sm text-red-600 hover:text-red-700 py-2 transition-colors"
                    >
                      Vider le panier
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer with Total and Checkout */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                {/* Coupon Section */}
                {couponCode && (
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Gift className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        Code promo: {couponCode}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-green-700">
                      -{formatPrice(discount)}
                    </span>
                  </div>
                )}

                {/* Price Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-medium">{formatPrice(subtotal || total)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Réduction</span>
                      <span className="font-medium text-green-600">
                        -{formatPrice(discount)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Livraison</span>
                    <span className="font-medium text-green-600">Gratuit</span>
                  </div>

                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="font-bold text-xl text-primary-600">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Procéder au paiement
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="btn-secondary w-full flex items-center justify-center"
                  >
                    Voir le panier
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500">
                    🔒 Paiement sécurisé • 📱 Téléchargement instantané
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartSidebar