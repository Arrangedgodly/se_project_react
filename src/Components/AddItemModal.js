import ModalWithForm from "./ModalWithForm";
import React from "react";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [weather, setWeather] = React.useState('');

  // use a useEffect hook to reset the input field state to empty strings when 
  // the modal is opened

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    // prevent default behavior
    // call onAddItem with appropriate arguments
  }

  return (
    <ModalWithForm>
      {/* the contents of the form will go in here */}
    </ModalWithForm>
  );
};

export default AddItemModal; 