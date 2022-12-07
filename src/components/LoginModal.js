import ModalWithForm from "./ModalWithForm";
import React from "react";

const LoginModal = ({ isOpen, onLogin, onCloseModal, isLoading }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
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
        value={email}
        onChange={handleEmail}
        required
      />
      <h4 className="form__label">Password</h4>
      <input
        name="password"
        className="form__input form__input_type_password"
        type='text'
        placeholder='Password'
        value={password}
        onChange={handlePassword}
        required
      />
    </ModalWithForm>
  )
}

export default LoginModal;