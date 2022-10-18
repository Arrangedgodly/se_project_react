import React from 'react';
import '../blocks/app.css';
import Main from "./Main";
import Header from './Header';
import Footer from './Footer';
import ModalWithForm from './ModalWithForm';
import ItemModal from './ItemModal';
import {getWeatherInfo} from '../utils/weatherApi';
import { defaultClothingItems, apiKey, parsedLocation, filterAPIData } from '../utils/constants';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';

function App() {
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = React.useState('F');

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  }

  const closeAllModals = () => {
    setActiveModal();
  }

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
    ? setCurrentTemperatureUnit('C')
    : setCurrentTemperatureUnit('F');
  }

  React.useEffect(() => {
    getWeatherInfo(apiKey, parsedLocation)
      .then(data => {
        setWeatherData(filterAPIData(data))
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    setClothingItems(defaultClothingItems)
  }, []);

  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape'){
        closeAllModals();
      }
    }
    window.addEventListener('keydown', handleEscKey);
    return () => {window.removeEventListener('keydown', handleEscKey)}
  }, [])

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
      <Header
        weatherData={weatherData}
        openModal={() => {
          setActiveModal('create');
        }}
      />
      <Main
        weatherData={weatherData}
        cards={clothingItems}
        handleCardClick={handleCardClick}
      />
      <Footer />
      {activeModal === 'create' && (
        <ModalWithForm
        isOpen={activeModal === 'create'}
        title="New Garment"
        name='create'
        buttonText='Add garment'
        onClose={closeAllModals}
        >
          <h4 className='form__label'>Name</h4>
          <input name='name' className='form__input form__input_type_name' type='text' placeholder='Name' minLength='1' maxLength='30' required />
          <span className='form__error' id='name-error'>Test Error</span>
          <h4 className='form__label'>Image</h4>
          <input name='image' className='form__input form__input_type_image' type='url' placeholder='Image URL' required />
          <span className='form__error' id='image-error'></span>
          <h4 className='form__label'>Select the weather type:</h4>
          <div className='form__radio'>
          <label className='form__label-radio'>
            <input name='temp' className='form__input-radio' value='Hot' type='radio' />
            Hot
          </label>
          <label className='form__label-radio'>
          <input name='temp' className='form__input-radio' value='Warm' type='radio' />Warm
          </label>
          <label className='form__label-radio'>
          <input name='temp' className='form__input-radio' value='Cold' type='radio' />Cold
          </label>
          </div>
        </ModalWithForm>
      )}
      {activeModal === 'preview' && (
        <ItemModal
        card={selectedCard}
        onClose={closeAllModals}
      />
      )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;