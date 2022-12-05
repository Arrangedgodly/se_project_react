import '../blocks/clothes.css';
import ItemCard from './ItemCard';

function ClothesSection({ 
  isLoggedIn, 
  openModal, 
  clothingItems, 
  handleCardClick, 
  currentUser, 
  likeItem, 
  dislikeItem }) {
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
                    image={item.imageUrl}
                    weather={item.weather}
                    isLoggedIn={isLoggedIn}
                    handleCardClick={() => {
                    handleCardClick(item)
                    }}
                    item={item}
                    currentUser={currentUser}
                    likeItem={likeItem}
                    dislikeItem={dislikeItem}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ClothesSection;