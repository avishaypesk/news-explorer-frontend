import React from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';

import './Main.css';

const Main = ({ cards, isLoggedIn }) => {

  return (
    <>
      <main className='main'>
        <NewsCardsList
          isLoggedIn={isLoggedIn}
          cards={cards}
          SavedArticles={false}
        ></NewsCardsList>
      </main>
    </>

  );
};

export default Main;
