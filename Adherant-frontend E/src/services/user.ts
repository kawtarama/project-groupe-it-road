const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const updateProfile = async (token: string, fullName: string) => {
  const res = await fetch(`${API}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ full_name: fullName })
  });
  return res.json();
};