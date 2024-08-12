import BigNumberJS from 'bignumber.js';
import { SvgComponent } from 'crypto-token-icon';
import { ReactNode } from 'react';

export type APP_ENV = 'development' | 'production' | 'staging';
export type USER_ROLE = 'builder' | 'organizer' | 'investor';
declare global {
    interface ImportMetaEnv {
        readonly VITE_APP_ENV: APP_ENV;
        readonly VITE_APP_USER_ROLE: USER_ROLE;
        // more env variables...
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

export type BaseProviderProps = { children: ReactNode };

export type MenuSidebar = { icon: SvgComponent; title: string; url: string; children: { title: string; url: string }[] }[];

export interface FormatNumberOptions {
    /**
     * Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    fractionDigits?: number;
    /**
     * A fallback react tree to show when a number is invalid.
     * @default `---`
     */
    fallback?: ReactNode;
    /**
     * The string used to separate number.
     */
    delimiter?: string;
    /**
     * Allow zero after decimal point.
     * @default false
     */
    padZero?: boolean;
    /**
     * A string that will be appended to the beginning of the returned result.
     */
    prefix?: string;
    /**
     * A string that will be appended to the ending of the returned result.
     */
    suffix?: string;
    /**
     * return 0 if number < 0
     */
    onlyPositive?: boolean;
}

export type BigNumberish = BigNumberJS.Value;
