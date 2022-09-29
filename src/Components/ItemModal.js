import '../blocks/itemModal.css';
import '../blocks/modal.css';

function ItemModal({card, onClose}) {
  return (
    <div className='modal modal_type_preview'>
      <div className='modal-container modal-container-alt'>
        <button onClick={onClose}type='button' className='modal__close'></button>
        <img src={card.link} alt={`Picture of ${card.name}`} className='modal__image' />
        <h3 className='modal__title'>{card.name}</h3>
        <p className='modal__desc'>Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;

/* <img src={card.image} alt={`Picture of ${card.name}`} /> */