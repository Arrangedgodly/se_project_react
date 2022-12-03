import '../blocks/card.css';

function ItemCard(props) {
  const isLiked = props.item.likes.some(user => user._id === props.currentUser._id);

  return (
    <li className='card' id={`${props.weather}`}>
      <div className='card__title-wrapper'>
        <h4 className='card__title'>{props.name}</h4>
        {props.isLoggedIn && (
          <button type='button' className={isLiked ? 'card__like card__like-filled' : 'card__like'}></button>
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