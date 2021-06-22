import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../images/Vector.svg';

// шапка сайта
function Header() {
  const history = useHistory();
  const location = useLocation();
  const [buttonText, setButtonText] = React.useState('');

  function handleClick() {
    if (location.pathname === '/signup' || location.pathname === '/main') {
      history.push('/signin')
    }
    else if (location.pathname === '/signin') {
      history.push('/signup')
    }
  }

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
  console.log(location);
  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="логотип"/>
        <button onClick={handleClick} className="button header__button">{buttonText}</button>
    </header>
  );
}

export default Header;
