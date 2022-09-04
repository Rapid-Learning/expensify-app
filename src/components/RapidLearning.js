import React from 'react';
import AboutUs from './AboutUs';
import Header from './Header';

export default class RapidLearning extends React.Component {
    render() {
        const title = 'Rapid Learning - React Base';

        return (
            <div>
                <Header title={title} />
                <div className='container'>
                    <AboutUs />
                </div>
            </div>
        );
    }
}
