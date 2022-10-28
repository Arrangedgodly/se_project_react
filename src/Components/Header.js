import '../blocks/header.css';
import React from 'react';
import headerLogo from '../images/logo.svg';
import avatarDefault from '../images/avatar.png';
import ToggleSwitch from './ToggleSwitch';
import { Link } from 'react-router-dom';

function Header({weatherData, openModal}) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const username = 'Grady Wasil';
  const [isChecked, setIsChecked] = React.useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className="header">
      <Link to='/se_project_react/'>
        <img className="header__logo" src={headerLogo} alt="wtwr logo" />
      </Link>
      <h1 className="header__date">{currentDate}, {weatherData.name}</h1>
      <ToggleSwitch 
        isChecked={isChecked}
        handleClick={handleClick}
      />
      <button onClick={openModal} className="header__button">+ Add Clothes</button>
      <Link to='/se_project_react/profile' className="header__profile">
          <p className="header__user">{username}</p>
          <img className="header__avatar" src={avatarDefault} alt="user avatar" />
      </Link>
    </header>
  )
}

export default Header;