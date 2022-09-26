import './ItemCard.js';

function ItemCard(props) {
  return (
    <li className='item-card' key={props._id}>
      <h4 className='item-card__title'>{props.name}</h4>
    </li>
  );
}

export default ItemCard;