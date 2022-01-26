import './hero.css'
import SocialNetworkBar from '../SocialNetworkBar'

export default function Index() {
  return (
    <article className='container hero'>
      <header>
        <h2 className='hero__subtitle'>Soy Mario Lemus, desarrollador web</h2>
      </header>
      <section>
        <h1 className='hero__title'>
          Desarrollando experiencias interactivas en la web
        </h1>
      </section>
      <SocialNetworkBar />
    </article>
  )
}
