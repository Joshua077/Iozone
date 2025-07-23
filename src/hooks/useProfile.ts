import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

export function useProfile() {
  const { getToken } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = await getToken();
      const res = await axios.get('/api/v1/profile/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(res.data);
      setLoading(false);
    };

    fetchProfile();
  }, [getToken]);

  const updateProfile = async (updates: any) => {
    const token = await getToken();
    await axios.put('/api/v1/profile/', updates, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Optionally refresh after update
    setProfile((prev: any) => ({ ...prev, ...updates }));
  };

  return { profile, loading, updateProfile };
}
