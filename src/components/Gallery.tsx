/**
 * Компонент Gallery - галерея выполненных работ
 * Демонстрирует портфолио компании
 */
export default function Gallery() {
  // Placeholder изображения - замените на реальные фото бытовок
  const projects = [
    {
      title: 'Бытовка для проживания 6х2.4м',
      description: 'Утепленная бытовка с мебелью и электрикой',
      category: 'Продажа',
      image: '/placeholder-bytovka-1.jpg' // Замените на реальное фото
    },
    {
      title: 'Модульный офис из 3 бытовок',
      description: 'Офисное помещение для строительной компании',
      category: 'Производство',
      image: '/placeholder-bytovka-2.jpg'
    },
    {
      title: 'Посты охраны',
      description: 'Компактные посты охраны для промышленного объекта',
      category: 'Аренда',
      image: '/placeholder-bytovka-3.jpg'
    },
    {
      title: 'Бытовки-склады',
      description: 'Складские помещения для хранения инструментов',
      category: 'Продажа',
      image: '/placeholder-bytovka-4.jpg'
    },
    {
      title: 'Раздевалки для персонала',
      description: 'Бытовки-раздевалки на производственном объекте',
      category: 'Аренда',
      image: '/placeholder-bytovka-5.jpg'
    },
    {
      title: 'Жилой комплекс из бытовок',
      description: 'Временное жилье для вахтовиков',
      category: 'Производство',
      image: '/placeholder-bytovka-6.jpg'
    },
  ]

  return (
    <section className="section-padding bg-industrial-50">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Более 2000 бытовок изготовлено и установлено. Посмотрите примеры наших работ
          </p>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
            >
              {/* Изображение */}
              <div className="relative h-64 bg-industrial-200 overflow-hidden">
                {/* Placeholder - замените на реальное изображение */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600 text-white">
                  <div className="text-center p-4">
                    <svg className="w-20 h-20 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-sm opacity-75">Добавьте фото бытовки</p>
                  </div>
                </div>
                
                {/* Категория */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Информация */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-industrial-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-industrial-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Инструкция для добавления фото */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-bold text-yellow-900 mb-2">
                📸 Добавьте фотографии бытовок
              </h4>
              <p className="text-yellow-800 text-sm mb-2">
                Сохраните фото ваших бытовок в папку <code className="bg-yellow-100 px-2 py-1 rounded">/public/</code> с названиями:
              </p>
              <ul className="list-disc list-inside text-yellow-800 text-sm space-y-1">
                <li><code>placeholder-bytovka-1.jpg</code></li>
                <li><code>placeholder-bytovka-2.jpg</code></li>
                <li><code>placeholder-bytovka-3.jpg</code> и т.д.</li>
              </ul>
              <p className="text-yellow-800 text-sm mt-2">
                Рекомендуемый размер: 800x600 пикселей, формат JPG
              </p>
            </div>
          </div>
        </div>

        {/* CTA блок */}
        <div className="mt-12 text-center">
          <p className="text-industrial-600 mb-4">
            Хотите такую же бытовку?
          </p>
          <a
            href="#contact-form"
            className="btn-primary inline-block"
          >
            Заказать расчет
          </a>
        </div>
      </div>
    </section>
  )
}
