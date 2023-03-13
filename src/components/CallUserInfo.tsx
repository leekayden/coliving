import React from "react";
import UserInfo from "./UserInfo";

const CallUserInfo: React.FC = () => {
  const [userAgent, setUserAgent] = React.useState("");
  const [ipAddress, setIpAddress] = React.useState("");
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(0);
  const [city, setCity] = React.useState<string | null>(null);
  const [country, setCountry] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Get user agent string
    setUserAgent(window.navigator.userAgent);

    // Get IP address
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip));

    // Get screen size
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);

    // Get user's location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`
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
    <div>
      <UserInfo
        userAgent={userAgent}
        ipAddress={ipAddress}
        screenWidth={screenWidth}
        screenHeight={screenHeight}
        city={city}
        country={country}
      />
    </div>
  );
};

export default CallUserInfo;
