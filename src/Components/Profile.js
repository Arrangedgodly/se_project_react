import '../blocks/profile.css';
import React from 'react';
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import AddItemModal from './AddItemModal';
import EditProfileModal from './EditProfileModal';

function Profile({ 
  isLoggedIn, 
  clothingItems, 
  openModal,
  openEditModal, 
  isOpen,
  isEditOpen,
  onClose, 
  handleCardClick, 
  handleAddItemSubmit,
  handleEditUser, 
  isLoading, 
  currentUser, 
  handleLogout, 
  likeItem, 
  dislikeItem }) {

    return (
        <div className="profile">
            <SideBar 
            currentUser={currentUser}
            handleLogout={handleLogout}
            openEditModal={openEditModal}
            />
            <ClothesSection 
                openModal={openModal}
                isLoggedIn={isLoggedIn}
                clothingItems={clothingItems}
                handleCardClick={handleCardClick}
                currentUser={currentUser}
                likeItem={likeItem}
                dislikeItem={dislikeItem}
            />
            {isOpen && 
                <AddItemModal 
                    isOpen={isOpen}
                    onAddItem={handleAddItemSubmit}
                    onCloseModal={onClose}
                    isLoading={isLoading}
                />
            }
            {isEditOpen && 
              <EditProfileModal 
                isOpen={isEditOpen}
                handleEditUser={handleEditUser}
                onCloseModal={onClose}
                isLoading={isLoading}
              />
            }
        </div>
    );
}

export default Profile;