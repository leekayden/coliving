import * as React from "react";
import { useLocation } from "react-router-dom";
import { AppName } from "../global/definitions";

type UrlParam = {
  name: string;
  value: string;
  componentToShow?: () => JSX.Element;
};

type Options = {
  title?: string;
  trackPageView?: boolean;
  urlParams?: UrlParam[];
};

export function usePageEffect(options?: Options, deps?: React.DependencyList) {
  const location = useLocation();
  const searchRef = React.useRef<HTMLInputElement>(null);

  // Once the page component was rendered, update the HTML document's title
  React.useEffect(() => {
    const previousTitle = document.title;

    document.title =
      location.pathname === "/"
        ? options?.title ?? AppName
        : options?.title
        ? `${options.title} | ${AppName}`
        : AppName;

    return function () {
      document.title = previousTitle;
    };
  }, deps ?? []);

  // Update the search bar based on the "search" URL parameter
  React.useEffect(() => {
    if (searchRef.current && location.search.startsWith("?search=")) {
      searchRef.current.value = location.search.substring(8);
    }
  }, [location.search]);

  // Send "page view" event to Google Analytics
  React.useEffect(() => {
    if (!(options?.trackPageView === false)) {
      // Send the "page view" event to Google Analytics
    }
  }, [location.pathname]);
}