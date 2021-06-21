import React from 'react';

function EntryForm({title, buttonText}) {
  function onSubmit(e) {
    e.preventDefault();
  }

  function handleChangeEmail() {

  }

  function handleChangePassword() {

  }
  return (
    <div className="entry-page">
      <h2 className="entry-page__title">{title}</h2>
      <form onSubmit={onSubmit} noValidate>
        <input type="email" className="entry-page__input"
          onChange={handleChangeEmail} placeholder="Email" required />
        <input type="password" className="entry-page__input"
          onChange={handleChangePassword} placeholder="Пароль" minLength="2" maxLength="200" required />
        <button type="submit" className="entry-page__save button">{buttonText}</button>
      </form>
    </div>
  );
}

export default EntryForm;
