import { alpha, Box, Button, Typography } from '@mui/material';
import { useId, useRef } from 'react';

export type InputBannerProps = {
    src?: string;
    alt?: string;
    onChange?: (file: FileList | null) => void;
    onClickRemove?: () => void;
};

export function InputBanner({ src, alt, onChange, onClickRemove }: InputBannerProps) {
    const imageInputRef = useRef<HTMLInputElement>(null);
    function changeInput(file: FileList | null) {
        onChange?.(file);
    }

    function handleRemove() {
        onClickRemove && onClickRemove();
        if (imageInputRef.current) {
            imageInputRef.current.value = '';
        }
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%', aspectRatio: '978 / 260', position: 'relative', overflow: 'hidden', borderRadius: '0px 0px 12px 12px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} style={{ width: '100%', height: 'auto', aspectRatio: '370/100', borderRadius: '0px 0px 12px 12px' }} />
                <input ref={imageInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => changeInput(e.target.files)} />
                <Box
                    sx={{
                        opacity: 0,
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        ':hover': { opacity: 1 },
                        backgroundColor: alpha('#001714', 0.8),
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        transition: 'opacity ease-in-out 0.2s',
                    }}
                >
                    <Typography variant="h5" color="#FFFFFF" fontWeight={600}>
                        Replace Banner Image
                    </Typography>
                    <Typography variant="h4" mt={1} color="#FFFFFF" fontWeight={300}>
                        Otimal dimesions 978 x 260px{' '}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: '#FFFFFF',
                                ':hover': {
                                    borderColor: '#FFFFFF',
                                },
                                mr: 1,
                            }}
                            onClick={handleRemove}
                        >
                            Remove
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ color: '#FFFFFF', border: 'none', backgroundColor: '#043E35' }}
                            onClick={() => {
                                imageInputRef.current?.click();
                            }}
                        >
                            Replace image
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
