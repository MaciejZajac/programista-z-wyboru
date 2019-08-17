import styled from 'styled-components';

export const StyledProjects = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-top: 50px;
    padding-bottom: 100px;
    position: relative;

    text-align: center;
    color: ${({ theme }) => theme.black};
`;
/* background-image: linear-gradient(
        ${({ theme }) => theme.mq.tablet} {
            align-items: flex-start;
            background-image: linear-gradient(
                175deg,
                ${({ theme }) => theme.white},
                ${({ theme }) => theme.white} 900px,
                ${({ theme }) => theme.primary} 900px
            );
        }
            135deg,
            ${({ theme }) => theme.white},
            ${({ theme }) => theme.white} 185px,
            ${({ theme }) => theme.primary} 185px,
            ${({ theme }) => theme.primary} 800px,
            ${({ theme }) => theme.white} 800px,
            ${({ theme }) => theme.white}
        ); */

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 20px;
    text-align: left;

    ${({ theme }) => theme.mq.phone} {
        padding: 50px;
    }
    ${({ theme }) => theme.mq.tablet} {
        padding: 150px;
        color: ${({ theme }) => theme.white};
    }
`;

export const StyledHeader = styled.h1`
    margin: 0;
    padding-bottom: 25px;
    font-size: ${({ theme }) => theme.font.size.l};
    color: ${({ theme }) => theme.black};

    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;

export const StyledSubHeader = styled.h2`
    margin: 0;
    padding-bottom: 20px;
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.black};

    ${({ theme }) => theme.mq.phone} {
        font-size: ${({ theme }) => theme.font.size.m};
    }

    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.l};
    }
`;

export const ProjectSection = styled.div`
    ${({ theme }) => theme.mq.desktop} {
        display: flex;
    }
`;
