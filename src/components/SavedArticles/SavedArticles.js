import React from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import './SavedArticles.css'

const SavedArticles = ({ cards, isLoggedIn }) => {
    return (
        <section className='saved-articles'>
            <NewsCardsList
                cards={cards}
                isLoggedIn={isLoggedIn}
                SavedArticles={true}
            />
        </section>
    );
};

export default SavedArticles;