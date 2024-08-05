import { clientStorage } from 'lib/constants';
import axios from 'axios';
import { apiUrl } from './apiUrl';
import { Campaign, CampaignFundraising, CampaignState, Course, DraftCourse, UpdateProfileInput, UserProfile } from './types';

export async function verifyJwt(jwt?: string) {
    try {
        const _jwt = jwt || clientStorage.ACCESS_TOKEN();
        await axios.get(apiUrl.checkJwt, {
            headers: {
                Authorization: `Bearer ${_jwt}`,
            },
        });
        // console.log('verifyJwt', response);
        return true;
    } catch (error) {
        console.error('Error verifyJwt', error);
        return false;
    }
}
//! Campaigns #######################################################################################################################

function filterDataCampaign(item: any): Campaign {
    const timeLine = {
        startParticipation: item.timeline?.startParticipation ? item.timeline.startParticipation * 1000 : Date.now() + 60000,
        startFunding: item.timeline?.startFunding ? item.timeline.startFunding * 1000 : Date.now() + 60000,
        startRequesting: item.timeline?.startRequesting ? item.timeline.startRequesting * 1000 : Date.now() + 60000,
    };
    const now = new Date().getTime();
    let state = CampaignState.UPCOMING;
    if (now > timeLine.startParticipation && now < timeLine.startFunding) {
        state = CampaignState.APPLICATION;
    } else if (now > timeLine.startFunding && now < timeLine.startRequesting) {
        state = CampaignState.FUNDING;
    } else if (now > timeLine.startRequesting) {
        state = CampaignState.ALLOCATION;
    }
    return {
        campaignId: item.campaignId + '' || '#',
        name: item.ipfsData?.name || '---',
        date: new Date().toLocaleDateString(),
        fundingOption: item.ipfsData?.fundingOption || 2,
        capacity: item.ipfsData?.capacity || '0',
        avatar: item.ipfsData?.avatarImage || '',
        banner: item.ipfsData?.coverImage || '',
        state: state,
        organizer: {
            address: item?.ownerInfo?.address || '',
            avatar: item?.ownerInfo?.img || '',
            name: item?.ownerInfo?.name || 'Unnkown Name',
        },
        description: item.ipfsData?.description || '',
        timeline: {
            startParticipation: item.timeline?.startParticipation * 1000 || 0,
            startFunding: item.timeline?.startFunding * 1000 || 0,
            startRequesting: item.timeline?.startRequesting * 1000 || 0,
        },
        questions: item.ipfsData?.questions || [],
    };
}
export async function getCampaigns(addressUser?: string): Promise<Campaign[]> {
    const response = await axios.get(apiUrl.campaign + (addressUser ? `?owner=${addressUser}` : ''));
    // console.log('getCampaigns', response);
    const data = response.data;

    return data.map((item: any, index: number) => filterDataCampaign(item));
}
export async function getCampaign(idCampaign: string): Promise<Campaign> {
    const response = await axios.get(apiUrl.campaign + `/${idCampaign}`);
    // console.log('getCampaign', response);
    return filterDataCampaign(response.data);
}

function filterDataCampaignFundraising(item: any): CampaignFundraising {
    return {
        campaignId: item.campaignId + '',
        campaignName: item.campaign?.ipfsData?.name || '',
        fundedAmount: item.fundedAmount / 10 ** 9 || 0,
        claimedAmount: item.claimedAmount / 10 ** 9 || 0,
        targetAmount:
            item.ipfsData?.scopeOfWorks?.reduce((accumulator: number, item: any) => {
                return accumulator + Number(item.raisingAmount);
            }, 0) || 0,
        raiseInfo: item.raiseInfo || [],
        documents: item.ipfsData?.documents || [],
        scopeOfWorks: item.ipfsData?.scopeOfWorks || [],
        questions: item.campaign?.ipfsData?.questions || [],
        answers: item.ipfsData?.answers || [],
        ownerAddress: item.campaign?.owner || '',
        timeline: {
            startParticipation: item.campaign?.ipfsData?.timeline?.startParticipation || '',
            startFunding: item.campaign?.ipfsData?.timeline?.startFunding || '',
            startRequesting: item.campaign?.ipfsData?.timeline?.startRequesting || '',
        },
        campaignState: item.campaign?.state || 0,
    };
}
export async function getFundraisingInfoByProjectId(projectId: string): Promise<CampaignFundraising[]> {
    const response = await axios.get(apiUrl.getFundraisingInfoByProjectId(projectId));
    // console.log('getCampaignsJoinedByProjectId', response);
    return response.data.map((item: any, index: number) => filterDataCampaignFundraising(item));
}

//! Courses #######################################################################################################################

function filterDataCourse(data: any): Course {
    return {
        id: data?.projectId + '' || '#',
        name: data?.ipfsData?.name || '',
        avatar: data?.ipfsData?.avatarImage || '',
        banner: data?.ipfsData?.coverImage || '',
        date: new Date().toLocaleDateString(),
        totalClaimedAmount: data?.totalClaimedAmount || 0,
        totalFundedAmount: data?.totalFundedAmount || 0,
        description: data?.ipfsData?.description || '',
        documents: data?.ipfsData?.documents || [],
        member: data?.ipfsData?.members || [],
        solution: data?.ipfsData?.solution || '',
        problemStatement: data?.ipfsData?.problemStatement || '',
        challengesAndRisk: data?.ipfsData?.challengesAndRisk || '',
    };
}
export async function getCourses(addressUser?: string): Promise<Course[]> {
    const response = await axios.get(apiUrl.courses + (addressUser ? `?member=${addressUser}` : ''));
    // console.log('getCourse', response);
    return response.data?.map((item: any, index: number) => filterDataCourse(item)) || [];
}

export async function getCourse(idCourse: string): Promise<Course> {
    const response = await axios.get(apiUrl.courses + `/${idCourse}`);
    // console.log('getCourse', response);
    return filterDataCourse(response.data);
}

export async function getListProjectJoinedInCampaign(campaignId: string): Promise<Course[]> {
    const response = await axios.get(apiUrl.getListProjectJoinedInCampaign(campaignId));
    // console.log('getListProjectJoinedInCampaign', response);
    return response.data.map((item: any) => filterDataCourse(item));
}

function filterDataDraftCourse(data: any): DraftCourse {
    return {
        id: data._id + '' || '#',
        name: data.ipfsData?.name || '',
        avatar: data.ipfsData?.avatarImage || '',
        banner: data.ipfsData?.coverImage || '',
        date: new Date().toLocaleDateString(),
        description: data.ipfsData?.description || '',
        documents: data.ipfsData?.documents || [],
        member: data.ipfsData?.members || [],
        solution: data.ipfsData?.solution || '',
        problemStatement: data.ipfsData?.problemStatement || '',
        challengesAndRisk: data.ipfsData?.challengesAndRisk || '',
    };
}
export async function getDraftCourses(): Promise<DraftCourse[]> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.get(apiUrl.draftsCourse, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    // console.log('getDraftCourses', response);
    return response.data.map((item: any) => filterDataDraftCourse(item));
}
export async function getDraftCourse(idDraft: string): Promise<DraftCourse> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.get(apiUrl.draftsCourse + '/' + idDraft, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    // console.log('getDraftCourses', response);
    return filterDataDraftCourse(response.data);
}

//! #######################################################################################################################
export async function getProfile(role: 'builder' | 'organizer', address: string): Promise<UserProfile> {
    const response: any = (await axios.get((role == 'builder' ? apiUrl.builderProfile : apiUrl.organizerProfile) + `/${address}`)).data;
    return {
        address: response.address,
        name: response.name || '',
        description: response.description || '',
        img: response.img || '',
        link: response.link || '',
        role: response.role || '',
    };
}

export async function updateProfileInfo(role: 'builder' | 'organizer', input: UpdateProfileInput): Promise<any> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response: any = await axios.post(role == 'builder' ? apiUrl.builderProfile : apiUrl.organizerProfile, input, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return response;
}

export async function updateProfileAvatar(role: 'builder' | 'organizer', input: File): Promise<string> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const formData = new FormData();
    formData.append('avatar', input);
    const result: any = await axios.post((role == 'builder' ? apiUrl.builderProfile : apiUrl.organizerProfile) + '/update-avatar', formData, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return result.URL;
}

//! #######################################################################################################################

//! #######################################################################################################################
