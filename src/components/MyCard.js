import React, {useState} from 'react';
import Axios from 'axios';

export default function MyCard({ profile, status, authToken }) {

    const [connectRequest, setConnectRequest] = useState({
        matchProfileId: profile._id,
        status: "PENDING",
        isVerified: true
    });

    console.log(`PRINTING ${profile.fullname}, status:${status}`);

    const handleConnectRequest = (e) => {
        Axios.post('http://localhost:3002/profile/matchRequest',
        connectRequest,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authToken
                }
            })
            .then((resp) => {
                //console.log(resp);
                console.info('Connect Request Sent successfully.');
                //setFlow('Updated');
                //setLoginToken(resp.data.token);
            }).catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{profile.fullname}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{profile.gender}</h6>
                <p className="card-text">{profile.address}</p>
                <p>
                {!status && 
                    <button type="button" onClick={handleConnectRequest} className="btn btn-primary">Connect</button> }
                {status && 
                    <button disabled type="button" className="btn btn-secondary">{status}</button> }
                    <button type="button" className="btn btn-danger">Ignore</button>
                </p>
            </div>
        </div>
    );
}
