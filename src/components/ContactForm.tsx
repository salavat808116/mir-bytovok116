'use client'

import { useState } from 'react'

/**
 * Компонент ContactForm - форма заявки
 * Позволяет пользователям оставить заявку на расчет стоимости
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Отправка на email через Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Замените на свой ключ
          subject: 'Новая заявка с сайта Мир Бытовок',
          from_name: formData.name,
          email: 'info@mir-bytovok116.ru', // Email получателя
          phone: formData.phone,
          message: formData.comment || 'Без комментария',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', comment: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Ошибка отправки:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      
      // Сброс статуса через 5 секунд
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              🎁 СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
              Узнайте точную стоимость за 5 минут
            </h2>
            <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
              Оставьте заявку сейчас и получите <span className="text-orange-600 font-bold">скидку 5%</span> на первый заказ
            </p>
          </div>

          {/* Форма */}
          <div className="bg-industrial-50 rounded-lg p-8 md:p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Поле Имя */}
              <div>
                <label htmlFor="name" className="label-text">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Иван Иванов"
                />
              </div>

              {/* Поле Телефон */}
              <div>
                <label htmlFor="phone" className="label-text">
                  Номер телефона *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              {/* Поле Комментарий */}
              <div>
                <label htmlFor="comment" className="label-text">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Опишите ваши требования к бытовке: размер, назначение, срок аренды и т.д."
                />
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-8 rounded-lg text-xl w-full disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 uppercase"
              >
                {isSubmitting ? 'Отправка...' : '🎁 Получить скидку 5%'}
              </button>
              
              {/* Гарантии под кнопкой */}
              <div className="mt-4 flex items-center justify-center gap-6 text-sm text-industrial-600">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Без спама
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ответ за 5 минут
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Бесплатный расчет
                </span>
              </div>

              {/* Статус отправки */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  <p className="font-semibold">✓ Заявка успешно отправлена!</p>
                  <p className="text-sm">Наш менеджер свяжется с вами в ближайшее время.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  <p className="font-semibold">✗ Ошибка отправки</p>
                  <p className="text-sm">Пожалуйста, попробуйте позже или позвоните нам.</p>
                </div>
              )}

              {/* Соглашение */}
              <p className="text-sm text-industrial-500 text-center">
                Нажимая кнопку "Получить расчет", вы соглашаетесь с{' '}
                <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>

          {/* Дополнительная информация */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-primary-600 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-industrial-900 mb-1">Быстрый ответ</h4>
              <p className="text-sm text-industrial-600">Ответим в течение 15 минут</p>
            </div>

            <div className="text-center">
              <div className="text-primary-600 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-industrial-900 mb-1">Точный расчет</h4>
              <p className="text-sm text-industrial-600">Подробный расчет стоимости</p>
            </div>

            <div className="text-center">
              <div className="text-primary-600 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-industrial-900 mb-1">Выгодные цены</h4>
              <p className="text-sm text-industrial-600">Лучшие цены от производителя</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
