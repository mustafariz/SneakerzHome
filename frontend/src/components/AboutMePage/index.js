

import './AboutMe.css'
import { FaLinkedin  } from "react-icons/fa";
import { FaGithubSquare } from 'react-icons/fa';

const AboutMe = () => {

  return (
     <>
     <div className='about-me-page'>
  
          <div className='about-me-header'>
              <h1>My Links</h1>
              <div className='my-links'>
              <a href='https://www.linkedin.com/in/mustafa-rizvi-970494138/' target="_blank">
                  <i className="fa-brands fa-linkedin"></i></a>

              <a href='https://github.com/mustafariz' target="_blank">
                  <i className="fa-brands fa-square-github"></i></a>
              </div>
             
          </div>
     </div>
     </>
  )
}

export default AboutMe;



