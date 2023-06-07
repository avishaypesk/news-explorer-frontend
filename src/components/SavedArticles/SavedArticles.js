import React from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import './SavedArticles.css'

const SavedArticles = ({ cards, isLoggedIn, handleDelete }) => {
    return (
        <section className='saved-articles'>
            <NewsCardsList
                cards={cards}
                isLoggedIn={isLoggedIn}
                SavedArticles={true}
                handleDelete={handleDelete}
            />
        </section>
    );
};

export default SavedArticles;