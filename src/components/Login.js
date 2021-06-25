import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';

function Login({handleLogin}) {
  return (
    <AuthForm title="Вход" buttonText="Войти" onSubmit={handleLogin} />
  );
}

export default withRouter(Login);
