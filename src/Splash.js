import React from 'react';
import { Link } from 'react-router-dom';

import spartan from './assets/LGBTQ.Ally.Program.Logo.png';


const Splash = () =>
  <header className="App-header">
    <Link to='/home'>
      <img
        src={spartan}
        className="App-logo"
        alt="logo"
        onClick={() => alert('hello')} />
    </Link>
    <p>
      Splash page for SJSU <code>React app</code>
    </p>
    <a
      className="App-link"
      href="https://www.sjsu.edu/"
      style={{color: 'darkblue'}}
    >
      Visit SJSU.edu
    </a>
  </header>;

export default Splash;
