/**
 * Компонент Portfolio - портфолио выполненных работ
 * Показывает примеры реализованных проектов
 */
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Строительная бытовка 6×2.4м',
      category: 'Строительные бытовки',
      description: 'Утепленная бытовка для строительной компании с внутренней отделкой',
      image: '/bytovka-stroitelnaya.svg',
      specs: ['Размер: 6×2.4м', 'Утепление 50мм', 'Внутренняя отделка', 'Электропроводка']
    },
    {
      id: 2,
      title: 'Торговый павильон',
      category: 'Павильоны',
      description: 'Павильон для продажи продуктов с панорамным остеклением',
      image: '/bytovka-pavilion.svg',
      specs: ['Размер: 6×3м', 'Витринное остекление', 'Вывеска', 'Утепление']
    },
    {
      id: 3,
      title: 'Модульный дом для дачи',
      category: 'Модульные дома',
      description: 'Дом для круглогодичного проживания с санузлом и кухней',
      image: '/bytovka-modulniy-dom.svg',
      specs: ['Размер: 6×6м', 'Утепление 100мм', 'Санузел', 'Кухня']
    },
    {
      id: 4,
      title: 'Баня с предбанником',
      category: 'Бани',
      description: 'Компактная баня из вагонки с печью для загородного участка',
      image: '/bytovka-banya.svg',
      specs: ['Размер: 6×2.4м', 'Парная', 'Предбанник', 'Печь в комплекте']
    },
    {
      id: 5,
      title: 'Бытовка-офис',
      category: 'Строительные бытовки',
      description: 'Офисная бытовка с перегородкой для руководителя стройки',
      image: '/bytovka-stroitelnaya.svg',
      specs: ['Размер: 6×2.4м', 'Два помещения', 'Пластиковые окна', 'Офисная мебель']
    },
    {
      id: 6,
      title: 'Хозблок для дачи',
      category: 'Хозблоки',
      description: 'Компактный хозблок для хранения инвентаря и инструментов',
      image: '/bytovka-banya.svg',
      specs: ['Размер: 3×2м', 'Металлический каркас', 'Двускатная крыша', 'Замок']
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Примеры выполненных проектов. Каждая бытовка изготовлена с учетом индивидуальных требований заказчика
          </p>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group"
            >
              {/* Изображение */}
              <div className="bg-industrial-50 rounded-lg mb-4 h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain p-6"
                />
              </div>

              {/* Категория */}
              <div className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                {project.category}
              </div>

              {/* Заголовок */}
              <h3 className="text-xl font-bold text-industrial-900 mb-2">
                {project.title}
              </h3>

              {/* Описание */}
              <p className="text-industrial-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Характеристики */}
              <ul className="space-y-1">
                {project.specs.map((spec, index) => (
                  <li key={index} className="text-sm text-industrial-600 flex items-start gap-2">
                    <svg className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-industrial-600 mb-4">
            Хотите такую же бытовку или требуется индивидуальный проект?
          </p>
          <a
            href="#contact-form"
            className="btn-primary inline-block"
          >
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  )
}
