import React from 'react';
import { useRoutes } from 'react-router-dom';
import App from './App';

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <App />,
        },
    ]);
}
