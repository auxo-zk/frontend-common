import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppStateProvider, IconMenuExplorer, IconUser, Layout } from 'lib/main.ts';
import { Dashboard } from '@mui/icons-material';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Layout
            walletConnectId="6482349197b073ab1d34e32ec4907c1d"
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
                    url: '/profile',
                    children: [] as { title: string; url: string }[],
                },
                {
                    icon: Dashboard,
                    title: 'Dashboard',
                    url: '/dashboard',
                    children: [] as { title: string; url: string }[],
                },
            ]}
        >
            <App />
        </Layout>
    </BrowserRouter>
);
