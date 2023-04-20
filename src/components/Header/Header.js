import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../NavBar/NavBar';
import HeaderLine from '../HeaderLine/HeaderLine';

const Header = ({ isDark }) => {
  return (
    <>
      <div className="header">
        <Logo isDark={isDark} />
        <Navbar isDark={isDark} />
      </div>
      <HeaderLine isDark={isDark} />
    </>
  );
};

export default Header;