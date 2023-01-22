import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PropertyList } from "./global/data";
import PropertyView from "./components/PropertyView";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import HomeownerView from "./components/HomeownerView";
import Error from "./components/Error";
import TestForm from "./components/TestForm";
import Carousel2 from "./components/Carousel2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homeowners/dashboard",
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
    path: "*",
    element: <Error errorCode={404} />,
  },
]);

let lightTheme = createTheme({
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={lightTheme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
