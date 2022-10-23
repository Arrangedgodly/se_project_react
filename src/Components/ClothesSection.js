import '../blocks/clothes.css';
import ItemCard from './ItemCard';

function ClothesSection({ openModal, clothingItems, handleCardClick }) {
    return (
        <div className='clothes'>
            <div className='clothes__header'>
                <p className='clothes__title'>Your Items</p>
                <button className='clothes__button' onClick={openModal}>+Add New</button>
            </div>
            <ul className="clothes__body">
                {clothingItems.map(item => (
                    <ItemCard
                    key={item._id}
                    name={item.name}
                    image={item.link}
                    weather={item.weather}
                    handleCardClick={() => {
                    handleCardClick(item)
                    }}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ClothesSection;