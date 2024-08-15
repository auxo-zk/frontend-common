import { Box, Button, Container, Grid } from '@mui/material';
import { CardCampaign } from 'lib/components';
import { CardCourse } from 'lib/components/Card/CardCourse';
import { Campaign, Course, getCampaigns, getCourses } from 'lib/services';
import { base58ToHex } from 'lib/utils';
import React, { useEffect } from 'react';

export default function Test() {
    const [courses, setCourses] = React.useState<Course[]>([]);
    const [campaigns, setCampaigns] = React.useState<Campaign[]>([]);
    async function fetchCourses() {
        try {
            const response = await getCourses();
            setCourses(response);
        } catch (error) {
            console.error(error);
            setCourses([]);
        }
    }
    async function fetchCampaign() {
        try {
            const response = await getCampaigns();
            setCampaigns(response);
        } catch (error) {
            console.error(error);
            setCourses([]);
        }
    }
    useEffect(() => {
        fetchCourses();
        fetchCampaign();
        console.log(base58ToHex('Qmb8LANBN9qCaA71DCaY2X8gppt2dc4fw2EH7YG2dMHUHT'));
    }, []);
    return (
        <Container>
            <Grid container spacing={2}>
                {courses.map((course, index) => {
                    return (
                        <Grid key={course.id + index} item xs={12} xsm={6} sm={4} lg={3}>
                            <CardCourse data={course}>
                                <Button fullWidth>join</Button>
                            </CardCourse>
                        </Grid>
                    );
                })}
            </Grid>
            <Grid container spacing={2}>
                {campaigns.map((item, index) => {
                    return (
                        <Grid key={item.campaignId + index} item xs={12} xsm={6}>
                            <CardCampaign data={item} />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}
