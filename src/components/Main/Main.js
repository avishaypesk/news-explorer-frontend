import React from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';

import './Main.css';

const Main = ({ cards, isLoggedIn, handleSave, visibleCount, incrementVisibleCount }) => {
  return (
    <main className='main'>
      <NewsCardsList
        isLoggedIn={isLoggedIn}
        cards={cards}
        savedArticles={false}
        handleSave={handleSave}
        visibleCount={visibleCount}
        incrementVisibleCount={incrementVisibleCount}
      ></NewsCardsList>
    </main>
  );
};

export default Main;
