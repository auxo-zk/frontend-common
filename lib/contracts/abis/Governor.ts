export const abiGovernor = [
    {
        inputs: [
            {
                internalType: 'string',
                name: 'name_',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'tokenName_',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'tokenSymbol_',
                type: 'string',
            },
            {
                internalType: 'bytes32',
                name: 'descriptionHash_',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: 'governorId_',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'founder_',
                type: 'address',
            },
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
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'GovernorAlreadyCastVote',
        type: 'error',
    },
    {
        inputs: [],
        name: 'GovernorDisabledDeposit',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'targets',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'calldatas',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'values',
                type: 'uint256',
            },
        ],
        name: 'GovernorInvalidProposalLength',
        type: 'error',
    },
    {
        inputs: [],
        name: 'GovernorInvalidVoteType',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'GovernorNonexistentProposal',
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
        name: 'GovernorOnlyExecutor',
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
        name: 'GovernorOnlyProposer',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
            {
                internalType: 'enum IGovernor.ProposalState',
                name: 'current',
                type: 'uint8',
            },
            {
                internalType: 'bytes32',
                name: 'expectedStates',
                type: 'bytes32',
            },
        ],
        name: 'GovernorUnexpectedProposalState',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint8',
                name: 'bits',
                type: 'uint8',
            },
            {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'SafeCastOverflowedUintDowncast',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'ProposalCanceled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'proposer',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address[]',
                name: 'targets',
                type: 'address[]',
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]',
            },
            {
                indexed: false,
                internalType: 'string[]',
                name: 'signatures',
                type: 'string[]',
            },
            {
                indexed: false,
                internalType: 'bytes[]',
                name: 'calldatas',
                type: 'bytes[]',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'voteStart',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'voteEnd',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'descriptionHash',
                type: 'bytes32',
            },
        ],
        name: 'ProposalCreated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'ProposalExecuted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'etaBlocks',
                type: 'uint256',
            },
        ],
        name: 'ProposalQueued',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'voter',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint8',
                name: 'support',
                type: 'uint8',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'weight',
                type: 'uint256',
            },
        ],
        name: 'VoteCast',
        type: 'event',
    },
    {
        inputs: [],
        name: 'campaign',
        outputs: [
            {
                internalType: 'contract ICampaign',
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
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'cancel',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'uint8',
                name: 'support',
                type: 'uint8',
            },
        ],
        name: 'castVote',
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
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
            {
                internalType: 'uint256[]',
                name: 'tokenIds',
                type: 'uint256[]',
            },
            {
                internalType: 'uint8',
                name: 'support',
                type: 'uint8',
            },
        ],
        name: 'castVoteBatch',
        outputs: [
            {
                internalType: 'uint256',
                name: 'totalWeight',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'clock',
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
        name: 'descriptionHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'founder',
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
        name: 'governorId',
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
                name: 'proposalId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'hasVoted',
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
                name: 'target',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'signature',
                type: 'string',
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32',
            },
        ],
        name: 'hashOperation',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'targets',
                type: 'address[]',
            },
            {
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]',
            },
            {
                internalType: 'bytes[]',
                name: 'calldatas',
                type: 'bytes[]',
            },
            {
                internalType: 'bytes32',
                name: 'descriptionHash',
                type: 'bytes32',
            },
        ],
        name: 'hashProposal',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'fundedAmount',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'mintedAmount',
                type: 'uint256',
            },
        ],
        name: 'increaseFundedAndMinted',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'nextTokenId',
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
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'proposalCore',
        outputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'proposer',
                        type: 'address',
                    },
                    {
                        internalType: 'uint64',
                        name: 'voteStart',
                        type: 'uint64',
                    },
                    {
                        internalType: 'uint64',
                        name: 'voteDuration',
                        type: 'uint64',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'descriptionHash',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'bool',
                        name: 'executed',
                        type: 'bool',
                    },
                    {
                        internalType: 'bool',
                        name: 'canceled',
                        type: 'bool',
                    },
                    {
                        internalType: 'uint64',
                        name: 'etaBlocks',
                        type: 'uint64',
                    },
                ],
                internalType: 'struct IGovernor.ProposalCore',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'proposalCounter',
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
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'proposalDeadline',
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
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'proposalEta',
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
                name: 'proposalIndex',
                type: 'uint256',
            },
        ],
        name: 'proposalIds',
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
                name: '',
                type: 'uint256',
            },
        ],
        name: 'proposalNeedsQueuing',
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
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'proposalProposer',
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
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'proposalSnapshot',
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
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'proposalVotes',
        outputs: [
            {
                internalType: 'uint256',
                name: 'againstVotes',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'forVotes',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'abstainVotes',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'targets',
                type: 'address[]',
            },
            {
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]',
            },
            {
                internalType: 'bytes[]',
                name: 'calldatas',
                type: 'bytes[]',
            },
            {
                internalType: 'bytes32',
                name: 'descriptionHash',
                type: 'bytes32',
            },
            {
                internalType: 'uint64',
                name: 'startTime',
                type: 'uint64',
            },
            {
                internalType: 'uint64',
                name: 'votingDuration',
                type: 'uint64',
            },
        ],
        name: 'propose',
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
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'queue',
        outputs: [],
        stateMutability: 'nonpayable',
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
        name: 'revenuePoolFactory',
        outputs: [
            {
                internalType: 'contract IRevenuePoolFactory',
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
                name: 'revenuePoolFactory_',
                type: 'address',
            },
        ],
        name: 'setRevenuePoolFactory',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256',
            },
        ],
        name: 'state',
        outputs: [
            {
                internalType: 'enum IGovernor.ProposalState',
                name: '',
                type: 'uint8',
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
        name: 'token',
        outputs: [
            {
                internalType: 'contract IVotes',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalFunded',
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
