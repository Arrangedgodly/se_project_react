import './card.css';

function ItemCard(props) {
  return (
    <li className='card' key={props._id}>
      <div className='card__title-wrapper'>
        <h4 className='card__title'>{props.name}</h4>
      </div>
      <img src={props.image} className='card__image' />
    </li>
  );
}

export default ItemCard;