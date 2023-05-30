import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    const savedArticlesLink = () => {
        if (props.isLoggedIn) {
            return (
                <NavLink
                    to="/saved-articles"
                    exact = {true}
                    activeClassName="navigation__link_active_dark"
                    className={`navigation__link ${props.navigationLink('navigation__link_dark')}`}
                >
                    Saved articles
                </NavLink>
            );
        }
        return null;
    };

    const homeLink = (
        <NavLink
            to="/"
            exact={true}
            activeClassName="navigation__link_active"
            className={`navigation__link ${props.navigationLink('navigation__link_dark')}`}
        >
            Home
        </NavLink>
    );

    return (
        <div className={`navigation ${props.isNavOpen ? 'navigation_active' : ''}`}>
            {homeLink}
            {savedArticlesLink()}
        </div>
    );
};

export default Navigation;