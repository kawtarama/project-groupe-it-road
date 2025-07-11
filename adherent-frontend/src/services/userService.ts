import api from './api';
import { UserProfile } from '../types/user';

export const getUserProfile = async (): Promise<UserProfile> => {
  const res = await api.get('/users/me');
  return res.data;
};

export const updateUserProfile = async (data: Partial<UserProfile>): Promise<UserProfile> => {
  const res = await api.put('/users/me', data);
  return res.data;
};
