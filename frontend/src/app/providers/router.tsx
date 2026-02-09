import { createBrowserRouter, } from 'react-router-dom';

import { LoginPage } from '@/pages/login/LoginPage';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';
import { ProtectedRoute } from '@/shared/lib/ProtectedRoute';

export const router = createBrowserRouter ([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <DashboardPage />
            </ProtectedRoute>
        ),
    },
    
]);