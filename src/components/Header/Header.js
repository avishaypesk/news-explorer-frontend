import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../NavBar/NavBar';
import HeaderLine from '../HeaderLine/HeaderLine';
import { usePopups } from '../../contexts/PopupContext';
import { useAuth } from '../../contexts/AuthContext';
import useWindowSize from '../../hooks/UseWindowSize';
import { useEffect, useState } from 'react';

const Header = ({ isDark }) => {
  const [popupState, popupDispatch] = usePopups();
  const [headerClassName, setHeaderClassName] = useState('header');
  const isMobileSized = useWindowSize().width < 650;
  const { currentUser } = useAuth();

  useEffect(() => {
    if (isMobileSized && !isDark) {
      setHeaderClassName(`header ${popupState.isUserMenuOpen ? 'header_dark' : ''}`);
    } else {
      setHeaderClassName('header');
    }
  }, [isMobileSized, popupState.isUserMenuOpen, isDark]);

  return (
    <>
      <div className={headerClassName}>
        <Logo isDark={isDark} />
        <Navbar isDark={isDark} />
      </div>
      <HeaderLine isDark={isDark} />
    </>
  );
};

export default Header;