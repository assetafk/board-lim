import { useAuthStore } from '../model/authStore';
import { useState } from 'react';

export const LoginForm = () => {
    const login = useAuthStore ((s)=> s.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        await login(email, password);
    };

return (
    <form onSubmit={handleSubmit}>
        <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
            }
        />
        <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
            }
        />
        <button type="submit">Login</button>
    </form>
)
}