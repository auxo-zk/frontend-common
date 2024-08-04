import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

export function BoxIntroducePage({ children, thumnail, title }: { thumnail: string; title: string; children?: ReactNode }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Box sx={{ width: '100%' }}>
                <Typography variant="h1" textTransform={'uppercase'} maxWidth={'614px'}>
                    {title}
                </Typography>

                {children}
            </Box>

            <Box sx={{ display: { xs: 'none', xsm: 'block' } }}>
                <img src={thumnail} alt="auxo thumbnail" style={{ maxWidth: '256px', height: 'auto', width: '100%' }} />
            </Box>
        </Box>
    );
}
