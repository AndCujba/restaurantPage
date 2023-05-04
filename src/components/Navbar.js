import React, { useState, useEffect } from 'react'
import { Button } from './Button';
import { Link } from "react-router-dom"
import './Navbar.css';
import SignUp from './SignUp';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          RESTAURANT  <i class="fa-solid fa-feather"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acasă
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/despre-noi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Despre noi
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/restaurant'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Restaurant
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contactează-ne
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Make a reservation</Button>} */}
        </div>
      </nav>
    </>
  );
}
export default Navbar;



///