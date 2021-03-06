import * as React from 'react';
import './Header.css';
import HamburgerMenu from 'react-hamburger-menu';
import logo from '../assets/logo.png';
import logow from '../assets/logo-w.png';
import i18n from '../i18n';

interface HeaderState {
    isOpen?: boolean;
    notAtTop?: boolean;
}

interface HeaderProps {
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

export default class Header extends React.Component<HeaderProps, HeaderState>{

    private header: HTMLHeadElement;
    private title: HTMLDivElement;
    state: HeaderState = { isOpen: false, notAtTop: false };

    componentDidMount() {
        window.addEventListener('scroll', _ => this.onScroll());
    }

    private toggleMenu() {
        let open = !this.state.isOpen;
        this.setState({ isOpen: open });
        if (this.props.onMenuOpen && open) this.props.onMenuOpen();
        if (this.props.onMenuClose && !open) this.props.onMenuClose();
    }

    closeMenu() {
        this.setState({ isOpen: false });
        if (this.props.onMenuClose) this.props.onMenuClose();
    }

    private onScroll() {
        const shadowClass = 'header-shadow';
        const titleScaleClass = 'header-title-small';

        this.setState({ notAtTop: window.scrollY > window.innerHeight * 0.95 });

        if (window.scrollY <= 0) {
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
            <header ref={e => this.header = e as HTMLHeadElement} style={{ backgroundColor: this.state.notAtTop ? 'rgba(255,255, 255, 0.85)' : 'rgba(0, 0, 0, 0)' }}>
                <div ref={e => this.title = e as HTMLDivElement} className='header-title'><img src={this.state.notAtTop ? logo : logow} alt="Logo" style={{ width: 30, height: 30 }} /></div>
                <div className='header-links'>
                    <a href="#whitepaper" className={this.state.notAtTop ? 'black' : ''}>{i18n.advantages.whitepaper}</a>
                    <a href="#developers" className={this.state.notAtTop ? 'black' : ''}>{i18n.developers.title}</a>
                    <a href="#products" className={this.state.notAtTop ? 'black' : ''}>{i18n.products.title}</a>
                    <a href="#about" className={this.state.notAtTop ? 'black' : ''}>{i18n.about.title}</a>
                </div>

                <div id='menu'>
                    <HamburgerMenu
                        isOpen={this.state.isOpen}
                        menuClicked={() => this.toggleMenu()}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color={this.state.isOpen ? 'white' : 'black'}
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </div>

            </header>
        );
    }
}