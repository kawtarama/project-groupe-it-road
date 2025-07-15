/// <reference types="vite/client" />

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const fetchDocuments = async (token: string) => {
  const res = await fetch(`${API}/documents`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
};