import '../blocks/profile.css';
import React from 'react';
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import AddItemModal from './AddItemModal';
import EditProfileModal from './EditProfileModal';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

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
  handleLogout, 
  likeItem, 
  dislikeItem }) {

    return (
        <div className="profile">
            <SideBar 
            handleLogout={handleLogout}
            openEditModal={openEditModal}
            />
            <ClothesSection 
                openModal={openModal}
                isLoggedIn={isLoggedIn}
                clothingItems={clothingItems}
                handleCardClick={handleCardClick}
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