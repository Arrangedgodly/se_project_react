const getWeatherInfo = (apiKey, parsedLocation) => {
  return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${parsedLocation}&days=1`)
          .then(res => res.json())
}


export {getWeatherInfo};