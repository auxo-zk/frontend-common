import { AppChainId, auxoDevNet, openCampusCodex } from 'lib/states';
import { Address } from 'viem';

export type ContractName = 'GovernorFactory' | 'Campaign' | 'TokenFund';
export const contractAddress: Record<AppChainId, Record<ContractName, Address>> = {
    [openCampusCodex.id]: {
        GovernorFactory: '0xf6023C063E71a20B49F646b16D0ce8B8fEe639c5',
        Campaign: '0x17049dC67055b8D8d762eC5D8c331077e44eBB83',
        TokenFund: '0xd35f12eF94db3d84Bbf2a43F2537cF294C7E6717',
    },
    [auxoDevNet.id]: {
        GovernorFactory: '0x00',
        Campaign: '0x00',
        TokenFund: '0x00',
    },
};
