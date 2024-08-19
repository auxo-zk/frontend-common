import { Box, Typography } from '@mui/material';
import React from 'react';
import { Campaign } from 'lib/services';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { fundingOption } from 'lib/constants';
import { StateCampaign } from './StateCampaign';
import { copyTextToClipboard } from 'lib/utils';

export function CardCampaign({ data, toLink = '#', children }: { data: Campaign; toLink?: string; children?: React.ReactNode }) {
    return (
        <Card avatar={data.avatar} banner={data.banner} sxBanner={{ minHeight: '150px' }}>
            <Box display={'flex'} sx={{ placeItems: 'center' }} mb={4}>
                <Link to={toLink} style={{ textDecoration: 'none', color: 'unset' }}>
                    <Typography variant="h6" fontWeight={600} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                        {data.name}
                    </Typography>
                </Link>
                <StateCampaign props={{ sx: { ml: ' auto' } }} state={data.state}></StateCampaign>
            </Box>

            <Typography>
                Type:{' '}
                <Typography component={'span'} fontWeight={600}>
                    {fundingOption[data.fundingOption]}
                </Typography>
            </Typography>
            <Typography>
                Capacity:{' '}
                <Typography component={'span'} fontWeight={600}>
                    {data.capacity}
                </Typography>
            </Typography>
            <Typography
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                    copyTextToClipboard(data.tokenFunding.address);
                }}
                component={'p'}
                title="Click to copy address"
            >
                Funding by token:{' '}
                <Typography component={'span'} fontWeight={600}>
                    {data.tokenFunding.name} ({data.tokenFunding.symbol})
                </Typography>
            </Typography>
            {children}
        </Card>
    );
}
