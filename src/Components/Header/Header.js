import './Header.css';
import headerLogo from '../../logo.svg';
import headerAvatar from '../../avatar.png';

function Header() {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="wtwr logo" />
      <h1 className="header__date">{currentDate}, Location</h1>
      <button className="header__button">+ Add Clothes</button>
      <h1 className="header__user">Grady Wasil</h1>
      <img className="header__avatar" src={headerAvatar} alt="user avatar" />
    </div>
  )
}

export default Header;