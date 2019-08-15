import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00d664;
    /* background-color: ${({ theme }) => theme.primary}; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Hero = () => (
    <StyledHero>
        <h1>cześć</h1>
    </StyledHero>
);

export default Hero;
