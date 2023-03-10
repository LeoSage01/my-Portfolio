import React from 'react'
import './contact.scss'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

 
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail contact_option-icon/>
            <h4>Email</h4>
            <h5>leosage2000@gmail.com</h5>
            <a href="mailto:leosage2000@gmail.com" target="_blank">Send a messsage</a>
          </article>
          
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+234 814 824 6782</h5>
            <a href="https://api.whatsapp?phone+2348148246782" target="_blank">Send a messsage</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
           <input type="text" name='name' placeholder='Your Full Name' required /> 
           <input type="email" name='email' placeholder='Your Email' required />
           <textarea name="message" rows="7" placeholder='Your Message' required></textarea> 
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact