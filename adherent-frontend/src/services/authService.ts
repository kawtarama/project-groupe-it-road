import api from './api';
import { LoginData, RegisterData } from '../types/auth';

export const login = async (data: LoginData) => {
  const res = await api.post('/auth/login', data);
  return res.data;
};

export const register = async (data: RegisterData) => {
  const res = await api.post('/auth/register', data);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};
