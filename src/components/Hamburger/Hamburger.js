import './Hamburger.css';
import { popupActions } from '../../reducers/popupReducer';
import { usePopups } from '../../contexts/PopupContext';
import { useLocation, useNavigate } from 'react-router';

const Hamburger = () => {
  const locationIsArticles = useLocation().pathname === '/saved-articles';
  const burgerClassName = `hamburger ${locationIsArticles ? 'hamburger_dark' : ''}`;
  const crossClassName = `close-button ${locationIsArticles ? 'close-button_dark' : ''}`;
  const [popupState, popupDispatch] = usePopups();
  const displayButton = () => (popupState.isUserMenuOpen ? crossClassName : burgerClassName);
  const navigate = useNavigate();

  const handleBurgerClick = () => {
    if (!locationIsArticles) {
      popupDispatch(popupActions.toggleUserMenu);
    } else navigate('/', { replace: true });
  };

  return <button onClick={handleBurgerClick} className={displayButton()}></button>;
};

export default Hamburger;