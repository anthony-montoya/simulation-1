import React, { Component } from 'react';
import ShelfA from './components/shelfA/shelfA';
import ShelfB from './components/shelfB/shelfB';
import ShelfC from './components/shelfC/shelfC';
import ShelfD from './components/shelfD/shelfD';
import { Link } from 'react-router-dom';
import router from './router';
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="homeContainer">
        <header className="logoHeader">
          <img src={ logo } />
        </header>

        <button className="shelfButton">
          <Link to='/shelfA'>Shelf A</Link>
        </button>

        <button className="shelfButton">
          <Link to='/shelfB'>Shelf B</Link>
        </button>
          
        <button className="shelfButton">
          <Link to='/shelfC'>Shelf C</Link>
        </button>

        <button className="shelfButton">  
          <Link to='/shelfD'>Shelf D</Link>
        </button>

        { router }
        
      </div>
    );
  }
}

export default App;
