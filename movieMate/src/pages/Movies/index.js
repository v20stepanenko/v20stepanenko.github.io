// Core
import React, { Component } from 'react';
import MoviesSearch from './MoviesSearch';
import MovieCard from './MovieCard';
import MovieMinCard from './MovieMinCard';

// Instruments
import Styles from './style.scss';

export default class Movies extends Component {
    constructor () {
        super();
        this.classNameDelete = 'mini-card';
    }

    state = {
        movieList: [],
        watchList: []
    };

    moviesResponse = (responsePromise) => {
        responsePromise.then((data) => {
            this.setState({ movieList: this.parseResMovieCards(data.results) });
        });
    };
    parseResMovieCards = (response) =>
        response.map((item) => <MovieCard key = { item.id } resultServ = { item } />);

    addMovWatchList = (event) => {
        if (event.target.className.search(/addMovie/) === -1) {
            return;
        }
        const filmCard = event.target.closest('.movieCard');
        const id = filmCard.dataset.id;
        const { watchList } = this.state;

        if (watchList.find((item) => item.key === id)) {
            return;
        }

        const cardSelector = (selector) => filmCard.querySelector(selector);
        const title = cardSelector('.title').innerHTML;
        const releaseDate = cardSelector('.release-data').innerHTML;
        const raiting = cardSelector('.raiting').innerHTML;
        const img = cardSelector('img').src;
        const newArr = [
            ...watchList,
            <MovieMinCard
                classNameDelete = { this.classNameDelete }
                id = { id }
                imgPath = { img }
                key = { id }
                raiting = { raiting }
                released = { releaseDate }
                title = { title }
            />
        ];

        this.setState({ watchList: newArr });
    };

    delMovieWatchList = (event) => {
        const target = event.target;

        if (target.className.search(/deleteMovie/) !== -1) {
            const idFilm = target.closest(`.${this.classNameDelete}`).dataset
                .id;
            const { watchList } = this.state;
            const newSetFilmsView = watchList.filter(
                (item) => idFilm !== item.key
            );

            this.setState({ watchList: newSetFilmsView });
        }
    };

    render () {
        const { movieList, watchList } = this.state;

        return (
            <div>
                <section className = { Styles.movie }>
                    <div className = { Styles.sidebar }>
                        <MoviesSearch passResponse = { this.moviesResponse } />
                        <div
                            className = { Styles.watchList }
                            onClick = { this.delMovieWatchList }>
                            <h2 className = { Styles.listTitle }>WatchList</h2>
                            {watchList}
                        </div>
                    </div>
                    <div
                        className = { Styles.movieList }
                        onClick = { this.addMovWatchList }>
                        {movieList}
                    </div>
                </section>
            </div>
        );
    }
}
