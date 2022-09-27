import Api from '../Components/Api/Api';
import {
  apiKey,
  parsedLocation
} from './constants';

const api = new Api({
  baseUrl: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`,
  parsedLocation: parsedLocation
});

const defineTempType = (temperature) => {
  if (temperature >= 86) {
    return 'hot';
  } else if (temperature >= 66 && temperature <= 85) {
    return 'warm';
  } else if (temperature <= 65) {
    return 'cold';
  }
}

const defineWeatherType = (string) => {
  
}

const filterAPIData = (data) => {
  const newData = {
    name: data.location.name,
    temp: data.current.temp_f,
    type: defineTempType(data.current.temp_f)
  };

  console.log(newData);

  return newData;
}

const getWeatherInfo = () => {
  return api.getWeatherInfo();
}


export {getWeatherInfo, filterAPIData};