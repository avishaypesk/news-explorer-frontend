import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Hamburger from '../../images/hamburger.svg';
import activeHamburger from '../../images/hamburger-active.svg';
import darkHamburger from '../../images/hamburger-dark.svg';


export default function Navigation(props) {

    const currentUser = useContext(CurrentUserContext) || { name: 'Avishay' };

    const [darkMode, setDarkMod] = React.useState(false);

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const handleHamburgerClick = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const location = useLocation();
    React.useEffect(() => {
        setDarkMod(location.pathname === '/saved-articles' && !mobileMenuOpen);
    }, [location, mobileMenuOpen]);

    function handleSignout() {
        props.setLoggedIn(false);
    }

    function handleSigninForm() {
        props.togglePopup(true);
    }

    const logButton = props.isLoggedIn ? (
        <button
            onClick={handleSignout}
            className={`navigation__logout ${darkMode && !mobileMenuOpen ? 'navigation__logout_dark' : ''}`}
        >
            {currentUser.name}
        </button>
    ) : (
        <button
            onClick={handleSigninForm}
            className={`navigation__signin ${darkMode && !mobileMenuOpen ? 'navigation__logo__signin_dark' : ''}`}
        >
            Sign in
        </button>
    );

    const navLogo = (
        <NavLink to="/" className={`navigation__logo ${darkMode && !mobileMenuOpen ? 'navigation__logo_dark' : ''}`}>
            NewsExplorer
        </NavLink>
    );

    const homeLink = (
        <NavLink
            to="/"
            className={`navigation__link navigation__current-tab ${darkMode && !mobileMenuOpen ? 'navigation__link_dark' : ''}`}
        >
            Home
        </NavLink>
    );

    const hamburgerButton = (
        <button onClick={handleHamburgerClick} className="hamburger-button">
            <img src={mobileMenuOpen ? activeHamburger : (darkMode && !mobileMenuOpen) ? darkHamburger : Hamburger} alt="menu" />
        </button>
    );

    function savedArticlesLink() {
        if (props.isLoggedIn) {
            return (
                <NavLink
                    to="/saved-articles"
                    className={`navigation__link ${darkMode && !mobileMenuOpen ? 'navigation__link_dark navigation__current-tab_dark' : ''}`}
                >
                    Saved articles
                </NavLink>
            );
        }
        return null;
    }

    function NavigationLinks() {
        return (
            <div className="navigation-links">
                {homeLink}
                {savedArticlesLink()}
            </div>
        );
    }

    return (
        <div className="navigation">
            {navLogo}
            <div className="desktop-navigation">
                {homeLink}
                {savedArticlesLink()}
                {logButton}
            </div>
            {hamburgerButton}
            {mobileMenuOpen && (
                <div className={`mobile-navigation ${mobileMenuOpen ? 'mobile-navigation_open' : ''}`}>
                    <NavigationLinks />
                    {logButton}
                </div>
            )}
            <div className={`mobile-navigation-overlay ${mobileMenuOpen ? 'mobile-navigation-overlay_visible' : ''}`}></div>
        </div>
    )
}
