import React from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';

const SavedArticles = (props) => {
    return (
        <section className='saved-news'>
            <NewsCardsList
                cards={props.cards}
                isLoggedIn={props.isLoggedIn}
                SavedArticles={true}
            />
        </section>
    );
};

export default SavedArticles;