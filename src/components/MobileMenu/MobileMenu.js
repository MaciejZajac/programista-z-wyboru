import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    color: black;
    transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')});
    transition: transform 0.25s ease-in-out;

    ${({ theme }) => theme.mq.tablet} {
        display: none;
    }
`;

const MenuLink = styled.p`
    padding: 5px;
    font-weight: 700;
    cursor: pointer;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
    transition: opacity 1s 0.25s ease-in-out;
`;

const FaqButton = styled.button`
    position: absolute;
    bottom: 0;
    background: ${({ theme }) => theme.grey};
    border: none;
    width: 100%;
    height: 88px;
    font-size: ${({ theme }) => theme.font.size.s};

    transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? '0' : '100%')});
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
    transition: transform 0.25s 0.25s, opacity 0.25s 0.25s ease-in-out;
`;

const menuItems = ['Home', 'Projekty', 'Umiejętności', 'Kim jestem', 'Kontakt'];

const MobileMenu = ({ isMenuOpen }) => (
    <StyledWrapper isMenuOpen={isMenuOpen}>
        {menuItems.map(item => (
            <MenuLink key={item} isMenuOpen={isMenuOpen}>
                {item}
            </MenuLink>
        ))}
        <FaqButton isMenuOpen={isMenuOpen}>Faq</FaqButton>
    </StyledWrapper>
);

export default MobileMenu;
