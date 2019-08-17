import React from 'react';
import styled from 'styled-components';
import gatsby from 'assets/images/gatsby-icon.png';

const StyledWrapper = styled.div`
    width: 100vw;
    height: 50vh;
    padding: 50px;
    max-width: 1000px;
    padding-top: 100px;
    margin: 0 auto;
`;
// const StyledBackground = styled.div`
//     ${({ theme }) => theme.mq.tablet} {
//         background-image: linear-gradient(
//             175deg,
//             ${({ theme }) => theme.primary},
//             ${({ theme }) => theme.primary} 170px,
//             ${({ theme }) => theme.white} 170px,
//             ${({ theme }) => theme.white} 600px,
//             ${({ theme }) => theme.primary} 600px
//         );
//     }
// `;

const StyledSkillsWrapper = styled.div`
    margin: 0 auto;
    ${({ theme }) => theme.mq.tablet} {
        display: flex;
        flex-wrap: wrap;
    }
`;

const StyledHead = styled.h1``;

const StyledSkill = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    ${({ theme }) => theme.mq.tablet} {
        width: 33.3%;
        padding: 40px;
    }
`;

const StyledIcon = styled.i`
    margin-right: 25px;
    width: 35px;
    height: auto;
`;

const StyledGatsby = styled.img`
    width: 35px;
    height: auto;
    margin-right: 25px;
`;

const Skills = () => (
    <StyledWrapper>
        <StyledHead>Moje technologie</StyledHead>
        <StyledSkillsWrapper>
            <StyledSkill>
                <StyledIcon className="fab fa-react fa-2x" />
                React
            </StyledSkill>
            <StyledSkill>
                <StyledIcon className="fab fa-js-square fa-2x" />
                Javascript, TypeScript
            </StyledSkill>
            <StyledSkill>
                <StyledIcon className="fab fa-sass fa-2x" />
                Sass
            </StyledSkill>
            <StyledSkill>
                <StyledIcon className="fab fa-git fa-2x" />
                Git
            </StyledSkill>
            <StyledSkill>
                <StyledGatsby src={gatsby} alt="gatsby-logo" />
                Gatsby
            </StyledSkill>
            <StyledSkill>
                <StyledIcon className="fab fa-node fa-2x" />
                Node.js
            </StyledSkill>
        </StyledSkillsWrapper>

        <div>
            Pozostałe technologie z którymi miałem styczność: Bootstrap,
            Redux/MobX, Webpack
        </div>
        <div>
            Inne: zasady pisania D.R.Y oraz S.O.L.I.D oraz metodyka pisania
            styli BEM
        </div>
    </StyledWrapper>
);

export default Skills;
