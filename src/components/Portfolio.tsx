import Image from 'next/image'

/**
 * Компонент Portfolio - лента фотографий выполненных работ
 * Простая галерея изображений без описаний
 */
export default function Portfolio() {
  const photos = [
    { id: 1, image: '/bytovka-stroitelnaya.svg', alt: 'Строительная бытовка' },
    { id: 2, image: '/bytovka-pavilion.svg', alt: 'Торговый павильон' },
    { id: 3, image: '/bytovka-modulniy-dom.svg', alt: 'Модульный дом' },
    { id: 4, image: '/bytovka-banya.svg', alt: 'Баня' },
    { id: 5, image: '/bytovka-stroitelnaya.svg', alt: 'Бытовка-офис' },
    { id: 6, image: '/bytovka-banya.svg', alt: 'Хозблок' },
    { id: 7, image: '/bytovka-pavilion.svg', alt: 'Торговый ряд' },
    { id: 8, image: '/bytovka-modulniy-dom.svg', alt: 'Модульный дом' }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-industrial-600">
            Примеры выполненных проектов
          </p>
        </div>

        {/* Лента фотографий */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square bg-industrial-50 rounded-lg overflow-hidden border border-industrial-200 hover:border-primary-400 transition-colors cursor-pointer group relative"
            >
              <Image 
                src={photo.image} 
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact-form"
            className="btn-primary inline-block"
          >
            Заказать бытовку
          </a>
        </div>
      </div>
    </section>
  )
}
