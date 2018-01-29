// Core
import React from 'react';

// Instruments
import Styles from './style.scss';
import { Link } from 'react-router-dom';
import clapperboard from '../../theme/assets/clapperboard.png';
import homer from '../../theme/assets/homer.png';

const Main = () => (
    <section className = { Styles.mainPage }>
        <div className = { Styles.clapperboard }>
            <img alt = 'clapperboard' src = { clapperboard } />
        </div>
        <h2>Welcome to Movie Mate</h2>
        <p>
            {' '}
            This is a single page application that lets you manage all kinds of
            movies.
        </p>
        <p>
            If you wish to learn more about Movie Mate visit{' '}
            <Link to = '/about'>About Page</Link>
        </p>
        <p>
            {' '}
            Or start browsing right now in{' '}
            <Link to = '/movies'>Movie Gallery</Link>
        </p>
        <img alt = 'homer simpson' src = { homer } />
    </section>
);

export default Main;
