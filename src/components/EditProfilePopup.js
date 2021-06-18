import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // контроль изменения имени в поле ввода
  function handleChangeName(e) {
    setName(e.target.value);
  }

  // контроль изменения описания в поле ввода
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  // отправка данных из формы
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  // обновление информации о пользователе
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm title="Редактировать профиль" name="edit-profile" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить">
        <input type="text" className="popup__input popup__input_profile-name" name="profile-name"
          onChange={handleChangeName} value={name || ''} placeholder="Имя" minLength="2" maxLength="40" required />
        <span id="profile-name-error" className="error"></span>
        <input type="text" className="popup__input popup__input_profile-description" name="profile-description"
          onChange={handleChangeDescription} value={description || ''} placeholder="Вид деятельности" minLength="2" maxLength="200" required />
        <span id="profile-description-error" className="error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
