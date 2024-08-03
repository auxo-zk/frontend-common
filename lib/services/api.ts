import { clientStorage } from 'lib/constants';
import axios from 'axios';
import { apiUrl } from './apiUrl';

export async function verifyJwt(jwt?: string) {
    try {
        const _jwt = jwt || clientStorage.ACCESS_TOKEN();
        await axios.get(apiUrl.checkJwt, {
            headers: {
                Authorization: `Bearer ${_jwt}`,
            },
        });
        // console.log('verifyJwt', response);
        return true;
    } catch (error) {
        console.error('Error verifyJwt', error);
        return false;
    }
}
