import React from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tip Calculator App',
    github: 'https://github.com/LeoSage01/myTipCalculator.github.io',
    demo: 'https://leosage01.github.io/myTipCalculator.github.io/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rock Paper Scissors',
    github: 'https://github.com/LeoSage01/RockPaperScissors.github.io',
    demo: 'https://leosage01.github.io/RockPaperScissors.github.io/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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