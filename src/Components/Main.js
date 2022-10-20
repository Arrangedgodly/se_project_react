import '../blocks/main.css';
import '../blocks/cards.css';
import React from 'react';
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

function Main({weatherData, cards, handleCardClick}) {
  const initialCards = cards.filter(item => filterCards(item, weatherData));
  const { currentTemperatureUnit } = React.useContext(CurrentTemperatureUnitContext);

  return (
    <div className="main">
      <WeatherCard
        weatherData={weatherData}
      />
      <h3 className='cards__header'>
        Today is:  / You may want to wear:
      </h3>
      <ul className='cards'>
        {
          initialCards.map((item) => (
            <ItemCard
              key={item._id}
              name={item.name}
              image={item.link}
              weather={item.weather}
              handleCardClick={() => {
                handleCardClick(item)
              }}
            />
          )
          )
        }
      </ul>
    </div>
  );
}

export default Main;

/* {weatherData.temperature[currentTemperatureUnit]} */