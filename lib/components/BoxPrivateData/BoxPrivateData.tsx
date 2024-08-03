import { Box, SxProps, Typography } from '@mui/material';
import { IconSpinLoading } from '../../icons';
import { ReactNode } from 'react';
import { useAccount } from 'wagmi';
import { ButtonConnectWallet } from '../ButtonConnectWallet';

export function BoxPrivateData({ children, iconLoadingProps, requiedLogin }: { requiedLogin: boolean; children?: ReactNode; iconLoadingProps?: SxProps }) {
    const { address: userAddress, isConnecting } = useAccount();

    if (isConnecting) {
        return (
            <Box>
                <IconSpinLoading sx={{ fontSize: '80px', ...iconLoadingProps }} />
            </Box>
        );
    }
    return (
        <Box>
            {userAddress ? (
                children
            ) : (
                <Box textAlign={'center'}>
                    <img src={'/images/LOGO_ICON_2D.png'} alt="logo auxo" style={{ width: '90%', maxWidth: '85px', height: 'auto' }} />
                    <Typography variant="body2" fontWeight={600} my={2}>
                        Connect wallet to continute!
                    </Typography>
                    <ButtonConnectWallet requiedLogin={requiedLogin} />
                </Box>
            )}
        </Box>
    );
}
