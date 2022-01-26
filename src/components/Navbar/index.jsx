import React from 'react';
import './navbar.css'

export default function Index() {
  return (
    <header className='container navbar'>
      <p className='navbar__logo'>Mario Lemus</p>
      <nav>
        <ul className='navbar__navigation'>
          <li><a href='/'>Sobre mi</a></li>
          <li><a href='/'>Productos</a></li>
          <li><a href='/'>Contactame</a></li>
        </ul>
      </nav>
    </header>
  )
}
