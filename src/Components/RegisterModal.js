import ModalWithForm from "./ModalWithForm";
import React from "react";

const RegisterModal = ({ isOpen, onRegisterUser, onCloseModal, isLoading }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegisterUser(name, avatar, email, password);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      name='register'
      title='Sign Up'
      buttonText={isLoading ? "Saving..." : "Register User"}
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

export default RegisterModal;