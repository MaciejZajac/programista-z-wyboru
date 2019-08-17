import Button from 'components/Button/Button';
import styled from 'styled-components';

export const StyledSubHeader = styled.h2`
    margin: 0;
    font-size: ${({ theme }) => theme.font.size.m};

    ${({ theme }) => theme.mq.phone} {
        font-size: ${({ theme }) => theme.font.size.l};
    }

    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;

export const StyledRows = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.mq.phone} {
        flex-direction: row;
        justify-content: space-between;
    }

    ${({ theme }) => theme.mq.desktop} {
        flex: 1 1;
        display: flex;
        flex-direction: column;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
`;

export const StyledLinks = styled.div`
    display: flex;
    width: 100%;

    justify-content: center;

    ${({ theme }) => theme.mq.phone} {
        justify-content: flex-start;
    }
`;

export const StyledImage = styled.img`
    width: 200px;
    height: auto;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.25s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    ${({ theme }) => theme.mq.phone} {
        box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
    }
    ${({ theme }) => theme.mq.tablet} {
        width: 250px;
    }
`;

export const StyledDescription = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${({ theme }) => theme.mq.phone} {
        flex: 0.6;
    }

    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
        flex: 1;
    }
`;

export const StyledImageRow = styled.div`
    padding: 20px;
    width: 100%;
    background: ${({ theme }) => theme.primary};

    ${({ theme }) => theme.mq.phone} {
        background: unset;
        font-size: ${({ theme }) => theme.font.size.l};
        flex: 0.4;
    }

    ${({ theme }) => theme.mq.desktop} {
        flex: 1;
    }
`;

export const StyledButton = styled(Button)`
    margin: 10px;
`;

export const StyledText = styled.p`
    padding: 0;
    margin: 5px 0;
    font-size: ${({ theme }) => theme.font.size.s};
    text-align: left;
`;
