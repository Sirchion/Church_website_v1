import React from 'react';
import './NavBar.scss';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MainNavBar = () => {
 return (
    <div className='bg-img'>
          <div className='topNav'>
            <div className='titleCon'>
              <Link className='title' to="/"> <FontAwesomeIcon icon={faCross} className='logo'/>Colston Wellpark Parish Church</Link>
            </div>
            <div className='navLinks'>
              <Link className='link' to="/">Home</Link> {/* Use Link for navigation */}
              <Link className='link' to="/About">About us</Link>
              <Link className='link' to="/Clubs">Clubs</Link> {/* Use Link for navigation */}
              <Link className='link' to="/SpecialEvents">Special Events</Link> {/* Use Link for navigation */}
              <Link className='link' to="/ContactUs">Contact us</Link> {/* Use Link for navigation */}
              <Link className='link' to="/Test">Test</Link> {/* Use Link for navigation */}
            </div>
          </div>
    </div>
 );
};

export default MainNavBar;


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
 
