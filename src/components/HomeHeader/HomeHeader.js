import React from 'react';
import Navigation from '../Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';
import './HomeHeader.css'


const HomeHeader = ({ isLoggedIn, setLoggedIn, togglePopup, toggleFormPopup, toggleRegisterPopup, onSearch }) => {
  return (
    <>
      <header className="header">
        <Navigation
          isLoggedIn={isLoggedIn}
          setLoggedIn={setLoggedIn}
          togglePopup={togglePopup}
          toggleFormPopup={toggleFormPopup}
          toggleRegisterPopup={toggleRegisterPopup}
        />
        <div className='header__container'>
          <h1 className="header__title">What's going on in the world?</h1>
          <h2 className="header__subtitle">Find the latest news on any topic and save them in your personal account.</h2>
          <SearchBar onSearch={onSearch} />
        </div>
      </header>
    </>
  );
};

export default HomeHeader;