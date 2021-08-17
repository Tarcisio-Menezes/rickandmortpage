import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
    <Link to="/rickandmortpage">
      Home
    </Link>
    <Link to="/rickandmortpage/episode">
      Episódios
    </Link>
    <Link to="/rickandmortpage/about">
      Sobre
    </Link>
  </nav>
  );
}

export default Nav;
