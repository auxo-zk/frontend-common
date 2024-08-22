import { AppChainId, auxoDevNet, openCampusCodex } from 'lib/states';
import { Address } from 'viem';

export type ContractName = 'GovernorFactory' | 'Campaign' | 'TokenFund';
export const contractAddress: Record<AppChainId, Record<ContractName, Address>> = {
    [openCampusCodex.id]: {
        GovernorFactory: '0x1575db1584584Df9011d54E5d8d0Df7F2949d1bA',
        Campaign: '0xC79CF42Eeb80db2670AF59aF26B4069c55B01eb5',
        TokenFund: '0xd35f12eF94db3d84Bbf2a43F2537cF294C7E6717',
    },
    [auxoDevNet.id]: {
        GovernorFactory: '0x00',
        Campaign: '0x00',
        TokenFund: '0x00',
    },
};
