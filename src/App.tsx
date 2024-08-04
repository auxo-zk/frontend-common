import { Dashboard } from '@mui/icons-material';
import { QueryClient } from '@tanstack/react-query';
import { AppStateProvider, IconMenuExplorer, IconUser, Layout, walletConfig, WalletProvider } from 'lib/main';
import { Outlet } from 'react-router-dom';

const config = walletConfig('6482349197b073ab1d34e32ec4907c1d');
const queryClient = new QueryClient();

export default function App() {
    return (
        <AppStateProvider>
            <WalletProvider wagmiConfig={config} queryClient={queryClient}>
                <Layout
                    requiedLogin={true}
                    menu={[
                        {
                            icon: IconMenuExplorer,
                            title: 'Explorer',
                            url: '/explorer',
                            children: [
                                { title: 'Projects', url: '/explorer/projects' },
                                { title: 'Campaigns', url: '/explorer/campaigns' },
                            ] as { title: string; url: string }[],
                        },
                        {
                            icon: IconUser,
                            title: 'Profile',
                            url: '/test2',
                            children: [] as { title: string; url: string }[],
                        },
                        {
                            icon: Dashboard,
                            title: 'Dashboard',
                            url: '',
                            children: [] as { title: string; url: string }[],
                        },
                    ]}
                >
                    <Outlet />
                </Layout>
            </WalletProvider>
        </AppStateProvider>
    );
}
