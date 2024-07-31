import { createConfig, http } from 'wagmi';
import { arbitrum } from 'wagmi/chains';
import { createClient } from 'viem';

declare module 'wagmi' {
    interface Register {
        config: typeof walletConfig;
    }
}

export const walletConfig = createConfig({
    chains: [arbitrum],
    client({ chain }) {
        return createClient({ chain, transport: http() });
    },
});
