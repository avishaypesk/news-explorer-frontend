import Header from '../Header/Header';
import './Articles.css';
import UserMenu from '../UserMenu/UserMenu';
import { usePopups } from '../../contexts/PopupContext';
import useWindowSize from '../../hooks/UseWindowSize';
import SavedArticles from '../SavedArticles/SavedArticles';
import ArticlesSection from '../ArticlesSection/ArticlesSection';
import { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';

const Articles = () => {
  const [displayCards, setDisplayCards] = useState([]);

  useEffect(() => {
    const newCards = SavedArticles.map((card, i) => <NewsCard key={i} {...card} />);
    setDisplayCards(newCards);
  }, []);

  return (
    <>
      <Header />
      <SavedArticles />
      <ArticlesSection>
        <ul className="results__article-container">{displayCards}</ul>
      </ArticlesSection>
    </>
  );
};

export default Articles;