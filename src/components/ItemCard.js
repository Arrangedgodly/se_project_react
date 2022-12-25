import '../blocks/card.css';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ItemCard(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = props.item.likes.includes(currentUser._id);

  return (
    <li className='card' id={`${props.weather}`}>
      <div className='card__title-wrapper'>
        <h4 className='card__title'>{props.name}</h4>
        {props.isLoggedIn && (
          <button 
            type='button' 
            className={isLiked ? 'card__like card__like-filled' : 'card__like'}
            onClick={props.onCardLike}
            ></button>
        )}
      </div>
      <img 
        src={props.image} 
        onClick={props.handleCardClick} 
        className='card__image' 
        alt={`Example photo of ${props.name}`}
      />
    </li>
  );
}

export default ItemCard;