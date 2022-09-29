import Api from '../components/Api';
import {
  apiKey,
  parsedLocation
} from './constants';

const api = new Api({
  baseUrl: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`,
  parsedLocation: parsedLocation
});

const defineTempType = (temperature) => {
  if (temperature >= 76) {
    return 'hot';
  } else if (temperature >= 66 && temperature <= 75) {
    return 'warm';
  } else if (temperature <= 65) {
    return 'cold';
  }
}

/* sunny, cloudy, rain, storm, snow, fog */

const defineWeatherType = (string) => {
  if (string === 'Sunny' || string === 'Clear') {
    return 'sunny';
  } else if (string === 'Partly cloudy' || string === 'Cloudy' || string === 'Overcast') {
    return 'cloudy';
  } else if (string === 'Mist' || string.contains('rain') || string.contains('drizzle')) {
    return 'rain';
  } else if (string.contains('snow') || string.contains('sleet') || string.contains('ice')) {
    return 'snow';
  } else if (string.contains('fog')) {
    return 'fog';
  } else if (string.contains('with thunder')) {
    return 'storm';
  }
}

const filterAPIData = (data) => {
  const newData = {
    name: data.location.name,
    temp: data.current.temp_f,
    type: defineTempType(data.current.temp_f),
    card: defineWeatherType(data.current.condition.text)
  };

  console.log(newData);

  return newData;
}

const getWeatherInfo = () => {
  return api.getWeatherInfo();
}

export function checkSunny(string) {
  if (string === 'sunny') {
    return true;
  } else {
    return false;
  }
}

export function checkCloudy(string) {
  if (string === 'cloudy') {
    return true;
  } else {
    return false;
  }
}

export function checkRain(string) {
  if (string === 'rain') {
    return true;
  } else {
    return false;
  }
}

export function checkSnow(string) {
  if (string === 'snow') {
    return true;
  } else {
    return false;
  }
}

export function checkStorm(string) {
  if (string === 'storm') {
    return true;
  } else {
    return false;
  }
}

export function checkFog(string) {
  if (string === 'fog') {
    return true;
  } else {
    return false;
  }
}


export {getWeatherInfo, filterAPIData};