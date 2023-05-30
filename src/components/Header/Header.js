import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const togglePopup = () => {
    props.togglePopup(true);
    props.toggleFormPopup(true);
    props.toggleIsRegisterPopup(false);
    setIsNavOpen(false);
  };

  const handleSignout = () => {
    props.toggleLoggedIn(!props.isLoggedIn);
    setIsNavOpen(false);
  };

  const toggleNavStatus = () => {
    if (props.isFormPopupOpen) {
      setIsNavOpen(false);
      props.togglePopup(false);
      props.toggleFormPopup(false);
    } else {
      setIsNavOpen(!isNavOpen);
    }
  };

  const navigationLink = (activeClass) => {
    if (props.isLoggedIn && props.isSavedArticles && !isNavOpen) {
      return activeClass;
    } else {
      return '';
    }
  };

  return (
    <header className={`header ${isNavOpen ? 'header_nav_active' : ''}`}>
      <div className='header__size'>
        <p className={`header__logo ${navigationLink('header__logo_dark')}`}>
          NewsExplorer
        </p>

        <button
          onClick={toggleNavStatus}
          className={`header__icon ${isNavOpen ? 'header__icon_active' : ''} ${props.isFormPopupOpen || props.isPopupOpen ? 'header__icon_active' : ''
            } ${navigationLink('header__icon-dark')}`}
        ></button>
        <div
          className={`header__mobile-nav ${isNavOpen ? 'header__mobile-nav_visible' : ''
            }`}
        >
          <Navigation
            isLoggedIn={props.isLoggedIn}
            savedArticles={props.isSavedArticles}
            isNavOpen={isNavOpen}
            navigationLink={navigationLink}
          />

          {props.isLoggedIn ? (
            <button
              onClick={handleSignout}
              className={`header__logout ${navigationLink('header__logout_dark')}`}
            >
              {`${isNavOpen ? 'Sign out' : (currentUser.name = 'Avishay')}`}
            </button>
          ) : (
            <button
              onClick={togglePopup}
              className={`header__signin ${navigationLink('header__signin_dark')}`}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;