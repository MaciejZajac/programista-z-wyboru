import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'templates/HeroTemplate/HeroTemplate';
import Projects from 'templates/Projects/Projects';
import Skills from '../templates/Skills/Skills';
import Contact from '../templates/Contact/Contact';
import Footer from '../templates/Footer/Footer';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//     ${({ theme }) => theme.mq.tablet} {
//         background-image: linear-gradient(
//             145deg,
//             ${({ theme }) => theme.primary},
//             ${({ theme }) => theme.primary} 150px,
//             ${({ theme }) => theme.white} 150px,
//             ${({ theme }) => theme.white} 700px,
//             ${({ theme }) => theme.primary} 700px,
//             ${({ theme }) => theme.primary} 1300px,
//             ${({ theme }) => theme.white} 1300px,
//             ${({ theme }) => theme.white} 1600px,
//             ${({ theme }) => theme.primary} 1600px,
//             ${({ theme }) => theme.primary} 2000px,
//             ${({ theme }) => theme.white} 2000px,
//             ${({ theme }) => theme.white}
//         );
//     }
// `;

const IndexPage = () => (
    <MainTemplate>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </MainTemplate>
);

export default IndexPage;
