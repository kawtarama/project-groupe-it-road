const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const login = async (email: string, password: string) => {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) throw new Error('Login failed');
  return res.json();
};