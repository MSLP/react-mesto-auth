import React from 'react';
import { withRouter } from 'react-router-dom';
import EntryForm from './EntryForm';

function Register({ onSubmit }) {
  return (
    <EntryForm title="Регистрация" buttonText="Зарегистрироваться" onSubmit={onSubmit} />
  );
}

export default withRouter(Register);
