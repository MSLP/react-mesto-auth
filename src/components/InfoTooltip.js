import React from 'react';
import success from '../images/success-icon.svg';
import decline from '../images/decline-icon.svg';

function InfoTooltip({isOpen, onClose, isRegistered}) {
  return (
    <section className={`popup popup_info ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
      <button onClick={onClose} type="button" className="popup__close popup__close_register button"></button>
      <img className="popup__icon" src={isRegistered ? success : decline} alt="значок статуса регистрации"/>
      <p className="popup__text">{ isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.' }</p>
      </div>
    </section>
  );
}

export default InfoTooltip;
