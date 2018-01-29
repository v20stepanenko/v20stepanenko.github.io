// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';
import Header from '../../component/Header';

import Main from '../../pages/Main';
import Movies from '../../pages/Movies';
import About from '../../pages/About';

const App = () => (
    <section className = { Styles.app }>
        <Header />
        <Switch>
            <Route exact component = { Main } path = '/' />
            <Route component = { Movies } path = '/movies' />
            <Route component = { About } path = '/about' />
        </Switch>
    </section>
);

export default App;
