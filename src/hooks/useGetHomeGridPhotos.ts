import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../data/static-datas';

const useHomeGridPhotos = () => {
  const [homeGridPhotos, setHomeGridPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHomeGridPhotos = async () => {
    try {
      const response = await axios.get(`${API_URL}/Home`);
      return response.data;
    } catch (error) {
      console.error('Error fetching grid photos:', error);
      throw error;
    }
  };

  useEffect(() => {
    const getHomeGridPhotos = async () => {
      try {
        const data = await fetchHomeGridPhotos();
        setHomeGridPhotos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getHomeGridPhotos();
  }, []);

  return { homeGridPhotos, loading };
};

export default useHomeGridPhotos;