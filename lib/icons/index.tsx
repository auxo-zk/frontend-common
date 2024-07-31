import { SvgIcon } from '@mui/material';
import { SvgComponent } from 'crypto-token-icon';

export const IconWallet: SvgComponent = (props) => {
    return (
        <SvgIcon {...props} width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
                d="M18.8856 10.5189V12.2356C18.8856 12.7023 18.5023 13.0856 18.0273 13.0856H16.4189C15.5189 13.0856 14.6939 12.4273 14.6189 11.5273C14.5689 11.0023 14.7689 10.5106 15.1189 10.1689C15.4273 9.85228 15.8523 9.66895 16.3189 9.66895H18.0273C18.5023 9.66895 18.8856 10.0523 18.8856 10.5189Z"
                fill="white"
            />
            <path
                d="M13.3687 11.6353C13.2937 10.7603 13.6104 9.90195 14.2437 9.27695C14.7771 8.73529 15.5188 8.41862 16.3187 8.41862H16.7937C17.0271 8.41862 17.2187 8.22695 17.1854 7.99362C16.9604 6.37695 15.5604 5.12695 13.8854 5.12695H5.55208C3.71042 5.12695 2.21875 6.61862 2.21875 8.46029V14.2936C2.21875 16.1353 3.71042 17.627 5.55208 17.627H13.8854C15.5687 17.627 16.9604 16.377 17.1854 14.7603C17.2187 14.527 17.0271 14.3353 16.7937 14.3353H16.4188C14.8354 14.3353 13.5021 13.152 13.3687 11.6353ZM11.3854 9.91862H6.38542C6.04375 9.91862 5.76042 9.64362 5.76042 9.29362C5.76042 8.94362 6.04375 8.66862 6.38542 8.66862H11.3854C11.7271 8.66862 12.0104 8.95195 12.0104 9.29362C12.0104 9.63529 11.7271 9.91862 11.3854 9.91862Z"
                fill="white"
            />
            <path
                d="M12.3936 3.31862C12.6103 3.54362 12.4186 3.87695 12.102 3.87695H5.57697C4.66863 3.87695 3.81863 4.14362 3.1103 4.60195C2.7853 4.81029 2.34363 4.58529 2.50197 4.22695C2.96863 3.13529 4.0603 2.37695 5.31863 2.37695H10.002C10.9686 2.37695 11.827 2.71862 12.3936 3.31862Z"
                fill="white"
            />
        </SvgIcon>
    );
};

export const IconMenuExplorer: SvgComponent = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 24 24" fill="none">
            <path d="M11.1111 20.5333L4.88889 16.9556C4.60741 16.7926 4.38889 16.5778 4.23333 16.3111C4.07778 16.0444 4 15.7481 4 15.4222V8.35556C4 8.02963 4.07778 7.73333 4.23333 7.46667C4.38889 7.2 4.60741 6.98519 4.88889 6.82222L11.1111 3.24444C11.3926 3.08148 11.6889 3 12 3C12.3111 3 12.6074 3.08148 12.8889 3.24444L19.1111 6.82222C19.3926 6.98519 19.6111 7.2 19.7667 7.46667C19.9222 7.73333 20 8.02963 20 8.35556V15.4222C20 15.7481 19.9222 16.0444 19.7667 16.3111C19.6111 16.5778 19.3926 16.7926 19.1111 16.9556L12.8889 20.5333C12.6074 20.6963 12.3111 20.7778 12 20.7778C11.6889 20.7778 11.3926 20.6963 11.1111 20.5333ZM11.1111 12.4V18.4889L12 19L12.8889 18.4889V12.4L18.2222 9.31111V8.37778L17.2667 7.82222L12 10.8667L6.73333 7.82222L5.77778 8.37778V9.31111L11.1111 12.4Z" />
        </SvgIcon>
    );
};

export const IconUser: SvgComponent = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 24 24" fill="none">
            <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4Z" />
        </SvgIcon>
    );
};

export const IconSpinLoading: SvgComponent = (props) => {
    return (
        <SvgIcon {...props} sx={{ mx: 'auto', display: 'block', shapeRendering: 'auto', color: 'primary.main', ...props.sx }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(30 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(60 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(90 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(120 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(150 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(180 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(210 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(240 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(270 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(300 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
                </rect>
            </g>
            <g transform="rotate(330 50 50)">
                <rect x="45" y="8.5" rx="5" ry="5.5" width="10" height="11">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
                </rect>
            </g>
        </SvgIcon>
    );
};
