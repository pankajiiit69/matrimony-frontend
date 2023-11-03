import React, {useState, useEffect} from 'react';
import MyCard from './MyCard';

export default function CardsContainer() {

    //const matchingProfiles = 

    const [matchingProfiles, setMatchingProfiles] = useState([]);

    useEffect(() => {
        setMatchingProfiles([{
            profileId: 'ABC',
            profilePhoto: 'dsdew',
            description: 'Profile Description'
        }, 
        {
            profileId: 'ABC2',
            profilePhoto: 'Photo',
            description: 'Second Profile Description'
        }])
    }, []);

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        Object.entries(matchingProfiles).map(mp =>{
                            return <div className="col" key={mp[1].profileId}>
                                <MyCard matchingProfile={mp[1]} />
                            </div>
                        })
                    }
                    {/* <div className="col">
                        <MyCard subTitle='Profile B' description='Groom B Profile'/>
                    </div>
                    <div className="col">
                        <MyCard thumbnail='t3' subTitle='Profile C' description='Groom C Profile'/>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
