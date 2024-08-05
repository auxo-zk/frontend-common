import { BACKEND_BASE_URL } from './baseURL';

export const apiUrl = {
    checkJwt: `${BACKEND_BASE_URL}/auth/profile`,
    courses: `${BACKEND_BASE_URL}/projects`,
    getFundraisingInfoByProjectId: (projectId: string) => `${BACKEND_BASE_URL}/projects/${projectId}/participations`,

    campaign: `${BACKEND_BASE_URL}/campaigns`,
    builderProfile: `${BACKEND_BASE_URL}/builders`,
    organizerProfile: `${BACKEND_BASE_URL}/organizers`,
};
