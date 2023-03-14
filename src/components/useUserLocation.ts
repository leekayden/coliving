import { useState, useEffect } from 'react';

interface UserLocation {
  countryCode?: string;
  countryName?: string;
}

const useUserLocation = (): UserLocation => {
  const [userLocation, setUserLocation] = useState<UserLocation>({});

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setUserLocation({
          countryCode: data.country_code,
          countryName: data.country_name,
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
