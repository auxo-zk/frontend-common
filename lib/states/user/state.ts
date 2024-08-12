import { atom, useAtom, useSetAtom } from 'jotai';
import { atomWithStorage, loadable } from 'jotai/utils';
import { KeyLocalStorage } from 'lib/constants';
import { checkValidAccessToken } from './utils';
import { verifyJwt } from 'lib/services';

export const accessToken = atomWithStorage(KeyLocalStorage.ACCESS_TOKEN, '');
export const addressWallet = atom<string>('');

export const validLogin = atom(async (get) => {
    const _accessToken = get(accessToken);
    const _addressWallet = get(addressWallet);
    if (!_addressWallet) return false;
    if (checkValidAccessToken(_addressWallet, _accessToken)) {
        if (await verifyJwt(_accessToken)) {
            return { addressWallet: _addressWallet, accessToken: _accessToken };
        }
    }
    return false;
});

export const useSetAddressWallet = () => useSetAtom(addressWallet);
export const useCheckLogin = () => useAtom(loadable(validLogin));

export const useSetAccessToken = () => useSetAtom(accessToken);
