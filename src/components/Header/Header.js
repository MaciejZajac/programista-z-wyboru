import React from 'react';
import styled from 'styled-components';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';

const StyledHeader = styled.nav`
    padding: 20px;
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;

    justify-content: space-between;
    align-items: flex-start;
`;

const Header = () => (
    <StyledHeader>
        <Logo />
        <Hamburger />
    </StyledHeader>
);

export default Header;
