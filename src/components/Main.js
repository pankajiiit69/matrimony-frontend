import React from 'react';
import Section from './Section';
import CardsContainer from './CardsContainer';
import Header from './Header';

function Main({authToken}) {
    return (
        <main >
            <Section/>
            <CardsContainer />
        </main >
    );
}

export default Main;
