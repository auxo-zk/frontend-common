import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { AppStateProvider } from '../AppStateProvider';
import { MenuSidebar } from '../../types';
import { WalletProvider } from '../WalletProvider';
import { ModalCustom } from '../ModalCustom';
import { ToastNotifier } from '../ToastNotifier';

export function Layout({ children, menu, logoApp }: { menu: MenuSidebar; children: ReactNode; logoApp: string }) {
    const sidebarWidth = '202px';
    const headerHeight = '64px';
    return (
        <WalletProvider>
            <AppStateProvider>
                <Box sx={{ position: 'relative' }}>
                    <Sidebar sidebarWidth={sidebarWidth} headerHeight={headerHeight} menu={menu} logoApp={logoApp} />
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 1,
                            ml: { xs: 0, md: sidebarWidth },
                            backgroundImage: `url(/images/bgheader1.png)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top center',
                            backgroundSize: '975px auto',
                        }}
                    >
                        <Header headerHeight={headerHeight}></Header>
                        <Box
                            sx={{
                                minHeight: `calc(100svh - ${headerHeight})`,
                            }}
                        >
                            {children}
                        </Box>
                    </Box>
                </Box>
                <ModalCustom />
                <ToastNotifier />
            </AppStateProvider>
        </WalletProvider>
    );
}
