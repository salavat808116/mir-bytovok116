import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Advantages from '@/components/Advantages'
import Stats from '@/components/Stats'
import RentSection from '@/components/RentSection'
import BytovkiTypes from '@/components/BytovkiTypes'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import HowWeWork from '@/components/HowWeWork'
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
      
      {/* Счетчики достижений */}
      <Stats />
      
      {/* Аренда бытовок */}
      <RentSection />
      
      {/* Блок с видами бытовок */}
      <BytovkiTypes />
      
      {/* Портфолио выполненных работ */}
      <Portfolio />
      
      {/* Блок преимуществ */}
      <Advantages />
      
      {/* Как мы работаем */}
      <HowWeWork />
      
      {/* Часто задаваемые вопросы */}
      <FAQ />
      
      {/* Форма заявки */}
      <ContactForm />
    </>
  )
}
