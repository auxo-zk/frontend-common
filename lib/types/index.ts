import { SvgComponent } from 'crypto-token-icon';
import { ReactNode } from 'react';

export type BaseProviderProps = { children: ReactNode };

export type MenuSidebar = { icon: SvgComponent; title: string; url: string; children: { title: string; url: string }[] }[];
