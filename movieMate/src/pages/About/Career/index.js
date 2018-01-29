// Core
import React from 'react';

// Instruments
import Styles from './style.scss';

const Career = () => {
    const frontEndList = [
        'Strong experience with HTML5, CSS3',
        'Deep knowledge of JavaScript',
        'Experience in Responsive Web ',
        'Experience with Git'
    ];

    const backEndList = [
        'Understanding accessibility and security compliance',
        'User authentication and authorization between multiple systems and environments',
        'Integration of multiple data sources and databases into one system',
        'Data migration, transformation, and scripting',
        'Setup and administration of backups',
        'Proficient understanding of code versioning tools, such as Git'
    ];

    const getList = (arr) =>
        arr.map((item, index) => <li key = { index }> {item} </li>);

    return (
        <div className = { Styles.careerPage }>
            <table>
                <caption>Currently we are looking for</caption>
                <tbody>
                    <tr>
                        <td>Front-end developer</td>
                        <td>
                            <ul>{getList(frontEndList)}</ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Back-end developer</td>
                        <td>
                            <ul>{getList(backEndList)}</ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Career;
