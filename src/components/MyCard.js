import React from 'react';

export default function MyCard({ matchingProfile }) {

    console.log('PRINTING' + JSON.stringify(matchingProfile.profileId));

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{matchingProfile.profileId}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{matchingProfile.profilePhoto}</h6>
                <p className="card-text">{matchingProfile.description}</p>
                <p>
                    <button type="button" className="btn btn-primary">Connect</button>
                    <button type="button" className="btn btn-danger">Ignore</button>
                </p>
            </div>
        </div>
    );
}
