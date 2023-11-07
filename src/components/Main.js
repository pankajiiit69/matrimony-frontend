import React from 'react';
import Section from './Section';
import CardsContainer from './CardsContainer';
import Header from './Header';
import { UserAuthContext } from '../context/UserAuthContext';

function Main({ authToken }) {
    const { auth } = React.useContext(UserAuthContext);

    return (
        <main >
            <Section />
            <CardsContainer />
        </main >
    );
}

export default Main;
