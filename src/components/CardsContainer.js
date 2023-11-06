import React, {useState, useEffect} from 'react';
import MyCard from './MyCard';
import Axios from 'axios';

export default function CardsContainer({authToken}) {

    //const matchingProfiles = 


    const [matchingProfiles, setMatchingProfiles] = useState([]);


    useEffect(() => {

        Axios.get('http://localhost:3002/profile/getMyProfile', {
            headers: {
                Authorization: authToken
            }
        }).then(resp =>{
            const matchIds = resp.data.matches;
            Axios.get('http://localhost:3002/profile/getAllProfile', {
                headers: {
                    Authorization: authToken
                }
            }).then(resp =>{
                resp.data.forEach(mp => {mp.isConnected = (matchIds.includes(mp._id))})
                setMatchingProfiles(resp.data);
            }).catch(error=>{
                console.error(error.message);
            })

        }).catch(error=>{
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

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        Object.entries(matchingProfiles).map(mp =>{
                            return <div className="col" key={mp[0]}>
                                <MyCard matchingProfile={mp[1]} authToken={authToken} />
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
