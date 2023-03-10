import React from 'react'
import './header.scss'
import Btns from './Btns'
import ME from '../../assets/me.png'
import Logo from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="logo">
                  <img src={Logo} alt="Logo" />
                </div>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ugwuoke Victor</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <Btns />
        <HeaderSocials />
        <div className="header_container__image">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header