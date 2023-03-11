// import { getAnalytics, logEvent } from "firebase/analytics";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { AppName } from "../global/definitions";

type UrlParam = {
  name: string;
  value: string;
  componentToShow: () => JSX.Element;
};

type Options = {
  title?: string;
  trackPageView?: boolean;
  urlParams?: UrlParam[];
};

export function usePageEffect(options?: Options, deps?: React.DependencyList) {
  const location = useLocation();

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

  // Render the appropriate component based on the URL parameters
  React.useEffect(() => {
    if (!(options?.trackPageView === false)) {
      // logEvent(getAnalytics(), "page_view", {
      //   page_title: options?.title ?? APP_NAME,
      //   page_path: `${location.pathname}${location.search}`,
      // });
      // console.warn("Not supported: trackPageView")

      if (options?.urlParams) {
        const param = options.urlParams.find(
          (p) => p.name === "show" && p.value === location.search.substr(6)
        );
        if (param?.componentToShow) {
          // Render the specified component
          param.componentToShow();
        }
      }
    }
  }, [location.search]);

  // Send "page view" event to Google Analytics
  React.useEffect(() => {
    if (!(options?.trackPageView === false)) {
      // Send the "page view" event to Google Analytics
    }
  }, [location.pathname]);
}
