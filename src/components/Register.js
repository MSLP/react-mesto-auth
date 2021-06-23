import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import EntryForm from './EntryForm';
import auth from '../utils/auth';

function Register({ handleLogin, handleRegister }) {
  const history = useHistory();

  // при успешной регистрации переходим на основную страницу,
  // а так же сообщаем о статусе регистрации попапом
  function handleSubmit(data) {
    auth.register(data)
    .then(res => {
      handleLogin();
      handleRegister(true);
      history.push('/main')
    })
    .catch(handleRegister(false));
  }

  return (
    <EntryForm title="Регистрация" buttonText="Зарегистрироваться" onSubmit={handleSubmit} />
  );
}

export default withRouter(Register);
