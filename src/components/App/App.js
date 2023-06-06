import React, { useState, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import HomeHeader from '../HomeHeader/HomeHeader';
import Main from '../Main/Main';

import SavedArticles from '../SavedArticles/SavedArticles';
import SavedArticlesHeader from '../SavedArticlesHeader/SavedArticlesHeader';

import Footer from '../Footer/Footer';

import Preloader from '../Preloader/Preloader';

import Popup from '../Popup/Popup';

import { Cards } from '../../utils/mockData';

const App = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [popupType, setPopupType] = useState('signIn');

  const [isLoggedIn, setLoggedIn] = useState(true);

  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // const [savedArticleCount, setSavedArticleCount] = useState(); until api saves articles

  const handleChangePopupType = useCallback(() => {
    setPopupType(prevPopupType => (prevPopupType === 'signIn') ? 'signUp' : 'signIn');
  }, []);

  const handleSignin = useCallback((e) => {
    e.preventDefault();
    setLoggedIn(true);
    setPopupOpen(false);
  }, []);

  const handleSignup = useCallback((e) => {
    e.preventDefault();
    setPopupType('Success');
  }, []);

  const handleSignout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  const handlePopup = () => {
    setPopupOpen(isPopupOpen => !isPopupOpen);
  };

  const handleSearch = useCallback(() => {

    setIsLoading(true);

    setTimeout(() => {
      setSearchSubmitted(true);
      setIsLoading(false);
    }, 1000);
  }, []);

  const Home = () => (
    <>
      <HomeHeader
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
        togglePopup={handlePopup}
        onSearch={handleSearch}
      />
      {isLoading ? <Preloader text="Searching for news..." /> : searchSubmitted && <Main isLoggedIn={isLoggedIn} cards={Cards} />}
      <Footer showAboutMe={true} />
    </>
  );

  const SavedArticlesPage = () => {
    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }

    return (
      <>
        <SavedArticlesHeader isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} /*savedArticleCount={savedArticleCount}*/ />
        <SavedArticles isLoggedIn={isLoggedIn} cards={Cards} handleSignout={handleSignout} />
        <Footer showAboutMe={false} />
      </>
    );
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-articles" element={<SavedArticlesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Popup
        changePopupType={handleChangePopupType}
        handlePopup={handlePopup}
        handleSignin={handleSignin}
        handleSignup={handleSignup}
        isOpen={isPopupOpen}
        popupType={popupType}
      />

    </div>
  );
};

export default App;
