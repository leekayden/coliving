import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { PropertyList } from "./global/data";
import PropertyView from "./components/PropertyView";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import HomeownerView from "./components/HomeownerView";
import Error from "./components/Error";
import Carousel2 from "./components/Carousel2";
import Settings from "./components/Settings";
import SignUp from "./components/SignUp";
import SignIn from "./components/Login";
import Gallery from "./components/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/landlords",
    element: <Navigate to="/landlords/dashboard" />,
  },
  {
    path: "/landlords/dashboard",
    element: <HomeownerView />,
  },
  {
    path: "/testform",
    element: <Carousel2 />,
  },
  ...PropertyList.map((item) => ({
    path: `/properties/${item.route}`,
    element: <PropertyView id={item.id} />,
  })),
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <Error errorCode={404} />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  // {
  //   path: "/gallery",
  //   element: <Gallery />,
  // },
]);

interface RootProps {
  lightTheme?: any,
  darkTheme?: any,
}

function Root({ lightTheme, darkTheme }: RootProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
  );
}

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Ubuntu",
    fontWeightMedium: 600,
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  typography: {
    fontFamily: "Ubuntu",
    fontWeightMedium: 600,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Root lightTheme={lightTheme} darkTheme={darkTheme} />
);

reportWebVitals();
