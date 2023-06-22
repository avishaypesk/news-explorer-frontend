import React from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';

import './Main.css';

const Main = ({ cards, isLoggedIn, handleSave, handleDelete, isArticleSaved, visibleCount, incrementVisibleCount }) => {



  return (
    <main className='main'>
      <NewsCardsList
        isLoggedIn={isLoggedIn}
        cards={cards}
        isSavedArticlesPage={false}
        handleSave={handleSave}
        handleDelete={handleDelete}
        visibleCount={visibleCount}
        incrementVisibleCount={incrementVisibleCount}
        isArticleSaved={isArticleSaved}
      ></NewsCardsList>
    </main>
  );
};

export default Main;
