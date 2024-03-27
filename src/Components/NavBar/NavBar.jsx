import React, { useState } from 'react';
import './NavBar.scss';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import HamburgerMenu from './Hamburger';

const MainNavBar = () => {
 const [isActive, setIsActive] = useState(false);

 const toggleActive = () => {
    setIsActive(!isActive);
 };

 return (
    <div className='nav_container'>
      <Link className='logo_container' aria-label='Logo'></Link>

      <div className='navbar'>
        <ul className={`nav_menu ${isActive ? 'active' : ''}`}>
          <li className='nav_items'><Link className='nav_link' to="/">Home</Link></li>
          <li className='nav_items'><Link className='nav_link' to="/About">About</Link></li>
          <li className='nav_items'><Link className='nav_link' to="Clubs">Clubs</Link></li>
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActive}>
          <span className='burger'></span>
          <span className='burger'></span>
          <span className='burger'></span>
        </div>
      </div>
    </div>
 );
};

export default MainNavBar;


// const MainNavBar = () => {
//   return (
//    <div>
//      <div className='bg-img'>
//        <div className='topNav'>
//          <div className='titleCon'>
//            <FontAwesomeIcon icon={faCross} className='logo logo-mobile'/>
//            <Link className='title' to="/"> <FontAwesomeIcon icon={faCross} className='logo'/>Colston Wellpark Parish Church</Link>
//          </div>
//          <div className='navLinks'>
//            <Link className='link' to="/">Home</Link> 
//            <Link className='link' to="/About">About us</Link>
//            <Link className='link' to="/Clubs">Clubs</Link>
//            <Link className='link' to="/SpecialEvents">Special Events</Link>
//            <Link className='link' to="/ContactUs">Contact us</Link> 
//            <Link className='link' to="/Test">Test</Link>
//          </div>
//          <div className='hamburger'>
//            <label for="check">
//              <input type="checkbox" id="check"/> 
//              <span></span>
//              <span></span>
//              <span></span>
//            </label>
//          </div>
//          <div className='navLinksHam'>
//            <Link className='linkHam' to="/">Home</Link> 
//            <Link className='linkHam' to="/About">About us</Link>
//            <Link className='linkHam' to="/Clubs">Clubs</Link>
//            <Link className='linkHam' to="/SpecialEvents">Special Events</Link>
//            <Link className='linkHam' to="/ContactUs">Contact us</Link> 
//            <Link className='linkHam' to="/Test">Test</Link>
//        </div>
//        </div>
//      </div>
//    </div>
//   );
//  };
 
//  export default MainNavBar;


// const MainNavBar = () => {
//   return (
//      <div className='topNav'>
//        <div className='titleCon'>
//          <li className='title'> <FontAwesomeIcon icon={faCross} className='logo'/>Colston Wellpark Parish Church</li>
//        </div>
//        <div className='navLinks'>
//          <Link className='link' to="/">Home</Link> {/* Use Link for navigation */}
//          <Link className='link' to="/About">About us</Link>
//          <Link className='link' to="/Clubs">Clubs</Link> {/* Use Link for navigation */}
//          <Link className='link' to="/SpecialEvents">Special Events</Link> {/* Use Link for navigation */}
//          <Link className='link' to="/ContactUs">Contact us</Link> {/* Use Link for navigation */}
//          <Link className='link' to="/Test">Test</Link> {/* Use Link for navigation */}
//        </div>
//      </div>
//   );
//  };
 
//  export default MainNavBar;
 
