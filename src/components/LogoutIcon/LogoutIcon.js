import LogoutIconWhite from '../../images/logout-white.svg';
import LogoutIconBlack from '../../images/logout.svg';
import './LogoutIcon.css';

const LogoutIcon = ({ isDark }) => {
  return (
    <img
      className="navbar__logout-icon"
      src={isDark ? LogoutIconBlack : LogoutIconWhite}
      alt="Logout"
    ></img>
  );
};

export default LogoutIcon;