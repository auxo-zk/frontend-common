import { SaveAltRounded } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { IconFolder } from 'lib/icons';
import { FileSaved, MemberData } from 'lib/services';
import { formatAddress } from 'lib/utils';
import { StackTeamMember } from '../StackTeamMember';
import { imagePath } from 'lib/constants';

export function BoxListDocuments({ documents, members }: { documents: FileSaved[]; members: MemberData[] }) {
    return (
        <Box sx={{ minWidth: '309px', zIndex: -1 }}>
            <Box sx={{ borderRadius: '12px', bgcolor: 'background.secondary', p: { xs: 2, xsm: 3 }, boxShadow: 3 }}>
                <Box sx={{ display: 'flex', placeItems: 'baseline', justifyContent: 'space-between' }}>
                    <Typography variant="h6">Documents</Typography>
                    <Box sx={{ display: 'flex', placeItems: 'end', gap: 0.5 }}>
                        <Typography variant="body3" color={'primary.main'}>
                            Download All
                        </Typography>
                        <IconFolder fontSize="small" color={'primary'} />
                    </Box>
                </Box>

                {documents.map((item, index) => {
                    return (
                        <Box key={index} component={'a'} href={item.URL} target="_blank" sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', placeItems: 'center', pt: 3 }}>
                            <Typography variant="body2" color={'primary.light'}>
                                {formatAddress(item.fileName, 6, 12)}
                            </Typography>
                            <SaveAltRounded sx={{ color: 'primary.light', cursor: 'pointer' }} fontSize="small" />
                        </Box>
                    );
                })}
                {documents?.length === 0 && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', placeItems: 'center', pt: 3 }}>
                        <Typography>No Document</Typography>
                    </Box>
                )}

                <Divider sx={{ mt: 3.5 }} />

                <Box mt={2}>
                    <Typography variant="h6" mb={2.5}>
                        Team Member
                    </Typography>
                    {members.map((member, index) => {
                        return <StackTeamMember key={index} sx={{ mb: 1 }} name={member.name} urlImage={imagePath.DEFAULT_AVATAR} desc={member.role} />;
                    })}
                </Box>
            </Box>
        </Box>
    );
}
