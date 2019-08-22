import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 100px;
`;
const Input = styled.input`
    padding: 10px;
    width: 250px;
    border: none;
    outline: none;

    border-radius: 15px;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
`;

const dummyData = [
    {
        title: 'Jakie technologie Pan potrafi?',
        content:
            'Moim stackiem technologicznym jest: React, Javascript, Sass, Gatsby, Webpack, CSS3, HTML5, TypeScript, Redux/MobX. Trudno pamiętać wszystkich technologii. ',
    },
    {
        title: 'Na jakim etacie Pan pracuje obecnie?',
        content:
            'Obecnie pracuje na etacie 4/5. Zacząłem w lutym jak jeszcze byłem na studiach stacjonarnych. Na drugi stopień wybieram się na niestacjonarne - mogę pracować na pełen etat',
    },
    {
        title:
            'Dlaczego ma Pan w CV zaznaczone, że pracuje pan do września w obecnej firmie?',
        content:
            'Umowa mi się kończy 30 września i nie mam żadnego powodu by ją przedłużyć.',
    },
    {
        title: 'Jak u Pana z dyspozycyjnością od października?',
        content:
            'Od października będę studiował niestacjonarnie. Jestem w stanie pracować na pełen etat.',
    },
    {
        title: 'Dlaczego chcesz u nas pracować?',
        content:
            'Aplikuję jedynie do firm które w jakiś sposób są interesujące. Najważniejszą rzeczą dla mnie jest możliwość rozwoju. Jeśli otrzymaliście moje CV, musiałem zobaczyć możliwość podniesienia swoich umiejętności.',
    },
    {
        title: 'Gdzie widzisz siebie za 10 lat?',
        content:
            'Technologie webowe są najbardziej rozwijająca się dziedziną programowania. Nie wsposób przewidzieć kto, gdzie będzie się znajdował w tym czasie.',
    },
    {
        title: 'Jaką wartość wniesiesz do firmy?',
        content: 'Robię więcej niż ode mnie wymagają.',
    },
    {
        title: 'Czy interesuje się Pan czymś poza Front-endem?',
        content:
            'próbuję coś uczyć się z back-endu. Próbowałem przerobić tutorial z Ruby on Rails jednak w ogóle nie czuję tego języka, może tutorial do mnie nie trafił. Nie przekreślam tego języka. O wiele więcej do mnie przemawia Node.js.',
    },
];

const Faq = () => {
    const [faqInputValue, setFaqInputValue] = React.useState('');

    const handleInputChange = e => {
        setFaqInputValue(e.target.value);
    };

    const doesContainPhrase = (phrase, object) => {
        const keys = Object.keys(object);

        return keys.find(key =>
            object[key].toLowerCase().includes(phrase.toLowerCase())
        );
    };

    return (
        <Wrapper>
            <h1>O co chcesz zapytać?</h1>
            <Input
                name="faq"
                type="text"
                value={faqInputValue}
                onChange={handleInputChange}
                placeholder="np. Dlaczego chcesz u nas pracować?"
            />
            {dummyData
                .filter(item => doesContainPhrase(faqInputValue, item))
                .map(item => (
                    <div key={item.title}>
                        <p>{item.title}</p>
                        <p>{item.content}</p>
                        <hr />
                    </div>
                ))}
        </Wrapper>
    );
};

export default Faq;
