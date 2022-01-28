import './navbar.css'
import Sidebar from '../Sidebar'
import useToggleMenu from '../_hooks/useToggleMenu'
import { HiMenuAlt3 } from 'react-icons/hi'

export default function Index() {
  const { isToggleMenu, handleToggleMenu } = useToggleMenu()

  return (
    <header className='container navbar'>
      <p className='navbar__logo'>
        <a href='/'>Mario Lemus</a>
      </p>

      <nav className='navbar__navigation_container'>
        <ul className='navbar__navigation'>
          <li>
            <a href='#aboutMe'>Sobre mí</a>
          </li>
          <li>
            <a href='#products'>Productos</a>
          </li>
          <li>
            <a href='#contactMe'>Contácteme</a>
          </li>
        </ul>
        <HiMenuAlt3 onClick={handleToggleMenu} className='navbar__menu' />
      </nav>
      <Sidebar isToggleMenu={isToggleMenu} handleToggleMenu={handleToggleMenu} />
    </header>
  )
}
