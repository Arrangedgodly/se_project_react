import '../blocks/modal.css';
import '../blocks/form.css';

function ModalWithForm({isOpen, name, onClose, title, buttonText, children}) {
  return (
    <div className={isOpen ? `modal modal_type_${name}` : `modal modal_type_${name} modal_hidden`} >
      <div className='modal__container'>
        <button onClick={onClose}type='button' className='modal__close'></button>
        <h3 className='modal__header'>{title}</h3>
        <form className={`form form_type_${name}`}>
          {children}
          <button type='submit' className='form__submit'>{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;