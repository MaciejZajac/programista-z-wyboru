import React from 'react';
import Mentor from 'assets/images/mentorscreen.png';
import Evernote from 'assets/images/evernote.png';
import SpaceX from 'assets/images/spacex-logo.jpeg';
import Hotel from 'assets/images/hotel.png';
import styled from 'styled-components';

import {
    StyledProjects,
    StyledHeader,
    StyledSubHeader,
} from './Projects.style';
import ProjectRow from '../ProjectRow/ProjectRow';

const Projects = () => {
    const mentorDescription = {
        subheader: 'Mentor',
        text: [
            'Strona napisana dla kółka naukowego Mentor z wydziału zarządzania AGH.',
            'Została napisana w czystym React. Do ostylowania strony wykorzystałem metodykę BEM oraz scss.',
        ],
        codeLink: 'https://bitbucket.org/maciek1997/mentor-website/src/master/',
        webLink: 'https://mentor-website.netlify.com',
    };
    const evernoteDescription = {
        subheader: 'Evernote',
        text: [
            'Aplikacja webowa służąca do robienia notatek. Taki trochę klon popularnego Evernote',
            'Do zapisywania tekstu został wykorzystany Firebase oraz framework React.',
        ],
        codeLink:
            'https://bitbucket.org/maciek1997/evernote-react-firebase/src/master/',
        webLink: 'https://evernote-like.netlify.com/',
    };
    const spaceXDescription = {
        subheader: 'SpaceX',
        text: [
            'Aplikacja webowa przedstawiająca wszystkie starty rakiet SpaceX.',
            'Do jej napisania został uzyty GraphQL, Apollo, React',
        ],
        codeLink: 'https://github.com/MaciejZajac/spacex-launched/tree/devel',
        webLink: 'https://vast-inlet-11096.herokuapp.com/',
    };
    const hotelDescription = {
        subheader: 'Hotel app',
        text: [
            'Strona internetowa słuząca do rezerwacji pokoi',
            'Do jej napisania został uzyty React, ContextAPI, Contentful',
        ],
        codeLink: 'https://github.com/MaciejZajac/hotel-app',
        webLink: 'https://hotel-app-123.netlify.com/',
    };
    return (
        <StyledProjects>
            <StyledSubHeader>
                <StyledHeader>Projekty</StyledHeader>
                <StyledSubHeader>Kilka z moich projektów</StyledSubHeader>
            </StyledSubHeader>
            <StyledFlex>
                <ProjectsLeft>
                    <ProjectRow desciption={mentorDescription} image={Mentor} />
                    <ProjectRow
                        desciption={evernoteDescription}
                        image={Evernote}
                    />
                </ProjectsLeft>
                <ProjectsRight>
                    <ProjectRow desciption={spaceXDescription} image={SpaceX} />
                    <ProjectRow desciption={hotelDescription} image={Hotel} />
                </ProjectsRight>
            </StyledFlex>
        </StyledProjects>
    );
};

export default Projects;

const StyledFlex = styled.div`
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

const ProjectsLeft = styled.div`
    flex: 1;
    padding-top: 10rem;
`;
const ProjectsRight = styled.div`
    flex: 1;
`;
