import React from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/bank.png'
import IMG2 from '../../assets/ecom.png'
import IMG3 from '../../assets/cars.png'
import IMG4 from '../../assets/port.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Banking Website Landing Page',
    github: 'https://github.com/LeoSage01/Banking-website',
    demo: 'https://banking-website-5rwq.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-commerce Website Landing Page',
    github: 'https://github.com/LeoSage01/LS-E-commerce.github.io',
    demo: 'https://leosage01.github.io/LS-E-commerce.github.io/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Car Rental Dashboard',
    github: 'https://github.com/LeoSage01/Car_Rental-Dashboard',
    demo: 'https://car-rental-rosy.vercel.app/dashboard'
  },
  {
    id: 4,
    image: IMG4,
    title: 'E-Portfolio Website',
    github: 'https://github.com/LeoSage01/LS-E-commerce.github.io',
    demo: '/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Browse My Recent</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_container__item'>
          <div className="portfolio_container__item-image">
            <img src={image} alt="{title" />          
          </div>
          <h3>{title}</h3>
          <div className='portfolio_container__item-btns'>
            <a href={github} className='btn'>GitHub</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
            )
          })
        }        
      </div>
    </section>
  )
}

export default Portfolio  