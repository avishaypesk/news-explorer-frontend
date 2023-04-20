import './HeaderLine.css';

const HeaderLine = ({ isDark }) => {
  const decoratorClassname = `header__line ${isDark ? 'header__line_dark' : ''}`;
  return <div className={decoratorClassname}></div>;
};

export default HeaderLine;