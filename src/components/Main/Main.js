import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../AboutMe/AboutMe';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';

const Main = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='main'>
      <SearchForm setIsLoading={setIsLoading} />
      {isLoading ? (
        <>
          <Preloader />
          <NothingFound />
        </>
      ) : (
        <NewsCardsList
          cards={props.cards}
          SavedArticles={false}
          isLoggedIn={props.isLoggedIn}
        ></NewsCardsList>
      )}
      <About />
    </div>
  );
};

export default Main;
