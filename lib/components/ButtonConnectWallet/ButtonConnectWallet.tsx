import { Box, Button, ClickAwayListener, Divider, MenuItem, Typography } from '@mui/material';
import { useModalFunction } from '../../states/modal';
import { useEffect, useState } from 'react';
import { useAccount, useChainId, useConnections, useDisconnect } from 'wagmi';
import ModalListWalletConnect from './ModalListWalletConnect/ModalListWalletConnect';
import { IconWallet } from '../../icons';
import { Check, CheckCircleOutlineRounded, CopyAll, Help, HourglassEmpty, LoginRounded, LogoutOutlined } from '@mui/icons-material';
import { rotateInfinity } from '../../animations';
import { infoChain, infoWallet } from '../../states/wallet';
import { copyTextToClipboard, formatAddress } from '../../utils';
import { useCheckLogin, useSetAddressWallet } from 'lib/states/user/state';

export function ButtonConnectWallet({ requiedLogin }: { requiedLogin: boolean }) {
    const { isConnecting, address, isReconnecting } = useAccount();

    if (isConnecting) return <ConnectingButton />;
    if (address) return <ConnectedButton address={address} requiedLogin={requiedLogin} />;
    return <NotconnectedButton />;
}
function NotconnectedButton() {
    const { openModal } = useModalFunction();
    return (
        <>
            <Button size={'large'} variant="contained" onClick={() => openModal({ title: 'Choose Wallet', content: <ModalListWalletConnect />, modalProps: { maxWidth: 'xs' } })}>
                <Box component={'span'} sx={{ display: { sm: 'block', xs: 'none' } }}>
                    Connect Wallet
                </Box>
                <IconWallet fontSize="large" sx={{ display: { xs: 'block', sm: 'none' } }} />
            </Button>
        </>
    );
}
function ConnectingButton() {
    return (
        <Box>
            <Button
                size={'large'}
                variant="contained"
                disabled
                startIcon={
                    <HourglassEmpty
                        sx={{
                            fontSize: '17px',
                            animation: rotateInfinity,
                        }}
                    />
                }
            >
                Connecting...
            </Button>
        </Box>
    );
}

function ConnectedButton({ address, requiedLogin }: { address: string; requiedLogin: boolean }) {
    const setAddress = useSetAddressWallet();
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const { disconnectAsync } = useDisconnect();
    const chainIdConnected = useChainId();
    const infoChainConnected = infoChain[chainIdConnected];

    const connecttions = useConnections();

    const ChainIcon = infoChainConnected?.logoChain;
    const LogoWallet = infoWallet[connecttions[0]?.connector?.id]?.logoWallet || Help;

    const handleClick = () => {
        setOpen((prev) => !prev);
        setCopied(false);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    function _copyText(_address: string) {
        copyTextToClipboard(_address);
        setCopied(true); // Copy success
    }

    async function clickDisconnect() {
        await disconnectAsync();
        window.location.reload();
    }

    useEffect(() => {
        setAddress(address);
        // setAddress('B62qmRKcdXqHe1SxukHQtWUHyMX3NMGCkvHnHao3VsdoBMNRDkQq6na');
    }, [address]);

    useEffect(() => {
        if (open) {
            setCopied(false);
        }
    }, [open]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
                <Button onClick={handleClick} size={'large'} variant="contained" sx={{ flexDirection: 'column', gap: 0.3 }}>
                    <Box component={'span'} sx={{ display: { sm: 'flex', xs: 'none' } }}>
                        {formatAddress(address)}
                    </Box>
                    {requiedLogin && <BoxCheckLogin address={address} />}
                    <IconWallet fontSize="large" sx={{ display: { sm: 'none', xs: 'block' } }} />
                </Button>
                {open ? (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 'calc(100% + 5px)',
                            right: '0',
                            width: '100%',
                            minWidth: '200px',
                            bgcolor: 'background.paper',
                            borderRadius: '16px',
                            boxShadow: 4,
                            py: 2,
                        }}
                    >
                        <Box sx={{ display: 'flex', placeItems: 'center', px: 2, justifyContent: 'center', mb: 1 }}>
                            <ChainIcon sx={{ fontSize: '25px', mr: 1 }} />
                            <Typography variant="body2" fontWeight={600} textAlign={'center'} sx={{ display: 'block' }}>
                                {infoChainConnected?.name}
                            </Typography>
                        </Box>
                        <Divider sx={{ mb: 2 }} />
                        <Box sx={{ display: 'flex', placeItems: 'center', px: 2, mt: 2 }}>
                            <Box mr={'auto'} textAlign={'left'}>
                                <Typography variant="body3" color={'text.secondary'}>
                                    Wallet
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                    {infoWallet[connecttions[0]?.connector?.id]?.name}
                                </Typography>
                            </Box>
                            <LogoWallet sx={{ fontSize: '24px' }} />
                        </Box>

                        <MenuItem sx={{ mt: 1, flexDirection: 'column', placeItems: 'start' }} onClick={() => _copyText(address)}>
                            <Typography variant="body3" color={'text.secondary'}>
                                Account address
                            </Typography>
                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                                <Typography variant="body2" fontWeight={600}>
                                    {formatAddress(address, 5, 4)}
                                </Typography>
                                {copied ? <Check sx={{ fontSize: '20px' }} /> : <CopyAll sx={{ fontSize: '20px' }} />} {/* Thay đổi icon dựa trên trạng thái */}
                            </Box>
                        </MenuItem>
                        {requiedLogin ? <MenuItemLogin /> : null}
                        <MenuItem sx={{ mt: 1 }} onClick={() => clickDisconnect()}>
                            <Typography variant="body2" color={'text.primary'} fontWeight={500}>
                                Disconnect
                            </Typography>
                            <LogoutOutlined sx={{ ml: 'auto' }} />
                        </MenuItem>
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    );
}

export function BoxCheckLogin({ address }: { address: string }) {
    const [value] = useCheckLogin();
    return (
        <Box component={'span'} sx={{ display: { sm: 'flex', xs: 'none' }, placeItems: 'baseline', justifyContent: 'end', width: '100%' }}>
            {value.state === 'loading' ? (
                <Typography variant="body3" component={'span'} sx={{ fontSize: '10px' }}>
                    Check Login...
                </Typography>
            ) : (
                <>
                    {value.state == 'hasData' ? (
                        <>
                            <Typography variant="body3" component={'span'} sx={{ fontSize: '10px' }}>
                                {value.data ? 'Logged' : 'Not logged in'}
                            </Typography>
                            <Box component={'span'} sx={{ display: 'block', height: '6px', width: '6px', bgcolor: value.data ? 'lightgreen' : 'red', borderRadius: '50%', ml: 0.5 }}></Box>
                        </>
                    ) : (
                        <>
                            <Typography variant="body3" component={'span'} sx={{ fontSize: '10px' }}>
                                Error
                            </Typography>
                            <Box component={'span'} sx={{ display: 'block', height: '6px', width: '6px', bgcolor: 'red', borderRadius: '50%', ml: 0.5 }}></Box>
                        </>
                    )}
                </>
            )}
        </Box>
    );
}

function MenuItemLogin() {
    const [value] = useCheckLogin();

    async function login() {}

    if (value.state === 'loading') {
        return (
            <MenuItem sx={{ mt: 1 }}>
                <Typography variant="body2" color={'text.primary'} fontWeight={500}>
                    Check acount login...
                </Typography>
            </MenuItem>
        );
    }
    if (value.state === 'hasData') {
        if (value.data) {
            return (
                <Box sx={{ display: 'flex', placeItems: 'center', px: 2, mt: 2 }}>
                    <Typography variant="body2" color={'text.primary'} fontWeight={500}>
                        Wallet logged in
                    </Typography>
                    <CheckCircleOutlineRounded sx={{ ml: 'auto' }} color="success" />
                </Box>
            );
        }
        return (
            <MenuItem sx={{ mt: 1 }} onClick={() => login()}>
                <Typography variant="body2" color={'text.primary'} fontWeight={500}>
                    Login
                </Typography>
                <LoginRounded sx={{ ml: 'auto' }} />
            </MenuItem>
        );
    }
    return <></>;
}
