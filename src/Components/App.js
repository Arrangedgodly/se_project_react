import React from 'react';
import '../blocks/app.css';
import Main from "./Main";
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import AddItemModal from './AddItemModal';
import ItemModal from './ItemModal';
import {getWeatherInfo} from '../utils/weatherApi';
import { getClothingItems, removeClothingItem, addClothingItem } from '../utils/api';
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
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  }

  const closeAllModals = () => {
    setActiveModal(null);
  }

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
    ? setCurrentTemperatureUnit('C')
    : setCurrentTemperatureUnit('F');
  }

  const fetchClothingItems = () => {
    getClothingItems()
      .then(data => {
        setClothingItems(data)
      })
      .catch((err) => console.log(err));
  }

  const handleAddItemSubmit = (name, link, weather) => {
    setIsLoading(true);
    const id = clothingItems.length + 1;
    addClothingItem(name, link, weather, id)
      .then(res => {
        setClothingItems([res, ...clothingItems]);
        closeAllModals();
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const handleCardDelete = (card) => {
    setIsLoading(true);
    removeClothingItem(card)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
        closeAllModals();
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    getWeatherInfo(apiKey, parsedLocation)
      .then(data => {
        setWeatherData(filterAPIData(data))
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    fetchClothingItems()
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
            setActiveModal('addition');
          }}
        />
        <Switch>
          <Route exact path='/se_project_react/'>
            <Main
            weatherData={weatherData}
            cards={clothingItems}
            handleCardClick={handleCardClick}
            />
          </Route>
          <Route path='/se_project_react/profile'>
            <Profile 
             clothingItems={clothingItems}
             openModal={() => {
              setActiveModal('addition');
             }}
             isOpen={activeModal === 'addition'}
             onClose={closeAllModals}
             handleCardClick={handleCardClick}
             handleAddItemSubmit={handleAddItemSubmit}
             isLoading={isLoading}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === 'addition' && (
          <AddItemModal
            isOpen={activeModal === 'addition'}
            onAddItem={handleAddItemSubmit}
            onCloseModal={closeAllModals}
            isLoading={isLoading}
          />
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
          handleConfirm={() => handleCardDelete(selectedCard)}
          handleCancel={() => {
            setActiveModal('preview')
          }}
          isLoading={isLoading}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;