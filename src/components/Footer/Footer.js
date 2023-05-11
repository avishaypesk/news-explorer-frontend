import './Footer.css';
import { Link } from 'react-router-dom';
import linkedIn from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import facebook from '../../images/fb.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav-wrapper">
        <ul className="footer__page-links">
          <li className="footer__page-link">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
          </li>
          <li>
            <a className="footer__page-link" href="https://omriruvio.com" target={'_blank'} rel="noreferrer">
              My Homepage
            </a>
          </li>
        </ul>
        <ul className="footer__social-links">
          <li>
            <a className="footer__social-link" href="https://github.com/avishaypesk" target={'_blank'} rel="noreferrer">
              <img className="footer__social-link-image" src={github} alt="Github icon"></img>
            </a>
          </li>
          <li>
            <a className="footer__social-link" href="https://www.linkedin.com/in/avishay-peskin-127779219/" target={'_blank'} rel="noreferrer">
              <img className="footer__social-link-image" src={linkedIn} alt="LinkedIn icon"></img>
            </a>
          </li>
        </ul>
      </nav>
      <span className="footer__copyright">&copy; {new Date().getFullYear()} News Explorer, Powered by News API</span>
    </footer>
  );
};

export default Footer;