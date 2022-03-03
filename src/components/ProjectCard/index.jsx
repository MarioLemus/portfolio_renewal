import './project_card.css'
import { SiReact, SiStrapi, SiFirebase, SiCss3, SiHtml5, SiGatsby } from 'react-icons/si'

export default function Index({ imgUrl, title, alt, iconOption, pageUrl, pageName }) {
  return (
    <div className='project_card__container'>
      <div className="project_card">
        {/* <a className='project_card__image_link' href={pageUrl} title={pageName} target="_blank" rel="noreferrer"> */}
        <img className='project_card__image' src={imgUrl} alt={alt} />
        {/* </a> */}
        <div className='project_card__description_container'>
          <div className='project_card__tech_stack_container'>
            {iconOption === 'foodLanding' &&
              <>
                <SiReact className='project_card__tech_stack' title='React js' />
                <SiHtml5 className='project_card__tech_stack' title='Html5' />
                <SiCss3 className='project_card__tech_stack' title='Css3' />
              </>
            }
            {iconOption === 'learnCrypto' &&
              <>
                <SiReact className='project_card__tech_stack' title='React js' />
                <SiHtml5 className='project_card__tech_stack' title='Html5' />
                <SiCss3 className='project_card__tech_stack' title='Css3' />
                <SiFirebase className='project_card__tech_stack' title='Firebase' />
                <SiGatsby className='project_card__tech_stack' title='Gatsby' />
              </>
            }
            {iconOption === 'allNovelist' &&
              <>
                <SiReact className='project_card__tech_stack' title='React js' />
                <SiHtml5 className='project_card__tech_stack' title='Html5' />
                <SiCss3 className='project_card__tech_stack' title='Css3' />
                <SiStrapi className='project_card__tech_stack' title='Strapi' />
              </>
            }
          </div>
        </div>
      </div>
      <h3 className='project_card__title'>{title}</h3>
    </div>
  )
}
