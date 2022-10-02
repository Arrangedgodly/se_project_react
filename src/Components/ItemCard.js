import '../blocks/card.css';

function ItemCard(props) {
  return (
    <li className='card' id={`${props.weather}`}>
      <div className='card__title-wrapper'>
        <h4 className='card__title'>{props.name}</h4>
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