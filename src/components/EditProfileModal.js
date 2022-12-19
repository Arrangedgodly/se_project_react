import ModalWithForm from "./ModalWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useForm } from "../utils/constants";

const EditProfileModal = ({ isOpen, handleEditUser, onCloseModal, isLoading }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const {values, handleChange, setValues} = useForm({});

  function handleSubmit(e) {
    e.preventDefault();
    handleEditUser(values.name, values.avatar);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      name='edit-profile'
      title='Edit Profile'
      buttonText={isLoading ? 'Saving...' : 'Save changes'}
      onClose={onCloseModal}
      handleSubmit={handleSubmit}
    >
      <h4 className="form__label">Name</h4>
      <input
        name="name"
        className="form__input form__input_type_name"
        type="text"
        placeholder="Name"
        minLength="2"
        maxLength="30"
        value={values.name || currentUser.name}
        onChange={handleChange}
        required
      />
      <h4 className="form__label">Avatar</h4>
      <input
        name="avatar"
        className="form__input form__input_type_avatar"
        type="url"
        placeholder="Avatar URL"
        value={values.avatar || currentUser.avatar}
        onChange={handleChange}
        required
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;