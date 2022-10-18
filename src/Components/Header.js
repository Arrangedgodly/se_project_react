import '../blocks/header.css';
import React from 'react';
import headerLogo from '../images/logo.svg';
import avatarDefault from '../images/avatar.png';
import ToggleSwitch from './ToggleSwitch';

function Header({weatherData, openModal}) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const username = 'Grady Wasil';
  const [isChecked, setIsChecked] = React.useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="wtwr logo" />
      <h1 className="header__date">{currentDate}, {weatherData.name}</h1>
      <ToggleSwitch 
        isChecked={isChecked}
        handleClick={handleClick}
      />
      <button onClick={openModal} className="header__button">+ Add Clothes</button>
      <p className="header__user">{username}</p>
      <img className="header__avatar" src={avatarDefault} alt="user avatar" />
    </header>
  )
}

export default Header;