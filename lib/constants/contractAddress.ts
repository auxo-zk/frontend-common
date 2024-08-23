import { AppChainId, auxoDevNet, openCampusCodex } from 'lib/states';
import { Address } from 'viem';

export type ContractName = 'GovernorFactory' | 'Campaign' | 'TokenFund';
export const contractAddress: Record<AppChainId, Record<ContractName, Address>> = {
    [openCampusCodex.id]: {
        GovernorFactory: '0xfa8E1595Df8e7c1952686e153B6c16B1d582B59f',
        Campaign: '0xF13f328C397891dF0207eD628976fA4a2Af9d835',
        TokenFund: '0xd35f12eF94db3d84Bbf2a43F2537cF294C7E6717',
    },
    [auxoDevNet.id]: {
        GovernorFactory: '0x00',
        Campaign: '0x00',
        TokenFund: '0x00',
    },
};
