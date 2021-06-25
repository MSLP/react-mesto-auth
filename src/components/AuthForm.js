import React from 'react';
import { Link } from 'react-router-dom';

function AuthForm({title, buttonText, onSubmit}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      'password': password,
      'email': email
    });
  }
  return (
    <div className="auth-page">
      <h2 className="auth-page__title">{title}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input type="email" className="auth-page__input"
          onChange={handleChangeEmail} value={email || ''} placeholder="Email" required />
        <input type="password" className="auth-page__input"
          onChange={handleChangePassword} value={password || ''} placeholder="Пароль" minLength="2" maxLength="200" required />
        <button type="submit" className="auth-page__save button">{buttonText}</button>
        { title === "Регистрация" ? <Link className="auth-page__link" to="/sign-in">Уже зарегистрированы? Войти</Link> : '' }
      </form>
    </div>
  );
}

export default AuthForm;
