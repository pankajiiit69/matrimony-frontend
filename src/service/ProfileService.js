import Axios from 'axios';

const getMyProfile = async (authToken) => {

    console.info('getMyProfile API called');
    const response = await Axios.get('http://localhost:3002/profile/getMyProfile', {
        headers: {
            Authorization: authToken
        }
    });
    return response.data;
}

export { getMyProfile };

