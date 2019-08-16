import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
    margin: 0;
    padding: 5px;
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
    z-index: 9999;
`;
const Logo = () => <StyledLogo>Maciej Zając</StyledLogo>;

export default Logo;
