import './WeatherCard.css';
import cloud from '../../images/Cloud.svg';
import sun from '../../images/sun.svg';

function WeatherCard({weatherData}) {
  return (
    <div className='weather-card'>
      <p className='weather-card__temp'>{weatherData.temp}°F</p>
      <img src={cloud} className='weather-card__cloud' />
      <img src={sun} className='weather-card__sun' />
    </div>
  );
}

export default WeatherCard;