import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import {defaultClothingItems} from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';

/*ItemCard list */

function Main() {
  const itemCards = defaultClothingItems.map((item) => {
    <ItemCard props={item} />
  });

  return (
    <div className="main">
      <WeatherCard />
      <ul>
        {
          defaultClothingItems.map((item) => (
            <ItemCard
              key={item._id}
              name={item.name}
              image={item.link}
            />
          )
          )
        }
      </ul>
    </div>
  );
}

export default Main;