import { Box, Grid } from '@mui/material';
import { CardCampaign } from 'lib/components';
import { CardCourse } from 'lib/components/Card/CardCourse';
import { Campaign, Course, getCampaigns, getCourses } from 'lib/services';
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
    }, []);
    return (
        <Box>
            <Grid container spacing={2}>
                {courses.map((course, index) => {
                    return (
                        <Grid key={course.id + index} item xs={12} xsm={6} sm={4} lg={3}>
                            <CardCourse data={course} />
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
        </Box>
    );
}
