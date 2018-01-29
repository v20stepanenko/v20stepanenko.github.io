// Core
import React, { Component } from 'react';

// Instruments
import Styles from './style.scss';
import { object } from 'prop-types';

export default class MovieCard extends Component {
    static propTypes = {
        resultServ: object.isRequired
    };
    static get enterPointImg () {
        return 'https://image.tmdb.org/t/p/w300';
    }
    render () {
        const { resultServ } = this.props;
        const fullPathPoster = MovieCard.enterPointImg + resultServ.poster_path;
        const descriptionFilm =
            resultServ.overview.length > 100
                ? `${resultServ.overview.slice(0, 97)}...`
                : resultServ.overview;

        return (
            <div className = { Styles.listItem }>
                <div
                    className = { `${Styles.movieCard} movieCard` }
                    data-id = { resultServ.id }>
                    <div className = { `${Styles.raiting} raiting` }>
                        {resultServ.vote_average}
                    </div>
                    <img alt = { 'no img' } src = { fullPathPoster } />
                    <div>
                        <h2 className = { 'title' }>{resultServ.title}</h2>
                        <p className = { 'description' }>{descriptionFilm}</p>
                        <span className = { `${Styles.releaseDate}` }>
                            Release date:{' '}
                            <span className = { 'release-data' }>
                                {' '}
                                {resultServ.release_date}{' '}
                            </span>
                        </span>
                    </div>
                    <input
                        className = { `${Styles.addToWatchList} addMovie` }
                        type = 'button'
                        value = '+'
                    />
                </div>
            </div>
        );
    }
}
