import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div>
    <footer  className='footer-container'>
        <div className='icons-footer'>
          <a href='https://ro-ro.facebook.com/'><i class="fa-brands fa-facebook"></i></a>
          <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div className='copyright-text'>
          <p>© Copyright 2023 Macaresti Restaurant</p>
        </div>
    </footer>
    </div>
    
  )
}

export default Footer
