import { useAuthStore } from '../model/authStore';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const login = useAuthStore((s) => s.login);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await login(email, password);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='form-field'>
                <label className='form-label' htmlFor='email'>
                    Email
                </label>
                <input
                    id='email'
                    type='email'
                    className='input-field'
                    placeholder='you@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='form-field'>
                <label className='form-label' htmlFor='password'>
                    Password
                </label>
                <input
                    id='password'
                    type='password'
                    className='input-field'
                    placeholder='••••••••'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type='submit' className='btn-primary w-full mt-2'>
                Continue
            </button>
        </form>
    );
};
