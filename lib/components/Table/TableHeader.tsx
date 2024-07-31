import { Box, Grid, GridProps } from '@mui/material';

export function TableHeader(props: GridProps) {
    return (
        <Box sx={{ borderRadius: '12px 12px 0px 0px', background: '#F8F8F8', px: { xs: 1, xsm: 2, sm: 3, md: 4 }, position: 'sticky', top: 0 }}>
            <Grid {...props} container sx={{ height: '56px', placeItems: 'center', background: '#F8F8F8', ...props.sx }}>
                {props.children}
            </Grid>
        </Box>
    );
}
