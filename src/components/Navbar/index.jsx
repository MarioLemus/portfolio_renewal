import './navbar.css'
import Sidebar from '../Sidebar'
import useToggleMenu from '../_hooks/useToggleMenu'
import { HiMenuAlt3 } from 'react-icons/hi'

export default function Index() {
  const { isToggleMenu, handleToggleMenu } = useToggleMenu()

  return (
    <header className='container navbar'>
      <p className='navbar__logo'>Mario Lemus</p>
      <nav className='navbar__navigation_container'>
        <ul className='navbar__navigation'>
          <li><a href='/'>Sobre mi</a></li>
          <li><a href='/'>Productos</a></li>
          <li><a href='/'>Contactame</a></li>
        </ul>
        <HiMenuAlt3 onClick={handleToggleMenu} className='navbar__menu' />
      </nav>
      <Sidebar isToggleMenu={isToggleMenu} handleToggleMenu={handleToggleMenu} />
    </header>
  )
}
