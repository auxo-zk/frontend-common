export const KeyLocalStorage = {
    THEME: 'theme',
    ACCESS_TOKEN: 'access_token',
};

export const clientStorage = {
    THEME: () => localStorage.getItem(KeyLocalStorage.THEME) || '',
    ACCESS_TOKEN: () => localStorage.getItem(KeyLocalStorage.ACCESS_TOKEN) || '',
};
