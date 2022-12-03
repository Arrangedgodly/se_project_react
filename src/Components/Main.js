import '../blocks/main.css';
import '../blocks/cards.css';
import {useContext} from 'react';
import WeatherCard from './WeatherCard';
import ItemCard from './ItemCard';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';

function filterCards(card, data) {
  if (card.weather === data.type) {
    return true;
  }
  else {
    return false;
  }
}

function Main({weatherData, cards, handleCardClick, isLoggedIn, currentUser }) {
  const initialCards = cards.filter(item => filterCards(item, weatherData));
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <div className="main">
      <WeatherCard
        weatherData={weatherData}
      />
      <h3 className='cards__header'>
        Today is: {weatherData.temperature?.[currentTemperatureUnit]} / You may want to wear:
      </h3>
      <ul className='cards'>
        {
          initialCards.map((item) => (
            <ItemCard
              key={item.id}
              name={item.name}
              image={item.imageUrl}
              weather={item.weather}
              handleCardClick={() => {
                handleCardClick(item)
              }}
              isLoggedIn={isLoggedIn}
              item={item}
              currentUser={currentUser}
            />
          )
          )
        }
      </ul>
    </div>
  );
}

export default Main;