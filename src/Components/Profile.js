import '../blocks/profile.css';
import React from 'react';
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import AddItemModal from './AddItemModal';

function Profile({ clothingItems, openModal, isOpen, onClose, handleCardClick, handleAddItemSubmit, isLoading, currentUser, handleLogout }) {

    return (
        <div className="profile">
            <SideBar 
            currentUser={currentUser}
            handleLogout={handleLogout}
            />
            <ClothesSection 
                openModal={openModal}
                clothingItems={clothingItems}
                handleCardClick={handleCardClick}
                currentUser={currentUser}
            />
            {isOpen && 
                <AddItemModal 
                    isOpen={isOpen}
                    onAddItem={handleAddItemSubmit}
                    onCloseModal={onClose}
                    isLoading={isLoading}
                />
            }
        </div>
    );
}

export default Profile;