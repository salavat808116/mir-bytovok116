import Link from 'next/link'

/**
 * Компонент BytovkiTypes - блок с видами бытовок
 * Отображает основные типы бытовок с изображениями
 */
export default function BytovkiTypes() {
  const types = [
    {
      title: 'Бытовки для проживания',
      description: 'Комфортные бытовки для временного или постоянного проживания с утеплением и отоплением',
      features: ['Утепление', 'Электричество', 'Отопление', 'Мебель'],
      image: '🏠',
      link: '/applications#living'
    },
    {
      title: 'Бытовки-офисы',
      description: 'Мобильные офисные помещения для строительных площадок и производственных объектов',
      features: ['Рабочие места', 'Освещение', 'Розетки', 'Вентиляция'],
      image: '💼',
      link: '/applications#office'
    },
    {
      title: 'Бытовки-склады',
      description: 'Надежные складские помещения для хранения инструментов, материалов и оборудования',
      features: ['Усиленный пол', 'Безопасность', 'Вентиляция', 'Стеллажи'],
      image: '📦',
      link: '/applications#storage'
    },
    {
      title: 'Бытовки-посты охраны',
      description: 'Компактные посты охраны для контроля доступа на территорию объекта',
      features: ['Обзорные окна', 'Отопление', 'Освещение', 'Связь'],
      image: '🛡️',
      link: '/applications#security'
    },
    {
      title: 'Бытовки-раздевалки',
      description: 'Раздевалки для персонала с местами для переодевания и хранения вещей',
      features: ['Скамейки', 'Вешалки', 'Шкафчики', 'Вентиляция'],
      image: '👔',
      link: '/applications#changing'
    },
    {
      title: 'Модульные конструкции',
      description: 'Возможность создания больших помещений из нескольких модулей по вашему проекту',
      features: ['Любые размеры', 'Гибкость', 'Быстрый монтаж', 'Проект'],
      image: '🏗️',
      link: '/production'
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Виды бытовок
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Производим бытовки различного назначения с учетом ваших требований и задач
          </p>
        </div>

        {/* Сетка типов бытовок */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <Link
              key={index}
              href={type.link}
              className="card group hover:shadow-2xl cursor-pointer"
            >
              {/* Иконка/изображение */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                {type.image}
              </div>

              {/* Заголовок */}
              <h3 className="text-xl font-bold text-industrial-900 mb-3 group-hover:text-primary-600 transition-colors">
                {type.title}
              </h3>

              {/* Описание */}
              <p className="text-industrial-600 mb-4 text-sm">
                {type.description}
              </p>

              {/* Особенности */}
              <div className="flex flex-wrap gap-2 mb-4">
                {type.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Ссылка */}
              <div className="text-primary-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                Подробнее
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA блок */}
        <div className="mt-12 text-center">
          <p className="text-industrial-600 mb-4">
            Не нашли подходящий вариант? Изготовим бытовку по вашим размерам!
          </p>
          <Link href="/production" className="btn-primary inline-block">
            Заказать индивидуальное производство
          </Link>
        </div>
      </div>
    </section>
  )
}
