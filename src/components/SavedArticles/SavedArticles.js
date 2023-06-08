import React from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import './SavedArticles.css'

const SavedArticles = ({ cards, isLoggedIn, handleDelete, visibleCount, incrementVisibleCount }) => {
    return (
        <section className='saved-articles'>
            <NewsCardsList
                cards={cards}
                isLoggedIn={isLoggedIn}
                savedArticles={true}
                handleDelete={handleDelete}
                visibleCount={visibleCount}
                incrementVisibleCount={incrementVisibleCount}
            />
        </section>
    );
};

export default SavedArticles;