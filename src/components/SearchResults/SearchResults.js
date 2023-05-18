import './SearchResults.css';
import NewsCard from '../NewsCard/NewsCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import ArticlesSection from '../ArticlesSection/ArticlesSection';


const exampleCards = [
    {
        alt: 'card',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/800px-ChessSet.jpg',
        date: 'May 2, 2023',
        header: "Chess",
        text: `Chess is a board game for two players, called White and Black, each controlling an army of chess pieces in their color, with the objective to checkmate the opponent's king.`,
        source: `wikipedia`,
        link: '#',
    },
    {
        alt: 'card',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/800px-ChessSet.jpg',
        date: 'May 2, 2023',
        header: "Chess",
        text: `Chess is a board game for two players, called White and Black, each controlling an army of chess pieces in their color, with the objective to checkmate the opponent's king.`,
        source: `wikipedia`,
        link: '#',
    },
    {
        alt: 'card',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/800px-ChessSet.jpg',
        date: 'May 2, 2023',
        header: "Chess",
        text: `Chess is a board game for two players, called White and Black, each controlling an army of chess pieces in their color, with the objective to checkmate the opponent's king.`,
        source: `wikipedia`,
        link: '#',
    },
    {
        alt: 'card',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/800px-ChessSet.jpg',
        date: 'May 2, 2023',
        header: "Chess",
        text: `Chess is a board game for two players, called White and Black, each controlling an army of chess pieces in their color, with the objective to checkmate the opponent's king.`,
        source: `wikipedia`,
        link: '#',
    },
    {
        alt: 'card',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/800px-ChessSet.jpg',
        date: 'May 2, 2023',
        header: "Chess",
        text: `Chess is a board game for two players, called White and Black, each controlling an army of chess pieces in their color, with the objective to checkmate the opponent's king.`,
        source: `wikipedia`,
        link: '#',
    },
];

const SearchResults = () => {
    const [displayCards, setDisplayCards] = useState([]);
    const [displaySets, setDisplaySets] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getDisplayCards = (cardArray, count = 1, size = 3) => {
        const lastIndex = count * size - 1;
        const cardsToDisplay = cardArray.slice(0, lastIndex + 1);
        return cardsToDisplay.map((card, i) => <NewsCard key={i} {...card}></NewsCard>);
    };

    const handleGetNextCards = () => {
        new Promise((reslove) => {
            setIsLoading(true);
            setTimeout(reslove, 1500);
        }).then(() => {
            setIsLoading(false);
            const cards = getDisplayCards(exampleCards, displaySets + 1);
            setDisplayCards(cards);
            setDisplaySets(displaySets + 1);
        });
    };

    useEffect(() => {
        const newCards = getDisplayCards(exampleCards, displaySets);
        setDisplayCards(newCards);
    }, [displaySets]);

    return (
        /* displaySets !== 0 && */
        <ArticlesSection>
            {displaySets !== 0 && <h2 className="results__title">Search results</h2>}
            <ul className="results__article-container">{displayCards}</ul>
            {!isLoading && <ShowMoreButton getNextCards={handleGetNextCards} />}
            {isLoading && <Preloader />}
        </ArticlesSection>
    );
};

export default SearchResults;