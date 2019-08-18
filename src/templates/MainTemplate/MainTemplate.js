import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import SEO from 'components/SEO/SEO';
import theme from 'assets/styles/theme';
import Header from 'components/Header/Header';
import Popup from '../Popup/Popup';

const MainTemplate = ({ children }) => {
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPopupVisible(false);
        }, 1000);
    }, []);

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <SEO />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <>
                    {popupVisible && <Popup closePopup={closePopup} />}
                    <Header />
                    {children}
                </>
            </ThemeProvider>
        </>
    );
};

export default MainTemplate;
