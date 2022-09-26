import './modal.css';
import './form.css';

function ModalWithForm(props) {
  const title = props.title;
  const closeButton = props.closeButton;
  
  return (
    <div className='modal-wrapper modal_hidden'>
      <div className='modal'>
        <button type='button' className='modal__close'></button>
        <h3 className='modal__header'>{title}</h3>
        <form className='form'>
          <h4 className='form__label'>Name</h4>
          <input name='name' className='form__input' type='text' placeholder='Name' />
          <h4 className='form__label'>Image</h4>
          <input name='image' className='form__input' type='url' placeholder='Image URL' />
          <h4 className='form__label'>Select the weather type:</h4>
          <div className='form__radio'>
          <span className='form__label-radio'>
            <input name='temp' className='form__input-radio' value='Hot' type='radio' />
            Hot
          </span>
          <span className='form__label-radio'>
          <input name='temp' className='form__input-radio' value='Warm' type='radio' />Warm
          </span>
          <span className='form__label-radio'>
          <input name='temp' className='form__input-radio' value='Cold' type='radio' />Cold
          </span>
          </div>
          <button type='submit' className='form__submit'>Add Garment</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;