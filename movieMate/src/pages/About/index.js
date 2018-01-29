// Core
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

// Instruments
import Team from './Team';
import Stack from './Stack';
import Career from './Career';
import Styles from './style.scss';
import { object } from 'prop-types';

const About = ({ match }) => (
    <div>
        <nav className = { Styles.aboutNav }>
            <Link to = { `${match.path}/team` }>The Team</Link>
            <Link to = { `${match.path}/stack` }>Our Stack</Link>
            <Link to = { `${match.path}/career` }>Career</Link>
        </nav>
        <Switch>
            <Route component = { Team } path = { `${match.path}/team` } />
            <Route component = { Stack } path = { `${match.path}/stack` } />
            <Route component = { Career } path = { `${match.path}/career` } />
        </Switch>
    </div>
);

About.propTypes = {
    match: object.isRequired
};

export default About;
