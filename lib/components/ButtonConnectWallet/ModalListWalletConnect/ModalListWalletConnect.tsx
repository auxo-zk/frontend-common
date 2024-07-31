import { Box, Typography } from '@mui/material';
import { useModalFunction } from '../../../states/modal';
import { toast } from 'react-toastify';
import { Connector, useChainId, useConnect } from 'wagmi';
import { infoChain, infoWallet } from '../../../states/wallet';
import { ErrorExeTransaction } from '../../ErrorExeTransaction';
import { IconSpinLoading } from '../../../icons';

export default function ModalListWalletConnect() {
    const { connectAsync, connectors, isPending } = useConnect();
    const { closeModal } = useModalFunction();
    const chainIdConnected = useChainId();
    const infoChainConnected = infoChain[chainIdConnected];
    const ChainIcon = infoChainConnected.logoChain;

    const handleConnect = async (connector: Connector) => {
        try {
            await connectAsync({ connector });
            closeModal();
        } catch (error) {
            toast.error(<ErrorExeTransaction error={error} />, { autoClose: 4000 });
            console.error('Connection failed:', error);
        }
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', placeItems: 'center', px: 2, justifyContent: 'center', mb: 1 }}>
                <ChainIcon sx={{ fontSize: '32px', mr: 1 }} />
                <Typography variant="body2" fontWeight={600} textAlign={'center'} sx={{ display: 'block', fontSize: '25px' }}>
                    {infoChainConnected.name}
                </Typography>
            </Box>
            {isPending ? (
                <Box mt={2} mb={4}>
                    <IconSpinLoading sx={{ fontSize: '120px' }} />
                </Box>
            ) : (
                <Box mt={2} mb={4}>
                    {connectors.map((connector, index) => {
                        const walletInfo = infoWallet[connector.id];
                        if (walletInfo) {
                            const LogoWalet = walletInfo.logoWallet;
                            return (
                                <Box
                                    key={connector.id + index}
                                    sx={{
                                        borderRadius: '8px',
                                        px: 2.5,
                                        display: 'flex',
                                        gap: 1.5,
                                        py: 1,
                                        mb: 1,
                                        placeItems: 'center',
                                        cursor: 'pointer',
                                        '&:hover': { bgcolor: 'primary.light', '& > .wallet-name': { color: '#fff' } },
                                        transition: 'background-color 0.2s',
                                        bgcolor: '#2c978f1a',
                                    }}
                                    onClick={() => handleConnect(connector)}
                                >
                                    <LogoWalet sx={{ fontSize: '24px' }} />
                                    <Typography className="wallet-name" variant="body2" fontWeight={600} sx={{ transition: 'color 0.2s' }}>
                                        {walletInfo.name}
                                    </Typography>
                                </Box>
                            );
                        }
                        return <Box key={connector.id + index}></Box>;
                    })}
                </Box>
            )}
        </Box>
    );
}
