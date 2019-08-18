import React from 'react';
import styled from 'styled-components';
import Profilowe from 'assets/images/profilowe.jpg';
// import Button from '../../components/Button/Button';

const StyledWrapper = styled.div`
    min-width: 100vw;
    padding: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
    }
`;

const StyledAbout = styled.div`
    min-width: 35vw;
    padding: 20px;
    height: auto;
    text-align: center;
`;

const StyledPhotoContainer = styled.div`
    min-width: 35vw;
    padding: 20px;
    height: auto;
    text-align: center;
`;

const StyledPhoto = styled.img`
    width: 150px;
    height: auto;
    border-radius: 25px;

    ${({ theme }) => theme.mq.tablet} {
        width: 250px;
        height: auto;
    }
`;
const Contact = () => (
    <StyledWrapper id="About">
        <StyledAbout>
            Jestem po studiach pierwszego stopnia na AGH. Na drugi stopień
            wybieram się na niestacjonarne. Szukam pracy jako programista na
            pełen etat.
            {/* <div>
                <a href="mailto:maciej.zajac.197@gmail.com">
                    <Button>Email</Button>
                </a>
            </div> */}
        </StyledAbout>
        <StyledPhotoContainer>
            <StyledPhoto src={Profilowe} alt="Maciej Zając proflowe" />
        </StyledPhotoContainer>
    </StyledWrapper>
);

export default Contact;
