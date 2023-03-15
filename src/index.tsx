import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { PropertyList } from "./global/data";
import PropertyView from "./components/PropertyView";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeownerView from "./components/HomeownerView";
import Error from "./components/Error";
import Settings from "./components/Settings";
import SignUp from "./components/SignUp";
import SignIn from "./components/Login";
import Gallery from "./components/Gallery";
import Tools from "./components/Tools";
import { ToolList } from "./global/data";
import ToolView from "./components/ToolView";
import TestServer from "./components/TestServer";
import CallUserInfo from "./components/CallUserInfo";
import Solutions from "./components/Solutions";
import SignUpTest from "./components/SignUpTest";

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
    path: "/properties",
    element: <Gallery data={PropertyList} showNav />,
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
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/tools",
    element: <Tools />,
  },
  ...ToolList.map((item) => ({
    path: `/tools/${item.cat}/${item.route}`,
    element: <ToolView component={item.component} title={item.title} />,
  })),
  {
    path: "/test",
    element: <TestServer />,
  },
  {
    path: "/user-info",
    element: <CallUserInfo />,
  },
]);

interface RootProps {
  lightTheme?: any;
  darkTheme?: any;
}

function Root({ lightTheme, darkTheme }: RootProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "light" : "dark"));
  // };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
  );
}

let lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Root lightTheme={lightTheme} darkTheme={darkTheme} />
);

reportWebVitals();
