import { Container, Grid, TextField } from '@mui/material';
import { BoxAddDocument, BoxIntroducePage, BoxPrivateData, BoxProfile, BoxTeamMember, CardDraftCourse, InputBanner } from 'lib/components';
import React from 'react';

export default function Test2() {
    return (
        <Container>
            <InputBanner src="https://vending-cdn.kootoro.com/torov-cms/upload/image/1669358914523-kh%C3%A1i%20ni%E1%BB%87m%20qu%E1%BA%A3ng%20c%C3%A1o%20banner%20tr%C3%AAn%20website.jpg"></InputBanner>
            <BoxIntroducePage title="Explore project" thumnail="/images/auxo-thumbnail1.png">
                <TextField label="Search..." type="text" name="search_committee" color="secondary" sx={{ mt: 3, maxWidth: '479px' }} fullWidth></TextField>
            </BoxIntroducePage>
            <BoxProfile
                titlePage="Builder Profile"
                initData={{
                    address: 'B62qmRKcdXqHe1SxukHQtWUHyMX3NMGCkvHnHao3VsdoBMNRDkQq6na',
                    img: 'https://storage.googleapis.com/auxo/7026aeb50306a8b6137f713cd3b6bcbacd8d1f068607ab1ffb55e2eb2b5f051f.png',
                    description: 'Technical founder and researcher',
                    link: 'https://auxo.fund',
                    name: 'Nguyen Pham',
                    role: 'Co-founder',
                }}
                role="builder"
                getProfile={() => {}}
                editable={true}
            />
            <BoxTeamMember members={[{ name: '', link: '', publicKey: '', role: '' }]} addTeamMember={() => {}} editTeamMember={() => {}} removeTeamMember={() => {}} />

            <BoxAddDocument documents={[]} documentFiles={[]} addDocumentFiles={() => {}} deleteDocumentFiles={() => {}} deleteDocuments={() => {}} />

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <CardDraftCourse
                        item={{
                            avatar: '',
                            banner: '',
                            description: 'desc',
                            challengeAndRisk: 'challenge',
                            name: 'name',
                            date: new Date().toDateString(),
                            documents: [],
                            id: '1df4546sd4f6',
                            member: [],
                            problemStatement: 'problem',
                            solution: 'solution',
                            publicKey: 'fjsdfjsfj',
                            tokenFunding: { address: '0x00', decimals: 0, name: '', symbol: '' },
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
