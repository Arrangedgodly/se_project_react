import '../Blocks/modal.css';
import '../Blocks/form.css';

function ModalWithForm(props) {
  return (
    <div className={`modal modal_type_${props.name}`} >
      <div className='modal-container'>
        <button onClick={props.onClose}type='button' className='modal__close'></button>
        <h3 className='modal__header'>{props.title}</h3>
        <form className={`form form_type_${props.name}`}>
          {props.children}
          <button type='submit' className='form__submit'>{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;