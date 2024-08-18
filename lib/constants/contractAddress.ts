import { AppChainId, auxoDevNet, openCampusCodex } from 'lib/states';
import { Address } from 'viem';

export type ContractName = 'GovernorFactory' | 'Campaign' | 'TokenFund';
export const contractAddress: Record<AppChainId, Record<ContractName, Address>> = {
    [openCampusCodex.id]: {
        GovernorFactory: '0xe04F111eE5616B7741b5d9aA8836528c29B837AE',
        Campaign: '0x6dF9314e6849aC82bFe7b71898A0AA46134175bE',
        TokenFund: '0xd35f12eF94db3d84Bbf2a43F2537cF294C7E6717',
    },
    [auxoDevNet.id]: {
        GovernorFactory: '0x00',
        Campaign: '0x00',
        TokenFund: '0x00',
    },
};
