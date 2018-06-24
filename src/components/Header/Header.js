import React from 'react'
import './Header.css'
import Logo from '../Icons/Nudge_03.svg'

const Header = () => {
  return (
    <header className="Header-page">
      <div className="Header-logo">
        <img src={Logo} />
      </div>
    </header>
  )
}

export default Header
