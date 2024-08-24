import { Address } from 'viem';

export type ServerSignature = {
    msg: string;
    msgHash: string;
    signature: string;
};

export type DataPostAuthen = {
    role: 0 | 1;
    address: string;
    signature: string;
    serverSignature: ServerSignature;
};

export type Course = {
    id: string;
    address: Address;
    name: string;
    date: string;
    banner: string;
    avatar: string;
    totalClaimedAmount: number;
    totalFundedAmount: number;
    courseSymbol: string;
    publicKey: string;
    description: string;
    documents: FileSaved[];
    member: MemberData[];
    solution: string;
    problemStatement: string;
    challengeAndRisk: string;

    founder: Address;
    nftAddress: Address;
    revenuePoolFactoryAddress: Address;
};

export type DataCreateCourse = {
    name: string;
    courseSymbol: string;
    avatarImage: string;
    coverImage: string;
    publicKey: string;
    description: string;
    problemStatement: string;
    solution: string;
    challengeAndRisk: string;
    members: MemberData[];
    documents: FileSaved[];
};

export type DraftCourse = Omit<Course, 'totalClaimedAmount' | 'totalFundedAmount' | 'nftAddress' | 'revenuePoolFactoryAddress' | 'founder' | 'address'>;

export enum CampaignState {
    'UPCOMING',
    'APPLICATION',
    'FUNDING',
    'ALLOCATION',
}

export type CampaignQuestion = {
    question: string;
    hint: string;
    isRequired: boolean;
};

export type Campaign = {
    campaignId: string;
    name: string;
    avatar: string;
    banner: string;
    fundingOption: number;
    date: string;
    capacity: number;
    state: CampaignState;
    description: string;
    timeline: {
        startParticipation: number;
        startFunding: number;
        startRequesting: number;
    };
    organizer: {
        address: string;
        name: string;
        avatar: string;
    };
    questions: CampaignQuestion[];
    tokenFunding: TokenInfo;
};

export type DataCreateCampaign = {
    name: string;
    coverImage: string;
    avatarImage: string;
    description: string;
    fundingOption: number;
    capacity: number;
    timeline: {
        startParticipation: number;
        startFunding: number;
        startRequesting: number;
    };
    privacyOption: {
        isPrivate: boolean;
    };
    questions: CampaignQuestion[];
    tokenFunding: TokenInfo;
};

export type CampaignFundraising = {
    campaignId: string;
    campaignName: string;
    fundedAmount: number;
    claimedAmount: number;
    targetAmount: number;
    raiseInfo: {
        scope: string;
        budgetRequired: string;
        etc: string;
    }[];
    documents: FileSaved[];
    scopeOfWorks: ScopeOfWork[];
    questions: CampaignQuestion[];
    answers: string[];
    ownerAddress: string;
    timeline: {
        startParticipation: string;
        startFunding: string;
        startRequesting: string;
    };
    campaignState: number;
    tokenFunding: TokenInfo;
};

export type DataJoinCampaign = {
    answers: string[];
    scopeOfWorks: ScopeOfWork[];
    documents: FileSaved[];
};

export type User = {};

export type FileSaved = {
    fileName: string;
    fileSize: number;
    URL: string;
};

export type MemberData = {
    name: string;
    role: string;
    link: string;
    publicKey: string;
};

export type UserProfile = {
    address: string;
    name: string;
    role: string;
    link: string;
    description: string;
    img: string;
};

export type UpdateProfileInput = {
    name: string;
    link: string;
    description: string;
    role: string;
};

export type ScopeOfWork = {
    deadline: string;
    information: string;
    milestone: string;
    raisingAmount: string;
};

export type TokenInfo = {
    address: Address;
    name: string;
    symbol: string;
    decimals: number;
};

export type IpfsHashResult = {
    IpfsHash: string;
    Timestamp: string;
    PinSize: number;
    HashBase58: string;
    HashHex: Address;
};

export type InputCreateVesting = {
    campaignId: number;
    governorAddress: string;
    amount: string;
};
