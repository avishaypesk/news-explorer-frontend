import React, { useState } from 'react';

const NewsCard = (props) => {
    const [isSaved, setIsSaved] = useState(false);

    const toggleDeleteSave = () => {
        if (props.SavedArticles && props.isLoggedIn) {
            return (
                <button className='news-card__delete-button'>
                    <span className='news-card__button-label'>
                        <p>Remove from saved</p>
                    </span>
                </button>
            );
        } else if (!props.SavedArticles && props.isLoggedIn) {
            return (
                <button
                    className={`news-card__save-button ${isSaved ? 'news-card__save-button_active' : ''}`}
                    onClick={() => setIsSaved(!isSaved)}
                >
                    <span className='news-card__button-label'>
                        <p>{isSaved ? 'Saved' : 'Save'}</p>
                    </span>
                </button>
            );
        } else {
            return (
                <button className='news-card__save-button'>
                    <span className='news-card__button-label'>
                        <p>Sign in to save articles</p>
                    </span>
                </button>
            );
        }
    };

    const renderKeywords = () => {
        if (props.SavedArticles) {
            return (
                <div className='news-card__keyword'>
                    <p>{props.card.keyword[0].toUpperCase() + props.card.keyword.slice(1)}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <li className='news-card'>
            {toggleDeleteSave()}
            {renderKeywords()}
            <img className='news-card__image' src={props.card.image} alt={props.card.title} />
            <div className='news-card__info-container'>
                <p className='news-card__date'>{props.card.date}</p>
                <h3 className='news-card__title'>{props.card.title}</h3>
                <p className='news-card__text'>{props.card.text}</p>
                <cite className='news-card__source'>{props.card.source}</cite>
            </div>
        </li>
    );
};

export default NewsCard;
