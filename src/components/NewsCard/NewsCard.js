import React, { useState } from 'react';
import './NewsCard.css';

const Newscard = ({ card, isLoggedIn, SavedArticles }) => {
    const [isSaved, setIsSaved] = useState(SavedArticles);

    const handleSave = () => {
        if (isLoggedIn && !SavedArticles) {
            setIsSaved(!isSaved);
        }
    };

    const showRemoveIcon = SavedArticles;

    let ButtonIcon, ButtonLabel;

    if (!isLoggedIn) {
        ButtonIcon = <i className="news-card__bookmark-icon" />;
        ButtonLabel = 'Sign in to save articles';
    } else if (showRemoveIcon) {
        ButtonIcon = <i className="news-card__remove-icon" />;
        ButtonLabel = 'Remove from saved';
    } else if (isSaved) {
        ButtonIcon = <i className="news-card__saved-icon" />;
        ButtonLabel = 'Saved';
    } else {
        ButtonIcon = <i onClick={handleSave} className="news-card__bookmark-icon" />;
        ButtonLabel = 'Save';
    }

    return (
        <div className="news-card">
            <img className="news-card__image" src={card.image} alt={card.title} />
            <div className="news-card__container" onClick={handleSave}>
                <div className="news-card__label">{ButtonLabel}</div>
                <div className="news-card__button">{ButtonIcon}</div>
            </div>
            {SavedArticles && <p className="news-card__keyword">{card.keyword}</p>}
            <div className="news-card__article">
                <p className="news-card__date">{card.date}</p>
                <h3 className="news-card__title">{card.title}</h3>
                <p className="news-card__text">{card.text}</p>
                <p className="news-card__source">{card.source}</p>
            </div>
        </div>
    );
};

export default Newscard;
