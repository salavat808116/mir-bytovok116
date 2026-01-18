import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'О компании – Производитель бытовок в Казани | Мир бытовок',
  description: 'О компании Мир бытовок. Производство бытовок с 2010 года. Собственная производственная база в Казани. Опыт, качество, надежность.',
  keywords: 'о компании, производитель бытовок Казань, Мир бытовок',
}

/**
 * Страница "О компании"
 * Информация о компании, истории, ценностях
 */
export default function AboutPage() {
  const stats = [
    { number: '13+', label: 'лет на рынке' },
    { number: '2000+', label: 'изготовленных бытовок' },
    { number: '500+', label: 'довольных клиентов' },
    { number: '100%', label: 'гарантия качества' }
  ]

  const values = [
    {
      title: 'Качество',
      description: 'Используем только качественные материалы и контролируем каждый этап производства',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Надежность',
      description: 'Выполняем все обязательства в срок. Гарантия 3 года на все конструкции',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Индивидуальный подход',
      description: 'Разрабатываем решения под конкретные задачи клиента. Учитываем все пожелания',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Оперативность',
      description: 'Быстрое производство, доставка день в день. Всегда на связи с клиентами',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  const timeline = [
    {
      year: '2010',
      title: 'Основание компании',
      description: 'Начало производства бытовок. Первые 50 клиентов.'
    },
    {
      year: '2013',
      title: 'Расширение производства',
      description: 'Приобретение нового оборудования. Увеличение мощностей в 3 раза.'
    },
    {
      year: '2016',
      title: 'Собственный автопарк',
      description: 'Покупка манипуляторов для доставки. Услуги аренды техники.'
    },
    {
      year: '2019',
      title: 'Новая производственная база',
      description: 'Переезд на новую современную производственную площадку.'
    },
    {
      year: '2023',
      title: 'Лидер рынка',
      description: '2000+ бытовок изготовлено. Один из крупнейших производителей в РТ.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-industrial-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              О компании «Мир бытовок»
            </h1>
            <p className="text-xl text-industrial-100 mb-8">
              Мы занимаемся производством, продажей и арендой бытовок с 2010 года. 
              За это время изготовили более 2000 бытовок для клиентов по всей Республике Татарстан.
            </p>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-industrial-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="section-padding bg-industrial-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Кто мы
            </h2>
            <div className="space-y-6 text-lg text-industrial-700">
              <p>
                <strong className="text-industrial-900">«Мир бытовок»</strong> – это команда профессионалов, 
                которая специализируется на производстве модульных конструкций. Мы предлагаем полный спектр услуг: 
                от проектирования и изготовления до доставки и установки бытовок.
              </p>
              <p>
                Наша компания работает на собственной производственной базе, что позволяет нам контролировать 
                качество на всех этапах производства и предлагать клиентам выгодные цены без посредников.
              </p>
              <p>
                Мы используем только качественные материалы от проверенных поставщиков: металлопрокат с 
                антикоррозийным покрытием, современные утеплители, долговечные отделочные материалы. 
                Каждая бытовка проходит контроль качества перед отгрузкой клиенту.
              </p>
              <p>
                География наших клиентов охватывает Казань и всю Республику Татарстан. Мы работаем 
                со строительными компаниями, производственными предприятиями, частными лицами. 
                В нашем портфолио – проекты от небольших частных объектов до крупных промышленных комплексов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-primary-600 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-industrial-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="section-padding bg-industrial-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наша история
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                {/* Год */}
                <div className="flex-shrink-0 w-24 md:w-32">
                  <div className="text-3xl font-bold text-primary-600">
                    {item.year}
                  </div>
                </div>

                {/* Линия */}
                <div className="relative flex-shrink-0 w-px bg-primary-300 mx-8">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full"></div>
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-6 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-primary-300 h-full"></div>
                  )}
                </div>

                {/* Контент */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-industrial-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Производство */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Собственное производство
            </h2>
            <p className="text-lg text-industrial-600 mb-8">
              У нас есть собственная производственная база, оснащенная современным оборудованием. 
              Это позволяет нам контролировать качество на всех этапах и предлагать выгодные цены.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-industrial-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">1500 м²</div>
                <p className="text-industrial-600">Производственная площадь</p>
              </div>
              <div className="bg-industrial-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                <p className="text-industrial-600">Единиц оборудования</p>
              </div>
              <div className="bg-industrial-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
                <p className="text-industrial-600">Сотрудников</p>
              </div>
            </div>
            <a href="/production" className="btn-primary inline-block">
              Узнать о производстве
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Станьте нашим клиентом
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к 500+ довольным клиентам. Мы поможем найти оптимальное решение для вашего проекта.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact-form" className="btn-accent">
              Оставить заявку
            </a>
            <a href="tel:+78432000000" className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-industrial-50 transition-all">
              +7 (843) 200-00-00
            </a>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <ContactForm />
    </div>
  )
}
