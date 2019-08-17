import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary};
`;

const Footer = () => {
    const year = new Date().getFullYear();
    return <StyledWrapper>Maciej Zając @ {year}</StyledWrapper>;
};

export default Footer;
