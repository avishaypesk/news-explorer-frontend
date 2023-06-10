import { NavLink } from 'react-router-dom';
import linkedIn from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import './Footer.css';
import AboutMe from '../AboutMe/AboutMe';

function Footer({ showAboutMe }) {
  return (
    <>
      {showAboutMe && <AboutMe />}
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__copyright"> © {new Date().getFullYear()} Supersite, Powered by News API</p>
          <div className="footer__links">
            <NavLink to="/" className="footer__link">Home</NavLink>
            <a className="footer__link" target={'_blank'} rel="noreferrer" href="https://practicum.com/en-isr/">Practicum</a>
          </div>
          <div className="footer__icons">
            <a href="https://github.com/avishaypesk" target={'_blank'} rel="noreferrer">
              <img className="footer__icon" src={github} alt="GitHub link" ></img>
            </a>
            <a href="https://www.linkedin.com/in/avishay-peskin-127779219/" target={'_blank'} rel="noreferrer">
              <img className="footer__icon" src={linkedIn} alt="LinkedIn link" ></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;