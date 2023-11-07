import React, { useState, useEffect } from 'react';
import ViewProfile from './ViewProfile';
import CreateProfile from './CreateProfile';
import UpdateProfile from './UpdateProfile';
import Axios from 'axios';
import { UserAuthContext } from '../context/UserAuthContext';

export default function MyProfile() {
    const {auth} = React.useContext(UserAuthContext);

    const [flow, setFlow] = useState('View');

    const [profile, setProfile] = useState();
    useEffect(() => {
        Axios.get('http://localhost:3002/profile/getMyProfile', {
            headers: {
                Authorization: auth?.authToken
            }
        }).then(resp =>{
            setProfile(resp.data);
        }).catch(error=>{
            console.error(error.message);
        })

        /* (async () => {
            const profile = await getMyProfile(authToken);
            setProfile(profile);
        })(); */
    }, [flow]);

    return (
        <>
            {profile
                ? flow === 'Update'
                    ? <UpdateProfile setFlow={setFlow} profile={profile} authToken={auth?.authToken} />
                    : <ViewProfile setFlow={setFlow} profile={profile} />
                : <CreateProfile setFlow={setFlow} profile={profile} authToken={auth?.authToken} />}
        </>
    );
}
