const getWeatherInfo = (apiKey, parsedLocation) => {
  return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${parsedLocation}&days=1`)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Error ${res.status}`);
          })
}


export {getWeatherInfo};