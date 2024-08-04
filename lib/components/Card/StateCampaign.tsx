import { Chip, ChipProps } from '@mui/material';
import { CampaignState } from 'lib/services';
import React from 'react';

export function StateCampaign({ state, props }: { state: CampaignState; props?: ChipProps }) {
    if (state === CampaignState.UPCOMING) {
        return <Chip variant="outlined" color="secondary" label="Upcoming" {...props} />;
    }
    if (state === CampaignState.APPLICATION) {
        return <Chip variant="outlined" color="secondary" label="Application" {...props} />;
    }
    if (state === CampaignState.FUNDING) {
        return <Chip variant="outlined" color="secondary" label="Fundraising" {...props} />;
    }

    return <Chip variant="outlined" color="success" label="Allocation" {...props} />;
}
