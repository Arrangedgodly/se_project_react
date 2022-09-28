import React from 'react';
import './App.css';
import Main from "../Main/Main";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ItemModal from '../ItemModal/ItemModal';
import {getWeatherInfo, filterAPIData} from '../../utils/weatherApi';
import { defaultClothingItems } from '../../utils/constants';

function App() {
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  }

  const closeAllModals = () => {
    setActiveModal();
  }

  React.useEffect(() => {
    getWeatherInfo()
      .then(data => {
        console.log(data);
        setWeatherData(filterAPIData(data))
      })
  }, []);

  React.useEffect(() => {
    setClothingItems(defaultClothingItems)
  }, []);

  return (
    <div className="App">
      <Header
        weatherData={weatherData}
        openModal={() => {
          setActiveModal('create');
        }}
      />
      <Main
        weatherData={weatherData}
        cards={clothingItems}
        handleCardClick={(data) => {
          handleCardClick(data);
        }}
      />
      <Footer />
      {activeModal === 'create' && (
        <ModalWithForm 
        title="New Garment"
        name='create'
        buttonText='Add garment'
        onClose={() => {
          closeAllModals();
        }}
        />
      )}
      {activeModal === 'preview' && (
        <ItemModal
        card={selectedCard}
        onClose={() => {
          closeAllModals();
        }}
      />
      )}
    </div>
  );
}

export default App;