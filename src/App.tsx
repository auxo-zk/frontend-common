import { Box, Button, Typography } from '@mui/material';
import { checkValidAccessToken } from 'lib/main';
import { useThemeMode } from 'lib/main';
import React from 'react';
import { useAccountEffect, useSwitchAccount } from 'wagmi';

function App() {
    const [mode, setMode] = useThemeMode();
    useAccountEffect({
        onConnect: (data) => {
            console.log('data', data);
            checkValidAccessToken(
                data.address,
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJCNjJxbVJLY2RYcUhlMVN4dWtIUXRXVUh5TVgzTk1HQ2t2SG5IYW8zVnNkb0JNTlJEa1FxNm5hIiwicm9sZSI6MCwiaWF0IjoxNzIyNjU0NTYzLCJleHAiOjE3MzEyOTQ1NjN9.0plJXLHKfK0TVJm0_-RIwDqCqn7uasCiqq0HrShgHi0'
            );
        },
    });
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
