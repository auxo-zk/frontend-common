export type Course = {
    id: string;
    name: string;
    date: string;
    banner: string;
    avatar: string;
    totalClaimedAmount: number;
    totalFundedAmount: number;

    description: string;
    documents: FileSaved[];
    member: MemberData[];
    solution: string;
    problemStatement: string;
    challengesAndRisk: string;
};

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
