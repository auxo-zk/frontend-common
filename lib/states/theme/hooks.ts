import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { themeConfig, themeMode } from './state';

export const useThemeConfig = () => useAtom(themeConfig);
export const useThemeConfigValue = () => useAtomValue(themeConfig);

export const useThemeMode = () => useAtom(themeMode);
export const useThemeModeValue = () => useAtomValue(themeMode);
export const useSetThemeMode = () => useSetAtom(themeMode);
