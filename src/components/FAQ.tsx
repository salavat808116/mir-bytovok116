'use client'

import { useState } from 'react'

/**
 * Компонент FAQ - часто задаваемые вопросы
 * Помогает снять возражения и дать быстрые ответы на популярные вопросы
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Какие бытовки вы производите?',
      answer: 'Мы производим бытовки любого назначения: для проживания, офисные, складские, посты охраны, раздевалки, санитарные блоки. Также изготавливаем бытовки по индивидуальным размерам и комплектации.'
    },
    {
      question: 'Какова стоимость бытовки?',
      answer: 'Стоимость зависит от размера, комплектации и назначения бытовки. Стандартная бытовка 6х2.4м начинается от 150 000 руб. Точную цену мы рассчитаем после обсуждения ваших требований. Звоните +7 917 909-88-84 для бесплатной консультации.'
    },
    {
      question: 'Как быстро вы доставите бытовку?',
      answer: 'Если бытовка есть в наличии - доставляем в день заказа. Изготовление бытовки на заказ занимает 5-10 рабочих дней в зависимости от сложности. Доставка по России занимает от 1 до 7 дней в зависимости от региона.'
    },
    {
      question: 'Можно ли взять бытовку в аренду?',
      answer: 'Да, мы предлагаем аренду бытовок на любой срок - от 1 дня до нескольких лет. В стоимость аренды входит доставка, установка и вывоз. Действуют выгодные тарифы при долгосрочной аренде.'
    },
    {
      question: 'Предоставляете ли вы гарантию?',
      answer: 'Да, на все бытовки нашего производства предоставляется гарантия 1 год на конструкцию. При правильной эксплуатации бытовка прослужит 15-20 лет и более.'
    },
    {
      question: 'Входит ли доставка в стоимость?',
      answer: 'Доставка рассчитывается отдельно в зависимости от расстояния. Доставка в пределах 50 км обычно входит в стоимость при покупке. Точную стоимость доставки сообщим при расчете.'
    },
    {
      question: 'Можно ли сделать бытовку по своим размерам?',
      answer: 'Да, мы изготавливаем бытовки по индивидуальным размерам и проектам. Можем объединить несколько модулей в одну большую конструкцию, сделать нестандартную планировку или комплектацию.'
    },
    {
      question: 'Какие документы вы предоставляете?',
      answer: 'Мы предоставляем полный пакет документов: договор купли-продажи или аренды, акт приема-передачи, гарантийный талон, паспорт изделия. При необходимости предоставляем документы для бухгалтерии.'
    },
    {
      question: 'Нужно ли готовить площадку для установки?',
      answer: 'Желательно подготовить ровную площадку. Для долгосрочной установки рекомендуем фундамент из блоков или свай. Наши специалисты проконсультируют по подготовке площадки и при необходимости помогут с установкой.'
    },
    {
      question: 'Можно ли посмотреть бытовки перед заказом?',
      answer: 'Да, вы можете приехать на наше производство и осмотреть готовые бытовки. Также можем отправить фото и видео конкретных моделей. Для согласования визита позвоните по телефону +7 917 909-88-84.'
    }
  ]

  return (
    <section className="section-padding bg-industrial-50">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Частые вопросы
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Ответы на популярные вопросы о покупке и аренде бытовок
          </p>
        </div>

        {/* Список вопросов */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Вопрос */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-industrial-50 transition-colors"
              >
                <span className="font-bold text-industrial-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Ответ */}
              {openIndex === index && (
                <div className="px-6 pb-5 text-industrial-600">
                  <div className="border-t border-industrial-200 pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA блок */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-industrial-900 mb-3">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-industrial-600 mb-6">
            Позвоните нам или оставьте заявку - ответим на все ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79179098884"
              className="btn-primary inline-block"
            >
              Позвонить: +7 917 909-88-84
            </a>
            <a
              href="#contact-form"
              className="btn-secondary inline-block"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
