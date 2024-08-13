export const abiGovernorFactory = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'campaign_',
                type: 'address',
            },
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
                name: 'governorId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'governor',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'founder',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'descriptionHash',
                type: 'bytes32',
            },
        ],
        name: 'GovernorCreated',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'tokenName',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'tokenSymbol',
                type: 'string',
            },
            {
                internalType: 'bytes32',
                name: 'descriptionHash',
                type: 'bytes32',
            },
        ],
        name: 'createGovernor',
        outputs: [
            {
                internalType: 'uint256',
                name: 'governorId',
                type: 'uint256',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'founder',
                type: 'address',
            },
        ],
        name: 'founderGovernorAddresses',
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
                name: 'founder',
                type: 'address',
            },
        ],
        name: 'founderGovernorIds',
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
                name: 'governorId',
                type: 'uint256',
            },
        ],
        name: 'governor',
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
        inputs: [
            {
                internalType: 'address',
                name: 'governorAddress',
                type: 'address',
            },
        ],
        name: 'hasGovernor',
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
        inputs: [],
        name: 'nextGovernorId',
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
        name: 'queuingPeriod',
        outputs: [
            {
                internalType: 'uint64',
                name: '',
                type: 'uint64',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'timelockPeriod',
        outputs: [
            {
                internalType: 'uint64',
                name: '',
                type: 'uint64',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'votingDelay',
        outputs: [
            {
                internalType: 'uint64',
                name: '',
                type: 'uint64',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'votingPeriod',
        outputs: [
            {
                internalType: 'uint64',
                name: '',
                type: 'uint64',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
] as const;
