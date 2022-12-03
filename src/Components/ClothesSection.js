import '../blocks/clothes.css';
import ItemCard from './ItemCard';

function ClothesSection({ openModal, clothingItems, handleCardClick, currentUser }) {
    return (
        <div className='clothes'>
            <div className='clothes__header'>
                <p className='clothes__title'>Your Items</p>
                <button className='clothes__button' onClick={openModal}>+Add New</button>
            </div>
            <ul className="clothes__body">
                {clothingItems.map(item => (
                    <ItemCard
                    key={item.id}
                    name={item.name}
                    image={item.imageUrl}
                    weather={item.weather}
                    handleCardClick={() => {
                    handleCardClick(item)
                    }}
                    item={item}
                    currentUser={currentUser}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ClothesSection;