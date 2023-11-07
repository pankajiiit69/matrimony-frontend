import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { UserAuthContext } from '../context/UserAuthContext';

export default function ProtectedComponent({ component: Component }) {
    const {auth} = React.useContext(UserAuthContext);
    let navigate = useNavigate();

    React.useEffect(() => {
        if (!auth?.authToken) {
            navigate('/login');
        }
    }, []);
    return (
        auth?.authToken ? <Component/> : <></>
    );
}



