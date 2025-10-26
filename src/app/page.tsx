import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Materials from './components/Materials'
import ClientLogos from './components/ClientLogos'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ClientLogos />
      <Materials />
      <Projects />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}