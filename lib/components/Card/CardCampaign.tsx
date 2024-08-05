import { Box, Typography } from '@mui/material';
import React from 'react';
import { Campaign } from 'lib/services';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { fundingOption } from 'lib/constants';
import { StateCampaign } from './StateCampaign';

export function CardCampaign({ data, toLink = '#' }: { data: Campaign; toLink?: string }) {
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
                <Typography component={'span'} fontWeight={600}>
                    Type:
                </Typography>{' '}
                {fundingOption[data.fundingOption]}
            </Typography>
            <Typography>
                <Typography component={'span'} fontWeight={600}>
                    Capacity:
                </Typography>{' '}
                {data.capacity}
            </Typography>
        </Card>
    );
}
