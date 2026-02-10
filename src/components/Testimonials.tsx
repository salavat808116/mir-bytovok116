'use client'

import { useState } from 'react'

/**
 * Компонент Testimonials - отзывы клиентов
 * Социальное доказательство для повышения конверсии
 */
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Александр М.',
      company: 'ООО "СтройКомплекс"',
      text: 'Заказывали 5 бытовок для строительной площадки. Все сделали за 3 дня, качество отличное. Рабочие довольны условиями. Рекомендую!',
      rating: 5,
      date: 'Январь 2026'
    },
    {
      id: 2,
      name: 'Елена К.',
      company: 'ИП Куликова',
      text: 'Взяли в аренду торговый павильон на сезон. Все четко, документы в порядке, доставили вовремя. Продлили аренду еще на месяц.',
      rating: 5,
      date: 'Декабрь 2025'
    },
    {
      id: 3,
      name: 'Дмитрий В.',
      company: 'Частное лицо',
      text: 'Заказал модульный дом для дачи. Ребята все сделали под ключ - от проекта до установки. Живем уже полгода, все отлично!',
      rating: 5,
      date: 'Ноябрь 2025'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-industrial-600">
            Более 3700 довольных клиентов по всей России
          </p>
        </div>

        {/* Отзывы */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-industrial-50 rounded-lg p-6 border border-industrial-200"
            >
              {/* Звезды */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Текст */}
              <p className="text-industrial-700 mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Автор */}
              <div className="border-t border-industrial-300 pt-4">
                <p className="font-bold text-industrial-900">{testimonial.name}</p>
                <p className="text-sm text-industrial-600">{testimonial.company}</p>
                <p className="text-xs text-industrial-500 mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Всего отзывов */}
        <div className="mt-8 text-center">
          <p className="text-industrial-600">
            ⭐⭐⭐⭐⭐ <span className="font-bold">4.9/5</span> — средняя оценка на основе 847 отзывов
          </p>
        </div>
      </div>
    </section>
  )
}
