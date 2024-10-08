export * from './format';

import BigNumber from 'bignumber.js';
import { toast } from 'react-toastify';
import bs58 from 'bs58';
import { Buffer } from 'buffer';
import { Address } from 'viem';

export function isNumeric(num: any) {
    return !isNaN(num) && !isNaN(parseFloat(num));
}

/**
 * Cast a value to BigNumber instance.
 * @param value - The value
 * @returns An instance of BigNumber or NaN if value isn't a valid number.
 */
export function BN(value: any): BigNumber {
    return new BigNumber(value);
}

export function DEC(value: string | number): BigNumber {
    return BN(10).pow(value);
}

export function getErrorMessage(error: any): string | undefined {
    return error ? error.reason ?? error.message : undefined;
}

export function handleError(error: any, notify?: (msg: string) => void) {
    const msg = getErrorMessage(error);
    if (msg && typeof notify === 'function') {
        notify(msg);
    }
}

export function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    toast.success('Copied!');
}

export const sleep = (milisecond: number) => new Promise((resolve) => setTimeout(resolve, milisecond));

export function detectMobile() {
    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

export function throttle(callback: (...args: any[]) => any, delay: number = 1000): (...args: any[]) => void {
    let shouldWait: boolean = false;

    return (...args: any[]) => {
        if (shouldWait) return;

        callback(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);
    };
}

export function base58ToHex(base58String: string): Address {
    // Decode the Base58 string to a byte array
    const decoded = bs58.decode(base58String);
    // Convert the byte array to a hexadecimal string
    const hexString = `0x${Buffer.from(decoded).toString('hex').slice(4)}`;
    return hexString as Address;
}
