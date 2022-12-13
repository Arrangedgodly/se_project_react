import ModalWithForm from "./ModalWithForm";
import React from "react";
import { useForm } from "../utils/constants";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal, isLoading }) => {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weather, setWeather] = React.useState("");
  
  const {values, handleChange, setValues} = useForm({});

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleUrl = (e) => {
    setImageUrl(e.target.value);
  }

  const handleWeather = (e) => {
    setWeather(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(name, imageUrl, weather);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New Garment"
      name="create"
      buttonText={isLoading ? "Saving..." : "Add garment"}
      onClose={onCloseModal}
      handleSubmit={handleSubmit}
    >
      <h4 className="form__label">Name</h4>
      <input
        name="name"
        className="form__input form__input_type_name"
        type="text"
        placeholder="Name"
        minLength="1"
        maxLength="30"
        value={name}
        onChange={handleName}
        required
      />
      <span className="form__error" id="name-error">
        Test Error
      </span>
      <h4 className="form__label">Image</h4>
      <input
        name="image"
        className="form__input form__input_type_image"
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={handleUrl}
        required
      />
      <span className="form__error" id="image-error"></span>
      <h4 className="form__label">Select the weather type:</h4>
      <div className="form__radio">
        <label className="form__label-radio">
          <input
            name="temp"
            className="form__input-radio"
            value="hot"
            type="radio"
            onChange={handleWeather}
          />
          Hot
        </label>
        <label className="form__label-radio">
          <input
            name="temp"
            className="form__input-radio"
            value="warm"
            type="radio"
            onChange={handleWeather}
          />
          Warm
        </label>
        <label className="form__label-radio">
          <input
            name="temp"
            className="form__input-radio"
            value="cold"
            type="radio"
            onChange={handleWeather}
          />
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
