import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'templates/HeroTemplate/HeroTemplate';
import Projects from 'templates/Projects/Projects';

const IndexPage = () => (
    <MainTemplate>
        <Hero />
        <Projects />
    </MainTemplate>
);

export default IndexPage;
