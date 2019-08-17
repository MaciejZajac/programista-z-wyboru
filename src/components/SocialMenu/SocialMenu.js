import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin: 0;
    width: 150px;
    position: absolute;
    display: flex;
    color: ${({ theme }) => theme.black};
    justify-content: space-evenly;
    top: calc(100vh - 100% - 30px);
    ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
        position: static;
    }
`;
const StyledLink = styled.a`
    padding: 15px;
`;

const SocialMenu = () => (
    <StyledWrapper>
        <StyledLink href="https://bitbucket.org/%7B6656338b-7e5d-4192-a30d-e02da811bb2e%7D/">
            <i className="fab fa-github fa-2x" />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/maciejzajac534">
            <i className="fab fa-linkedin fa-2x" />
        </StyledLink>
    </StyledWrapper>
);

export default SocialMenu;
