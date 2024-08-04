import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Avatar } from '../Avatar';
import { updateProfileAvatar, updateProfileInfo, UpdateProfileInput, UserProfile } from 'lib/services';
import { IconEdit } from 'lib/icons';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ButtonLoading } from '../ButtonLoading';

export function BoxProfile({ initData, role, editable, getProfile }: { initData: UserProfile; editable?: boolean; role: 'builder' | 'organizer'; getProfile: () => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editProfile, setEditProfile] = useState<UpdateProfileInput>({ name: initData.name, description: initData.description, role: initData.role, link: initData.link });

    function changeInputProfile(key: keyof UpdateProfileInput, value: string) {
        setEditProfile((prev) => ({ ...prev, [key]: value }));
    }

    const submitProfileAvatar = async (imgFile: File) => {
        try {
            const result = await updateProfileAvatar(role, imgFile);
            toast('Edit Profile Avatar Successfully: ', { type: 'success' });
            return result;
        } catch (error) {
            toast('Edit Profile Avatar Failed: ' + (error as Error).message, { type: 'error' });
        }
    };

    async function handlePostInfo() {
        setIsSubmitting(true);
        try {
            await updateProfileInfo(role, editProfile);
            getProfile();
            toast('Edit Profile Successfully: ', { type: 'success' });
        } catch (error) {
            toast('Edit Profile Failed: ' + (error as Error).message, { type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    }

    function checkChangedData() {
        return (
            editProfile.name.trim() !== initData.name ||
            editProfile.description.trim() !== initData.description ||
            editProfile.role.trim() !== initData.role ||
            editProfile.link.trim() !== initData.link
        );
    }

    return (
        <Box>
            <Typography variant="h1" textTransform={'uppercase'}>
                Builder Profile
            </Typography>
            <Box sx={{ display: 'flex', placeItems: 'center', gap: 4, mt: 4 }}>
                <Avatar
                    editable={editable}
                    src={initData.img}
                    size={150}
                    onChange={async (file) => {
                        try {
                            if (editable && file![0]) {
                                await submitProfileAvatar(file![0]);
                                getProfile();
                            }
                        } catch (error) {}
                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" fontWeight={600}>
                        {initData.name || 'User name here'}
                    </Typography>

                    <Typography mt={1.5}>{initData.description || 'Describe something about yourself.'}</Typography>

                    {/* <Box sx={{ display: 'flex', gap: 1.5, placeItems: 'center', mt: 2 }}>
                        <LinkedIn fontSize="large" sx={{ color: 'primary.light' }} />
                        <Telegram fontSize="large" sx={{ color: 'primary.light' }} />
                    </Box> */}
                </Box>
            </Box>

            {editable && (
                <Box sx={{ maxWidth: '650px', margin: 'auto', mt: 3 }}>
                    <Box>
                        <Grid container spacing={3} sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    value={editProfile.name}
                                    label="Full Name"
                                    onChange={(e) => {
                                        changeInputProfile('name', e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth value={editProfile.link} label="Website" onChange={(e) => changeInputProfile('link', e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField fullWidth value={editProfile.role} label="Role" onChange={(e) => changeInputProfile('role', e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField multiline value={editProfile.description} fullWidth label="Description" onChange={(e) => changeInputProfile('description', e.target.value)} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <ButtonLoading isLoading={isSubmitting} muiProps={{ variant: 'contained', onClick: handlePostInfo, disabled: !checkChangedData() }}>
                            Submit Change
                        </ButtonLoading>
                    </Box>
                </Box>
            )}
        </Box>
    );
}
