import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppStateProvider, IconMenuExplorer, IconUser, Layout } from 'lib/main.ts';
import { Dashboard } from '@mui/icons-material';
import { BrowserRouter } from 'react-router-dom';
import { KeyLocalStorage } from 'lib/main.ts';
import Router from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);
