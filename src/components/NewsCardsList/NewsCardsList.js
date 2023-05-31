import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardsList = (props) => {
    const [count, setCount] = useState(3);

    const renderNewsCards = () => {
        if (props.cards && props.cards.length > 0) {
            const slicedCards = props.cards.slice(0, count);

            return slicedCards.map((card, index) => (
                <NewsCard
                    SavedArticles={props.SavedArticles}
                    isLoggedIn={props.isLoggedIn}
                    key={card._id}
                    card={card}
                    index={index}
                />
            ));
        }

        return null;
    };

    const handleShowMore = () => {
        setCount(count + 3);
    };

    return (
        <section className='news-card-list'>
            <div className='news-card-list__wrapper'>
                {!props.SavedArticles ? <h2 className='news-card-list__title'>Search results</h2> : null}

                <ul className='news-card-list__container'>{renderNewsCards()}</ul>

                {!props.isSavedRoute ? (
                    <button className='news-card-list__show-more' onClick={handleShowMore}>
                        Show more
                    </button>
                ) : null}
            </div>
        </section>
    );
};

export default NewsCardsList;
