import { createConfig, http } from 'wagmi';
import { arbitrum, sepolia, arbitrumSepolia } from 'wagmi/chains';
import { Chain, createClient } from 'viem';
import { injected, walletConnect } from 'wagmi/connectors';
import { IconARB, IconBNB, IconMetamask, IconWalletConnect, SvgComponent, WalletName } from 'crypto-token-icon';
import { IconEDU } from 'lib/icons';
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
export const openCampusCodex = {
    id: 656476,
    name: 'Open Campus Codex Sepolia',
    nativeCurrency: { name: 'EDU', symbol: 'EDU', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://open-campus-codex-sepolia.drpc.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Open Campus Codex explorer',
            url: 'https://opencampus-codex.blockscout.com/',
            apiUrl: 'https://opencampus-codex.blockscout.com/api/v2',
        },
    },
    contracts: {
        multicall3: {
            address: '0x80a0A5f33652881a2bADD3cE977b7193A38FdF36',
            blockCreated: 23850,
        },
    },
} as const satisfies Chain;

export type AppPublicClient = ReturnType<ReturnType<typeof walletConfig>['getClient']>;
export type AppChainId = ReturnType<typeof walletConfig>['chains'][number]['id'];

export const walletConfig = (walletConnectId: string) =>
    createConfig({
        chains: [openCampusCodex, auxoDevNet],
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
    // [arbitrum.id]: {
    //     logoChain: IconARB,
    //     name: 'Arbitrum',
    // },
    // [arbitrumSepolia.id]: {
    //     logoChain: IconARB,
    //     name: 'Arbitrum Sepolia',
    // },
    [auxoDevNet.id]: {
        logoChain: IconARB,
        name: 'Auxo DevNet',
    },
    [openCampusCodex.id]: {
        logoChain: IconEDU,
        name: 'OCC Sepolia',
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
