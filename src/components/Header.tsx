import * as React from 'react';
import './Header.css';
import HamburgerMenu from 'react-hamburger-menu';

interface HeaderState {
    isOpen: boolean;
}

export default class Header extends React.Component<any, HeaderState>{

    private header: HTMLHeadElement;
    private title: HTMLDivElement;
    state: HeaderState = { isOpen: false };

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
                    <a href="#whitepaper">WhitePaper</a>
                    <a href="#developers">Developers</a>
                    <a href="#">Products</a>
                    <a href="#">About</a>
                </div>

                <div id='menu'>
                    <HamburgerMenu
                        isOpen={this.state.isOpen}
                        menuClicked={() => { this.setState({ isOpen: !this.state.isOpen }) }}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </div>

            </header>
        );
    }
}