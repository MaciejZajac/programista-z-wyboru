import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';

const StyledWrapper = styled.div`
    width: 100vw;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contact = () => (
    <StyledWrapper>
        <a href="mailto:maciej.zajac.197@gmail.com">
            <Button>Email</Button>
        </a>
    </StyledWrapper>
);

export default Contact;
