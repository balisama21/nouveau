import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toast from 'react-hot-toast'

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,

      // Actions
      login: async (email, password) => {
        set({ isLoading: true })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Mock user data
          const user = {
            id: '1',
            email,
            name: 'Koto Manana',
            firstName: 'Koto',
            lastName: 'Manana',
            avatar: null,
            role: 'user',
            createdAt: new Date().toISOString(),
            preferences: {
              notifications: true,
              language: 'fr',
              currency: 'MGA'
            }
          }
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false
          })
          
          toast.success(`Bienvenue ${user.firstName} !`)
          return { success: true, user }
          
        } catch (error) {
          set({ isLoading: false })
          toast.error('Erreur de connexion')
          return { success: false, error: error.message }
        }
      },

      register: async (userData) => {
        set({ isLoading: true })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500))
          
          const user = {
            id: Date.now().toString(),
            email: userData.email,
            name: `${userData.firstName} ${userData.lastName}`,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            avatar: null,
            role: 'user',
            createdAt: new Date().toISOString(),
            preferences: {
              notifications: true,
              language: 'fr',
              currency: 'MGA'
            }
          }
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false
          })
          
          toast.success(`Compte créé avec succès ! Bienvenue ${user.firstName} !`)
          return { success: true, user }
          
        } catch (error) {
          set({ isLoading: false })
          toast.error('Erreur lors de la création du compte')
          return { success: false, error: error.message }
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false
        })
        toast.success('Déconnexion réussie')
      },

      updateProfile: async (updates) => {
        const { user } = get()
        if (!user) return { success: false, error: 'Non authentifié' }

        set({ isLoading: true })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          const updatedUser = {
            ...user,
            ...updates,
            name: updates.firstName && updates.lastName 
              ? `${updates.firstName} ${updates.lastName}`
              : user.name
          }
          
          set({
            user: updatedUser,
            isLoading: false
          })
          
          toast.success('Profil mis à jour avec succès')
          return { success: true, user: updatedUser }
          
        } catch (error) {
          set({ isLoading: false })
          toast.error('Erreur lors de la mise à jour')
          return { success: false, error: error.message }
        }
      },

      changePassword: async (currentPassword, newPassword) => {
        set({ isLoading: true })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          set({ isLoading: false })
          toast.success('Mot de passe modifié avec succès')
          return { success: true }
          
        } catch (error) {
          set({ isLoading: false })
          toast.error('Erreur lors du changement de mot de passe')
          return { success: false, error: error.message }
        }
      },

      // Google Auth simulation
      loginWithGoogle: async () => {
        set({ isLoading: true })
        
        try {
          // Simulate Google OAuth
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          const user = {
            id: 'google_' + Date.now(),
            email: 'user@gmail.com',
            name: 'Utilisateur Google',
            firstName: 'Utilisateur',
            lastName: 'Google',
            avatar: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
            role: 'user',
            provider: 'google',
            createdAt: new Date().toISOString(),
            preferences: {
              notifications: true,
              language: 'fr',
              currency: 'MGA'
            }
          }
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false
          })
          
          toast.success(`Bienvenue ${user.firstName} !`)
          return { success: true, user }
          
        } catch (error) {
          set({ isLoading: false })
          toast.error('Erreur de connexion Google')
          return { success: false, error: error.message }
        }
      },

      // Reset password
      resetPassword: async (email) => {
        set({ isLoading: true })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          set({ isLoading: false })
          toast.success('Instructions de réinitialisation envoyées par email')
          return { success: true }
          
        } catch (error) {
          set({ isLoading: false })
          toast.error('Erreur lors de l\'envoi de l\'email')
          return { success: false, error: error.message }
        }
      },

      // Initialize user from token
      initializeAuth: async () => {
        const token = localStorage.getItem('auth-token')
        if (!token) return

        set({ isLoading: true })
        
        try {
          // Simulate token validation
          await new Promise(resolve => setTimeout(resolve, 500))
          
          // If user exists in persisted state, we're good
          const { user } = get()
          if (user) {
            set({ isAuthenticated: true, isLoading: false })
          } else {
            set({ isLoading: false })
          }
          
        } catch (error) {
          set({ isLoading: false })
          localStorage.removeItem('auth-token')
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)

export { useAuthStore }