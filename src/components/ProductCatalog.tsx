'use client'

/**
 * Компонент ProductCatalog - каталог бытовок с ценами
 * Показывает популярные модели с метками и ценами
 */
export default function ProductCatalog() {
  const products = [
    {
      id: 1,
      title: 'Бытовка строительная',
      size: '6×2.4 м',
      area: '14.4 м²',
      price: 'от 95 000 ₽',
      image: '/bytovka-stroitelnaya.svg',
      badge: 'Хит продаж',
      badgeColor: 'bg-orange-500',
      features: [
        'Металлический каркас',
        'Обшивка вагонкой',
        'Двойной пол',
        'Металлическая дверь'
      ]
    },
    {
      id: 2,
      title: 'Бытовка утепленная',
      size: '6×2.4 м',
      area: '14.4 м²',
      price: 'от 125 000 ₽',
      image: '/bytovka-stroitelnaya.svg',
      badge: 'Популярная',
      badgeColor: 'bg-primary-600',
      features: [
        'Утепление 50 мм',
        'Пластиковые окна',
        'Внутренняя отделка',
        'Электропроводка'
      ]
    },
    {
      id: 3,
      title: 'Торговый павильон',
      size: '6×3 м',
      area: '18 м²',
      price: 'от 165 000 ₽',
      image: '/bytovka-pavilion.svg',
      badge: null,
      features: [
        'Панорамные окна',
        'Усиленный каркас',
        'Витринное остекление',
        'Вывеска в подарок'
      ]
    },
    {
      id: 4,
      title: 'Модульный дом',
      size: '6×6 м',
      area: '36 м²',
      price: 'от 480 000 ₽',
      image: '/bytovka-modulniy-dom.svg',
      badge: 'Новинка',
      badgeColor: 'bg-green-500',
      features: [
        'Утепление 100 мм',
        'Санузел и кухня',
        'Металлочерепица',
        'Готов к проживанию'
      ]
    },
    {
      id: 5,
      title: 'Баня-сауна',
      size: '6×2.4 м',
      area: '14.4 м²',
      price: 'от 285 000 ₽',
      image: '/bytovka-banya.svg',
      badge: 'Акция',
      badgeColor: 'bg-red-500',
      features: [
        'Парная + предбанник',
        'Печь в комплекте',
        'Вагонка липа',
        'Слив в подарок'
      ]
    },
    {
      id: 6,
      title: 'Хозблок премиум',
      size: '4×2 м',
      area: '8 м²',
      price: 'от 78 000 ₽',
      image: '/bytovka-banya.svg',
      badge: null,
      features: [
        'Двускатная крыша',
        'Профнастил',
        'Два отделения',
        'Навесной замок'
      ]
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-industrial-50">
      <div className="container-custom">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            КАТАЛОГ ТОВАРОВ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
            Популярные модели
          </h2>
          <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
            Готовые решения по выгодным ценам. Все бытовки в наличии на складе
          </p>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-industrial-100 hover:border-primary-300 group"
            >
              {/* Изображение и метка */}
              <div className="relative bg-industrial-50 h-56 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                />
                {product.badge && (
                  <div className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Контент */}
              <div className="p-6">
                {/* Заголовок и размеры */}
                <h3 className="text-2xl font-bold text-industrial-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center gap-4 text-industrial-600 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {product.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {product.area}
                  </span>
                </div>

                {/* Особенности */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-industrial-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Цена и кнопка */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-industrial-100">
                  <div>
                    <div className="text-3xl font-bold text-primary-600">
                      {product.price}
                    </div>
                  </div>
                  <a
                    href="#contact-form"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-0.5"
                  >
                    Заказать
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA под каталогом */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Не нашли подходящий вариант?
            </h3>
            <p className="text-primary-50 mb-8 text-lg max-w-2xl mx-auto">
              Изготовим бытовку по вашим размерам и требованиям. Бесплатная консультация и расчет стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-2xl inline-block shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Индивидуальный расчет
              </a>
              <a
                href="tel:+79179098884"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-10 rounded-2xl inline-block transition-all duration-300"
              >
                +7 917 909-88-84
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
