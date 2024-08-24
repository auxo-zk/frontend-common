export const abiCampaign = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'InvalidInitialization',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotInitializing',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'OwnableInvalidOwner',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint64',
                name: 'version',
                type: 'uint64',
            },
        ],
        name: 'Initialized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_campaignId',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_governor',
                type: 'address',
            },
        ],
        name: 'ableToVestAmount',
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
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
        ],
        name: 'campaignFounders',
        outputs: [
            {
                internalType: 'address',
                name: 'founder',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_owner',
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
            {
                internalType: 'address',
                name: 'governor',
                type: 'address',
            },
        ],
        name: 'fundedAmounts',
        outputs: [
            {
                internalType: 'uint256',
                name: 'fundedAmount',
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
            {
                internalType: 'uint256[]',
                name: 'governorIds',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256[]',
                name: 'amounts',
                type: 'uint256[]',
            },
        ],
        name: 'funds',
        outputs: [],
        stateMutability: 'nonpayable',
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
                internalType: 'address',
                name: 'initialOwner_',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'investor',
                type: 'address',
            },
        ],
        name: 'investedCampaignList',
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
                internalType: 'address',
                name: 'investor',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
        ],
        name: 'investedGovernorInACampaignList',
        outputs: [
            {
                internalType: 'address[]',
                name: '',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'investor',
                type: 'address',
            },
        ],
        name: 'investedGovernorList',
        outputs: [
            {
                internalType: 'address[]',
                name: '',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'investor',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
        ],
        name: 'isInvestedCampaign',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'investor',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'governor',
                type: 'address',
            },
        ],
        name: 'isInvestedGovernor',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'investor',
                type: 'address',
            },
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
        ],
        name: 'isInvestedGovernorInACampaign',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
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
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'contract IGovernorFactory',
                name: '_governorFactory',
                type: 'address',
            },
        ],
        name: 'setGovernorFactory',
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
        ],
        name: 'totalVesteds',
        outputs: [
            {
                internalType: 'uint256',
                name: 'totalVested',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
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
        name: 'vestedDetailOfACampaign',
        outputs: [
            {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
            },
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'governor',
                        type: 'address',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'vestedAmount',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'vestedTimeStamp',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct Campaign.VestedDetail[]',
                        name: 'vestedDetails',
                        type: 'tuple[]',
                    },
                ],
                internalType: 'struct Campaign.VestedDetailOfACampaign[]',
                name: '',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'governor',
                type: 'address',
            },
        ],
        name: 'vestedDetailOfAGovernor',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'campaignId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'tokenAddress',
                        type: 'address',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'vestedAmount',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'vestedTimeStamp',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct Campaign.VestedDetail[]',
                        name: 'vestedDetails',
                        type: 'tuple[]',
                    },
                ],
                internalType: 'struct Campaign.VestedDetailOfAGovernor[]',
                name: '',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_campaignId',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_governor',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
        ],
        name: 'vestting',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
] as const;
