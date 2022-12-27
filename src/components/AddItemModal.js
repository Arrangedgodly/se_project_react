import ModalWithForm from "./ModalWithForm";
import React from "react";
import { useForm } from "../utils/constants";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal, isLoading }) => {
  const {values, handleChange, setValues} = useForm({});

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(values.name, values.imageUrl, values.weather);
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
        value={values.name || ''}
        onChange={handleChange}
        required
      />
      <span className="form__error" id="name-error">
        Test Error
      </span>
      <h4 className="form__label">Image</h4>
      <input
        name="imageUrl"
        className="form__input form__input_type_image"
        type="url"
        placeholder="Image URL"
        value={values.imageUrl || ''}
        onChange={handleChange}
        required
      />
      <span className="form__error" id="image-error"></span>
      <h4 className="form__label">Select the weather type:</h4>
      <div className="form__radio">
        <label className="form__label-radio">
          <input
            name="weather"
            className="form__input-radio"
            value="hot"
            type="radio"
            onChange={handleChange}
          />
          Hot
        </label>
        <label className="form__label-radio">
          <input
            name="weather"
            className="form__input-radio"
            value="warm"
            type="radio"
            onChange={handleChange}
          />
          Warm
        </label>
        <label className="form__label-radio">
          <input
            name="weather"
            className="form__input-radio"
            value="cold"
            type="radio"
            onChange={handleChange}
          />
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
