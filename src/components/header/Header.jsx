import React from 'react'
import './header.scss'
import Btns from './Btns'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ugwuoke Victor</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Btns />
        <div className="section">
          <HeaderSocials />
          <div className="header_container__image">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header