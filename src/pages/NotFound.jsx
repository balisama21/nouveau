import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-primary-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page introuvable
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Désolé, nous n'avons pas pu trouver la page que vous recherchez. 
            Elle a peut-être été déplacée ou supprimée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Page précédente
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Vous pouvez aussi explorer :
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                to="/products"
                className="text-sm text-primary-600 hover:text-primary-700 underline"
              >
                Nos produits
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/products?category=formation"
                className="text-sm text-primary-600 hover:text-primary-700 underline"
              >
                Formations
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/contact"
                className="text-sm text-primary-600 hover:text-primary-700 underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound