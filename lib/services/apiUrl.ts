import { BACKEND_BASE_URL } from './baseURL';

export const apiUrl = {
    checkJwt: `${BACKEND_BASE_URL}/auth/profile`,
    courses: `${BACKEND_BASE_URL}/projects`,
    draftsCourse: `${BACKEND_BASE_URL}/builders/drafts`,
    getListProjectJoinedInCampaign: (campaignId: string) => `${BACKEND_BASE_URL}/campaigns/${campaignId}/projects`, // ? return list project that joined campaign

    getFundraisingInfoByProjectId: (projectId: string) => `${BACKEND_BASE_URL}/projects/${projectId}/participations`, // ? return campaign that project joined
    campaign: `${BACKEND_BASE_URL}/campaigns`,
    builderProfile: `${BACKEND_BASE_URL}/builders`,
    organizerProfile: `${BACKEND_BASE_URL}/organizers`,
};
