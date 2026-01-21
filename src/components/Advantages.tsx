/**
 * Компонент Advantages - блок преимуществ компании
 * Отображает ключевые конкурентные преимущества
 */
export default function Advantages() {
  const advantages = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Быстрая доставка',
      description: 'Оперативная доставка бытовок по всей России. Доставка день в день по запросу'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Собственное производство',
      description: 'Изготавливаем бытовки на собственной производственной базе с контролем качества'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Гарантия качества',
      description: 'Используем качественные материалы и предоставляем гарантию на все изделия'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Выгодные цены',
      description: 'Прямые цены от производителя без посредников и наценок'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: 'Аренда манипулятора',
      description: 'Предоставляем манипулятор для доставки и установки бытовок'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Опытная команда',
      description: 'Профессиональные специалисты с многолетним опытом в производстве и установке'
    },
  ]

  return (
    <section className="section-padding bg-industrial-50">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Полный спектр услуг по производству, продаже и аренде бытовок.
            Профессиональный подход, гарантия качества и конкурентные цены.
          </p>
        </div>

        {/* Сетка преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="card group hover:border-primary-500 border-2 border-transparent transition-all"
            >
              <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-industrial-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
