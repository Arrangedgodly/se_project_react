import '../blocks/header.css';
import React from 'react';
import headerLogo from '../images/logo.svg';
import ToggleSwitch from './ToggleSwitch';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Header({weatherData, openModal, openRegisterModal, openLoginModal, isLoggedIn }) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const [isChecked, setIsChecked] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className="header">
      <Link to='/'>
        <img className="header__logo" src={headerLogo} alt="wtwr logo" />
      </Link>
      <h1 className="header__date">{currentDate}, {weatherData.name}</h1>
      <ToggleSwitch 
        isChecked={isChecked}
        handleClick={handleClick}
      />
      {isLoggedIn ? (
        <>
        <button onClick={openModal} className="header__button">+ Add Clothes</button>
        <Link to='/profile' className="header__profile">
            <p className="header__user">{currentUser.name}</p>
            <img className="header__avatar" src={currentUser.avatar} alt="user avatar" />
        </Link>
        </>
      ) : (
        <>
        <button onClick={openRegisterModal} className="header__button">Sign Up</button>
        <button onClick={openLoginModal} className="header__button">Log In</button>
        </>
      )}
      
    </header>
  )
}

export default Header;