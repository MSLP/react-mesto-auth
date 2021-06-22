import React from 'react';

function EntryForm({title, buttonText, onSubmit}) {
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
    <div className="entry-page">
      <h2 className="entry-page__title">{title}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input type="email" className="entry-page__input"
          onChange={handleChangeEmail} value={email || ''} placeholder="Email" required />
        <input type="password" className="entry-page__input"
          onChange={handleChangePassword} value={password || ''} placeholder="Пароль" minLength="2" maxLength="200" required />
        <button type="submit" className="entry-page__save button">{buttonText}</button>
      </form>
    </div>
  );
}

export default EntryForm;
