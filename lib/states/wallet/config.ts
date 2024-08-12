import { createConfig, http } from 'wagmi';
import { arbitrum, bscTestnet, arbitrumSepolia } from 'wagmi/chains';
import { Chain, createClient } from 'viem';
import { injected, walletConnect } from 'wagmi/connectors';
import { IconARB, IconBNB, IconMetamask, IconWalletConnect, SvgComponent, WalletName } from 'crypto-token-icon';
declare module 'wagmi' {
    interface Register {
        config: ReturnType<typeof walletConfig>;
    }
}

export const auxoDevNet = {
    id: 31337,
    name: 'Auxo DevNet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://educhain-explorer.auxo.fund'],
        },
    },
} as const satisfies Chain;

export type AppChainId = ReturnType<typeof walletConfig>['chains'][number]['id'];

export const walletConfig = (walletConnectId: string) =>
    createConfig({
        chains: [auxoDevNet, arbitrumSepolia, arbitrum],
        connectors: [
            injected({ target: 'metaMask' }),
            walletConnect({
                projectId: walletConnectId,
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
    [arbitrumSepolia.id]: {
        logoChain: IconARB,
        name: 'Arbitrum Sepolia',
    },
    [auxoDevNet.id]: {
        logoChain: IconARB,
        name: 'Auxo DevNet',
    },
    // [bscTestnet.id]: {
    //     logoChain: IconBNB,
    //     name: 'BNBTestnet',
    // },
};

export const infoWallet: { [k in string]: { logoWallet: SvgComponent; name: string } } = {
    // ! only write id wallet allow for connect on web
    // ['io.metamask']: { logoWallet: imagePath.Logo_Metamask, name: 'Metamask' },
    ['metaMask']: { logoWallet: IconMetamask, name: WalletName.metaMask },
    ['walletConnect']: { logoWallet: IconWalletConnect, name: WalletName.walletConnect },
};
