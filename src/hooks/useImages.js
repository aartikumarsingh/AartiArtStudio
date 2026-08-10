import { useState, useEffect } from 'react';
import { fetchImages } from '../api/cloudinary';

export const useImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchImages();
        setImages(data);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return { images, loading };
};