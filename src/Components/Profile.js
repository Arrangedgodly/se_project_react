import '../blocks/profile.css';
import React from 'react';
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import AddItemModal from './AddItemModal';

function Profile({ clothingItems, openModal, isOpen, onClose, handleCardClick, handleAddItemSubmit }) {

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
                    onAddItem={handleAddItemSubmit}
                    onCloseModal={onClose}
                />
            }
        </div>
    );
}

export default Profile;