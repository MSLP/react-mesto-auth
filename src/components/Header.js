import React from 'react';
import logo from '../images/Vector.svg';

// шапка сайта
function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="логотип"/>
    </header>
  );
}

export default Header;
