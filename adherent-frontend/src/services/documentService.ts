import api from './api';
import { DocumentData } from '../types/document';

export const uploadDocument = async (formData: FormData): Promise<DocumentData> => {
  const res = await api.post('/documents/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const getDocuments = async (): Promise<DocumentData[]> => {
  const res = await api.get('/documents');
  return res.data;
};

export const deleteDocument = async (id: number): Promise<void> => {
  await api.delete(`/documents/${id}`);
};
