import { useEffect, useState } from 'react';

export default function useFetch<T>(url: string, token: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url, token]);

  return { data, loading };
}