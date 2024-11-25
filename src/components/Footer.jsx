import React from 'react'
import { FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="policy">
        ©{new Date().getFullYear()} Halalholidaycheck
      </div>

        <nav className='socials'> 
          <ul>
              <li>
                <Link to='https://www.instagram.com/halalholidaycheck/' target='blank'>
                  <FaInstagramSquare className="social-icon insta" />
                </Link>
              </li>
              <li>
                <Link to='https://www.linkedin.com/company/halalholidaycheck/' target='blank'>
                  <FaLinkedin className="social-icon linkedin" />
                </Link>
              </li>
              <li>
                <Link to='https://www.youtube.com/@halalholidaycheck6303' target='blank'>
                  <FaYoutubeSquare className="social-icon youtube" />
                </Link>
              </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer 