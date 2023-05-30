import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedArticlesHeader = (props) => {
    const currentUser = useContext(CurrentUserContext);
    const savedArticleCount = 3; // temporary

    return (
        <section className='saved-articles-header'>
            <div className='saved-articles-header__container'>
                <p className='saved-articles-header__label'>Saved articles</p>
                <h2 className='saved-articles-header__title'>
                    {currentUser.name}, you have {savedArticleCount} saved article
                    {savedArticleCount !== 1 ? 's' : ''}
                </h2>
                <p className='saved-articles-header__keyword-text'>
                    By keywords:{' '}
                    <span className='saved-articles-header__keywords'>Nature</span>
                </p>
            </div>
        </section>
    );
};

export default SavedArticlesHeader;