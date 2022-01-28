import './projects.css'
import ProjectCard from '../ProjectCard'

const cardsData = [
  {
    id: '1',
    title: 'Landing page para una empresa de embutidos',
    alt: 'ham_portfolio',
    pageUrl: 'https://food-company-landing-page.vercel.app/',
    pageName: 'food company si-ham',
    imgUrl: 'si-ham_portfolio.png',
    iconOption: 'foodLanding'
  },
  {
    id: '2',
    title: 'Blog profesional y futura plataforma de aprendizaje, sobre el mundo de las criptomonedas',
    alt: 'learn_crypto_portfolio',
    pageUrl: 'https://learncrypto.wtf/',
    pageName: 'learn crypto',
    imgUrl: 'learn_crypto_portfolio.png',
    iconOption: 'learnCrypto'
  },
  {
    id: '3',
    title: 'Plataforma de entretenimiento, cuyo nicho principal es la literatura amateur',
    alt: 'allnovelist_xyz_portfolio',
    pageUrl: 'http://allnovelist.xyz/',
    pageName: 'allnovelist',
    imgUrl: 'allnovelist_xyz_portfolio.png',
    iconOption: 'allNovelist'
  }
]

export default function Index() {
  return (
    <section className="container">
      <header>
        <h2 className="projects__title">Productos</h2>
      </header>
      {cardsData.map(cardData => <ProjectCard key={cardData.id}
        iconOption={cardData.iconOption}
        pageUrl={cardData.pageUrl}
        pageName={cardData.pageName}
        imgUrl={cardData.imgUrl}
        alt={cardData.alt}
        title={cardData.title} />)}
    </section>
  )
}
