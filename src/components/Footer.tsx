import Link from 'next/link'

/**
 * Компонент Footer - подвал сайта
 * Содержит навигацию, контакты и правовую информацию
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-industrial-900 text-white">
      <div className="container-custom px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Мир бытовок" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-industrial-300 text-sm">
              Производство, продажа и аренда бытовок. 
              Собственное производство. Доставка по всей России.
            </p>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/production" className="text-industrial-300 hover:text-primary-400 transition-colors">
                  Производство бытовок
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-industrial-300 hover:text-primary-400 transition-colors">
                  Продажа бытовок
                </Link>
              </li>
              <li>
                <Link href="/rent" className="text-industrial-300 hover:text-primary-400 transition-colors">
                  Аренда бытовок
                </Link>
              </li>
              <li>
                <Link href="/manipulator" className="text-industrial-300 hover:text-primary-400 transition-colors">
                  Аренда манипулятора
                </Link>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-lg font-bold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-industrial-300 hover:text-primary-400 transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-industrial-300 hover:text-primary-400 transition-colors">
                  Применение бытовок
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-industrial-300 hover:text-primary-400 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79179098884"
                  className="text-primary-400 hover:text-primary-300 font-bold text-lg transition-colors whitespace-nowrap"
                >
                  +7 917 909-88-84
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mir-bytovok116.ru"
                  className="text-industrial-300 hover:text-primary-400 transition-colors"
                >
                  info@mir-bytovok116.ru
                </a>
              </li>
              <li className="text-industrial-300 text-sm">
                Работаем по всей России
              </li>
              <li className="text-industrial-300 text-sm">
                Пн-Пт: 8:00 - 20:00<br />
                Сб-Вс: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-industrial-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-industrial-400 text-sm">
            © {currentYear} Мир бытовок. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-industrial-400 hover:text-primary-400 text-sm transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
