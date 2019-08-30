import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '../Header';
// import Footer from './Footer';
import { theme, GlobalStyle } from './globalTheme';

function Layout({ children, header = true, footer = true }) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {header && <Header />}

        {children}

        {/* {footer && <Footer />} */}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Layout;
