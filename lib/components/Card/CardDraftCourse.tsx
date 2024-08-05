import { DraftCourse } from 'lib/services';
import { Card } from './Card';
import { Box, Button, Chip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function CardDraftCourse({ item, target, toLink }: { item: DraftCourse; toLink?: string; target?: React.HTMLAttributeAnchorTarget }) {
    return (
        <Card avatar={item.avatar} banner={item.banner} sxBanner={{ minHeight: '102px' }}>
            <Typography variant="h6" fontWeight={600} mt={1} component={'p'} title={item.name} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.name || 'No name'}
            </Typography>
            <Box textAlign={'right'} my={1}>
                <Chip variant="outlined" color="secondary" label="Drafting..." size="small"></Chip>
            </Box>
            <Box
                dangerouslySetInnerHTML={{ __html: item.description }}
                sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    height: '70px',
                    minHeight: '70px',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    '& > *': { m: 0 },
                }}
            ></Box>
            <Link style={{ color: 'inherit', textDecoration: 'none', width: '100%' }} to={toLink || '#'} target={target}>
                <Button fullWidth variant="outlined" size="small">
                    Edit
                </Button>
            </Link>
        </Card>
    );
}
