// Core
import React from 'react';

// Instruments
import { string } from 'prop-types';
import Styles from './style.scss';

const MovieMinCard = ({
    classNameDelete,
    id,
    title,
    imgPath,
    released,
    raiting
}) => (
    <div className = { `${Styles.miniCard} ${classNameDelete}` } data-id = { id }>
        <img alt = 'no img' src = { imgPath } />
        <div className = { Styles.miniCardInfo }>
            <h3>{title}</h3>
            <p>Released: {released}</p>
            <p>Raiting: {raiting}</p>
        </div>
        <input
            className = { `${Styles.deleteBtn} deleteMovie` }
            type = 'button'
            value = '-'
        />
    </div>
);

MovieMinCard.propTypes = {
    classNameDelete: string.isRequired,
    id:              string.isRequired,
    imgPath:         string,
    raiting:         string,
    released:        string,
    title:           string
};

export default MovieMinCard;
