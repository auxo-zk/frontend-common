import { Dashboard } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { checkValidAccessToken, IconMenuExplorer, IconUser, Layout } from 'lib/main';
import { useThemeMode } from 'lib/main';
import React from 'react';
import { useAccountEffect, useSwitchAccount } from 'wagmi';

export default function App() {
    return (
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
            <Box>
                <Button variant="contained">Hello</Button>
            </Box>
        </Layout>
    );
}
