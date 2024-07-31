import { createConfig, http } from 'wagmi';
import { arbitrum, bscTestnet } from 'wagmi/chains';
import { createClient } from 'viem';
import { injected, walletConnect } from 'wagmi/connectors';
import { IconARB, IconBNB, IconMetamask, IconWalletConnect, SvgComponent, WalletName } from 'crypto-token-icon';
declare module 'wagmi' {
    interface Register {
        config: typeof walletConfig;
    }
}

export type AppChainId = (typeof walletConfig)['chains'][number]['id'];

export const walletConfig = createConfig({
    chains: [arbitrum, bscTestnet],
    connectors: [
        injected({ target: 'metaMask' }),
        walletConnect({
            projectId: '',
            showQrModal: true,
            qrModalOptions: {
                themeVariables: {
                    '--wcm-z-index': '1400',
                },
            },
        }),
    ],
    client({ chain }) {
        return createClient({ chain, transport: http() });
    },
});

export const infoChain: { [k in AppChainId]: { logoChain: SvgComponent; name: string } } = {
    [arbitrum.id]: {
        logoChain: IconARB,
        name: 'Arbitrum',
    },
    [bscTestnet.id]: {
        logoChain: IconBNB,
        name: 'BNBTestnet',
    },
};

export const infoWallet: { [k in string]: { logoWallet: SvgComponent; name: string } } = {
    // ! only write id wallet allow for connect on web
    // ['io.metamask']: { logoWallet: imagePath.Logo_Metamask, name: 'Metamask' },
    ['metaMask']: { logoWallet: IconMetamask, name: WalletName.metaMask },
    ['walletConnect']: { logoWallet: IconWalletConnect, name: WalletName.walletConnect },
};
