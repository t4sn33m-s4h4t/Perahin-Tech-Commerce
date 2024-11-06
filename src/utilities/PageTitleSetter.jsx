import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const PageTitleSetter = () => {
  const title = "Perahin E-Commerce"
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = `${title}`
        break;
      case '/statistics':
        document.title = `Statistics || ${title}`
        break;
      case '/dashboard':
        document.title = `Dashboard || ${title}`
        break;
      case '/contact':
        document.title = `Contact || ${title}`
        break;
      default:
        document.title = `${title}`
    }
  }, [location.pathname]);

  return null;
};

export default PageTitleSetter;
