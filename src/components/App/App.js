import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedArticles from '../SavedArticles/SavedArticles';
import SavedArticlesHeader from '../SavedArticlesHeader/SavedArticlesHeader';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Popup from '../Popup/Popup';
import { allCards } from '../../utils/mockData';

const App = () => {
  const [cards, setCards] = useState(allCards);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isRegisterPopup, setRegisterPopup] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);
  const [isRegisterSuccessPopupOpen, setRegisterSuccessPopupOpen] = useState(false);
  const [isRegisterSuccess, setRegisterSuccess] = useState(false);

  const handleSignout = () => {
    setLoggedIn(false);
  };

  const registrationSuccess = () => {
    setRegisterPopup(false);
    setRegisterSuccessPopupOpen(false);
    setFormPopupOpen(true);
  };

  const registrationFail = () => {
    setRegisterPopup(true);
    setRegisterSuccessPopupOpen(false);
    setFormPopupOpen(true);
  };

  const Home = () => (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        toggleLoggedIn={setLoggedIn}
        isPopupOpen={isPopupOpen}
        isFormPopupOpen={isFormPopupOpen}
        toggleIsRegisterPopup={setRegisterPopup}
        togglePopup={setPopupOpen}
        toggleFormPopup={setFormPopupOpen}
        isSavedArticles={false}
      />
      <Main isLoggedIn={isLoggedIn} cards={cards} />
      <Footer />
    </>
  );

  const SavedArticlesPage = () => (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        isSavedArticles={true}
        isPopupOpen={isPopupOpen}
        isFormPopupOpen={isFormPopupOpen}
        toggleIsRegisterPopup={setRegisterPopup}
        toggleFormPopup={setFormPopupOpen}
        togglePopup={setPopupOpen}
        toggleLoggedIn={setLoggedIn}
      />
      <SavedArticlesHeader isLoggedIn={isLoggedIn} />
      <SavedArticles isLoggedIn={isLoggedIn} cards={cards} handleSignout={handleSignout} />
      <Footer />
    </>
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saved-articles" element={<SavedArticlesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          {isFormPopupOpen && (
            <Popup togglePopup={setPopupOpen} toggleFormPopup={setFormPopupOpen} isPopupOpen={isPopupOpen}>
              <PopupWithForm
                isRegisterPopup={isRegisterPopup}
                toggleIsRegisterPopup={setRegisterPopup}
                isFormPopupOpen={isFormPopupOpen}
                toggleFormPopup={setFormPopupOpen}
                isRegisterSuccessPopupOpen={isRegisterSuccessPopupOpen}
                toggleRegisterSuccessPopup={setRegisterSuccessPopupOpen}
                togglePopup={setPopupOpen}
                toggleLoggedIn={setLoggedIn}
                isRegisterSuccess={isRegisterSuccess}
                toggleRegisterSuccess={setRegisterSuccess}
              />
            </Popup>
          )}

          {isRegisterSuccessPopupOpen && (
            <Popup isPopupOpen={isPopupOpen} togglePopup={setPopupOpen} toggleFormPopup={setFormPopupOpen}>
              {isRegisterSuccess ? (
                <>
                  <h2 className="popup__title">Registration completed successfully!</h2>
                  <button className="popup__form-text popup__form-button" onClick={registrationSuccess}>
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  <h2 className="popup__title">Oops! Something went wrong</h2>
                  <button className="popup__form-text popup__form-button" onClick={registrationFail}>
                    Try again
                  </button>
                </>
              )}
            </Popup>
          )}
        </BrowserRouter>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
