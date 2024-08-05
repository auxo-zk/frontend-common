import { Box, Typography } from '@mui/material';
import { AddAPhotoRounded } from '@mui/icons-material';
import { imagePath } from 'lib/constants';

export type TAvatarProps = {
    src?: string;
    alt?: string;
    size: number;
    onChange?: (file: FileList | null) => void;
    editable?: boolean;
};
export function Avatar({ alt = 'user avatar', src, size, onChange, editable = true }: TAvatarProps) {
    function changeInput(file: FileList | null) {
        onChange?.(file);
    }
    return (
        <Box
            sx={{
                width: `${size}px`,
                height: `${size}px`,
                minWidth: `${size}px`,
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                    '.bg-avatar': { opacity: 1 },
                },
            }}
        >
            <img src={src || imagePath.DEFAULT_AVATAR} alt={alt} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            {editable && (
                <>
                    <Box
                        className="bg-avatar"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            bgcolor: '#000000a1',
                            opacity: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'opacity 0.3s',
                        }}
                    >
                        <AddAPhotoRounded sx={{ color: 'white', mb: 1 }} fontSize="large" />
                        <Typography color={'white'} variant="body2">
                            Change Avatar
                        </Typography>
                    </Box>
                    <input
                        onChange={(e) => changeInput(e.target.files)}
                        type="file"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', cursor: 'pointer', opacity: 0 }}
                    />
                </>
            )}
        </Box>
    );
}
