import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Advantages from '@/components/Advantages'
import Stats from '@/components/Stats'
import RentSection from '@/components/RentSection'
import BytovkiTypes from '@/components/BytovkiTypes'
import Services from '@/components/Services'
import ProductCatalog from '@/components/ProductCatalog'
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
      
      {/* Каталог товаров с ценами */}
      <ProductCatalog />
      
      {/* Счетчики достижений */}
      <Stats />
      
      {/* БОЛЬШОЙ БЛОК ПРО АРЕНДУ */}
      <RentSection />
      
      {/* Блок с видами бытовок */}
      <BytovkiTypes />
      
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
