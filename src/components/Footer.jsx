import React,{useEffect} from 'react'
import { FaInstagram, FaWhatsapp , FaFacebook,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import AOS from 'aos'



const Footer = () => {

  useEffect(()=>{
    AOS.init({duration:2000});
  })
  return (
    <div className='text-light bg-dark p-5'>
      <div className=' d-flex justify-content-around'>
      <div data-aos="fade-up">
        <p style={{width:'20vw'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatem officiis. Recusandae fugiat fugit tempora, nisi quia, deserunt laboriosam eveniet, pariatur consequatur omnis voluptatibus? Ipsa esse beatae dolor aliquam vitae?
        </p>
        </div>
        <div data-aos="fade-up">
          <ul style={{listStyleType:'none'}}>
            <li>Home</li>
            <li>About</li>
            <li>Our services</li>
            <li>Contact</li>
          </ul>
          </div>
          <div data-aos="fade-up">
          <ul style={{listStyleType:'none'}}>
            <li>Blogs</li>
            <li>Sport</li>
            <li>Affiliate</li>
            <li>Suggestions</li>
          </ul>
          </div>
          <div data-aos="fade-up">
          <ul style={{listStyleType:'none'}}>
            <li><FaWhatsapp/> WhatsApp</li>
            <li><FaFacebook/> Facebook</li>
            <li><FaTwitter/> Twitter</li>
            <li><FaInstagram/> Instagram</li>
            <li><FaLinkedinIn/> LinkedinIn</li>
          </ul>
          </div>
      </div>
      </div>
    
  )
}

export default Footer
