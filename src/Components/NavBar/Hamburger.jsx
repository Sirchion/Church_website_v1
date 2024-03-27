import React from 'react';
import { useState } from 'react';
import {Slide as Menu} from 'react-burger-menu'
import './NavBar.scss';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu className='menu' isOpen={isOpen} onStateChange={({isOpen}) => setIsOpen(isOpen)}>
            <a id='home' className='menu-item' href=''>Home</a>
            <a id='home' className='menu-item' href=''>Home</a>
            <a id='home' className='menu-item' href=''>Home</a>
        </Menu>
    );
};

export default HamburgerMenu;