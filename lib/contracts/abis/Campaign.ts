export const abiCampaign = [
    {
        inputs: [
            {
                internalType: 'uint64',
                name: 'timelockPeriod_',
                type: 'uint64',
            },
            {
                internalType: 'uint64',
                name: 'queuingPeriod_',
                type: 'uint64',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
        ],
        name: 'CampaignLaunched',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'governorId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Fund',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'governorIds',
                type: 'uint256[]',
            },
        ],
        name: 'FundAllocated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'governorId',
                type: 'uint256',
            },
        ],
        name: 'GovernorJoined',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
        ],
        name: 'allocateFunds',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
        ],
        name: 'campaignData',
        outputs: [
            {
                internalType: 'uint256',
                name: 'totalFunded',
                type: 'uint256',
            },
            {
                internalType: 'bytes32',
                name: 'descriptionHash',
                type: 'bytes32',
            },
            {
                internalType: 'uint64',
                name: 'fundStart',
                type: 'uint64',
            },
            {
                internalType: 'uint64',
                name: 'fundDuration',
                type: 'uint64',
            },
            {
                internalType: 'bool',
                name: 'allocated',
                type: 'bool',
            },
            {
                internalType: 'address',
                name: 'tokenRaising',
                type: 'address',
            },
            {
                internalType: 'uint256[]',
                name: 'governorIds',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'campaignsOwn',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'governorId',
                type: 'uint256',
            },
        ],
        name: 'courseData',
        outputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'governor',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'fund',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'minted',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'descriptionHash',
                        type: 'bytes32',
                    },
                ],
                internalType: 'struct ICampaign.Course',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'governorId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'fund',
        outputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'governorFactory',
        outputs: [
            {
                internalType: 'contract IGovernorFactory',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'governor',
                type: 'address',
            },
            {
                internalType: 'bytes32',
                name: 'descriptionHash',
                type: 'bytes32',
            },
        ],
        name: 'joinCampaign',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'governorAddress',
                type: 'address',
            },
        ],
        name: 'joinedCampaign',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint64',
                name: 'startFunding',
                type: 'uint64',
            },
            {
                internalType: 'uint64',
                name: 'duration',
                type: 'uint64',
            },
            {
                internalType: 'address',
                name: 'tokenRaising',
                type: 'address',
            },
            {
                internalType: 'bytes32',
                name: 'descriptionHash',
                type: 'bytes32',
            },
        ],
        name: 'launchCampaign',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'nextCampaignId',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
        ],
        name: 'state',
        outputs: [
            {
                internalType: 'enum ICampaign.CampaignState',
                name: '',
                type: 'uint8',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
] as const;
