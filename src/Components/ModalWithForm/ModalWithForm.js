import './ModalWithForm.css';

function ModalWithForm() {
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <button type='button' className='modal__close'>X</button>
        <h3 className='modal__header'>New Garment</h3>
      </div>
    </div>
  );
}

export default ModalWithForm;