import React, { useState, useEffect } from 'react';
import MyCard from './MyCard';
import Axios from 'axios';
import { UserAuthContext } from '../context/UserAuthContext';

export default function CardsContainer() {

    const { auth } = React.useContext(UserAuthContext);

    const [matchingProfiles, setMatchingProfiles] = useState({ matchSent: [], matchRcvd: [] });
    const [feedProfiles, setFeedProfiles] = useState([]);

    useEffect(() => {

        Axios.get('http://localhost:3002/profile/getMatchProfiles', {
            headers: {
                Authorization: auth?.authToken
            }
        }).then(async resp => {
            const { matchSent, matchRcvd } = resp.data;

            Axios.get('http://localhost:3002/profile/searchProfiles', {
                headers: {
                    Authorization: auth?.authToken
                }
            }).then(res => {
                let searchedProfiles = res.data;
                searchedProfiles.filter(sp => {
                    return matchSent.some(m => m.email === sp.email);

                    /* matchSent.concat(matchRcvd).some(p => {
                        if(p.email===sp.email){
                            sp.isConnected = true;
                            sp.status = 'Connected';
                            return true
                        }else{
                            return false;
                        }
                    }); */

                });
                setMatchingProfiles(resp.data);
                setFeedProfiles(searchedProfiles);
            }).catch(error => {
                console.error(error.message);
            });
        }).catch(error => {
            console.error(error.message);
        })

        /* setMatchingProfiles([{
            profileId: 'ABC',
            profilePhoto: 'dsdew',
            description: 'Profile Description'
        }, 
        {
            profileId: 'ABC2',
            profilePhoto: 'Photo',
            description: 'Second Profile Description'
        }]) */
    }, []);


    const arr = ['a', 'b'];

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                {matchingProfiles?.matchSent.length>0 && <>
                    <div>Sent Match Requests</div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            Object.entries(matchingProfiles.matchSent).map(mp => {
                                return <div className="col" key={mp[0]}>
                                    <MyCard profile={mp[1]} status='Sent' authToken={auth?.authToken} />
                                </div>
                            })
                        }
                    </div>
                </>
                }
                {matchingProfiles?.matchRcvd?.length >0 && <>
                    <div>Received Match Requests</div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            Object.entries(matchingProfiles.matchRcvd).map(mp => {
                                return <div className="col" key={mp[0]}>
                                    <MyCard profile={mp[1]} status='Recieved' authToken={auth?.authToken} />
                                </div>
                            })
                        }
                    </div></>
                }
                {feedProfiles && <>
                    <div>Matches Found</div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            Object.entries(feedProfiles).map(mp => {
                                return <div className="col" key={mp[0]}>
                                    <MyCard profile={mp[1]} authToken={auth?.authToken} />
                                </div>
                            })
                        }
                    </div></>
                }
            </div>
        </div>
    );
}
