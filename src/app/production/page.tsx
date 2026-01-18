import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Производство бытовок в Казани – Собственное производство | Мир бытовок',
  description: 'Производство бытовок на собственной базе в Казани. Изготовим бытовку любого размера и конфигурации. Качественные материалы. Гарантия.',
  keywords: 'производство бытовок Казань, изготовление бытовок, заказать бытовку, производитель бытовок',
}

/**
 * Страница "Производство бытовок"
 * Информация о производственных мощностях и процессе изготовления
 */
export default function ProductionPage() {
  const productionSteps = [
    {
      number: '01',
      title: 'Проектирование',
      description: 'Разрабатываем проект бытовки с учетом ваших требований: размеры, планировка, утепление, отделка'
    },
    {
      number: '02',
      title: 'Изготовление каркаса',
      description: 'Создаем прочный металлический каркас из качественного металлопроката с антикоррозийной обработкой'
    },
    {
      number: '03',
      title: 'Обшивка и утепление',
      description: 'Обшиваем каркас, устанавливаем утеплитель, монтируем окна и двери'
    },
    {
      number: '04',
      title: 'Внутренняя отделка',
      description: 'Проводим внутреннюю отделку, устанавливаем электропроводку, розетки и освещение'
    },
    {
      number: '05',
      title: 'Контроль качества',
      description: 'Проверяем качество изделия на всех этапах производства'
    },
    {
      number: '06',
      title: 'Доставка и установка',
      description: 'Доставляем бытовку на ваш объект и устанавливаем с помощью манипулятора'
    }
  ]

  const materials = [
    { name: 'Металлический каркас', description: 'Профильная труба 40x40, 60x40 мм' },
    { name: 'Утеплитель', description: 'Минеральная вата 50-100 мм' },
    { name: 'Внешняя обшивка', description: 'Металлический профлист С8, С10' },
    { name: 'Внутренняя отделка', description: 'ДВП, вагонка, пластиковые панели' },
    { name: 'Окна', description: 'ПВХ окна с двойным остеклением' },
    { name: 'Двери', description: 'Металлические входные двери' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-industrial-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Производство бытовок в Казани
            </h1>
            <p className="text-xl text-industrial-100 mb-8">
              Собственная производственная база. Изготавливаем бытовки любой конфигурации 
              с использованием качественных материалов и современного оборудования.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact-form" className="btn-accent">
                Заказать производство
              </a>
              <a href="tel:+78432000000" className="btn-secondary">
                +7 (843) 200-00-00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества производства */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему мы?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">10+</div>
              <p className="text-industrial-600">лет на рынке</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-industrial-600">изготовленных бытовок</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-industrial-600">контроль качества</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">3 года</div>
              <p className="text-industrial-600">гарантия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Этапы производства */}
      <section className="section-padding bg-industrial-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Этапы производства
          </h2>
          <p className="text-center text-industrial-600 mb-12 max-w-2xl mx-auto">
            Полный цикл производства от проектирования до установки
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionSteps.map((step, index) => (
              <div key={index} className="card">
                <div className="text-5xl font-bold text-primary-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-industrial-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-industrial-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Материалы */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Используемые материалы
          </h2>
          <p className="text-center text-industrial-600 mb-12 max-w-2xl mx-auto">
            Работаем только с проверенными поставщиками качественных материалов
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="border-l-4 border-primary-600 pl-4 py-2">
                <h3 className="font-bold text-industrial-900 mb-1">
                  {material.name}
                </h3>
                <p className="text-industrial-600 text-sm">
                  {material.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Индивидуальное производство */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Индивидуальное производство
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Изготовим бытовку по вашему проекту с учетом всех пожеланий: 
            нестандартные размеры, специальная планировка, дополнительное оборудование
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact-form" className="btn-accent">
              Обсудить проект
            </a>
            <a href="tel:+78432000000" className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-industrial-50 transition-all">
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <ContactForm />
    </div>
  )
}
