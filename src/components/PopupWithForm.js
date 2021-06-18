import React from 'react';

// попапы с формами
function PopupWithForm({title, name, isOpen, onClose, children, onSubmit, buttonText}) {
  return(
    <section className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
          <button onClick={onClose} type="button" className="popup__close button"></button>
          <h2 className="popup__title">{title}</h2>
          <form onSubmit={onSubmit} className="popup__form" noValidate>
            {children}
            <button type="submit" className="popup__save button">{buttonText}</button>
          </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
