import './Main.css';
import './cards.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';

function Main({weatherData, cards}) {
  const initialCards = cards;

  return (
    <div className="main">
      <WeatherCard
        weatherData={weatherData}
      />
      <h3 className='cards__header'>
        Today is: {weatherData.temp}°F / You may want to wear:
      </h3>
      <ul className='cards'>
        {
          initialCards.map((item) => (
            <ItemCard
              key={item._id}
              name={item.name}
              image={item.link}
              weather={item.weather}
            />
          )
          )
        }
      </ul>
    </div>
  );
}

export default Main;