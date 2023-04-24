import './Main.css';
import Header from '../Header/Header';
import { usePopups } from '../../contexts/PopupContext';
import UserMenu from '../UserMenu/UserMenu';
import useWindowSize from '../../hooks/UseWindowSize';


const Main = () => {
  const isMobileSized = useWindowSize().width < 650;
  const [popupState] = usePopups();
  return (
    <div className="main__wrapper">
      <Header></Header>
      {popupState.isUserMenuOpen && isMobileSized && <UserMenu isDark={false} />}
    </div>
  );
};

export default Main;