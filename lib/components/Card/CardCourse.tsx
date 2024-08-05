import { Box, Typography } from '@mui/material';
import { Course } from 'lib/services';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

export function CardCourse({ data, children, toLink = '#', subChildren }: { data: Course; children?: ReactNode; toLink?: string; subChildren?: ReactNode }) {
    return (
        <Card avatar={data.avatar} banner={data.banner} subChildren={subChildren} sxBanner={{ minHeight: '102px' }}>
            <Link to={toLink} style={{ textDecoration: 'none', color: 'unset' }}>
                <Typography variant="h6" fontWeight={600} mt={1} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                    {data.name}
                </Typography>
            </Link>
            {/* <Typography variant="body3" mt={0.3} mb={1}>
                {formatDate(data.date, 'dd MMM yyyy')}
            </Typography> */}
            {/* <Typography variant="h6" color={'secondary.main'}>
                $870.975.003
                </Typography>
                <Typography variant="body3" mt={0.3} mb={1} color={'secondary.main'}>
                $1.870.975.003
            </Typography> */}
            <Box
                mt={2}
                sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical', '& > *': { m: 0 } }}
                dangerouslySetInnerHTML={{ __html: data.description }}
            />
            {children}
        </Card>
    );
}
