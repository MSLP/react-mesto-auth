import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

// создание фотокарточки
function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // передача данных о том, какую картинку открыть
  function handleClick() {
    onCardClick(card);
  }

  // поставить/убрать лайк
  function handleLike() {
    onCardLike(card);
  }

  // удалить карточку
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return(
    <div className="element">
      <button onClick={handleClick} className="element__show-img button"><img className="element__img" src={card.link} alt={card.name} /></button>
      <div className="element__text">
        <h2 className="element__title">{card.name}</h2>
        <div>
          <button type="button" onClick={handleLike} className={`element__like button ${isLiked ? 'element__like_active' : ''}`}></button>
          <p className="element__counter">{card.likes.length}</p>
        </div>
      </div>
    {isOwner ? (
      <button onClick={handleDeleteClick} type="button" className="element__bin button"></button>
    ) : ('')}
    </div>
  );
}

export default Card;
