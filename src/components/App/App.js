import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import HomeHeader from '../HomeHeader/HomeHeader';
import Main from '../Main/Main';

import SavedArticles from '../SavedArticles/SavedArticles';
import SavedArticlesHeader from '../SavedArticlesHeader/SavedArticlesHeader';

import Footer from '../Footer/Footer';

import Preloader from '../Preloader/Preloader';

import Popup from '../Popup/Popup';

import getNews from '../../utils/newsApi';
import api from '../../utils/mainApi';

const App = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [popupType, setPopupType] = useState('signIn');

  const [isLoggedIn, setLoggedIn] = useState(true);

  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [articles, setArticles] = useState([]);

  const [signupError, setSignupError] = useState('');

  // const [savedArticleCount, setSavedArticleCount] = useState(); until api saves articles

  useEffect(() => {
    const storageArticles = JSON.parse(localStorage.getItem('articles'));
    if (storageArticles) {
      setArticles(storageArticles);
    }
  }, []);

  const handleChangePopupType = useCallback(() => {
    setPopupType(prevPopupType => (prevPopupType === 'signIn') ? 'signUp' : 'signIn');
  }, []);

  const handleSignin = useCallback((e) => {
    e.preventDefault();
    setLoggedIn(true);
    setPopupOpen(false);
  }, []);

  const handleSignup = useCallback(async (e, email, password, name) => {
    e.preventDefault();

    try {
      const response = await api.signup({ email, password, name });
      // You can handle the response here, if you want.
      setPopupType('Success');
    } catch (error) {
      console.error('Signup failed: ', error);
      // Display error message here
      setSignupError('Signup failed: ', error);
    }
  }, []);

  const handleSave = useCallback(async (card) => {
    // Call to API to save the card
  }, []);

  const handleDelete = useCallback(async (cardId) => {
    // Call to API to delete the card
  }, []);

  const handlePopup = () => {
    setPopupOpen(isPopupOpen => !isPopupOpen);
  };

  const handleSearch = useCallback(async (searchTerm) => {
    setIsLoading(true);

    try {
      const articles = await getNews(searchTerm);
      localStorage.setItem('articles', JSON.stringify(articles));
      setArticles(articles);
      setSearchSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);


  const Home = () => (
    <>
      <HomeHeader
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
        togglePopup={handlePopup}
        onSearch={handleSearch}
      />
      {isLoading ? <Preloader text="Searching for news..." /> : searchSubmitted &&
        <Main isLoggedIn={isLoggedIn} cards={articles} handleSave={handleSave} />}
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
        <SavedArticles isLoggedIn={isLoggedIn} cards={articles} handleDelete={handleDelete} />
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
        errorMessage={signupError}
      />

    </div>
  );
};

export default App;
