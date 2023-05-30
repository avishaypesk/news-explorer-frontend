import React from 'react';

const SearchForm = (props) => {

    function handleSubmit() {
        props.setIsLoading(true);
        setTimeout(() => {
            props.setIsLoading(false);
        }, 3000);
    }

    return (
        <section className='search-container'>
            <div className='search-container__content'>
                <h2 className='search-container__title'>
                    What's going on in the world?
                </h2>
                <p className='search-container__subtitle'>
                    Find the latest news on any topic and save them in your personal
                    account
                </p>
                <div className='searchbar'>
                    <input
                        type='text'
                        placeholder='Enter topic'
                        className='searchbar__input'
                    />
                    <button className='searchbar__button' onClick={handleSubmit}>
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SearchForm;
