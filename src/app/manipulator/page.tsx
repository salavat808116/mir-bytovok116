import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Аренда манипулятора – Услуги манипулятора | Мир бытовок',
  description: 'Аренда манипулятора для доставки и установки бытовок, контейнеров, грузов. Опытные операторы. Работаем без выходных.',
  keywords: 'аренда манипулятора, манипулятор услуги, доставка манипулятором, манипулятор цена, кран-манипулятор',
}

/**
 * Страница "Аренда манипулятора"
 * Информация об услугах манипулятора
 */
export default function ManipulatorPage() {
  const services = [
    {
      title: 'Доставка бытовок',
      description: 'Перевозка и установка бытовок любых размеров на вашем объекте',
      icon: '🏗️'
    },
    {
      title: 'Доставка контейнеров',
      description: 'Транспортировка морских и строительных контейнеров',
      icon: '📦'
    },
    {
      title: 'Погрузочно-разгрузочные работы',
      description: 'Погрузка и разгрузка тяжелых грузов до 10 тонн',
      icon: '⚙️'
    },
    {
      title: 'Строительные материалы',
      description: 'Доставка поддонов с кирпичом, блоками, другими материалами',
      icon: '🧱'
    },
    {
      title: 'Спецтехника',
      description: 'Перевозка строительного оборудования и техники',
      icon: '🚜'
    },
    {
      title: 'Прочие грузы',
      description: 'Транспортировка негабаритных и тяжелых грузов',
      icon: '📐'
    }
  ]

  const advantages = [
    {
      title: 'Опытные операторы',
      description: 'Работаем с 2010 года. Все водители имеют большой опыт работы на манипуляторе.'
    },
    {
      title: 'Современная техника',
      description: 'Исправные манипуляторы с грузоподъемностью до 10 тонн и стрелой до 15 метров.'
    },
    {
      title: 'Работаем без выходных',
      description: 'Выполняем заказы 7 дней в неделю. Возможен выезд в выходные и праздники.'
    },
    {
      title: 'Быстрая подача',
      description: 'Манипулятор приедет на объект в течение 2-3 часов после заявки.'
    }
  ]

  const pricing = [
    {
      service: 'Подача манипулятора',
      price: 'от 3 000 ₽'
    },
    {
      service: 'Работа манипулятора (1 час)',
      price: 'от 1 500 ₽'
    },
    {
      service: 'Доставка бытовки (до 50 км)',
      price: 'от 5 000 ₽'
    },
    {
      service: 'Установка бытовки на объекте',
      price: 'от 2 000 ₽'
    },
    {
      service: 'Доставка на дальние расстояния (от 50 км)',
      price: 'от 50 ₽/км'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-industrial-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Аренда манипулятора
            </h1>
            <p className="text-xl text-industrial-100 mb-8">
              Предоставляем услуги манипулятора для доставки и установки бытовок, 
              контейнеров и других грузов. Грузоподъемность до 10 тонн. 
              Опытные операторы. Работаем без выходных.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact-form" className="btn-accent">
                Заказать манипулятор
              </a>
              <a href="tel:+79179098884" className="btn-secondary">
                +7 917 909-88-84
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Услуги манипулятора
          </h2>
          <p className="text-center text-industrial-600 mb-12 max-w-2xl mx-auto">
            Выполняем полный спектр работ по погрузке, разгрузке и транспортировке грузов
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-industrial-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-industrial-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="section-padding bg-industrial-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши преимущества
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-industrial-600">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Характеристики */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Технические характеристики
          </h2>

          <div className="max-w-3xl mx-auto bg-industrial-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary-600 pl-4">
                <div className="text-sm text-industrial-600 mb-1">Грузоподъемность</div>
                <div className="text-2xl font-bold text-industrial-900">до 10 тонн</div>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <div className="text-sm text-industrial-600 mb-1">Длина стрелы</div>
                <div className="text-2xl font-bold text-industrial-900">до 15 метров</div>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <div className="text-sm text-industrial-600 mb-1">Вылет стрелы</div>
                <div className="text-2xl font-bold text-industrial-900">до 12 метров</div>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <div className="text-sm text-industrial-600 mb-1">Длина платформы</div>
                <div className="text-2xl font-bold text-industrial-900">6-7 метров</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Как заказать */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Как заказать манипулятор
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-industrial-900 mb-2">Оставьте заявку</h3>
              <p className="text-sm text-industrial-600">
                Позвоните или заполните форму на сайте
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-industrial-900 mb-2">Расчет стоимости</h3>
              <p className="text-sm text-industrial-600">
                Менеджер рассчитает точную стоимость работ
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-industrial-900 mb-2">Подача техники</h3>
              <p className="text-sm text-industrial-600">
                Манипулятор прибудет в оговоренное время
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-industrial-900 mb-2">Выполнение работ</h3>
              <p className="text-sm text-industrial-600">
                Оператор быстро и качественно выполнит все работы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужен манипулятор прямо сейчас?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Звоните! Манипулятор может быть на вашем объекте уже через 2-3 часа
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+79179098884" className="btn-accent text-lg">
              Позвонить: +7 917 909-88-84
            </a>
            <a href="#contact-form" className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-industrial-50 transition-all text-lg">
              Заказать онлайн
            </a>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <ContactForm />
    </div>
  )
}
