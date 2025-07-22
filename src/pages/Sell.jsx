import React from 'react'
import { Link } from 'react-router-dom'
import { Package } from 'lucide-react'

const Sell = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Vendre un produit</h1>
          <p className="text-gray-600 mb-8">Cette page sera développée prochainement</p>
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sell