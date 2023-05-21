import './SearchForm.css';

const SearchForm = ({ buttonText = 'Search', handleSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // handleSearch(cards);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input className="search-form__input" type={'search'} placeholder="Enter topic"></input>
            <button className="search-form__submit" type={'submit'}>
                {buttonText}
            </button>
        </form>
    );
};

export default SearchForm;