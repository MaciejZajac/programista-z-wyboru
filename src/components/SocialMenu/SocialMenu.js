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

const SocialMenu = () => (
    <StyledWrapper>
        <i className="fab fa-github fa-2x" />
        <i className="fab fa-linkedin fa-2x" />
    </StyledWrapper>
);

export default SocialMenu;
