import ModalWithForm from "./ModalWithForm";
import React from "react";

const EditProfileModal = ({ isOpen, handleEditUser, onCloseModal, isLoading }) => {
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleEditUser(name, avatar);
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
        value={name}
        onChange={handleName}
        required
      />
      <h4 className="form__label">Avatar</h4>
      <input
        name="avatar"
        className="form__input form__input_type_avatar"
        type="url"
        placeholder="Avatar URL"
        value={avatar}
        onChange={handleAvatar}
        required
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;