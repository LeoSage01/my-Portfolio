import React from 'react'
import CV from '../../assets/leoSage.pdf'


const Btns = () => {
  return (
    <div className="btns">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Btns