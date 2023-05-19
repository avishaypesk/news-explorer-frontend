import './SavedArticles.css';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const SavedNewsHeader = () => {
    const { currentUser } = useAuth();
    const [savedArticles, setSavedArticles] = useState([]);
    const [keywords, setKeywords] = useState('');

    return (
        <section className="saved-articles-info">
            <h2 className="saved-articles-info__header">Saved articles</h2>
            <span className="saved-articles-info__article-count">
                {currentUser.name || 'Elise'} you have {savedArticles.length} saved articles
            </span>
            <span className="saved-articles-info__keywords">By keywords: </span>
            <span className="saved-articles-info__keywords saved-articles-info__keywords_bold">{keywords}</span>
        </section>
    );
};

export default SavedNewsHeader;