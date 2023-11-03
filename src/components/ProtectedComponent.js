import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

export default function ProtectedComponent({ authToken, setAuthToken, component: Component }) {
    let navigate = useNavigate();

    React.useEffect(() => {
        if (!authToken) {
            navigate('/login');
        }
    }, []);
    return (
        authToken ? <Component authToken={authToken} /> : <></>
    );
}
