import './SearchResults.css';
import NewsCard from '../NewsCard/NewsCard';

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
    return (
        <section className="search-results">
            <h2 className="search-results__title">Search results</h2>
            <ul className="search-results__article-container">
                {exampleCards.map((card, i) => (
                    <NewsCard key={i} {...card}></NewsCard>
                ))}
            </ul>
        </section>
    );
};

export default SearchResults;