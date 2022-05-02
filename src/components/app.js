import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter, useParams } from 'react-router-dom';
import ScrollToTopBtn from './menu/ScrollToTop';
import LinksList from './pages/linksList';
import Paddy from './pages/paddy';
import HomePage from './pages/homePage';
import Header from './menu/header';

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
    <Header/>
    <HashRouter>
      <ScrollTop path="/">
        <Routes >
          <Route exact path="/" element={<HomePage />} />
          <Route path="/:identifier" element={<LinksList/>} />

        </Routes >
      </ScrollTop>
    </HashRouter>
    <ScrollToTopBtn />
  </div>
);
export default app;