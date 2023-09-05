import React from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/bank.jpg'
import IMG2 from '../../assets/ecom.jpg'
import IMG3 from '../../assets/crr.png'
import IMG4 from '../../assets/portpic.png'
import IMG5 from '../../assets/bkmark.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'NOX Bank',
    github: 'https://github.com/LeoSage01/Banking-website',
    demo: 'https://banking-website-5rwq.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Car Rental',
    github: 'https://github.com/LeoSage01/Car-rental',
    demo: 'https://car-rental.brimble.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'LS Clothings',
    github: 'https://github.com/LeoSage01/LS-E-commerce.github.io',
    demo: 'https://leosage01.github.io/LS-E-commerce.github.io/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'E-Portfolio Website',
    github: 'https://github.com/LeoSage01/LS-E-commerce.github.io',
    demo: '/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Bookmark Landing Page',
    github: 'https://github.com/LeoSage01/Bookmark-Landing-Page',
    demo: 'https://bookmark-landing-page-1goozl0km-leosage01.vercel.app/'
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