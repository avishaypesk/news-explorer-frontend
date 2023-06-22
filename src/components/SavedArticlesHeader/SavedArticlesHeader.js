import React, { useContext } from 'react';
import './SavedArticlesHeader.css';

import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedArticlesHeader = ({ isLoggedIn, setLoggedIn, savedArticleCount, keywords }) => {
    const currentUser = useContext(CurrentUserContext) || { name: 'Avishay' };

    const savedArticlesStatement = `${currentUser.name}, you have ${savedArticleCount > 0 ? savedArticleCount : 'no'} saved article${savedArticleCount !== 1 ? 's' : ''}`;

    let keywordText = '';
    if (keywords.length > 3) {
        keywordText = `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} more`;
    } else {
        keywordText = keywords.join(', ');
    }

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
                    <span className='saved-articles-header__keywords'>{keywordText}</span>
                </p>
            </div>
        </header>
    );
};


export default SavedArticlesHeader;
