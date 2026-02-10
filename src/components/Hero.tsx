'use client'

/**
 * Компонент Hero - первый экран главной страницы
 * Содержит заголовок, подзаголовок и CTA кнопки
 */
export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form')
    form?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Современный фоновый паттерн */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Декоративные gradient круги */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" style={{background: 'linear-gradient(135deg, #ff6b35 0%, #f97316 100%)'}}></div>

      <div className="container-custom px-4 py-24 md:py-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Основной заголовок */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Аренда и продажа бытовок
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-industrial-100 mb-4">
            Возьмите в аренду или купите бытовку от производителя. Доставка день в день.
          </p>

          {/* Преимущества - быстрый обзор */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <svg className="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Собственное производство</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <svg className="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <svg className="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Доставка по всей России</span>
            </div>
          </div>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={scrollToForm}
              className="btn-orange text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto uppercase tracking-wide"
            >
              Получить расчет
            </button>
            <a
              href="tel:+79179098884"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 w-full sm:w-auto whitespace-nowrap"
            >
              +7 917 909-88-84
            </a>
          </div>

          {/* Быстрый контакт */}
          <div className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block">
            <p className="text-sm text-primary-100 mb-2">Или позвоните прямо сейчас:</p>
            <a
              href="tel:+79179098884"
              className="text-3xl md:text-4xl font-bold hover:text-orange-300 transition-colors inline-block"
            >
              +7 917 909-88-84
            </a>
            <p className="text-primary-100 mt-2 text-sm">
              Работаем без выходных • Ответим за 5 минут
            </p>
          </div>
        </div>
      </div>

      {/* Декоративная волна внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
