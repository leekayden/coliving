import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { PropertyList } from "./global/data";
import PropertyView from "./components/PropertyView";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeownerView from "./components/HomeownerView";
import Error from "./components/Error";
import Settings from "./components/Settings";
import SignUp from "./components/SignUp";
import SignIn from "./components/Login";
import Gallery from "./components/Gallery";
import Blog from "./components/blog/Blog";

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
  {
    path: "/properties",
    element: <Gallery data={PropertyList} showNav />,
  },
  {
    path: "/solutions",
    element: <Blog />,
  },
]);

interface RootProps {
  lightTheme?: any,
  darkTheme?: any,
}

function Root({ lightTheme, darkTheme }: RootProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  console.log(theme)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "light" : "dark"));
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
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Root lightTheme={lightTheme} darkTheme={darkTheme} />
);

reportWebVitals();
