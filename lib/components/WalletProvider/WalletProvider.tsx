import { WagmiProvider } from 'wagmi';
import { BaseProviderProps } from '../../types';
import { walletConfig } from '../../states/wallet/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export function WalletProvider({ children, walletConnectId }: BaseProviderProps & { walletConnectId: string }) {
    return (
        <WagmiProvider config={walletConfig(walletConnectId)}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
}
