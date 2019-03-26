import * as React from 'react';
import './App.css';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './pages';
import HamburgerMenu from 'react-hamburger-menu';
import * as jQuery from 'jquery';
import Particles from 'react-particles-js';

class App extends React.Component {

  header: Header;

  private openMenu() {
    jQuery('#overlay-menu').css('display', 'block');
    jQuery('#overlay-menu').animate({ 'height': jQuery(document.body).height(), 'opacity': 1 });
  }

  private closeMenu() {
    jQuery('#overlay-menu').animate({ 'opacity': 0 }, 500, () => jQuery('#overlay-menu').css('display', 'none'));
  }

  public render() {
    return (
      <Router >
        <div className='App'>
          <div id='bk' style={{ position: 'absolute', top: 0, left: 0, right: 0, height:'100vh' }}></div>
          <Header ref={e => this.header = e!} onMenuOpen={() => this.openMenu()} onMenuClose={() => this.closeMenu()} />

          <Switch>
            <Route path='/' component={Home} />
          </Switch>

          <Footer />

          <div id='overlay-menu'>
            <div id='overlay-menu-list'>
              <ul>
                <li>
                  <a href="#whitepaper" onClick={() => this.header.closeMenu()}>WhitePaper</a>
                </li>
                <li>
                  <a href="#developers" onClick={() => this.header.closeMenu()}>Developers</a>
                </li>
                <li>
                  <a href="#products" onClick={() => this.header.closeMenu()}>Products</a>
                </li>
                <li>
                  <a href="#about" onClick={() => this.header.closeMenu()}>About</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
