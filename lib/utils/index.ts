export * from './format';

import { toast } from 'react-toastify';

export function isNumeric(num: any) {
    return !isNaN(num) && !isNaN(parseFloat(num));
}

export function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    toast.success('Copied!');
}

export const sleep = (milisecond: number) => new Promise((resolve) => setTimeout(resolve, milisecond));
