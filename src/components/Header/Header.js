import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import Button from '../Button/Button';
import SocialMenu from '../SocialMenu/SocialMenu';

const StyledWrapper = styled.nav`
    padding: 20px;
    display: flex;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;

    justify-content: space-between;
    align-items: center;
    z-index: 9999;
`;

const StyledLogo = styled(Logo)`
    position: relative;
    z-index: 9999;
    ${({ theme }) => theme.mq.desktop} {
        width: 150px;
    }
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

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <StyledWrapper>
            <StyledLink to="/">
                <StyledLogo />
            </StyledLink>
            <Hamburger onClick={toggleMobileMenu} isMenuOpen={isMenuOpen} />
            <MobileMenu isMenuOpen={isMenuOpen} />
            <ButtonsWrapper>
                <SocialMenu />
                <Link to="/faq">
                    <FaqButton>Faq</FaqButton>
                </Link>
            </ButtonsWrapper>
        </StyledWrapper>
    );
};

export default Header;
