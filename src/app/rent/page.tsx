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

      {/* Как работает аренда */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Как работает аренда
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-industrial-900 mb-2">Заявка</h3>
              <p className="text-sm text-industrial-600">
                Оставьте заявку на сайте или позвоните нам
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-industrial-900 mb-2">Расчет</h3>
              <p className="text-sm text-industrial-600">
                Менеджер рассчитает стоимость исходя из срока аренды
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-industrial-900 mb-2">Договор</h3>
              <p className="text-sm text-industrial-600">
                Заключаем официальный договор аренды
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-industrial-900 mb-2">Доставка</h3>
              <p className="text-sm text-industrial-600">
                Доставляем и устанавливаем бытовку на вашем объекте
              </p>
            </div>
          </div>

          {/* Описание */}
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">О аренде бытовок</h3>
              <div className="space-y-4 text-industrial-600">
                <p>
                  Аренда бытовок - это выгодное решение для временных проектов. Вы получаете готовую к использованию бытовку 
                  с полной отделкой, электропроводкой и при необходимости мебелью.
                </p>
                <p>
                  Мы предоставляем в аренду различные типы бытовок: для проживания рабочих, организации офиса на стройплощадке, 
                  санитарные блоки с душевыми и туалетами, посты охраны и другие.
                </p>
                <p>
                  Минимальный срок аренды - от 1 месяца. Чем дольше срок аренды, тем выгоднее условия. 
                  Для расчета точной стоимости свяжитесь с нами по телефону или оставьте заявку на сайте.
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-industrial-200">
                <h4 className="font-bold text-industrial-900 mb-3">Что входит в аренду:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Утепленная бытовка с отделкой</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Электропроводка и освещение</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Базовая мебель (при необходимости)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Техническая поддержка</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Нужна консультация по аренде?
          </h2>
          <p className="text-lg text-industrial-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для расчета точной стоимости аренды под ваш проект
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact-form" className="btn-primary">
              Оставить заявку
            </a>
            <a href="tel:+79179098884" className="btn-secondary">
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
