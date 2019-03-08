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

                <div id='whitepaper' className='home-intro home-section '>
                    <div className='home-intro-title'>Advantages</div>

                    <div className='home-intro-items'>
                        <div>
                            <img src={thunder} />
                            <div className='home-intro-item-title'>Fast</div>
                        </div>
                        <div>
                            <img src={scalable} />
                            <div className='home-intro-item-title'>Scalable</div>
                        </div>
                        <div>
                            <img src={usable} />
                            <div className='home-intro-item-title'>Usable</div>
                        </div>
                    </div>

                    <div className='home-intro-whitepaper'>
                        <a href="#">Whitepaper</a>
                    </div>
                </div>

                <div id='developers' className='home-developers home-section'>
                    <div className='home-intro-title'>Developers</div>

                    <div>
                        We developed user-friendly API libraries for developers. With these tools, you can quickly develop dApps based on SDAG.
                    </div>
                </div>
            </div>
        );
    }
}