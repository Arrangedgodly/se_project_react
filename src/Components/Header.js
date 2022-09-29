import '../blocks/header.css';
import headerLogo from '../images/logo.svg';
import avatarDefault from '../images/avatar.png';

function Header({weatherData, openModal}) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const username = 'Grady Wasil';

  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="wtwr logo" />
      <h1 className="header__date">{currentDate}, {weatherData.name}</h1>
      <button onClick={openModal} className="header__button">+ Add Clothes</button>
      <h1 className="header__user">{username}</h1>
      <img className="header__avatar" src={avatarDefault} alt="user avatar" />
    </div>
  )
}

export default Header;