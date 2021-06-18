import React from 'react';
import PopupWithForm from '../components/PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateUser}) {
  const inputRef = React.useRef();

  // обработка нового значения, полученного из поля ввода
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({avatar: inputRef.current.value}, inputRef);
  }
  return (
    <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить">
        <input type="url" className="popup__input" name="avatar-link"
        ref={inputRef} placeholder="Ссылка на фото" required/>
        <span id="avatar-link-error" className="error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
