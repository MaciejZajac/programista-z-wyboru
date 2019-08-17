import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    background: none;
    padding: 15px 35px;
    outline: none;
    border: none;

    font-weight: 700;
    color: ${({ theme }) => theme.black};
    cursor: pointer;
    width: auto;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.font.size.xs};

    border-radius: 15px;

    z-index: 1;

    ${({ theme }) => theme.mq.tablet} {
        padding: 15px 35px;
    }

    &::after {
        content: '';
        left: 0;
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        border: 1px solid ${({ theme }) => theme.black};
    }

    &::before {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background-color: ${({ theme }) => theme.primary};
        z-index: -1;
        transition: transform 0.25s ease-in-out;
    }

    &:hover::before {
        transform: translate(5px, -5px);
    }
`;

export default Button;
