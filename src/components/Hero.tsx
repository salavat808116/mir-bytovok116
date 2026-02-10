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
    <section className="relative bg-industrial-gradient text-white overflow-hidden">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom px-4 py-20 md:py-32 relative z-10">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToForm}
              className="btn-accent text-lg w-full sm:w-auto"
            >
              Рассчитать стоимость
            </button>
            <a
              href="tel:+79179098884"
              className="btn-secondary text-lg w-full sm:w-auto whitespace-nowrap"
            >
              +7 917 909-88-84
            </a>
          </div>

          {/* Быстрый контакт */}
          <div className="mt-8">
            <a
              href="tel:+79179098884"
              className="text-2xl md:text-3xl font-bold hover:text-primary-300 transition-colors inline-block"
            >
              +7 917 909-88-84
            </a>
            <p className="text-industrial-200 mt-2">
              Звоните прямо сейчас! Работаем без выходных
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
