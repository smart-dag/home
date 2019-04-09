import * as React from 'react';
import './Home.css';
import * as jsnx from 'jsnetworkx';
import * as d3 from 'd3';

import thunder from '../assets/thunder.svg';
import scalable from '../assets/scalable.svg';
import usable from '../assets/usable.svg';
import github from '../assets/github-logo.svg';
import telescope from '../assets/telescope.svg';
import wallet from '../assets/wallet.svg';

import i18n from '../i18n';

export default class Home extends React.Component {

    render() {
        return (
            <div className='home' >
                <div className='home-slogan' id='home-slogan'>
                    <div className='home-slogan-text'>Building a smarter world bases on SDAG</div>
                </div>

                <div id='whitepaper' className='bk-intro home-section '>
                    <div className='home-intro-title'>{i18n.advantages.title}</div>

                    <div className='home-intro-items'>
                        <div>
                            <img src={thunder} />
                            <div className='home-intro-item-title'>{i18n.advantages.fast}</div>
                        </div>
                        <div>
                            <img src={scalable} />
                            <div className='home-intro-item-title'>{i18n.advantages.scalable}</div>
                        </div>
                        <div>
                            <img src={usable} />
                            <div className='home-intro-item-title'>{i18n.advantages.usable}</div>
                        </div>
                    </div>

                    <div className='home-intro-whitepaper'>
                        <a href="#">{i18n.advantages.whitepaper}</a>
                    </div>
                </div>

                <div id='developers' className='home-developers home-section'>
                    <div className='home-intro-title'>{i18n.developers.title}</div>

                    <div style={{ marginBottom: 24 }}>
                        {i18n.developers.desc}
                    </div>

                    <div>
                        {i18n.developers.sdkDesc}

                        <div style={{ marginTop: 12 }}>
                            <a href="https://github.com/smart-dag/sdag.js" title='SDAG Javascript SDK'>SDAG.js</a>
                            <a href="https://github.com/smart-dag/sdagwallet.js" title='User-friendly APIs for rapid dApp development'>SDAGWallet.js</a>
                            <a href="https://github.com/smart-dag/docs/tree/master/start-docker">Docker</a>
                        </div>
                    </div>

                    <div style={{ marginTop: 24 }}>
                        <div>
                            <a href="https://github.com"><img src={github} /></a>
                        </div>
                    </div>
                </div>

                <div id='products' className='home-developers home-section bk-intro'>
                    <div className='home-intro-title'>{i18n.products.title}</div>

                    <div>{i18n.products.desc}
                        <div className='home-intro-items' style={{ marginTop: 48, justifyContent: 'center' }}>
                            <div style={{ marginRight: 96 }}>
                                <img src={telescope} />
                                <div className='home-intro-item-title'><a href="https://explorer.sdag.io">{i18n.products.explorer}</a></div>
                            </div>
                            <div>
                                <img src={wallet} />
                                <div className='home-intro-item-title'><a href="https://wallet.sdag.io">{i18n.products.wallet}</a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}