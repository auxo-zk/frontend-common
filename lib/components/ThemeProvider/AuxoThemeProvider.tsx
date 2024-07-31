import { ThemeProvider } from '@mui/material';
import { useThemeConfigValue } from '../../states/theme/hooks';
import React from 'react';
import { BaseProviderProps } from '../../types';

export function AuxoThemeProvider({ children }: BaseProviderProps) {
    const themeConfig = useThemeConfigValue();
    return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
}
