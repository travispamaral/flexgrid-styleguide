import React, { Component } from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';

import './Framework.css';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Home from './components/Home';
import Grid from './components/framework-components/Grid';
import FlexedGrid from './components/framework-components/FlexedGrid';
import FixedGrid from './components/framework-components/FixedGrid';
import PushedGrid from './components/framework-components/PushedGrid';
import Alignment from './components/framework-components/Alignment';
import Visibility from './components/framework-components/Visibility';
import Settings from './components/framework-components/Settings';


class App extends Component {

  constructor(){
    super();
    this.state = {
      open: false
    }
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className={"app " + (this.state.open ? 'open' : '')}>
          <div className="menu-trigger" onClick={this.toggleOpen.bind(this)}>
            <div className={"bar " + (this.state.open ? 'animate' : '')}></div>
          </div>
          <Header />
          <Sidebar />
          <div className="app-content container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/grid" component={Grid} />
              <Route path="/flexed" component={FlexedGrid} />
              <Route path="/fixed" component={FixedGrid} />
              <Route path="/pushed" component={PushedGrid} />
              <Route path="/alignment" component={Alignment} />
              <Route path="/visibility" component={Visibility} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
