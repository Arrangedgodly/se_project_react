import './WeatherCard.css';
import daySunny from '../../images/day-sunny.svg';
import dayCloudy from '../../images/day-cloudy.svg';
import dayRain from '../../images/day-rain.svg';
import dayFog from '../../images/day-fog.svg';
import daySnow from '../../images/day-snow.svg';
import dayStorm from '../../images/day-storm.svg';
import nightSunny from '../../images/night-sunny.svg';
import nightCloudy from '../../images/night-cloudy.svg';
import nightRain from '../../images/night-rain.svg';
import nightFog from '../../images/night-fog.svg';
import nightSnow from '../../images/night-snow.svg';
import nightStorm from '../../images/night-storm.svg';

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
  const isSunny = checkSunny(weatherData.card);
  const isCloudy = checkCloudy(weatherData.card);
  const isRainy = checkRain(weatherData.card);
  const isFoggy = checkFog(weatherData.card);
  const isSnowy = checkSnow(weatherData.card);
  const isStormy = checkStorm(weatherData.card);

  return (
    <div className={time ? 'weather-card' : 'weather-card weather-card_night'}>
      <p className='weather-card__temp'>{weatherData.temp}°F</p>
      {isSunny && (
        <img src={time ? daySunny : nightSunny} className='weather-card__image' />
      )}
      {isCloudy && (
        <img src={time ? dayCloudy : nightCloudy} className='weather-card__image' />
      )}
      {isRainy && (
        <img src={time ? dayRain : nightRain} className='weather-card__image' />
      )}
      {isFoggy && (
        <img src={time ? dayFog : nightFog} className='weather-card__image' />
      )}
      {isSnowy && (
        <img src={time ? daySnow : nightSnow} className='weather-card__image' />
      )}
      {isStormy && (
        <img src={time ? dayStorm : nightStorm} className='weather-card__image' />
      )}
    </div>
  );
}

export default WeatherCard;