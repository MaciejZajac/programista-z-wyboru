import React from 'react';
import Mentor from 'assets/images/mentorscreen.png';
import Evernote from 'assets/images/evernote.png';
import SpaceX from 'assets/images/spacex-logo.jpeg';

import {
    StyledProjects,
    StyledHeader,
    StyledSubHeader,
    ProjectSection,
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
    return (
        <StyledProjects>
            <StyledSubHeader>
                <StyledHeader>Projekty</StyledHeader>
                <StyledSubHeader>Kilka z moich projektów</StyledSubHeader>
            </StyledSubHeader>
            <ProjectSection>
                <ProjectRow desciption={mentorDescription} image={Mentor} />
                <ProjectRow desciption={evernoteDescription} image={Evernote} />
                <ProjectRow desciption={spaceXDescription} image={SpaceX} />
            </ProjectSection>
        </StyledProjects>
    );
};

export default Projects;
