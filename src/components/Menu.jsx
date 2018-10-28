import React from 'react'
import { ReactComponent as InstaLogo } from '../assets/insta.svg'
import { NavLink } from 'react-router-dom'
import { ReactComponent as InstaLogoBlack } from '../assets/insta-black.svg'

import './menu.css'

import Logo from '../assets/logo.svg'
import LogoBlack from '../assets/logo-black.svg'

const Menu = ({ color }) => {
  const activeClass = { fontWeight: 'bold' }
  const menuColor = color === 'black' ? { color: 'grey' } : { color: '#efefef' }
  return (
    <header>
      <div className="logo">
        <NavLink to="/">{color === 'black' ? <img src={LogoBlack} alt="logo" /> : <img src={Logo} alt="Lakston" />}</NavLink>
      </div>
      <nav>
        <NavLink to="/places" activeStyle={activeClass} style={menuColor} className="menu-item">
          Places
        </NavLink>
        <span>/</span>
        <NavLink to="/people" activeStyle={activeClass} style={menuColor} className="menu-item">
          People
        </NavLink>
        <span>/</span>
        <NavLink to="/about" activeStyle={activeClass} style={menuColor} className="menu-item">
          About
        </NavLink>
        <a href="https://www.instagram.com/lakston/" className="menu-item">
          {color === 'black' ? <InstaLogoBlack style={{ height: '15px' }} /> : <InstaLogo style={{ height: '15px' }} />}
        </a>
      </nav>
    </header>
  )
}

export default Menu
