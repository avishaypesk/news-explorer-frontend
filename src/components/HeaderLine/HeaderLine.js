import './HeaderLine.css';
import { useEffect, useState } from 'react';
import { usePopups } from '../../contexts/PopupContext';

const HeaderLine = ({ isDark }) => {
  const [popupState] = usePopups();
  const [headerLineClassname, setheaderLineClassname] = useState('header__line');
  useEffect(() => {
    if (isDark) {
      setheaderLineClassname('header__line header__line_dark');
    } else {
      setheaderLineClassname('header__line');
    }
  }, [isDark, popupState.isUserMenuOpen]);

  return <div className={headerLineClassname}></div>;
};

export default HeaderLine;