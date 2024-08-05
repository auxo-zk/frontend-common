import { ImageRounded, InsertDriveFile } from '@mui/icons-material';
import { SvgComponent } from 'crypto-token-icon';

export const KeyLocalStorage = {
    THEME: 'theme',
    ACCESS_TOKEN: 'access_token',
};

export const clientStorage = {
    THEME: () => localStorage.getItem(KeyLocalStorage.THEME) || '',
    ACCESS_TOKEN: () => localStorage.getItem(KeyLocalStorage.ACCESS_TOKEN) || '',
};

export const fundingOption = ['Private Grant', 'Public Funding', 'Unknow'];

export const fileIcon: { [k: string]: SvgComponent } = {
    'image/jpeg': ImageRounded,
    'image/webp': ImageRounded,
    'image/png': ImageRounded,
    'image/svg': ImageRounded,
    unknown: InsertDriveFile,
};

export * from './imagePath';
