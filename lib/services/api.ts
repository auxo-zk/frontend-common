import { clientStorage } from 'lib/constants';
import axios from 'axios';
import { apiUrl } from './apiUrl';
import {
    Campaign,
    CampaignFundraising,
    CampaignState,
    Course,
    DataCreateCampaign,
    DataCreateCourse,
    DataJoinCampaign,
    DataPostAuthen,
    DraftCourse,
    FileSaved,
    InputCreateVesting,
    IpfsHashResult,
    ServerSignature,
    UpdateProfileInput,
    UserProfile,
} from './types';
import { USER_ROLE } from 'lib/types';
import { base58ToHex, BN, DEC } from 'lib/utils';
import { AppPublicClient } from 'lib/states';
import { getJoinedCampaigns } from 'lib/contracts';
import { Address } from 'viem';

export async function getServerSignature(): Promise<ServerSignature> {
    const response = await axios.get(apiUrl.authen);
    return response.data;
}

export async function loginUser(data: DataPostAuthen): Promise<string> {
    const response = await axios.post(apiUrl.authen, data);
    return response.data;
}

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
        startParticipation: item.ipfsData?.timeline?.startParticipation ? new Date(item.ipfsData.timeline.startParticipation).getTime() : Date.now() + 60000,
        startFunding: item.ipfsData?.timeline?.startFunding ? new Date(item.ipfsData.timeline.startFunding).getTime() : Date.now() + 60000,
        startRequesting: item.ipfsData?.timeline?.startRequesting ? new Date(item.ipfsData.timeline.startRequesting).getTime() : Date.now() + 60000,
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
            address: item?.founderInfo?.address || '',
            avatar: item?.founderInfo?.img || '',
            name: item?.founderInfo?.name || 'Unnkown Name',
        },
        description: item.ipfsData?.description || '',
        timeline: timeLine,
        questions: item.ipfsData?.questions || [],
        tokenFunding: item?.ipfsData?.tokenFunding || { address: '0x00', decimals: 0, symbol: '', name: '0x00' },
    };
}
export async function getCampaigns(addressUser?: string): Promise<Campaign[]> {
    const response = await axios.get(apiUrl.campaign + (addressUser ? `?organizer=${addressUser}` : ''));
    // console.log('getCampaigns', response);
    const data = response.data;

    return data.map((item: any, index: number) => filterDataCampaign(item));
}
export async function getCampaign(idCampaign: string): Promise<Campaign> {
    const response = await axios.get(apiUrl.campaign + `/${idCampaign}`);
    // console.log('getCampaign', response);
    return filterDataCampaign(response.data);
}

function filterDataCampaignFundraising(campaign: any, dataJoinCampaign: any): CampaignFundraising {
    const tokenFunding = campaign?.ipfsData?.tokenFunding || { address: '0x00', decimals: 0, symbol: '', name: '0x00' };
    return {
        campaignId: campaign.campaignId + '',
        campaignName: campaign?.ipfsData?.name || '',
        fundedAmount: BN(dataJoinCampaign.fund).div(DEC(tokenFunding.decimals)).toNumber() || 0,
        claimedAmount: dataJoinCampaign.claimedAmount || 0,
        targetAmount:
            dataJoinCampaign.ipfsData?.scopeOfWorks?.reduce((accumulator: number, item: any) => {
                return accumulator + Number(item.raisingAmount);
            }, 0) || 0,
        raiseInfo: dataJoinCampaign.raiseInfo || [],
        documents: dataJoinCampaign.ipfsData?.documents || [],
        scopeOfWorks: dataJoinCampaign.ipfsData?.scopeOfWorks || [],
        questions: campaign?.ipfsData?.questions || [],
        answers: dataJoinCampaign.ipfsData?.answers || [],
        ownerAddress: campaign?.founder || '',
        timeline: {
            startParticipation: campaign?.ipfsData?.timeline?.startParticipation || '',
            startFunding: campaign?.ipfsData?.timeline?.startFunding || '',
            startRequesting: campaign?.ipfsData?.timeline?.startRequesting || '',
        },
        campaignState: campaign?.state || 0,
        tokenFunding: tokenFunding,
    };
}
export async function getFundraisingInfoByProjectId(governorAddress: Address): Promise<CampaignFundraising[]> {
    const joinedCampaigns = (await axios.get(apiUrl.getFundraisingInfoByProjectId(governorAddress))).data;
    // console.log('getCampaignsJoinedByProjectId', response);
    const campaigns = await Promise.all(joinedCampaigns.map((data: any) => axios.get(apiUrl.campaign + `/${data.campaignId}`)));
    return joinedCampaigns.map((data: any, index: number) => filterDataCampaignFundraising(campaigns[index].data, data));
}

export async function getFundraisingInfoOfProjectInCampaign(projectId: string, campaignId: string): Promise<CampaignFundraising> {
    // const resposne = await axios.get(apiUrl.getFundraisingInfoOfProjectInCampaign(projectId, campaignId));
    const campaignData = (await axios.get(apiUrl.campaign + `/${campaignId}`)).data;
    const dataCourseJoinCampaign = (campaignData?.courses?.find((item: any) => item.governorId == projectId) as any) || null;
    if (dataCourseJoinCampaign) {
        return filterDataCampaignFundraising(campaignData, dataCourseJoinCampaign);
    }
    // console.log('getFundraisingInfoOfProjectInCampaign', response);
    // return filterDataCampaignFundraising(response.data);
    throw new Error('Not found data join campaign.');
}

export async function ipfsHashCreateCampaign(data: DataCreateCampaign): Promise<IpfsHashResult> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.post(apiUrl.ipfsHashCreateCampaign, data, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return {
        HashBase58: response.data?.Hash || '',
        HashHex: base58ToHex(response.data?.Hash || '0x00'),
        IpfsHash: response.data?.IpfsHash || '',
        PinSize: response.data?.PinSize || 0,
        Timestamp: response.data?.Timestamp || 0,
    };
}

//! Courses #######################################################################################################################

function filterDataCourse(data: any): Course {
    // console.log('challengeAndRisk:', data.ipfsData?.challengeAndRisk);
    return {
        id: data?.governorId + '' || '#',
        address: data?.address || '0x00',
        name: data?.ipfsData?.name || '',
        avatar: data?.ipfsData?.avatarImage || '',
        banner: data?.ipfsData?.coverImage || '',
        date: new Date().toLocaleDateString(),
        totalClaimedAmount: data?.totalClaimedAmount || 0,
        totalFundedAmount: data?.totalFunded || 0,
        description: data?.ipfsData?.description || '',
        documents: data?.ipfsData?.documents || [],
        member: data?.ipfsData?.members || [],
        solution: data?.ipfsData?.solution || '',
        problemStatement: data?.ipfsData?.problemStatement || '',
        challengeAndRisk: data?.ipfsData?.challengeAndRisk || '',
        publicKey: data?.ipfsData?.publicKey || '',
        courseSymbol: data?.ipfsData?.courseSymbol || '',
        nftAddress: data?.tokenAddress || '0x00',
        revenuePoolFactoryAddress: data?.revenuePoolFactoryAddress || '0x00',
        founder: data?.founder || '0x00',
    };
}
export async function getCourses(addressUser?: string): Promise<Course[]> {
    const response = await axios.get(apiUrl.courses);
    // console.log('getCourse', response);
    if (addressUser) {
        return response.data?.filter((item: any) => item.founder == addressUser).map((item: any) => filterDataCourse(item)) || [];
    }
    return response.data?.map((item: any) => filterDataCourse(item)) || [];
}

export async function getCourse(idCourse: string): Promise<Course> {
    const response = await axios.get(apiUrl.courses + `/${idCourse}`);
    // console.log('getCourse', response);
    return filterDataCourse(response.data);
}

export async function getListProjectJoinedInCampaign(campaignId: string): Promise<Course[]> {
    // const response = await axios.get(apiUrl.getListProjectJoinedInCampaign(campaignId));
    const response = await axios.get(apiUrl.campaign + `/${campaignId}`);
    // console.log('getListProjectJoinedInCampaign', response);
    const listIdCourse = response.data?.courses?.map((item: any) => item.governorId) || [];
    const response2 = await Promise.all(listIdCourse.map((idCourse: string) => getCourse(idCourse)));
    return response2;
}

function filterDataDraftCourse(data: any): DraftCourse {
    // console.log('challengeAndRisk:', data.ipfsData?.challengeAndRisk);
    return {
        id: data._id + '' || '#',
        name: data.name || '',
        avatar: data.avatarImage || '',
        banner: data.coverImage || '',
        date: new Date().toLocaleDateString(),
        description: data.description || '',
        documents: data.documents || [],
        member: data.members || [],
        solution: data.solution || '',
        problemStatement: data.problemStatement || '',
        challengeAndRisk: data.challengeAndRisk || '',
        publicKey: data.publicKey || '',
        courseSymbol: data.courseSymbol || '',
    };
}
export async function getDraftCourses(): Promise<DraftCourse[]> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.get(apiUrl.draftsCourse + '/all', {
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

export async function createDraftCourse(data: DataCreateCourse): Promise<any> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.post(apiUrl.draftsCourse, data, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return response;
}
export async function updateDraftCourse(idDraft: string, data: DataCreateCourse): Promise<any> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.post(apiUrl.draftsCourse + '/' + idDraft, data, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return response;
}
export async function deleteDraftCourse(idDraft: string): Promise<any> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.delete(apiUrl.draftsCourse + '/' + idDraft, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return response;
}

export async function ipfsHashCreateCourse(data: DataCreateCourse): Promise<IpfsHashResult> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.post(apiUrl.ifpsHashCreateCourse, data, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return {
        HashBase58: response.data?.Hash || '',
        HashHex: base58ToHex(response.data?.Hash || '0x00'),
        IpfsHash: response.data?.IpfsHash || '',
        PinSize: response.data?.PinSize || 0,
        Timestamp: response.data?.Timestamp || 0,
    };
}

export async function ipfsHashJoinCampaign(data: DataJoinCampaign): Promise<IpfsHashResult> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.post(apiUrl.ipfsHashJoinCampaign, data, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return {
        HashBase58: response.data?.Hash || '',
        HashHex: base58ToHex(response.data?.Hash || '0x00'),
        IpfsHash: response.data?.IpfsHash || '',
        PinSize: response.data?.PinSize || 0,
        Timestamp: response.data?.Timestamp || 0,
    };
}

//! USER #######################################################################################################################
export async function getProfile(role: USER_ROLE, address: string): Promise<UserProfile> {
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

export async function updateProfileInfo(role: USER_ROLE, input: UpdateProfileInput): Promise<any> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response: any = await axios.post(role == 'builder' ? apiUrl.builderProfile : apiUrl.organizerProfile, input, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return response;
}

export async function updateProfileAvatar(role: USER_ROLE, input: File): Promise<string> {
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

//! File #######################################################################################################################
export async function saveFile(file: File): Promise<FileSaved> {
    const formData = new FormData();
    formData.append('file', file);
    const result = await axios.post(apiUrl.saveFile, formData);
    return result.data;
}

//! #######################################################################################################################

export async function createVesting(data: InputCreateVesting): Promise<{ targets: string[]; values: string[]; calldatas: string[] }> {
    const jwt = clientStorage.ACCESS_TOKEN();
    const response = await axios.post(apiUrl.createVesting, data, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    return response.data;
}
