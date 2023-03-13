import React from "react";
import UserInformation from "./UserInformation";

const App: React.FC = () => {
  const [userAgent, setUserAgent] = React.useState<string>("");
  const [ipAddress, setIpAddress] = React.useState<string>("");
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [screenHeight, setScreenHeight] = React.useState<number>(0);

  React.useEffect(() => {
    // Get user agent string
    setUserAgent(window.navigator.userAgent);

    // Get IP address
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip));

    // Get the screen size
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
  }, []);

  return (
    <UserInformation
      userAgent={userAgent}
      ipAddress={ipAddress}
      screenWidth={screenWidth}
      screenHeight={screenHeight}
    />
  );
};

export default App;
