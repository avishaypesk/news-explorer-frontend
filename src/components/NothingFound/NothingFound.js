import './NothingFound.css';
import Nothingfound from '../../images/nothing-found.svg';

const NothingFound = () => {
  return (
    <section className='nothing-found__container'>
      <img className='nothing-foun__image' src={Nothingfound} alt='Nothing found'></img>
      <h3 className='nothing-foun__title'>Nothing found</h3>
      <p className='nothing-foun__text'>Sorry, but nothing matched your search terms.</p>
    </section>
  );
};

export default NothingFound;