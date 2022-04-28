import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ScrollToTopBtn from './menu/ScrollToTop';
import LinksList from './pages/linksList';
import HomePage from './pages/homePage';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

const app = () => (
  <div className="wraper">
    <GlobalStyles />
    <HashRouter>
      <ScrollTop path="/">
        <Routes >
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/*" element={<LinksList />} />
        </Routes >
      </ScrollTop>
    </HashRouter>
    <ScrollToTopBtn />
  </div>
);
export default app;