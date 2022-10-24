import React from 'react';
import '../blocks/app.css';
import Main from "./Main";
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import ModalWithForm from './ModalWithForm';
import ItemModal from './ItemModal';
import {getWeatherInfo} from '../utils/weatherApi';
import { getClothingItems, removeClothingItem } from '../utils/api';
import { apiKey, parsedLocation, filterAPIData } from '../utils/constants';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { Route, Switch } from 'react-router-dom';
import DeleteConfirmationModal from './DeleteConfirmationModal';

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

  const handleAddItemSubmit = (name, link, weather) => {
    const id = clothingItems.length + 1;
    const item = {
      id: {id},
      name: {name},
      weather: {weather},
      imageUrl: {link}
    }
    setClothingItems([item, ...clothingItems]);
  }

  React.useEffect(() => {
    getWeatherInfo(apiKey, parsedLocation)
      .then(data => {
        setWeatherData(filterAPIData(data))
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    getClothingItems()
      .then(data => {
        setClothingItems(data)
      })
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
        <Switch>
          <Route exact path='/'>
            <Main
            weatherData={weatherData}
            cards={clothingItems}
            handleCardClick={handleCardClick}
            />
          </Route>
          <Route path='/profile'>
            <Profile 
             clothingItems={clothingItems}
             openModal={() => {
              setActiveModal('addition');
             }}
             isOpen={activeModal === 'addition'}
             onClose={closeAllModals}
             handleCardClick={handleCardClick}
             handleAddItemSubmit={handleAddItemSubmit}
            />
          </Route>
        </Switch>
        
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
          handleDeleteModal={() => {
            setActiveModal('delete')
          }}
        />
        )}
        {activeModal === 'delete' && (
          <DeleteConfirmationModal
          name='delete'
          onClose={closeAllModals}
          handleConfirm={() => {
            closeAllModals();
            removeClothingItem(selectedCard);
          }}
          handleCancel={() => {
            setActiveModal('preview')
          }}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;