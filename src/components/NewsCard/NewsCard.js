import React from 'react';
import './NewsCard.css';

const Newscard = ({ card, isLoggedIn, isSavedArticlesPage, handleSave, handleDelete, isSaved }) => {

    const saveArticle = (event) => {
        event.stopPropagation();
        if (isLoggedIn && !isSaved) {
            handleSave(card)
        };
    }

    const deleteArticle = (event) => {
        event.stopPropagation();
        // if (isLoggedIn && isSaved) {
            handleDelete(card._id);
        // }
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

    let ButtonIcon, ButtonLabel, ButtonAction;

    if (!isLoggedIn) {
        ButtonIcon = <i className="news-card__bookmark-icon" />;
        ButtonLabel = 'Sign in to save articles';
        ButtonAction = saveArticle; // Default action
    } else {
        if (isSavedArticlesPage) {
            ButtonIcon = <i className="news-card__remove-icon" />;
            ButtonLabel = 'Remove from saved';
            ButtonAction = deleteArticle;
        } else if (isSaved) {
            ButtonIcon = <i className="news-card__saved-icon" />;
            ButtonLabel = 'Saved';
            ButtonAction = deleteArticle;
        } else {
            ButtonIcon = <i className="news-card__bookmark-icon" />;
            ButtonLabel = 'Save';
            ButtonAction = saveArticle;
        }
    }

    const imageUrl = card.urlToImage || card.image;

    return (
        <div className="news-card" onClick={openLink}>
            <img className="news-card__image" src={imageUrl} alt={card.title} />
            <div className="news-card__container">
                <div className="news-card__label">{ButtonLabel}</div>
                <button onClick={ButtonAction} className="news-card__button">{ButtonIcon}</button>
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
