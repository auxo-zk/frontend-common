import { WagmiProvider } from 'wagmi';
import { BaseProviderProps } from '../../types';
import { walletConfig } from '../../states/wallet/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';

export function WalletProvider({ children, wagmiConfig, queryClient }: BaseProviderProps & { wagmiConfig: ReturnType<typeof walletConfig>; queryClient: QueryClient }) {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
}
