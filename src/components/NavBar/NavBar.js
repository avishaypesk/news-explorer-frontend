import Hamburger from '../Hamburger/Hamburger';
import useWindowSize from '../../hooks/UseWindowSize';
import './NavBar.css';
import NavItems from '../NavItems/NavItems.js';

const Navbar = () => {
    const isMobileSized = useWindowSize().width < 650;

    return isMobileSized ? <Hamburger /> : <NavItems />;
};

export default Navbar;