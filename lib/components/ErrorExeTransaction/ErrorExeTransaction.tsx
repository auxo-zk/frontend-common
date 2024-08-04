import { Box, Typography } from '@mui/material';
import { useId } from 'react';
import { BaseError } from 'wagmi';

export function readErrorTransaction(err: any): { text: string; type: 'shortMess' | 'metaMess' | 'unknow' }[] {
    const mess: { text: string; type: 'shortMess' | 'metaMess' | 'unknow' }[] = [];
    if ((err as BaseError).shortMessage) {
        mess.push({ text: err.shortMessage, type: 'shortMess' });
    }
    const metaMess = (err as BaseError).metaMessages;
    if (metaMess) {
        mess.push(...metaMess.map((item) => ({ text: item, type: 'metaMess' } as { text: string; type: 'shortMess' | 'metaMess' | 'unknow' })));
    }
    if (mess.length > 0) {
        return mess;
    }
    return [{ text: (err as Error).message, type: 'unknow' }];
}

export function ErrorExeTransaction({ error }: { error: any }) {
    const id = useId();
    return (
        <Box>
            {readErrorTransaction(error).map((mess, index) => {
                return (
                    <Typography
                        key={id + index}
                        mt={index > 0 ? 1 : 0}
                        fontWeight={mess.type == 'shortMess' ? '600' : '400'}
                        variant={mess.type == 'shortMess' ? 'body1' : 'body2'}
                        sx={{ color: mess.type == 'shortMess' ? 'text.primary' : '' }}
                        component={'pre'}
                    >
                        {mess.text}
                    </Typography>
                );
            })}
        </Box>
    );
}
