import './Hamburger.css';
import { popupActions } from '../../utils/reducers/popupReducer';
import { usePopups } from '../../contexts/PopupContext';

const Hamburger = ({ isDark }) => {
  const burgerClassName = `hamburger ${isDark ? 'hamburger_dark' : ''}`;
  const closeButtonClassName = `close-button ${isDark ? 'close-button_dark' : ''}`;
  const [popupState, popupDispatch] = usePopups();
  const displayButton = () => (popupState.isUserMenuOpen ? closeButtonClassName : burgerClassName);

  return <button onClick={() => popupDispatch(popupActions.toggleUserMenu)} className={displayButton()}></button>;
};

export default Hamburger;