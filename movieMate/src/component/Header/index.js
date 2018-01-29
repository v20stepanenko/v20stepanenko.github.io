// Core
import React from 'react';

// Instruments
import Styles from './style.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <Link to = '/'>
            {' '}
            <h1 className = { Styles.logo }>movie mate</h1>{' '}
        </Link>
        <nav>
            <Link to = '/'>main</Link>
            <Link to = '/movies'>movies</Link>
            <Link to = '/about'>about</Link>
        </nav>
    </header>
);

export default Header;
