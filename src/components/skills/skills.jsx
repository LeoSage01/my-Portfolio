import React from 'react'
import './skills.scss'
import {FaGitAlt, FaHtml5, FaReact, FaSass} from 'react-icons/fa'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'


const Skill = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill_container">        
          <div className="skill_content">
            <article className="skill_content__details">
              <FaHtml5 className='skill_content__details-icon'/>
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <DiCss3 className='skill_content__details-icon'/>
              <div>
               <h4>CSS3</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <SiJavascript className='skill_content__details-icon'/>
              <div>
               <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <FaSass className='skill_content__details-icon'/>
              <div>
                <h4>Sass</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <FaReact className='skill_content__details-icon'/>
              <div>
               <h4>React</h4>
              </div>
            </article>
            <article className="skill_content__details">
              <FaGitAlt className='skill_content__details-icon'/>
              <div>
               <h4>Git</h4>
              </div>
            </article>
          </div>
        
      </div>
    </section>
  )
}

export default Skill