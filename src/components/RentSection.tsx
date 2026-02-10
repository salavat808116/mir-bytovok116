/**
 * Компонент RentSection - раздел аренды бытовок
 * Информация об услуге аренды без цен и условий доставки
 */
export default function RentSection() {
  const rentFeatures = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Готовые бытовки',
      description: 'Утепленные бытовки с отделкой, готовые к использованию'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Гибкие сроки',
      description: 'От нескольких дней до долгосрочной аренды'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Все включено',
      description: 'Бытовка с мебелью, электричеством и освещением'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Договор',
      description: 'Официальное оформление с полным пакетом документов'
    }
  ]

  return (
    <section className="section-padding bg-industrial-50">
      <div className="container-custom">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Аренда бытовок
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Предоставляем в аренду утепленные бытовки для строительных площадок, 
            временных объектов и других нужд. Быстрое оформление и индивидуальный подход.
          </p>
        </div>

        {/* Особенности аренды */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rentFeatures.map((feature, index) => (
            <div key={index} className="card text-center">
              <div className="text-primary-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-industrial-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-industrial-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Типы бытовок для аренды */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-industrial-200">
          <h3 className="text-2xl font-bold text-industrial-900 mb-6 text-center">
            Что можно взять в аренду
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-industrial-50 rounded-lg p-6 mb-3">
                <h4 className="font-bold text-industrial-900 mb-2">Бытовка утепленная</h4>
                <p className="text-sm text-industrial-600">
                  6×2.4м с внутренней отделкой
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-industrial-50 rounded-lg p-6 mb-3">
                <h4 className="font-bold text-industrial-900 mb-2">Бытовка-офис</h4>
                <p className="text-sm text-industrial-600">
                  С перегородкой и мебелью
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-industrial-50 rounded-lg p-6 mb-3">
                <h4 className="font-bold text-industrial-900 mb-2">Санитарный блок</h4>
                <p className="text-sm text-industrial-600">
                  С душевой и туалетом
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA с акцентом */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Первая неделя аренды со скидкой 10%
          </h3>
          <p className="text-primary-100 mb-6">
            При заказе сегодня — специальные условия для новых клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg inline-block transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Арендовать со скидкой
            </a>
            <a
              href="tel:+79179098884"
              className="bg-white text-industrial-900 hover:bg-industrial-100 font-bold py-4 px-10 rounded-lg inline-block transition-all shadow-xl"
            >
              📞 +7 917 909-88-84
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
