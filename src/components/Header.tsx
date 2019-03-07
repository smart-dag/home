import * as React from 'react';
import './Header.css';

export default class Header extends React.Component {

    private header: HTMLHeadElement;
    private title: HTMLDivElement;

    componentDidMount() {
        window.addEventListener('scroll', ev => this.onScroll(ev));
    }

    private onScroll(ev: UIEvent) {
        const shadowClass = 'header-shadow';
        const titleScaleClass = 'header-title-small';

        if (!window.scrollY) {
            this.header.classList.remove(shadowClass)
            this.title.classList.remove(titleScaleClass)
            return;
        }

        if (!this.header.classList.contains(shadowClass)) {
            this.header.classList.add(shadowClass);
        }

        if (!this.title.classList.contains(titleScaleClass)) {
            this.title.classList.add(titleScaleClass);
        }
    }

    render() {
        return (
            <header ref={e => this.header = e as HTMLHeadElement}>
                <div ref={e => this.title = e as HTMLDivElement} className='header-title'>SDAG</div>
                <div className='header-links'>
                    <a href="#">WhitePaper</a>
                    <a href="#">Developer</a>
                    <a href="#">Products</a>
                    <a href="#">About</a>
                </div>
            </header>
        );
    }
}