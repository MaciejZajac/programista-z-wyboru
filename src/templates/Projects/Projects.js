import React from 'react';
import styled from 'styled-components';

const StyledProjects = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;

    text-align: center;
    color: ${({ theme }) => theme.primary};

    ${({ theme }) => theme.mq.tablet} {
        padding: 100px;
        align-items: flex-start;
        background-image: linear-gradient(
            135deg,
            ${({ theme }) => theme.white},
            ${({ theme }) => theme.white} 185px,
            ${({ theme }) => theme.primary} 185px,
            ${({ theme }) => theme.primary} 800px,
            ${({ theme }) => theme.white} 800px,
            ${({ theme }) => theme.white}
        );
    }
`;

const Styledh1 = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.xl};
`;

const Projects = () => (
    <StyledProjects>
        <Styledh1>Cześć!</Styledh1>
    </StyledProjects>
);

export default Projects;
