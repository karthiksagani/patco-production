import { motion } from 'framer-motion';
import "./index.css"

const ContactUs = () => {
    const transition = { type: 'spring', duration: 3}
    const isMob = window.innerWidth <= 768 ? true : false;
  return (
    <div id="contactus" className="wh-wrapper" style={{backgroundColor: "#1c3a2d"}} >
        <div className='footer-section wrapper' id='contact' >
        <div className="footer-l">
        <motion.div
        initial={{x: "-100%"}}
        whileInView={{x: "0"}}
        transition={transition}
        className="footer-title">contact us
    <div className="footer-underline">
        <hr className='footer-line' /><div className="footer-circle"></div>
    </div>
</motion.div>
<div className="contact-sections wrapper">
    <div className="contact-section">
   <a className='contact-section' href="tel:8169961396" target='_blank' rel="noreferrer">
   <img src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/phone.png" alt="" className="contact-icon" />
        <div className="contact-details">+91 8169961396</div>
   </a>
    </div>
    <div className="contact-section">
        <a className='contact-section' href="mailto:patcoproductions@gmail.com" target='_blank' rel="noreferrer" >
        <img src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/email%20(1).png" alt="" className="contact-icon" />
        <div className="contact-details">patcoproductions@gmail.com</div>
        </a>
    </div>
    <div className="contact-section">
    <a className='contact-section' href="https://goo.gl/maps/gY6dpvQp459cBwCMA" target='_blank' rel="noreferrer">
    <img src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/map.png" alt="" className="contact-icon" />
        <div className="contact-details">66, Harminder Singh Road, Aram Nagar Part-1, 
Versova, Mumbai-400061</div>
    </a>
    </div>
    {/* <div className="contact-section">
    <img src={TRC} alt="" className="contact-icon trc-icon" />
        <div className="contact-details trc-details">A young group of designers and content creators, always on the lookout for challenging projects that satisfy our soul. We believe in embracing the journey and trust the process of innovation and creativity.</div>
        <button className="trc-btn"><a style={{textDecoration: "none"}} href="https://therunawaycrew.com/" target='_blank' >Contact us</a></button>
    </div> */}
</div>
        </div>
<div className="footer-r">
    <motion.div
     initial={{right: "-20rem"}}
     whileInView={{right: isMob ? "unset" : "-3rem"}}
     transition={transition}
    className="footer-logo">
<img className="footer-logo1" src="https://www.patcoproductions.com/static/media/footer-logo.4705b30b399cf6b7bc7b.png" alt="" />
    </motion.div>
    <a href="#"><motion.img
    initial={{x: isMob ? "unset" : "-10rem"}}
    whileInView={{x: isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 4}}
    className='social-icons linkedin' src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/linkedin.png" alt="" /></a>
    <a href=""><motion.img
    initial={{x: isMob ? "unset" :  "-10rem"}}
    whileInView={{x:isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 3}} className='social-icons instagram' src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/instagram.png" alt="" /></a>
    <a href=""><motion.img
    initial={{x:isMob ? "unset" :  "-10rem"}}
    whileInView={{x:isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 2}} className='social-icons behance' src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/behance.png" alt="" /></a>
    <a href=""><motion.img
    initial={{x:isMob ? "unset" :  "-10rem"}}
    whileInView={{x:isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 3}} className='social-icons facebook' src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/facebook.png" alt="" /></a>
    <a href=""><motion.img
    initial={{x:isMob ? "unset" :  "-10rem"}}
    whileInView={{x:isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 4}} className='social-icons pinterest' src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/pinterest.png" alt="" /></a>
</div>
    </div>
    </div>
  )
}

export default ContactUs