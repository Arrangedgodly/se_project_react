import '../blocks/sidebar.css';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function SideBar({ handleLogout, openEditModal }) {
    const currentUser = React.useContext(CurrentUserContext);
    
    return (
        <div className='sidebar'>
          <div className='sidebar-wrapper'>
            <img src={currentUser.avatar} className='sidebar__image' />
            <p className='sidebar__text'>{currentUser.name}</p>
          </div>
          <button type='button' className='sidebar__button' onClick={openEditModal}>Change profile data</button>
          <button type='button' className='sidebar__button' onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default SideBar;