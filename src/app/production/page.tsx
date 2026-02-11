import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Производство бытовок – Собственное производство | Мир бытовок',
  description: 'Производство бытовок на собственной производственной базе. Изготовим бытовку любого размера и конфигурации. Качественные материалы. Гарантия.',
  keywords: 'производство бытовок, изготовление бытовок, заказать бытовку, производитель бытовок, блок-контейнеры',
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
              Производство бытовок
            </h1>
            <p className="text-xl text-industrial-100 mb-8">
              Собственная производственная база. Изготавливаем бытовки любой конфигурации 
              с использованием качественных материалов и современного оборудования.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact-form" className="btn-accent">
                Заказать производство
              </a>
              <a href="tel:+79179098884" className="btn-secondary">
                +7 917 909-88-84
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Виды производимых бытовок */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-8 text-center">
            Что мы производим
          </h2>
          <p className="text-center text-industrial-600 mb-12 max-w-3xl mx-auto">
            Собственное производство площадью 700 м². Более 15 лет на рынке. Изготовили более 3700 бытовок. 
            Используем только качественные материалы. Срок изготовления - от 3 дней.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Строительные бытовки */}
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="mb-6 relative h-64 rounded-lg overflow-hidden bg-industrial-50">
                <img 
                  src="/bytovka-stroitelnaya.jpg" 
                  alt="Строительные бытовки"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">Строительные бытовки</h3>
              <p className="text-industrial-600 mb-4">
                Для проживания рабочих, организации офиса прораба и хранения инструментов на стройплощадке.
              </p>
              <div className="space-y-2 text-sm text-industrial-600">
                <p>• Металлокаркас из профильной трубы</p>
                <p>• Утепление минеральной ватой 50-100мм</p>
                <p>• Внутренняя отделка ДВП или вагонкой</p>
                <p>• Электропроводка, розетки, освещение</p>
              </div>
            </div>

            {/* Торговые павильоны */}
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="mb-6 relative h-64 rounded-lg overflow-hidden bg-industrial-50">
                <img 
                  src="/bytovka-pavilion.jpg" 
                  alt="Торговые павильоны"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">Торговые павильоны</h3>
              <p className="text-industrial-600 mb-4">
                Для организации торговых точек, киосков, пунктов выдачи товаров и общепита.
              </p>
              <div className="space-y-2 text-sm text-industrial-600">
                <p>• Панорамное витринное остекление</p>
                <p>• Усиленный металлический каркас</p>
                <p>• Место для установки вывески</p>
                <p>• Отделка под ключ, вся электрика</p>
              </div>
            </div>

            {/* Модульные дома */}
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="mb-6 relative h-64 rounded-lg overflow-hidden bg-industrial-50">
                <img 
                  src="/bytovka-modulniy-dom.jpg" 
                  alt="Модульные дома"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">Модульные дома</h3>
              <p className="text-industrial-600 mb-4">
                Комфортные дома для круглогодичного проживания с возможностью установки всех коммуникаций.
              </p>
              <div className="space-y-2 text-sm text-industrial-600">
                <p>• Толстое утепление 100-150мм</p>
                <p>• Возможность установки санузла и кухни</p>
                <p>• Полная внутренняя отделка</p>
                <p>• Сантехника, электрика, мебель (опционально)</p>
              </div>
            </div>

            {/* Бани и хозблоки */}
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="mb-6 relative h-64 rounded-lg overflow-hidden bg-industrial-50">
                <img 
                  src="/bytovka-banya.jpg" 
                  alt="Бани и хозблоки"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-industrial-900 mb-4">Бани и хозблоки</h3>
              <p className="text-industrial-600 mb-4">
                Компактные постройки для дачи и загородного участка. Бани с парилкой, хозблоки для хранения.
              </p>
              <div className="space-y-2 text-sm text-industrial-600">
                <p>• Бани: парная + предбанник, вагонка из липы/осины</p>
                <p>• Печь в комплекте (опционально)</p>
                <p>• Хозблоки: металлокаркас, двускатная крыша</p>
                <p>• Прочные замки, возможность перегородок</p>
              </div>
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
            <a href="tel:+79179098884" className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-industrial-50 transition-all">
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
