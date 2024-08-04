import { Avatar, Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { IconRemove } from 'lib/icons';
import { MemberData } from 'lib/services';

export type BoxTeamMemberProps = {
    mb?: number;
    mt?: number;
    members: MemberData[];
    addTeamMember: () => void;
    editTeamMember: (index: number, data: Partial<MemberData>) => void;
    removeTeamMember: (index: number) => void;
};
export function BoxTeamMember({ members, addTeamMember, editTeamMember, removeTeamMember, mb, mt }: BoxTeamMemberProps) {
    return (
        <Box
            mb={mb}
            mt={mt}
            sx={{
                '& .member-row': {
                    my: 1,
                },
            }}
        >
            <Typography variant="h6" mb={2}>
                Team members
            </Typography>
            <Grid
                container
                sx={{
                    '& .MuiGrid-item': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                }}
                className="member-row"
                spacing={2}
            >
                <Grid item xs={12} md={3.5}></Grid>
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={1.5} sx={{ justifyContent: 'flex-end' }}>
                    <Button sx={{ minWidth: '100px' }} variant="outlined" onClick={addTeamMember}>
                        Add
                    </Button>
                </Grid>
            </Grid>
            {members.map((member, index) => {
                return (
                    <Grid
                        key={member.publicKey + index}
                        container
                        spacing={2}
                        sx={{
                            '& .MuiGrid-item': {
                                display: 'flex',
                                alignItems: 'center',
                            },
                        }}
                        className="member-row"
                    >
                        <Grid item xs={12} md={3.5}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ width: '50px', height: '50px' }} />
                                <TextField
                                    sx={{ ml: 2 }}
                                    label="Profile Name"
                                    onChange={(e) => {
                                        editTeamMember(index, {
                                            name: e.target.value,
                                        });
                                    }}
                                    defaultValue={member.name}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField
                                label="Role"
                                onChange={(e) => {
                                    editTeamMember(index, {
                                        role: e.target.value,
                                    });
                                }}
                                defaultValue={member.role}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                label="Social Link"
                                onChange={(e) => {
                                    editTeamMember(index, {
                                        link: e.target.value,
                                    });
                                }}
                                defaultValue={member.link}
                            />
                        </Grid>
                        <Grid item xs={12} md={1.5} sx={{ justifyContent: 'flex-end' }}>
                            <Box sx={{ minWidth: '100px', display: 'flex', justifyContent: 'center' }}>
                                <IconButton
                                    onClick={() => {
                                        removeTeamMember(index);
                                    }}
                                >
                                    <IconRemove sx={{ fontSize: '2rem', color: 'background.primary' }} />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                );
            })}
        </Box>
    );
}
