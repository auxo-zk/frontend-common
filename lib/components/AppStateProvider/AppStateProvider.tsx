import { Provider } from 'jotai';
import { BaseProviderProps } from '../../types';
import { AuxoThemeProvider } from '../ThemeProvider';

export function AppStateProvider({ children }: BaseProviderProps) {
    return (
        <Provider>
            <AuxoThemeProvider>{children}</AuxoThemeProvider>
        </Provider>
    );
}
