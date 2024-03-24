import React from 'react';
import './Test.scss';
import { faCross } from '@fortawesome/free-solid-svg-icons'; // Changed the icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestNavBar = () => {
  return (
    <div className='topNav'>
      <div className='titleCon'>
        <a className='title'> <FontAwesomeIcon icon={faCross} className='logo'/>Colston Wellpark Parish Church</a>
      </div>
      <div className='navLinks'>
        <a className='link'>Home</a>
        <a className='link'>About us</a>
        <a className='link'>Clubs</a>
        <a className='link'>Special Events</a>
        <a className='link'>Contact us</a>
      </div>
    </div>
  );
};

export default TestNavBar;
