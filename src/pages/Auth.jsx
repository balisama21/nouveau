import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '../store/authStore'
import toast from 'react-hot-toast'

const Auth = () => {
  const navigate = useNavigate()
  const { login, register: registerUser, loginWithGoogle, isLoading } = useAuthStore()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm()

  const password = watch('password')

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        const result = await login(data.email, data.password)
        if (result.success) {
          navigate('/')
        }
      } else {
        if (data.password !== data.confirmPassword) {
          toast.error('Les mots de passe ne correspondent pas')
          return
        }
        
        const result = await registerUser({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          password: data.password
        })
        
        if (result.success) {
          navigate('/')
        }
      }
    } catch (error) {
      toast.error('Une erreur est survenue')
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle()
      if (result.success) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Erreur de connexion Google')
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    reset()
    setShowPassword(false)
    setShowConfirmPassword(false)
  }

  const formVariants = {
    hidden: { opacity: 0, x: isLogin ? -20 : 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isLogin ? 20 : -20 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-display font-bold text-gray-900">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin 
              ? 'Connectez-vous pour accéder à vos produits' 
              : 'Rejoignez notre communauté de créateurs'
            }
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? 'login' : 'register'}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5 mr-3"
                />
                {isLogin ? 'Continuer avec Google' : 'S\'inscrire avec Google'}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">ou</span>
                </div>
              </div>

              {/* Register Fields */}
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('firstName', { 
                          required: 'Le prénom est requis',
                          minLength: { value: 2, message: 'Minimum 2 caractères' }
                        })}
                        type="text"
                        className={`input pl-10 ${errors.firstName ? 'input-error' : ''}`}
                        placeholder="Prénom"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('lastName', { 
                          required: 'Le nom est requis',
                          minLength: { value: 2, message: 'Minimum 2 caractères' }
                        })}
                        type="text"
                        className={`input pl-10 ${errors.lastName ? 'input-error' : ''}`}
                        placeholder="Nom"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('email', {
                      required: 'L\'email est requis',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email invalide'
                      }
                    })}
                    type="email"
                    className={`input pl-10 ${errors.email ? 'input-error' : ''}`}
                    placeholder="votre@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone (Register only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('phone')}
                      type="tel"
                      className="input pl-10"
                      placeholder="+261 32 00 000 00"
                    />
                  </div>
                </div>
              )}

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('password', {
                      required: 'Le mot de passe est requis',
                      minLength: { value: 6, message: 'Minimum 6 caractères' }
                    })}
                    type={showPassword ? 'text' : 'password'}
                    className={`input pl-10 pr-10 ${errors.password ? 'input-error' : ''}`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password (Register only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('confirmPassword', {
                        required: 'Veuillez confirmer votre mot de passe',
                        validate: value => value === password || 'Les mots de passe ne correspondent pas'
                      })}
                      type={showConfirmPassword ? 'text' : 'password'}
                      className={`input pl-10 pr-10 ${errors.confirmPassword ? 'input-error' : ''}`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                  )}
                </div>
              )}

              {/* Remember Me / Terms */}
              <div className="flex items-center justify-between">
                {isLogin ? (
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                      Se souvenir de moi
                    </label>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <input
                      {...register('terms', { required: 'Vous devez accepter les conditions' })}
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      J'accepte les{' '}
                      <Link to="/terms" className="text-primary-600 hover:text-primary-700">
                        conditions d'utilisation
                      </Link>
                    </label>
                  </div>
                )}

                {isLogin && (
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    Mot de passe oublié ?
                  </Link>
                )}
              </div>

              {!isLogin && errors.terms && (
                <p className="text-sm text-red-600">{errors.terms.message}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {isLogin ? 'Connexion...' : 'Création...'}
                  </div>
                ) : (
                  isLogin ? 'Se connecter' : 'Créer mon compte'
                )}
              </button>
            </motion.form>
          </AnimatePresence>

          {/* Switch Mode */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? 'Pas encore de compte ?' : 'Déjà un compte ?'}{' '}
              <button
                onClick={toggleMode}
                className="font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                {isLogin ? 'Créer un compte' : 'Se connecter'}
              </button>
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center text-sm text-gray-500">
          <p>🔒 Vos données sont sécurisées et protégées</p>
        </div>
      </div>
    </div>
  )
}

export default Auth