import { SignupProps } from '../pages/Signup';
import { httpClient } from './http';

export const signup = async (userData: SignupProps) => {
    const response = await httpClient.post('/users/join', userData);
    return response.data;
};

export const resetRequest = async (date: SignupProps) => {
    const response = await httpClient.post('/users/reset', date);
    return response.data;
};

export const resetPassword = async (date: SignupProps) => {
    const response = await httpClient.put('/users/reset', date);
    return response.data;
};

interface LoginResponse {
    token: string;
}

export const login = async (date: SignupProps) => {
    const response = await httpClient.post<LoginResponse>('/users/login', date);
    return response.data;
};
