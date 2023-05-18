import Header from '../Header/Header';
import './Articles.css';
import UserMenu from '../UserMenu/UserMenu';
import { usePopups } from '../../contexts/PopupContext';
import useWindowSize from '../../hooks/UseWindowSize';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import ArticlesSection from '../ArticleSection/ArticlesSection';
import { useEffect, useState } from 'react';
import { savedCards } from '../../constants/mockData';
import NewsCard from '../NewsCard/NewsCard';

const Articles = () => {
  const isMobileSized = useWindowSize().width < 650;
  const [popupState] = usePopups();
  const [displayCards, setDisplayCards] = useState([]);

  useEffect(() => {
    const newCards = savedCards.map((card, i) => <NewsCard key={i} {...card} />);
    setDisplayCards(newCards);
  }, []);

  return (
    <>
      <Header isDark></Header>
      {popupState.isUserMenuOpen && isMobileSized && <UserMenu isDark />}
      <SavedNewsHeader />
      <ArticlesSection>
        <ul className="results__article-container">{displayCards}</ul>
      </ArticlesSection>
    </>
  );
};

export default Articles;