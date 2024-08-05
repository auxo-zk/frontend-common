import { Box, SxProps, Typography } from '@mui/material';
import { imagePath } from 'lib/constants';

export type TDataStackTeamMember = {
    urlImage: string;
    name: string;
    desc: string;
    sx?: SxProps;
};
export function StackTeamMember(props: TDataStackTeamMember) {
    return (
        <Box sx={{ cursor: 'pointer', display: 'flex', placeItems: 'center', gap: 2, ...props.sx }}>
            <img src={props.urlImage || imagePath.DEFAULT_AVATAR} alt="user member avatar" style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
            <Box>
                <Typography color={'primary.main'} fontWeight={500}>
                    {props.name}
                </Typography>
                <Typography variant="body2">{props.desc}</Typography>
            </Box>
        </Box>
    );
}
