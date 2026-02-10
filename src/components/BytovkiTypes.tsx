import Link from 'next/link'

/**
 * Компонент BytovkiTypes - блок с видами бытовок
 * Отображает основные типы бытовок с изображениями
 */
export default function BytovkiTypes() {
  const types = [
    {
      title: 'Строительные бытовки',
      description: 'Надежные бытовки для строительных площадок. Для проживания рабочих, офиса прораба, склада инструментов',
      features: ['Утепление', 'Электричество', 'Быстрая установка', 'Доставка'],
      image: '/bytovka-stroitelnaya.svg',
      link: '/production'
    },
    {
      title: 'Павильоны, торговые ряды',
      description: 'Торговые павильоны и киоски из блок-контейнеров. Для розничной торговли, общепита, услуг',
      features: ['Витрины', 'Утепление', 'Электрика', 'Вывеска'],
      image: '/bytovka-pavilion.svg',
      link: '/sale'
    },
    {
      title: 'Модульные дома',
      description: 'Комфортные модульные дома для постоянного или временного проживания. Быстровозводимые здания',
      features: ['Планировка', 'Утепление 100мм', 'Коммуникации', 'Под ключ'],
      image: '/bytovka-modulniy-dom.svg',
      link: '/production'
    },
    {
      title: 'Бани, хозблоки',
      description: 'Модульные бани и хозяйственные блоки для дачи или частного дома. Готовые решения',
      features: ['Парилка', 'Душевая', 'Печь', 'Терраса'],
      image: '/bytovka-banya.svg',
      link: '/sale'
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
              {/* Изображение */}
              <div className="mb-4 flex justify-center">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform"
                />
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
