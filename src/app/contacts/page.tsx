import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Контакты – Связаться с нами | Мир бытовок',
  description: 'Контакты компании Мир бытовок. Телефон, email. Позвоните нам или оставьте заявку на сайте.',
  keywords: 'контакты Мир бытовок, телефон, связаться, заказать бытовку',
}

/**
 * Страница "Контакты"
 * Контактная информация, карта, форма связи
 */
export default function ContactsPage() {
  const contactInfo: Array<{
    title: string
    items: Array<{ label: string; value: string; link?: string }>
    icon: React.ReactNode
  }> = [
    {
      title: 'Телефон',
      items: [
        { label: 'Основной', value: '+7 917 909-88-84', link: 'tel:+79179098884' },
        { label: 'Отдел продаж', value: '+7 917 909-88-84', link: 'tel:+79179098884' },
        { label: 'WhatsApp', value: '+7 917 909-88-84', link: 'https://wa.me/79179098884' }
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Email',
      items: [
        { label: 'Email', value: 'info@mir-bytovok116.ru', link: 'mailto:info@mir-bytovok116.ru' }
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Адрес',
      items: [
        { label: 'Режим работы', value: 'Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00' },
        { label: 'Адрес', value: 'ул. Юбилейная, 40' },
        { label: 'Режим работы', value: 'Пн-Пт: 8:00 - 20:00, Сб-Вс: 9:00 - 18:00' }
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const departments = [
    {
      name: 'Отдел продаж',
      description: 'Консультации по продаже бытовок, расчет стоимости, оформление заказа',
      phone: '+7 917 909-88-84',
      email: 'info@mir-bytovok116.ru'
    },
    {
      name: 'Отдел аренды',
      description: 'Аренда бытовок, условия, тарифы, бронирование',
      phone: '+7 917 909-88-84',
      email: 'info@mir-bytovok116.ru'
    },
    {
      name: 'Производство',
      description: 'Вопросы по изготовлению, индивидуальные проекты, сроки',
      phone: '+7 917 909-88-84',
      email: 'info@mir-bytovok116.ru'
    },
    {
      name: 'Служба доставки',
      description: 'Доставка, аренда манипулятора, установка бытовок',
      phone: '+7 917 909-88-84',
      email: 'info@mir-bytovok116.ru'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-industrial-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Контакты
            </h1>
            <p className="text-xl text-industrial-100 mb-4">
              Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши вопросы 
              и помочь с выбором бытовки.
            </p>
            <p className="text-lg text-industrial-200">
              📍 Адрес: ул. Юбилейная, 40
            </p>
          </div>
        </div>
      </section>

      {/* Основные контакты */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <div key={index} className="card">
                <div className="text-primary-600 mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-industrial-900 mb-4">
                  {contact.title}
                </h3>
                <div className="space-y-3">
                  {contact.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="text-sm text-industrial-600 mb-1">{item.label}</div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-primary-600 hover:text-primary-700 font-semibold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-industrial-900">{item.value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Быстрый звонок */}
          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-industrial-900 mb-4">
              Звоните прямо сейчас!
            </h3>
            <a
              href="tel:+79179098884"
              className="text-4xl md:text-5xl font-bold text-primary-600 hover:text-primary-700 transition-colors inline-block mb-4"
            >
              +7 917 909-88-84
            </a>
            <p className="text-industrial-600">
              Работаем без выходных. Ответим на все ваши вопросы.
            </p>
          </div>
        </div>
      </section>


      {/* Карта (placeholder) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Как нас найти
          </h2>
          <p className="text-center text-industrial-600 mb-12">
            Свяжитесь с нами удобным способом
          </p>

          {/* Placeholder для карты */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-industrial-100 rounded-xl overflow-hidden" style={{ height: '400px' }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-industrial-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-industrial-600">
                    Работаем по всей России
                  </p>
                  <p className="text-sm text-industrial-500 mt-2">
                    Интеграция с картами (Яндекс.Карты / 2GIS)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Как добраться */}
          <div className="mt-8 max-w-3xl mx-auto bg-industrial-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-industrial-900 mb-4">
              Как добраться
            </h3>
            <ul className="space-y-2 text-industrial-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">🚗</span>
                <span>На автомобиле: удобный подъезд, есть парковка</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">🚌</span>
                <span>На общественном транспорте: остановка рядом с офисом</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">📍</span>
                <span>Координаты для навигатора можно уточнить по телефону</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* График работы */}
      <section className="section-padding bg-industrial-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Режим работы
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-industrial-200">
                <div className="p-6">
                  <h3 className="font-bold text-industrial-900 mb-4">Офис</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-industrial-600">Понедельник - Пятница</span>
                      <span className="font-semibold">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-industrial-600">Суббота - Воскресенье</span>
                      <span className="font-semibold">9:00 - 18:00</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-industrial-900 mb-4">Телефон</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-industrial-600">Ежедневно</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                    <div className="text-xs text-industrial-500 mt-4">
                      Звонки принимаются круглосуточно
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <ContactForm />
    </div>
  )
}
