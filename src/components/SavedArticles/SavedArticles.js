import React from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import './SavedArticles.css'

const SavedArticles = ({ cards, isLoggedIn, handleDelete, isArticleSaved, visibleCount, incrementVisibleCount }) => {
    return (
        <section className='saved-articles'>
            <NewsCardsList
                cards={cards}
                isLoggedIn={isLoggedIn}
                isSavedArticlesPage={true}
                handleDelete={handleDelete}
                visibleCount={visibleCount}
                incrementVisibleCount={incrementVisibleCount}
                isArticleSaved={isArticleSaved}
            />
        </section>
    );
};

export default SavedArticles;