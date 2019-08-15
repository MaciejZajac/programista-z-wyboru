import React from 'react';
import styled from 'styled-components';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';

const StyledHeader = styled.nav`
    display: flex;
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
