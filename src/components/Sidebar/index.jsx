import './sidebar.css'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { GrContact } from 'react-icons/gr'

export default function Index({ isToggleMenu, handleToggleMenu }) {

  const handleStopPropagation = e => e.stopPropagation()

  return (
    <section onClick={handleToggleMenu} className={isToggleMenu ? 'sidebar' : 'sidebar__hidden'}>
      <div onClick={handleStopPropagation} className='sidebar__navigation_container'>
        <ul className='sidebar__list'>
          <li className='sidebar__list_element'>
            <MdOutlinePersonOutline className='sidebar__icon' />
            <a href='/'>Sobre mi</a>
          </li>
          <li className='sidebar__list_element'>
            <AiOutlineFundProjectionScreen className='sidebar__icon' />
            <a href='/'>Productos</a>
          </li>
          <li className='sidebar__list_element'>
            <GrContact className='sidebar__icon' />
            <a href='/'>Contactame</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
