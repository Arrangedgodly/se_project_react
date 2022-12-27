import ModalWithForm from "./ModalWithForm";
import React from "react";
import { useForm } from "../utils/constants";

const RegisterModal = ({ isOpen, onRegisterUser, onCloseModal, isLoading }) => {
  const {values, handleChange, setValues} = useForm({});

  function handleSubmit(e) {
    e.preventDefault();
    onRegisterUser(values.name, values.avatar, values.email, values.password);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      name='register'
      title='Sign Up'
      buttonText={isLoading ? "Saving..." : "Next"}
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
        value={values.name || ''}
        onChange={handleChange}
        required
      />
      <h4 className="form__label">Email</h4>
      <input
        name="email"
        className="form__input form__input_type_email"
        type="email"
        placeholder="Email"
        value={values.email || ''}
        onChange={handleChange}
        required
      />
      <h4 className="form__label">Avatar</h4>
      <input
        name="avatar"
        className="form__input form__input_type_avatar"
        type="url"
        placeholder="Avatar URL"
        value={values.avatar || ''}
        onChange={handleChange}
        required
      />
      <h4 className="form__label">Password</h4>
      <input
        name="password"
        className="form__input form__input-alt form__input_type_password"
        type='text'
        placeholder='Password'
        value={values.password || ''}
        onChange={handleChange}
        required
      />
    </ModalWithForm>
  )
}

export default RegisterModal;