import './WeatherCard.css';
import cloud from '../../images/Cloud.svg';
import sun from '../../images/sun.svg';
import {
  checkSunny,
  checkCloudy,
  checkRain,
  checkFog,
  checkSnow,
  checkStorm
} from '../../utils/weatherApi';

function checkTime() {
  const today = new Date();
  const time = today.getHours();
  if ((time > 0 && time < 7) || (time > 19)) {
    return false;
  } else {
    return true;
  }
}

function WeatherCard({weatherData}) {
  const time = checkTime();

  return (
    <div className={time ? 'weather-card' : 'weather-card weather-card_night'}>
      <p className='weather-card__temp'>{weatherData.temp}°F</p>
      {checkSunny(weatherData.card) && (
        <img src={sun} className='weather-card__sun' />
      )}
      {checkCloudy(weatherData.card) && (
        <>
        <img src={cloud} className='weather-card__cloud weather-card__cloudy' />
        <img src={sun} className='weather-card__sun' />
        </>
      )}
    </div>
  );
}

export default WeatherCard;