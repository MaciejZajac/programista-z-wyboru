import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.button`
    padding: 15px;
    border: none;
    background: none;
    z-index: 9999;

    ${({ theme }) => theme.mq.tablet} {
        display: none;
    }
`;

const InnerHamburger = styled.div`
    position: relative;

    width: 24px;
    height: 2px;
    background-color: ${({ theme, isMenuOpen }) =>
        isMenuOpen ? 'transparent ' : theme.primary};
    transition: background-color 0.25s ease-in-out;
    &::before,
    &::after {
        content: '';
        background-color: ${({ theme }) => theme.primary};
        position: absolute;
        left: 0;
        width: 24px;
        height: 2px;
    }
    &::before {
        top: -8px;
        transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? '8px' : '0')})
            rotate(${({ isMenuOpen }) => (isMenuOpen ? '45deg' : '0')});
        transition: transform 0.25s ease-in-out;
    }

    &::after {
        top: 8px;
        transform: translateY(
                ${({ isMenuOpen }) => (isMenuOpen ? '-8px' : '0')}
            )
            rotate(${({ isMenuOpen }) => (isMenuOpen ? '-45deg' : '0')});
        transition: transform 0.25s ease-in-out;
    }
`;

const Hamburger = ({ onClick, isMenuOpen }) => (
    <StyledHamburger onClick={onClick}>
        <InnerHamburger isMenuOpen={isMenuOpen} />
    </StyledHamburger>
);

export default Hamburger;
