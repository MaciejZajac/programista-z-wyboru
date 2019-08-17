import React from 'react';
import {
    StyledRows,
    StyledSubHeader,
    StyledImageRow,
    StyledImage,
    StyledDescription,
    StyledLink,
    StyledButton,
    StyledLinks,
    StyledText,
} from './ProjectRow.style';

const ProjectRow = ({ desciption, image }) => (
    <StyledRows>
        <StyledImageRow>
            <a href={desciption.webLink}>
                <StyledImage
                    src={image}
                    alt="logo mentor"
                    data-position="top center"
                />
            </a>
        </StyledImageRow>
        <StyledDescription>
            <StyledSubHeader>{desciption.subheader}</StyledSubHeader>
            {desciption.text.map(item => (
                <StyledText key={item}>{item}</StyledText>
            ))}
            <StyledLinks>
                <StyledLink href={desciption.codeLink}>
                    <StyledButton>Kod online</StyledButton>
                </StyledLink>
                <StyledLink href={desciption.webLink}>
                    <StyledButton>Strona online</StyledButton>
                </StyledLink>
            </StyledLinks>
        </StyledDescription>
    </StyledRows>
);

export default ProjectRow;
