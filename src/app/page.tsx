import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Advantages from '@/components/Advantages'
import Stats from '@/components/Stats'
import BytovkiTypes from '@/components/BytovkiTypes'
import Services from '@/components/Services'
import HowWeWork from '@/components/HowWeWork'
import PriceList from '@/components/PriceList'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'

/**
 * Главная страница сайта "Мир бытовок"
 * Включает все основные блоки: Hero, преимущества, виды бытовок, услуги и форму
 */
export default function Home() {
  return (
    <>
      {/* Первый экран с заголовком и CTA */}
      <Hero />
      
      {/* Элементы доверия */}
      <TrustBadges />
      
      {/* Блок преимуществ */}
      <Advantages />
      
      {/* Счетчики достижений */}
      <Stats />
      
      {/* Блок с видами бытовок */}
      <BytovkiTypes />
      
      {/* Блок услуг */}
      <Services />
      
      {/* Прайс-лист */}
      <PriceList />
      
      {/* Как мы работаем */}
      <HowWeWork />
      
      {/* Часто задаваемые вопросы */}
      <FAQ />
      
      {/* Форма заявки */}
      <ContactForm />
    </>
  )
}
