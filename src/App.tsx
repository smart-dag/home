import * as React from 'react';
import './App.css';
import { Header } from './components';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './pages';

class App extends React.Component {
  public render() {
    return (
      <Router >
        <div className='App'>
          <Header />

          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
