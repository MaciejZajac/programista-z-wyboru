import React from 'react';
import styled from 'styled-components';
import gatsby from 'assets/images/gatsby-icon.png';

const StyledWrapper = styled.div`
    width: 100vw;
    min-height: 50vh;
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    ${({ theme }) => theme.mq.tablet} {
        padding: 35px;
    }
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
    text-align: center;
    ${({ theme }) => theme.mq.tablet} {
        display: flex;
        justify-content: space-evenly;
    }
`;

const StyledSkill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    ${({ theme }) => theme.mq.tablet} {
        padding: 40px;
    }
`;

const StyledOthers = styled.div`
    text-align: center;
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

const StyledList = styled.ul`
    list-style: none;
    line-height: 1.5;
`;
const StyledBold = styled.span`
    font-weight: 700;
`;

const Skills = () => (
    <StyledWrapper>
        <StyledSkillsWrapper>
            <div>
                <h1>Front-end technologies</h1>
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
                    <StyledGatsby src={gatsby} alt="gatsby-logo" />
                    Gatsby
                </StyledSkill>
            </div>
            <div>
                <h1>Backend technologies</h1>
                <StyledSkill>
                    <StyledIcon className="fab fa-node fa-2x" />
                    Node.js
                </StyledSkill>
                <h1>Others</h1>
                <StyledSkill>
                    <StyledIcon className="fab fa-git fa-2x" />
                    Git
                </StyledSkill>
            </div>
        </StyledSkillsWrapper>

        <StyledOthers>
            <h4>
                Pozostałe technologie z którymi jestem w pewnym stopniu
                zaznajomiony:
            </h4>
            <StyledList>
                <li>
                    <StyledBold>Bootstrap</StyledBold> - w pracy oraz w
                    niektórych projektach korzystam z bootstrapa.
                </li>
                <li>
                    <StyledBold>Webpack</StyledBold> - bundluje cały projekt do
                    małej paczki.
                </li>
                <li>
                    <StyledBold>Redux/MobX</StyledBold> - uzywam aktywnie w
                    pracy.
                </li>
                <li>
                    <StyledBold>Styled Components</StyledBold> - ostatnio w
                    kazdym własnym projekcie uzywam tego rozszerzenia
                </li>
            </StyledList>
            <p>
                Inne z moich umiejętności to pisanie kodu według zasad D.R.Y.
                oraz S.O.L.I.D.
            </p>
        </StyledOthers>
    </StyledWrapper>
);

export default Skills;
