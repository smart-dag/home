import * as React from "react";
import './Footer.css';
import i18n from "../i18n";
import SocalIcon from "social-logos";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className='app-footer'>
                <div className='app-footer-copyright'>
                    <div className='logo-font' style={{ fontSize: 32, textAlign: 'start' }}> <span style={{ color: 'black', textDecoration: 'none' }}>SDAG.io</span> </div>
                    <div style={{ fontSize: 10, textAlign: 'start' }}>&copy; SDAG 2019. All Rights Reserved</div>
                    <div style={{ textAlign: 'start', marginTop: 4 }}>
                        <a className='icon' href="https://twitter.com" style={{}}><SocalIcon icon='twitter-alt' size={18} /></a>
                        <a className='icon' href="https://t.me/" style={{}}><SocalIcon icon='telegram' size={18} /></a>
                        <a className='icon' href="https://medium.com" style={{}}><SocalIcon icon='medium' size={18} /></a>
                        <a className='icon' href="https://github.com/sdagio" style={{}}><SocalIcon icon='github' size={18} /></a>
                    </div>
                </div>

                <div className='app-footer-products'>
                    <div className='app-footer-title'>{i18n.footer.products.title}</div>
                    <ul>
                        <li><a href="https://github.com/smart-dag">SDAG</a></li>
                        <li><a href="https://explorer.sdag.io">{i18n.footer.products.sdag_explorer}</a></li>
                        <li><a href="https://wallet.sdag.io">SDAG Wallet</a></li>
                    </ul>
                </div>

                <div className='app-footer-developers'>
                    <div className='app-footer-title'>{i18n.footer.developers.title}</div>
                    <ul>
                        <li><a href="https://github.com/smart-dag">Github</a></li>
                        <li>{i18n.footer.developers.docs}</li>
                    </ul>
                </div>

                <div className='app-footer-team'>
                    <div className='app-footer-title'>{i18n.footer.team.title}</div>
                    <ul>
                        <li>{i18n.footer.team.about}</li>
                    </ul>
                </div>
                {/* 
                <div className='app-footer-misc'>
                    <div className='app-footer-title'>{i18n.footer.misc.lang}</div>

                </div> */}
            </footer>
        );
    }
}