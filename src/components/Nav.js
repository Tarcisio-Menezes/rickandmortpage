import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
    <Link to="/">
      Home
    </Link>
    <Link to="/Episode">
      Episódios
    </Link>
    <Link to="/About">
      Sobre
    </Link>
  </nav>
  );
}

export default Nav;
