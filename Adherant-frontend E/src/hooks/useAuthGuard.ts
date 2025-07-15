import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function useAuthGuard() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/');
  }, [token, navigate]);
}