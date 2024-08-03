import { Box, Button, ClickAwayListener, Divider, MenuItem, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useChainId, useSwitchChain } from 'wagmi';
import { HourglassEmpty } from '@mui/icons-material';
import { rotateInfinity } from '../../animations/rotate';
import { AppChainId, infoChain } from '../../states/wallet';

export function ButtonSelectChain() {
    const [open, setOpen] = React.useState(false);
    const chainIdConnected = useChainId();
    const { chains, switchChain, isPending } = useSwitchChain();

    const IconChainConnected = infoChain[chainIdConnected]?.logoChain;

    const onSwitchChain = (item: number) => {
        switchChain({ chainId: item as AppChainId });
        handleClickAway();
    };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative', mr: 1 }}>
                {isPending ? (
                    <Button
                        startIcon={
                            <HourglassEmpty
                                sx={{
                                    fontSize: '17px',
                                    animation: rotateInfinity,
                                }}
                            />
                        }
                        variant="outlined"
                    >
                        <Box component={'span'} sx={{ display: { sm: 'block', xs: 'none' } }}>
                            Switching...
                        </Box>
                    </Button>
                ) : (
                    <Button size="large" onClick={handleClick} variant="outlined" endIcon={<ExpandMoreIcon sx={{ fontSize: '24px' }} />}>
                        <IconChainConnected sx={{ fontSize: '24px', mr: { xs: 0, sm: 1 } }} />
                        <Box component={'span'} sx={{ display: { sm: 'block', xs: 'none' } }}>
                            {infoChain[chainIdConnected]?.name}
                        </Box>
                    </Button>
                )}

                {open ? (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 'calc(100% + 5px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '100%',
                            minWidth: '180px',
                            bgcolor: 'background.paper',
                            borderRadius: '16px',
                            boxShadow: 4,
                            py: 2,
                        }}
                    >
                        <Typography sx={{ textAlign: 'center', mb: 1 }} variant="body2" fontWeight={600}>
                            Select a network
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        {chains.map((chain, index) => {
                            if (chain.id !== chainIdConnected) {
                                const MenuIcon = infoChain[chain.id as AppChainId]?.logoChain;

                                return (
                                    <MenuItem
                                        sx={{ mb: 0.5 }}
                                        key={index + '' + chain.id}
                                        onClick={() => {
                                            onSwitchChain(chain.id);
                                        }}
                                    >
                                        <MenuIcon sx={{ fontSize: '24px', mr: 1 }} />
                                        <Typography>{infoChain[chain.id as AppChainId]?.name || 'Unknow'}</Typography>
                                    </MenuItem>
                                );
                            }
                            return null;
                        })}
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    );
}
