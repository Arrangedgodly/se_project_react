import '../blocks/itemModal.css';
import '../blocks/modal.css';

function ItemModal({card, onClose, handleDeleteModal, currentUser }) {
  const isOwn = card.owner === currentUser._id;
  return (
      <div className='modal modal_type_preview'>
      <div className='modal__container modal__container-alt'>
        <button onClick={onClose}type='button' className='modal__close'></button>
        <img src={card.imageUrl} alt={`Picture of ${card.name}`} className='modal__image' />
        <h3 className='modal__title'>{card.name}</h3>
        <p className='modal__desc'>Weather: {card.weather}</p>
        {isOwn && (
          <button type='button' className='modal__delete' onClick={handleDeleteModal}>Delete Item</button>
        )}
      </div>
    </div>   
  );
}

export default ItemModal;

/* <img src={card.image} alt={`Picture of ${card.name}`} /> */