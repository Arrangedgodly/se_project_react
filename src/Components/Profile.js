import '../blocks/profile.css';
import React from 'react';
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import AddItemModal from './AddItemModal';

function Profile({ clothingItems, onClose, handleCardClick }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        onClose();
        setIsOpen(false);
    }

    return (
        <div className="profile">
            <SideBar />
            <ClothesSection 
                openModal={openModal}
                clothingItems={clothingItems}
                handleCardClick={handleCardClick}
            />
            {isOpen && 
                <AddItemModal 
                    isOpen={isOpen}
                    onClose={closeModal}
                />
            }
        </div>
    );
}

export default Profile;