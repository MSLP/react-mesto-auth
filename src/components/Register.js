import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';

function Register({ onSubmit }) {
  return (
    <AuthForm title="Регистрация" buttonText="Зарегистрироваться" onSubmit={onSubmit} />
  );
}

export default withRouter(Register);
