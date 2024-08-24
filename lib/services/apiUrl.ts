import { BACKEND_BASE_URL, BACKEND_BASE_URL1 } from './baseURL';

export const apiUrl = {
    authen: `${BACKEND_BASE_URL1}/auth`,
    checkJwt: `${BACKEND_BASE_URL1}/auth/profile`,
    courses: `${BACKEND_BASE_URL1}/non-privacy/governors`,
    draftsCourse: `${BACKEND_BASE_URL1}/builders/drafts`,
    getListProjectJoinedInCampaign: (campaignId: string) => `${BACKEND_BASE_URL}/campaigns/${campaignId}/projects`, // ? return list project that joined campaign
    ifpsHashCreateCourse: `${BACKEND_BASE_URL1}/builders/create-course-ipfs-hash`,

    getFundraisingInfoByProjectId: (governorAddress: string) => `${BACKEND_BASE_URL1}/non-privacy/governors/joined-campaigns?governorAddress=${governorAddress}`, // ? return campaign that project joined
    getFundraisingInfoOfProjectInCampaign: (projectId: string, campaignId: string) => `${BACKEND_BASE_URL}/projects/${projectId}/participations/${campaignId}`, // ? return campaign and info mileton that project joined
    campaign: `${BACKEND_BASE_URL1}/non-privacy/campaigns`,
    ipfsHashJoinCampaign: `${BACKEND_BASE_URL1}/non-privacy/campaigns/create-join-campaign-ipfs-hash`,

    builderProfile: `${BACKEND_BASE_URL1}/builders`,

    organizerProfile: `${BACKEND_BASE_URL1}/organizers`,
    ipfsHashCreateCampaign: `${BACKEND_BASE_URL1}/organizers/create-campaign-ipfs-hash`,

    saveFile: `${BACKEND_BASE_URL1}/object-storage`,

    createVesting: `${BACKEND_BASE_URL1}/non-privacy/governors/bytecode/create-vesting`,
};
