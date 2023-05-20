import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { usePopups, popupActions } from '../../contexts/PopupContext';
import './Logo.css';


const Logo = () => {
  const [, popupReducer] = usePopups();
  const locationIsArticles = useLocation().pathname === '/saved-articles';
  const linkStyle = `logo-text logo-text_${locationIsArticles ? 'dark' : 'light'}`;

  return (
    <Link onClick={() => popupReducer(popupActions.closeAll)} style={{ textDecoration: 'none', color: 'inherit' }} to="/">
      <span className={linkStyle}>NewsExplorer</span>
    </Link>
  );
};

export default Logo;