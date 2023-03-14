import { useState, useEffect } from 'react';

interface UserLocation {
  countryCode?: string;
  countryName?: string;
  city?: string;
}

const useUserLocation = (): UserLocation => {
  const [userLocation, setUserLocation] = useState<UserLocation>({});

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const city = data.city === data.country_name ? '' : data.city;
        setUserLocation({
          countryCode: data.country_code,
          countryName: data.country_name,
          city,
        });
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    };

    getUserLocation();
  }, []);

  return userLocation;
};

export default useUserLocation;
