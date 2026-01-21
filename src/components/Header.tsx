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
    { href: '/rent', label: 'Аренда бытовок' },
    { href: '/manipulator', label: 'Аренда манипулятора' },
    { href: '/applications', label: 'Применение' },
    { href: '/about', label: 'О компании' },
    { href: '/contacts', label: 'Контакты' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 px-4">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">МБ</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-industrial-900">Мир бытовок</div>
              <div className="text-xs text-industrial-600">Казань и Республика Татарстан</div>
            </div>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-industrial-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Контактная информация и CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+79179098884"
              className="text-primary-600 font-bold text-lg hover:text-primary-700"
            >
              +7 (917) 909-88-84
            </a>
            <button className="btn-primary text-sm">
              Заказать звонок
            </button>
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
                href="tel:+78432000000"
                className="text-primary-600 font-bold text-lg py-2"
              >
                +7 (917) 909-88-84
              </a>
              <button className="btn-primary w-full">
                Заказать звонок
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
