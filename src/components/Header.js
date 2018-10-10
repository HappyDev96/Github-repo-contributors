import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="h-header">
            <div className="width3">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="width7">
                <p>
                React Github API Integration
                </p>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
