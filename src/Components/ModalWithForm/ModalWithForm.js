import './modal.css';
import './form.css';

function ModalWithForm({title, name, buttonText, onClose}) {
  return (
    <div className={`modal modal_type_${name}`} >
      <div className='modal-container'>
        <button onClick={onClose}type='button' className='modal__close'></button>
        <h3 className='modal__header'>{title}</h3>
        <form className='form'>
          <h4 className='form__label'>Name</h4>
          <input name='name' className='form__input' type='text' placeholder='Name' />
          <h4 className='form__label'>Image</h4>
          <input name='image' className='form__input' type='url' placeholder='Image URL' />
          <h4 className='form__label'>Select the weather type:</h4>
          <div className='form__radio'>
          <label className='form__label-radio'>
            <input name='temp' className='form__input-radio' value='Hot' type='radio' />
            Hot
          </label>
          <label className='form__label-radio'>
          <input name='temp' className='form__input-radio' value='Warm' type='radio' />Warm
          </label>
          <label className='form__label-radio'>
          <input name='temp' className='form__input-radio' value='Cold' type='radio' />Cold
          </label>
          </div>
          <button type='submit' className='form__submit'>{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;