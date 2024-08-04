import { DeleteOutlineRounded } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { fileIcon } from 'lib/constants';
import { IconCloud } from 'lib/icons';
import { FileSaved } from 'lib/services';
import { compactNumber } from 'lib/utils';
import { ChangeEvent } from 'react';

export type BoxAddDocumentProps = {
    mb?: number;
    mt?: number;
    documents: FileSaved[];
    documentFiles: {
        name: string;
        file: File;
    }[];
    addDocumentFiles: (
        files: {
            name: string;
            file: File;
        }[]
    ) => void;
    deleteDocumentFiles: (index: number) => void;
    deleteDocuments: (index: number) => void;
};

export function BoxAddDocument({ documents, documentFiles, addDocumentFiles, deleteDocumentFiles, deleteDocuments, mb, mt }: BoxAddDocumentProps) {
    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files) {
            addDocumentFiles(
                Array.from(e.target.files).map((i) => ({
                    name: i.name,
                    file: i,
                }))
            );
        }
    };

    return (
        <Box mb={mb} mt={mt}>
            <Typography variant="h6">Additional Documents</Typography>
            <Typography mt={1.5} variant="body1" color="text.secondary" sx={{ maxWidth: '651px', wordBreak: 'break-word' }}>
                Submit any additional documents to provide additional information about your project Allowed formats:{' '}
                <Typography variant="body1" component="span" fontWeight={600}>
                    PDF, PNG, JPG
                </Typography>
            </Typography>
            <Grid container mt={1} spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={(theme) => ({
                            width: '100%',
                            minHeight: '240px',
                            backgroundColor: 'background.secondary',
                            borderRadius: 2.5,
                            border: '1px dashed ' + theme.palette.primary.light,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            position: 'relative',
                        })}
                    >
                        <IconCloud sx={{ fontSize: '4rem' }} />
                        <Typography variant="body2" fontWeight={500}>
                            Drag and Drop file
                        </Typography>
                        <Typography>or</Typography>
                        <Typography variant="body2" fontWeight={500}>
                            Browse
                        </Typography>
                        <input type="file" accept=".pdf, image/*" style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0 }} onChange={onImageChange} multiple />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography mb={2} variant="body1" fontWeight={600}>
                            Uploaded Files
                        </Typography>
                        <Box sx={{ maxHeight: '200px', overflow: 'auto' }}>
                            {documents.map((item, index) => {
                                const FileIcon = fileIcon['unknown'];
                                return (
                                    <Box key={item.URL + index} sx={{ display: 'flex', alignItems: 'center', my: 1, gap: 2 }}>
                                        <FileIcon sx={{ fontSize: '40px', color: 'primary.light' }} />
                                        <Box>
                                            <Typography title={item.fileName} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '290px' }}>
                                                {item.fileName}
                                            </Typography>
                                            <Typography variant="body3" color={'text.secondary'}>
                                                {compactNumber(item.fileSize)}B
                                            </Typography>
                                        </Box>
                                        <IconButton sx={{ ml: 'auto', color: 'primary.light' }} onClick={() => deleteDocuments(index)}>
                                            <DeleteOutlineRounded />
                                        </IconButton>
                                    </Box>
                                );
                            })}
                            {documentFiles.map((item, index) => {
                                const FileIcon = fileIcon[item.file.type] ? fileIcon[item.file.type] : fileIcon['unknown'];
                                return (
                                    <Box key={item.name + index} sx={{ display: 'flex', alignItems: 'center', my: 1, gap: 2 }}>
                                        <FileIcon sx={{ fontSize: '40px', color: 'primary.light' }} />
                                        <Box>
                                            <Typography title={item.name} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '290px' }}>
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body3" color={'text.secondary'}>
                                                {compactNumber(item.file.size)}B
                                            </Typography>
                                        </Box>
                                        <IconButton sx={{ ml: 'auto', color: 'primary.light' }} onClick={() => deleteDocumentFiles(index)}>
                                            <DeleteOutlineRounded />
                                        </IconButton>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
