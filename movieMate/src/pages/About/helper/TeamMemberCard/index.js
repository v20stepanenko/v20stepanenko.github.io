// Core
import React, { Component } from 'react';

// Instruments
import fakeMembers from '../members';
import Styles from './styles.scss';

export default class TeamMemberCard extends Component {
    state = {
        members: []
    };

    componentWillMount () {
        this.setState({ members: fakeMembers });
    }

    getMemberByID = (id) => {
        const { members } = this.state;
        let memberCard = {};

        members.forEach((member) => {
            if (String(member.id) === id) {
                memberCard = (
                    <div>
                        <img alt = 'member img' src = { member.bgImg } />
                        <div className = { Styles.memberInfo }>
                            <span> {member.name} </span>
                            <span> {member.profession} </span>
                        </div>
                    </div>
                );
            }
        });

        return memberCard;
    };
    render () {
        const memberID = this.props.match.params.id;

        return (
            <div className = { Styles.memberCard }>
                {this.getMemberByID(memberID)}
            </div>
        );
    }
}
