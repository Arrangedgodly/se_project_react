function DeleteConfirmationModal({ name, onClose, handleConfirm, handleCancel }) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className='modal__container modal__container-delete'>
        <button onClick={onClose} type='button' className='modal__close modal__close-delete'></button>
        <h3 className='modal__title modal__title-delete'>Are you sure you want to delete this item?
        This action is irreversible.</h3>
        <button type="button" className="modal__confirmation" onClick={handleConfirm}>Yes, delete item</button>
        <button type="button" className="modal__cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;