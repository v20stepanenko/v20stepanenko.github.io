// Core
import React, { Component } from 'react';
import InputComponent from '../../../component/InputComponent/index';

// Instruments
import {
    getUrlByInput,
    categoriesFilmURL,
    getQueryPromise
} from '../../../helpers/apiFetch';
import Styles from './style.scss';

import { func } from 'prop-types';

export default class MovieSearch extends Component {
    static propTypes = {
        passResponse: func.isRequired
    };

    componentWillMount () {
        const startUrl = categoriesFilmURL().upCom;

        this.propPassRes(startUrl);
    }

    propPassRes = (url) => {
        const { passResponse } = this.props;

        passResponse(getQueryPromise(url));
    };

    inputFetch = (input) => {
        if (input) {
            this.propPassRes(getUrlByInput(input));
        }
    };

    listenButton = (event) => {
        let urlToFetch = '';

        switch (event.target.value) {
            case 'POPULAR': {
                urlToFetch = categoriesFilmURL().pop;
                break;
            }
            case 'UPCOMING': {
                urlToFetch = categoriesFilmURL().upCom;
                break;
            }
            case 'TOP RATED': {
                urlToFetch = categoriesFilmURL().top;
                break;
            }
            default: {
                throw new Error('There is no such category of the film');
            }
        }
        this.propPassRes(urlToFetch);
    };

    render () {
        return (
            <div className = { Styles.movieSearch }>
                <InputComponent
                    className = { Styles.inputName }
                    passText = { this.inputFetch }
                    placeholder = { 'Search for movies by name...' }
                />
                <div
                    className = { Styles.catigoriesFilm }
                    onClick = { this.listenButton }>
                    <input type = 'button' value = 'POPULAR' />
                    <input type = 'button' value = 'UPCOMING' />
                    <input type = 'button' value = 'TOP RATED' />
                </div>
            </div>
        );
    }
}
