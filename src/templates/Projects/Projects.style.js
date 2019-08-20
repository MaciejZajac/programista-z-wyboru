import styled from 'styled-components';

export const StyledProjects = styled.div`
    min-height: 100vh;
    /* padding-top: 50px;
    padding-bottom: 100px; */
    /* max-width: 1100px; */
    margin: 0 auto;
    position: relative;
    text-align: center;

    color: ${({ theme }) => theme.black};
    ${({ theme }) => theme.mq.desktop} {
        padding: 0 50px;
        padding-bottom: 50px;
        background-image: linear-gradient(
            165deg,
            ${({ theme }) => theme.primary},
            ${({ theme }) => theme.primary} 131px,
            ${({ theme }) => theme.white} 131px
        );
    }
`;

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
    text-align: right;
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
        justify-content: center;
    }
`;
