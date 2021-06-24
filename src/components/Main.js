import React from 'react';
import pencil from '../images/Pencil.svg';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { withRouter } from 'react-router-dom';

// контент страницы
function Main({cards, onEditAvatar, onAddPlace, onEditProfile, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);

  return(
    <main>
      <section className="profile">
        <button onClick={onEditAvatar} className="button profile__edit-avatar">
          <div className="profile__picture">
            <img className="profile__avatar" src={currentUser.avatar} alt="аватарка"/>
            <img className="profile__overlay" src={pencil} alt="редактировать"/>
          </div>
        </button>
        <div className="profile__info">
          <div className="profile__content">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button onClick={onEditProfile} type="button" className="profile__edit-button button"></button>
          </div>
            <p className="profile__description">{currentUser.about}</p>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button button"></button>
      </section>
      <section className="elements">
        {cards.map(card => (
          <Card
            key={card._id}
            card={card}
            onCardLike={onCardLike}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default withRouter(Main);
