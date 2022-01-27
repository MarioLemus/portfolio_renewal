import './navbar.css'
import Sidebar from '../Sidebar'
import useToggleMenu from '../_hooks/useToggleMenu'

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
        <button onClick={handleToggleMenu} className='navbar__menu'>menu</button>
      </nav>
      <Sidebar isToggleMenu={isToggleMenu} handleToggleMenu={handleToggleMenu} />
    </header>
  )
}
