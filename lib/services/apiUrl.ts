import { BACKEND_BASE_URL, BACKEND_BASE_URL1 } from './baseURL';

export const apiUrl = {
    authen: `${BACKEND_BASE_URL1}/auth`,
    checkJwt: `${BACKEND_BASE_URL1}/auth/profile`,
    courses: `${BACKEND_BASE_URL}/projects`,
    draftsCourse: `${BACKEND_BASE_URL1}/builders/drafts`,
    getListProjectJoinedInCampaign: (campaignId: string) => `${BACKEND_BASE_URL}/campaigns/${campaignId}/projects`, // ? return list project that joined campaign

    getFundraisingInfoByProjectId: (projectId: string) => `${BACKEND_BASE_URL}/projects/${projectId}/participations`, // ? return campaign that project joined
    campaign: `${BACKEND_BASE_URL}/campaigns`,
    builderProfile: `${BACKEND_BASE_URL1}/builders`,
    organizerProfile: `${BACKEND_BASE_URL1}/organizers`,
};
