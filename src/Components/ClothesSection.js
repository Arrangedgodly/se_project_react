import '../blocks/clothes.css';

function ClothesSection({ openModal }) {
    return (
        <div className='clothes'>
            <div className='clothes__header'>
                <p className='clothes__title'>Your Items</p>
                <button className='clothes__button' onClick={openModal}>+Add New</button>
            </div>
            <div className="clothes__body">
                
            </div>
        </div>
    );
}

export default ClothesSection;