import { Box, SxProps } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

export function Card({
    children,
    sx,
    avatar,
    banner,
    subChildren,
    sxBanner,
    altAvatar,
    altBanner,
}: {
    children: ReactNode;
    sx?: SxProps;
    avatar?: string;
    banner?: string;
    altAvatar?: string;
    altBanner?: string;
    subChildren?: ReactNode;
    sxBanner?: CSSProperties;
}) {
    return (
        <Box
            sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                '&:hover': { boxShadow: 2 },
                transition: 'box-shadow 0.3s',
                bgcolor: 'background.secondary',
                height: '100%',
                flexDirection: 'column',
                ...sx,
            }}
        >
            <img src={banner || '/images/default_banner.png'} alt={'banner' + ' ' + altBanner} style={{ width: '100%', height: 'auto', aspectRatio: '3/1', ...sxBanner }} />

            <Box sx={{ px: 3, position: 'relative', zIndex: 1 }}>
                <img
                    src={avatar || '/images/default_avatar.png'}
                    alt={'avatar' + ' ' + altAvatar}
                    style={{ position: 'absolute', width: '66px', height: '66px', top: 0, transform: 'translatey(-50%)', borderRadius: '50%', objectFit: 'cover', border: '4px solid white' }}
                />
            </Box>
            <Box sx={{ px: 3, position: 'relative', minHeight: '100px', pt: '33px', pb: 3 }}>{children}</Box>
            {subChildren}
        </Box>
    );
}
