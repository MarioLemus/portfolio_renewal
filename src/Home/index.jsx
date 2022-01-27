import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import './home.css'

export default function Index() {


  return (
    <section>
      <div className='home__navbar_hero_container'>
        <Navbar />
        <Hero />
      </div>
      <div className='home__about_me_container'>
        <AboutMe />
      </div>
      <div className='home__projects'>
        <Projects />
      </div>
      <div className='home__contact_me'>
        <ContactMe />
      </div>
    </section>
  )
}


