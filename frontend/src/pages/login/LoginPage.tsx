import { LoginForm } from '@/features/auth/ui/LoginForm';
import { AuthLayout } from '@/widgets/layout/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};