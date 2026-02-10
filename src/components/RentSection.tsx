import Link from 'next/link'

/**
 * Компонент RentSection - большой акцентный блок про аренду бытовок
 * Выделяет аренду как ключевое направление работы
 */
export default function RentSection() {
  const rentBenefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Выгодно',
      description: 'Не нужно покупать - просто арендуйте на нужный срок'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Быстро',
      description: 'Доставим и установим бытовку в день заказа'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Надежно',
      description: 'Качественные бытовки в отличном состоянии'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Гибко',
      description: 'Арендуйте на любой срок - от 1 месяца'
    },
  ]

  const rentTypes = [
    {
      title: 'Для строительства',
      description: 'Бытовки для рабочих, офис прораба, склад инструментов',
      icon: '🏗️'
    },
    {
      title: 'Для мероприятий',
      description: 'Временные павильоны, торговые точки, раздевалки',
      icon: '🎪'
    },
    {
      title: 'Для бизнеса',
      description: 'Офисы, пункты охраны, торговые павильоны',
      icon: '💼'
    },
    {
      title: 'Для дачи',
      description: 'Временное жилье, хозблоки, бани на время строительства',
      icon: '🏡'
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Главный заголовок */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            🔥 ПОПУЛЯРНОЕ НАПРАВЛЕНИЕ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Аренда бытовок
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Не знаете нужна ли бытовка надолго? Возьмите в аренду!
            <br />Это выгоднее покупки для краткосрочных проектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact-form"
              className="bg-accent-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-xl hover:shadow-2xl inline-block"
            >
              Узнать условия аренды
            </a>
            <a
              href="tel:+79179098884"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg text-lg transition-all border-2 border-white inline-block"
            >
              +7 917 909-88-84
            </a>
          </div>
        </div>

        {/* Преимущества аренды */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {rentBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all"
            >
              <div className="text-accent-orange mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-primary-100">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Для кого подходит аренда */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-10">
            Для кого подходит аренда бытовок
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h4 className="text-xl font-bold mb-2">{type.title}</h4>
                <p className="text-primary-100 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Что входит в аренду */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Что входит в аренду
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Бытовка
              </h4>
              <ul className="space-y-2 text-primary-100">
                <li>• Утепленная конструкция</li>
                <li>• Внутренняя отделка</li>
                <li>• Электропроводка</li>
                <li>• Окна и двери</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Доставка
              </h4>
              <ul className="space-y-2 text-primary-100">
                <li>• Доставка манипулятором</li>
                <li>• Установка на площадке</li>
                <li>• Выравнивание</li>
                <li>• Вывоз после аренды</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Сервис
              </h4>
              <ul className="space-y-2 text-primary-100">
                <li>• Консультация</li>
                <li>• Техническая поддержка</li>
                <li>• Замена при неисправности</li>
                <li>• Гибкие сроки аренды</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl mb-6">
            Узнайте условия аренды и стоимость для вашего проекта
          </p>
          <Link
            href="/rent"
            className="inline-block bg-white text-primary-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-primary-50 transition-all shadow-xl"
          >
            Подробнее об аренде →
          </Link>
        </div>
      </div>
    </section>
  )
}
