import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import Button from '../Button/Button';
import SocialMenu from '../SocialMenu/SocialMenu';

const StyledHeader = styled.nav`
    padding: 20px;
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;

    justify-content: space-between;
    align-items: center;
    z-index: 9999;
`;

const FaqButton = styled(Button)`
    display: none;
    ${({ theme }) => theme.mq.tablet} {
        display: inline-block;
    }
    &::before {
        background-color: ${({ theme }) => theme.primary};
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    position: absolute;
    left: 30px;
    top: -100%;

    ${({ theme }) => theme.mq.tablet} {
        position: static;
        align-items: center;
    }
`;
/* ${({ theme }) => theme.mq.tablet} {
        display: flex;
        align-items: center;
    } */

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <StyledHeader>
            <Logo />
            <Hamburger onClick={toggleMobileMenu} isMenuOpen={isMenuOpen} />
            <MobileMenu isMenuOpen={isMenuOpen} />
            <ButtonsWrapper>
                <SocialMenu />
                <FaqButton>Faq</FaqButton>
            </ButtonsWrapper>
        </StyledHeader>
    );
};

export default Header;
