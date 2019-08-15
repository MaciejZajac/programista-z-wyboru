import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate/MainTemplate';

const StyledHeading = styled.h1`
    font-size: 2rem;
`;

const StyledParagraph = styled.p`
    letter-spacing: 0.1rem;
    line-height: 1.5;
`;

const IndexPage = () => (
    <MainTemplate>
        <StyledHeading>Programista z wyboru</StyledHeading>
        <StyledParagraph>Lubię frontend</StyledParagraph>
    </MainTemplate>
);

export default IndexPage;
