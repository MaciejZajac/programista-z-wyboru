import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import SEO from 'components/SEO/SEO';
import theme from 'assets/styles/theme';

const MainTemplate = ({ children }) => (
    <>
        <SEO />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <>{children}</>
        </ThemeProvider>
    </>
);

export default MainTemplate;
