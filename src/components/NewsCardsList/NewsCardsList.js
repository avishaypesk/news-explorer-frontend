import React, { useState, useCallback } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import './NewsCardsList.css';

const INITIAL_COUNT = 3;

const NewsCardsList = ({ cards = [], SavedArticles, isLoggedIn }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isLoading, setIsLoading] = useState(false);

  const incrementVisibleCount = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(visibleCount + INITIAL_COUNT);
      setIsLoading(false);
    }, 1000);
  }, [visibleCount]);

  const visibleCards = cards.slice(0, visibleCount);

  return (
    <div className="news-card-list">
      <div className="news-card-list__container">
        {!SavedArticles && <h2 className="news-card-list__title">Search results</h2>}

        <ul className="news-card-list__grid">
          {visibleCards.map((card) => (
            <li key={card.id} className="news-card-list__card">
              <NewsCard isLoggedIn={isLoggedIn} SavedArticles={SavedArticles} card={card} />
            </li>
          ))}
        </ul>

        {isLoading ? (
          <Preloader text="Searching for more news..." />
        ) : (
          <button className="news-card-list__more-button" onClick={incrementVisibleCount}>
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsCardsList;
