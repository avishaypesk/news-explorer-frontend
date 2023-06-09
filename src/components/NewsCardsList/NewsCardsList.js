import React, { useCallback } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardsList.css';

const NewsCardsList = ({
  cards = [],
  isSavedArticlesPage,
  isLoggedIn,
  handleSave,
  handleDelete,
  visibleCount,
  incrementVisibleCount
}) => {
  const handleIncrement = useCallback(() => {
    incrementVisibleCount();
  }, [incrementVisibleCount]);

  const visibleCards = cards.slice(0, visibleCount);
  const hasMoreCards = visibleCount < cards.length;

  return (
    <div className="news-card-list">
      <div className="news-card-list__container">
        {!isSavedArticlesPage && <h2 className="news-card-list__title">Search results</h2>}

        <ul className="news-card-list__grid">
          {visibleCards.map((card, index) => (
            <li key={card.id || index} className="news-card-list__card">
              <NewsCard
                isLoggedIn={isLoggedIn}
                isSavedArticlesPage={isSavedArticlesPage}
                card={card}
                handleSave={handleSave}
                handleDelete={handleDelete}
              />
            </li>
          ))}
        </ul>

        {hasMoreCards && (
          <button className="news-card-list__more-button" onClick={handleIncrement}>
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsCardsList;
