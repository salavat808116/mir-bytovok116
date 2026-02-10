import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Продажа бытовок – Купить бытовку от производителя | Мир бытовок',
  description: 'Купить бытовку по выгодной цене от производителя. Большой выбор готовых решений. Доставка и установка по всей России.',
  keywords: 'купить бытовку, продажа бытовок, цена бытовки, бытовки в наличии, блок-контейнеры',
}

/**
 * Страница "Продажа бытовок"
 * Каталог бытовок, цены, условия покупки
 */
export default function SalePage() {
  const bytovki = [
    {
      title: 'Эконом',
      size: '2.4 x 6 м',
      price: 'от 180 000 ₽',
      features: [
        'Металлический каркас',
        'Утепление 50 мм',
        'Окно ПВХ',
        'Металлическая дверь',
        'Внутренняя отделка ДВП'
      ]
    },
    {
      title: 'Стандарт',
      size: '2.4 x 6 м',
      price: 'от 250 000 ₽',
      features: [
        'Усиленный каркас',
        'Утепление 100 мм',
        '2 окна ПВХ',
        'Металлическая дверь с замком',
        'Отделка вагонкой',
        'Электропроводка'
      ],
      popular: true
    },
    {
      title: 'Комфорт',
      size: '2.4 x 6 м',
      price: 'от 320 000 ₽',
      features: [
        'Усиленный каркас',
        'Утепление 100 мм',
        '3 окна ПВХ',
        'Входная дверь повышенной прочности',
        'Отделка вагонкой',
        'Полная электрика',
        'Отопление',
        'Мебель'
      ]
    }
  ]

  const advantages = [
    'Гарантия 3 года на конструкцию',
    'Доставка по России',
    'Установка манипулятором',
    'Гибкие условия оплаты',
    'Возможность обмена',
    'Выкуп вашей старой бытовки'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-industrial-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Продажа бытовок
            </h1>
            <p className="text-xl text-industrial-100 mb-8">
              Купите бытовку напрямую от производителя. Цены без посредников. 
              Готовые бытовки в наличии и производство под заказ.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="btn-accent">
                Смотреть каталог
              </a>
              <a href="tel:+79179098884" className="btn-secondary">
                +7 917 909-88-84
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Описание видов бытовок */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-12 text-center">
            Виды бытовок для покупки
          </h2>
          
          <div className="space-y-12">
            {/* Строительные бытовки */}
            <div className="card">
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">Строительные бытовки</h3>
              <p className="text-industrial-600 mb-4">
                Надежные и практичные бытовки для строительных площадок. Идеально подходят для проживания рабочих, организации офиса прораба и хранения инструментов. 
                Изготавливаются из прочного металлического каркаса с утеплением минеральной ватой. Внутренняя отделка выполняется из ДВП или вагонки.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-industrial-900 mb-2">Стандартные размеры:</h4>
                  <ul className="list-disc list-inside text-industrial-600 space-y-1">
                    <li>6×2.4 метра (14.4 м²)</li>
                    <li>7×2.4 метра (16.8 м²)</li>
                    <li>8×2.4 метра (19.2 м²)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-industrial-900 mb-2">Комплектация:</h4>
                  <ul className="list-disc list-inside text-industrial-600 space-y-1">
                    <li>Утепление 50-100мм</li>
                    <li>Электропроводка</li>
                    <li>Металлическая дверь</li>
                    <li>Пластиковые окна</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Павильоны */}
            <div className="card">
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">Торговые павильоны</h3>
              <p className="text-industrial-600 mb-4">
                Современные торговые павильоны для розничной торговли, киосков и точек общественного питания. 
                Оснащаются панорамным остеклением для максимальной видимости товара. Утепленная конструкция позволяет работать круглый год.
                Возможность установки дополнительного оборудования: кондиционер, вентиляция, витрины.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-industrial-900 mb-2">Особенности:</h4>
                  <ul className="list-disc list-inside text-industrial-600 space-y-1">
                    <li>Витринное остекление</li>
                    <li>Усиленный металлокаркас</li>
                    <li>Место для вывески</li>
                    <li>Отделка под ключ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-industrial-900 mb-2">Применение:</h4>
                  <ul className="list-disc list-inside text-industrial-600 space-y-1">
                    <li>Торговля продуктами</li>
                    <li>Цветочные киоски</li>
                    <li>Кафе и шашлычные</li>
                    <li>Пункты выдачи товаров</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Модульные дома */}
            <div className="card">
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">Модульные дома</h3>
              <p className="text-industrial-600 mb-4">
                Полноценные дома для круглогодичного или сезонного проживания. Современные планировки с возможностью установки санузла, кухни и всех коммуникаций.
                Толстое утепление 100-150мм обеспечивает комфортную температуру зимой. Высокое качество отделки и современный дизайн. 
                Быстрый монтаж за 1-2 дня.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-industrial-900 mb-2">Варианты исполнения:</h4>
                  <ul className="list-disc list-inside text-industrial-600 space-y-1">
                    <li>Дачные дома</li>
                    <li>Дома для постоянного проживания</li>
                    <li>Гостевые домики</li>
                    <li>Модульные здания</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-industrial-900 mb-2">В комплекте:</h4>
                  <ul className="list-disc list-inside text-industrial-600 space-y-1">
                    <li>Полная отделка</li>
                    <li>Сантехника</li>
                    <li>Электрика</li>
                    <li>Мебель (опционально)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Бани и хозблоки */}
            <div className="card">
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">Бани и хозблоки</h3>
              <p className="text-industrial-600 mb-4">
                Компактные и функциональные постройки для дачи и загородного участка. Бани включают парилку и предбанник, возможна установка печи.
                Хозблоки идеальны для хранения садового инвентаря, инструментов и заготовок. Прочная металлическая конструкция прослужит десятилетия.
                Все постройки обработаны антисептиком и готовы к эксплуатации.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-industrial-900 mb-2">Бани:</h4>
                  <ul className="list-disc list-inside text-industrial-600 space-y-1">
                    <li>Парная + предбанник</li>
                    <li>Вагонка из липы или осины</li>
                    <li>Печь (опционально)</li>
                    <li>Полки, лавки</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-industrial-900 mb-2">Хозблоки:</h4>
                  <ul className="list-disc list-inside text-industrial-600 space-y-1">
                    <li>Металлический каркас</li>
                    <li>Двускатная крыша</li>
                    <li>Прочные замки</li>
                    <li>Возможность перегородок</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества покупки */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Преимущества покупки у нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-industrial-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" className="section-padding bg-industrial-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Популярные модели
          </h2>
          <p className="text-center text-industrial-600 mb-12">
            Готовые решения в наличии. Доставка в день заказа.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bytovki.map((bytovka, index) => (
              <div
                key={index}
                className={`card relative ${bytovka.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {bytovka.popular && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                    Хит продаж
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-industrial-900 mb-2">
                  {bytovka.title}
                </h3>
                <p className="text-industrial-600 mb-4">{bytovka.size}</p>
                
                <div className="text-3xl font-bold text-primary-600 mb-6">
                  {bytovka.price}
                </div>

                <ul className="space-y-2 mb-6">
                  {bytovka.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-industrial-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn-primary w-full">
                  Заказать
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-industrial-600 mb-4">
              Нужен другой размер или конфигурация?
            </p>
            <a href="/production" className="btn-secondary inline-block">
              Заказать индивидуальное производство
            </a>
          </div>
        </div>
      </section>


      {/* Форма заявки */}
      <ContactForm />
    </div>
  )
}
