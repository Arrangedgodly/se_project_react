class Api {
  constructor({baseUrl}) {
    this.baseUrl = baseUrl;
  }

  getWeatherInfo() {
    return fetch('${this.baseUrl}&q=${parsedLocation}&days=1')
  }
}

export default Api;