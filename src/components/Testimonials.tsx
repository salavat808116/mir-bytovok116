/**
 * Компонент Testimonials - блок с отзывами клиентов
 * Повышает доверие к компании через социальное доказательство
 */
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Алексей Петров',
      company: 'ООО "СтройКомплект"',
      position: 'Директор',
      text: 'Заказывали у них 5 бытовок для строительной площадки. Качество на высоте, доставили точно в срок. Цены адекватные, работают профессионально. Рекомендую!',
      rating: 5,
      date: 'Январь 2024'
    },
    {
      name: 'Марина Соколова',
      company: 'Производственная компания',
      position: 'Главный инженер',
      text: 'Арендовали бытовку-офис на 6 месяцев. Удобная, тёплая, со всем необходимым. Менеджеры всегда на связи, быстро решали любые вопросы. Спасибо за качественный сервис!',
      rating: 5,
      date: 'Декабрь 2023'
    },
    {
      name: 'Дмитрий Иванов',
      company: 'Частное лицо',
      position: 'Владелец участка',
      text: 'Купил бытовку для дачи. Отличное качество за свои деньги. Привезли быстро, установили аккуратно. Уже второй год пользуюсь - никаких проблем. Буду рекомендовать знакомым.',
      rating: 5,
      date: 'Октябрь 2023'
    },
    {
      name: 'Сергей Николаев',
      company: 'Охранное агентство "Страж"',
      position: 'Руководитель',
      text: 'Заказали посты охраны для нескольких объектов. Сделали точно по нашим требованиям, утеплили, поставили электрику. Работают ребята оперативно и качественно.',
      rating: 5,
      date: 'Сентябрь 2023'
    },
    {
      name: 'Елена Васильева',
      company: 'Логистическая компания',
      position: 'Коммерческий директор',
      text: 'Нужен был склад временно. Взяли бытовку в аренду на 3 месяца. Всё организовали быстро, документы оформили без проволочек. Очень довольны сотрудничеством!',
      rating: 5,
      date: 'Август 2023'
    },
    {
      name: 'Андрей Михайлов',
      company: 'Строительная бригада',
      position: 'Прораб',
      text: 'Постоянно берём бытовки для разных объектов. Цены нормальные, качество стабильное. Главное - всегда есть в наличии и привозят в тот же день. Надежные партнёры.',
      rating: 5,
      date: 'Июль 2023'
    }
  ]

  return (
    <section className="section-padding bg-industrial-50">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Более 500 довольных клиентов выбрали нас. Читайте реальные отзывы о нашей работе
          </p>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Рейтинг */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Текст отзыва */}
              <p className="text-industrial-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Информация об авторе */}
              <div className="border-t border-industrial-200 pt-4">
                <p className="font-bold text-industrial-900">{testimonial.name}</p>
                <p className="text-sm text-industrial-600">{testimonial.position}</p>
                <p className="text-sm text-primary-600">{testimonial.company}</p>
                <p className="text-xs text-industrial-500 mt-2">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-industrial-900 mb-3">
            Станьте нашим следующим довольным клиентом!
          </h3>
          <p className="text-industrial-600 mb-6">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
          <a
            href="#contact-form"
            className="btn-primary inline-block"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  )
}
