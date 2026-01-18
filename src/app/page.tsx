import Hero from '@/components/Hero'
import Advantages from '@/components/Advantages'
import BytovkiTypes from '@/components/BytovkiTypes'
import Services from '@/components/Services'
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
      
      {/* Блок преимуществ */}
      <Advantages />
      
      {/* Блок с видами бытовок */}
      <BytovkiTypes />
      
      {/* Блок услуг */}
      <Services />
      
      {/* Форма заявки */}
      <ContactForm />
    </>
  )
}
