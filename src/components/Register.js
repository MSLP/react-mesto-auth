import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import EntryForm from './EntryForm';
import auth from '../utils/auth';

function Register({handleLogin}) {
  const history = useHistory();
  function handleSubmit(data) {
    auth.register(data)
    .then(res => {
      handleLogin();
      history.push('/main')
    });
  }

  return (
    <EntryForm title="Регистрация" buttonText="Зарегистрироваться" onSubmit={handleSubmit} />
  );
}

export default withRouter(Register);
