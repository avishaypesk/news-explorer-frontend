import React, { useState } from 'react';
import './NewsCard.css';

const Newscard = ({ card, isLoggedIn, SavedArticles, handleSave, handleDelete }) => {
    const [isSaved, setIsSaved] = useState(SavedArticles);

    const saveArticle = () => {
        if (isLoggedIn && !isSaved) {
            handleSave(card).then(() => {
                setIsSaved(true);
            });
        }
    };

    const deleteArticle = () => {
        if (isLoggedIn && isSaved) {
            handleDelete(card._id).then(() => {
                setIsSaved(false);
            });
        }
    };

    const date = new Date(card.publishedAt);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    let ButtonIcon, ButtonLabel;

    if (!isLoggedIn) {
        ButtonIcon = <i className="news-card__bookmark-icon" />;
        ButtonLabel = 'Sign in to save articles';
    } else if (isSaved) {
        ButtonIcon = <i onClick={deleteArticle} className="news-card__remove-icon" />;
        ButtonLabel = 'Remove from saved';
    } else {
        ButtonIcon = <i onClick={saveArticle} className="news-card__bookmark-icon" />;
        ButtonLabel = 'Save';
    }

    return (
        <div className="news-card">
            <img className="news-card__image" src={card.urlToImage} alt={card.title} />
            <div className="news-card__container">
                <div className="news-card__label">{ButtonLabel}</div>
                <div className="news-card__button">{ButtonIcon}</div>
            </div>
            {isSaved && <p className="news-card__keyword">{card.keyword}</p>}
            <div className="news-card__article">
                <p className="news-card__date">{formattedDate}</p>
                <h3 className="news-card__title">{card.title}</h3>
                <p className="news-card__text">{card.description}</p>
                <p className="news-card__source">{card.source.name}</p>
            </div>
        </div>
    );
};

export default Newscard;
