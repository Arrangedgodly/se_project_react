class Api {
  constructor({baseUrl, parsedLocation}) {
    this.baseUrl = baseUrl;
    this.parsedLocation = parsedLocation;
  }

  getWeatherInfo() {
    return fetch(`${this.baseUrl}&q=${this.parsedLocation}&days=1`)
      .then(res => res.json())
  }
}

export default Api;