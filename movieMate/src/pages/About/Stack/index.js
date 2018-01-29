// Core
import React from 'react';

// Instruments
import stackData from '../helper/stack';
import Styles from './styles.scss';

const Stack = () => {
    const getStacks = () =>
        stackData.map((item, id) => (
            <li key = { id }>
                <img alt = { item.name } src = { item.img } />
            </li>
        ));

    return <ul className = { Styles.listStacks }> {getStacks()}</ul>;
};

export default Stack;
