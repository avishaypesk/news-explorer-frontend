import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';

import HomeHeader from '../HomeHeader/HomeHeader';
import Main from '../Main/Main';

import SavedArticles from '../SavedArticles/SavedArticles';
import SavedArticlesHeader from '../SavedArticlesHeader/SavedArticlesHeader';

import Footer from '../Footer/Footer';

import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';

import Popup from '../Popup/Popup';

import getNews from '../../utils/newsApi';
import api from '../../utils/mainApi';

const App = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [popupType, setPopupType] = useState('signIn');

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [articles, setArticles] = useState([]);

  const [signupError, setSignupError] = useState('');

  const [savedArticles, setSavedArticles] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const storageArticles = JSON.parse(localStorage.getItem('articles'));
    if (storageArticles) {
      setArticles(storageArticles);
    }
  }, []);

  const incrementVisibleCount = useCallback(() => {
    setVisibleCount(prevVisibleCount => prevVisibleCount + 3);
  }, []);

  const fetchSavedArticles = useCallback(async () => {
    try {
      const articlesFromApi = await api.getSavedArticles();
      setSavedArticles(articlesFromApi);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleChangePopupType = useCallback(() => {
    setPopupType(prevPopupType => (prevPopupType === 'signIn') ? 'signUp' : 'signIn');
  }, []);

  const handleSignin = useCallback(async (e, email, password) => {
    e.preventDefault();
    try {
      const result = await api.signin({ email, password });
      localStorage.setItem('jwt', result.token);
      setLoggedIn(true);
      setPopupOpen(false);
      const user = await api.getCurrentUser();
      setCurrentUser({ name: user.name });
      fetchSavedArticles();
    } catch (err) {
      console.error('Sign in failed: ', err);
    }
  }, [fetchSavedArticles]);

  const handleSignup = useCallback(async (e, email, password, name) => {
    e.preventDefault();
    try {
      const result = await api.signup({ email, password, name });
      localStorage.setItem('jwt', result.token);
      setPopupType('Success');
    } catch (error) {
      console.error('Signup failed: ', error);
      setSignupError('Signup failed: ', error);
    }
  }, []);

  const handleSave = useCallback(async (card) => {
    try {
      const isAlreadySaved = savedArticles.some(article => article.link === card.url);
      if (isAlreadySaved) {
        console.log('Article is already saved.');
        return;
      }

      const savedArticle = await api.saveArticle(card);
      setSavedArticles((prevSavedArticles) => [...prevSavedArticles, savedArticle]);

      const cardWithId = { ...card, _id: savedArticle._id };
      setArticles((prevArticles) => prevArticles.map((article) => article.url === card.url ? cardWithId : article));
    } catch (error) {
      console.error('Failed to save article: ', error);
    }
  }, [savedArticles]);


  const handleDelete = useCallback(async (cardId) => {
    try {
      await api.deleteArticle(cardId);
      setSavedArticles((prevSavedArticles) =>
        prevSavedArticles.filter((article) => article._id !== cardId)
      );
      setArticles((prevArticles) =>
        prevArticles.map((article) => {
          if (article._id === cardId) {
            const { _id, ...rest } = article;
            return rest;
          }
          return article;
        })
      );
    } catch (error) {
      console.error('Failed to delete article: ', error);
    }
  }, []);

  const isArticleSaved = useCallback((card) => {
    return savedArticles.some(article => article.link === card.url);
  }, [savedArticles]);

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
        currentUserName={currentUser ? currentUser.name : ''}
      />
      {isLoading ? <Preloader text="Searching for news..." /> :
        searchSubmitted && (
          articles.length > 0 ?
            <Main isLoggedIn={isLoggedIn}
              cards={articles}
              handleSave={handleSave}
              handleDelete={handleDelete}
              visibleCount={visibleCount}
              incrementVisibleCount={incrementVisibleCount}
              isArticleSaved={isArticleSaved} />
            : <NothingFound />
        )}
      <Footer showAboutMe={true} />
    </>
  );

  const SavedArticlesPage = () => {
    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }

    const savedArticleCount = savedArticles.length;

    const keywordCounts = savedArticles.reduce((acc, current) => {
      const keyword = current.keyword;
      if (!acc[keyword]) {
        acc[keyword] = 0;
      }
      acc[keyword]++;
      return acc;
    }, {});

    const keywords = Object.keys(keywordCounts).sort((a, b) => keywordCounts[b] - keywordCounts[a]);

    return (
      <>
        <SavedArticlesHeader
          isLoggedIn={isLoggedIn}
          setLoggedIn={setLoggedIn}
          savedArticleCount={savedArticleCount}
          keywords={keywords}
        />
        <SavedArticles isLoggedIn={isLoggedIn}
          cards={savedArticles}
          handleDelete={handleDelete}
          visibleCount={visibleCount}
          incrementVisibleCount={incrementVisibleCount}
          isArticleSaved={isArticleSaved}
        />

        <Footer showAboutMe={false} />
      </>
    );
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
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
      </CurrentUserContext.Provider>
    </div>

  );
};

export default App;
