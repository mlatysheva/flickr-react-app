import { NavLink, useLocation } from 'react-router-dom';
import { ThemeSelector } from './Theme';

const CurrentPage = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/form':
        return 'Form';
      case '/about':
        return 'About';
      case '/api':
        return 'API';
      case '/error':
        return 'Error';
      default:
        return 'Error';
    }
  };

  return (
    <div className="current-page-title">
      <span className="here-text">Current page: </span>
      {getCurrentPage()}
    </div>
  );
};

function Header() {
  return (
    <header className="header">
      <CurrentPage />
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="form">Form</NavLink>
        <NavLink to="api">API</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
      <ThemeSelector />
    </header>
  );
}

export default Header;
