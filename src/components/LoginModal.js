import ModalWithForm from "./ModalWithForm";
import React from "react";
import { useForm } from "../utils/constants";

const LoginModal = ({ isOpen, onLogin, onCloseModal, isLoading }) => {
  const {values, handleChange, setValues} = useForm({});
  
  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values.email, values.password);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      name='login'
      title='Log In'
      buttonText={isLoading ? "Logging In..." : "Log In"}
      onClose={onCloseModal}
      handleSubmit={handleSubmit}
    >
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
      <h4 className="form__label">Password</h4>
      <input
        name="password"
        className="form__input form__input_type_password"
        type='password'
        placeholder='Password'
        value={values.password || ''}
        onChange={handleChange}
        required
      />
    </ModalWithForm>
  )
}

export default LoginModal;