import React from "react";
import UserInfo from "./UserInfo";

const CallUserInfo: React.FC = () => {
  const [userAgent, setUserAgent] = React.useState<string>("");
  const [ipAddress, setIpAddress] = React.useState<string>("");
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [screenHeight, setScreenHeight] = React.useState<number>(0);

  React.useEffect(() => {
    // Get the user agent string
    setUserAgent(window.navigator.userAgent);

    // Get the IP address (using a free API)
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip));

    // Get the screen size
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);

    // Get the user's location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=66547c6b30a9456a92f26d356479fd3d`
          );

          const data = await response.json();

          const city = data.results[0]?.components.city || null;
          const country = data.results[0]?.components.country || null;

          setCity(city);
          setCountry(country);
        } catch (error) {
          console.error(error);
        }
      });
    }
  }, []);

  return (
    <UserInfo
      userAgent={userAgent}
      ipAddress={ipAddress}
      screenWidth={screenWidth}
      screenHeight={screenHeight}
      city={city}
      country={country}
    />
  );
};

export default CallUserInfo;
