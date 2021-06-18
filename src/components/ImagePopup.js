import React from 'react';

// попап с полноразмерной картинкой
function ImagePopup({card, onClose}) {
  return(
    <section className={`popup popup_show-picture ${card.isSelected ? 'popup_opened' : ''}`}>
      <figure className="popup__show-content">
        <button onClick={onClose} type="button" className="popup__close button"></button>
        <img className="popup__picture" src={card.link} alt={card.name}/>
        <figcaption className="popup__pic-title">{card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
