import { AppChainId, auxoDevNet, openCampusCodex } from 'lib/states';
import { Address } from 'viem';

export type ContractName = 'GovernorFactory' | 'Campaign' | 'TokenFund';
export const contractAddress: Record<AppChainId, Record<ContractName, Address>> = {
    [openCampusCodex.id]: {
        GovernorFactory: '0x98b7F3a520C54416e201713f44150E42791b9800',
        Campaign: '0xF94f468AB416f8256Fb8dA87473c5f9216023C5C',
        TokenFund: '0xd35f12eF94db3d84Bbf2a43F2537cF294C7E6717',
    },
    [auxoDevNet.id]: {
        GovernorFactory: '0x00',
        Campaign: '0x00',
        TokenFund: '0x00',
    },
};
