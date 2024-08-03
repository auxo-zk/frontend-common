import 'react-quill/dist/quill.snow.css';
import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { AppStateProvider } from '../AppStateProvider';
import { MenuSidebar } from '../../types';
import { WalletProvider } from '../WalletProvider';
import { ModalCustom } from '../ModalCustom';
import { ToastNotifier } from '../ToastNotifier';

export function Layout({ children, menu, requiedLogin, walletConnectId }: { menu: MenuSidebar; children: ReactNode; requiedLogin: boolean; walletConnectId: string }) {
    const sidebarWidth = '202px';
    const headerHeight = '64px';
    return (
        <WalletProvider walletConnectId={walletConnectId}>
            <AppStateProvider>
                <Box sx={{ position: 'relative' }}>
                    <Sidebar sidebarWidth={sidebarWidth} headerHeight={headerHeight} menu={menu} />
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
                        <Header headerHeight={headerHeight} requiedLogin={requiedLogin}></Header>
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
