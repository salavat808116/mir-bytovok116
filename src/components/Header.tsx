'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * Компонент Header - шапка сайта с навигацией
 * Адаптивный дизайн с мобильным меню
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { href: '/', label: 'Главная' },
    { href: '/production', label: 'Производство' },
    { href: '/sale', label: 'Продажа' },
    { href: '/rent', label: 'Аренда' },
    { href: '/about', label: 'О нас' },
    { href: '/contacts', label: 'Контакты' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-industrial-100">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 px-4">
          {/* Логотип */}
          <Link href="/" className="flex items-center transform hover:scale-105 transition-transform">
            <img src="/logo.svg" alt="Мир бытовок" className="h-12 w-auto" />
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-industrial-700 hover:text-primary-600 transition-all duration-200 font-semibold text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Контактная информация и CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="tel:+79179098884"
              className="text-primary-600 font-bold text-lg hover:text-primary-700 whitespace-nowrap transition-colors"
            >
              +7 917 909-88-84
            </a>
            <a 
              href="#contact-form"
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-xl text-sm whitespace-nowrap transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Заказать звонок
            </a>
          </div>

          {/* Мобильное меню - кнопка */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <svg
              className="w-6 h-6 text-industrial-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню - выпадающее */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 px-4">
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-industrial-700 hover:text-primary-600 py-2 border-b border-industrial-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+79179098884"
                className="text-primary-600 font-bold text-lg py-2"
              >
                +7 917 909-88-84
              </a>
              <a 
                href="#contact-form"
                className="btn-primary w-full block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Заказать звонок
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
