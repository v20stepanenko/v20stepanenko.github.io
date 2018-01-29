// Core
import React, { Component } from 'react';

// Instruments
import { func, string } from 'prop-types';
import Styles from './style.scss';

export default class InputComponent extends Component {
    static propTypes = {
        passText:    func.isRequired,
        placeholder: string
    };

    state = {
        text: ''
    };

    inputText = (event) => {
        this.setState({ text: event.target.value });
    };

    passText = (event) => {
        event.preventDefault();
        const { text } = this.state;
        const { passText } = this.props;

        passText(text);
        this.setState({ text: '' });
    };

    render () {
        const { text } = this.state;
        const { placeholder } = this.props;

        return (
            <form className = { Styles.wrapperInput } onSubmit = { this.passText }>
                <input
                    className = { Styles.inputSearch }
                    placeholder = { placeholder }
                    type = 'text'
                    value = { text }
                    onChange = { this.inputText }
                />
            </form>
        );
    }
}
