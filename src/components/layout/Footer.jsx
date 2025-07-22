import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    platform: [
      { name: 'Accueil', path: '/' },
      { name: 'Produits', path: '/products' },
      { name: 'Formations', path: '/products?category=formation' },
      { name: 'Services', path: '/products?category=coaching' },
      { name: 'Vendre', path: '/sell' }
    ],
    support: [
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' },
      { name: 'Support client', path: '/support' },
      { name: 'Politique de retour', path: '/returns' },
      { name: 'Signaler un problème', path: '/report' }
    ],
    legal: [
      { name: 'Conditions d\'utilisation', path: '/terms' },
      { name: 'Politique de confidentialité', path: '/privacy' },
      { name: 'Mentions légales', path: '/legal' },
      { name: 'Cookies', path: '/cookies' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-600' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Restez informé de nos nouveautés
            </h3>
            <p className="text-primary-100 mb-6">
              Recevez les dernières offres et astuces en marketing digital directement dans votre boîte de réception.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold">SmartDigitalPro</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre plateforme de référence pour les produits et services numériques à Madagascar. 
              Boostez votre business avec nos solutions innovantes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-gray-400">Antananarivo, Madagascar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-500" />
                <a href="mailto:contact@smartdigitalpro.mg" className="text-gray-400 hover:text-white transition-colors">
                  contact@smartdigitalpro.mg
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-500" />
                <a href="tel:+261321234567" className="text-gray-400 hover:text-white transition-colors">
                  +261 32 12 345 67
                </a>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Plateforme</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} SmartDigitalPro. Tous droits réservés. Fait avec{' '}
              <span className="text-red-500 animate-pulse">❤️</span> à Madagascar.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`p-2 text-gray-400 ${social.color} transition-colors rounded-lg hover:bg-gray-800`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer