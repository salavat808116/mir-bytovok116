import Link from 'next/link'

/**
 * Компонент Services - блок с основными услугами компании
 * Отображает производство, продажу, аренду и дополнительные услуги
 */
export default function Services() {
  const services = [
    {
      title: 'Производство бытовок',
      description: 'Изготавливаем бытовки любой конфигурации на собственном производстве. Используем качественные материалы и современное оборудование.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: [
        'Стандартные и индивидуальные размеры',
        'Качественные материалы',
        'Быстрые сроки изготовления',
        'Гарантия на конструкцию'
      ],
      link: '/production',
      ctaText: 'Узнать подробнее',
      bgColor: 'bg-gradient-to-br from-primary-500 to-primary-700'
    },
    {
      title: 'Продажа бытовок',
      description: 'Купите бытовку напрямую от производителя по выгодной цене. Большой выбор готовых решений и возможность заказа под ваши требования.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        'Цены от производителя',
        'Готовые бытовки в наличии',
        'Рассрочка и кредит',
        'Доставка и установка'
      ],
      link: '/sale',
      ctaText: 'Смотреть каталог',
      bgColor: 'bg-gradient-to-br from-accent-orange to-orange-700'
    },
    {
      title: 'Аренда бытовок',
      description: 'Арендуйте бытовку на любой срок - от нескольких дней до долгосрочной аренды. Гибкие условия и быстрая доставка.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'Аренда от 1 дня',
        'Выгодные тарифы',
        'Доставка день в день',
        'Обслуживание в аренде'
      ],
      link: '/rent',
      ctaText: 'Условия аренды',
      bgColor: 'bg-gradient-to-br from-primary-600 to-primary-800'
    },
    {
      title: 'Аренда манипулятора',
      description: 'Услуги манипулятора для доставки и установки бытовок, контейнеров и других грузов. Опытные водители и современная техника.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      features: [
        'Грузоподъемность до 10 тонн',
        'Опытные операторы',
        'Работа в выходные',
        'Выгодные цены'
      ],
      link: '/manipulator',
      ctaText: 'Заказать манипулятор',
      bgColor: 'bg-gradient-to-br from-industrial-700 to-industrial-900'
    },
  ]

  return (
    <section className="section-padding bg-industrial-50">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Полный спектр услуг от производства до установки и обслуживания бытовок
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1`}
            >
              {/* Иконка */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Заголовок */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Описание */}
              <p className="text-white/90 mb-6">
                {service.description}
              </p>

              {/* Особенности */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/95">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA кнопка */}
              <Link
                href={service.link}
                className="inline-block bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg hover:bg-industrial-50 transition-colors"
              >
                {service.ctaText}
                <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
