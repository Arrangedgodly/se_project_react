import '../blocks/weatherCard.css';
import React from 'react';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import daySunny from '../images/day-sunny.svg';
import dayCloudy from '../images/day-cloudy.svg';
import dayRain from '../images/day-rain.svg';
import dayFog from '../images/day-fog.svg';
import daySnow from '../images/day-snow.svg';
import dayStorm from '../images/day-storm.svg';
import nightSunny from '../images/night-sunny.svg';
import nightCloudy from '../images/night-cloudy.svg';
import nightRain from '../images/night-rain.svg';
import nightFog from '../images/night-fog.svg';
import nightSnow from '../images/night-snow.svg';
import nightStorm from '../images/night-storm.svg';

import {
  checkSunny,
  checkCloudy,
  checkRain,
  checkFog,
  checkSnow,
  checkStorm,
  checkTime
} from '../utils/constants';

function WeatherCard({weatherData}) {
  const { currentTemperatureUnit } = React.useContext(CurrentTemperatureUnitContext);
  const time = checkTime();
  const isSunny = checkSunny(weatherData.card);
  const isCloudy = checkCloudy(weatherData.card);
  const isRainy = checkRain(weatherData.card);
  const isFoggy = checkFog(weatherData.card);
  const isSnowy = checkSnow(weatherData.card);
  const isStormy = checkStorm(weatherData.card);

  const wrapperStyles = time ? 'weather-card' : 'weather-card weather-card_night';
  const image = isSunny ? (time ? daySunny : nightSunny)
                  : isCloudy ? (time ? dayCloudy : nightCloudy)
                  : isRainy ? (time ? dayRain : nightRain)
                  : isFoggy ? (time ? dayFog : nightFog)
                  : isSnowy ? (time ? daySnow : nightSnow)
                  : isStormy ? (time ? dayStorm : nightStorm)
                  : 'error';

  return (
    <div className={wrapperStyles}>
      <p className='weather-card__temp'></p>
      <img src={image} className='weather-card__image' alt={`Graphic of ${weatherData.card} weather`} />
    </div>
  );
}

export default WeatherCard;

/* {weatherData.temperature[currentTemperatureUnit]} */