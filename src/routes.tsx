import React from 'react';
import { useRoutes } from 'react-router-dom';
import App from './App';
import Test from './pages/Test';
import Test2 from './pages/Test2';

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '',
                    element: <Test />,
                },
                {
                    path: 'test2',
                    element: <Test2 />,
                },
            ],
        },
    ]);
}
