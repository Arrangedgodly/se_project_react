import Api from '../Components/Api/Api';
import {
  apiKey,
  parsedLocation
} from './constants';

const api = new Api({
  baseUrl: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`,
  parsedLocation: parsedLocation
});

let currentTemp = 0;

api.getWeatherInfo()
  .then(data => {
    currentTemp = data.current.temp_f;
  });

export {currentTemp};