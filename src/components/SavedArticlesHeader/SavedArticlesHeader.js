import React, { useContext } from 'react';
import './SavedArticlesHeader.css';

import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedArticlesHeader = ({ isLoggedIn, setLoggedIn, savedArticleCount }) => {
    const currentUser = useContext(CurrentUserContext) || { name: 'Avishay' };

    const savedArticlesStatement = `${currentUser.name}, you have ${savedArticleCount > 0 ? '' : 'no'} saved article${savedArticleCount !== 1 ? 's' : ''}`;

    return (
        <header className='saved-articles-header'>
            <Navigation
                isLoggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
            />
            <div className='saved-articles-header__container'>
                <p className='saved-articles-header__title'>Saved articles</p>
                <h2 className='saved-articles-header__name'>{savedArticlesStatement}</h2>
                <p className='saved-articles-header__by-keywords'>
                    By keywords:{' '}
                    <span className='saved-articles-header__keywords'>Nature, Yellowstone, and 2 other</span>
                </p>
            </div>
        </header>
    );
};


export default SavedArticlesHeader;
