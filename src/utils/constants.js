const apiKey = "2e909ff283a54d93b83211750221810";
const location = {
  latitude: "39.739235",
  longitude: "-104.990250"
};
const parsedLocation = `${location.latitude},${location.longitude}`;

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

export const filterAPIData = (data) => {
  const newData = {
    name: data.location.name,
    temperature: {
      F: `${Math.round(data.current.temp_f)}°F`,
      C: `${Math.round((data.current.temp_f - 32) * 5/9)}°C`
    },
    type: defineTempType(data.current.temp_f),
    card: defineWeatherType(data.current.condition.text)
  };

  console.log(newData);

  return newData;
}

export function checkTime() {
  const today = new Date();
  const time = today.getHours();
  if ((time > 0 && time < 7) || (time >= 19)) {
    return false;
  } else {
    return true;
  }
}

export {
  apiKey,
  parsedLocation
}