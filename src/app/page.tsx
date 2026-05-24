import Header from './components/Header'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Materials from './components/Materials'
import ClientLogos from './components/ClientLogos'
import VideoHero from './components/VideoHero'
export default function Home() {
  return (
    <main className="relative">
      <Header />
      <VideoHero />


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