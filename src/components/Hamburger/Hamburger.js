import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.button`
    padding: 15px;
    border: none;
    background: none;
`;

const InnerHamburger = styled.div`
    position: relative;

    width: 24px;
    height: 2px;
    background-color: black;
    &::before,
    &::after {
        content: '';
        background-color: black;
        position: absolute;
        left: 0;
        width: 24px;
        height: 2px;
    }
    &::before {
        top: -8px;
    }

    &::after {
        top: 8px;
    }
`;

const Hamburger = () => (
    <StyledHamburger>
        <InnerHamburger />
    </StyledHamburger>
);

export default Hamburger;
