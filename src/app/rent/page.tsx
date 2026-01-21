import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Аренда бытовок – Выгодные условия | Мир бытовок',
  description: 'Аренда бытовок на любой срок. Быстрая доставка. Выгодные тарифы. Бытовки для проживания, офиса, склада.',
  keywords: 'аренда бытовок, снять бытовку, аренда бытовок цена, бытовки на стройку, аренда вагончиков',
}

/**
 * Страница "Аренда бытовок"
 * Информация об условиях аренды, тарифах
 */
export default function RentPage() {
  const rentalTypes = [
    {
      title: 'Краткосрочная аренда',
      period: 'От 1 дня до 1 месяца',
      price: 'от 500 ₽/день',
      description: 'Идеально для краткосрочных проектов, мероприятий, временных нужд',
      features: [
        'Минимальный срок - 1 день',
        'Гибкий график',
        'Быстрая доставка',
        'Без залога при аренде до 7 дней'
      ]
    },
    {
      title: 'Среднесрочная аренда',
      period: 'От 1 до 6 месяцев',
      price: 'от 12 000 ₽/мес',
      description: 'Оптимальный вариант для строительных площадок и сезонных работ',
      features: [
        'Скидка до 20%',
        'Бесплатное обслуживание',
        'Возможность выкупа',
        'Перенос бытовки в рамках аренды'
      ],
      popular: true
    },
    {
      title: 'Долгосрочная аренда',
      period: 'От 6 месяцев',
      price: 'от 8 000 ₽/мес',
      description: 'Максимально выгодные условия для длительной аренды',
      features: [
        'Скидка до 40%',
        'Приоритетное обслуживание',
        'Возможность выкупа с зачетом арендных платежей',
        'Бесплатная доставка и установка'
      ]
    }
  ]

  const rentalBytovki = [
    {
      type: 'Бытовка для проживания',
      description: 'С мебелью, утеплением и отоплением',
      price: 'от 500 ₽/день'
    },
    {
      type: 'Бытовка-офис',
      description: 'С рабочими местами и освещением',
      price: 'от 450 ₽/день'
    },
    {
      type: 'Бытовка-склад',
      description: 'Для хранения инструментов и материалов',
      price: 'от 400 ₽/день'
    },
    {
      type: 'Пост охраны',
      description: 'Компактный с обзорными окнами',
      price: 'от 350 ₽/день'
    },
    {
      type: 'Раздевалка',
      description: 'Со скамейками и вешалками',
      price: 'от 400 ₽/день'
    },
    {
      type: 'Санитарный блок',
      description: 'С душем и туалетом',
      price: 'от 600 ₽/день'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-industrial-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Аренда бытовок
            </h1>
            <p className="text-xl text-industrial-100 mb-8">
              Сдаем в аренду бытовки на любой срок – от 1 дня до нескольких лет. 
              Доставка день в день. Выгодные цены при долгосрочной аренде.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact-form" className="btn-accent">
                Рассчитать стоимость
              </a>
              <a href="tel:+79179098884" className="btn-secondary">
                +7 917 909-88-84
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Виды аренды */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Варианты аренды
          </h2>
          <p className="text-center text-industrial-600 mb-12">
            Выберите оптимальный срок аренды под ваши задачи
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rentalTypes.map((type, index) => (
              <div
                key={index}
                className={`card ${type.popular ? 'ring-2 ring-primary-500 relative' : ''}`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}

                <h3 className="text-2xl font-bold text-industrial-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-industrial-600 mb-2">{type.period}</p>
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  {type.price}
                </div>
                <p className="text-industrial-600 mb-6">
                  {type.description}
                </p>

                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-industrial-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Типы бытовок в аренду */}
      <section className="section-padding bg-industrial-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Бытовки в аренду
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalBytovki.map((bytovka, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-industrial-900 mb-2">
                  {bytovka.type}
                </h3>
                <p className="text-industrial-600 text-sm mb-4">
                  {bytovka.description}
                </p>
                <div className="text-2xl font-bold text-primary-600">
                  {bytovka.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Условия аренды */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Что входит в аренду
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-industrial-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Включено в стоимость
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Доставка (до 50 км)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Установка манипулятором</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Техническое обслуживание</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Консультации специалиста</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-industrial-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Дополнительно
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-industrial-600 mr-2">•</span>
                  <span>Доставка на дальние расстояния (по тарифу)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-industrial-600 mr-2">•</span>
                  <span>Дополнительное оборудование</span>
                </li>
                <li className="flex items-start">
                  <span className="text-industrial-600 mr-2">•</span>
                  <span>Перенос бытовки на объекте</span>
                </li>
                <li className="flex items-start">
                  <span className="text-industrial-600 mr-2">•</span>
                  <span>Залог (возвращается после аренды)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна аренда на нестандартный срок?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Обсудим индивидуальные условия и подберем оптимальное решение для вашего проекта
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact-form" className="btn-accent">
              Оставить заявку
            </a>
            <a href="tel:+79179098884" className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-industrial-50 transition-all">
              +7 917 909-88-84
            </a>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <ContactForm />
    </div>
  )
}
