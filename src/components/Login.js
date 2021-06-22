import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import EntryForm from './EntryForm';
import auth from '../utils/auth';

function Login({handleLogin}) {
  const history = useHistory();
  function handleSubmit(data) {
    auth.login(data)
    .then(res => {
      handleLogin();
      localStorage.setItem('token', res.token);
      history.push('/main');
    })
  }
  return (
    <EntryForm title="Вход" buttonText="Войти" onSubmit={handleSubmit} />
  );
}

export default withRouter(Login);
