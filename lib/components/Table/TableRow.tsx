import { Box, Grid, SxProps } from '@mui/material';
import { ReactNode } from 'react';

export function TableRow({ children, activeHover = false, sx }: { children: ReactNode; activeHover?: boolean; sx?: SxProps }) {
    return (
        <Box sx={{ px: { xs: 1, xsm: 2, sm: 3, md: 4 }, '&:hover': { bgcolor: activeHover ? 'background.secondary' : '' } }}>
            <Grid container sx={{ height: '56px', placeItems: 'center', ...sx }}>
                {children}
            </Grid>
        </Box>
    );
}
