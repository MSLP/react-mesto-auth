import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../images/Vector.svg';

// шапка сайта
function Header({ onSignOut, email, loggedIn }) {
  const history = useHistory();
  const location = useLocation();

  // переход на страницу регистрации/входа по кнопке в шапке
  function handleClick() {
    if (location.pathname === '/sign-up') {
      history.push('/sign-in')
    }
    else if (location.pathname === '/sign-in') {
      history.push('/sign-up')
    }
    else if (location.pathname === '/main') {
      history.push('/sign-in');
      onSignOut();
    }
  }

  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="логотип"/>
        <div className="header__user-info">
          {loggedIn && <p className="header__email">{email}</p>}
          <button onClick={handleClick} className="button header__button">
            {
              location.pathname === '/sign-up' ? 'Войти' :
              location.pathname === '/sign-in' ? 'Регистрация' :
              location.pathname === '/main' ? 'Выйти' : ''
            }
          </button>
        </div>
    </header>
  );
}

export default Header;
