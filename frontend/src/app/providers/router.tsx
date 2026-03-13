import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/login/LoginPage';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);