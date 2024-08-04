import 'react-quill/dist/quill.snow.css';
import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { AppStateProvider } from '../AppStateProvider';
import { MenuSidebar } from '../../types';
import { ModalCustom } from '../ModalCustom';
import { ToastNotifier } from '../ToastNotifier';
import { walletConfig } from 'lib/states';

export function Layout({ children, menu, requiedLogin }: { menu: MenuSidebar; children: ReactNode; requiedLogin: boolean }) {
    const sidebarWidth = '202px';
    const headerHeight = '64px';
    return (
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
    );
}
