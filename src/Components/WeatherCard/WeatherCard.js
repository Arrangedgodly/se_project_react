import './WeatherCard.css';
import cloud from '../../images/Cloud.svg';
import sun from '../../images/sun.svg';
import Api from '../Api/Api';

const apiKey = "06ac1279ecb14d84aa401432222609";

const api = new Api({
  baseUrl: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`
});

function WeatherCard() {
  return (
    <div className='weather-card'>
      <p className='weather-card__temp'>73°F</p>
      <img src={cloud} className='weather-card__cloud' />
      <img src={sun} className='weather-card__sun' />
    </div>
  );
}

export default WeatherCard;