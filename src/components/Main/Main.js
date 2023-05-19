import './Main.css';
import { useState } from 'react';
import Header from '../Header/Header';
import { usePopups } from '../../contexts/PopupContext';
import UserMenu from '../UserMenu/UserMenu';
import useWindowSize from '../../hooks/UseWindowSize';
import PageTitle from '../PageTitle/PageTitle';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import AboutMe from '../AboutMe/AboutMe';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { popupActions } from '../../reducers/popupReducer';
import { useAuth } from '../../contexts/AuthContext';
import AuthForm from '../AuthForm/AuthForm';
import NothingFound from '../NothingFound/NothingFound';


const Main = () => {
  const isMobileSized = useWindowSize().width < 650;
  const [popupState, popupDispatch] = usePopups();
  const { signIn } = useAuth();
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const showSignUp = () => {
    popupDispatch(popupActions.closeAll);
    popupDispatch(popupActions.openSignUpPopup);
  };
  const showSignIn = () => {
    popupDispatch(popupActions.closeAll);
    popupDispatch(popupActions.openSignInPopup);
  };
  const handleSignup = () => {
    popupDispatch(popupActions.openSuccessPopup);
    popupDispatch(popupActions.closeSignUpPopup);
  };
  const handleSignin = () => {
    signIn('Elise');
    popupDispatch(popupActions.closeSignInPopup);
  };

  const handleSearchSubmit = (results) => {
    setIsSearching(true);
    setNothingFound(false);
    setSearchResults([]);
    new Promise((resolve) => {
      setTimeout(resolve, 1500);
    }).then(() => {
      if (!results || results.length === 0) {
        setNothingFound(true);
      } else {
        setSearchResults(results);
      }
      setIsSearching(false);
    });
  };


  return (
    <>
      <PopupWithForm
        isOpen={popupState.isSigninPopupOpen}
        onSubmit={handleSignin}
        isValid={true}
        name="signin"
        title="Sign in"
        buttonText="Sign in"
        redirectText="Sign up"
        handleRedirect={showSignUp}
      >
        <AuthForm />

      </PopupWithForm>
      <PopupWithForm
        isOpen={popupState.isSignupPopupOpen}
        onSubmit={handleSignup}
        isValid={true}
        name="signup"
        title="Sign up"
        buttonText="Sign up"
        redirectText="Sign in"
        handleRedirect={showSignIn}
      >
        <AuthForm />
      </PopupWithForm>
      <PopupWithForm
        hideForm={true}
        name="success"
        isOpen={popupState.isSuccessPopupOpen}
        title="Registration successfully completed!"
        redirectText="Sign in"
        handleRedirect={showSignIn}
      ></PopupWithForm>
      <div className="main__wrapper">
        <Header />
        {popupState.isUserMenuOpen && isMobileSized && <UserMenu />}
        <PageTitle />
        <SearchForm handleSearch={handleSearchSubmit} />
      </div>
      {nothingFound && <NothingFound />}
      <SearchResults isSearching={isSearching} searchResults={searchResults} />
      <AboutMe />
    </>
  );
};

export default Main;