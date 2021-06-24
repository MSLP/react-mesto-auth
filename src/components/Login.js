import React from 'react';
import { withRouter } from 'react-router-dom';
import EntryForm from './EntryForm';

function Login({handleLogin}) {
  return (
    <EntryForm title="Вход" buttonText="Войти" onSubmit={handleLogin} />
  );
}

export default withRouter(Login);
