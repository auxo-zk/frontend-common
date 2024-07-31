import { AssetInfo } from '../types';

export function isNativeToken(assetInfo: AssetInfo) {
    if ('native_token' in assetInfo) {
        return true;
    }
    return false;
}
