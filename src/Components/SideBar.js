import '../blocks/sidebar.css';
import avatarDefault from '../images/avatar.png';

function SideBar({ currentUser, handleLogout }) {
    return (
        <div className='sidebar'>
          <div className='sidebar-wrapper'>
            <img src={currentUser.avatar} className='sidebar__image' />
            <p className='sidebar__text'>{currentUser.name}</p>
          </div>
          <button type='button' className='sidebar__button'>Change profile data</button>
          <button type='button' className='sidebar__button' onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default SideBar;