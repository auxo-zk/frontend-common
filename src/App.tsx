import { Box, Button } from '@mui/material';
import { useThemeMode } from 'lib/main';
import React from 'react';

function App() {
    const [mode, setMode] = useThemeMode();
    return (
        <Box>
            {mode}
            <Button variant="contained" onClick={() => setMode('dark')}>
                Hello
            </Button>
        </Box>
    );
}

export default App;
