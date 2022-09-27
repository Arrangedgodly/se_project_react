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
  /*const weatherData = getWeatherInfo().then(data => filterAPIData(data));*/
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
          const modal = document.querySelector('.modal_type_create');
          modal.classList.remove('modal_hidden');
        }}
      />
      <Main
        weatherData={weatherData}
        cards={clothingItems}
      />
      <Footer />
      <ModalWithForm 
        title="New Garment"
        name='create'
        buttonText='Add garment'
        onClose={() => {
          const modal = document.querySelector('.modal_type_create');
          modal.classList.add('modal_hidden');
        }}
        />
      <ItemModal />
    </div>
  );
}

export default App;