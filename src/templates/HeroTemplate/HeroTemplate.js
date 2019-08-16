import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const StyledHero = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    color: ${({ theme }) => theme.primary};

    ${({ theme }) => theme.mq.tablet} {
        padding: 100px;
        align-items: flex-start;
        background-image: linear-gradient(
            135deg,
            ${({ theme }) => theme.white},
            ${({ theme }) => theme.white} 800px,
            ${({ theme }) => theme.primary} 800px,
            ${({ theme }) => theme.primary}
        );
    }
`;

const Styledh1 = styled.h1`
    margin: 0;
    font-size: ${({ theme }) => theme.font.size.xl};
`;

const StyledHello = styled.h2`
    margin: 0;
    padding-top: 15px;
    padding-bottom: 30px;
    font-size: ${({ theme }) => theme.font.size.l};
`;

const StyledButton = styled(Button)`
    margin: 0;
`;

const Hero = () => (
    <StyledHero>
        <Styledh1>Cześć!</Styledh1>
        <StyledHello>Z tej strony Maciek</StyledHello>
        <StyledButton>Kim jestem</StyledButton>
    </StyledHero>
);

export default Hero;
