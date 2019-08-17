import React from 'react';
import styled from 'styled-components';

const StyledPopup = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99999;
`;

const StyledContainer = styled.div`
    padding: 25px;
    padding-bottom: 35px;
    margin: 0 10px;
    color: ${({ theme }) => theme.black};
    background: white;
    border: 2px solid ${({ theme }) => theme.primary};
    display: flex;
    border-radius: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.m};
`;

const Popup = ({ closePopup }) => (
    <StyledPopup onClick={closePopup}>
        <StyledContainer>
            <h3>Strona w wersji alpha</h3>
            Strona tworzona w wolnych chwilach. <br /> Kod strony znajduje się
            na
            <a href="https://github.com/MaciejZajac/programista-z-wyboru/tree/devel">
                github
            </a>
            <br />
            <a href="https://oldmaciejzajacportfolio.netlify.com/">
                Poprzednia strona
            </a>
        </StyledContainer>
    </StyledPopup>
);

export default Popup;
