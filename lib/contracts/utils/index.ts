import { abiCampaign, AppPublicClient, contractAddress } from 'lib/main';
import { Address } from 'viem';
import { readContract } from 'viem/actions';

export async function getJoinedCampaigns(client: AppPublicClient, governorAddress: Address) {
    const response = await readContract(client, {
        abi: abiCampaign,
        address: contractAddress[client.chain.id].Campaign,
        functionName: 'joinedCampaign',
        args: [governorAddress],
    });
    return response;
}
