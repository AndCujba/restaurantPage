import React from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>AICI SERBĂM FERICIREA</h1>
      
      <div className='hero-btns'>
      <Link to='/contact' className='btn-mobile'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            FĂ O REZERVARE
          </Button>
        </Link>
        <Link to='/despre-noi' className='btn-mobile'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            VEZI MAI MULT 
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;