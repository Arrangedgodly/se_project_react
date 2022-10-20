import '../blocks/sidebar.css';
import avatarDefault from '../images/avatar.png';

function SideBar() {
    const username = 'Grady Wasil';
    
    return (
        <div className='sidebar'>
            <img src={avatarDefault} className='sidebar__image' />
            <p className='sidebar__text'>{username}</p>
        </div>
    );
}

export default SideBar;