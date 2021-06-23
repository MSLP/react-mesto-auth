import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../images/Vector.svg';

// шапка сайта
function Header({ handleLogin }) {
  const history = useHistory();
  const location = useLocation();
  const [buttonText, setButtonText] = React.useState('');

  // переход на страницу регистрации/входа по кнопке в шапке
  function handleClick() {
    if (location.pathname === '/signup') {
      history.push('/signin')
    }
    else if (location.pathname === '/signin') {
      history.push('/signup')
    }
    else if (location.pathname === '/main') {
      history.push('/signin');
      handleLogin(false);
    }
  }

  // изменение кнопки в зависимости от страницы
  React.useEffect(() => {
    if (location.pathname === '/signup') {
      setButtonText('Войти');
    }
    else if (location.pathname === '/signin') {
      setButtonText('Регистрация');
    }
    else if (location.pathname === '/main') {
      setButtonText('Выйти');
    }
  }, [location]);

  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="логотип"/>
        <button onClick={handleClick} className="button header__button">{buttonText}</button>
    </header>
  );
}

export default Header;
