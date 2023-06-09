import React, { useState } from 'react';
import './NewsCard.css';

const Newscard = ({ card, isLoggedIn, isSavedArticlesPage, handleSave, handleDelete }) => {

    const [isSaved, setIsSaved] = useState(isSavedArticlesPage);

    const saveArticle = (event) => {
        event.stopPropagation();
        if (isLoggedIn && !isSaved) {
            handleSave(card).then(() => {
                setIsSaved(true);
            });
        }
    };

    const deleteArticle = (event) => {
        event.stopPropagation();
        if (isLoggedIn && isSaved) {
            handleDelete(card._id).then(() => {
                setIsSaved(false);
            });
        }
    };

    const openLink = () => {
        window.open(card.link, '_blank');
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
        if (isSavedArticlesPage) {
            ButtonIcon = <i className="news-card__remove-icon" />;
            ButtonLabel = 'Remove from saved';
        } else {
            ButtonIcon = <i className="news-card__saved-icon" />;
            ButtonLabel = 'Saved';
        }
    } else {
        ButtonIcon = <i className="news-card__bookmark-icon" />;
        ButtonLabel = 'Save';
    }

    const imageUrl = card.urlToImage || card.image;

    return (
        <div className="news-card" onClick={openLink}>
            <img className="news-card__image" src={imageUrl} alt={card.title} />
            <div className="news-card__container">
                <div className="news-card__label">{ButtonLabel}</div>
                <button onClick={isSaved ? deleteArticle : saveArticle} className="news-card__button">{ButtonIcon}</button>
            </div>
            {isSavedArticlesPage && <p className="news-card__keyword">{card.keyword}</p>}
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
