import Link from 'next/link'

/**
 * Компонент PriceList - прайс-лист с ценами
 * Показывает ориентировочные цены на типовые решения
 */
export default function PriceList() {
  const prices = [
    {
      category: 'Продажа бытовок',
      items: [
        {
          name: 'Бытовка 6х2.4м (стандарт)',
          price: 'от 150 000',
          features: ['Без внутренней отделки', 'Металлическая дверь', 'Окно ПВХ'],
          popular: false
        },
        {
          name: 'Бытовка 6х2.4м (утепленная)',
          price: 'от 220 000',
          features: ['Внутренняя отделка ДВП', 'Утепление 50мм', 'Электропроводка'],
          popular: true
        },
        {
          name: 'Бытовка-офис 6х2.4м',
          price: 'от 280 000',
          features: ['Отделка ПВХ панелями', 'Мебель', 'Розетки и освещение'],
          popular: false
        },
        {
          name: 'Бытовка для проживания 6х2.4м',
          price: 'от 320 000',
          features: ['Утепление 100мм', 'Отопление', 'Мебель и бытовая техника'],
          popular: false
        }
      ]
    },
    {
      category: 'Аренда бытовок',
      items: [
        {
          name: 'Бытовка стандарт (месяц)',
          price: 'от 8 000',
          features: ['Доставка включена', 'Установка и вывоз', 'Минимум 1 месяц'],
          popular: false
        },
        {
          name: 'Бытовка утепленная (месяц)',
          price: 'от 12 000',
          features: ['С внутренней отделкой', 'Электричество', 'Доставка включена'],
          popular: true
        },
        {
          name: 'Бытовка-офис (месяц)',
          price: 'от 15 000',
          features: ['С мебелью', 'Розетки и освещение', 'Готова к работе'],
          popular: false
        }
      ]
    },
    {
      category: 'Дополнительные услуги',
      items: [
        {
          name: 'Доставка манипулятором (до 50 км)',
          price: 'от 5 000',
          features: ['Опытный оператор', 'Современная техника', 'Без выходных'],
          popular: false
        },
        {
          name: 'Установка на фундамент',
          price: 'от 10 000',
          features: ['Блочный фундамент', 'Выравнивание', 'Подключение коммуникаций'],
          popular: false
        },
        {
          name: 'Индивидуальный проект',
          price: 'по запросу',
          features: ['Любые размеры', 'Нестандартная планировка', 'Расчет за 1 день'],
          popular: false
        }
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Цены на бытовки
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Ориентировочные цены на типовые решения. Точную стоимость рассчитаем индивидуально
          </p>
        </div>

        {/* Категории прайса */}
        <div className="space-y-12">
          {prices.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Название категории */}
              <h3 className="text-2xl font-bold text-industrial-900 mb-6 pb-3 border-b-2 border-primary-600">
                {category.category}
              </h3>

              {/* Список позиций */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`relative bg-industrial-50 rounded-xl p-6 ${
                      item.popular
                        ? 'ring-2 ring-primary-600 shadow-xl'
                        : 'hover:shadow-lg'
                    } transition-all`}
                  >
                    {/* Бейдж "Популярное" */}
                    {item.popular && (
                      <div className="absolute -top-3 right-4 bg-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                        Популярное
                      </div>
                    )}

                    {/* Название */}
                    <h4 className="text-lg font-bold text-industrial-900 mb-2">
                      {item.name}
                    </h4>

                    {/* Цена */}
                    <div className="text-3xl font-bold text-primary-600 mb-4">
                      {item.price} ₽
                    </div>

                    {/* Особенности */}
                    <ul className="space-y-2 mb-4">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start text-sm text-industrial-600">
                          <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Кнопка */}
                    <a
                      href="#contact-form"
                      className={`block text-center font-semibold py-2 px-4 rounded-lg transition-colors ${
                        item.popular
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      Заказать
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Примечание */}
        <div className="mt-12 bg-primary-50 rounded-xl p-6 text-center">
          <p className="text-industrial-700 mb-2">
            <strong>Обратите внимание:</strong> Указаны базовые цены на типовые конфигурации.
          </p>
          <p className="text-industrial-600 text-sm">
            Окончательная стоимость зависит от размера, комплектации, дополнительных опций и региона доставки.
            Для точного расчета оставьте заявку или позвоните нам.
          </p>
        </div>

        {/* CTA блок */}
        <div className="mt-8 text-center">
          <Link href="#contact-form" className="btn-primary inline-block text-lg">
            Получить точный расчет стоимости
          </Link>
        </div>
      </div>
    </section>
  )
}
