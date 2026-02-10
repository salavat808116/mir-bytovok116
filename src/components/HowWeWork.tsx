/**
 * Компонент HowWeWork - этапы работы с клиентом
 * Показывает прозрачность процесса и внушает доверие
 */
export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Заявка',
      description: 'Вы оставляете заявку на сайте или звоните нам. Менеджер связывается с вами в течение 15 минут.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Консультация',
      description: 'Обсуждаем ваши требования: размер, назначение, срок. Подбираем оптимальное решение.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Расчет стоимости',
      description: 'Рассчитываем точную стоимость с учетом всех параметров. Прозрачное ценообразование без скрытых платежей.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Договор',
      description: 'Заключаем договор с фиксацией всех условий, сроков и гарантий. Оформляем все документы.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Производство',
      description: 'Изготавливаем бытовку на собственном производстве с контролем качества на каждом этапе.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: '06',
      title: 'Доставка и установка',
      description: 'Доставляем бытовку манипулятором и устанавливаем на вашем объекте. Сдаем работу под ключ.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-20">
          <div className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            ЭТАПЫ РАБОТЫ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
            Как мы работаем
          </h2>
          <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
            Прозрачный процесс от заявки до установки бытовки на вашем объекте
          </p>
        </div>

        {/* Этапы работы */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Карточка этапа */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-2 border-industrial-100 hover:border-primary-300">
                {/* Номер этапа */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-2xl shadow-primary-500/50">
                  {step.number}
                </div>

                {/* Иконка */}
                <div className="text-primary-600 mb-6 mt-6">
                  {step.icon}
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-bold text-industrial-900 mb-4">
                  {step.title}
                </h3>

                {/* Описание */}
                <p className="text-industrial-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Стрелка между этапами (только для десктопа) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA блок */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Готовы начать работу?
          </h3>
          <p className="text-primary-50 mb-8 text-lg">
            Оставьте заявку, и мы свяжемся с вами в течение 5 минут
          </p>
          <a
            href="#contact-form"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-2xl inline-block shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  )
}
