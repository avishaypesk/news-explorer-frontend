import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (search.trim() === '') {
          setError('Please enter a keyword');
        } else {
          setError(null);
      
          try {
            onSearch(search);
          } catch (err) {
            console.error(err);
            setError('An error occurred while fetching the news');
          }
        }
    };

    return (
        <section className="searchbar">
            <div className="searchbar__container">
                <form className="searchbar__form" onSubmit={handleSubmit} aria-label="search form">
                    <input
                        type="text"
                        placeholder="Enter topic"
                        className="searchbar__input"
                        value={search}
                        onChange={handleChange}

                    />
                    {error && <div className="searchbar__error">{error}</div>}
                    <button className="searchbar__button" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SearchBar;
