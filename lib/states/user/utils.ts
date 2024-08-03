import { jwtDecode } from 'jwt-decode';
import { clientStorage } from '../../constants';

export function checkValidAccessToken(addressWallet: string, accesstoken?: string) {
    try {
        const _accessToken = accesstoken || clientStorage.ACCESS_TOKEN() || '';
        // console.log({ addressWallet, _accessToken });
        const dataDecode = jwtDecode(_accessToken);
        // console.log('dataDecode', dataDecode);
        return dataDecode.sub === addressWallet;
    } catch (error) {
        console.error('Error checkValidAccessToken', error);
        return false;
    }
}
