import { Button, ButtonProps } from '@mui/material';
import { IconSpinLoading } from '../../icons';
import { ReactNode } from 'react';

type Props = { muiProps: ButtonProps; isLoading?: boolean; textLoading?: string; children: ReactNode };
export function ButtonLoading({ muiProps, isLoading, textLoading, children }: Props) {
    return (
        <Button variant="contained" {...muiProps} disabled={isLoading || muiProps.disabled}>
            {isLoading ? (
                <>
                    <IconSpinLoading sx={{ mr: 0.5 }} /> {textLoading || 'Loading...'}
                </>
            ) : (
                children
            )}
        </Button>
    );
}
