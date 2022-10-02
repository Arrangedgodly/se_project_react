import '../blocks/header.css';
import headerLogo from '../images/logo.svg';
import avatarDefault from '../images/avatar.png';

function Header({weatherData, openModal}) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const username = 'Grady Wasil';

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="wtwr logo" />
      <h1 className="header__date">{currentDate}, {weatherData.name}</h1>
      <button onClick={openModal} className="header__button">+ Add Clothes</button>
      <p className="header__user">{username}</p>
      <img className="header__avatar" src={avatarDefault} alt="user avatar" />
    </header>
  )
}

export default Header;