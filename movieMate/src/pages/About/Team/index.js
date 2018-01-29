// Core
import React from 'react';
import { object } from 'prop-types';

// Instruments
import Styles from './style.scss';
import { Link, Switch, Route } from 'react-router-dom';
import TeamMemberCard from '../helper/TeamMemberCard';
import fakeMembers from '../helper/members';

const Team = ({ match }) => {
    const getMembers = () =>
        fakeMembers.map((item) => (
            <li key = { item.id }>
                <Link to = { `${match.path}/${item.id}` }> {item.name} </Link>
            </li>
        ));

    return (
        <div className = { Styles.teamPage }>
            <ul className = { Styles.membersList }>{getMembers()}</ul>
            <Switch>
                <Route component = { TeamMemberCard } path = { `${match.path}/:id` } />
            </Switch>
        </div>
    );
};

Team.propTypes = {
    match: object.isRequired
};

export default Team;
