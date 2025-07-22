import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toast from 'react-hot-toast'

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      total: 0,
      itemCount: 0,
      shippingInfo: null,
      discount: 0,
      couponCode: '',

      // Actions
      addItem: (product, quantity = 1) => {
        const { items } = get()
        const existingItem = items.find(item => item.id === product.id)

        if (existingItem) {
          // Update quantity if item already exists
          set(state => ({
            items: state.items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }))
          toast.success('Quantité mise à jour dans le panier')
        } else {
          // Add new item
          const newItem = {
            ...product,
            quantity,
            addedAt: new Date().toISOString()
          }
          
          set(state => ({
            items: [...state.items, newItem]
          }))
          toast.success('Produit ajouté au panier')
        }

        // Recalculate totals
        get().calculateTotals()
      },

      removeItem: (productId) => {
        set(state => ({
          items: state.items.filter(item => item.id !== productId)
        }))
        get().calculateTotals()
        toast.success('Produit retiré du panier')
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }

        set(state => ({
          items: state.items.map(item =>
            item.id === productId
              ? { ...item, quantity }
              : item
          )
        }))
        get().calculateTotals()
      },

      clearCart: () => {
        set({
          items: [],
          total: 0,
          itemCount: 0,
          discount: 0,
          couponCode: ''
        })
        toast.success('Panier vidé')
      },

      calculateTotals: () => {
        const { items, discount } = get()
        
        const subtotal = items.reduce((sum, item) => {
          return sum + (item.price * item.quantity)
        }, 0)
        
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
        const total = Math.max(0, subtotal - discount)

        set({
          total: Math.round(total),
          itemCount,
          subtotal: Math.round(subtotal)
        })
      },

      toggleCart: () => {
        set(state => ({ isOpen: !state.isOpen }))
      },

      openCart: () => {
        set({ isOpen: true })
      },

      closeCart: () => {
        set({ isOpen: false })
      },

      applyCoupon: async (code) => {
        // Simulate API call for coupon validation
        const coupons = {
          'WELCOME10': { discount: 1000, type: 'fixed' }, // 1000 MGA off
          'SAVE20': { discount: 20, type: 'percentage' }, // 20% off
          'FIRST50': { discount: 5000, type: 'fixed' }, // 5000 MGA off
        }

        const coupon = coupons[code.toUpperCase()]
        
        if (!coupon) {
          toast.error('Code promo invalide')
          return false
        }

        const { subtotal } = get()
        let discountAmount = 0

        if (coupon.type === 'percentage') {
          discountAmount = Math.round((subtotal * coupon.discount) / 100)
        } else {
          discountAmount = coupon.discount
        }

        set({
          discount: discountAmount,
          couponCode: code.toUpperCase()
        })

        get().calculateTotals()
        toast.success(`Code promo appliqué ! -${discountAmount.toLocaleString()} MGA`)
        return true
      },

      removeCoupon: () => {
        set({
          discount: 0,
          couponCode: ''
        })
        get().calculateTotals()
        toast.success('Code promo retiré')
      },

      setShippingInfo: (info) => {
        set({ shippingInfo: info })
      },

      // Get cart summary for checkout
      getCartSummary: () => {
        const { items, total, subtotal, discount, itemCount, couponCode } = get()
        return {
          items,
          subtotal: subtotal || 0,
          discount,
          total,
          itemCount,
          couponCode,
          shipping: 0, // Digital products = free shipping
          tax: 0 // No tax for now
        }
      },

      // Initialize cart from localStorage
      initializeCart: () => {
        // Recalculate totals in case of price changes
        get().calculateTotals()
      },

      // Save order and clear cart
      processOrder: async (orderData) => {
        const { items, total } = get()
        
        if (items.length === 0) {
          toast.error('Votre panier est vide')
          return { success: false }
        }

        try {
          // Simulate order processing
          await new Promise(resolve => setTimeout(resolve, 2000))
          
          const order = {
            id: 'ORDER-' + Date.now(),
            items: [...items],
            total,
            ...orderData,
            status: 'confirmed',
            createdAt: new Date().toISOString()
          }

          // Clear cart after successful order
          get().clearCart()
          
          toast.success('Commande confirmée ! Vous recevrez un email de confirmation.')
          return { success: true, order }
          
        } catch (error) {
          toast.error('Erreur lors du traitement de la commande')
          return { success: false, error: error.message }
        }
      },

      // Get item by ID
      getItem: (productId) => {
        const { items } = get()
        return items.find(item => item.id === productId)
      },

      // Check if item is in cart
      isInCart: (productId) => {
        const { items } = get()
        return items.some(item => item.id === productId)
      },

      // Get total quantity for a specific item
      getItemQuantity: (productId) => {
        const item = get().getItem(productId)
        return item ? item.quantity : 0
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items,
        shippingInfo: state.shippingInfo,
        discount: state.discount,
        couponCode: state.couponCode
      })
    }
  )
)

export { useCartStore }