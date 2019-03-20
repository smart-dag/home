import * as React from 'react';
import './App.css';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './pages';
import HamburgerMenu from 'react-hamburger-menu';
import * as jQuery from 'jquery';

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
