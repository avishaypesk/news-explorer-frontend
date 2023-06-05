import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
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
                    <button className="searchbar__button" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SearchBar;
