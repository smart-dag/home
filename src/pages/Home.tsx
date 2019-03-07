import * as React from 'react';
import './Home.css';

import thunder from '../assets/thunder.svg';
import scalable from '../assets/scalable.svg';
import usable from '../assets/usable.svg';

export default class Home extends React.Component {

    render() {
        return (
            <div className='home'>
                <div className='home-slogan'>
                    <div className='home-slogan-text'>Building a smarter world bases on SDAG</div>
                </div>

                <div className='home-intro'>
                    <div>Advantages</div>

                    <div className='home-intro-items'>
                        <div>
                            <img src={thunder} />
                            <div>Fast</div>
                        </div>
                        <div>
                            <img src={scalable} />
                            <div>Scalable</div>
                        </div>
                        <div>
                            <img src={usable} />
                            <div>Usable</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}