import * as React from 'react';
import './Header.css';
import HamburgerMenu from 'react-hamburger-menu';

interface HeaderState {
    isOpen: boolean;
}

interface HeaderProps {
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

export default class Header extends React.Component<HeaderProps, HeaderState>{

    private header: HTMLHeadElement;
    private title: HTMLDivElement;
    state: HeaderState = { isOpen: false };

    componentDidMount() {
        window.addEventListener('scroll', ev => this.onScroll(ev));
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

    private onScroll(ev: UIEvent) {
        const shadowClass = 'header-shadow';
        const titleScaleClass = 'header-title-small';

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
            <header ref={e => this.header = e as HTMLHeadElement} style={{ backgroundColor: this.state.isOpen ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.85)' }}>
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