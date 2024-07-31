import { atomWithStorage } from 'jotai/utils';
import { THEME_MODE } from './types';
import { KeyLoacalStorage } from '../../constants';
import { atom } from 'jotai';
import { createTheme, responsiveFontSizes } from '@mui/material';
import { getThemeConfig, getThemedComponent } from './utils';
import { deepmerge } from '@mui/utils';

export const FontInter = '"Inter Tight", sans-serif';
export const FontRaleway = '"Raleway", sans-serif';

export const themeMode = atomWithStorage<THEME_MODE>(KeyLoacalStorage.THEME, 'light');
export const themeConfig = atom((get) => {
    const mode = get(themeMode);
    const _t = createTheme(getThemeConfig(mode));
    return responsiveFontSizes(deepmerge(_t, getThemedComponent(_t)));
});
