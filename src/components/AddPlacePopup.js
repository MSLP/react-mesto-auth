import React from 'react';
import PopupWithForm from '../components/PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  // контроль изменения названия в поле ввода
  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  // контроль изменения ссылки в поле ввода
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  // отправка данных из формы
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: title,
      link: link,
    }, setTitle, setLink);
  }
  return (
    <PopupWithForm title="Новое место" name="add-picture" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Создать">
        <input type="text" className="popup__input" name="photo-name"
          onChange={handleChangeTitle} value={title || ''} placeholder="Название" minLength="2" maxLength="30" required/>
        <span id="photo-name-error" className="error"></span>
        <input type="url" className="popup__input" name="photo-link"
          onChange={handleChangeLink} value={link || ''} placeholder="Ссылка на картинку" required/>
        <span id="photo-link-error" className="error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
